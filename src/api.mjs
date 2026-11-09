export function validate(data,now=Date.now()){
 const errors={};const d={};for(const k of ['name','email','phone','city','product','type','date','message'])d[k]=typeof data[k]==='string'?data[k].trim():'';
 if(!d.name||d.name.length>80)errors.name='Enter a name of up to 80 characters.';
 if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)||d.email.length>160)errors.email='Enter a valid email address.';
 d.phone=d.phone.replace(/[\s()-]/g,'');if(!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(d.phone))errors.phone='Enter a valid Indian mobile number.';
 if(!d.city||d.city.length>80)errors.city='Enter a city of up to 80 characters.';
 if(!['core','secure','glow','vision','all'].includes(d.product))errors.product='Choose a product.';
 if(!['Product information','Consultation request','Installation enquiry','General enquiry'].includes(d.type))errors.type='Choose an enquiry type.';
 const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Asia/Kolkata',year:'numeric',month:'2-digit',day:'2-digit'}).format(now);
 if(d.date&&(!/^\d{4}-\d{2}-\d{2}$/.test(d.date)||!Number.isFinite(Date.parse(d.date))||new Date(d.date).toISOString().slice(0,10)!==d.date||d.date<today))errors.date='Choose a valid date today or later.';
 if(!d.message||d.message.length>2000)errors.message='Enter a message of up to 2,000 characters.';
 if(data.consent!==true)errors.consent='Consent is required.';
 return {errors,clean:{...d,consent:true,attribution:Object.fromEntries(['utm_source','utm_medium','utm_campaign','utm_content','utm_term'].filter(k=>typeof data.attribution?.[k]==='string').map(k=>[k,data.attribution[k].slice(0,150)]))}};
}
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});
export async function submit(request,bucket){
 if(request.method!=='POST')return json({message:'Method not allowed.'},405);
 if(request.headers.get('origin')&&request.headers.get('origin')!==new URL(request.url).origin)return json({message:'Invalid request origin.'},403);
 if(!request.headers.get('content-type')?.includes('application/json'))return json({message:'Send a JSON request.'},415);
 if(Number(request.headers.get('content-length'))>12000)return json({message:'Request too large.'},413);
 let data;try{const body=await request.text();if(body.length>12000)return json({message:'Request too large.'},413);data=JSON.parse(body);if(!data||typeof data!=='object'||Array.isArray(data))throw Error()}catch{return json({message:'Invalid request.'},400)}
 if(data.website)return json({message:'Submission rejected. Please leave the website field empty.'},400);
 if(!Number.isFinite(data.started)||Date.now()-data.started<1500||data.started>Date.now())return json({message:'Please take a moment to complete the form and retry.'},429);
 if(!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(data.submissionId||''))return json({message:'Invalid submission reference. Refresh and retry.'},400);
 const {errors,clean}=validate(data);if(Object.keys(errors).length)return json({message:'Please check the highlighted fields.',errors},422);
 if(!bucket)return json({message:'Enquiry storage is not configured on this deployment. No information has been saved. Please use the local demonstration or contact the project owner.'},503);
 const key='enquiries/'+data.submissionId+'.json';const reference='VH-'+data.submissionId.slice(0,8).toUpperCase();
 try{const existing=await bucket.get(key);if(existing)return json({reference,duplicate:true});await bucket.put(key,JSON.stringify({...clean,reference,submittedAt:new Date().toISOString()}),{httpMetadata:{contentType:'application/json'}});return json({reference},201)}catch{return json({message:'Storage is temporarily unavailable. Retry safely using this form.'},503)}
}

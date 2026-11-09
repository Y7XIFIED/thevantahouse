import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {gsap} from 'gsap';
export function createSpatial(host){
 let renderer;try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});}catch{document.querySelector('.model-instructions').style.display='none';return}
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;renderer.setClearColor(0x151b20,0);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
 host.querySelector('.model-fallback').hidden=true;host.appendChild(renderer.domElement);renderer.domElement.setAttribute('aria-hidden','true');
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(36,1,.1,100);camera.position.set(15,15,18);
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.enableZoom=false;controls.enablePan=false;controls.minPolarAngle=.35;controls.maxPolarAngle=1.25;controls.target.set(0,.3,0);
 const model=new THREE.Group();scene.add(model);model.rotation.y=-.2;
 const mats={stone:new THREE.MeshStandardMaterial({color:0xbac0c3,roughness:.8}),wall:new THREE.MeshStandardMaterial({color:0xd5d9db,roughness:.85}),dark:new THREE.MeshStandardMaterial({color:0x343d44,roughness:.6,metalness:.25}),silver:new THREE.MeshStandardMaterial({color:0x949fa7,roughness:.3,metalness:.7}),soft:new THREE.MeshStandardMaterial({color:0xe4e5e1,roughness:1}),glass:new THREE.MeshPhysicalMaterial({color:0xb9c9d2,transparent:true,opacity:.22,roughness:.1,metalness:.15}),light:new THREE.MeshStandardMaterial({color:0xffffff,emissive:0xe5ecf0,emissiveIntensity:1.5})};
 function box(w,h,d,x,y,z,mat='stone',rounded=false){const geo=rounded?new RoundedBoxGeometry(w,h,d,3,.08):new THREE.BoxGeometry(w,h,d);const m=new THREE.Mesh(geo,mats[mat]);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;model.add(m);return m}
 box(13.2,.4,9.2,0,-.2,0,'dark',true);box(12.8,.12,8.8,0,.06,0,'stone');
 // A cutaway architectural model: living space, bedroom, entrance and courtyard.
 box(12.8,1.9,.14,0,1.05,-4.3,'wall');box(.14,1.9,8.6,-6.3,1.05,0,'wall');box(.14,1.1,5.2,6.3,.65,-1.7,'wall');
 box(.12,1.8,4.8,1.8,1,-1.85,'wall');box(4.5,1.8,.12,4.05,1,.55,'wall');box(2.1,1.8,.12,-5.2,1,1.7,'wall');
 box(7.7,.035,5.4,-2.2,.145,-1.3,'soft');box(3.8,.035,4.2,4.0,.145,-1.8,'soft');
 for(let x=-5.6;x<6;x+=1.1){box(.012,.008,8.4,x,.127,0,'dark')}
 // Low sculptural sofa, separate cushions and a stone coffee table.
 box(4.7,.48,1.4,-2.7,.4,-2.6,'soft',true);box(4.7,.75,.3,-2.7,.8,-3.12,'soft',true);box(.3,.65,1.4,-5,.7,-2.6,'soft',true);box(.3,.65,1.4,-.4,.7,-2.6,'soft',true);
 for(const x of [-4.1,-2.7,-1.3])box(1.3,.15,1.1,x,.74,-2.47,'soft',true);
 box(2.6,.38,1.15,-2.7,.4,-.15,'dark',true);box(3.5,.02,3.2,-2.7,.16,-.5,'silver',true);
 // Bedroom and bedside plinths.
 box(2.4,.35,3.3,4.1,.34,-1.6,'dark',true);box(2.3,.3,3.2,4.1,.66,-1.6,'soft',true);box(2.4,.9,.18,4.1,.8,-3.25,'silver',true);box(.9,.13,.6,3.5,.87,-2.7,'wall',true);box(.9,.13,.6,4.7,.87,-2.7,'wall',true);box(.55,.5,.6,2.6,.39,-2.7,'dark');
 // The low entrance plane and slim glazing preserve the model's sculptural silhouette.
 box(3.6,.025,2.5,3.8,.17,2.4,'dark');box(.1,1.6,2.5,6.25,.95,2.4,'glass');box(.08,1.9,4.8,.9,1,-1.85,'glass');
 const core=box(.1,.7,.9,-6.18,1.3,-.7,'dark',true);box(.02,.53,.72,-6.11,1.3,-.7,'silver');
 const secure=box(.2,1.55,.65,-5.1,.93,2.85,'dark',true);box(.4,.08,.09,-4.9,1,2.93,'silver');
 const glowLights=[];for(const [x,z] of [[-3.8,-1.5],[-1.5,-1.5],[4,-1.5]]){const g=new THREE.Mesh(new THREE.CylinderGeometry(.16,.2,.12,32),mats.light);g.position.set(x,2.15,z);model.add(g);glowLights.push(g)}
 box(.03,.025,7.8,-6.18,1.9,0,'light');box(7.2,.025,.03,-2.55,1.9,-4.2,'light');
 box(.3,.4,.3,5.8,1.55,-3.9,'soft',true);box(.31,.17,.08,5.8,1.6,-3.7,'dark',true);
 // Matte planter and silver foliage: an architectural accent, not another product.
 const planter=new THREE.Mesh(new THREE.CylinderGeometry(.38,.28,.55,32),mats.dark);planter.position.set(-4.8,.42,3.2);model.add(planter);
 for(let i=0;i<9;i++){const leaf=new THREE.Mesh(new THREE.SphereGeometry(.23,12,8),mats.silver);leaf.scale.set(.45,2.2,.5);leaf.position.set(-4.8+Math.sin(i)*.24,1.05+(i%3)*.13,3.2+Math.cos(i)*.24);leaf.rotation.z=(i-4)*.2;model.add(leaf)}
 const ambient=new THREE.HemisphereLight(0xe7efff,0x2c3338,2);scene.add(ambient);const sun=new THREE.DirectionalLight(0xffffff,3.5);sun.position.set(-7,15,10);sun.castShadow=true;sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-12;sun.shadow.camera.right=12;sun.shadow.camera.top=12;sun.shadow.camera.bottom=-12;sun.shadow.normalBias=.03;scene.add(sun);
 const rim=new THREE.DirectionalLight(0x94aec4,2);rim.position.set(5,5,-8);scene.add(rim);
 const grid=new THREE.GridHelper(32,32,0x34444f,0x26343e);grid.position.y=-.6;scene.add(grid);
 const markers={};const positions={core:[-5.5,2.15,-.7],secure:[-5.1,2.2,2.85],glow:[-1.5,2.9,-1.5],vision:[5.8,2.35,-3.9]};
 for(const [id,pos] of Object.entries(positions)){const group=new THREE.Group();group.position.set(...pos);const ring=new THREE.Mesh(new THREE.TorusGeometry(.23,.025,8,40),new THREE.MeshBasicMaterial({color:0xb6c6d1}));ring.rotation.x=-Math.PI/2;group.add(ring);const point=new THREE.Mesh(new THREE.SphereGeometry(.065,12,12),new THREE.MeshBasicMaterial({color:0xffffff}));group.add(point);const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),new THREE.Vector3(0,-.7,0)]),new THREE.LineBasicMaterial({color:0x8eabbf,transparent:true,opacity:.6}));group.add(line);group.userData.id=id;model.add(group);markers[id]=group;}
 let selected='core';const pulses=[];for(const id of ['secure','glow','vision']){const a=new THREE.Vector3(...positions.core),b=new THREE.Vector3(...positions[id]);a.y=.2;b.y=.2;const mid=a.clone().lerp(b,.5);mid.y=.2;mid.z+=.7;const curve=new THREE.QuadraticBezierCurve3(a,mid,b);const line=new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(60)),new THREE.LineBasicMaterial({color:0x9cb0bf,transparent:true,opacity:.45}));model.add(line);const point=new THREE.Mesh(new THREE.SphereGeometry(.035,8,8),mats.light);model.add(point);pulses.push({point,curve});}
 let active=true;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let now=0;
 const observer=new IntersectionObserver(entries=>{active=entries[0].isIntersecting});observer.observe(host);
 function resize(){const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();if(w<600)camera.position.set(18,21,25);renderer.render(scene,camera)}new ResizeObserver(resize).observe(host);resize();
 function select(id){selected=id;for(const [key,g] of Object.entries(markers)){g.children[0].material.color.set(key===id?0xffffff:0x6d8495);g.scale.setScalar(key===id?1.35:1)}glowLights.forEach(g=>g.material.emissiveIntensity=id==='glow'?2.8:1.5);renderer.render(scene,camera)}
 document.addEventListener('vanta:system',e=>select(e.detail));select('core');
 for(const direction of [-1,1]){const button=document.createElement('button');button.textContent=direction===-1?'← Rotate':'Rotate →';button.setAttribute('aria-label',direction===-1?'Rotate home left':'Rotate home right');button.addEventListener('click',()=>{if(reduced.matches)model.rotation.y+=direction*.4;else gsap.to(model.rotation,{y:model.rotation.y+direction*.4,duration:.8,ease:'power2.inOut'});renderer.render(scene,camera)});document.querySelector('.model-instructions').insertBefore(button,document.querySelector('#reset-view'));}
 document.querySelector('#reset-view').addEventListener('click',()=>{const p=host.clientWidth<600?[18,21,25]:[15,15,18];if(reduced.matches){model.rotation.y=-.2;camera.position.set(...p);controls.target.set(0,.3,0);controls.update()}else{gsap.to(model.rotation,{y:-.2,duration:1.3});gsap.to(camera.position,{x:p[0],y:p[1],z:p[2],duration:1.3,ease:'power3.inOut'});gsap.to(controls.target,{x:0,y:.3,z:0,duration:1.3})}});
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();let down;
 renderer.domElement.addEventListener('pointerdown',e=>down=[e.clientX,e.clientY]);renderer.domElement.addEventListener('pointerup',e=>{if(!down||Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)return;const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(Object.values(markers),true);if(hits.length){let o=hits[0].object;while(o&&!o.userData.id)o=o.parent;if(o)document.querySelector('[data-system="'+o.userData.id+'"]').click()}});
 renderer.setAnimationLoop(()=>{if(!active||document.hidden)return;controls.update();if(!reduced.matches){now+=.004;pulses.forEach(({point,curve},i)=>point.position.copy(curve.getPoint((now+i*.3)%1)));markers[selected].children[0].rotation.z=now;}renderer.render(scene,camera)});
 renderer.domElement.addEventListener('webglcontextlost',()=>{renderer.setAnimationLoop(null);host.querySelector('.model-fallback').hidden=false;renderer.domElement.hidden=true;document.querySelector('.model-instructions').hidden=true});
}

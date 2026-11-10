import { submit } from '../src/api.mjs';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import path from 'node:path';

// Storage adapter: uses /tmp on serverless or .local locally
const directory = process.env.VERCEL ? '/tmp/enquiries' : path.resolve('.local/enquiries');

const bucket = {
  async get(key) {
    try {
      const filename = path.basename(key);
      return await readFile(path.join(directory, filename), 'utf8');
    } catch (e) {
      if (e.code === 'ENOENT') return null;
      throw e;
    }
  },
  async put(key, value) {
    await mkdir(directory, { recursive: true });
    const filename = path.basename(key);
    const file = path.join(directory, filename);
    await writeFile(file, value, { flag: 'w' });
  }
};

export default async function handler(req, res) {
  // Construct standard Fetch Request from Node/Vercel IncomingMessage
  const proto = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
  const url = `${proto}://${host}${req.url}`;

  // If Vercel already parsed the body as JSON object, re-stringify for submit()
  let body;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    if (typeof req.body === 'object' && req.body !== null) {
      body = JSON.stringify(req.body);
    } else if (typeof req.body === 'string') {
      body = req.body;
    } else {
      // Buffer chunks if unparsed
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      body = Buffer.concat(chunks).toString('utf8');
    }
  }

  const standardHeaders = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (Array.isArray(val)) {
      val.forEach(v => standardHeaders.append(key, v));
    } else if (val !== undefined) {
      standardHeaders.set(key, val);
    }
  }

  const standardRequest = new Request(url, {
    method: req.method,
    headers: standardHeaders,
    body
  });

  const response = await submit(standardRequest, bucket);
  
  res.status(response.status);
  response.headers.forEach((v, k) => res.setHeader(k, v));
  const data = await response.text();
  res.send(data);
}

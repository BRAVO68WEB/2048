if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return a[s]||(e=new Promise(async e=>{if("document"in self){const a=document.createElement("script");a.src=s,document.head.appendChild(a),a.onload=e}else importScripts(s),e()})),e.then(()=>{if(!a[s])throw new Error(`Module ${s} didn’t register its module`);return a[s]})},e=(e,a)=>{Promise.all(e.map(s)).then(s=>a(1===s.length?s[0]:s))},a={require:Promise.resolve(e)};self.define=(e,i,n)=>{a[e]||(a[e]=Promise.resolve().then(()=>{let a={};const c={uri:location.origin+e.slice(1)};return Promise.all(i.map(e=>{switch(e){case"exports":return a;case"module":return c;default:return s(e)}})).then(s=>{const e=n(...s);return a.default||(a.default=e),a})}))}}define("./sw.js",["./workbox-d4a0109b"],(function(s){"use strict";self.addEventListener("message",s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()}),s.precacheAndRoute([{url:"assets/dist/scripts.dev.js",revision:"59b86fdc0abd80341ed64c24ead95a29"},{url:"assets/favicons/android-icon-144x144.png",revision:"aaca9cc01c2829812f1c1507ea53d4aa"},{url:"assets/favicons/android-icon-192x192.png",revision:"134c3b1641e12854e6af8a09d03e2a0d"},{url:"assets/favicons/android-icon-36x36.png",revision:"c1f6f9cbbc98e0d7d892c4e843cd9050"},{url:"assets/favicons/android-icon-48x48.png",revision:"00ff50edeb4dfffc0eb7213d06093fbd"},{url:"assets/favicons/android-icon-72x72.png",revision:"5c27a1e2a5d57aba868ef0a077ac3fb2"},{url:"assets/favicons/android-icon-96x96.png",revision:"759fdbfd530cdb9705707edc5e2ddd7d"},{url:"assets/favicons/apple-icon-114x114.png",revision:"584a359c5fa4accf1986b39d77a1eb50"},{url:"assets/favicons/apple-icon-120x120.png",revision:"062955960c9bf52ff47d942a666ec5b3"},{url:"assets/favicons/apple-icon-144x144.png",revision:"aaca9cc01c2829812f1c1507ea53d4aa"},{url:"assets/favicons/apple-icon-152x152.png",revision:"5c9b896b4f4d26586138cd7979af436f"},{url:"assets/favicons/apple-icon-180x180.png",revision:"b75b455cadd12a203d77637993653684"},{url:"assets/favicons/apple-icon-57x57.png",revision:"5e895b5d11ba8f06d9b8205ff9f40cfe"},{url:"assets/favicons/apple-icon-60x60.png",revision:"0f932a245d7393998320678efa829bb8"},{url:"assets/favicons/apple-icon-72x72.png",revision:"5c27a1e2a5d57aba868ef0a077ac3fb2"},{url:"assets/favicons/apple-icon-76x76.png",revision:"2a198bdf3eb8e6a4ba4def94d37b254d"},{url:"assets/favicons/apple-icon-precomposed.png",revision:"cdd53f0cd03a87f963e55ad87a22a4f9"},{url:"assets/favicons/apple-icon.png",revision:"cdd53f0cd03a87f963e55ad87a22a4f9"},{url:"assets/favicons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"assets/favicons/favicon-16x16.png",revision:"96497175f3bbb06ead496eaeaa5036a9"},{url:"assets/favicons/favicon-32x32.png",revision:"886158202f202199775c9fb742f14e7f"},{url:"assets/favicons/favicon-96x96.png",revision:"759fdbfd530cdb9705707edc5e2ddd7d"},{url:"assets/favicons/favicon.ico",revision:"cf3b2d4a76fd3059c98d4fa182877df8"},{url:"assets/favicons/manifest.json",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"assets/favicons/ms-icon-144x144.png",revision:"aaca9cc01c2829812f1c1507ea53d4aa"},{url:"assets/favicons/ms-icon-150x150.png",revision:"42310abb4c82ed65ed7864b2928fa720"},{url:"assets/favicons/ms-icon-310x310.png",revision:"ad68d8bb4d2307162980fe6bef3fa987"},{url:"assets/favicons/ms-icon-70x70.png",revision:"8cec3bacd3249b685c3996a66c42bd55"},{url:"assets/scripts.js",revision:"a8dd549667ba94bda424a2eab026d92a"},{url:"assets/style.css",revision:"9ffb29998ae8373ce3d2a09e441bfe57"},{url:"index.html",revision:"eb4fcefc9d309e0ec3cdfdbc41784946"},{url:"manifest.webmanifest",revision:"8c4305830d1135298ddbbcba9c9a086a"},{url:"old-service-worker.js",revision:"1124026ba959a7de811140df375c865d"},{url:"README.md",revision:"4b340fb6ffd4fcd1e6705f372d1058c9"}],{})}));
//# sourceMappingURL=sw.js.map

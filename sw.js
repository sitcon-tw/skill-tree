if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"4f441767db46aaeae8e8a7944c7ad634"},{url:"/_next/static/WTsFzn0vDfY1psfWXhEZ-/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/WTsFzn0vDfY1psfWXhEZ-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/769-ab0c98c0e2278993.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/905-af1cd8d02f8a5358.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/934-34ec853782828244.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/app/(app)/layout-5c15e8cf4001dc36.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/app/(app)/scanner/page-db038eb276c0b427.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/app/(app)/tree/page-caae37988684185f.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/app/layout-21a0eb30e3471902.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/app/page-8e5c44669967e99c.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/bce60fc1-0776f4e199db6dc3.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/main-73c4498c69427c2c.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/main-app-066595133644a3f5.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-11836454546db027.js",revision:"WTsFzn0vDfY1psfWXhEZ-"},{url:"/_next/static/css/9aa5193e38c7d117.css",revision:"9aa5193e38c7d117"},{url:"/imgs/guide/a-1.png",revision:"dba1e2361db82fc841dd4b0c4b3672a5"},{url:"/imgs/guide/a-2.png",revision:"b60c41a9e27226049903587e5a7b16bc"},{url:"/imgs/guide/a-3.png",revision:"98bb141cbdf94f9474aa49f576d9347f"},{url:"/imgs/guide/i-1.png",revision:"b77b26fd46a7be0a3ed2e128377ed52c"},{url:"/imgs/guide/i-2.png",revision:"320091ff79aaa6b8f1365442ccd2726b"},{url:"/imgs/guide/i-3.png",revision:"e5e6bcceaa1c9241da4d9f48d657a98c"},{url:"/imgs/tree/bg.svg",revision:"8b3c0ef3bd7e71e69473333c0dc81141"},{url:"/imgs/tree/plants1.svg",revision:"a4ce33391b47b9496cce7de98d9a31a7"},{url:"/imgs/tree/plants2.svg",revision:"5812ce2be71c12dd1924d76689a10ca0"},{url:"/imgs/tree/satellite.svg",revision:"d6b961b43e89d515fb5b4a530de546be"},{url:"/imgs/tree/star1.svg",revision:"0ecf9481f98795929a5c4a73268592c4"},{url:"/imgs/tree/star2.svg",revision:"26202990495493f5710dae315b76702d"},{url:"/manifest.json",revision:"8605bbdccb446611bdfb3912a44d697a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
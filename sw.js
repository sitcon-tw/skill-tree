if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const d=e=>s(e,c),f={module:{uri:c},exports:r,require:d};a[c]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0c89ba10084feba0acea9cdd8535b150"},{url:"/_next/static/1hyvazDlWo71EpmJ90hl-/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/1hyvazDlWo71EpmJ90hl-/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/298-d76d01defdcfa933.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/3871fbcd-42c4cec19101e60a.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/769-fb72eed1c19a0fb8.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/890-3c234d6d4a36a8ea.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/934-a0e5e92b6bca90e9.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/app/(app)/layout-a160f41305932ee7.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/app/(app)/scanner/page-167328880578799c.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/app/(app)/tree/page-a48da12b097181e5.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/app/layout-724b82476a0ec0c0.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/app/page-c4628404ceb70cbb.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/app/scan/page-a2609c48d3b77823.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/bce60fc1-a01d16c8c4535d84.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/main-13c6abe82092ffeb.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/main-app-066595133644a3f5.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-c4e13090fed5a3ef.js",revision:"1hyvazDlWo71EpmJ90hl-"},{url:"/_next/static/css/431aa2d73d3cbc45.css",revision:"431aa2d73d3cbc45"},{url:"/android/android-launchericon-144-144.png",revision:"59511fdd12f25ddaeeac416da2d39949"},{url:"/android/android-launchericon-192-192.png",revision:"7628605469f20cb34664473a502d464c"},{url:"/android/android-launchericon-48-48.png",revision:"48f8dda2af3ae77fd39a40574b16942e"},{url:"/android/android-launchericon-512-512.png",revision:"1edd9c060c5660095158e511e3adfd5d"},{url:"/android/android-launchericon-72-72.png",revision:"36c66573b1a434a351c2a59f7628a6ed"},{url:"/android/android-launchericon-96-96.png",revision:"dc4459b226635242229b2617fbeea98e"},{url:"/icon.png",revision:"cac61f72f091271c10c37db50b12a8e1"},{url:"/imgs/bottom-sheet-1.svg",revision:"85dc12f012906680d44f33bea1ec49b0"},{url:"/imgs/bottom-sheet-2.svg",revision:"c2df7ba1504a6b686c6bf058777d223f"},{url:"/imgs/guide/a-1.png",revision:"dba1e2361db82fc841dd4b0c4b3672a5"},{url:"/imgs/guide/a-2.png",revision:"b60c41a9e27226049903587e5a7b16bc"},{url:"/imgs/guide/a-3.png",revision:"98bb141cbdf94f9474aa49f576d9347f"},{url:"/imgs/guide/i-1.png",revision:"b77b26fd46a7be0a3ed2e128377ed52c"},{url:"/imgs/guide/i-2.png",revision:"320091ff79aaa6b8f1365442ccd2726b"},{url:"/imgs/guide/i-3.png",revision:"e5e6bcceaa1c9241da4d9f48d657a98c"},{url:"/imgs/stamp/0102d8c8.png",revision:"b78016545727c13518209e4a0d78a695"},{url:"/imgs/stamp/010f630c.png",revision:"29be5b3744748d2f2af64ac0f1578298"},{url:"/imgs/stamp/01e998d6.png",revision:"1ca3eb3516781ec31565c00f19e7700c"},{url:"/imgs/stamp/0295158f.png",revision:"4e8c890a5fddd2656a4e7a6f7919a050"},{url:"/imgs/stamp/09c9307f.png",revision:"6dd20d2c1972e13897839ba2b992c9b3"},{url:"/imgs/stamp/0a555393.png",revision:"26440e1347be0844b014012154788bf2"},{url:"/imgs/stamp/119ced3e.png",revision:"28b76b375ae40abdb2bb53ba6145eb36"},{url:"/imgs/stamp/1346c675.png",revision:"b727c545fb8698ba293d7d5102bf5254"},{url:"/imgs/stamp/19b221c5.png",revision:"eeaf1c97d8920a1271d92dc847b33ba0"},{url:"/imgs/stamp/1b5910ff.png",revision:"f27ff9267fcc3e39dcf6578e0655876c"},{url:"/imgs/stamp/2045d742.png",revision:"8cab74e4e02cdeadc27ccb912316825f"},{url:"/imgs/stamp/209663b3.png",revision:"c1c4e087d1c2e5a085c2d4fadf224195"},{url:"/imgs/stamp/238b5be5.png",revision:"6bbe1985b781959b51f80d541a41ae30"},{url:"/imgs/stamp/272b184e.png",revision:"2018b24b6e62c2f3d70349c924d8f8c9"},{url:"/imgs/stamp/3476d176.png",revision:"78080e5c695fea97a486c5c2bb58ed5e"},{url:"/imgs/stamp/38a3573c.png",revision:"64eb4a1a3a00b81048c548745067deda"},{url:"/imgs/stamp/393f5934.png",revision:"542cb34aa43cedae2840724f979b6b85"},{url:"/imgs/stamp/39465de8.png",revision:"5eae74dbe4da306998938e12cdb8d270"},{url:"/imgs/stamp/420400f7.png",revision:"9766827a806d7005c01b420c64945f31"},{url:"/imgs/stamp/440120dc.png",revision:"fddcec2297f732aea0c3665f1d29920e"},{url:"/imgs/stamp/4c594866.png",revision:"b957f8fa04000d881b43592e31c339ea"},{url:"/imgs/stamp/5525f744.png",revision:"567d9ac65bcbe1e75aa0b410f1923e45"},{url:"/imgs/stamp/55c5d4d6.png",revision:"92ef0b85da86cd904d5681b71519385d"},{url:"/imgs/stamp/5ca4cae3.png",revision:"5be9f16815b1e545af22278e502d3865"},{url:"/imgs/stamp/5dd73d64.png",revision:"48a3299318484756e6a207ddc63b36d5"},{url:"/imgs/stamp/5f3316ba.png",revision:"94b9dfe77680ee23af698e362189f61e"},{url:"/imgs/stamp/5fc2743a.png",revision:"edab9c235434873a388cef9313c306fd"},{url:"/imgs/stamp/621e25a3.png",revision:"212877435a688ed1b3a51b80cb3b877c"},{url:"/imgs/stamp/699ef4f7.png",revision:"0f4daefb65ad282596ccc2ac8c496ffe"},{url:"/imgs/stamp/6a09f58d.png",revision:"2b1360a83c03fe01a664980f6a09ba58"},{url:"/imgs/stamp/6b14026d.png",revision:"10db071f46929ef51301a75cbc82cc92"},{url:"/imgs/stamp/6b50dfe7.png",revision:"393e2671aa5b55a7f10197619c7a9519"},{url:"/imgs/stamp/722e97fd.png",revision:"167bd3a1b881bf52ee577a2ef5c4b10e"},{url:"/imgs/stamp/72781497.png",revision:"81f25a1385f66871c22418b8ea6508c1"},{url:"/imgs/stamp/73aabde0.png",revision:"db649d780e740b0bd8695748fcc4db8d"},{url:"/imgs/stamp/7c67eb91.png",revision:"ed4a66bd22cfa17a4c7b760fdf12d7cb"},{url:"/imgs/stamp/7f54d9e3.png",revision:"6aa3329c4f2d6bd6333ec52c8718df4e"},{url:"/imgs/stamp/7fd9ca99.png",revision:"683cf6bbadd296e6ce0e7c926b208882"},{url:"/imgs/stamp/8626c7ad.png",revision:"d6c6fdd1281eeebdeae542d41b203d7e"},{url:"/imgs/stamp/86b00f77.png",revision:"5c62f1ce97e22ab070995e188c0491ca"},{url:"/imgs/stamp/86ea5e0b.png",revision:"a7d444b9628c112b08c29ca3bc9855f9"},{url:"/imgs/stamp/873aa6a1.png",revision:"6c624f81ec2aa9fde90d4b4c666b6156"},{url:"/imgs/stamp/889a6aab.png",revision:"c90d159f42c373d6212974717a59fa88"},{url:"/imgs/stamp/8b65bc3f.png",revision:"2f4df96b103bd19965ab4e2bcd032d21"},{url:"/imgs/stamp/8ba12eff.png",revision:"9638c76c15aca17feb78fabeac0123bd"},{url:"/imgs/stamp/9192a7b2.png",revision:"ff373238281cdeb4a4b225bb3fc2760a"},{url:"/imgs/stamp/92fe0ac9.png",revision:"0244d0878d8b195f0623560d2af42192"},{url:"/imgs/stamp/93e0b609.png",revision:"eb6779aadfc77ce19a182bbc96976790"},{url:"/imgs/stamp/94de71b8.png",revision:"b9ec37d5d9e6426061c06fd52013749e"},{url:"/imgs/stamp/961174ca.png",revision:"e4c42718aeb5109a77b0d1b5aa79513e"},{url:"/imgs/stamp/9f17eba5.png",revision:"3ff229e8baf7f226962f28d207191354"},{url:"/imgs/stamp/a394be22.png",revision:"1517162cc9ffc6e351eedf0ed88394bf"},{url:"/imgs/stamp/a5c6adc4.png",revision:"5ea4b6befb5e6d6adb8b162b4a99090f"},{url:"/imgs/stamp/aa4661c4.png",revision:"1ab0fbb1a5553d90e924b26abfdafeef"},{url:"/imgs/stamp/ada1714c.png",revision:"75180fc26149bd607292a423a976d51b"},{url:"/imgs/stamp/b8cc6ec8.png",revision:"8115926dabf4916b0275587f5e0dc961"},{url:"/imgs/stamp/bb2b554a.png",revision:"f46619861128d2709abb4e542a34b9bc"},{url:"/imgs/stamp/c123f754.png",revision:"ec1b6a83f7c3653e8b0c0d88c9bc9f64"},{url:"/imgs/stamp/c12c9075.png",revision:"5b3bf2b6329788c0903d4b569bf379f4"},{url:"/imgs/stamp/camp.webp",revision:"ab9a8e99b398f4dc79c70dc73c7b2fc7"},{url:"/imgs/stamp/ce8fa3f8.png",revision:"5d0b2716aa631f237d4e7b28bd767db9"},{url:"/imgs/stamp/d96213a9.png",revision:"ff98ae12e2e501d8c89590d3d2f5623e"},{url:"/imgs/stamp/dcb4465a.png",revision:"df527248f3ba033d4fd07f292ff7bcb7"},{url:"/imgs/stamp/e62f9b9a.png",revision:"78933aaf32508515a04efe341ba3f229"},{url:"/imgs/stamp/e7e6da64.png",revision:"d9e7194679b351ac91af1aa56f06dd1e"},{url:"/imgs/stamp/eb099f1e.png",revision:"9364149134b509cf50c46e1ace1034ce"},{url:"/imgs/stamp/eb136e30.png",revision:"5570a17f26bde59812da87a022b9e387"},{url:"/imgs/stamp/ebafe939.png",revision:"a931b93a1cf21c99c36d41b886d8ac36"},{url:"/imgs/stamp/f05f9f96.png",revision:"9c8dffa6eb22ccc824cd9ac84c7021b9"},{url:"/imgs/stamp/f0d720f1.png",revision:"33a80f6edfd23bf1568ad1990c26464c"},{url:"/imgs/stamp/f106a32a.png",revision:"0064331649acf56f5a90ce6b63ffcf0d"},{url:"/imgs/stamp/f17fb282.png",revision:"e5912f4c892818ce697be92d368896fc"},{url:"/imgs/stamp/f6862586.png",revision:"f96c3eb86c70f1ff9f89652aa50e4f73"},{url:"/imgs/stamp/fbf1d903.png",revision:"c13385b57452dd6a9d4c2b4d836554e8"},{url:"/imgs/stamp/ffb6d444.png",revision:"4a2158efa3df892e3f543e3178c9e9b9"},{url:"/imgs/stamp/ffbe0eb7.png",revision:"8c9014e1ee7e9a629d4884dce137f2c3"},{url:"/imgs/tree/bg.svg",revision:"8b3c0ef3bd7e71e69473333c0dc81141"},{url:"/imgs/tree/plants1.svg",revision:"a4ce33391b47b9496cce7de98d9a31a7"},{url:"/imgs/tree/plants2.svg",revision:"5812ce2be71c12dd1924d76689a10ca0"},{url:"/imgs/tree/satellite.svg",revision:"d6b961b43e89d515fb5b4a530de546be"},{url:"/imgs/tree/star1.svg",revision:"0ecf9481f98795929a5c4a73268592c4"},{url:"/imgs/tree/star2.svg",revision:"26202990495493f5710dae315b76702d"},{url:"/ios/100.png",revision:"c3a756b44b61ceb91cdf25aef6975e81"},{url:"/ios/1024.png",revision:"9c5dfb26a671ace1f21ebd3b277e47b3"},{url:"/ios/114.png",revision:"84ed2aa8ea9869dd70af6836a106cdae"},{url:"/ios/120.png",revision:"4c36cedd6d87540260dc9a09f86e7098"},{url:"/ios/128.png",revision:"3a4a7f2e609b3f190f41b1020b8800a8"},{url:"/ios/144.png",revision:"59511fdd12f25ddaeeac416da2d39949"},{url:"/ios/152.png",revision:"74be39833a31790958fb4af349607b0e"},{url:"/ios/16.png",revision:"6122dd014a0d3a14de49153e00f6aeae"},{url:"/ios/167.png",revision:"58ac820a4f5b9d8e8720af30def64b07"},{url:"/ios/180.png",revision:"fc1b221bc950f1c445b3ee4c1f609c8e"},{url:"/ios/192.png",revision:"7628605469f20cb34664473a502d464c"},{url:"/ios/20.png",revision:"7f583f5c9fa4a97c4b9429b68aae6e57"},{url:"/ios/256.png",revision:"aab2e28c97354b09a3c3f5d975f7b866"},{url:"/ios/29.png",revision:"e3b2aa7607e064e2f5a09e78513dbde1"},{url:"/ios/32.png",revision:"d6a70b42dc098b229920e278dcd083e5"},{url:"/ios/40.png",revision:"170c16a4982f0d689e27ab225e19cf00"},{url:"/ios/50.png",revision:"c88452e8bd0c559847140ca0eabdeb30"},{url:"/ios/512.png",revision:"1edd9c060c5660095158e511e3adfd5d"},{url:"/ios/57.png",revision:"de617a554fc78e0b512c8eddf7d96147"},{url:"/ios/58.png",revision:"634ec32a752b466c26557e309aa8bb51"},{url:"/ios/60.png",revision:"a1d471aa0eeaefc40e24a0f488231ad5"},{url:"/ios/64.png",revision:"3e6dc01bfb419d5a59b4f1859b545c4f"},{url:"/ios/72.png",revision:"36c66573b1a434a351c2a59f7628a6ed"},{url:"/ios/76.png",revision:"d88c4f8360276fb4c0738e417fba59f6"},{url:"/ios/80.png",revision:"3ed12a378e36e0c3e662bc03a7a2656c"},{url:"/ios/87.png",revision:"fced46113ee464374905ec42a9bf0f6e"},{url:"/manifest.json",revision:"67e3590241d29eeb96031b37be4a64ae"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

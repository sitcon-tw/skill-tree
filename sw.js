if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const d=e=>s(e,c),f={module:{uri:c},exports:r,require:d};a[c]=Promise.all(i.map((e=>f[e]||d(e)))).then((e=>(n(...e),r)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"9a4615a9c43789d15205ca510fbbf3a3"},{url:"/_next/static/chunks/769-adfb2a5369e0fdc0.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/792-2c3c4c11a4bf2504.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/934-61e6bb43e0f27ada.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/app/(app)/layout-a160f41305932ee7.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/app/(app)/scanner/page-db038eb276c0b427.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/app/(app)/tree/page-d54fcc7614814605.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/app/layout-817ce4e09f95efdc.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/app/page-138d0e284308cfef.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/bce60fc1-2569bf4376dae8c2.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/main-73c4498c69427c2c.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/main-app-066595133644a3f5.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/pages/_app-998b8fceeadee23e.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/pages/_error-e8b35f8a0cf92802.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-cb02613724529693.js",revision:"px7PNmawntLXPsX-USXq6"},{url:"/_next/static/css/d16fc25a0a34dbe1.css",revision:"d16fc25a0a34dbe1"},{url:"/_next/static/px7PNmawntLXPsX-USXq6/_buildManifest.js",revision:"b78f2f95f712fdbfd1149569fa52161f"},{url:"/_next/static/px7PNmawntLXPsX-USXq6/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android/android-launchericon-144-144.png",revision:"73243a3571d21cd77829ba3f355aa770"},{url:"/android/android-launchericon-192-192.png",revision:"68db53cc32c1a0787d5827ec92f1d99b"},{url:"/android/android-launchericon-48-48.png",revision:"09584129af404c6370dfbb28fb6e6f21"},{url:"/android/android-launchericon-512-512.png",revision:"a76e0fcfb4550f30970dcc5ec36fcf5a"},{url:"/android/android-launchericon-72-72.png",revision:"4686694f7bac921ae5f6739d488f4784"},{url:"/android/android-launchericon-96-96.png",revision:"3732f4f472a29929a2ffd932f5e97ace"},{url:"/icon.png",revision:"cac61f72f091271c10c37db50b12a8e1"},{url:"/imgs/bottom-sheet-1.svg",revision:"85dc12f012906680d44f33bea1ec49b0"},{url:"/imgs/bottom-sheet-2.svg",revision:"c2df7ba1504a6b686c6bf058777d223f"},{url:"/imgs/guide/a-1.png",revision:"dba1e2361db82fc841dd4b0c4b3672a5"},{url:"/imgs/guide/a-2.png",revision:"b60c41a9e27226049903587e5a7b16bc"},{url:"/imgs/guide/a-3.png",revision:"98bb141cbdf94f9474aa49f576d9347f"},{url:"/imgs/guide/i-1.png",revision:"b77b26fd46a7be0a3ed2e128377ed52c"},{url:"/imgs/guide/i-2.png",revision:"320091ff79aaa6b8f1365442ccd2726b"},{url:"/imgs/guide/i-3.png",revision:"e5e6bcceaa1c9241da4d9f48d657a98c"},{url:"/imgs/stamp/0102d8c8.png",revision:"2d5f5250c440fc2779aded6df3b9452a"},{url:"/imgs/stamp/010f630c.png",revision:"00881bf736c14b02f9a26448dd1a7e95"},{url:"/imgs/stamp/01e998d6.png",revision:"9c72214858a1841b430aa79b065aaae2"},{url:"/imgs/stamp/0295158f.png",revision:"c3f7ac9f96003aef88b5c0bf11e52ada"},{url:"/imgs/stamp/09c9307f.png",revision:"a9401f6b44d8358a5dc370794e893076"},{url:"/imgs/stamp/0a555393.png",revision:"91b171f250a3d49f1394a63bceb13e0f"},{url:"/imgs/stamp/119ced3e.png",revision:"91fb18a0314bba20ffda82fbb3d66da7"},{url:"/imgs/stamp/1346c675.png",revision:"bcc6b49dc80ca71afd88e06a757f3a53"},{url:"/imgs/stamp/19b221c5.png",revision:"a42bd2724ed2ea7ad9f459ff6e5c3624"},{url:"/imgs/stamp/1b5910ff.png",revision:"21ca6c9cb230ea05cce4b1c6597df0aa"},{url:"/imgs/stamp/2045d742.png",revision:"590f00d221813e813bd14e7336994907"},{url:"/imgs/stamp/209663b3.png",revision:"3abca4dd9b0843c2aa1c789180b3f004"},{url:"/imgs/stamp/238b5be5.png",revision:"3119d73b4f58bcded6202ca90256307b"},{url:"/imgs/stamp/272b184e.png",revision:"7ca41c54986eaece7157214308fc8ced"},{url:"/imgs/stamp/3476d176.png",revision:"724fe4b0055d6409abae57247ed8f148"},{url:"/imgs/stamp/38a3573c.png",revision:"5b5cb972e7466ee55e6f70720e4825ee"},{url:"/imgs/stamp/393f5934.png",revision:"2ff978671c9685e13c15bdd4dae66f6a"},{url:"/imgs/stamp/39465de8.png",revision:"a391ba960daf01e143bacf9ecec59bbf"},{url:"/imgs/stamp/420400f7.png",revision:"a54097d009e1f6c542abdd4b734f2b8b"},{url:"/imgs/stamp/440120dc.png",revision:"5ae664f61e7049227fbc4a11e14eb277"},{url:"/imgs/stamp/4c594866.png",revision:"59d9257251b4c265b13d8485fa5b6759"},{url:"/imgs/stamp/5525f744.png",revision:"8af12a74a1942c9e63995a97e9737d9f"},{url:"/imgs/stamp/55c5d4d6.png",revision:"ae5782274496fc5bfeb2e08f0f8eb211"},{url:"/imgs/stamp/5ca4cae3.png",revision:"0a686f6b0e649b814e32d0fe97d19221"},{url:"/imgs/stamp/5dd73d64.png",revision:"c561ec1c849b688ad51431fc90e95a66"},{url:"/imgs/stamp/5f3316ba.png",revision:"ed593f7209df70a59c4330d3ca0d195a"},{url:"/imgs/stamp/5fc2743a.png",revision:"bc1969bae8f79a8f5dc299ae200f268b"},{url:"/imgs/stamp/621e25a3.png",revision:"50db0a96c9faab779d7077eef6be882a"},{url:"/imgs/stamp/699ef4f7.png",revision:"9286320e2cfdd7f484214f54448237a8"},{url:"/imgs/stamp/6a09f58d.png",revision:"1eda655acb4aeede75065198b7c9f364"},{url:"/imgs/stamp/6b14026d.png",revision:"ea4e677242aa1960b173f7881ea3d82b"},{url:"/imgs/stamp/6b50dfe7.png",revision:"85843a2e72649aebcfefa03d7c0559ee"},{url:"/imgs/stamp/722e97fd.png",revision:"b022fdaf872748d744f1940e619f09b1"},{url:"/imgs/stamp/72781497.png",revision:"348a110dec762f89bff885b88af4e2dc"},{url:"/imgs/stamp/73aabde0.png",revision:"c2401165b8e6d675827f29d427f4b3f0"},{url:"/imgs/stamp/7c67eb91.png",revision:"2acd990fa8d4164b3b42cf107da83c2c"},{url:"/imgs/stamp/7f54d9e3.png",revision:"8f869db6de36b1167d84ed49f53659b6"},{url:"/imgs/stamp/7fd9ca99.png",revision:"f2f37fd15c7850a50501010028945125"},{url:"/imgs/stamp/8626c7ad.png",revision:"2816b7644281626a868e1ab8194dc19c"},{url:"/imgs/stamp/86b00f77.png",revision:"9e166f7abb68a73c77cce54c19d37ef9"},{url:"/imgs/stamp/86ea5e0b.png",revision:"d2fc131baeb00cb476c092dd02ab623c"},{url:"/imgs/stamp/873aa6a1.png",revision:"8e981b8aa7b7b51ff4454c08e3cfc492"},{url:"/imgs/stamp/889a6aab.png",revision:"d2d91dbe261c1cff226225cbe74489ed"},{url:"/imgs/stamp/8b65bc3f.png",revision:"a9efcaae6cd54c670284e1134542906c"},{url:"/imgs/stamp/8ba12eff.png",revision:"bca9dd427a276cc98ab0e2b65db44e46"},{url:"/imgs/stamp/9192a7b2.png",revision:"2ce9dba6a97db54b2af23908a8277df6"},{url:"/imgs/stamp/92fe0ac9.png",revision:"fb014bf1404ade6f7cc961d6cf66a1a4"},{url:"/imgs/stamp/93e0b609.png",revision:"f129c9322bc6790dee926cb53039ee27"},{url:"/imgs/stamp/94de71b8.png",revision:"a1d72d86f782d3fcedc87a0b7b283837"},{url:"/imgs/stamp/961174ca.png",revision:"3a417ad3875d40fd4e24414c23d9b916"},{url:"/imgs/stamp/a394be22.png",revision:"8ccee9b386ffe26d3541fb38d586e5f7"},{url:"/imgs/stamp/a5c6adc4.png",revision:"a249266af0575f62910aa5b062abc4a1"},{url:"/imgs/stamp/aa4661c4.png",revision:"33ccbe253f72c2093f75a41669d56406"},{url:"/imgs/stamp/ada1714c.png",revision:"19576f0caa319d59d68f552b9a40fe1b"},{url:"/imgs/stamp/b8cc6ec8.png",revision:"92c7ce1ccc6928515263070a0c9b5696"},{url:"/imgs/stamp/bb2b554a.png",revision:"bbe7b17c0cb97ffc84b32742d66844ba"},{url:"/imgs/stamp/c123f754.png",revision:"eb54fa47ba0d94f95017b6954f86fe32"},{url:"/imgs/stamp/c12c9075.png",revision:"dddd1cb918fca7f22a4d960a3ca1d38c"},{url:"/imgs/stamp/camp.webp",revision:"ab9a8e99b398f4dc79c70dc73c7b2fc7"},{url:"/imgs/stamp/ce8fa3f8.png",revision:"958a9628d35bd6639db0f192b064d48b"},{url:"/imgs/stamp/d96213a9.png",revision:"0d182c4e9c252d446f7fd9c5a95e72e7"},{url:"/imgs/stamp/dcb4465a.png",revision:"f6984a8ebedc5fb8db7abb3dc7c97bd8"},{url:"/imgs/stamp/e62f9b9a.png",revision:"b0ecc8f00fdeed7a7cea5f1fd79a63a0"},{url:"/imgs/stamp/e7e6da64.png",revision:"b6ac8e8a52cc1fa98b334cd665053cfd"},{url:"/imgs/stamp/eb099f1e.png",revision:"b48b1283ad7d6fa462fc7cca4e1d1bd6"},{url:"/imgs/stamp/eb136e30.png",revision:"6450abbda3f8a58aec41c10fd5cb152b"},{url:"/imgs/stamp/ebafe939.png",revision:"f4ba726611f4c94455d6140e9b8ea333"},{url:"/imgs/stamp/f05f9f96.png",revision:"1ab423aeb0ba9882489b4f8c8cc7c670"},{url:"/imgs/stamp/f0d720f1.png",revision:"bdae6c7f08dc7df850f0a7002cbbafc9"},{url:"/imgs/stamp/f106a32a.png",revision:"28f0bf7f4b35aa6aeada91d0c72f26af"},{url:"/imgs/stamp/f17fb282.png",revision:"0d5c5a392a29ba8319ada8b39db96e88"},{url:"/imgs/stamp/f6862586.png",revision:"e849f8faa0e034150e0932e555f5f7d2"},{url:"/imgs/stamp/fbf1d903.png",revision:"8bfe6d3a4f61730b7a2b5eeac02452a7"},{url:"/imgs/stamp/ffb6d444.png",revision:"b4b2c4bbd8ea0349b9b47c9d06d8f593"},{url:"/imgs/stamp/ffbe0eb7.png",revision:"e9f45ad4e63e04836a9232d4e278a3ca"},{url:"/imgs/tree/bg.svg",revision:"8b3c0ef3bd7e71e69473333c0dc81141"},{url:"/imgs/tree/plants1.svg",revision:"a4ce33391b47b9496cce7de98d9a31a7"},{url:"/imgs/tree/plants2.svg",revision:"5812ce2be71c12dd1924d76689a10ca0"},{url:"/imgs/tree/satellite.svg",revision:"d6b961b43e89d515fb5b4a530de546be"},{url:"/imgs/tree/star1.svg",revision:"0ecf9481f98795929a5c4a73268592c4"},{url:"/imgs/tree/star2.svg",revision:"26202990495493f5710dae315b76702d"},{url:"/ios/100.png",revision:"118ff5a16c64e5c0badcc2f13edadef5"},{url:"/ios/1024.png",revision:"983d829843a3552244b68edeccfe024c"},{url:"/ios/114.png",revision:"c78d1c7a1cc680631fd06c54a1aac423"},{url:"/ios/120.png",revision:"f28b650220bb6529db6fc7c6d325d39b"},{url:"/ios/128.png",revision:"60dc4d3f4c00c336e998a092722aff2f"},{url:"/ios/144.png",revision:"73243a3571d21cd77829ba3f355aa770"},{url:"/ios/152.png",revision:"ac826cdae4d06431be9bff740a8de3ec"},{url:"/ios/16.png",revision:"07204a7c96dee10f65a45af97422576e"},{url:"/ios/167.png",revision:"ea7cac9e15f1a9972d0946e14db6ea84"},{url:"/ios/180.png",revision:"29a8b02bf8ee89b8cf15dcc99e5ee422"},{url:"/ios/192.png",revision:"68db53cc32c1a0787d5827ec92f1d99b"},{url:"/ios/20.png",revision:"edf7cf9b4e8b41372ffb80b1d6935b4e"},{url:"/ios/256.png",revision:"fa6ffb6e913367e13be7d0234aa804ca"},{url:"/ios/29.png",revision:"a4dac918a9f11abe77ac59b55cf5587c"},{url:"/ios/32.png",revision:"181c3f3d62499dc58352341f87d68b39"},{url:"/ios/40.png",revision:"83ed39c8f6cb06b1b37ce2d5fe721fe3"},{url:"/ios/50.png",revision:"074d7c1459b6863cc61927e8fb45ee3d"},{url:"/ios/512.png",revision:"a76e0fcfb4550f30970dcc5ec36fcf5a"},{url:"/ios/57.png",revision:"0a3e68fd8162971dafe7eecf69af1a44"},{url:"/ios/58.png",revision:"ea556987bddd866574a678c947f1eadc"},{url:"/ios/60.png",revision:"fde75d33ddb8903135e4de0f837711ed"},{url:"/ios/64.png",revision:"d0795df7eef4abb241899b79cbbe957b"},{url:"/ios/72.png",revision:"4686694f7bac921ae5f6739d488f4784"},{url:"/ios/76.png",revision:"fdc7e017dd3d40429d599bedf8ad9899"},{url:"/ios/80.png",revision:"1ee81235d4ec49618a9e4abc5eb250b0"},{url:"/ios/87.png",revision:"566dd5236c4024198d1dccf805253750"},{url:"/manifest.json",revision:"67e3590241d29eeb96031b37be4a64ae"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

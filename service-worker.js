"use strict";var precacheConfig=[["/React-Profile/index.html","966645498724a90d055b3415299c0995"],["/React-Profile/static/css/main.483cbacd.css","f53f8a4c14fcc49d2ce2151c148114d5"],["/React-Profile/static/js/main.153c404f.js","fb49cf7aa735c5e184487028fb286335"],["/React-Profile/static/media/TJLoughryDevResume.90161c6d.pdf","90161c6d55cb22cadd2c24344f60fb46"],["/React-Profile/static/media/fooddice_screenshot.cf5ba6c6.png","cf5ba6c642576ba7478fa43a5ae44020"],["/React-Profile/static/media/hackathon_resources_screenshot.529f2d30.PNG","529f2d308995feda27ee742218924be6"],["/React-Profile/static/media/image1.dc8671c8.jpg","dc8671c8a803c8f1ecd2855405553d89"],["/React-Profile/static/media/image2.8fe846d2.jpg","8fe846d2927c18eaef19090ae20fb04c"],["/React-Profile/static/media/image3.47baa0b6.jpg","47baa0b6293f3b8c3f21c6061110aaf2"],["/React-Profile/static/media/image4.2cc27fbf.jpg","2cc27fbf2ae7ee46de64cca14211d8f0"],["/React-Profile/static/media/image5.78e63e5c.jpg","78e63e5c8214a8b2810fb54915784f61"],["/React-Profile/static/media/image6.0b901ba8.jpg","0b901ba85d048aad01d46060115a0c59"],["/React-Profile/static/media/pupfetcher_screenshot2.920c3c72.png","920c3c72ee80014a46789adb5d985eed"],["/React-Profile/static/media/tictactoe_screenshot.b2a6af39.png","b2a6af39d7cacb69983c675b8924c080"],["/React-Profile/static/media/ufhome_screenshot4.13bc0341.png","13bc03411377ff83742551e1c8303160"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/React-Profile/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
"use strict";var precacheConfig=[["/index.html","21bde2ec3eedfc8eb7ea0b031b5abf5f"],["/static/css/main.a8ab2eea.css","37ed062beba598dfccbdfadd4c23aa8b"],["/static/js/main.108cc396.js","047a784eb0f4f18e14090d492a943585"],["/static/media/about-bg.851eba39.jpg","851eba399a6f34043ce406255f5e1742"],["/static/media/default-skin.b257fa9c.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/static/media/header-bg.4244fba9.jpg","4244fba9747539c5b7b469b80311cf41"],["/static/media/lelivre-books.55ae1ae8.png","55ae1ae80671ed3cb438399864493f8f"],["/static/media/lelivre-books_thumb.75a4ec11.jpg","75a4ec117f983ac892c6bb6b837cf58b"],["/static/media/lelivre-home.ad32276a.png","ad32276a00f5f0393a0949b03203f90b"],["/static/media/lelivre-home_thumb.ca547b66.jpg","ca547b6686f29ddf76136c3c45ac3066"],["/static/media/lelivre-search.971219cc.png","971219ccd44c4ea80aa1ea57b1fbb91b"],["/static/media/lelivre-search_thumb.5d0ca65a.jpg","5d0ca65aef59233bcec0a8c20d7fee42"],["/static/media/lelivre.4eb6c239.png","4eb6c239e63859a20e3fd20504e6b856"],["/static/media/mk.b9b45c0f.jpg","b9b45c0f818290a39633e4b04cc6f4a3"],["/static/media/projects-bg.9c0c9659.jpg","9c0c965921fe591a4f0e95e70073754f"],["/static/media/shipwars-game1.e77e0cbd.png","e77e0cbd4d490b0078d1bb059e89983c"],["/static/media/shipwars-game1_thumb.6b86074d.jpg","6b86074de2fe17358c8d2e46f87b9f09"],["/static/media/shipwars-game2.65dcc61d.png","65dcc61d9c0866d73d84fc32c55fcf11"],["/static/media/shipwars-game2_thumb.144e52ee.jpg","144e52eef4b274853a71df617889520d"],["/static/media/shipwars-game3.5508f5d5.png","5508f5d5912f084e8affa4f572b06adb"],["/static/media/shipwars-game3_thumb.421ded21.jpg","421ded21db76464ff36e69d43e465053"],["/static/media/shipwars-intro.90ba9f4d.png","90ba9f4d74a34e59a01261b007ce6754"],["/static/media/shipwars-intro_thumb.debee1c5.jpg","debee1c510077f95a0d16c3264f3a99a"],["/static/media/shipwars-stats.4d115b13.png","4d115b13c8c051a4cd6cac58d3a14d6d"],["/static/media/shipwars-stats_thumb.cdc70ad1.jpg","cdc70ad13787ac612e918d3daa52862d"],["/static/media/shipwars.eacaa6fd.png","eacaa6fdc9b0b6ac47a99410c946fbf8"],["/static/media/spark-list.fcff35d1.png","fcff35d104fb594a1c0371e3893c690f"],["/static/media/spark-map.7548043f.png","7548043f7c59bff37d39d7ae27c57c76"],["/static/media/spark-map_thumb.54d2daa0.jpg","54d2daa098f727531d25cd88f4eef5cd"],["/static/media/spark-msg.da53600b.png","da53600bf50a8760bab21109ff021342"],["/static/media/spark-notification.52c993f8.png","52c993f842189c7a8d43108483d6be51"],["/static/media/spark-passcode.f52a7b2d.png","f52a7b2d34de5c737b016efaa91d226d"],["/static/media/spark-settings.af7f9ff4.png","af7f9ff4dda5e5302cf32b41b4591ba7"],["/static/media/spark.d4230430.png","d42304306e4a71fb089dd70e5f6d752d"],["/static/media/stockr-home.c68d5230.png","c68d5230f1fd8c88932f051a50e5cf8e"],["/static/media/stockr-prod.68f83dcc.png","68f83dcc64e581b0e683b287a186805f"],["/static/media/stockr-report.f6e798f7.png","f6e798f7a8f174b23ddafdc92ee90ff8"],["/static/media/stockr.91ba6368.png","91ba63688c77084b88b19ae381f0170d"],["/static/media/task-notes.20b05a7d.png","20b05a7dc2f314ab084b6557212b01dd"],["/static/media/teams-all-teams.c41532a2.png","c41532a277662b1e2bf644338712b4d6"],["/static/media/teams-channel.1b495a0c.png","1b495a0c79dd6f053c07a38355f4c5e0"],["/static/media/teams-conv.94dd03b4.png","94dd03b435a6316c0d84db63c1790df8"],["/static/media/teams-create-task.dbe92947.png","dbe929472ec73d25b31cd6cb7a5dbecc"],["/static/media/teams-create-team.328f1df5.png","328f1df5e3f7390e3a407c0bdb0bb104"],["/static/media/teams-files-list.f4053f0a.png","f4053f0a120d9a5db0efb783c5abe945"],["/static/media/teams-notifications.02da346b.png","02da346bb8997d690326a8bdd9b4f925"],["/static/media/teams-team-info.6a60ba7d.png","6a60ba7d7b0ca54d0b039352a32c77b2"],["/static/media/teams.62e8233f.png","62e8233f8749bc49b41a83915565490d"],["/static/media/tetris-game.62d0d315.png","62d0d315779301886bc1b4a93656a52f"],["/static/media/tetris-gameover.4e0b7e78.png","4e0b7e78376447a9edcc7a627efc76b6"],["/static/media/tetris-paused.1c389040.png","1c389040efaace6d58b6d5322c4d276c"],["/static/media/tetris.16e94fe0.png","16e94fe00b08240d88f2d17ccac74cf5"],["/static/media/zones-add.c0cfb545.png","c0cfb5450c4af14d59438c7eaf4372ad"],["/static/media/zones-add_thumb.dd437095.jpg","dd43709598c79620c293e12535dfe7e8"],["/static/media/zones-list.1ed5731a.png","1ed5731a2b2079303715e5dfc8da1bc9"],["/static/media/zones-list_thumb.7497bd9c.jpg","7497bd9c683cbe61bb75760dee152991"],["/static/media/zones-map.b1802d43.png","b1802d434407f9aa217ab507069ae07d"],["/static/media/zones-map_thumb.95ec00d4.jpg","95ec00d49e7dd0c0dbf32d7ec3076ed3"],["/static/media/zones-reminder.69dfbda3.png","69dfbda311a37335ec46a93f0f47729b"],["/static/media/zones.38466dfa.png","38466dfa08722c2e405b6175e512d047"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var d=new URL(e);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),d=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),d]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var d="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(d,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});
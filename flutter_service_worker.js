'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "51586ae1d897876eea486cc99796210e",
".git/config": "bb748a701bb38f32cb072d766bf309fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "eef1c9d9cc39ec9335fa965d6cd6c851",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c431a921517343c7fed5f90b18cad7f",
".git/logs/refs/heads/main": "d6e2475d3800a1f15137c6d5ec69493a",
".git/logs/refs/remotes/origin/main": "05d7fe926b8e09c8abba810c8d928ff4",
".git/objects/08/4db79105831a39c44f03486334730d0b57a298": "02f28b0df3a49220c6913af5f1b45827",
".git/objects/0d/ba27b32947b32cb0917c8543aafcc44cc217fd": "d1e81e4997abee6e9138256becc92bd2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/71548250fb5099035f9116c1ba32961db37ad2": "ca9a0426d26b6505ca15864ca11bb7b0",
".git/objects/22/bbffb98e0863ee1084733c6de08511c767b0a5": "9133294ac474313ac0e6c26f3314f7ea",
".git/objects/23/8045d0cbf9aacffd55e78cce809f91eb47699c": "5a72468cb7d1cf37d86f68ec0d723092",
".git/objects/24/92c44a2de20b40ee64b10d8da1f8129227c78f": "073501c68e94efcd253bfbbb74e814d3",
".git/objects/26/bff1e71edd1a3c339ddc56e91e309c203064ca": "c1937742889fddf5bfbe0db42fba4331",
".git/objects/2b/14ceafdd3045010cc8f13d8c859ffe3ff11bbe": "8f2059eb2d0c74e56992d1fb28ea860a",
".git/objects/2c/1f742a0721b535871615436c06f70446a51631": "fe8446481462401a13afe6d3c7086797",
".git/objects/2d/9fb7d537dc5dd4b1aa339aabbfefc60946a152": "6e61db69f45e00b77c3bb03ad47c125b",
".git/objects/36/972ab0979343f1a67b6559b574b2aa44903582": "093a8d223d0c3668ff66e179c668bff8",
".git/objects/37/c9a3e95ab34780b9ac86b5281246d3d01c6730": "88dc38625e5c80dcc8e088e5c55f3e67",
".git/objects/4c/a351214427c1c9ca29bb2d6cba55debe76eec7": "6593af8c770772e9ad129d49d67d7609",
".git/objects/4c/bf9e1408dc4af2c94db10b9bba38fb2614e15e": "73fd74ee9983bd9c1a9fc377bcce7c1a",
".git/objects/62/9b30f5bf070b2d2f1559653a64667202b372f9": "1c8f3344feb335dc49e4ddc15ac7325c",
".git/objects/65/0e4eabcc080f9ccffcc48b199d5178e4b4bded": "cabc55ae72a45eb159d21a365e43bfe7",
".git/objects/65/20e7c424281f9fa253e9ba59a7b53c57a325fd": "3cd8f5b7f0681e0946f5b83cc6e606ab",
".git/objects/65/8d40e424e0d2c2284042481ee4cab918a6aa70": "b117a9b3e4b9a55b2e6381a5d82b1647",
".git/objects/68/23df33a04fdc331ed03d4d7f73673f722dda88": "b79eb640287c0c532b15fea0409e9892",
".git/objects/6a/f546ba038a42d21ad4c5539de84fc502b14376": "564daf79597b27b9d1527aeadb867b08",
".git/objects/70/059a178d2dd73d13757ad6e109070f9bd511cf": "a00e27df530f7d3ba06cb196e1b19957",
".git/objects/76/8bf10b88a0b215822c007f051a7efab44281f5": "1c98b194fd66dbbe5564eb686df040c0",
".git/objects/7b/0ff66e5bd8d3bb3c3e26caae8f57f4f5f29693": "486ba5e550a5756774917ca9d1a9603c",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/02ba8fe071d20202b5d41aeeccc04292e472d0": "cf467669eb6e01410d76540906cde2ba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cc234f0a4ec855cc5ddba8b92740adbd70f53e": "1238b2e4b5cb83409e3998ef2db7eefc",
".git/objects/8f/7c7d576f93372f3df2e0197c88b3363d2c1bda": "4a34d82bdf04768b098d6c9ed277b034",
".git/objects/9b/384aa8ff4aac1add15b7d39f261a61bc1636cc": "63bb543b59cb3805bbc7422989530539",
".git/objects/9b/65c60010ee31f122d67b78d90871dfc56e8132": "e8f2b4a4afc211d68314b5befb64767e",
".git/objects/a1/0488d0bb0ee4f8f9d30065eb99a3dab72b93a0": "56961bee7e510f7f5cb1684873a61ac3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ad/b363a69bcd61247a6e1639df7a4354bbfd5db8": "191d756d8b492257b8b05db472d929bc",
".git/objects/b0/fe23083ed10d119ded42a2202fe5e9cf1da30c": "096429c7b5d5c927175d935a15e67afb",
".git/objects/b1/b50d68f942c9caa685a04bc25cf06911b3ca8d": "48043394b9d60e10ccf4c943cdefbe7b",
".git/objects/b3/6d676e19a9d1522b81baacb822f96e8e05b0a0": "7403a1be9691ad9dc5752d3545b68057",
".git/objects/b6/16a03a778784251fcef90ddad0b89c8764934a": "a03b9590556d5fe4e5b9001ca5e1e419",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bc796b1260871c1893f410fd19eeca9e416ad7": "425ff9457ff8bdcf8999c60b1bc0e05b",
".git/objects/b9/265a2a512e7d563d69f35b71a7177cb4ab0fd3": "c982799e48afaf96d587708d47ddd66d",
".git/objects/b9/4efc6d08b6d1c2461de36f640651644afa6399": "2d57eb01c6a51d1946be8c3d7fc9783c",
".git/objects/c2/06376ed562b5d592d59fd6d2858db1d874258f": "548f2ec83b09330502cc26168e302ae2",
".git/objects/c2/e1fc803e745a65055d729349127f0cd1f4cfa6": "ce291984a15c51d03cb4960f6d065b95",
".git/objects/c5/f704498500515f9ed7733ad5220d1fa0a9d992": "30320f4e5c214dfe0338b224bee2758c",
".git/objects/ca/14a96a2ebffffcd0a5cd49853efa7099abdc68": "00d8794a9841f2256bfd5210db3e0192",
".git/objects/cb/ff355f15cdcf50341010c7796c03a9caf1890d": "6b8b195c6c3d0e4ee23e2d699d621ba8",
".git/objects/d0/ab912cf01982cd656eeb421d8048e638ec9769": "750ad16f67d11e22fd5d10e387aae569",
".git/objects/d2/f521158e99e7151e2ac752e11f26a922c36d93": "8e92dacaa7c424139ca004a4deee7df4",
".git/objects/d7/0424cd8a200d257044327040a26be44a8f42e0": "5a2f7d592d62c3b00b31e14d98eb2d4b",
".git/objects/da/fc948dd3e22ebaf07d1fdcba949a06f60be2b9": "4fa6b156089c0b5e6951fcc95bb657df",
".git/objects/e1/38e7bf18b396b005c9c3a2cd43708f96f03eec": "151f25f1e105d7b2594a20c64d647551",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/f2c6b48ed8bd55d78a0820335f9ca86ea353f5": "3919eb6d3d8d1bd2c9219e734c6d0d3e",
".git/objects/eb/e04fb10d220247cc35ea8cdb3dd55cb4753884": "1c664c35b4ab0408e9d1898cc92ca9e4",
".git/objects/f1/7094082baebc12142f28023bf8ebc60bfc9713": "8b6563bf04a36693d16b49df10f967c3",
".git/objects/f2/6d0346163d4091e3c365a390fc8a17d09247fa": "4d090d1823ce0da4762d1532c7dda607",
".git/objects/f6/1c10bbcd6e02985a23bc1c229731c3979713b3": "75f68d86a6b32fc5a7e52ad077a9f6c4",
".git/objects/f7/437834127981350db3e5923f9d9c2a9d9ad197": "7c3bcfd921ff95a6936cd5effe952b3c",
".git/objects/f8/f3d16c966a62da866f8de65b70c7fa25a8dbb3": "3d3feb75be5478b11c28a8c7a083d6d4",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/main": "d5cc435b74e10f01bc69e64d6ad54d84",
".git/refs/remotes/origin/main": "d5cc435b74e10f01bc69e64d6ad54d84",
"assets/AssetManifest.json": "0f9d55f8b532ce4c0c56d25babecc31f",
"assets/assets/images/ninja.png": "303e8b4670b6aaf7c068d63d4f556b94",
"assets/FontManifest.json": "fd6f002a341d1ef9034ff889c157f242",
"assets/fonts/Dancing_Script/static/DancingScript-Bold.ttf": "76c145c2f3f1c17fd11ec9a3740521f6",
"assets/fonts/Dancing_Script/static/DancingScript-Medium.ttf": "30547aae3d169616919d266027b39c44",
"assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf": "c4434ab21f7144bbcf88c9a35ae3f075",
"assets/fonts/Dancing_Script/static/DancingScript-SemiBold.ttf": "29567254be782d9edaa50c04828c3ffd",
"assets/fonts/DM_Mono/DMMono-Italic.ttf": "bf60675f4d0e929f75a42ca2bf9af5d1",
"assets/fonts/DM_Mono/DMMono-Light.ttf": "2aa8a682b44cecd91e449fecad4d8784",
"assets/fonts/DM_Mono/DMMono-LightItalic.ttf": "f1cd0499260be6efddd7e7c166242c35",
"assets/fonts/DM_Mono/DMMono-MediumItalic.ttf": "5701846e8683c78b137d971d095fb75f",
"assets/fonts/DM_Mono/DMMono-Regular.ttf": "f0d6313e6c1d3b48d892bb7a4b639670",
"assets/fonts/Fredoka_One/FredokaOne-Regular.ttf": "4a2f2ea45a0bb1abe81b47d0afde4aae",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/fonts/Oswald/static/Oswald-Bold.ttf": "1e582f614a86a53e085c633066c682e3",
"assets/fonts/Oswald/static/Oswald-ExtraLight.ttf": "319cbb285349e4a7755670bed8bb8c8a",
"assets/fonts/Oswald/static/Oswald-Light.ttf": "58252c8c295695145b458c070ba6ecdb",
"assets/fonts/Oswald/static/Oswald-Medium.ttf": "df16477df93548f2548a02ead2f2d0bb",
"assets/fonts/Oswald/static/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/fonts/Oswald/static/Oswald-SemiBold.ttf": "59708ee027e9a02950bd7d57df51b4cf",
"assets/fonts/Pacifico/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/fonts/Sacramento/Sacramento-Regular.ttf": "66b0e223824fd123ab079b60da594ea7",
"assets/fonts/Shadows_Into_Light/ShadowsIntoLight-Regular.ttf": "47c22e0adf5e3659bb254daabc61392f",
"assets/NOTICES": "eaf83d7c752fcaad740a553f33d5d111",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "9870b8c162923d6a04e3a730d75288a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7b0514feae8ff6e8587f7068e4bf7ec1",
"/": "7b0514feae8ff6e8587f7068e4bf7ec1",
"main.dart.js": "f8996041dfeb5afca49a71a75860834f",
"manifest.json": "ff2b68e9a65817c13058e1e02357a96f",
"version.json": "3ead631e2efa49b52948b81e04c5bde6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

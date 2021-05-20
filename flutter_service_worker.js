'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "806ed2a6ac45221e6e447aeef684afbe",
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
".git/index": "f603227696d871474b453a9c2015644b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "afefc2e44af2fc608d74e11fb80a8498",
".git/logs/refs/heads/main": "a21967023e2c90e54d63cd313ce2944c",
".git/logs/refs/remotes/origin/main": "3188915c3152844920a200adf7365707",
".git/objects/05/18e27e2d827e2a4af847ca0b6ecbc1e74f5239": "1499d0fa513abdd315d22c1f75836eaf",
".git/objects/07/1f550c22a0d76189c5f541995b314b8b74eba1": "7edfd3e8011684586303325678ddb8d6",
".git/objects/08/4db79105831a39c44f03486334730d0b57a298": "02f28b0df3a49220c6913af5f1b45827",
".git/objects/09/f57c23546860d52a6a179793b9a20eaf6c720d": "7b24db57f6579b904024156e29294f83",
".git/objects/0c/122fc6b4213731d785a9a27f62589619a8c5d5": "981dbcf48508aadda1c555ecb47cbcf1",
".git/objects/0d/ba27b32947b32cb0917c8543aafcc44cc217fd": "d1e81e4997abee6e9138256becc92bd2",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/18/53993beafcfec87fad94849feb0975009d6082": "5a78be4c16b7becfdd964eb37398d8a3",
".git/objects/18/5c71b9a3a9320e57342c8208a4a1409ee96cf5": "e13e41d4bcebfd0dec1c6f9e039bc2ec",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/71548250fb5099035f9116c1ba32961db37ad2": "ca9a0426d26b6505ca15864ca11bb7b0",
".git/objects/21/f6ab5381f04eba30336b2491c12000b391d1af": "d9b24984c4a634f90daeac9389523beb",
".git/objects/22/bbffb98e0863ee1084733c6de08511c767b0a5": "9133294ac474313ac0e6c26f3314f7ea",
".git/objects/23/657b6d507464a951fe03b33987a6b2d41dd0e9": "7f250a841c2d3838915c02bb517846f1",
".git/objects/23/8045d0cbf9aacffd55e78cce809f91eb47699c": "5a72468cb7d1cf37d86f68ec0d723092",
".git/objects/23/afe83671d68db37115f89a1ecc18d9fd736345": "2014726106bd8539cc47c9e205ce8944",
".git/objects/24/92c44a2de20b40ee64b10d8da1f8129227c78f": "073501c68e94efcd253bfbbb74e814d3",
".git/objects/26/bff1e71edd1a3c339ddc56e91e309c203064ca": "c1937742889fddf5bfbe0db42fba4331",
".git/objects/28/3ae8bafa788f63836ddd1bdd518c8bcf13b43d": "c278a81ccb7c7da1c0d1423dddf85a1b",
".git/objects/2b/14ceafdd3045010cc8f13d8c859ffe3ff11bbe": "8f2059eb2d0c74e56992d1fb28ea860a",
".git/objects/2c/00e8f5f4050ef2b66e48e7b4cdd9762b76bd7c": "aed8b11b329d875c01512331e39522b0",
".git/objects/2c/1f742a0721b535871615436c06f70446a51631": "fe8446481462401a13afe6d3c7086797",
".git/objects/2c/96c6675ae098df0c114fc854605a972d732519": "79a505826250cd8411c4d1b6f3ff51ab",
".git/objects/2d/9fb7d537dc5dd4b1aa339aabbfefc60946a152": "6e61db69f45e00b77c3bb03ad47c125b",
".git/objects/2f/ee46ba484b63ebe99b1f270fb34e98bdece74d": "b58b09be89dc99435f5d308d8da777f1",
".git/objects/36/972ab0979343f1a67b6559b574b2aa44903582": "093a8d223d0c3668ff66e179c668bff8",
".git/objects/36/d47352a6cb59c25bb3cb49e8100bd488092b59": "96298b7f14c1ed3d6aeeb073bbd3fe3b",
".git/objects/37/c9a3e95ab34780b9ac86b5281246d3d01c6730": "88dc38625e5c80dcc8e088e5c55f3e67",
".git/objects/3e/d705f05be932a687f3f06384b856fa841f669f": "b3377a1cc5f17d2f084bd0278e077eae",
".git/objects/46/ff9adff5e4982783f202751008ae385976eec0": "34759af68c37189e2edee3f58c06b5c6",
".git/objects/49/6257157818596124d2010695c08a3421a23edf": "55119e14145fe801a3597d41dbd2d464",
".git/objects/4b/0a19ad3f9f02f1a69cc27625e3ae158bfa9e7f": "ec5d897511693c7b5d0d302916ab90ce",
".git/objects/4c/29014e2d78361016a86cb5ff77b1ade989d5e7": "5471b277d3da58c4443831b77d241288",
".git/objects/4c/a351214427c1c9ca29bb2d6cba55debe76eec7": "6593af8c770772e9ad129d49d67d7609",
".git/objects/4c/bf9e1408dc4af2c94db10b9bba38fb2614e15e": "73fd74ee9983bd9c1a9fc377bcce7c1a",
".git/objects/4d/17f51e230010f6da01ca303b3544a7a5e6430e": "6cf5b4b1595898f9958428de031ad931",
".git/objects/4d/3605585bc0b0eeef1f3ae647645a60ccf3992a": "25e6bb46d50bebae2776bb9ee330d50e",
".git/objects/54/5c72d719812169b8a914d4bd2a2b46b845c307": "849f69a1a93a2b7ceaff8f8329f2fc52",
".git/objects/59/9d04f1c619904cf5e6f03c71b99f8bbccc3ee7": "4981f2027d0aaf201552294c7505e0fb",
".git/objects/5a/8936a821b117641e699c78b8045ee968348076": "831199fce23e385410c6c9c04e7785ed",
".git/objects/5e/651719463ecdfbb5991917f10fb807e16db81c": "95d484dd87010b3796bc402cb31d0e4b",
".git/objects/5f/ec03c75b02365169323b073093ac87b3e61d65": "9e7b31ec561d1100a4e496de035c673e",
".git/objects/62/9b30f5bf070b2d2f1559653a64667202b372f9": "1c8f3344feb335dc49e4ddc15ac7325c",
".git/objects/65/0e4eabcc080f9ccffcc48b199d5178e4b4bded": "cabc55ae72a45eb159d21a365e43bfe7",
".git/objects/65/20e7c424281f9fa253e9ba59a7b53c57a325fd": "3cd8f5b7f0681e0946f5b83cc6e606ab",
".git/objects/65/8d40e424e0d2c2284042481ee4cab918a6aa70": "b117a9b3e4b9a55b2e6381a5d82b1647",
".git/objects/68/23df33a04fdc331ed03d4d7f73673f722dda88": "b79eb640287c0c532b15fea0409e9892",
".git/objects/6a/93ef9584eb65298b95952d0580f67b134e3993": "3c1e810f308e554a82253e29ba004b8a",
".git/objects/6a/f546ba038a42d21ad4c5539de84fc502b14376": "564daf79597b27b9d1527aeadb867b08",
".git/objects/70/059a178d2dd73d13757ad6e109070f9bd511cf": "a00e27df530f7d3ba06cb196e1b19957",
".git/objects/71/40d0cef676b0c4b17069a27d553f6a480059fe": "2606fb5c6cf0adf8cf841dbfd1251c5e",
".git/objects/74/456f83fdffdbc4f225ab06244ffe17e953fba6": "92c0030987a24f3e3bcf109b4c5180c8",
".git/objects/76/8bf10b88a0b215822c007f051a7efab44281f5": "1c98b194fd66dbbe5564eb686df040c0",
".git/objects/7b/0ff66e5bd8d3bb3c3e26caae8f57f4f5f29693": "486ba5e550a5756774917ca9d1a9603c",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/83/02ba8fe071d20202b5d41aeeccc04292e472d0": "cf467669eb6e01410d76540906cde2ba",
".git/objects/86/e8f28c0a93bdea8973baee12f549a875ea8bf9": "4fa5203027fa50e83ddff42a16253483",
".git/objects/88/8aa1b8fd98ac3e0a2c0a4adde3f9819134e288": "d5e3e45bb5c267f5f62f60b095fa4f22",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/ca42c5e7173461e60a866976b8934accd508eb": "a2113c265c9e0a38c382d3bb59a825dc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/cc234f0a4ec855cc5ddba8b92740adbd70f53e": "1238b2e4b5cb83409e3998ef2db7eefc",
".git/objects/8f/7c7d576f93372f3df2e0197c88b3363d2c1bda": "4a34d82bdf04768b098d6c9ed277b034",
".git/objects/93/a4ffdc6dd8e1749e0aaa270cf0bb3b430c5f43": "739afdf5c2053d05f0c32bad8ff6798f",
".git/objects/94/78f0cde79276cd836532eceff0d9df7939c371": "c8a87cdb1ebe38749db064006f105cbf",
".git/objects/9a/a69fb02d78f52dc9734d29255514fe33d078b8": "8b1bceb86aa467b8461af52dde9da63b",
".git/objects/9b/384aa8ff4aac1add15b7d39f261a61bc1636cc": "63bb543b59cb3805bbc7422989530539",
".git/objects/9b/65c60010ee31f122d67b78d90871dfc56e8132": "e8f2b4a4afc211d68314b5befb64767e",
".git/objects/a0/776ddad6844c13d8142f3b62aa720428ff3a67": "6454a1b29eb915fe8b92fc5a7bf53f91",
".git/objects/a1/0488d0bb0ee4f8f9d30065eb99a3dab72b93a0": "56961bee7e510f7f5cb1684873a61ac3",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ad/b363a69bcd61247a6e1639df7a4354bbfd5db8": "191d756d8b492257b8b05db472d929bc",
".git/objects/ae/138e5e29400edc00fd167755e1a4c5049c97b0": "d543ccd0a6b45c7079d69c7f65379099",
".git/objects/b0/24804d2a5d16a78a8fe34e72b815965adeb5c4": "825833410bf87a34360f0da6fad45627",
".git/objects/b0/fe23083ed10d119ded42a2202fe5e9cf1da30c": "096429c7b5d5c927175d935a15e67afb",
".git/objects/b1/194af6b69456ef0a6bc830297ae435f06a7982": "982475878441b02ea16b1473e47d605b",
".git/objects/b1/b50d68f942c9caa685a04bc25cf06911b3ca8d": "48043394b9d60e10ccf4c943cdefbe7b",
".git/objects/b3/23368240c60bf76a3d7f9fb50098f9637e91c7": "ed16c3a1c44457e75c6d0d2c30dc6633",
".git/objects/b3/6d676e19a9d1522b81baacb822f96e8e05b0a0": "7403a1be9691ad9dc5752d3545b68057",
".git/objects/b6/16a03a778784251fcef90ddad0b89c8764934a": "a03b9590556d5fe4e5b9001ca5e1e419",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/bc796b1260871c1893f410fd19eeca9e416ad7": "425ff9457ff8bdcf8999c60b1bc0e05b",
".git/objects/b8/21f7403adf7413157fd219587083e6cdb34960": "b67113b70980bc00c98a87d382223759",
".git/objects/b9/265a2a512e7d563d69f35b71a7177cb4ab0fd3": "c982799e48afaf96d587708d47ddd66d",
".git/objects/b9/4efc6d08b6d1c2461de36f640651644afa6399": "2d57eb01c6a51d1946be8c3d7fc9783c",
".git/objects/bf/517ca51241bca5582f1847337f7fb901188251": "0337f97a6d6bc9fd4596186f41e3185c",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c2/06376ed562b5d592d59fd6d2858db1d874258f": "548f2ec83b09330502cc26168e302ae2",
".git/objects/c2/e1fc803e745a65055d729349127f0cd1f4cfa6": "ce291984a15c51d03cb4960f6d065b95",
".git/objects/c5/f704498500515f9ed7733ad5220d1fa0a9d992": "30320f4e5c214dfe0338b224bee2758c",
".git/objects/c8/e26638014c6d844610e633d20230a8d211003e": "1ff3b4d9d40c08c8383761c02492aa05",
".git/objects/ca/14a96a2ebffffcd0a5cd49853efa7099abdc68": "00d8794a9841f2256bfd5210db3e0192",
".git/objects/cb/ff355f15cdcf50341010c7796c03a9caf1890d": "6b8b195c6c3d0e4ee23e2d699d621ba8",
".git/objects/cf/d6fee258abe5259c016e54318da38dd6edbe49": "821e3884aea999bd3c28f48f2b9f3c24",
".git/objects/d0/ab912cf01982cd656eeb421d8048e638ec9769": "750ad16f67d11e22fd5d10e387aae569",
".git/objects/d2/f521158e99e7151e2ac752e11f26a922c36d93": "8e92dacaa7c424139ca004a4deee7df4",
".git/objects/d3/152d8d9553eb04f0684ebd59f6f4a2107770f4": "4054c83d99577bc67f58b3a429c77478",
".git/objects/d5/481165779f070e9d9b594be242db4e34d1dcc1": "ade29e36947a774dded72f362d7af883",
".git/objects/d7/0424cd8a200d257044327040a26be44a8f42e0": "5a2f7d592d62c3b00b31e14d98eb2d4b",
".git/objects/da/fc948dd3e22ebaf07d1fdcba949a06f60be2b9": "4fa6b156089c0b5e6951fcc95bb657df",
".git/objects/e0/33061dffd69838aeb75bc310e11d17941617bf": "da5021fc4888e7292b829c23545917fb",
".git/objects/e1/38e7bf18b396b005c9c3a2cd43708f96f03eec": "151f25f1e105d7b2594a20c64d647551",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e6/f2c6b48ed8bd55d78a0820335f9ca86ea353f5": "3919eb6d3d8d1bd2c9219e734c6d0d3e",
".git/objects/eb/e04fb10d220247cc35ea8cdb3dd55cb4753884": "1c664c35b4ab0408e9d1898cc92ca9e4",
".git/objects/ed/18cdb5bd8c9ccac8a80789ea9e973baf9ccc46": "4db39f07fecb197f135abe7e27df3aed",
".git/objects/ee/a952a8f4bdf4d6b32bdc258c15d16570df0619": "ec37570a2d5be6492f8e03d0f7eccde7",
".git/objects/ee/f56240ffccb762a5bc5ad2eb8de876fdd74f29": "6a5334f0883dabc05f72a080974c640a",
".git/objects/f1/7094082baebc12142f28023bf8ebc60bfc9713": "8b6563bf04a36693d16b49df10f967c3",
".git/objects/f2/6d0346163d4091e3c365a390fc8a17d09247fa": "4d090d1823ce0da4762d1532c7dda607",
".git/objects/f3/16ce8ebaad9d98bf5a05f1a2414060cad3fa1f": "69779dad203dc85817ed45b774ac2865",
".git/objects/f6/1c10bbcd6e02985a23bc1c229731c3979713b3": "75f68d86a6b32fc5a7e52ad077a9f6c4",
".git/objects/f7/437834127981350db3e5923f9d9c2a9d9ad197": "7c3bcfd921ff95a6936cd5effe952b3c",
".git/objects/f8/f3d16c966a62da866f8de65b70c7fa25a8dbb3": "3d3feb75be5478b11c28a8c7a083d6d4",
".git/objects/fb/0d98eba5ccd1b61480378073e2857423bc7b84": "fd84f32c46b7fb7d6f0385faf0b24e24",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fe/e14d1b78e96466da23d8085bef028b3704ad21": "e8a3252f460ddbd6d5ac9c54ba42de04",
".git/refs/heads/main": "d8d5b4f50d6a6640c56cc4f6c506ea09",
".git/refs/remotes/origin/main": "d8d5b4f50d6a6640c56cc4f6c506ea09",
"assets/AssetManifest.json": "e6e9002f202f4940fd4f075b3f8d4d0a",
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
"assets/lib/assets/rive/logo_flare.riv": "9a288b621da618fc48b451d4e7572015",
"assets/lib/assets/rive/logo_flare_dark.riv": "1d3eef496c57b3b3b25e5376fbb5d034",
"assets/NOTICES": "b6f1509eedc1003796e94273c96022ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.ico": "9870b8c162923d6a04e3a730d75288a4",
"favicon.png": "303e8b4670b6aaf7c068d63d4f556b94",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "dcaec5e1cf2d054fb4555d77c1829761",
"/": "dcaec5e1cf2d054fb4555d77c1829761",
"main.dart.js": "c30cee9e3ab8214ad0a78c83c23b5a38",
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

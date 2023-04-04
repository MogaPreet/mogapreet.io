'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".dart_tool/dartpad/web_plugin_registrant.dart": "7ed35bc85b7658d113371ffc24d07117",
".dart_tool/package_config.json": "e3e7b4cd7a409d14554fabe5dffc2ddb",
".dart_tool/package_config_subset": "3a1e00532072a14958d469fbc0ad92c6",
".dart_tool/version": "b0bb7f409bcae4328af1d5913a1226e4",
".git/COMMIT_EDITMSG": "694e9c86e0b3fa44478e77f8bbca5f09",
".git/config": "e809c4beb70d65bcacf711e1832f4aaf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6e310678e336e17a1ff6ee30288852b1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f20a9d707820fd05919242c4f5eef965",
".git/logs/refs/heads/main": "ef9068b5bc055ff5595f1e1e0fec7771",
".git/logs/refs/remotes/origin/main": "1827b7b70414c93ec976b2c3df60e071",
".git/objects/00/8fa38e5fe5090348fa498c243aa94b89d95e51": "18c5b5873bf5a85f1623b7e42486bcc1",
".git/objects/03/4309761afb205d76063d70782cbff463024f49": "193953dd2ac146e1563036fe4f08d7ed",
".git/objects/04/1a3855474575f3224e068641f65d9623220a8a": "2d9c42ba702acf1be7fa2fb1de56e2b2",
".git/objects/04/67bf12aa4d28f374bb26596605a46dcbb3e7c8": "49dba9cdefacac2602a7af98a656e661",
".git/objects/05/79914241c3cb28836edd11ef2bf2fbcdd79b74": "92042366e582669fabfa1ad8f8e2f55b",
".git/objects/06/952be745f9fa6fa75196e830d9578eb2ee631d": "cb6848767aab99a89a4ec04efbc00625",
".git/objects/09/88e65c4035c7d73815911264fe285cb0826be1": "54df0ae7375e4d9709064e358fc725e1",
".git/objects/09/d4391482be68e9e4a07fab769b5de337d16eb1": "a603712ac5534497bc4fd35ebd46b0b7",
".git/objects/0a/3f5fa40fb3d1e0710331a48de5d256da3f275d": "15924b1217c401aba33f13069f7d81d5",
".git/objects/0b/edcf2fd46788ae3a01a423467513ff59b5c120": "23a6b285e31cde5ab29a2fc1ebfdb935",
".git/objects/0e/c303439225b78712f49115768196d8d76f6790": "383f775ddf0900dd9fe74e867c012ba4",
".git/objects/13/ae400b890ef90fe14afbfe9a567a812926e027": "65b2f3a0f40210aec538a8940773754f",
".git/objects/13/b35eba55c6dabc3aac36f33d859266c18fa0d0": "ccb5b80ef3b4fb1030a8a4f520f3f5e8",
".git/objects/14/8da3098986ea6c098d5a7b1f8e9cbf6b427b56": "9bfb32c54891d8b9226a37dddd010698",
".git/objects/15/be13ed6975ee1be48a6816c126502640848d53": "06aef93eba29f8ae9c78bda45643692c",
".git/objects/17/987b79bb8a35cc66c3c1fd44f5a5526c1b78be": "f47de426b1d6c272d2659c734c9de80f",
".git/objects/17/e9516a74074fad22bac3e52e39131886697622": "2cccf0b2cd7b787a1f969f9552b76de3",
".git/objects/18/d981003d68d0546c4804ac2ff47dd97c6e7921": "318597cf2655c5770342bae4ab7b90a3",
".git/objects/19/f590628b080de16a0f93aa1a224b253ea88585": "971ea7dc080c5248bec84e06e7a029d5",
".git/objects/1b/05a7fbf0f87377ffdd9b63a29af0ec0242dc04": "415977577eaaa3452b1ec5c563f38f4b",
".git/objects/1d/526a16ed0f1cd0c2409d848bf489b93fefa3b2": "12bcdfd9683b55567627456d0773a4e5",
".git/objects/1e/afc91123f2b30b4e95360fbc63807fc4205c69": "25620def325066cb4f2def0a6f151bc1",
".git/objects/1f/4d0085fd2946a0aeb6228d0bd8de1bf9c2cf0d": "3d5d7f6e619472f5848094e59f33df47",
".git/objects/22/c4462b79288fe10768cc571a36732ce5726025": "3e3cf5fc8864e978934ad77759390731",
".git/objects/23/248418d819304baca0a96179b45a6d9cf2bfeb": "3446f37b0273d353b5eb62b9c06128f7",
".git/objects/24/476c5d1eb55824c76d8b01a3965f94abad1ef8": "272edacb42df12790f46462d08bc4696",
".git/objects/27/22837ec9181c3c1b2f1c1298870185c03ba354": "55274092f8c707defc529cc6940e63ee",
".git/objects/2e/1de87a7eb61e17463f7406106f6c413533cecf": "f4970286a19c04f87217910d26430ddf",
".git/objects/2f/1632cfddf3d9dade342351e627a0a75609fb46": "eebc09df6f2f2370e95a1eb0bc1fb2c5",
".git/objects/30/4732f8842013497e14bd02f67a55f2614fb8f7": "76eb293b5c9304707852ee681a90e8fc",
".git/objects/30/8a2a560b42f17aaf3c36e4e9c8cd07182fbb7e": "bc183808cfc617fa9474743616eb4aee",
".git/objects/32/1773cd857a8a0f0c9c7d3dc3f5ff4fb298dc10": "aa6f1636c8ce237c3c416d222abf03da",
".git/objects/32/6c0e72c9d820600887813b3b98d0dd69c5d4e8": "3030e2c76fcd41356672eee54ca3bd94",
".git/objects/34/7139c48727d4f32a2b9bac862fb4793356cc63": "f12c4e44afc2ef65f4df0d401fdf25b5",
".git/objects/36/23e09a0eaa621a307e3a70ffe12127d32e6b35": "3fcf4815cfcd157970a5476777605b15",
".git/objects/36/b0fd9464f45b33f482e64bea579787e142affa": "9d308f3efbc512e2b01277fb7565acef",
".git/objects/36/cbce676bcfbddfa689b9d0abf23ac40fd2e60b": "8c963983d40f36e775abdac45c7810e0",
".git/objects/38/3f2a6312a90ed64e70ec33fd1ab1c8f5bab7f4": "703346810f709d916cbe7a37348893e8",
".git/objects/38/79d54755798567f0f318d63340508d5668eb96": "cfe50cd405acbf1c250baa58cfe6b9ed",
".git/objects/39/4917c053a04daa76d8b94f0a02db0bd99e1034": "bbdd537b090d83597a791f77deacff5c",
".git/objects/39/76559effb57cfa978aac2180d8876556c331aa": "b0d80fc41c7598de5a56ec1dff34b1ca",
".git/objects/39/7f31ef328c036c55ac3430ca1a60e4c3afb41d": "a4ba3091bf16338379fc0cd7903e4859",
".git/objects/3a/f93b882364ddc13fefa4826038d2c851bf5ea1": "e87d124937e3bd3d761e6be5e6312868",
".git/objects/3c/472b99c6f3501ff93513bcdf39dabe4f236a55": "f1663221d4180a0bffd3a0a98ec3b762",
".git/objects/3d/f3d1a91dec9f419bbf32c7dbd7ffe3049577b7": "2da7aed2720fec500109845fe6130ee3",
".git/objects/42/bcbf4780b187e80025b7917058bcb882012aa1": "d13c60a94845ee93e5124ec90980bb48",
".git/objects/44/e62bcf06ae649ea809590f8a861059886502e8": "2e42f843c31c0484de7ce7a7c79cd856",
".git/objects/46/b726bd53d47e61ba941eb355b9c8633ebbaa20": "480b1cf7af4c452e5722818c06aca052",
".git/objects/47/89daa6a443eefa7f3f729164a18351e06e9800": "3c2dcd6a17cdfc0957293d41ef712d24",
".git/objects/4c/d7b0099ca80c806f8fe495613e8d6c69460d76": "171b7f459d8f957102dab0e55cc51039",
".git/objects/4d/39fc2b8ceb4da263bbe26330bd9912e3058df0": "0562ef7682b238023fa0e6c1f011f1fb",
".git/objects/4d/6372eebdb28e45604e46eeda8dd24651419bc0": "1a6a714da9180a4b75ff188c6eb0514f",
".git/objects/4d/f32db98e2bf023cb37646f9a4596a3e38335e9": "4ddcc206379f9cd2e8352c95936624d7",
".git/objects/4f/51b335bc025ec1fbde1ad4bce869f713a697a9": "a813133ef253a84acbcbe9fa6064f1df",
".git/objects/50/2f463a9bc882b461c96aadf492d1729e49e725": "b4ba046789856764dffa013b321284b3",
".git/objects/51/58e5fd006b4bc8b6f7636e3cd1ef3d1411c2dc": "3396a01c4337162038dd957cad89473f",
".git/objects/58/a8c74b1474314872720da1c0de0d755ccb3a59": "51a28df1c4c02557494c5900590fe573",
".git/objects/59/2ceee85b89bd111b779db6116b130509ab6d4b": "348329ef452b809389b6496387db6913",
".git/objects/5a/88276a7b36980d2efa2689a410aebb67aa65b8": "3f57df6a0c0d74a105194c1575657bd0",
".git/objects/60/989c5bed7f44d76d26277ac8568ef43f6c0183": "05ee57e03e67b9254b778e4e82ed8d2a",
".git/objects/61/b6c4de17c96863d24279f06b85e01b6ebbdb34": "5486bd6a506a32f8c081890c2befb8eb",
".git/objects/63/b69ccf9e43220a0c7dc1877adf2f549390de37": "49616c94a6e5046a7f34af35ef13c766",
".git/objects/64/23d0a1754313c50ab39e2ddaa8f3d74892134b": "dec1800386794d7c316af2e4a78e0d27",
".git/objects/64/35c65440662b7a656ef98832aacb5b0b6f93e3": "3658f753542e4521f133cdca225e59c4",
".git/objects/66/a65d1e4a79f230031ec0e0959a721039e7282f": "2a87e723b46c44522c16c0968efa0152",
".git/objects/69/0dbba97f29a0d912cb5f24e1591c2883d489da": "efe79b3600ee5ddf8649e80f229a4f5a",
".git/objects/6c/8e736c9131cbed40246aad6c478f4be38fbd3f": "f2b1e79be5b3a72ec8b64640a7d3e089",
".git/objects/6d/1a38a1f66eb38b93c84f65a7ec39d1869a7573": "af1dc6e91d0ec4e2d4e88d53e4d11bce",
".git/objects/6d/a0652f05f28fc6950cec20ebdfbae89b665479": "fccd5f0f0fbfe5ead1a5622148fb8d74",
".git/objects/6e/d2d933e1120817fe9182483a228007b18ab6ae": "e67768e46e6cb02c375dcbe6443df2e5",
".git/objects/6f/568019d3c69d4966bb5a0f759980a1472afc1e": "11711ec452167a523e427fab835abd15",
".git/objects/6f/caf409794df3e7f9e992677891740abe1498fc": "cec360896a0cda2de778b0ec01915108",
".git/objects/70/693e4a8c128fc4350b157416374ca599ac8c7b": "6942d9ddf2906a8e847e7ef6889a4221",
".git/objects/71/bcac3b1c1e2c8e826c5ee7863fd74e07c8daef": "a82af7772cb66026ec036fdd354d4389",
".git/objects/72/271d5e41701cfbffad74d38640bf9cc7c1f7be": "e07153a480d4e159b70f80851f6a553d",
".git/objects/73/53c41ecf9ca08017312dc233d9830079b50717": "32c4c29220bb05d460a969e7df99412c",
".git/objects/74/25d326476569e8ceb8be0c1f46d142f15f076d": "b51dce3fd145ccc97d46c96abf78ee25",
".git/objects/74/6adbb6b9e14b7e685c91e280a4d37a672afbd8": "eba295c22165b01ec06a735e4dbb3a44",
".git/objects/76/e1789b06850f063df87b763f25be27996e1488": "c89d99a85cd4a01ccd99d8ccd5d82e85",
".git/objects/79/7d452e458972bab9d994556c8305db4c827017": "009f1a67118a52459bbc67f56c2ffd4a",
".git/objects/7a/7f9873ad7dceb4dc17087fb06c800fa0191376": "91f6523d91623d19d122fea7b32a3db9",
".git/objects/7d/412892bf0e477bec8435a10087ddff77dd513a": "a6e6ab7176f7d3ac62b259a6853de991",
".git/objects/80/e867a4e06b4dc26d0a2b327cbd54041addc50a": "a256672b7db051545b2b39eb821c1510",
".git/objects/82/b6f9d9a33e198f5747104729e1fcef999772a5": "32d0349a1626c50624f6aab0900c31d8",
".git/objects/84/ac32ae7d989f82d5e46a60405adcc8279e8001": "a7755246641eb6f0ea897123c42e7eeb",
".git/objects/85/2fa1a4728ae4789e3bca55dd07caef3b41f2a5": "97bf964ac33d3f622d940921761e740c",
".git/objects/86/4a0d28df8a409f465690e62aa8ff814494248b": "fd309b67973388ea21187784c9f35afe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/53cba09064923c5daf2d37e7c3c836ccdd794b": "41d25b277c37a913abe0083c22f1e1b2",
".git/objects/89/5b8c4dd4415e0130d021ef602b0ec23af47eb2": "bced695db414a64609be5ec4496079c7",
".git/objects/89/c2725b70f1882be97f5214fafe22d27a0ec01e": "99b17ebd650decc04c5de3b0893b27f7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/f96a2c8ade099adb3fca57791d512ff901fc4a": "d25ee2521973bcf7a4fc7ba6e7142677",
".git/objects/8b/6d4680af388f28db8742ef7fb8246e2bb1fffb": "4e20d4660135ff8d41852fa5b986bfb5",
".git/objects/8b/a788092838b1367258f399bdf2079865c9213e": "c5b941538ece7d7aec85c88c6c329df0",
".git/objects/8b/d06bdf095c809f80d639847440b06b0199a88c": "58d6dcf8e95c016f9f2dd6468f1fcdf1",
".git/objects/91/9434a6254f0e9651f402737811be6634a03e9c": "6da5342c04a33ac2131fdae2e4a84892",
".git/objects/91/d1d51f462ba57f5902693a2993d5a11319371f": "71781cfb3d6667246b070dbbe50857a6",
".git/objects/92/11171c0ebe5ad33a7e7d798763df78abff548f": "3ce295ed1ba06df3a0acf4770be66e8d",
".git/objects/93/0d2071a324ee6050cccd87a14495557b63416f": "27184823c9e5055a30e98ccf70968672",
".git/objects/94/2696edf165691fd811f6aaaac84f4a12ab4d75": "ef29112f76a8abaebeeb8a385b4bc19b",
".git/objects/94/abd31a63662c96b9c466413fa52004cb7d10a9": "0d19f0fc607dc9b3418e9baf88a172b5",
".git/objects/94/adc3a3f97aa8ae37ba567d080f94f95ee8f9b7": "daee15d8fbbf348420b6eaf3d86cbf40",
".git/objects/96/25e105df39e8429814f3189a8015087720cba1": "dc4647a7fac13cea763bcd9ca601edf5",
".git/objects/98/125de0c0c4964a93bbf6b7be36c9d1ac2deca4": "7e10c7465d94ffaf5cfa0e2dd7e84e0b",
".git/objects/99/0df0549bcc76bb9d8f0de9e066d337de97d0ce": "e438e0b890a99652d59df6f5178998e8",
".git/objects/9d/a19eacad3b03bb08bbddbbf4ac48dd78b3d838": "1176aaa6ff7a19c56cf9a6ea692a2c03",
".git/objects/a2/ec33f19f110ebff51a23342d7bc29ec9a1aaa6": "48569d95657b1f4b8fad6b6e730d4334",
".git/objects/a4/2ea7687cb67e55af955dc8874a072e087ce3ed": "b51e31b93bc1bfcb23a9226ab3e3c5eb",
".git/objects/a5/74fb9e3907608e950927d928b60aed4a83795a": "7523ce0bb7bc23ef4659f02814cc43df",
".git/objects/a6/19843f55e60c2fc168fe9f0afc867c44799a04": "62cce156a87ced41bad31aa355bf32df",
".git/objects/a6/368af0ee7628fa194ef8fe3bbe4523113d6e05": "bafb07bb0e67f8a015ad7c670f7072fd",
".git/objects/a7/65b041ecd98667509ff18830ec36638bad6411": "a20a34524ec7793d6ece84f93dcfa946",
".git/objects/a8/7eef84a5d29844f41176f808a797cea593616b": "bbe3fc3e1c5e6135804ae185063dc396",
".git/objects/a8/e64fdfeb26c1371bc1169043e31175cea36ef3": "ee36831733b04277c6a77d9ebfa7d16c",
".git/objects/b2/5e363efa423f6d2dd97d425eb0f1364dbcbe3e": "2820837aa1faa39ed5cf46ba48151ff4",
".git/objects/b4/2f3882e8c84c4293ca393ad446500e121cf4d7": "13f070325a7c16715ebcfafb5a3496f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3c4c30c16703f640bc38523e56204ade09399e": "d81d171c0590dfeb78e8d6c404330bb1",
".git/objects/b9/44b4ec24a98850f5599d6795fcfa08874e080e": "bd36b5019f02ea0928bdb6d702c45582",
".git/objects/ba/f3d77f76706dbc82162dd6bc9a1365ac5be830": "3fdbb77ecc95ce55cfcedebbe781f150",
".git/objects/bd/7813a5d13990c413e6c57be1b6229603250913": "c91def86479b3aacb1478749e1248e58",
".git/objects/bd/b57226d5f2bd20f11934f4903f16459cf52379": "3289c6c0ee8813484d2b33d6c6e1df10",
".git/objects/c0/4e20caf6370ebb9253ad831cc31de4a9c965f6": "5e216dece9f226a4ac045363fbbe142a",
".git/objects/c2/2ee77e8ac031a7f9fe3c0062e0b3a5f986773f": "5ad10c3399277da6f829deb06b89a48f",
".git/objects/c2/efd0b608ba84712fb3e1d01122468a50c7fba1": "5841aa09610800cbb88a643fdc9ede63",
".git/objects/c4/3cc9b8ba4e4ae5c6df5ed5e3f199668b7fead0": "e70044978ca80324fbe375a7e1547ad3",
".git/objects/c4/3db629b58f3d425dd071cdcfcce513ef0f6fa5": "f1bfd4353fe142b2cbe9311be770d071",
".git/objects/c8/6632d8a6b9c87253eb597d2607460abf793ad3": "182503991567a1d1b9904639ae7e6b4b",
".git/objects/c8/7d15a335208541da7c11961b0f6d5f6035512e": "a6105aabe7a3384131da4bf043c5878b",
".git/objects/c8/fce5f334b2c1da3db9e4789c867023c79ec841": "70e5f6cf81a7fb18d0758a08987f8a25",
".git/objects/c9/919543d82358b8c080d2c9cdd8ff7f0e9a3646": "b98e27597404c8a78719b08511a48295",
".git/objects/ca/14a82172ae66e74dbff443ecbf0bc0552b80bc": "a0a3165ec4963fca610a4b5403bbc075",
".git/objects/cb/1ef88056edd1caf99a935e434e7ff6943a0ef6": "06da19129aec844c2a975f2175eb659b",
".git/objects/cc/576f888a925fb53bbeb37cac70a0951471cfc0": "bdc50735e35a2750b2d998c9114fa618",
".git/objects/cc/cf817a52206e8a8eef501faed292993ff21a31": "1b4dd6ab7f4ca9073eac414dd6794fd6",
".git/objects/d0/651fda5fbc1e0e728fe38d2abc65f7250c177d": "6bc02ac128f6ce47d177770d0a6103f8",
".git/objects/d3/6b1fab2d9dea668a4f83df94d525897d9e68dd": "f19c13a91df6187b27767a0c81787173",
".git/objects/d3/896c98444fbe7288d434169a28c532258a4466": "65bd2275cf87203cd8cbaa19e4cce2fc",
".git/objects/d3/b9e0aafa70e7b518de6d7f36503def555e3867": "c4acea7ad0add3f7670f8bff8463c738",
".git/objects/d4/92d0d98c8fdc9f93ad2543bb4f531803e9df72": "e3677ae8914304b8340d8db27e7db71a",
".git/objects/d5/3ef6437726b9d1558eda97582804175c0010a2": "764cc945f02614c5bb082a403a0c55e0",
".git/objects/d5/bd01648a96d50136b2a97c8bb9aa5b711f6c39": "b52bbb3aa77140bdf2d47814158cba7d",
".git/objects/d5/f1c8d34e7a88e3f88bea192c3a370d44689c3c": "2e5a4148dc9ebc15b186574d9fb60432",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/61c53178cc135119f252e047fb2f6e08512ed0": "54c64d1a96d272170806761ec67134b6",
".git/objects/d7/7259ea5b48093f76198b37a34e331989b98d39": "9e559b1162655a7e9c3503676309bb11",
".git/objects/db/150c6e3dc0f7eaaf0eba721a1efe272c2cf099": "12cf9194eee7191cb553ce2719f48818",
".git/objects/db/77bb4b7b0906d62b1847e87f15cdcacf6a4f29": "a2e10fc9c4f60ac00e2b9b1ed3a0b5ac",
".git/objects/dc/139d85a93101cc0f6e9db03a3e1a9f68e8dd7e": "c815b8cd55031858470b95979194ad21",
".git/objects/dc/2be63317d85afeaf053de16e24a245f4b5c5ae": "1f3127808115b9464b05b8668359cd7f",
".git/objects/dc/9ada4725e9b0ddb1deab583e5b5102493aa332": "e8022082c258e4c83e27519f77484618",
".git/objects/dd/683ca45209f8b889f26d0561df78a4f3318730": "6e32da08c42380111775ef657f64df14",
".git/objects/dd/db8a30c851e7ef5b16a9108934bd1217b6b43f": "e943b985c0fbc94ad354f2ada89b854d",
".git/objects/de/7215f6a1321b8ec558138c5aeb82c35449d819": "20181b97dd6c073bbfb63455cc5adffd",
".git/objects/de/7c65b27ad4b131939154c41c4a08892f814067": "20f427be22e7f23f27becc7939030943",
".git/objects/df/0c1df511bb39af873925ecf0d74f2557d1c7a9": "b680152af4f1ed54060494fd7b0fc8fb",
".git/objects/df/f4f49561c816f70eaea557d889d31cf63447ac": "fccf1f0ce075ef8d3a1ae932cbc31552",
".git/objects/e0/d16fe56d6f12c217719dc2cd75545f44bfc973": "a45752aa781f95b86fe59cbf6f08ee9c",
".git/objects/e0/f0a47bc08f30b550b47b01de4c9206b6824dd9": "5ef61d56b6220833037adc3dc3871ecb",
".git/objects/e3/3142e71bfc751ce1d7a7d46406235425786005": "71cc9d64983f89c56658f9ade44a4809",
".git/objects/e7/1a16d23d05881b554326e645083799ab9bfc5e": "35049fca5b8153e0c0cd520b5503c269",
".git/objects/e7/c5c54370372a4cdde7288a32733998d87bd767": "37c17914ddc243c1c81881069106b916",
".git/objects/e9/f5fea27c705180eb716271f41b582e76dcbd90": "45a0061e76512ff597b88e29748f3ada",
".git/objects/ea/1493e82398b694d8d3e331d54baed09d51128e": "f2c93afa73b499387c59a7bf5976ebbd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/83318e09ca1b6b8484b1694a149f0c5d5cac1d": "541f4960a70ea9c895b2c21196ef40a7",
".git/objects/f2/4c7defe201c66049ca7ee3216d58dc759ff834": "bbfdb3d03fa1d63a876b949505077c0d",
".git/objects/f2/e259c7c9390ff69a6bbe1e0907e6dc366848e7": "094726a4a1cc307c0a019e65a323f850",
".git/objects/f3/46021e5e353f2f827b3a136a02d0f53631c785": "95dac5423c0c75a27b351527c71190cf",
".git/objects/f3/c28516fb38e64d88cfcf5fb1791175df078f2f": "bccf9d20d0adcc345fe8e5f4a745c4ae",
".git/objects/f5/8bb76100e82ec653e9b32a02d18d9232922d51": "e732ad2f094017daf1f16b50afd7c1d0",
".git/objects/f5/bf9fa0f536c285b8c0c2ef39b9714c66fae243": "828ed007bfe4ad61a0b9a49206f1148f",
".git/objects/f7/4085f3f6a2b995f8ad1f9ff7b2c46dc118a9e0": "c04177ec14f012cb2c99851a5e1ca941",
".git/objects/f9/b0d7c5ea15f194be85eb6ee8e6721a87ff4644": "db1ee38473c66e5ffa9d28f6dfe66938",
".git/objects/fe/730945a01f64a61e2235dbe3f45b08f7729182": "1dfc0ae4480d18f6ff6e8730ef3222d1",
".git/refs/heads/main": "694406801297cd3ca14e63e3c11d6e78",
".git/refs/remotes/origin/main": "694406801297cd3ca14e63e3c11d6e78",
".idea/libraries/Dart_SDK.xml": "9d4ba3f8b5b0d0ee46892826c1188c45",
".idea/libraries/KotlinJavaRuntime.xml": "de38cfadca3106f8aff5ab15dd81692f",
".idea/modules.xml": "3867275a5e85f3eb0ad5db7870554b38",
".idea/runConfigurations/main_dart.xml": "0ecf958af289efc3fc1927aa27a8442f",
".idea/workspace.xml": "25155dfb2368a7e35e1ebbecd505a418",
"analysis_options.yaml": "5df212687f3997ccd1310b5b19ebfb78",
"android/app/build.gradle": "cdb3dfc1e0fc73917cf05141fb6c2ff4",
"android/app/src/debug/AndroidManifest.xml": "2f12169bf3f0284894c0a7a8de4ea5ff",
"android/app/src/main/AndroidManifest.xml": "380ceb596b3652ab4147e0aae36010b8",
"android/app/src/main/java/io/flutter/plugins/GeneratedPluginRegistrant.java": "5b3b418ce50367c33bded3c0df06d47f",
"android/app/src/main/kotlin/com/example/web/MainActivity.kt": "12319e79b274dcb3e3c70d21fda2d252",
"android/app/src/main/res/drawable/launch_background.xml": "12c379b886cbd7e72cfee6060a0947d4",
"android/app/src/main/res/drawable-v21/launch_background.xml": "bff4b9cd8e98754261159601bd94abd3",
"android/app/src/main/res/mipmap-hdpi/ic_launcher.png": "13e9c72ec37fac220397aa819fa1ef2d",
"android/app/src/main/res/mipmap-mdpi/ic_launcher.png": "6270344430679711b81476e29878caa7",
"android/app/src/main/res/mipmap-xhdpi/ic_launcher.png": "a0a8db5985280b3679d99a820ae2db79",
"android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png": "afe1b655b9f32da22f9a4301bb8e6ba8",
"android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png": "57838d52c318faff743130c3fcfae0c6",
"android/app/src/main/res/values/styles.xml": "f8b8cfbf977690d117f4dade5d27a789",
"android/app/src/main/res/values-night/styles.xml": "c22fb29c307f2a6ae4317b3a5e577688",
"android/app/src/profile/AndroidManifest.xml": "2f12169bf3f0284894c0a7a8de4ea5ff",
"android/build.gradle": "8fe56199271b6f4d45e5962cd8fea357",
"android/gradle/wrapper/gradle-wrapper.jar": "3ef954ed0adb79a5bd8a5303165fae05",
"android/gradle/wrapper/gradle-wrapper.properties": "1868e63ebbc541e5bbb09fa921ef2349",
"android/gradle.properties": "4b01dcf11166d04a1ee03bc0bac87b2a",
"android/gradlew": "7f1cd7eb3f75a1dc85cd37753972a6e2",
"android/gradlew.bat": "375ddea382b6c56a7be2a967a20e0ab5",
"android/local.properties": "914e16ad8f8744ca721d27fa24a35057",
"android/settings.gradle": "b673a8efad7eaed18692f958a191f21a",
"android/web_android.iml": "273d851cbe25579b8e6ee48886fa4d6a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7f2398653395075903932dc270bccea4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ab2bcff4179553fac60cf2da9e132ffb",
"/": "f28280570a87a1c2c45a66d48277dc04",
"ios/Flutter/AppFrameworkInfo.plist": "d82fc62dcd081e420f43e71a31460b73",
"ios/Flutter/Debug.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Flutter/flutter_export_environment.sh": "cd37e51b7537001c977f1b9399312173",
"ios/Flutter/Generated.xcconfig": "0f48ec51b8ec43736996bf27ac2d51b3",
"ios/Flutter/Release.xcconfig": "e2f44c1946b223a1ce15cefc6ba9ad67",
"ios/Runner/AppDelegate.swift": "b431e1eaead2cfc3718b75ba2c5f45aa",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "31a08e429403e265cabfb31b3d65f049",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png": "c785f8932297af4acd5f5ccb7630f01c",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png": "a2f8558fb1d42514111fbbb19fb67314",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png": "1b3b1538136316263c7092951e923e9d",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png": "be8887071dd7ec39cb754d236aa9584f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png": "043119ef4faa026ff82bd03f241e5338",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png": "2b1452c4c1bda6177b4fbbb832df217f",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png": "2247a840b6ee72b8a069208af170e5b1",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png": "8245359312aea1b0d2412f79a07b0ca5",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png": "5b3c0902200ce596e9848f22e1f0fe0e",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png": "e419d22a37bc40ba185aca1acb6d4ac6",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png": "36c0d7a7132bdde18898ffdfcfcdc4d2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png": "643842917530acf4c5159ae851b0baf2",
"ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png": "665cb5e3c5729da6d639d26eff47a503",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json": "b9e927ac17345f2d5f052fe68a3487f9",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png": "978c1bee49d7ad5fc1a4d81099b13e18",
"ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md": "f7ee1b402881509d197f34963e569927",
"ios/Runner/Base.lproj/LaunchScreen.storyboard": "b428258a72232cdd2cc04136ec23e656",
"ios/Runner/Base.lproj/Main.storyboard": "2b4e6b099f6729340a5ecc272c06cff7",
"ios/Runner/GeneratedPluginRegistrant.h": "decb9041b5e91a07e66f4664e5dac408",
"ios/Runner/GeneratedPluginRegistrant.m": "f6079b630997f8fd4ae1ac639162419a",
"ios/Runner/Info.plist": "1c8d594d1e9b5141a0a4454384813044",
"ios/Runner/Runner-Bridging-Header.h": "7ad7b5cea096132de13ba526b2b9efbe",
"ios/Runner.xcodeproj/project.pbxproj": "9b5005463c6b5ccc42da2ba69b6300b1",
"ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata": "77d69f353bbf342ad71a24f69ec331ff",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcodeproj/project.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "7721d249fd3216036344543336caee67",
"ios/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"ios/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"ios/Runner.xcworkspace/xcshareddata/WorkspaceSettings.xcsettings": "ecb41062214c654f65e47faa71e6b52e",
"lib/main.dart": "ae762add294346fa6a4cf193d30dd8bd",
"linux/CMakeLists.txt": "c37d213e8f5724a4bd3e2c04cc752528",
"linux/flutter/CMakeLists.txt": "2195470ce31675d31db5a37590d011f6",
"linux/flutter/generated_plugins.cmake": "e973b0a9c4bf1b7cba923da57b4fbf45",
"linux/flutter/generated_plugin_registrant.cc": "d07afe003d5837167bdd357d593f20a0",
"linux/flutter/generated_plugin_registrant.h": "d295462c9da9f7fef22dc86c34492318",
"linux/main.cc": "539395bcd63dba20afed0838d136189f",
"linux/my_application.cc": "595fe499c61799cb6f43a9afffeaa255",
"linux/my_application.h": "f6b37d58752c8671078b6f660e33e8c1",
"macos/Flutter/ephemeral/Flutter-Generated.xcconfig": "1188ad8f96414f964d5223b48e956254",
"macos/Flutter/ephemeral/flutter_export_environment.sh": "b55e722ec8099c3e78a5a967710bf6ae",
"macos/Flutter/Flutter-Debug.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/Flutter-Release.xcconfig": "f6991d7432e1664af118cc9531127016",
"macos/Flutter/GeneratedPluginRegistrant.swift": "c840bc53b61279c2fb631741134c2ed7",
"macos/Runner/AppDelegate.swift": "f35757566ef1832592cec47b89197f94",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_1024.png": "c9becc9105f8cabce934d20c7bfb6aac",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_128.png": "3ded30823804caaa5ccc944067c54a36",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_16.png": "8bf511604bc6ed0a6aeb380c5113fdcf",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_256.png": "dfe2c93d1536ae02f085cc63faa3430e",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_32.png": "8e0ae58e362a6636bdfccbc04da2c58c",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_512.png": "0ad44039155424738917502c69667699",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/app_icon_64.png": "04e7b6ef05346c70b663ca1d97de3ad5",
"macos/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json": "1d48e925145d4b573a3b5d7960a1c585",
"macos/Runner/Base.lproj/MainMenu.xib": "85bdf02ea39336686f2e0ff5f52137cc",
"macos/Runner/Configs/AppInfo.xcconfig": "de6e5e62462d684e738ac2ecb25768f4",
"macos/Runner/Configs/Debug.xcconfig": "783e2b0e2aa72d8bc215462bb8d1569d",
"macos/Runner/Configs/Release.xcconfig": "709485d8ea7b78479bf23eb64281287d",
"macos/Runner/Configs/Warnings.xcconfig": "bbde97fb62099b5b9879fb2ffeb1a0a0",
"macos/Runner/DebugProfile.entitlements": "4ad77e84621dc5735c16180a0934fcde",
"macos/Runner/Info.plist": "9ffcbec0a18fdad9d3d606656fd46f9a",
"macos/Runner/MainFlutterWindow.swift": "25da60ddd7c7148c2a40dc3194b8ddca",
"macos/Runner/Release.entitlements": "fc4ad575c1efec3d097fb9d40a0f702f",
"macos/Runner.xcodeproj/project.pbxproj": "35fe0c0b36d3f3e1b20ebc88bbb895b2",
"macos/Runner.xcodeproj/project.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"macos/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme": "4749fc9064b9a190d4b014ea79dcae5e",
"macos/Runner.xcworkspace/contents.xcworkspacedata": "ac9a90958f80f9cc1d0d5301144fb629",
"macos/Runner.xcworkspace/xcshareddata/IDEWorkspaceChecks.plist": "7e8ed88ea03cf8357fe1c73ae979f345",
"main.dart.js": "af2e901e309113b7effdacced6857766",
"manifest.json": "379f474df111649b227c398e7574bbdf",
"pubspec.lock": "53d047af8e44cbd988e98934e3550364",
"pubspec.yaml": "f26250a8edd5fd44fd458154ec8af49e",
"README.md": "f62eeaa7616cee091b7df40146427806",
"test/widget_test.dart": "32cade57813a89c74d8d3a269232f36e",
"version.json": "0a3b50a1a4f4456e18138f0ac4b07c6c",
"web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"web/index.html": "f28280570a87a1c2c45a66d48277dc04",
"web/manifest.json": "4734db19b089f1a4d7b37fdc9824bcd2",
"web.iml": "f9bf5c490675c84d098e6772a6f2a796",
"windows/CMakeLists.txt": "e0f434edeccda0dca49269f1e0a167b2",
"windows/flutter/CMakeLists.txt": "82c70875775d10a82c7e2c3e9453a26d",
"windows/flutter/generated_plugins.cmake": "620906318e8c8297f3bc95b445ce4c47",
"windows/flutter/generated_plugin_registrant.cc": "a8f91348d8d9090f22ec69d597c41e1f",
"windows/flutter/generated_plugin_registrant.h": "0ea33875f9f8e118f9c2ded03e2e2835",
"windows/runner/CMakeLists.txt": "028602ab9754bffe716659ada7590d29",
"windows/runner/flutter_window.cpp": "9a0919fae6ddd9ffd2d7bae0e946b01e",
"windows/runner/flutter_window.h": "7defcc89d4a26d56e801241d624d48fb",
"windows/runner/main.cpp": "01bb7d9acfab1af72f17ad947706bf4f",
"windows/runner/resource.h": "1ade5dd15e613479a15e8832ed276f2b",
"windows/runner/resources/app_icon.ico": "6ea04d80ca2a3fa92c7717c3c44ccc19",
"windows/runner/runner.exe.manifest": "cd3aafe81b2f278dffaf305373ee30b4",
"windows/runner/Runner.rc": "0ca94727bc4bc6c162a05f0c5c06ad66",
"windows/runner/utils.cpp": "892a92c75eb6291ca11f62b44ea4d16b",
"windows/runner/utils.h": "fd81e143f5614eb6fd75efe539002853",
"windows/runner/win32_window.cpp": "7f39d74c653ac062929cf828a595eab1",
"windows/runner/win32_window.h": "30adb9dcb18f5cad39278e6bb44d42a7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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

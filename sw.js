if(!self.define){let e,a={};const i=(i,o)=>(i=new URL(i+".js",o).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(o,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(a[d])return;let n={};const s=e=>i(e,d),c={module:{uri:d},exports:n,require:s};a[d]=Promise.all(o.map((e=>c[e]||s(e)))).then((e=>(r(...e),n)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android/android-launchericon-144-144.png",revision:"598b0cd79863ffc8747c918b9d9a9762"},{url:"android/android-launchericon-192-192.png",revision:"ff406c6cbcbdedd0108c512a579ad13f"},{url:"android/android-launchericon-48-48.png",revision:"598ce8961c14557438b0e0eab944c053"},{url:"android/android-launchericon-512-512.png",revision:"d6c3fae9930a4f3aaca379857c9933fc"},{url:"android/android-launchericon-72-72.png",revision:"c0ecf2b43296f248af917a097c1b2183"},{url:"android/android-launchericon-96-96.png",revision:"437a4680c093c3d9297bee4734506360"},{url:"assets/index-b33647fa.css",revision:null},{url:"assets/index-feb78180.js",revision:null},{url:"assets/logo-text-d3e0d169.png",revision:null},{url:"assets/logo-text-hd-bc841cbc.png",revision:null},{url:"assets/video_thumbnail_placeholder-bbc3e313.png",revision:null},{url:"assets/youtube_social_icon_red-4777b7ac.png",revision:null},{url:"favicon.ico",revision:"4cdc6a8dfdfdc1cbe970af851239890c"},{url:"index.html",revision:"c72cdc2a2dd1cb4bd799ae1bd13e7d29"},{url:"ios/100.png",revision:"dcba600deb3c7136c7651693637a3961"},{url:"ios/1024.png",revision:"1d8649f6b76298ab00f47c717dd9f06e"},{url:"ios/114.png",revision:"65097a70ba03c407ce7946b820d506bd"},{url:"ios/120.png",revision:"4c0a6e71d73badc45868eb4c301eb9b5"},{url:"ios/128.png",revision:"0edf0a68babd9b1c817d1bc01b0d4693"},{url:"ios/144.png",revision:"598b0cd79863ffc8747c918b9d9a9762"},{url:"ios/152.png",revision:"8fd16430b9d16965dfa67b8bc43d0842"},{url:"ios/16.png",revision:"1d38d61beae5ac7723868058475985a8"},{url:"ios/167.png",revision:"0d378a347aeb269c9ef2223fceb43372"},{url:"ios/180.png",revision:"bd7dc49b71dcecf61b4a0b6afb71af5b"},{url:"ios/192.png",revision:"ff406c6cbcbdedd0108c512a579ad13f"},{url:"ios/20.png",revision:"428628eb60973205a3e3fd276a561c2e"},{url:"ios/256.png",revision:"86950e327d9c663a43ee70bdc5cf01f0"},{url:"ios/29.png",revision:"65af8e6f5726ad48b551589ee83a3d66"},{url:"ios/32.png",revision:"1a814bf90fa8628e5591daf083a43ca4"},{url:"ios/40.png",revision:"8c1af50190afb7478be76cde81e42328"},{url:"ios/50.png",revision:"00c7d4133fbb48f9d41cf00c8fa0617f"},{url:"ios/512.png",revision:"d6c3fae9930a4f3aaca379857c9933fc"},{url:"ios/57.png",revision:"0bc952dc8ce34a7fba61caf635636f97"},{url:"ios/58.png",revision:"9cd783138f061fae9b4e775e755283ad"},{url:"ios/60.png",revision:"bccc93579fe7aa8a0563ef47477f8f4e"},{url:"ios/64.png",revision:"d3c1b1b19913120a7294248de6d41d10"},{url:"ios/72.png",revision:"c0ecf2b43296f248af917a097c1b2183"},{url:"ios/76.png",revision:"69fffd87100cfa2b3375219d3578a2af"},{url:"ios/80.png",revision:"f78cdacbfd60cfaaacccac48e9ed1e4f"},{url:"ios/87.png",revision:"678428f5e847260bf1b36399362e8480"},{url:"logo-text.svg",revision:"b7c2ac5f7bd1c6b40e73fed72ced1003"},{url:"logo.svg",revision:"5110069503c67abce63fbb50ef6c91e7"},{url:"old-logo-text.svg",revision:"4e9596e86591c7d3a2c263038558a7d8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"windows11/LargeTile.scale-100.png",revision:"835b9a31d0db7a7c4c5d8d5f24bc0ab7"},{url:"windows11/LargeTile.scale-125.png",revision:"837bdea9dd339efabc86af8925b1bcf6"},{url:"windows11/LargeTile.scale-150.png",revision:"242fbb08a616bb3b077985378b5985ba"},{url:"windows11/LargeTile.scale-200.png",revision:"3e092a2cda9e06f98062a67f33fd2f59"},{url:"windows11/LargeTile.scale-400.png",revision:"4b45f4fd9a3b425a30294049182224fa"},{url:"windows11/SmallTile.scale-100.png",revision:"708dd8c490a09167743096f05113e3c4"},{url:"windows11/SmallTile.scale-125.png",revision:"0bf0cad00d081e2495c129a57e0818cc"},{url:"windows11/SmallTile.scale-150.png",revision:"4c6df71e7dabf637d15386ffe8a946e6"},{url:"windows11/SmallTile.scale-200.png",revision:"bb4de9e2039329b2edb21ef79143a21b"},{url:"windows11/SmallTile.scale-400.png",revision:"aae77327d06f2add2a1c8aee1a763e3c"},{url:"windows11/SplashScreen.scale-100.png",revision:"ce5dd4530805bca9ce62e221f704ebf0"},{url:"windows11/SplashScreen.scale-125.png",revision:"ce520da6d1b5a1d73c67e6f3a6dbcae7"},{url:"windows11/SplashScreen.scale-150.png",revision:"df5b17e3c8e09aa0c680ebcbb896491f"},{url:"windows11/SplashScreen.scale-200.png",revision:"f20d7d2913aa1ca61fe691c760641989"},{url:"windows11/SplashScreen.scale-400.png",revision:"c4385aa019dc4e74a1fea22b9d643d2e"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"1de89e598fa057c96961cbd0157a08bd"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"d3afc43592fe2ab9d30f93b17fc4c2c4"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"79e93fd4651c2abec5f6a7768a31a40c"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"dd201d0484e28307cce4f2102b5a5912"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"b28d04ef3b4043da818a5b4a504d93cc"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"38bb7cc44cde20529ba28b3719835591"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"3536d10f690d3e81acbdc52438f23b86"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"4a79ae910bdd32ed214fadafafc1a1d1"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"cd04cf4d8e7ae3d1d0264461b43d0c38"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"c200b4f541bf73b7289b7da6ed36b2a3"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"8e53d4e1c172831c810c7befe684bc65"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"46387f579a1038a8ef74a9eb5d681917"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"deff90d14b8eb06a1a3655ed1988d253"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5fe9ab801282eb971c5228d4b51dad1d"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"4ffc445ef601cf01f874e5f3220b6633"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"933d52347245d0f1162be3fb9b80b24a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"bdc7503d7b7199b08229e14f8b52e5f0"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e09394825a13acd8b5f3403a4a0b136d"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"e0f579444a75343ea69ace2e6acf1b2a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"38bb7cc44cde20529ba28b3719835591"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"3536d10f690d3e81acbdc52438f23b86"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"4a79ae910bdd32ed214fadafafc1a1d1"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"cd04cf4d8e7ae3d1d0264461b43d0c38"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"c200b4f541bf73b7289b7da6ed36b2a3"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"8e53d4e1c172831c810c7befe684bc65"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"46387f579a1038a8ef74a9eb5d681917"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"deff90d14b8eb06a1a3655ed1988d253"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5fe9ab801282eb971c5228d4b51dad1d"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"4ffc445ef601cf01f874e5f3220b6633"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"933d52347245d0f1162be3fb9b80b24a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"bdc7503d7b7199b08229e14f8b52e5f0"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e09394825a13acd8b5f3403a4a0b136d"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"e0f579444a75343ea69ace2e6acf1b2a"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"59ce37f5553dc8ce42a104a5fd321194"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"9173a067cf74ff25af31d593ddd1e9d8"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"fc861fd16a4b0b9237377d4b84cb0288"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"589bc67b0f8815d0763639da88de91f1"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"38bb7cc44cde20529ba28b3719835591"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"3536d10f690d3e81acbdc52438f23b86"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"4a79ae910bdd32ed214fadafafc1a1d1"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"cd04cf4d8e7ae3d1d0264461b43d0c38"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"c200b4f541bf73b7289b7da6ed36b2a3"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"8e53d4e1c172831c810c7befe684bc65"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"46387f579a1038a8ef74a9eb5d681917"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"deff90d14b8eb06a1a3655ed1988d253"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"5fe9ab801282eb971c5228d4b51dad1d"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"4ffc445ef601cf01f874e5f3220b6633"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"933d52347245d0f1162be3fb9b80b24a"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"bdc7503d7b7199b08229e14f8b52e5f0"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"e09394825a13acd8b5f3403a4a0b136d"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"e0f579444a75343ea69ace2e6acf1b2a"},{url:"windows11/StoreLogo.scale-100.png",revision:"00c7d4133fbb48f9d41cf00c8fa0617f"},{url:"windows11/StoreLogo.scale-125.png",revision:"5c2c315f335dd7d47d0e8396b5d957d6"},{url:"windows11/StoreLogo.scale-150.png",revision:"b6b83c97c22d719240ca861629157415"},{url:"windows11/StoreLogo.scale-200.png",revision:"dcba600deb3c7136c7651693637a3961"},{url:"windows11/StoreLogo.scale-400.png",revision:"368ca1cb4d75fdde266f624b0cbd81f2"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"2c637352d34705069032395f9ce546f7"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"fbf6fd71d2ef1cc4d0cd78766e876b63"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"83290c70a5d97f870e2228edfacbd052"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"ce5dd4530805bca9ce62e221f704ebf0"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"f20d7d2913aa1ca61fe691c760641989"},{url:"windows11/SmallTile.scale-100.png",revision:"708dd8c490a09167743096f05113e3c4"},{url:"windows11/SmallTile.scale-125.png",revision:"0bf0cad00d081e2495c129a57e0818cc"},{url:"windows11/SmallTile.scale-150.png",revision:"4c6df71e7dabf637d15386ffe8a946e6"},{url:"windows11/SmallTile.scale-200.png",revision:"bb4de9e2039329b2edb21ef79143a21b"},{url:"windows11/SmallTile.scale-400.png",revision:"aae77327d06f2add2a1c8aee1a763e3c"},{url:"windows11/Square150x150Logo.scale-100.png",revision:"1de89e598fa057c96961cbd0157a08bd"},{url:"windows11/Square150x150Logo.scale-125.png",revision:"d3afc43592fe2ab9d30f93b17fc4c2c4"},{url:"windows11/Square150x150Logo.scale-150.png",revision:"79e93fd4651c2abec5f6a7768a31a40c"},{url:"windows11/Square150x150Logo.scale-200.png",revision:"dd201d0484e28307cce4f2102b5a5912"},{url:"windows11/Square150x150Logo.scale-400.png",revision:"b28d04ef3b4043da818a5b4a504d93cc"},{url:"windows11/Wide310x150Logo.scale-100.png",revision:"2c637352d34705069032395f9ce546f7"},{url:"windows11/Wide310x150Logo.scale-125.png",revision:"fbf6fd71d2ef1cc4d0cd78766e876b63"},{url:"windows11/Wide310x150Logo.scale-150.png",revision:"83290c70a5d97f870e2228edfacbd052"},{url:"windows11/Wide310x150Logo.scale-200.png",revision:"ce5dd4530805bca9ce62e221f704ebf0"},{url:"windows11/Wide310x150Logo.scale-400.png",revision:"f20d7d2913aa1ca61fe691c760641989"},{url:"windows11/LargeTile.scale-100.png",revision:"835b9a31d0db7a7c4c5d8d5f24bc0ab7"},{url:"windows11/LargeTile.scale-125.png",revision:"837bdea9dd339efabc86af8925b1bcf6"},{url:"windows11/LargeTile.scale-150.png",revision:"242fbb08a616bb3b077985378b5985ba"},{url:"windows11/LargeTile.scale-200.png",revision:"3e092a2cda9e06f98062a67f33fd2f59"},{url:"windows11/LargeTile.scale-400.png",revision:"4b45f4fd9a3b425a30294049182224fa"},{url:"windows11/Square44x44Logo.scale-100.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.scale-125.png",revision:"59ce37f5553dc8ce42a104a5fd321194"},{url:"windows11/Square44x44Logo.scale-150.png",revision:"9173a067cf74ff25af31d593ddd1e9d8"},{url:"windows11/Square44x44Logo.scale-200.png",revision:"fc861fd16a4b0b9237377d4b84cb0288"},{url:"windows11/Square44x44Logo.scale-400.png",revision:"589bc67b0f8815d0763639da88de91f1"},{url:"windows11/StoreLogo.scale-100.png",revision:"00c7d4133fbb48f9d41cf00c8fa0617f"},{url:"windows11/StoreLogo.scale-125.png",revision:"5c2c315f335dd7d47d0e8396b5d957d6"},{url:"windows11/StoreLogo.scale-150.png",revision:"b6b83c97c22d719240ca861629157415"},{url:"windows11/StoreLogo.scale-200.png",revision:"dcba600deb3c7136c7651693637a3961"},{url:"windows11/StoreLogo.scale-400.png",revision:"368ca1cb4d75fdde266f624b0cbd81f2"},{url:"windows11/SplashScreen.scale-100.png",revision:"ce5dd4530805bca9ce62e221f704ebf0"},{url:"windows11/SplashScreen.scale-125.png",revision:"ce520da6d1b5a1d73c67e6f3a6dbcae7"},{url:"windows11/SplashScreen.scale-150.png",revision:"df5b17e3c8e09aa0c680ebcbb896491f"},{url:"windows11/SplashScreen.scale-200.png",revision:"f20d7d2913aa1ca61fe691c760641989"},{url:"windows11/SplashScreen.scale-400.png",revision:"c4385aa019dc4e74a1fea22b9d643d2e"},{url:"windows11/Square44x44Logo.targetsize-16.png",revision:"38bb7cc44cde20529ba28b3719835591"},{url:"windows11/Square44x44Logo.targetsize-20.png",revision:"3536d10f690d3e81acbdc52438f23b86"},{url:"windows11/Square44x44Logo.targetsize-24.png",revision:"4a79ae910bdd32ed214fadafafc1a1d1"},{url:"windows11/Square44x44Logo.targetsize-30.png",revision:"c200b4f541bf73b7289b7da6ed36b2a3"},{url:"windows11/Square44x44Logo.targetsize-32.png",revision:"8e53d4e1c172831c810c7befe684bc65"},{url:"windows11/Square44x44Logo.targetsize-36.png",revision:"46387f579a1038a8ef74a9eb5d681917"},{url:"windows11/Square44x44Logo.targetsize-40.png",revision:"deff90d14b8eb06a1a3655ed1988d253"},{url:"windows11/Square44x44Logo.targetsize-44.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.targetsize-48.png",revision:"5fe9ab801282eb971c5228d4b51dad1d"},{url:"windows11/Square44x44Logo.targetsize-60.png",revision:"4ffc445ef601cf01f874e5f3220b6633"},{url:"windows11/Square44x44Logo.targetsize-64.png",revision:"933d52347245d0f1162be3fb9b80b24a"},{url:"windows11/Square44x44Logo.targetsize-72.png",revision:"bdc7503d7b7199b08229e14f8b52e5f0"},{url:"windows11/Square44x44Logo.targetsize-80.png",revision:"e09394825a13acd8b5f3403a4a0b136d"},{url:"windows11/Square44x44Logo.targetsize-96.png",revision:"e0f579444a75343ea69ace2e6acf1b2a"},{url:"windows11/Square44x44Logo.targetsize-256.png",revision:"cd04cf4d8e7ae3d1d0264461b43d0c38"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"38bb7cc44cde20529ba28b3719835591"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"3536d10f690d3e81acbdc52438f23b86"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"4a79ae910bdd32ed214fadafafc1a1d1"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"c200b4f541bf73b7289b7da6ed36b2a3"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"8e53d4e1c172831c810c7befe684bc65"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"46387f579a1038a8ef74a9eb5d681917"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"deff90d14b8eb06a1a3655ed1988d253"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"5fe9ab801282eb971c5228d4b51dad1d"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"4ffc445ef601cf01f874e5f3220b6633"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"933d52347245d0f1162be3fb9b80b24a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"bdc7503d7b7199b08229e14f8b52e5f0"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e09394825a13acd8b5f3403a4a0b136d"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"e0f579444a75343ea69ace2e6acf1b2a"},{url:"windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"cd04cf4d8e7ae3d1d0264461b43d0c38"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"38bb7cc44cde20529ba28b3719835591"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"3536d10f690d3e81acbdc52438f23b86"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"4a79ae910bdd32ed214fadafafc1a1d1"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"c200b4f541bf73b7289b7da6ed36b2a3"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"8e53d4e1c172831c810c7befe684bc65"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"46387f579a1038a8ef74a9eb5d681917"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"deff90d14b8eb06a1a3655ed1988d253"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"80e54d8630dc490b526497f0c99ff602"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"5fe9ab801282eb971c5228d4b51dad1d"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"4ffc445ef601cf01f874e5f3220b6633"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"933d52347245d0f1162be3fb9b80b24a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"bdc7503d7b7199b08229e14f8b52e5f0"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e09394825a13acd8b5f3403a4a0b136d"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"e0f579444a75343ea69ace2e6acf1b2a"},{url:"windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"cd04cf4d8e7ae3d1d0264461b43d0c38"},{url:"android/android-launchericon-512-512.png",revision:"d6c3fae9930a4f3aaca379857c9933fc"},{url:"android/android-launchericon-192-192.png",revision:"ff406c6cbcbdedd0108c512a579ad13f"},{url:"android/android-launchericon-144-144.png",revision:"598b0cd79863ffc8747c918b9d9a9762"},{url:"android/android-launchericon-96-96.png",revision:"437a4680c093c3d9297bee4734506360"},{url:"android/android-launchericon-72-72.png",revision:"c0ecf2b43296f248af917a097c1b2183"},{url:"android/android-launchericon-48-48.png",revision:"598ce8961c14557438b0e0eab944c053"},{url:"ios/16.png",revision:"1d38d61beae5ac7723868058475985a8"},{url:"ios/20.png",revision:"428628eb60973205a3e3fd276a561c2e"},{url:"ios/29.png",revision:"65af8e6f5726ad48b551589ee83a3d66"},{url:"ios/32.png",revision:"1a814bf90fa8628e5591daf083a43ca4"},{url:"ios/40.png",revision:"8c1af50190afb7478be76cde81e42328"},{url:"ios/50.png",revision:"00c7d4133fbb48f9d41cf00c8fa0617f"},{url:"ios/57.png",revision:"0bc952dc8ce34a7fba61caf635636f97"},{url:"ios/58.png",revision:"9cd783138f061fae9b4e775e755283ad"},{url:"ios/60.png",revision:"bccc93579fe7aa8a0563ef47477f8f4e"},{url:"ios/64.png",revision:"d3c1b1b19913120a7294248de6d41d10"},{url:"ios/72.png",revision:"c0ecf2b43296f248af917a097c1b2183"},{url:"ios/76.png",revision:"69fffd87100cfa2b3375219d3578a2af"},{url:"ios/80.png",revision:"f78cdacbfd60cfaaacccac48e9ed1e4f"},{url:"ios/87.png",revision:"678428f5e847260bf1b36399362e8480"},{url:"ios/100.png",revision:"dcba600deb3c7136c7651693637a3961"},{url:"ios/114.png",revision:"65097a70ba03c407ce7946b820d506bd"},{url:"ios/120.png",revision:"4c0a6e71d73badc45868eb4c301eb9b5"},{url:"ios/128.png",revision:"0edf0a68babd9b1c817d1bc01b0d4693"},{url:"ios/144.png",revision:"598b0cd79863ffc8747c918b9d9a9762"},{url:"ios/152.png",revision:"8fd16430b9d16965dfa67b8bc43d0842"},{url:"ios/167.png",revision:"0d378a347aeb269c9ef2223fceb43372"},{url:"ios/180.png",revision:"bd7dc49b71dcecf61b4a0b6afb71af5b"},{url:"ios/192.png",revision:"ff406c6cbcbdedd0108c512a579ad13f"},{url:"ios/256.png",revision:"86950e327d9c663a43ee70bdc5cf01f0"},{url:"ios/512.png",revision:"d6c3fae9930a4f3aaca379857c9933fc"},{url:"ios/1024.png",revision:"1d8649f6b76298ab00f47c717dd9f06e"},{url:"manifest.webmanifest",revision:"ce16572d08e5088a3de4642c9bc49111"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

const products = {
  "iphone-15-pro-max": {
    brand: "Apple",
    name: "iPhone 15 Pro Max (256)",
    price: 1000000,
    // oldPrice: 899000,
    image: "images/photo-1695048133142-1a20484d2569.jfif",
    description:
      "Apple’s flagship smartphone from 2023 — combining top-tier performance, a large gorgeous display, and a professional-grade camera system in a premium titanium design.",
    specs: [
      "Apple A17 Pro — powerful performance for apps, gaming, and creative tasks.",
      "6.7″ Super Retina XDR OLED with ProMotion 120 Hz and extremely bright up to 2000 nits.",
      "256 GB / 512 GB / 1 TB — no expandable storage.",
      "48 MP main + 12 MP ultra-wide + 12 MP telephoto (5× optical zoom) — versatile and excellent for photos and video.",
      "12 MP for selfies and video calls.",
      "~4400 mAh with fast charging, MagSafe wireless and Qi2 support.",
      "Titanium frame, Ceramic Shield front, IP68 water/dust resistance.",
      "Runs iOS 17 (upgradable) with Apple Intelligence features."
    ]
  },

  "redmi_15c": {
    brand: "Redmi",
    name: "Redmi 15C (8+256gb)",
    price: 177000,
    oldPrice: null,
    image: "redmi/redmi_15c_epto_it_1752845765260.webp",
    description: "A budget-friendly smartphone with a large display, huge battery, and reliable everyday performance — great if you want long battery life and smooth basics without a high price.",
    specs: [
      "6.9″ HD+ IPS LCD, 120 Hz refresh — big and smooth for browsing and videos.",
      "MediaTek Helio G81-Ultra octa-core — good for everyday apps and light games.",
      "4GB / 6GB / 8GB RAM with 128GB / 256GB storage, expandable via microSD (up to 1 TB).",
      "50 MP dual camera — simple but capable for daytime photos.",
      "8 MP selfie camera.",
      "6000 mAh with 33W fast charging — lasts long and recharges quickly.",
      "Android 15 with HyperOS 2 — modern OS and features.",
      "Side-mounted fingerprint sensor, IP64 splash resistance, USB-C port, 3.5 mm headphone jack."
    ]
  },
  "Samsung-s21":{
    brand: "Samsung",
    name: "Samsung Galaxy S21 (8+256)",
    price:240000,
    // oldPrice:849000,
    image:"images/samsungs21.jfif",
    description: "A flagship Samsung phone from 2021 with a powerful chipset, smooth display, versatile camera system, and 5G support.",
    specs: [
        "Dynamic AMOLED 2X, 1080×2400, 120 Hz refresh — sharp and smooth.",
        "Snapdragon 888 (Global/selected regions) or Exynos 2100 (international) — flagship-level performance.",
        "8 GB RAM,256 GB internal storage (no microSD).",
        "12 MP main + 12 MP ultra-wide + 64 MP telephoto — versatile shooting with 8K video capture.",
        "10 MP selfie.",
        "4000 mAh with fast charging, wireless charging & reverse wireless charging.",
        "Android with Samsung One UI, 5G connectivity, IP68 dust/water resistance."
    ]
  },
"iphone-15":{
    brand:"Apple",
    name: "iPhone 15 (128)",
    price:705000,
    oldPrice:null,
    image: "iphone/Iph 15.webp",
    description: "A mainstream flagship iPhone that brings several upgrades from older models, including a brighter OLED display, strong performance, improved cameras, and a USB-C port.",
    specs:[
        "Apple A16 Bionic — smooth performance for apps, games, and multitasking.",
        "Super Retina XDR OLED (2556×1179) with Dynamic Island and very bright outdoor performance.",
        "128 GB / 256 GB / 512 GB (+ 6 GB RAM).",
        "48 MP main + 12 MP ultrawide with Smart HDR and Photonic Engine — solid photo quality.",
        "12 MP TrueDepth — great for selfies and video calls.",
        "All-day battery life with USB-C charging and MagSafe wireless charging supported.",
        "Aluminum frame with Ceramic Shield front and IP68 water/dust resistance.",
        "Comes with iOS 17, upgradable to later versions.",
        "5G, Wi-Fi 6, Bluetooth 5.3."
    ]
},
"itel-s26-ultra":{
    brand:"itel",
    name:"Itel S26 Ultra(8+256)",
    price:282000,
    image:"itel/itel-s26-ultra-resize_.webp",
    description:"A feature-rich budget smartphone with a large AMOLED display, strong battery life, capable cameras, and modern software — great value if you want premium-style features without a high price.",
    specs:[
        "6.78″ 1.5K 3D-Curved AMOLED with 144 Hz refresh rate and Corning Gorilla Glass 7i — smooth, bright visuals.",
        "Unisoc T7300 (6 nm) octa-core — solid performance for everyday tasks and light gaming.",
        "8 GB RAM (with extended RAM support) + 256 GB internal storage — roomy space for apps and files.",
        "50 MP AI dual camera — good photos and video recording.",
        "32 MP selfie camera with Super Night Mode — clear selfies even in low light.",
        "6000 mAh with 18 W fast charging — all-day battery life.",
        "Android 15 with itel OS 15 — modern software with AI features.",
        "Under-display fingerprint sensor, IP65 water & dust resistance, USB-C port, and NFC (region dependent)."
    ]
},
"itel-s26-ultra_128ram":{
brand:"itel",
    name:"Itel S26 Ultra(8+128)",
    price:237000,
    image:"itel/itel-s26-ultra-resize_.webp",
    description:"A feature-rich budget smartphone with a large AMOLED display, strong battery life, capable cameras, and modern software — great value if you want premium-style features without a high price.",
    specs:[
        "6.78″ 1.5K 3D-Curved AMOLED with 144 Hz refresh rate and Corning Gorilla Glass 7i — smooth, bright visuals.",
        "Unisoc T7300 (6 nm) octa-core — solid performance for everyday tasks and light gaming.",
        "8 GB RAM (with extended RAM support) + 256 GB internal storage — roomy space for apps and files.",
        "50 MP AI dual camera — good photos and video recording.",
        "32 MP selfie camera with Super Night Mode — clear selfies even in low light.",
        "6000 mAh with 18 W fast charging — all-day battery life.",
        "Android 15 with itel OS 15 — modern software with AI features.",
        "Under-display fingerprint sensor, IP65 water & dust resistance, USB-C port, and NFC (region dependent)."
    ]
},
"Airpods_Pro":{
    brand:"Apple",
    name:"AirPods Pro",
    price:12,
    image:"accessories/AirPod pro.webp",
    description:"Active Noise Cancellation, Adaptive Audio, and USB-C charging case.",
    specs:[
"Active Noise Cancellation",
"Adaptive Audio",
"USB-C charging",
"6 hours battery"
    ]
},
"AnkerPowerbank":{
brand:"Anker",
name:"Anker PowerCore 20000mAh",
price:35000,
image:"images/magsafeCharger.jfif",
description:"Fast wireless charging with perfect alignment every time.",
specs:[
"15W fast charging",
"MagSafe alignment",
"1m cable"
]
},
"MagSafe":{
    brand:"Anker",
name:"Anker PowerCore 20000mAh",
price:29000,
image:"images/magsafeCharger.jfif",
description:"Fast wireless charging with perfect alignment every time.",
specs:[
"15W fast charging",
"MagSafe alignment",
"1m cable"
]
},
"Iphone14":{
  brand:"Apple",
name:"iPhone 14 (256)",
price:522000,
image:"iphone/iph14.webp",
description:"A mainstream iPhone released in September 2022 that offers a balanced mix of performance, cameras, and everyday features in a compact 6.1″ design.",
specs:[
"Apple A15 Bionic — smooth performance for apps, gaming, and multitasking.",
"6.1″ Super Retina XDR OLED (1170×2532) — vivid colors and crisp details.",
"128 GB / 256 GB / 512 GB (no microSD).",
"Dual 12 MP (main + ultra-wide) — good everyday photos & video.",
"12 MP TrueDepth — solid for selfies and Face ID.",
"~3279 mAh with fast charging, wireless & MagSafe support.",
"Aluminum frame with Ceramic Shield front and IP68 water/dust resistance.",
"Originally iOS 16 (upgradable to later versions).",
"5G, Wi-Fi, Bluetooth, NFC."
]
},
"Note10plus":{
  brand:"Samsung",
name:"Samsung Note10 plus (12+256)",
price:200000,
image:"samsung/Note10plus.webp",
description:"A premium Samsung flagship from 2019, known for its large vivid display, powerful hardware for its time, and the signature S Pen stylus — great for productivity and multitasking.",
specs:[
"6.8″ Dynamic AMOLED, 1440×3040 (QHD+) — bright, sharp, and great for media or stylus work.",
"Snapdragon 855 (or Exynos 9825, region-dependent) — solid flagship-class performance in 2019.",
"12 GB RAM, 256 GB / 512 GB storage + microSD up to 1 TB — plenty of space and smooth multitasking.",
"12 MP main + 16 MP ultra-wide + 12 MP telephoto + ToF sensor — versatile photo setup with depth sensing.",
"10 MP — good front camera for selfies and video.",
"4300 mAh — decent all-day use with fast charging and wireless charging support.",
"S Pen stylus with productivity features, IP68 water/dust resistance, stereo speakers, USB-C."
]
},
"Note10plus_512":{
  brand:"Samsung",
name:"Samsung Note10 plus (12+512)",
price:307000,
image:"samsung/Note10plus.webp",
description:"A premium Samsung flagship from 2019, known for its large vivid display, powerful hardware for its time, and the signature S Pen stylus — great for productivity and multitasking.",
specs:[
"6.8″ Dynamic AMOLED, 1440×3040 (QHD+) — bright, sharp, and great for media or stylus work.",
"Snapdragon 855 (or Exynos 9825, region-dependent) — solid flagship-class performance in 2019.",
"12 GB RAM, 256 GB / 512 GB storage + microSD up to 1 TB — plenty of space and smooth multitasking.",
"12 MP main + 16 MP ultra-wide + 12 MP telephoto + ToF sensor — versatile photo setup with depth sensing.",
"10 MP — good front camera for selfies and video.",
"4300 mAh — decent all-day use with fast charging and wireless charging support.",
"S Pen stylus with productivity features, IP68 water/dust resistance, stereo speakers, USB-C."
]
},
"Note10":{
 brand:"Samsung",
name:"Samsung Note10 (12+256)",
price:207000,
image:"samsung/Note10.webp",
description:"A premium Samsung flagship from 2019 that packs a compact 6.3″ display, powerful performance for its time, and the signature S Pen stylus for productivity and creativity.",
specs:[
"6.3″ Dynamic AMOLED, 1080×2280 (FHD+) with HDR10+ — sharp, vibrant screen in a compact size.",
"Snapdragon 855 (or Exynos 9825 internationally) — flagship-level performance for apps and multitasking.",
"8 GB RAM with 256 GB internal storage (no microSD expansion).",
"12 MP main + 12 MP telephoto + 16 MP ultra-wide — versatile triple-lens setup.",
"10 MP — good for selfies and video.",
"3500 mAh with fast charging, wireless charging, and reverse wireless charging.",
"S Pen with Air Actions — control phone functions and apps via gestures."
]
},
"Note10_512":{
 brand:"Samsung",
name:"Samsung Note10 (12+512)",
price:207000,
image:"samsung/Note10.webp",
description:"A premium Samsung flagship from 2019 that packs a compact 6.3″ display, powerful performance for its time, and the signature S Pen stylus for productivity and creativity.",
specs:[
"6.3″ Dynamic AMOLED, 1080×2280 (FHD+) with HDR10+ — sharp, vibrant screen in a compact size.",
"Snapdragon 855 (or Exynos 9825 internationally) — flagship-level performance for apps and multitasking.",
"8 GB RAM with 256 GB internal storage (no microSD expansion).",
"12 MP main + 12 MP telephoto + 16 MP ultra-wide — versatile triple-lens setup.",
"10 MP — good for selfies and video.",
"3500 mAh with fast charging, wireless charging, and reverse wireless charging.",
"S Pen with Air Actions — control phone functions and apps via gestures."
]
},
"Hot60proplus":{
brand:"Infinix",
name:"Infinix Hot60pro+ (8+256)",
price:315000,
image:"infinix/Hot60pro+.webp",
description:"A sleek mid-range smartphone with a large curved AMOLED screen, capable cameras, long battery life, and modern software — excellent value for everyday use and media.",
specs:[
"6.78″ AMOLED with 144 Hz refresh rate, 1.5K physical resolution, and Gorilla Glass 7i protection — large, bright, and smooth visuals.",
"MediaTek Helio G200 (6 nm) — good for daily apps, social media, and light gaming.",
"8 GB RAM (expandable via virtual RAM) + 256 GB storage — plenty of space for apps, photos, and files.",
"50 MP main (Sony IMX882) + auxiliary lens — versatile photos and decent performance in good light.",
"13 MP selfie camera — clear selfies and video calls.",
"5160 mAh with 45 W fast charging — long usage and quick refills.",
"Android 15 with XOS 15.1 — modern UI with Android’s latest features.",
"Under-display fingerprint sensor, stereo speakers tuned by JBL, NFC, IP65 water/dust resistance, USB-C, FM radio."
]
},
"iphone_17pro":{
brand:"Apple",
name:"iPhone 17 Pro (256gb)",
price:1950000,
image:"iphone/iphone_17pro__0s6piftg70ym_large.jpeg",
description:"One of Apple’s most powerful iPhones yet, combining cutting-edge performance with professional-grade cameras and a premium design.",
specs:[
"A19 Pro chip (6-core CPU, 6-core GPU, 16-core Neural Engine) — top-tier speed and graphics performance.",
"12 GB RAM (high multitasking performance).",
"6.3″ Super Retina XDR OLED display",
"2622×1206 resolution (~460 ppi)",
"ProMotion up to 120 Hz, Always-On display, HDR & True Tone",
"Triple 48 MP Pro Fusion cameras: Main, Ultra Wide, Telephoto",
"Telephoto with up to 8× optical-quality zoom",
"Digital zoom up to ~40×",
"256 GB / 512 GB / 1 TB"
]
},
"S25ultra":{
  brand:"Samsung",
name:"Samsung Galaxy S24 Ultra (12+256)",
price:970000,
image:"samsung/S24ultra.webp",
description:"A top-end flagship Android phone with a huge 6.9″ display, powerful performance, advanced cameras, and long-term software support.",
specs:[
"6.9″ Dynamic AMOLED 2X, QHD+ (1440×3120), 120 Hz — bright and smooth visuals.",
"Snapdragon 8 Elite for Galaxy — high performance for apps, gaming & AI tasks.",
"Around 12 GB RAM with 256 GB / 512 GB / 1 TB storage options.",
"Quad cameras with a 200 MP main sensor, 50 MP ultra-wide, plus telephoto lenses",
"12 MP selfie camera.",
"5000 mAh, with 45 W wired and 15–25 W wireless charging.",
"Android 15 with One UI 7 and up to 7 years of updates",
"Titanium frame, S Pen support, IP68 water/dust resistance."
]
},
"Redmi-Note-15":{
   brand:"Redmi",
name:"Redmi Note 15 (8+256)",
price:314000,
image:"redmi/Redmi-Note-15.webp",
description:"A mid-range smartphone from Xiaomi’s popular Note lineup — offering a large AMOLED display, strong battery, capable camera, and solid everyday performance.",
specs:[
"6.77″ FHD+ AMOLED, 120 Hz — bright and smooth visuals.",
"Qualcomm Snapdragon 6 Gen 3 — good mid-range performance.",
"8 GB RAM + 128 GB / 256 GB storage (expandable via microSD).",
"108 MP main camera + 8 MP ultra-wide — versatile imaging.",
"20 MP selfie camera.",
"6000 mAh with 33–45 W fast charging — long battery life..",
"Android 15 with HyperOS.",
"In-display fingerprint sensor, USB-C, 5G support on some variants."
]
},
"Tecno-Camon-40-Pro-5G":{
     brand:"Tecno",
name:"Tecno Camon 40 Pro 5G (8+256)",
price:396000,
image:"Tecno/Tecno-Camon-40-Pro-5G_featured-image-packshot-review.jpg",
description:"A strong mid-range Android phone with a big smooth display, capable cameras, long battery life, and 5G connectivity — great for everyday use and media.",
specs:[
"6.78″ AMOLED, 144 Hz refresh — smooth and bright screen for scrolling and games.",
"MediaTek Dimensity 7300 Ultimate — solid performance for daily tasks and moderate gaming.",
"8 GB RAM with 256 GB storage — roomy space and good multitasking.",
"50 MP main (OIS) + 8 MP ultrawide — versatile photo setup with optical image",
"50 MP selfie camera — high-resolution selfies and video calls.",
"5200 mAh with 45 W fast charging — all-day use and quick top-ups.",
"Android 15 with HiOS 15 — modern software and features.",
"5G support, IP68/IP69 water & dust resistance, in-display fingerprint sensor, NFC, stereo speakers."
]
},
"A065G":{
  brand:"Samsung",
name:"Samsung A06 5G (4+64)",
price:190000,
image:"samsung/A065G.webp",
description:"A budget-friendly 5G Samsung phone with a large display, long battery life, and a capable camera — great for everyday use and media.",
specs:[
"6.7″ HD+ PLS LCD, 90 Hz refresh — smooth for scrolling and videos.",
"MediaTek Dimensity 6300 (octa-core) — solid performance for daily apps and 5G.",
"4 GB RAM with 64 GB storage (expandable via microSD).",
"50 MP main + 2 MP depth — decent photos for the price.",
"8 MP selfie camera.",
"5000 mAh with 25 W fast charging — all-day battery.",
"Android 15 with One UI 7 — modern software with years of updates.",
"5G support, side-mounted fingerprint sensor, IP54 dust/splash protection."
]
},
"RedmiNote14":{
 brand:"Redmi",
name:"Redmi Note14 (8+256g)",
price:275000,
image:"redmi/RedmiNote14.webp",
description:"A solid mid-range Android smartphone with a large AMOLED display, reliable performance, long battery life, and versatile cameras — great value for everyday use in 2024/2025.",
specs:[
"6.67″ FHD+ AMOLED, 120 Hz — bright, smooth visuals and good color quality.",
"MediaTek Dimensity 7025 Ultra (6 nm) — decent performance for apps, social media, and light gaming.",
"6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable via microSD up to 1 TB).",
"108 MP main + 2 MP depth + 2 MP macro — capable camera setup for detailed photos.",
"20 MP selfie camera — good for selfies and video calls.",
"5500 mAh with 33 W fast charging — long endurance and quick recharge.",
"Android (HyperOS) — smooth interface with modern features.",
"In-display fingerprint sensor, dual stereo speakers, 3.5 mm headphone jack, NFC (market-dependent), IP54 splash resistance.",
"4G / 5G support on some variants (region-dependent)."
]
},
"itelA06_32ram":{
brand:"Itel",
name:"Itel A06 (2+32)",
price:80000,
image:"itel/itelA06.webp",
description:"A budget-friendly entry-level smartphone designed for basic everyday use like calls, messaging, browsing, and social apps with long battery life and simple features.",
specs:[
"6.6″ HD+ Water-drop screen — big and easy to view for videos and browsing.",
"Quad-core Unisoc SC7731E — basic performance for simple tasks.",
"2 GB RAM (expandable up to ~4 GB) + 32 GB storage (expandable via microSD).",
"8 MP — basic everyday photos.",
"5 MP — simple selfies and video calls.",
"4000 mAh — all-day battery life for basic usage.",
"Android 14 (Go edition) — lightweight Android for entry-level devices.",
"Fingerprint sensor, face unlock, USB-C port, 3.5 mm headphone jack, and expandable storage.",
]
},
"Fold4":{
brand:"Samsung",
name:"Samsung Fold4 (12+256)",
price:610000,
image:"samsung/Fold4.webp",
description:"A premium foldable flagship that doubles as a phone and a small tablet — ideal for multitasking, productivity, and immersive media.",
specs:[
"7.6″ Foldable Dynamic AMOLED 2X main screen, 120 Hz — huge tablet-like display when unfolded.",
"6.2″ Dynamic AMOLED 2X cover screen, 120 Hz — usable like a regular smartphone when folded.",
"Qualcomm Snapdragon 8+ Gen 1 (5G) — high-end performance for apps, games, and multitasking.",
"12 GB RAM with 256 GB / 512 GB / 1 TB storage — plenty of room without expandable microSD.",
"50 MP main + 12 MP ultra-wide + 10 MP telephoto (3× optical zoom).",
"10 MP on the cover display; 4 MP under-display selfie camera on the main screen.",
"4400 mAh with 25 W wired, 15 W wireless, and reverse wireless charging support.",
"Runs Android 13 with One UI, split-screen multitasking, and S Pen Fold Edition support (stylus sold separately).",
"IPX8 water resistance, Gorilla Glass Victus+, Armor Aluminum frame, side fingerprint sensor.",
]
},
"Fold5":{
brand:"Samsung",
name:"Samsung Fold5 (12+256)",
price:710000,
image:"samsung/Fold5.jpeg",
description:"A premium foldable flagship that doubles as a phone and a small tablet — ideal for multitasking, productivity, and immersive media.",
specs:[
"7.6″ Foldable Dynamic AMOLED 2X, 120 Hz (main) + 6.2″ Dynamic AMOLED 2X, 120 Hz (cover) — big tablet-like screen when open and smooth visuals.",
"Qualcomm Snapdragon 8 Gen 2 — flagship performance for apps, gaming, and multitasking.",
"12 GB RAM with 256 GB / 512 GB / 1 TB storage (UFS 4.0).",
"50 MP main + 12 MP ultra-wide + 10 MP telephoto (3× optical zoom) — versatile camera setup.",
"10 MP on the cover screen + 4 MP under-display camera.",
"4400 mAh with 25 W wired, 15 W wireless, and reverse charging.",
"Android (One UI) with multitasking features and productivity tools.",
"S Pen support, IPX8 water resistance, side-mounted fingerprint sensor, 5G, stereo speakers.",
]
},
"Fold6":{
brand:"Samsung",
name:"Samsung Fold6 (12+256)",
price:810000,
image:"samsung/Fold6.webp",
description:"Samsung’s flagship foldable smartphone (2024–2025) that combines a phone and small tablet in one sleek device — built for multitasking, productivity, and premium performance.",
specs:[
"7.6″ Foldable Dynamic AMOLED 2X main display with 120 Hz adaptive refresh rate — huge tablet-like screen when unfolded.",
"6.3″ Dynamic AMOLED 2X cover display, also 120 Hz — usable like a regular phone screen when folded.",
"Qualcomm Snapdragon 8 Gen 3 for Galaxy — flagship-class performance for apps, games, and multitasking.",
"12 GB RAM + 256 GB / 512 GB / 1 TB internal storage (no microSD).",
"50 MP main + 10 MP telephoto (3× optical zoom) + 12 MP ultrawide, plus 10 MP cover selfie + 4 MP under-display camera on the main screen.",
"4400 mAh with 25 W wired, 15 W wireless, and reverse wireless charging support.",
"4400 mAh with 25 W wired, 15 W wireless, and reverse charging.",
"Android 14 with One UI 6.1.1 — modern software and multitasking features.",
"5G support, side-mounted fingerprint sensor, Samsung DeX (desktop mode), UWB, Gorilla Glass Victus 2, and IP48 water/dust resistance.",
]
},
"S22_256ram":{
brand:"Samsung",
name:"Samsung Galaxy S22 (8+256)",
price:318000,
image:"samsung/Samsung GalaxyS22.webp",
description:"A 2022 flagship from Samsung that combines a bright, smooth AMOLED display, capable cameras, strong performance, and 5G connectivity — still a solid choice if you want a compact, premium Android phone.",
specs:[
"6.1″ Dynamic AMOLED 2X, FHD+ 120 Hz — smooth visuals with good brightness and HDR support.",
"Snapdragon 8 Gen 1 (most regions) or Exynos 2200 (some regions) — flagship-level performance for apps and games.",
"8 GB RAM + 128 GB / 256 GB storage.",
"50 MP main + 12 MP ultra-wide + 10 MP telephoto (3× optical zoom) — versatile setup for photos & video.",
"10 MP selfie camera.",
"3700 mAh with 25 W wired and 15 W wireless charging support.",
"Android (launched with Android 12 + One UI), 5G support, Wi-Fi 6, Bluetooth 5.2, IP68 water/dust resistance, Gorilla Glass Victus+.",
]
},
"S22_128ram":{
brand:"Samsung",
name:"Samsung Galaxy S22 (8+128)",
price:298000,
image:"samsung/Samsung GalaxyS22.webp",
description:"A 2022 flagship from Samsung that combines a bright, smooth AMOLED display, capable cameras, strong performance, and 5G connectivity — still a solid choice if you want a compact, premium Android phone.",
specs:[
"6.1″ Dynamic AMOLED 2X, FHD+ 120 Hz — smooth visuals with good brightness and HDR support.",
"Snapdragon 8 Gen 1 (most regions) or Exynos 2200 (some regions) — flagship-level performance for apps and games.",
"8 GB RAM + 128 GB / 256 GB storage.",
"50 MP main + 12 MP ultra-wide + 10 MP telephoto (3× optical zoom) — versatile setup for photos & video.",
"10 MP selfie camera.",
"3700 mAh with 25 W wired and 15 W wireless charging support.",
"Android (launched with Android 12 + One UI), 5G support, Wi-Fi 6, Bluetooth 5.2, IP68 water/dust resistance, Gorilla Glass Victus+.",
]
},
"Samsung-s21_128":{
    brand: "Samsung",
    name: "Samsung Galaxy S21 (8+128)",
    price:233000,
    // oldPrice:849000,
    image:"images/samsungs21.jfif",
    description: "A flagship Samsung phone from 2021 with a powerful chipset, smooth display, versatile camera system, and 5G support.",
    specs: [
        "Dynamic AMOLED 2X, 1080×2400, 120 Hz refresh — sharp and smooth.",
        "Snapdragon 888 (Global/selected regions) or Exynos 2100 (international) — flagship-level performance.",
        "8 GB RAM,256 GB internal storage (no microSD).",
        "12 MP main + 12 MP ultra-wide + 64 MP telephoto — versatile shooting with 8K video capture.",
        "10 MP selfie.",
        "4000 mAh with fast charging, wireless charging & reverse wireless charging.",
        "Android with Samsung One UI, 5G connectivity, IP68 dust/water resistance."
    ]
  },
  "Samsung-s21_plus_128":{
    brand: "Samsung",
    name: "Samsung Galaxy S21 Plus (8+128)",
    price:260000,
    // oldPrice:849000,
    image:"samsung/S21plus.webp",
    description: "A larger-screen variant of the Galaxy S21 series with a bright 120 Hz AMOLED display, powerful flagship-level performance from 2021, versatile cameras, and long-term software support.",
    specs: [
        "6.7″ Dynamic AMOLED 2X, 1080 × 2400, 120 Hz, HDR10+ — smooth and vibrant visuals.",
        "Exynos 2100 (most international models) or Snapdragon 888 5G (USA/China) — flagship performance for apps and gaming.",
        ": 8 GB RAM + 128 GB or 256 GB storage — spacious and responsive.",
        "12 MP main + 12 MP ultra-wide + 64 MP telephoto — versatile triple-lens system with hybrid zoom.",
        "10 MP — clear selfies and video calls.",
        "4800 mAh with 25 W wired charging support — solid all-day battery.",
        "Launched with Android 11 + One UI, upgradable in later years.",
        "5G, Wi-Fi 6, Bluetooth, Stereo Speakers, Under-display Fingerprint Sensor, IP68 water/dust resistance."
    ]
  },
    "Samsung-s21_plus_256":{
    brand: "Samsung",
    name: "Samsung Galaxy S21 Plus (8+256)",
    price:270000,
    // oldPrice:849000,
    image:"samsung/S21plus.webp",
    description: "A larger-screen variant of the Galaxy S21 series with a bright 120 Hz AMOLED display, powerful flagship-level performance from 2021, versatile cameras, and long-term software support.",
    specs: [
        "6.7″ Dynamic AMOLED 2X, 1080 × 2400, 120 Hz, HDR10+ — smooth and vibrant visuals.",
        "Exynos 2100 (most international models) or Snapdragon 888 5G (USA/China) — flagship performance for apps and gaming.",
        "8 GB RAM + 128 GB or 256 GB storage — spacious and responsive.",
        "12 MP main + 12 MP ultra-wide + 64 MP telephoto — versatile triple-lens system with hybrid zoom.",
        "10 MP — clear selfies and video calls.",
        "4800 mAh with 25 W wired charging support — solid all-day battery.",
        "Launched with Android 11 + One UI, upgradable in later years.",
        "5G, Wi-Fi 6, Bluetooth, Stereo Speakers, Under-display Fingerprint Sensor, IP68 water/dust resistance."
    ]
  },
      "Note20ultra":{
    brand: "Samsung",
    name: "Samsung Note20 Ultra (12+256)",
    price:430000,
    // oldPrice:849000,
    image:"samsung/Note20ultra.webp",
    description: "A premium flagship phone from Samsung’s Note series (2020) — known for its large high-refresh display, powerful cameras, integrated S Pen stylus, and flagship-level performance.",
    specs: [
        ": 6.9″ Dynamic AMOLED 2X, 1440 × 3088 resolution, 120 Hz refresh rate, HDR10+ — bright, smooth, and great for media & productivity.",
        "Exynos 990 (global) or Snapdragon 865+ (USA/selected regions) — flagship-class performance for apps, games, and multitasking.",
        "8 GB / 12 GB RAM with 128 GB / 256 GB / 512 GB storage (expandable via microSD).",
        "108 MP main + 12 MP periscope telephoto (5× optical zoom) + 12 MP ultra-wide — versatile and capable camera system with up to 50× hybrid zoom.",
        "10 MP selfie camera for photos and video calls.",
        "4500 mAh with 25 W wired, 15 W wireless, and reverse wireless charging support.",
        "Launched with Android 10 + One UI, upgradable, 5G support, under-display fingerprint scanner, stereo speakers, and IP68 water/dust resistance.",
        "S Pen stylus for notes, sketches, and productivity tools — a hallmark of the Note series."
    ]
  },
       "Note20_256":{
    brand: "Samsung",
    name: "Samsung Note20 (8+256)",
    price:275000,
    // oldPrice:849000,
    image:"samsung/Note20.webp",
    description: "A high-end Samsung smartphone from 2020 that brings the iconic S Pen stylus, a large AMOLED display, solid cameras, and strong performance — built for productivity and everyday use.",
    specs: [
        "6.7″ Super AMOLED Plus, 1080 × 2400 (FHD+) with HDR10+ — bright and vivid for media and productivity.",
        "Exynos 990 (global) or Snapdragon 865+ (USA/selected regions) — flagship-level performance for the 2020 era.",
        "8 GB RAM + 128 GB / 256 GB internal storage (no microSD on some models).",
        "108 MP main + 12 MP periscope telephoto (5× optical zoom) + 12 MP ultra-wide — versatile and capable camera system with up to 50× hybrid zoom.",
        "10 MP selfie camera for photos and video calls.",
        "4500 mAh with 25 W wired, 15 W wireless, and reverse wireless charging support.",
        "Launched with Android 10 + One UI, upgradable, 5G support, under-display fingerprint scanner, stereo speakers, and IP68 water/dust resistance.",
        "S Pen stylus for notes, sketches, and productivity tools — a hallmark of the Note series."
    ]
  },
  "Note20_512":{
    brand: "Samsung",
    name: "Samsung Note20 (12+512)",
    price:375000,
    // oldPrice:849000,
    image:"samsung/Note20.webp",
    description: "A high-end Samsung smartphone from 2020 that brings the iconic S Pen stylus, a large AMOLED display, solid cameras, and strong performance — built for productivity and everyday use.",
    specs: [
        "6.7″ Super AMOLED Plus, 1080 × 2400 (FHD+) with HDR10+ — bright and vivid for media and productivity.",
        "Exynos 990 (global) or Snapdragon 865+ (USA/selected regions) — flagship-level performance for the 2020 era.",
        "8 GB RAM + 128 GB / 256 GB internal storage (no microSD on some models).",
        "108 MP main + 12 MP periscope telephoto (5× optical zoom) + 12 MP ultra-wide — versatile and capable camera system with up to 50× hybrid zoom.",
        "10 MP selfie camera for photos and video calls.",
        "4500 mAh with 25 W wired, 15 W wireless, and reverse wireless charging support.",
        "Launched with Android 10 + One UI, upgradable, 5G support, under-display fingerprint scanner, stereo speakers, and IP68 water/dust resistance.",
        "S Pen stylus for notes, sketches, and productivity tools — a hallmark of the Note series."
    ]
  },
  "s20plus_128":{
     brand: "Samsung",
    name: "Samsung Galaxy S20+ (8+128)",
    price:240000,
    // oldPrice:849000,
    image:"samsung/S20plus.webp",
    description: "A 2020 flagship Samsung phone with a large high-refresh AMOLED display, powerful flagship performance for its time, versatile cameras, and 5G support — still capable for many everyday tasks even years later.",
    specs: [
        "6.7″ Dynamic AMOLED 2X, 1440×3200 (QHD+), up to 120 Hz — bright, smooth visuals for media and games.",
        "Exynos 990 (global) or Snapdragon 865 5G (USA/selected regions) — flagship-level performance of its generation.",
        "8 GB / 12 GB RAM with 128 GB / 256 GB / 512 GB storage (expandable via microSD up to 1 TB).",
        "12 MP main + 64 MP telephoto (3× hybrid zoom) + 12 MP ultra-wide + depth (ToF) — versatile camera system with 8K video recording.",
        "10 MP selfie camera — quality selfies and video calls.",
        "4500 mAh with fast charging, wireless charging, and Wireless PowerShare (reverse wireless charging).",
        "Launched with Android 10 + One UI 2, upgradeable to later versions.",
        "5G support, IP68 water/dust resistance, ultrasonic under-display fingerprint sensor, stereo speakers, microSD expansion."
    ]
  },
  "s20plus_256":{
     brand: "Samsung",
    name: "Samsung Galaxy S20+ (8+256)",
    price:245000,
    // oldPrice:849000,
    image:"samsung/S20plus.webp",
    description: "A 2020 flagship Samsung phone with a large high-refresh AMOLED display, powerful flagship performance for its time, versatile cameras, and 5G support — still capable for many everyday tasks even years later.",
    specs: [
        "6.7″ Dynamic AMOLED 2X, 1440×3200 (QHD+), up to 120 Hz — bright, smooth visuals for media and games.",
        "Exynos 990 (global) or Snapdragon 865 5G (USA/selected regions) — flagship-level performance of its generation.",
        "8 GB / 12 GB RAM with 128 GB / 256 GB / 512 GB storage (expandable via microSD up to 1 TB).",
        "12 MP main + 64 MP telephoto (3× hybrid zoom) + 12 MP ultra-wide + depth (ToF) — versatile camera system with 8K video recording.",
        "10 MP selfie camera — quality selfies and video calls.",
        "4500 mAh with fast charging, wireless charging, and Wireless PowerShare (reverse wireless charging).",
        "Launched with Android 10 + One UI 2, upgradeable to later versions.",
        "5G support, IP68 water/dust resistance, ultrasonic under-display fingerprint sensor, stereo speakers, microSD expansion."
    ]
  },
  "s20_128":{
    brand: "Samsung",
    name: "Samsung Galaxy S20 (8+128)",
    price:215000,
    // oldPrice:849000,
    image:"samsung/S20plus.webp",
    description: "A 2020 flagship from Samsung with a high-refresh premium display, flagship performance for its time, versatile cameras, 5G support, and solid everyday capabilities.",
    specs: [
        "6.2″ Dynamic AMOLED 2X, QHD+ (1440×3200), 120 Hz — bright, sharp, and smooth for videos and scrolling.",
        "Exynos 990 (International) or Snapdragon 865 (USA/selected regions) — flagship performance from its generation.",
        "8 GB / 12 GB RAM with 128 GB / 256 GB / 512 GB storage (expandable via microSD up to 1 TB).",
        "12 MP main + 64 MP telephoto (3× hybrid zoom) + 12 MP ultra-wide + depth (ToF) — versatile camera system with 8K video recording.",
        "10 MP selfie camera — quality selfiesnote and video calls.",
        "4500 mAh with fast charging, wireless charging, and Wireless PowerShare (reverse wireless charging).",
        "Launched with Android 10 + One UI 2, upgradeable to later versions.",
        "5G support, IP68 water/dust resistance, ultrasonic under-display fingerprint sensor, stereo speakers, microSD expansion."
    ]
  },
  "s20_12ram":{
        brand: "Samsung",
    name: "Samsung Galaxy S20 (12+128)",
    price:220000,
    // oldPrice:849000,
    image:"samsung/S20plus.webp",
    description: "A 2020 flagship from Samsung with a high-refresh premium display, flagship performance for its time, versatile cameras, 5G support, and solid everyday capabilities.",
    specs: [
        "6.2″ Dynamic AMOLED 2X, QHD+ (1440×3200), 120 Hz — bright, sharp, and smooth for videos and scrolling.",
        "Exynos 990 (International) or Snapdragon 865 (USA/selected regions) — flagship performance from its generation.",
        "8 GB / 12 GB RAM with 128 GB / 256 GB / 512 GB storage (expandable via microSD up to 1 TB).",
        "12 MP main + 64 MP telephoto (3× hybrid zoom) + 12 MP ultra-wide + depth (ToF) — versatile camera system with 8K video recording.",
        "10 MP selfie camera — quality selfiesnote and video calls.",
        "4500 mAh with fast charging, wireless charging, and Wireless PowerShare (reverse wireless charging).",
        "Launched with Android 10 + One UI 2, upgradeable to later versions.",
        "5G support, IP68 water/dust resistance, ultrasonic under-display fingerprint sensor, stereo speakers, microSD expansion."
    ]
  },
  "s10plus":{
      brand: "Samsung",
    name: "Samsung Galaxy S10+ (8+128)",
    price:255000,
    // oldPrice:849000,
    image:"samsung/S10plus.webp",
    description: "A flagship Samsung phone from 2019 that was one of the most powerful and feature-packed Android devices of its time, with a large premium display and versatile cameras.",
    specs: [
        "6.4″ Dynamic AMOLED, QHD+ (3040×1440), HDR10+ — bright, sharp, and vibrant for media, gaming, and browsing.",
        "Snapdragon 855 (in some regions) or Exynos 9820 (international) — flagship performance for apps, multitasking, and games.",
        "8 GB RAM with 128 GB / 512 GB, (some versions up to 12 GB + 1 TB), expandable via microSD.",
        "12 MP main + 12 MP telephoto + 16 MP ultra-wide — versatile setup for wide shots and zoom.",
        "10 MP + 8 MP dual front cameras — great for selfies and depth/portrait effects.",
        "4100 mAh with fast wired charging, wireless charging, and reverse wireless charging (PowerShare).",
        "Launched with Android 9 (One UI) — later upgradable, and includes IP68 water/dust resistance, Wi-Fi 6, Bluetooth 5.0, NFC, and under-display fingerprint sensor."
    ]
  },
  "s10":{
      brand: "Samsung",
    name: "Samsung Galaxy S10 (8+128)",
    price:220000,
    // oldPrice:849000,
    image:"samsung/S10.jfif",
    description: "A flagship Samsung phone from 2019 that was one of the most powerful and feature-packed Android devices of its time, with a large premium display and versatile cameras.",
    specs: [
        "6.4″ Dynamic AMOLED, QHD+ (3040×1440), HDR10+ — bright, sharp, and vibrant for media, gaming, and browsing.",
        "Snapdragon 855 (in some regions) or Exynos 9820 (international) — flagship performance for apps, multitasking, and games.",
        "8 GB RAM with 128 GB / 512 GB, (some versions up to 12 GB + 1 TB), expandable via microSD.",
        "12 MP main + 12 MP telephoto + 16 MP ultra-wide — versatile setup for wide shots and zoom.",
        "10 MP + 8 MP dual front cameras — great for selfies and depth/portrait effects.",
        "4100 mAh with fast wired charging, wireless charging, and reverse wireless charging (PowerShare).",
        "Launched with Android 9 (One UI) — later upgradable, and includes IP68 water/dust resistance, Wi-Fi 6, Bluetooth 5.0, NFC, and under-display fingerprint sensor."
    ]
  },
  "galaxy-s8":{
          brand: "Samsung",
    name: "Samsung Galaxy S8 (4+64gb)",
    price:137000,
    // oldPrice:849000,
    image:"samsung/samsung-galaxy-s8-plus-g955fd-4g-64gb-dual-noxxpb.jpg",
    description: "A flagship-level smartphone from 2017 that helped redefine modern Android design with its nearly bezel-less Infinity Display, solid camera, and powerful hardware for its age — still usable for basic tasks today but considered old by modern standards.",
    specs: [
        "5.8″ Super AMOLED Quad HD+ (1440×2960), Infinity Display — bright and sharp for its size.",
        "Qualcomm Snapdragon 835 (or Exynos 8895 in some regions) — flagship performance at launch.",
        "4 GB RAM + 64 GB storage (expandable up to 256 GB via microSD).",
        "12 MP Dual Pixel with optical image stabilization — good photos and 4K video.",
        "8 MP selfie camera.",
        "3000 mAh with fast wired + wireless charging support.",
        "Launched with Android 7.0 (Nougat) and upgradable to later versions, but no longer gets major updates."
    ]
  },
  "iph15pro_128":{
      brand: "Samsung",
    name: "Iphone 15 Pro (128)",
    price:905000,
    // oldPrice:849000,
    image:"iphone/Iph 15pro.webp",
    description: "Apple’s premium flagship iPhone that delivers top-tier performance, pro-grade cameras, and a refined lightweight titanium build — designed for users who want powerful hardware and cutting-edge features in a compact size.",
    specs: [
        "Apple A17 Pro — fast and efficient for apps, games, and advanced tasks.",
        "6.1″ Super Retina XDR OLED with 120 Hz ProMotion and HDR for smooth visuals.",
        "Triple cameras with 48 MP main, 12 MP ultra-wide, and 12 MP telephoto — strong photo/video performance.",
        "p128 GB / 256 GB / 512 GB / 1 TB — plenty of space for apps and media.",
        "All-day use with fast and wireless charging (MagSafe compatible).",
        "Premium titanium frame with Ceramic Shield and IP68 water/dust resistance.",
        "Runs iOS 17 (upgradable) with Apple Intelligence and modern software features."
    ]
  },
  "iph15pro_256":{
      brand: "Samsung",
    name: "Iphone 15 Pro (256)",
    price:905000,
    // oldPrice:849000,
    image:"iphone/Iph 15pro.webp",
    description: "Apple’s premium flagship iPhone that delivers top-tier performance, pro-grade cameras, and a refined lightweight titanium build — designed for users who want powerful hardware and cutting-edge features in a compact size.",
    specs: [
        "Apple A17 Pro — fast and efficient for apps, games, and advanced tasks.",
        "6.1″ Super Retina XDR OLED with 120 Hz ProMotion and HDR for smooth visuals.",
        "Triple cameras with 48 MP main, 12 MP ultra-wide, and 12 MP telephoto — strong photo/video performance.",
        "p128 GB / 256 GB / 512 GB / 1 TB — plenty of space for apps and media.",
        "All-day use with fast and wireless charging (MagSafe compatible).",
        "Premium titanium frame with Ceramic Shield and IP68 water/dust resistance.",
        "Runs iOS 17 (upgradable) with Apple Intelligence and modern software features."
    ]
  },
  "Iphone14_128":{
 brand:"Apple",
name:"iPhone 14 (128)",
price:492000,
image:"iphone/iph14.webp",
description:"A mainstream iPhone released in September 2022 that offers a balanced mix of performance, cameras, and everyday features in a compact 6.1″ design.",
specs:[
"Apple A15 Bionic — smooth performance for apps, gaming, and multitasking.",
"6.1″ Super Retina XDR OLED (1170×2532) — vivid colors and crisp details.",
"128 GB / 256 GB / 512 GB (no microSD).",
"Dual 12 MP (main + ultra-wide) — good everyday photos & video.",
"12 MP TrueDepth — solid for selfies and Face ID.",
"~3279 mAh with fast charging, wireless & MagSafe support.",
"Aluminum frame with Ceramic Shield front and IP68 water/dust resistance.",
"Originally iOS 16 (upgradable to later versions).",
"5G, Wi-Fi, Bluetooth, NFC."
]
  },
  "Ip14promax_256":{
brand:"Apple",
name:"iPhone 14 Pro Max (256)",
price:865000,
image:"iphone/iph14promax.jpg",
description:"A premium flagship iPhone from Apple delivering a large, vibrant display, excellent Pro-level cameras, long battery life, and high-end performance — ideal for power users a",
specs:[
"Apple A16 Bionic — fast, efficient performance for apps, gaming, and media.",
"6.7″ Super Retina XDR OLED with ProMotion 120 Hz, Always-On, and Dynamic Island — smooth visuals and bright outdoor viewing.",
"128 GB / 256 GB / 512 GB / 1 TB — lots of space for photos, apps, and video.",
"48 MP main + 12 MP ultra-wide + 12 MP telephoto with up to 3× optical zoom, Night mode, ProRAW & Cinematic video.",
"12 MP TrueDepth — great selfies and FaceTime video.",
"Excellent endurance with up to ~29 hrs video playback, fast charging, MagSafe wireless support and Qi charging.",
"Premium stainless steel frame with Ceramic Shield, IP68 water/dust resistance.",
"iOS 16 (upgradable) with Apple’s ecosystem features like Face ID, Apple Pay, and robust security.",
]
  },
  "Ip14promax_128":{
    brand:"Apple",
name:"iPhone 14 Pro Max (128)",
price:830000,
image:"iphone/iph14promax.jpg",
description:"A premium flagship iPhone from Apple delivering a large, vibrant display, excellent Pro-level cameras, long battery life, and high-end performance — ideal for power users a",
specs:[
"Apple A16 Bionic — fast, efficient performance for apps, gaming, and media.",
"6.7″ Super Retina XDR OLED with ProMotion 120 Hz, Always-On, and Dynamic Island — smooth visuals and bright outdoor viewing.",
"128 GB / 256 GB / 512 GB / 1 TB — lots of space for photos, apps, and video.",
"48 MP main + 12 MP ultra-wide + 12 MP telephoto with up to 3× optical zoom, Night mode, ProRAW & Cinematic video.",
"12 MP TrueDepth — great selfies and FaceTime video.",
"Excellent endurance with up to ~29 hrs video playback, fast charging, MagSafe wireless support and Qi charging.",
"Premium stainless steel frame with Ceramic Shield, IP68 water/dust resistance.",
"iOS 16 (upgradable) with Apple’s ecosystem features like Face ID, Apple Pay, and robust security.",
]
  },
  "Ip14pro_128":{
    brand:"Apple",
name:"iPhone 14 Pro (128)",
price:705000,
image:"iphone/iPhone 14 Pro.webp",
description:"Apple’s premium flagship smartphone from the iPhone 14 lineup — designed for powerful performance, pro-level photography and video, and a smooth, advanced user experience with Dynamic Island and ProMotion display.",
specs:[
"Apple A16 Bionic — fast and efficient for apps, gaming, AI tasks, and long-term use.",
"6.1″ Super Retina XDR OLED with ProMotion 120 Hz refresh, always-on display, Dynamic Island, and HDR brightness up to 2000 nits.",
"128 GB / 256 GB / 512 GB / 1 TB — plenty of space for photos, videos, and apps.",
"Triple cameras — 48 MP main + 12 MP ultra-wide + 12 MP telephoto with optical zoom, Night mode, Deep Fusion, and ProRAW support.",
"12 MP TrueDepth — sharp selfies and Face ID.",
"Long battery life (video playback ~23 hrs), fast charging, MagSafe wireless, and Qi wireless charging.",
"Premium stainless steel frame, Ceramic Shield front, IP68 water/dust resistance.",
"Ships with iOS 16, upgradable with Apple’s ecosystem features.",
]
  },
    "Ip14pro_256":{
    brand:"Apple",
name:"iPhone 14 Pro (256)",
price:740000,
image:"iphone/iPhone 14 Pro.webp",
description:"Apple’s premium flagship smartphone from the iPhone 14 lineup — designed for powerful performance, pro-level photography and video, and a smooth, advanced user experience with Dynamic Island and ProMotion display.",
specs:[
"Apple A16 Bionic — fast and efficient for apps, gaming, AI tasks, and long-term use.",
"6.1″ Super Retina XDR OLED with ProMotion 120 Hz refresh, always-on display, Dynamic Island, and HDR brightness up to 2000 nits.",
"128 GB / 256 GB / 512 GB / 1 TB — plenty of space for photos, videos, and apps.",
"Triple cameras — 48 MP main + 12 MP ultra-wide + 12 MP telephoto with optical zoom, Night mode, Deep Fusion, and ProRAW support.",
"12 MP TrueDepth — sharp selfies and Face ID.",
"Long battery life (video playback ~23 hrs), fast charging, MagSafe wireless, and Qi wireless charging.",
"Premium stainless steel frame, Ceramic Shield front, IP68 water/dust resistance.",
"Ships with iOS 16, upgradable with Apple’s ecosystem features.",
]
  },
  "Ip13pro_128":{
     brand:"Apple",
name:"iPhone 13 Pro (128)",
price:510000,
image:"iphone/iph13pro.jpg",
description:"A premium flagship iPhone from Apple’s 2021 lineup — strong performance, advanced camera system, and a smooth high-refresh display make it great for everyday use and creative tasks.",
specs:[
"Apple A15 Bionic — fast performance for apps, gaming, and video.",
"6.1″ Super Retina XDR OLED with ProMotion 120 Hz — bright and smooth visuals.",
"Triple 12 MP system (main, ultra-wide & telephoto) with 3× optical zoom, Night mode, and ProRAW/ProRes support — versatile for photos and video.",
"12 MP — clear selfies and video calls.",
"128 GB / 256 GB / 512 GB / 1 TB — plenty of space for photos and files.",
"All-day battery life with fast wired, MagSafe wireless, and Qi wireless charging.",
"Stainless steel frame, Ceramic Shield front, and IP68 water/dust resistance.",
"Runs iOS with Apple ecosystem features and long software support.",
]
  },
    "Ip13pro_256":{
     brand:"Apple",
name:"iPhone 13 Pro (256)",
price:540000,
image:"iphone/iph13pro.jpg",
description:"A premium flagship iPhone from Apple’s 2021 lineup — strong performance, advanced camera system, and a smooth high-refresh display make it great for everyday use and creative tasks.",
specs:[
"Apple A15 Bionic — fast performance for apps, gaming, and video.",
"6.1″ Super Retina XDR OLED with ProMotion 120 Hz — bright and smooth visuals.",
"Triple 12 MP system (main, ultra-wide & telephoto) with 3× optical zoom, Night mode, and ProRAW/ProRes support — versatile for photos and video.",
"12 MP — clear selfies and video calls.",
"128 GB / 256 GB / 512 GB / 1 TB — plenty of space for photos and files.",
"All-day battery life with fast wired, MagSafe wireless, and Qi wireless charging.",
"Stainless steel frame, Ceramic Shield front, and IP68 water/dust resistance.",
"Runs iOS with Apple ecosystem features and long software support.",
]
  },
  "Ip13_128":{
      brand:"Apple",
name:"iPhone 13 (128)",
price:400000,
image:"iphone/iPhone 13 (128).webp",
description:"A well-balanced flagship iPhone that offers strong performance, reliable cameras, and excellent battery life — still a solid choice for everyday use and long-term software support.",
specs:[
"A15 Bionic",
"6.1″ Super Retina XDR OLED",
"Dual 12 MP (main + ultra-wide)",
"128 GB / 256 GB / 512 GB",
"All-day battery, fast & MagSafe charging",
"Aluminum frame, Ceramic Shield, IP68",
"Runs iOS with long-term software updates.",
]
  },
  "Ip12_promax_128":{
     brand:"Apple",
name:"iPhone 12 Pro Max (128)",
price:454000,
image:"iphone/iph12promax.png",
description:"Apple’s 2020 flagship with a big display, pro-grade cameras, and strong performance — ideal for photography, video, and everyday use.",
specs:[
"A14 Bionic",
": 6.7″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto) — great photos & 4K video",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, Ceramic Shield, IP68",
"iOS with long-term support"
]
  },
  "Ip12_promax_256":{
    brand:"Apple",
name:"iPhone 12 Pro Max (256)",
price:497000,
image:"iphone/iph12promax.png",
description:"Apple’s 2020 flagship with a big display, pro-grade cameras, and strong performance — ideal for photography, video, and everyday use.",
specs:[
"A14 Bionic",
": 6.7″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto) — great photos & 4K video",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, Ceramic Shield, IP68",
"iOS with long-term support"
]
  },
  "Ip12_pro_256":{
        brand:"Apple",
name:"iPhone 12 Pro (256)",
price:395000,
image:"iphone/iPhone 12 Pro.webp",
description:"A 2020 premium iPhone with strong performance, pro-level cameras, and a sleek design — great for everyday use and creative photography.",
specs:[
"A14 Bionic",
"6.1″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, Ceramic Shield, IP68",
"iOS with long-term updates"
]
  },
    "Ip12_pro_128":{
        brand:"Apple",
name:"iPhone 12 Pro (128)",
price:375000,
image:"iphone/iPhone 12 Pro.webp",
description:"A 2020 premium iPhone with strong performance, pro-level cameras, and a sleek design — great for everyday use and creative photography.",
specs:[
"A14 Bionic",
"6.1″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, Ceramic Shield, IP68",
"iOS with long-term updates"
]
  },
  "Ip12_128":{
        brand:"Apple",
name:"iPhone 12 (128)",
price:375000,
image:"iphone/iPhone 12.webp",
description:"A 2020 Apple flagship that brought a bright OLED display, 5G, and strong overall performance at a more affordable flagship price.",
specs:[
"A14 Bionic",
"6.1″ Super Retina XDR OLED",
"Dual 12 MP (wide + ultra-wide)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Aluminum frame, Ceramic Shield, IP68",
"iOS with long-term updates"
]    
  },
  "Ip12_64":{
            brand:"Apple",
name:"iPhone 12 (64)",
price:265000,
image:"iphone/iPhone 12.webp",
description:"A 2020 Apple flagship that brought a bright OLED display, 5G, and strong overall performance at a more affordable flagship price.",
specs:[
"A14 Bionic",
"6.1″ Super Retina XDR OLED",
"Dual 12 MP (wide + ultra-wide)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Aluminum frame, Ceramic Shield, IP68",
"iOS with long-term updates"
] 
  },
  "Ip11_promax_256":{
              brand:"Apple",
name:"iPhone 11 Pro Max (256)",
price:365000,
image:"iphone/iph11promax.webp",
description:"Apple’s 2019 flagship-grade iPhone with a large display, excellent battery life, and a strong triple-camera system — great for photos, video, and everyday use.",
specs:[
"A13 Bionic",
"6.5″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, IP68 water/dust resistance",
"iOS with long-term updates"
]  
  },
  "Ip11_promax_64":{
               brand:"Apple",
name:"iPhone 11 Pro Max (64)",
price:310000,
image:"iphone/iph11promax.webp",
description:"Apple’s 2019 flagship-grade iPhone with a large display, excellent battery life, and a strong triple-camera system — great for photos, video, and everyday use.",
specs:[
"A13 Bionic",
"6.5″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, IP68 water/dust resistance",
"iOS with long-term updates"
]   
  },
  "Ip11_pro_64":{
                   brand:"Apple",
name:"iPhone 11 Pro (64)",
price:290000,
image:"iphone/iph11pro1.webp",
description:"Apple’s 2019 premium iPhone — powerful performance and a versatile triple-camera system in a compact flagship design.",
specs:[
"A13 Bionic",
"5.8″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, IP68 water/dust resistance",
"iOS with long-term updates"
]   
  },
    "Ip11_pro_256":{
                   brand:"Apple",
name:"iPhone 11 Pro (64)",
price:330000,
image:"iphone/iph11pro1.webp",
description:"Apple’s 2019 premium iPhone — powerful performance and a versatile triple-camera system in a compact flagship design.",
specs:[
"A13 Bionic",
"5.8″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, IP68 water/dust resistance",
"iOS with long-term updates"
]   
  },
  "Ip11_128":{
                       brand:"Apple",
name:"iPhone 11 (128)",
price:265000,
image:"iphone/iph11.webp",
description:"Apple’s 2019 premium iPhone — powerful performance and a versatile triple-camera system in a compact flagship design.",
specs:[
"A13 Bionic",
"5.8″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, IP68 water/dust resistance",
"iOS with long-term updates"
]
  },
    "Ip11_64":{
 brand:"Apple",
name:"iPhone 11 (64)",
price:230000,
image:"iphone/iph11.webp",
description:"Apple’s 2019 premium iPhone — powerful performance and a versatile triple-camera system in a compact flagship design.",
specs:[
"A13 Bionic",
"5.8″ Super Retina XDR OLED",
"Triple 12 MP (wide + ultra-wide + telephoto)",
"12 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Stainless steel, IP68 water/dust resistance",
"iOS with long-term updates"
]
  },
  "Iphxr_64":{
 brand:"Apple",
name:"iPhone Xr (64)",
price:190000,
image:"iphone/iphxr.jfif",
description:"Apple’s 2018 mid‑range flagship — bright LCD display, solid performance, and a single camera that still takes great photos.",
specs:[
"A12 Bionic",
"6.1″ Liquid Retina LCD",
"12 MP wide",
"7 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Aluminum frame, IP67 water/dust resistant",
"iOS with long-term updates"
]
  },
    "Iphxr_128":{
 brand:"Apple",
name:"iPhone Xr (128)",
price:225000,
image:"iphone/iphxr.jfif",
description:"Apple’s 2018 mid‑range flagship — bright LCD display, solid performance, and a single camera that still takes great photos.",
specs:[
"A12 Bionic",
"6.1″ Liquid Retina LCD",
"12 MP wide",
"7 MP TrueDepth",
"64 GB / 128 GB / 256 GB",
"Long-lasting with fast & wireless charging",
"Aluminum frame, IP67 water/dust resistant",
"iOS with long-term updates"
]
  },
  "iphse_128":{
     brand:"Apple",
name:"iPhone SE (128)",
price:160000,
image:"iphone/iphse2020.jfif",
description:"Apple’s compact flagship — small, powerful, and affordable with the A13 chip, perfect for those who prefer a smaller phone.",
specs:[
"A13 Bionic",
"4.7″ Retina HD LCD",
"12 MP wide",
"7 MP MP",
"64 GB / 128 GB / 256 GB",
"Decent all-day use, supports wireless charging",
"Aluminum frame, IP67 water/dust resistant",
"iOS with long-term updates"
]
  },
    "iphse_64":{
     brand:"Apple",
name:"iPhone SE (64)",
price:150000,
image:"iphone/iphse2020.jfif",
description:"Apple’s compact flagship — small, powerful, and affordable with the A13 chip, perfect for those who prefer a smaller phone.",
specs:[
"A13 Bionic",
"4.7″ Retina HD LCD",
"12 MP wide",
"7 MP MP",
"64 GB / 128 GB / 256 GB",
"Decent all-day use, supports wireless charging",
"Aluminum frame, IP67 water/dust resistant",
"iOS with long-term updates"
]
  },
  "A064G_4_64":{
     brand:"Samsung",
name:"Samsung A06 4G (4+64)",
price:122500,
image:"samsung/A064G.jpg",
description:"A budget‑friendly Android smartphone with a large display, long battery life, and reliable basics — ideal if you want simple everyday performance without 5G.",
specs:[
"MediaTek Helio G85",
"6.7″ PLS LCD (HD+)",
"4 GB RAM with 64 GB storage (expandable via microSD).",
"50 MP main + 2 MP depth rear — decent daylight shots; 8 MP front",
"64 GB / 128 GB (with microSD expansion).",
"4 GB (some variants 6 GB).",
"5000 mAh with 25W wired charging",
"Android 14 with One UI."
]
  },
    "A064G_4_128":{
     brand:"Samsung",
name:"Samsung A06 4G (4+128)",
price:144000,
image:"samsung/A064G.jpg",
description:"A budget‑friendly Android smartphone with a large display, long battery life, and reliable basics — ideal if you want simple everyday performance without 5G.",
specs:[
"MediaTek Helio G85",
"6.7″ PLS LCD (HD+)",
"4 GB RAM with 64 GB storage (expandable via microSD).",
"50 MP main + 2 MP depth rear — decent daylight shots; 8 MP front",
"64 GB / 128 GB (with microSD expansion).",
"4 GB (some variants 6 GB).",
"5000 mAh with 25W wired charging",
"Android 14 with One UI."
]
  },
  "A174G_4_128":{
         brand:"Samsung",
name:"Samsung A17 4G (4+128)",
price:222000,
image:"samsung/A174G.webp",
description:"A budget‑friendly Android phone with a large Super AMOLED display, long battery life, a capable triple‑camera setup, and modern software — great for everyday use without 5G.",
specs:[
"MediaTek Helio G99",
"6.7″ Super AMOLED, 90 Hz",
"50 MP main + 5 MP ultra‑wide + 2 MP macro rear",
"13 MP",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage — expandable via microSDXC.",
"5000 mAh with 25 W fast charging",
"Android 15 with One UI 7",
"Side‑mounted fingerprint sensor, IP54 dust/splash resistance, USB‑C."
]
  },
    "A174G_6_128":{
         brand:"Samsung",
name:"Samsung A17 4G (6+128)",
price:240000,
image:"samsung/A174G.webp",
description:"A budget‑friendly Android phone with a large Super AMOLED display, long battery life, a capable triple‑camera setup, and modern software — great for everyday use without 5G.",
specs:[
"MediaTek Helio G99",
"6.7″ Super AMOLED, 90 Hz",
"50 MP main + 5 MP ultra‑wide + 2 MP macro rear",
"13 MP",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage — expandable via microSDXC.",
"5000 mAh with 25 W fast charging",
"Android 15 with One UI 7",
"Side‑mounted fingerprint sensor, IP54 dust/splash resistance, USB‑C."
]
  },
      "A174G_8_128":{
         brand:"Samsung",
name:"Samsung A17 4G (8+128)",
price:295000,
image:"samsung/A174G.webp",
description:"A budget‑friendly Android phone with a large Super AMOLED display, long battery life, a capable triple‑camera setup, and modern software — great for everyday use without 5G.",
specs:[
"MediaTek Helio G99",
"6.7″ Super AMOLED, 90 Hz",
"50 MP main + 5 MP ultra‑wide + 2 MP macro rear",
"13 MP",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage — expandable via microSDXC.",
"5000 mAh with 25 W fast charging",
"Android 15 with One UI 7",
"Side‑mounted fingerprint sensor, IP54 dust/splash resistance, USB‑C."
]
  },
  "A175G_4_128":{
            brand:"Samsung",
name:"Samsung A17 5G (4+128)",
price:248000,
image:"samsung/A175G.webp",
description:"A budget‑friendly 5G phone from Samsung that offers a large Super AMOLED display, decent cameras, long battery life, and modern software — perfect for everyday use without a high price tag.",
specs:[
"Exynos 1330",
"6.7″ Super AMOLED, 90 Hz",
"50 MP main (with OIS) + 5 MP ultra‑wide + 2 MP macro",
"13 MP",
"Up to 8 GB RAM + 256 GB storage (expandable via microSD).",
"5000 mAh with 25 W fast charging",
"Android 15 with One UI 7",
"Side‑mounted fingerprint sensor, IP54 water/dust resistance, 5G connectivity."
] 
  },
  "A265G_6_128":{
 brand:"Samsung",
name:"Samsung A26 5G (6+128)",
price:380000,
image:"samsung/samsung-a36-600x600.webp",
description:"A budget‑friendly 5G Android phone with a large smooth AMOLED screen, solid battery, and a versatile camera setup — great for daily use, social media, and video.",
specs:[
"Exynos 1380",
"6.7″ Super AMOLED, 120 Hz",
"50 MP main (with OIS) + 8 MP ultra‑wide + 2 MP macro",
"13 MP",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable).",
"5000 mAh with 25 W fast charging",
"Android 15 with One UI 7",
"IP67 water/dust resistance, side fingerprint sensor, USB‑C, 5G support."
]  
  },
  "A265G_8_128":{
 brand:"Samsung",
name:"Samsung A26 5G (6+128)",
price:427000,
image:"samsung/samsung-a36-600x600.webp",
description:"A budget‑friendly 5G Android phone with a large smooth AMOLED screen, solid battery, and a versatile camera setup — great for daily use, social media, and video.",
specs:[
"Exynos 1380",
"6.7″ Super AMOLED, 120 Hz",
"50 MP main (with OIS) + 8 MP ultra‑wide + 2 MP macro",
"13 MP",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable).",
"5000 mAh with 25 W fast charging",
"Android 15 with One UI 7",
"IP67 water/dust resistance, side fingerprint sensor, USB‑C, 5G support."
]  
  },
  "Redmi-Note-15_6_128":{
     brand:"Redmi",
name:"Redmi Note 15 (6+128)",
price:273000,
image:"redmi/Redmi-Note-15.webp",
description:"A mid-range smartphone from Xiaomi’s popular Note lineup — offering a large AMOLED display, strong battery, capable camera, and solid everyday performance.",
specs:[
"6.77″ FHD+ AMOLED, 120 Hz — bright and smooth visuals.",
"Qualcomm Snapdragon 6 Gen 3 — good mid-range performance.",
"8 GB RAM + 128 GB / 256 GB storage (expandable via microSD).",
"108 MP main camera + 8 MP ultra-wide — versatile imaging.",
"20 MP selfie camera.",
"6000 mAh with 33–45 W fast charging — long battery life..",
"Android 15 with HyperOS.",
"In-display fingerprint sensor, USB-C, 5G support on some variants."
]
  },
  "redmi_15c_6_128":{
    brand: "Redmi",
    name: "Redmi 15C (6+128gb)",
    price: 151000,
    oldPrice: null,
    image: "redmi/redmi_15c_epto_it_1752845765260.webp",
    description: "A budget-friendly smartphone with a large display, huge battery, and reliable everyday performance — great if you want long battery life and smooth basics without a high price.",
    specs: [
      "6.9″ HD+ IPS LCD, 120 Hz refresh — big and smooth for browsing and videos.",
      "MediaTek Helio G81-Ultra octa-core — good for everyday apps and light games.",
      "4GB / 6GB / 8GB RAM with 128GB / 256GB storage, expandable via microSD (up to 1 TB).",
      "50 MP dual camera — simple but capable for daytime photos.",
      "8 MP selfie camera.",
      "6000 mAh with 33W fast charging — lasts long and recharges quickly.",
      "Android 15 with HyperOS 2 — modern OS and features.",
      "Side-mounted fingerprint sensor, IP64 splash resistance, USB-C port, 3.5 mm headphone jack."
    ]
  },
    "redmi_15c_4_128":{
    brand: "Redmi",
    name: "Redmi 15C (4+128gb)",
    price: 141000,
    oldPrice: null,
    image: "redmi/redmi_15c_epto_it_1752845765260.webp",
    description: "A budget-friendly smartphone with a large display, huge battery, and reliable everyday performance — great if you want long battery life and smooth basics without a high price.",
    specs: [
      "6.9″ HD+ IPS LCD, 120 Hz refresh — big and smooth for browsing and videos.",
      "MediaTek Helio G81-Ultra octa-core — good for everyday apps and light games.",
      "4GB / 6GB / 8GB RAM with 128GB / 256GB storage, expandable via microSD (up to 1 TB).",
      "50 MP dual camera — simple but capable for daytime photos.",
      "8 MP selfie camera.",
      "6000 mAh with 33W fast charging — lasts long and recharges quickly.",
      "Android 15 with HyperOS 2 — modern OS and features.",
      "Side-mounted fingerprint sensor, IP64 splash resistance, USB-C port, 3.5 mm headphone jack."
    ]
  },
  "RedmiNote14_6_128":{
    brand:"Redmi",
name:"Redmi Note14 (6+128)",
price:237000,
image:"redmi/RedmiNote14.webp",
description:"A solid mid-range Android smartphone with a large AMOLED display, reliable performance, long battery life, and versatile cameras — great value for everyday use in 2024/2025.",
specs:[
"6.67″ FHD+ AMOLED, 120 Hz — bright, smooth visuals and good color quality.",
"MediaTek Dimensity 7025 Ultra (6 nm) — decent performance for apps, social media, and light gaming.",
"6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable via microSD up to 1 TB).",
"108 MP main + 2 MP depth + 2 MP macro — capable camera setup for detailed photos.",
"20 MP selfie camera — good for selfies and video calls.",
"5500 mAh with 33 W fast charging — long endurance and quick recharge.",
"Android (HyperOS) — smooth interface with modern features.",
"In-display fingerprint sensor, dual stereo speakers, 3.5 mm headphone jack, NFC (market-dependent), IP54 splash resistance.",
"4G / 5G support on some variants (region-dependent)."
]
  },
  "Redmi-15C-5G":{
brand:"Redmi",
name:"Redmi 15C 5GLITE (4+128)",
price:184000,
image:"redmi/Xiaomi-Redmi-15C-5G-launched-kv-2.jpg",
description:"A budget‑friendly 5G smartphone with a huge display, long battery life, and smooth everyday performance — ideal if you want a big screen and lasting battery without spending much.",
specs:[
"MediaTek Dimensity 6300 5G",
"6.9″ HD+ LCD, 120 Hz",
"50 MP main + 8 MP front",
"Up to 8 GB RAM + 256 GB storage, expandable with microSD.",
"6000 mAh with 33W fast charging & 10W reverse charging — long battery life.",
"IP64 splash/dust resistance, side fingerprint sensor.",
"Android 15 with HyperOS 2 (2 yrs OS + 4 yrs security updates)",
"5G support, headphone jack, USB‑C.",
]
  },
"Redmi-15_8_256":{
brand:"Redmi",
name:"Redmi 15 (8+256)",
price:219000,
image:"redmi/Redmi15.webp",
description:"A budget‑friendly smartphone from Xiaomi with a large smooth display, huge battery life, and reliable performance for everyday use.",
specs:[
"Qualcomm Snapdragon 685",
"6.9″ FHD+ 144 Hz big screen",
"50 MP dual rear + 8 MP front",
"Options like 6 GB / 8 GB RAM with 128 GB / 256 GB, expandable via microSD.",
"7000 mAh with 33 W fast charging and 18 W reverse charging",
"Android 15 with HyperOS 2",
"IP64 splash/dust resistance, side fingerprint sensor, face unlock, NFC (region dependent).",
]
  },
  "Redmi-15_6_128":{
brand:"Redmi",
name:"Redmi 15 (6+128)",
price:192000,
image:"redmi/Redmi15.webp",
description:"A budget‑friendly smartphone from Xiaomi with a large smooth display, huge battery life, and reliable performance for everyday use.",
specs:[
"Qualcomm Snapdragon 685",
"6.9″ FHD+ 144 Hz big screen",
"50 MP dual rear + 8 MP front",
"Options like 6 GB / 8 GB RAM with 128 GB / 256 GB, expandable via microSD.",
"7000 mAh with 33 W fast charging and 18 W reverse charging",
"Android 15 with HyperOS 2",
"IP64 splash/dust resistance, side fingerprint sensor, face unlock, NFC (region dependent).",
]
  },
  "A3x":{
    brand:"Redmi",
name:"Redmi A3x (4+64)",
price:100000,
image:"redmi/A3x.jpg",
description:"A budget entry-level smartphone with a big smooth display and long battery life — perfect for basic everyday tasks like social media, browsing, video, and calls.",
specs:[
"Unisoc T603 octa-core",
"6.71″ HD+ LCD, 90 Hz",
"8 MP rear + 5 MP front",
"5000 mAh",
"Up to 4 GB RAM + 128 GB storage (expandable to 1 TB).",
"Android 14 with long-term security support.",
"Side fingerprint sensor, face unlock, USB-C, 3.5 mm jack.",
]
  },
  "A5_3_64":{
      brand:"Redmi",
name:"Redmi A5 (3+64)",
price:105400,
image:"redmi/Redmi A5.webp",
description:"A budget entry-level smartphone with a large display, long battery life, and basic everyday performance — ideal if you want a simple reliable phone for calls, browsing, and media without a high price.",
specs:[
"Unisoc T7250 octa-core",
"6.88″ HD+ (1640×720) LCD with up to 120 Hz",
"32 MP rear + 8 MP front",
"3 GB / 4 GB RAM with 64 GB / 128 GB storage (expandable via microSD).",
"5200 mAh with 15 W fast charging",
"Android 15 (Go Edition) — lighter software for entry-level performance.",
"Side-mounted fingerprint sensor, face unlock, USB-C, 3.5 mm headphone jack, 4G LTE support.",
]
  },
    "A5_4_128":{
      brand:"Redmi",
name:"Redmi A5 (4+128)",
price:123000,
image:"redmi/Redmi A5.webp",
description:"A budget entry-level smartphone with a large display, long battery life, and basic everyday performance — ideal if you want a simple reliable phone for calls, browsing, and media without a high price.",
specs:[
"Unisoc T7250 octa-core",
"6.88″ HD+ (1640×720) LCD with up to 120 Hz",
"32 MP rear + 8 MP front",
"3 GB / 4 GB RAM with 64 GB / 128 GB storage (expandable via microSD).",
"5200 mAh with 15 W fast charging",
"Android 15 (Go Edition) — lighter software for entry-level performance.",
"Side-mounted fingerprint sensor, face unlock, USB-C, 3.5 mm headphone jack, 4G LTE support.",
]
  },
  "iphone_17pro-max-256":{
brand:"Apple",
name:"iPhone 17 Pro Max (256gb)",
price:2150000,
image:"iphone/iPhone 17 Pro Max.webp",
description:": Apple’s top-of-the-line flagship iPhone (2025) — the biggest and longest-lasting in the 17 series, designed for heavy users, creators, and anyone who wants the best display, battery, and camera experience Apple currently offers.",
specs:[
"A19 Pro chip (6-core CPU, 6-core GPU, 16-core Neural Engine) — top-tier speed and graphics performance.",
"6.9″ Super Retina XDR OLED",
"48 MP wide + 48 MP ultra-wide + 48 MP telephoto",
"18 MP Center Stage",
"256 GB / 512 GB / 1 TB / 2 TB",
": Up to ~39 hrs video playback",
"Aluminum unibody with Ceramic Shield, IP68 water/dust resistance.",
"5G, Wi-Fi 7, Bluetooth 6, NFC, dual eSIM support.",
"Runs iOS 26 / iOS 27 (upgradable) with Apple Intelligence features."
]
},
"iphone_17Air-256":{
  brand:"Apple",
name:"iPhone 17 Air (256gb)",
price:1500000,
image:"iphone/iphone_air__f0t56fef3oey_large.jpeg",
description:":Apple’s ultra-thin flagship iPhone introduced in 2025 — designed around slimness and portability with flagship performance and modern display tech, but with some compromises compared to Pro models.",
specs:[
"Apple A19 Pro",
"6.5″ Super Retina XDR OLED with 120 Hz ProMotion",
"48 MP main rear (single camera)",
"18 MP",
"256 GB / 512 GB / 1 TB",
":~3,149 mAh",
"Ultra-thin design (about 5.6 mm), premium materials with IP68 resistance.",
"iOS 26 with Apple Intelligence features.",
"Ultra-thin & light body"
]
},
"iphone_16-128":{
    brand:"Apple",
name:"iPhone 16 (128gb)",
price:1020000,
image:"iphone/iPhone16-all-colors-indybest.avif",
description:"Apple’s standard 2024 flagship iPhone — offering strong performance, improved cameras, and modern features in a familiar design.",
specs:[
"Apple A18",
"6.1″ Super Retina XDR OLED",
"Dual rear — 48 MP main + 12 MP ultra-wide",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long usage with good real-world life and fast charging support.",
"Aluminum frame, Ceramic Shield, IP68 water/dust resistance.",
"iOS 18 with Apple Intelligence features.",
]
},
"iphone_16-256":{
      brand:"Apple",
name:"iPhone 16 (256gb)",
price:1600000,
image:"iphone/iPhone16-all-colors-indybest.avif",
description:"Apple’s standard 2024 flagship iPhone — offering strong performance, improved cameras, and modern features in a familiar design.",
specs:[
"Apple A18",
"6.1″ Super Retina XDR OLED",
"Dual rear — 48 MP main + 12 MP ultra-wide",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long usage with good real-world life and fast charging support.",
"Aluminum frame, Ceramic Shield, IP68 water/dust resistance.",
"iOS 18 with Apple Intelligence features.",
]
},
"iphone_16plus-128":{
        brand:"Apple",
name:"iPhone 16 Plus Blue (128gb)",
price:1070000,
image:"iphone/iPhone 16 pluss.webp",
description:"A larger-screen variant of the standard iPhone 16 — offering the same strong performance and camera experience but with a bigger display and longer battery life for media, browsing, and everyday use.",
specs:[
"Apple A18",
"6.7″ Super Retina XDR OLED",
"Dual rear 48 MP main + 12 MP ultra-wide",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long usage with good real-world life and fast charging support.",
"Aluminum frame, Ceramic Shield, IP68 water/dust resistance.",
"iOS 18 with Apple Intelligence features.",
]
},
"iphone_16plus-white-128":{
          brand:"Apple",
name:"iPhone 16 Plus White (128gb)",
price:1070000,
image:"iphone/iPhone 16 plus white.webp",
description:"A larger-screen variant of the standard iPhone 16 — offering the same strong performance and camera experience but with a bigger display and longer battery life for media, browsing, and everyday use.",
specs:[
"Apple A18",
"6.7″ Super Retina XDR OLED",
"Dual rear 48 MP main + 12 MP ultra-wide",
"12 MP TrueDepth",
"128 GB / 256 GB / 512 GB",
"Long usage with good real-world life and fast charging support.",
"Aluminum frame, Ceramic Shield, IP68 water/dust resistance.",
"iOS 18 with Apple Intelligence features.",
]
},
"natural titanium_16pro":{
brand:"Apple",
name:"iPhone 16 Pro Natural Titanium (128gb)",
price:1590000,
image:"iphone/natural titanium-16pro.webp",
description:"Apple’s 2024 premium flagship iPhone — a powerful and well-rounded device with a sleek Titanium finish, excellent performance, and pro-level cameras. “Natural Titanium” refers to the specific color/finish of the titanium frame and matte back — it’s the same phone internally as other color variants.",
specs:[
"Apple A18 Pro",
"6.3″ Super Retina XDR OLED with 120 Hz ProMotion",
"Triple system — 48 MP main + 48 MP ultra-wide + 12 MP telephoto (5× optical)",
"12 MP",
"128 GB / 256 GB / 512 GB / 1 TB",
"All-day battery with fast wired charging, MagSafe wireless, Qi2 wireless, and reverse charging.",
"Grade 5 Titanium frame with Ceramic Shield and IP68 water/dust resistance — durable and premium.",
"iOS 18 (upgradable)",
]
},
"desert-16pro":{
  brand:"Apple",
name:"iPhone 16 Pro Desert (128gb)",
price:1280000,
image:"iphone/desert-16pro.avif",
description:"Apple’s 2024 premium flagship iPhone — a powerful and well-rounded device with a sleek Titanium finish, excellent performance, and pro-level cameras. “Natural Titanium” refers to the specific color/finish of the titanium frame and matte back — it’s the same phone internally as other color variants.",
specs:[
"Apple A18 Pro",
"6.3″ Super Retina XDR OLED with 120 Hz ProMotion",
"Triple system — 48 MP main + 48 MP ultra-wide + 12 MP telephoto (5× optical)",
"12 MP",
"128 GB / 256 GB / 512 GB / 1 TB",
"All-day battery with fast wired charging, MagSafe wireless, Qi2 wireless, and reverse charging.",
"Grade 5 Desert frame with Ceramic Shield and IP68 water/dust resistance — durable and premium.",
"iOS 18 (upgradable)",
]
},
"iPhone-16-Pro-Max-Natural-Titanium":{
    brand:"Apple",
name:"iPhone 16 Pro Max Natural Titanium (256gb)",
price:1800000,
image:"iphone/iPhone 16 Pro Max Natural-Titanium.webp",
description:"Apple’s 2024 top flagship phone in a Natural Titanium finish — premium materials, huge display, powerful performance, and pro-level cameras make it one of the best iPhones of its generation.",
specs:[
"Apple A18 Pro",
"6.9″ Super Retina XDR OLED, 120 Hz ProMotion, HDR",
"Triple setup — 48 MP main + 48 MP ultra-wide + 12 MP telephoto (5× optical zoom)",
"12 MP",
"256 GB / 512 GB / 1 TB",
"Big battery with fast wired & MagSafe wireless charging",
"Titanium frame, textured matte glass back with IP68 water/dust resistance — premium and durable.",
"iOS 18 (upgradable)",
]
},
"itelA100c_2_64":{
  brand:"Itel",
name:"Itel A100c (2+64)",
price:88500,
image:"itel/itelA100c.webp",
description:"A budget entry-level Android smartphone with a big smooth display, long battery life, and solid everyday basics — great as a first phone, backup device, or for simple daily use like social apps, browsing, and media.",
specs:[
"Unisoc T7100 octa-core",
"6.6″ HD+ IPS LCD, 90 Hz refresh",
"8 MP rear + 5 MP front",
"Up to 128 GB storage with 2/3/4 GB RAM (plus virtual RAM) and microSD expansion.",
"5000 mAh — long everyday endurance with 15 W charging.",
"Android 15 (Go Edition) with itel OS — efficient for entry-level devices.",
"Side-mounted fingerprint sensor, face unlock, USB-C, 3.5 mm jack, and MIL-STD-810H durability (drop-resistant).",
]
},
"itelA100c_3_64":{
  brand:"Itel",
name:"Itel A100c (3+64)",
price:95500,
image:"itel/itelA100c.webp",
description:"A budget entry-level Android smartphone with a big smooth display, long battery life, and solid everyday basics — great as a first phone, backup device, or for simple daily use like social apps, browsing, and media.",
specs:[
"Unisoc T7100 octa-core",
"6.6″ HD+ IPS LCD, 90 Hz refresh",
"8 MP rear + 5 MP front",
"Up to 128 GB storage with 2/3/4 GB RAM (plus virtual RAM) and microSD expansion.",
"5000 mAh — long everyday endurance with 15 W charging.",
"Android 15 (Go Edition) with itel OS — efficient for entry-level devices.",
"Side-mounted fingerprint sensor, face unlock, USB-C, 3.5 mm jack, and MIL-STD-810H durability (drop-resistant).",
]
},
"itelA100_3_128":{
    brand:"Itel",
name:"Itel A100 (3+128)",
price:104500,
image:"itel/itel-a100-fresh-green-official-image.webp",
description:"A budget-friendly entry smartphone with a large smooth display, long battery life, and practical everyday features — great for browsing, social apps, video, and general use without heavy gaming or flagship-level performance.",
specs:[
"Unisoc T7250 octa-core",
"6.75″ IPS LCD, 90 Hz",
"8 MP rear + 8 MP front",
"128 GB storage + options for 3 GB / 4 GB / 8 GB RAM (with extended RAM).",
"5000 mAh — long everyday endurance with 15 W charging.",
"IP65 dust/water resistance & MIL-STD-810H durability",
"Android 15 (Go edition) with itel OS 15 — modern software for budget devices",
]
},
"itelA100_4_128":{
    brand:"Itel",
name:"Itel A100 (4+128)",
price:120000,
image:"itel/itel-a100-fresh-green-official-image.webp",
description:"A budget-friendly entry smartphone with a large smooth display, long battery life, and practical everyday features — great for browsing, social apps, video, and general use without heavy gaming or flagship-level performance.",
specs:[
"Unisoc T7250 octa-core",
"6.75″ IPS LCD, 90 Hz",
"8 MP rear + 8 MP front",
"128 GB storage + options for 3 GB / 4 GB / 8 GB RAM (with extended RAM).",
"5000 mAh — long everyday endurance with 15 W charging.",
"IP65 dust/water resistance & MIL-STD-810H durability",
"Android 15 (Go edition) with itel OS 15 — modern software for budget devices",
]
},
"city-100-4_128":{
    brand:"Itel",
name:"Itel City100 (4+128)",
price:118000,
image:"itel/itel-city-100-front-back.png",
description:": A budget-friendly everyday smartphone with a large smooth display, long battery life, and solid basics — great for messaging, social media, videos, and everyday apps without a high price.",
specs:[
"6.75″ HD+ IPS LCD, 90 Hz",
"Unisoc T7250 octa-core",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable via microSD).",
"13 MP main",
"8 MP selfie",
"5200 mAh with 18 W fast charging",
"Android 14 with itel OS 14.5",
"IP64 dust/splash resistance, side fingerprint sensor, USB-C — durable everyday usability."
]
},
"city-100-6_128":{
      brand:"Itel",
name:"Itel City100 (6+128)",
price:123000,
image:"itel/itel-city-100-front-back.png",
description:": A budget-friendly everyday smartphone with a large smooth display, long battery life, and solid basics — great for messaging, social media, videos, and everyday apps without a high price.",
specs:[
"6.75″ HD+ IPS LCD, 90 Hz",
"Unisoc T7250 octa-core",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable via microSD).",
"13 MP main",
"8 MP selfie",
"5200 mAh with 18 W fast charging",
"Android 14 with itel OS 14.5",
"IP64 dust/splash resistance, side fingerprint sensor, USB-C — durable everyday usability."
]
},
"Hot60proplus_8_128":{
  brand:"Infinix",
name:"Infinix Hot60pro+ (8+128)",
price:286000,
image:"infinix/Hot60pro+.webp",
description:"A sleek mid-range smartphone with a large curved AMOLED screen, capable cameras, long battery life, and modern software — excellent value for everyday use and media.",
specs:[
"6.78″ AMOLED with 144 Hz refresh rate, 1.5K physical resolution, and Gorilla Glass 7i protection — large, bright, and smooth visuals.",
"MediaTek Helio G200 (6 nm) — good for daily apps, social media, and light gaming.",
"8 GB RAM (expandable via virtual RAM) + 256 GB storage — plenty of space for apps, photos, and files.",
"50 MP main (Sony IMX882) + auxiliary lens — versatile photos and decent performance in good light.",
"13 MP selfie camera — clear selfies and video calls.",
"5160 mAh with 45 W fast charging — long usage and quick refills.",
"Android 15 with XOS 15.1 — modern UI with Android’s latest features.",
"Under-display fingerprint sensor, stereo speakers tuned by JBL, NFC, IP65 water/dust resistance, USB-C, FM radio."
]
},
"Hot60pro_8_128":{
    brand:"Infinix",
name:"Infinix Hot60pro (8+128)",
price:238000,
image:"infinix/Hot60pro.webp",
description:"A mid-range Android phone with a large smooth AMOLED display, solid everyday performance, capable cameras, and long battery life — great value in its price segment.",
specs:[
"MediaTek Helio G200",
"6.78″ 1.5K AMOLED, 144 Hz",
"8 GB RAM + 128 GB / 256 GB storage (expandable via microSD).",
"50 MP main + auxiliary",
"13 MP",
"5160 mAh with 45 W fast charging and 10 W reverse charging — long endurance.",
"Android 15 with XOS 15.1",
"IP64 water/dust resistance, in-display fingerprint sensor, NFC, stereo speakers, Bluetooth 5.4."
]
},
"hot_60i_4_128":{
      brand:"Infinix",
name:"Infinix Hot60i (4+128)",
price:153000,
image:"infinix/infinix_hot_60i_1751115154958.webp",
description:"A budget-friendly everyday Android phone with a large smooth screen, long battery life, and a solid 50 MP camera — great for social apps, media, browsing, and basic gaming.",
specs:[
"MediaTek Helio G81 Ultimate",
"6.7″ IPS LCD, 720×1600, 120 Hz",
"50 MP main + 8 MP front",
"4 GB / 6 GB / 8 GB RAM with 128 GB / 256 GB storage (expandable via microSD).",
"5160 mAh with 45 W fast charging",
"Android 15 with XOS 15.1",
"Side-mounted fingerprint sensor, 3.5 mm headphone jack, USB-C, IP64 dust/splash resistance.",
]
},
"Smart10_3_64":{
        brand:"Infinix",
name:"Infinix Smart 10 (3+64)",
price:113000,
image:"infinix/Smart10.webp",
description:"A budget everyday Android smartphone with a large smooth display, long battery life, and decent basics — ideal for simple daily use like social media, browsing, video, and messaging.",
specs:[
"Unisoc T7250 octa-core",
"6.67″ IPS LCD, 120 Hz, HD+",
"8 MP rear + 8 MP front",
"Up to 8 GB RAM + 256 GB storage (expandable via microSD).",
"5000 mAh with 15 W charging",
"Android 15 with XOS 15.1",
"Side-mounted fingerprint sensor, USB-C, 3.5 mm jack, IP64 dust/splash resistance.",
]
},
"Smart10_hd_2_64":{
          brand:"Infinix",
name:"Infinix Smart Hd (2+64)",
price:108200,
image:"infinix/Smart10hd.webp",
description:"A budget entry-level Android smartphone focused on everyday basics like browsing, social apps, messaging, and long battery life — not a high-performance device, but solid for simple daily use.",
specs:[
"MediaTek Helio A20 (Quad-core 1.8 GHz)",
"6.1″ IPS LCD, 720×1560 (HD+)",
"2 GB RAM + 32 GB storage (expandable via microSD).",
"8 MP rear + 5 MP front",
"5000 mAh",
"Android 10 (Go edition) with XOS 6.2",
"Dual SIM, FM radio, Wi-Fi, Bluetooth; rear fingerprint sensor.",
]
},
"Smart10_plus_4_128":{
            brand:"Infinix",
name:"Infinix Smart + (4+128)",
price:141500,
image:"infinix/Smart10plus.webp",
description:"a budget-friendly smartphone in the Infinix Smart lineup that focuses on a large smooth display, long battery life, and everyday usability.",
specs:[
"Unisoc T7250 octa-core",
"6.67″ IPS LCD, 120 Hz",
"Typically 4 GB or 8 GB RAM with 128 GB storage (expandable via microSD).",
"8 MP rear + 8 MP front",
"6000 mAh with 18 W fast charging — long battery life.",
"Android 15 with XOS 15.1",
"Side fingerprint sensor, IP64 dust/water resistance, dual speakers, USB-C, Dual SIM.",
]
},
"InfinixNote50_8_256":{
              brand:"Infinix",
name:"Infinix Note 50 (8+256)",
price: 334000,
image:"infinix/InfinixNote50.webp",
description:"A mid-range smartphone that’s great for big-screen media, everyday apps, long battery life, and capable cameras — one of Infinix’s strongest Note series phones in the affordable segment.",
specs:[
"6.78″ FHD+ AMOLED, 144 Hz refresh, 1300 nits peak",
"MediaTek Helio G100 Ultimate",
"8 GB RAM + 128 GB / 256 GB storage (expandable via microSD)",
"50 MP main (OIS) + 2 MP macro rear + 13 MP front",
"5200 mAh with 45 W wired charging + 30 W wireless MagCharge + reverse charging",
"Android 15 with XOS 15",
"IP64 dust/water resistance, in-display fingerprint sensor, stereo speakers, NFC (region dependent).",
]
},
"InfinixNote50_pro_8_256":{
                brand:"Infinix",
name:"Infinix Note 50 Pro (8+256)",
price: 394000,
image:"infinix/infinix-note-50-pro-enchanted-purple-official-image.webp",
description:"A mid-range performance phone with a big AMOLED display, capable cameras, long battery life, and modern Android, perfect if you want strong everyday use and good entertainment value without paying flagship prices.",
specs:[
"6.78″ FHD+ AMOLED, 144 Hz, ~1300 nits",
"MediaTek Helio G100 Ultimate (6 nm)",
"8 GB / 12 GB RAM with 256 GB storage (UFS 2.2) — plenty of space and fast responsiveness.",
"50 MP main + 8 MP ultra-wide",
"32 MP",
"5200 mAh with 90 W fast charging, 30 W wireless MagCharge, reverse wired & wireless charging — long battery life and flexible charging.",
"Android 15 with XOS 15",
"Under-display fingerprint sensor, JBL-tuned stereo speakers, IP64 splash resistance, NFC (region dependent)",
]
},
"Tecno-Camon-40-8-256":{
     brand:"Tecno",
name:"Tecno Camon 40 (8+256)",
price:339000,
image:"Tecno/Tecno Camon 40.webp",
description:"A value‑oriented Android smartphone with a large AMOLED 120 Hz display, capable cameras, long battery life, and modern Android 15 — great for everyday use, media, and photos without flagship pricing.",
specs:[
"6.78″ FHD+ AMOLED, 120 Hz.",
"MediaTek Helio G100 Ultimate",
"8 GB / 12 GB RAM + 128 GB / 256 GB storage (plus extended RAM tech).",
"50 MP main (with OIS) + 8 MP wide",
"32 MP",
"5200 mAh with 45 W fast charging",
"Android 15 with HiOS 15",
"Under‑display fingerprint sensor, dual speakers, NFC, Dolby Atmos, USB‑C, FM radio, water/dust resistance."
]
},
"Tecno-Camon-40-8-128":{
       brand:"Tecno",
name:"Tecno Camon 40 (8+128)",
price:308000,
image:"Tecno/Tecno Camon 40.webp",
description:"A value‑oriented Android smartphone with a large AMOLED 120 Hz display, capable cameras, long battery life, and modern Android 15 — great for everyday use, media, and photos without flagship pricing.",
specs:[
"6.78″ FHD+ AMOLED, 120 Hz.",
"MediaTek Helio G100 Ultimate",
"8 GB / 12 GB RAM + 128 GB / 256 GB storage (plus extended RAM tech).",
"50 MP main (with OIS) + 8 MP wide",
"32 MP",
"5200 mAh with 45 W fast charging",
"Android 15 with HiOS 15",
"Under‑display fingerprint sensor, dual speakers, NFC, Dolby Atmos, USB‑C, FM radio, water/dust resistance."
]
},
"Tecno-Spark-Slim-8-256":{
         brand:"Tecno",
name:"Tecno Spark Slim (8+256)",
price:345000,
image:"Tecno/SparkSlim.webp",
description:"A slim and stylish mid‑range Android smartphone with a large smooth AMOLED display, capable everyday performance, long battery life, and modern software — one of Tecno’s notable phones for users who want a sleek look plus reliable daily use.",
specs:[
"6.78″ 1.5K 3D AMOLED, 144 Hz",
"MediaTek Helio G200",
"8 GB RAM (with extended RAM) + 256 GB Storage — roomy space and smooth multitasking.",
"50 MP",
"13 MP",
"5160 mAh with 45 W fast charging",
"Android 15 with HiOS 15",
"Ultra‑slim 5.93 mm body, IP64 water/dust resistance, dual speakers with Dolby Atmos, NFC, infrared remote, side gyro sensor — premium feel and useful extras."
]
},
"Tecno-Spark-40-Pro-plus-8-256":{
           brand:"Tecno",
name:"Tecno Spark 40 Pro + (8+256)",
price:315000,
image:"Tecno/Spark40pro+.webp",
description:"A feature‑rich mid‑range Android smartphone with a large high‑quality AMOLED display, versatile cameras, long battery life with wired and wireless charging, and modern software — great for media, everyday use, and creative shooting without flagship pricing.",
specs:[
"6.78″ 1.5K 3D AMOLED, 144 Hz",
"MediaTek Helio G200",
"8 GB RAM (with extended RAM) + 256 GB Storage — roomy space and smooth multitasking.",
"50 MP",
"13 MP",
"5200 mAh with 45 W wired, 30 W magnetic wireless, and 5 W reverse wireless charging — flexible and fast charging options.",
"Android 15 with HiOS 15",
"Under‑display fingerprint sensor, Dolby Atmos stereo speakers, NFC (market‑dependent), IR blaster, FM radio, IP64 water/dust resistance."
]
},
"Tecno-Spark-40-Pro-plus-8-128":{
             brand:"Tecno",
name:"Tecno Spark 40 Pro + (8+128)",
price:278000,
image:"Tecno/Spark40pro+.webp",
description:"A feature‑rich mid‑range Android smartphone with a large high‑quality AMOLED display, versatile cameras, long battery life with wired and wireless charging, and modern software — great for media, everyday use, and creative shooting without flagship pricing.",
specs:[
"6.78″ 1.5K 3D AMOLED, 144 Hz",
"MediaTek Helio G200",
"8 GB RAM (with extended RAM) + 256 GB Storage — roomy space and smooth multitasking.",
"50 MP",
"13 MP",
"5200 mAh with 45 W wired, 30 W magnetic wireless, and 5 W reverse wireless charging — flexible and fast charging options.",
"Android 15 with HiOS 15",
"Under‑display fingerprint sensor, Dolby Atmos stereo speakers, NFC (market‑dependent), IR blaster, FM radio, IP64 water/dust resistance."
]
},
"Tecno-Spark-40-Pro-8-128":{
               brand:"Tecno",
name:"Tecno Spark 40 Pro (8+128)",
price:264000,
image:"Tecno/Spark40pro.webp",
description:"A mid‑range Android phone with a large smooth AMOLED display, solid everyday performance, long battery life, and capable cameras — great value for the price without flagship pricing.",
specs:[
"6.78″ AMOLED, 144 Hz",
"MediaTek Helio G100 Ultimate",
"8 GB RAM + 128 GB / 256 GB storage (expandable via microSD).",
"50 MP main rear + 13 MP front",
"5200 mAh with 45 W fast charging",
"Android 15 with HiOS 15.1",
"Under‑display fingerprint sensor, stereo speakers with Dolby Atmos, NFC, IR blaster, IP64 dust/splash resistance, USB‑C, FM radio."
]
},
"Tecno-Spark-40-Pro-8-256":{
                 brand:"Tecno",
name:"Tecno Spark 40 Pro (8+256)",
price:278000,
image:"Tecno/Spark40pro.webp",
description:"A mid‑range Android phone with a large smooth AMOLED display, solid everyday performance, long battery life, and capable cameras — great value for the price without flagship pricing.",
specs:[
"6.78″ AMOLED, 144 Hz",
"MediaTek Helio G100 Ultimate",
"8 GB RAM + 128 GB / 256 GB storage (expandable via microSD).",
"50 MP main rear + 13 MP front",
"5200 mAh with 45 W fast charging",
"Android 15 with HiOS 15.1",
"Under‑display fingerprint sensor, stereo speakers with Dolby Atmos, NFC, IR blaster, IP64 dust/splash resistance, USB‑C, FM radio."
]
},
"Tecno-Spark-40-8-256":{
  name:"Tecno Spark 40 (8+256)",
price:195000,
image:"Tecno/Spark40.webp",
description:"A value‑oriented mid‑range Android smartphone with a large smooth display, long battery life, basic but capable cameras, and modern software — great for everyday use, social apps, media, and general tasks without premium pricing.",
specs:[
"6.67″ IPS LCD, 120 Hz",
"MediaTek Helio G81",
"Up to 8 GB RAM + 256 GB storage (plus extended RAM tech)",
"50 MP main + 8 MP front selfie",
"5200 mAh with 45 W fast charging",
"Android 15 with HiOS 15.1",
"IP64 dust/water resistance, side fingerprint sensor, infrared remote control, dual speakers, USB‑C, FM radio."
]
},
"Tecno-Spark-40-8-128":{
    name:"Tecno Spark 40 (8+128)",
price:155200,
image:"Tecno/Spark40.webp",
description:"A value‑oriented mid‑range Android smartphone with a large smooth display, long battery life, basic but capable cameras, and modern software — great for everyday use, social apps, media, and general tasks without premium pricing.",
specs:[
"6.67″ IPS LCD, 120 Hz",
"MediaTek Helio G81",
"Up to 8 GB RAM + 256 GB storage (plus extended RAM tech)",
"50 MP main + 8 MP front selfie",
"5200 mAh with 45 W fast charging",
"Android 15 with HiOS 15.1",
"IP64 dust/water resistance, side fingerprint sensor, infrared remote control, dual speakers, USB‑C, FM radio."
]
},
"Tecno-Spark-40-C-4-128":{
      name:"Tecno Spark 40 C (4+128)",
price:143000,
image:"Tecno/Spark40C.webp",
description:"A budget‑friendly Android smartphone with a large smooth screen, long battery life, simple cameras, and modern software — a solid pick for social apps, media, browsing, and everyday basics without a high price tag.",
specs:[
"6.67″ IPS LCD, 120 Hz",
"MediaTek Helio G81",
"128 GB / 256 GB storage + 4 GB / 8 GB RAM (with extended RAM up to 16 GB).",
"13 MP rear + 8 MP front",
"6000 mAh with 18 W fast charging",
"Android 15 + HiOS",
"Side‑mounted fingerprint sensor, dual speakers with DTS sound, infrared remote control, GPS, Wi‑Fi, Bluetooth, FM radio."
]
},
"Tecno-Pop-10-Pro-4-128":{
        name:"Tecno Pop 10 Pro (4+128)",
price:141500,
image:"Tecno/Tecno-Pop-10-Pro-Noir_1024x1024.webp",
description:"A budget‑friendly everyday Android smartphone with a large smooth display, long battery life, basic but capable cameras, and modern software — ideal for social apps, media, browsing, and daily tasks without paying premium flagship prices.",
specs:[
"6.67″ IPS LCD, 120 Hz",
"MediaTek Helio G81",
"Configurations up to 8 GB RAM (with extended RAM) + 256 GB storage (expandable via microSD).",
"13 MP rear + 8 MP front",
"6000 mAh with 18 W fast charging",
"Android 15 with HiOS",
"Side‑mounted fingerprint sensor, dual speakers, IP64 dust/water resistance, infrared remote control, FreeLink call features."
]
},
"Tecno-Pop-10-3-128":{
          name:"Tecno Pop 10 (3+128)",
price:130500,
image:"Tecno/tecno-pop-10-green-official-image.webp",
description:"A budget‑friendly Android smartphone with a big display, solid battery, and basic cameras — ideal for everyday use like social media, browsing, videos, and messaging without spending much.",
specs:[
"6.67″ HD+ IPS LCD, 120 Hz",
"Unisoc T7250 / T606 octa‑core",
"3 GB / 4 GB RAM with 64 GB / 128 GB storage (expandable via microSD).",
"13 MP rear + 8 MP front",
"5000 mAh with 15 W fast charging",
"Android 15 with HiOS",
"Side‑mounted fingerprint sensor, Dual SIM, IP64 dust/water resistance, FM radio, USB‑C."
]
},
"Tecno-Pop-10-3-64":{
            name:"Tecno Pop 10 (3+64)",
price:114400,
image:"Tecno/tecno-pop-10-green-official-image.webp",
description:"A budget‑friendly Android smartphone with a big display, solid battery, and basic cameras — ideal for everyday use like social media, browsing, videos, and messaging without spending much.",
specs:[
"6.67″ HD+ IPS LCD, 120 Hz",
"Unisoc T7250 / T606 octa‑core",
"3 GB / 4 GB RAM with 64 GB / 128 GB storage (expandable via microSD).",
"13 MP rear + 8 MP front",
"5000 mAh with 15 W fast charging",
"Android 15 with HiOS",
"Side‑mounted fingerprint sensor, Dual SIM, IP64 dust/water resistance, FM radio, USB‑C."
]
},
"Tecno-Pop-10-C-2-64":{
name:"Tecno Pop 10 C (2+64)",
price:108500,
image:"Tecno/pop10c.jpg",
description:"A budget‑friendly Android smartphone with a large smooth display, long battery life, basic cameras, and essential everyday features — ideal if you want a simple reliable phone for calls, social apps, browsing, and media without spending much.",
specs:[
"6.67″ HD+ IPS LCD, 90 Hz",
"Unisoc Tiger T606 octa‑core",
"2 GB RAM + 64 GB storage (plus 2 GB extended RAM) — expandable via microSD.",
"16 MP Dual AI with flash",
"8 MP with flash",
"5000 mAh with 18 W fast charging",
"Android 13 with HiOS",
"Side‑mounted fingerprint sensor, face unlock, Dual SIM, 4G LTE, Wi‑Fi, Bluetooth, GPS."
]
},
"mortal-combat-Ps3":{
brand: "Games",
name:"Mortal Combat",
price:12,
image:"accessories/MORTAL COMBAT Ps3.jpg",
description:"A PS3 disc game based on the popular Mortal Kombat 9 (2011) fighting title, released as the Komplete Edition with all major DLC included — extra characters, skins, and more.",
specs:[
"Genre: Fighting / Action",
"DLC: Skarlet, Rain, additional Klassic skins & characters, and more content from the original release.",
"Originally released on PS3 in 2012.",
"You’ll play as iconic kombatants like Scorpion, Sub-Zero, and many others while battling across multiple modes."
]
},
"mortal-combat-Ps4":{
brand: "Games",
name:"Mortal Combat Play Station 4",
price:12,
image:"accessories/mortal_combat ps4.webp",
description:"One of the most popular fighting games in the franchise with great graphics, deep story mode, and tons of characters. There’s also an Ultimate edition that includes all DLC characters and expansions like Aftermath and Kombat Packs — giving you the fullest PS4 Mortal Kombat experience.",
specs:[
"Genre: Fighting / Action",
"Classic 1-on-1 fighting action with brutal combos & Fatalities",
"Story mode + Towers of Time + Online multiplayer"
]
},
"mortal-combat-Ps5":{
  brand: "Games",
name:"Mortal Combat Play Station 5",
price:12,
image:"accessories/MORTAL COMBAT Ps5.webp",
description:"A brutal next-gen fighting game with stunning graphics, fast gameplay, iconic characters, and over-the-top Fatalities. Built to take advantage of PS5 performance for smoother combat and faster loading.",
specs:[
"Genre: Fighting / Action",
// "Classic 1-on-1 fighting action with brutal combos & Fatalities",
"DualSense support: Vibration + trigger effects enhance the fighting feel in newer titles like Mortal Kombat 1 and MK11.",
"Enhanced graphics/performance: PS5 versions often run in higher resolution and smoother frame rates than PS4 versions.",
"Online play: Most games support online multiplayer with PS Plus (for games that require it)."
]
},
"play-station-5-pad":{
    brand: "Games",
name:"Play Station 5 Pad",
price:12,
image:"accessories/ps_5pad.webp",
description:"Official PS5 controller with haptic feedback, adaptive triggers, motion sensors, built-in mic & speaker, touchpad, and smooth wireless play. Works natively with all PS5 games — great all-around choice.",
specs:[
"Haptic feedback & adaptive triggers for immersive gameplay.",
"Built-in mic & speaker, motion controls, and touchpad.",
"Works with wired (USB-C) or wireless (Bluetooth 5.1).",
"Some focus on precision (like Hall effect sticks) but may not support adaptive triggers or haptics fully in PS5 games."
]
},
"play-station-4-pad":{
      brand: "Games",
name:"Play Station 4 Pad",
price:12,
image:"accessories/ps4_pad.webp",
description:"The official PS4 pad with classic PlayStation layout",
specs:[
"Wireless Bluetooth gamepad with motion sensors and vibration feedback.",
"Built-in touchpad, light bar, speaker, and 3.5 mm headphone jack.",
"Good comfort and control for all PS4 games.",
// "Some focus on precision (like Hall effect sticks) but may not support adaptive triggers or haptics fully in PS5 games."
]
},
"play-station-3-pad":{
        brand: "Games",
name:"Play Station 3 Pad Wired",
price:12,
image:"accessories/PS3 pad_wired.webp",
description:"A budget replacement wired controller with analog sticks, D-pad and vibration — work straight on PS3 via USB. Great for casual players and gaming sessions without charging hassles.",
specs:[
"A budget replacement wired controller with analog sticks, D-pad and vibration — work straight on PS3 via USB. Great for casual players and gaming sessions without charging hassles.",
"DualShock features: Some wired pads include vibration feedback, which adds rumble during gameplay.",
"Motion/Sixaxis: Many budget wired controllers may not include motion/Sixaxis support, but core button & stick functions still work well in most PS3 games.",
// "Motion/Sixaxis: Many budget wired controllers may not include motion/Sixaxis support, but core button & stick functions still work well in most PS3 games."
// "Some focus on precision (like Hall effect sticks) but may not support adaptive triggers or haptics fully in PS5 games."
]
},
"jbl-boombox3":{
brand: "Earphones-Headphones",
name:"JBL Boombox3",
price:12,
image:"accessories/Boombox3.avif",
description:"A premium portable Bluetooth speaker with big, powerful sound, long battery life, and rugged outdoor durability — perfect for parties, outdoor hangouts, and all-day music.",
specs:[
"Massive JBL Original Pro Sound with deep bass and clear audio from a 3-way speaker system (subwoofer + midrange + tweeters).",
"Up to ~24 hours battery life on a single charge — great for all-day music without plugging in.",
"Bluetooth 5.3 wireless streaming — stable connection and easy pairing with phones/tablets.",
"IP67 waterproof & dustproof rating",
"PartyBoost support",
"Built-in powerbank (USB-A)",
"3.5 mm AUX input",
"Portable design"
// "Some focus on precision (like Hall effect sticks) but may not support adaptive triggers or haptics fully in PS5 games."
]
},
"jbl-xtreme4":{
  brand: "Earphones-Headphones",
name:"JBL Xtreme4",
price:12,
image:"accessories/Xtreme4.webp",
description:"A powerful portable Bluetooth speaker with big JBL sound, long battery life, and rugged outdoor durability — perfect for parties, beach days, backyard fun, and all-around listening.",
specs:[
"Sound: Massive JBL Pro Sound with dual woofers and tweeters for deep bass and clear highs — great for big rooms or outdoor spaces.",
"Up to ~24 hours battery life on a single charge — great for all-day music without plugging in.",
"Bluetooth 5.3 wireless streaming — stable connection and easy pairing with phones/tablets.",
"IP67 waterproof & dustproof rating — safe to take to the pool, beach, or outdoors.",
"PartyBoost support — connect other JBL PartyBoost speakers for bigger stereo sound.",
"Built-in powerbank (USB-A) — can charge phones/devices on the go.",
"3.5 mm AUX input — also works with wired audio sources.",
"Portable design with sturdy metal handle — easy to carry to outdoor events."
// "Some focus on precision (like Hall effect sticks) but may not support adaptive triggers or haptics fully in PS5 games."
]
},
"jbl-Charge6":{
    brand: "Earphones-Headphones",
name:"JBL Charge 6",
price:12,
image:"accessories/Charge 6 Jbl.webp",
description:"A powerful portable Bluetooth speaker with big JBL sound, long battery life, and rugged outdoor durability — perfect for parties, beach days, backyard fun, and all-around listening.",
specs:[
"Sound: Massive JBL Pro Sound with dual woofers and tweeters for deep bass and clear highs — great for big rooms or outdoor spaces.",
"Battery Life: Up to ~24 hrs of playtime (can extend up to +6 hrs with Playtime Boost), and fast-charge support (10 min = ~2 hrs).",
"Bluetooth: Bluetooth 5.3 for stable wireless streaming and multi-speaker pairing with Auracast / PartyBoost.",
"Durability: IP67 waterproof & dustproof — safe for poolside, beach, or outdoor use.",
"Powerbank: Built-in USB-C powerbank to charge your phone or device on the go.",
"Extras: Replaceable battery option, AI Sound Boost for enhanced audio performance, shoulder strap for portability, JBL Portable app support for EQ customization.",
]
},
"jbl-Pulse5":{
      brand: "Earphones-Headphones",
name:"JBL Pulse5",
price:12,
image:"accessories/JBL_PULSE_5.jpg",
description:"A portable Bluetooth speaker with an eye-catching 360° light show and bold JBL sound — perfect for parties, outdoor fun, or mood lighting with music",
specs:[
"360° Light Show: Customisable LED lighting that syncs to your music via the JBL Portable app.",
"Sound: JBL Original Pro Sound with deep bass and clear audio all around.",
"Battery Life: Up to ~12 hrs playtime on a single charge.",
"Bluetooth: Bluetooth 5.3 wireless streaming from phones or tablets.",
"Durability: IP67 waterproof & dustproof — great for poolside or outdoor use.",
"PartyBoost: Pair with other JBL PartyBoost speakers for bigger sound.",
]
},
"jbl-Pulse4":{
      brand: "Earphones-Headphones",
name:"JBL Pulse4",
price:12,
image:"accessories/JBL-Pulse-4-Black.jpg",
description:"A portable Bluetooth speaker with an eye-catching 360° light show and bold JBL sound — perfect for parties, outdoor fun, or mood lighting with music",
specs:[
"360° LED Light Show",
"Sound: JBL Signature 20 W",
"Battery Life: Up to ~12 hrs playtime on a single charge.",
"Bluetooth: Wireless streaming (Bluetooth 4.2) from phones/tablets.",
"Durability: IPX7 waterproof",
"PartyBoost: Pair with other PartyBoost‑compatible JBL speakers for bigger sound.",
"Portable: Includes USB‑C charging cable and quick setup out of the box.",
]
},
"jbl-Flip6":{
        brand: "Earphones-Headphones",
name:"JBL Flip6",
price:12,
image:"accessories/Flip6 Jbl.webp",
description:"A portable Bluetooth speaker with bold JBL sound, rugged waterproof build, and all‑day playtime — perfect for music anywhere you go.",
specs:[
"Sound: JBL’s 2‑way speaker with racetrack woofer + tweeter for clear, powerful audio.",
"Connectivity: Bluetooth 5.1 wireless streaming.",
"Battery: Up to ~12 hrs playtime on a single charge.",
"Durability: IP67 waterproof & dustproof",
"Extras: JBL PartyBoost",
"Portable: Compact and lightweight — easy to carry anywhere.",
]
},
"zealots-S-98":{
          brand: "Earphones-Headphones",
name:"Zealots S.98",
price:12,
image:"accessories/Zealots_S98.jpg",
description:"A large portable Bluetooth speaker from Zealot designed for powerful sound, long battery life, and outdoor/party use — not earbuds or a small accessory, but a big audio system.",
specs:[
"160 W output.",
"36,000 mAh battery",
"Bluetooth (5.2/5.3) + AUX/USB/TF card support",
"IPX6 waterproof",
"Portable with handle & strap for easy carrying.",
"Extra features: True Wireless Stereo (pair two S98s), EQ modes (bass/vocal/balanced), and even powerbank function to charge devices.",
]
},
"zealots-S-85":{
            brand: "Earphones-Headphones",
name:"Zealots S.85",
price:12,
image:"accessories/Zealots S.85.jpg",
description:"A portable Bluetooth speaker from Zealot with powerful sound, RGB lighting, long battery life, and outdoor durability — built for music at home, parties, or outdoors.",
specs:[
"Sound Power: ~50 W output",
"Bluetooth: v5.3",
"Battery: 8000 mAh",
"Lighting: RGB lights",
"Waterproof: IPX6 splash‑proof",
"Play Modes: Bluetooth, AUX, USB, TF card",
]
},
"zealots-S-97":{
              brand: "Earphones-Headphones",
name:"Zealots S.97",
price:12,
image:"accessories/S.97 Zealots.webp",
description:"A portable Bluetooth party speaker with powerful sound, long battery life, and versatile playback — great for indoor/outdoor music, gatherings, and parties.",
specs:[
"Sound: ~80 W output",
"Battery: 16,000 mAh",
"Bluetooth: Bluetooth 5.2",
"Durability: IPX6 waterproof",
"Playback Modes: Bluetooth, AUX, USB, TF card",
"Extras: RGB lighting effects, built‑in mic for hands‑free calls, detachable strap, and TWS pairing (two speakers together).",
]
},
"zealots-S-66m":{
               brand: "Earphones-Headphones",
name:"Zealots S.66m",
price:12,
image:"accessories/S.66m Zealots.jpg",
description:"A portable Bluetooth party speaker with lights and karaoke features — designed for loud sound, fun light effects, and versatile playback for home or outdoor music.",
specs:[
"Sound: ~20 W output with 360° surround sound & strong bass from a 77 mm driver.",
"Battery: ~3600 mAh",
"Bluetooth 5.2",
"Water resistance: IPX5 splash‑proof",
"Lighting: 11 LED light modes that react while music plays.",
"Playback options: Bluetooth, AUX, USB, TF card for versatile music sources.",
"Extras: Comes with a wireless microphone for karaoke and supports TWS pairing (two units together).",
]
},
"zealots-S-75":{
                 brand: "Earphones-Headphones",
name:"Zealots S.75",
price:12,
image:"accessories/S.75Zealots.webp",
description:"A compact portable Bluetooth speaker from Zealot with solid sound, wireless play, and everyday convenience — perfect for music at home, outdoors, or travel.",
specs:[
"Bluetooth: v5.2",
"Power: ~10 W speaker",
"Battery: ~3000 mAh",
"Playtime: ~6–8 hrs depending on volume.",
"Range: Wireless up to ~10 m",
"Sound Range: 20 Hz–20 kHz frequency for balanced audio.",
"Durability: IPX6 splash‑proof",
"Extras: AUX/USB/TF card playback, built‑in strap for easy carry.",
]
},
"mini-starlink":{
                   brand: "Stralinks",
name:"Mini starlink ",
price:12,
image:"accessories/starlink-mini-now-widely-available-in-us-with-roam-download_ecr3.3840.webp",
description:"A compact portable satellite internet terminal from SpaceX’s Starlink — designed to give you high‑speed internet anywhere there’s a clear view of the sky, especially in remote/off‑grid locations.",
specs:[
"Portable design: ~11.75″ × 10.2″ × 1.45″, ~1.1 kg (fits in a backpack).",
"High‑speed internet: Often 100 Mbps+ download speeds with low latency (good for streaming, video calls, browsing).",
"Wi‑Fi & networking: Integrated Wi‑Fi (5) router with dual‑band support — connects many devices.",
"Battery & power: Efficient 25–40 W draw — can run from portable battery packs or solar setups with proper power delivery (100 W USB‑PD).",
"Durability: IP67 waterproof/dustproof and rugged weather resistance for outdoor use.",
"Easy setup: Plug‑and‑play with Starlink app guidance — no motorized base; manual alignment with software help.",
]
},
"camera-starlink":{
brand: "Stralinks",
name:"Cameras Starlink",
price:12,
image:"accessories/Cameras Starlink.webp",
description:"Starlink has outdoor security cameras (Starlink Cameras) designed to work with your Starlink internet setup — ideal for home or property surveillance, easy installation, and remote monitoring.",
specs:[
"Wireless connectivity: Works over Wi‑Fi with Starlink internet — no separate router needed.",
"Outdoor‑ready: Designed for weather‑resistant outdoor use (IP‑rated housing).",
"Video quality: Typically 1080p or higher for clear live view and recordings.",
"Night vision: Infrared/low‑light support for nighttime monitoring.",
"App control: View live feed, playback, and alerts from the Starlink/Starlink‑compatible camera app.",
"Motion detection: Sends alerts and records when motion is detected.",
"Power: Usually wired or PoE (Power over Ethernet) options for reliable outdoor power."
]
},
"ai-solar-camera":{
brand: "Stralinks",
name:"Ai solar camera",
price:12,
image:"accessories/Ai solar camera.webp",
description:"A solar‑powered smart outdoor security camera that uses artificial intelligence (AI) to detect real activity (like people, vehicles, or pets), send smart alerts, and record video — all without needing mains power.",
specs:[
"Solar power: Runs on sunlight only — no wiring needed, ideal for remote/outdoor spots.",
"AI motion detection: Smartly identifies humans/vehicles and reduces false alerts.",
"Wireless & app control: Connects via Wi‑Fi/4G and lets you watch live video and get alerts on your phone.",
"Night vision: Infrared/low‑light support for nighttime monitoring.",
"Outdoor durability: Weatherproof design built to withstand rain and dust.",
"Two‑way audio (optional): Some models let you talk through the camera.",
]  
},
"mtn-router-5G":{
brand: "Routers",
name:"MTN router 5G",
price:12,
image:"accessories/MTN router 5G.jpeg",
description:"A home/office broadband router that uses MTN’s 5G network to deliver super‑fast internet over Wi‑Fi.",
specs:[
"5G Internet: Uses MTN’s 5G network for much faster speeds than 4G — great for streaming, downloads, gaming, and browsing.",
"Connect Many Devices: Supports up to ~32–64 devices at once (phones, laptops, TVs, etc.).",
"Fallback Networks: Works on 4G/3G where 5G isn’t available.",
"Wi‑Fi: Dual‑band Wi‑Fi (2.4 GHz & 5 GHz) — good range and speeds for home use.",
"Plug‑and‑Play: Insert your MTN SIM, power it up, and connect via Wi‑Fi or LAN.",
"Data Bonus: Often includes free data (e.g., 100 GB) on activation.",
"Typical Speeds: Up to hundreds of Mbps (depends on network coverage)."
] 
},
"airtel-router-5G":{
  brand: "Routers",
name:"Airtel router 5G ",
price:12,
image:"accessories/Airtel router 5G.webp",
description:"A 5G broadband Wi‑Fi router from Airtel (often called SmartConnect 5G ODU Router) that turns Airtel’s mobile network into fast home/office internet — great where fibre or fixed broadband isn’t available.",
specs:[
"5G + 4G/3G support — uses Airtel’s 5G where available, falls back to 4G/3G.",
"Wi‑Fi: Dual‑band (2.4 GHz & 5 GHz) Wi‑Fi — good range & speeds.",
"Multi‑device: Connects up to ~64 devices simultaneously.",
"Backup: Some models include built‑in power backup (5–6 hrs) during power cuts.",
"Outdoor design (ODU): Some Airtel routers are mounted outside for stronger signals.",
"Extras: Parental controls & usage management.",
] 
},
"mtn-router-(cat4)":{
   brand: "Routers",
name:"MTN router (cat4)",
price:12,
image:"accessories/MTN router (cat4).webp",
description:"A 4G LTE broadband Wi‑Fi router that uses an MTN SIM to share mobile internet over Wi‑Fi — great for homes, offices, or small setups where fixed broadband isn’t available.",
specs:[
"4G LTE Cat4 connectivity: Supports LTE and 3G/2G networks with up to ~300 Mbps download and ~50 Mbps upload speeds.",
"Dual‑band Wi‑Fi: 2.4 GHz + 5 GHz Wi‑Fi for multiple device connections.",
"Connect multiple devices: Can support ~30+ devices on Wi‑Fi at once.",
"Backup power (optional): Some models include a 4,000–5,000 mAh battery for hours of internet during power outages.",
"Plug‑and‑play: Just insert your MTN SIM and power on — no complex setup needed.",
"Extra features: VoLTE calling support and broad band coverage range.",
]  
},
"itel-pb-30000mah":{
     brand: "Power Banks",
name:"Itel Power Bank 30000mah",
price:12,
image:"accessories/Itel pb 30000mah.webp",
description:"A high‑capacity portable charger that keeps your phones, tablets, and devices powered for days without frequent recharging.",
specs:[
"Capacity: 30000 mAh — charges most phones ~6–8 times or tablets multiple times.",
"Ports: Dual USB outputs + USB‑C — charge multiple devices together.",
"Input: Micro‑USB / USB‑C charging support.",
"Fast Charging: Supports fast charging on compatible devices (varies by model/brand).",
"LED Indicators: Battery level indicators to show remaining power.",
"Compatibility: Works with Android/iPhone/ tablets/earbuds and other USB‑powered devices.",
]  
},
"itel-pb-20000mah":{
brand: "Power Banks",
name:"Itel Power Bank 20000mah",
price:12,
image:"accessories/itel 20000mah.webp",
description:"A large‑capacity portable charger that’s great for phones, tablets, and other USB devices — perfect for travel, long days out, or emergencies.",
specs:[
"Capacity: 20000 mAh — enough to charge most smartphones ~4–6 times.",
"Ports: Dual USB output (and sometimes USB‑C input/output) — charge 2 devices at once.",
"Inputs: USB‑C / Micro‑USB charging support.",
"LED Indicators: Show remaining battery level.",
"Compatibility: Works with Android, iPhone (with cable), tablets, earbuds, and other USB devices.",
] 
},
"itel-pb-27000mah":{
  brand: "Power Banks",
name:"Itel Power Bank 27000mah",
price:12,
image:"accessories/itel 27000mah.jpg",
description:"A high‑capacity portable charger that keeps your phone, tablet, and USB devices powered through long days, travel, or power outages.",
specs:[
"Capacity: 27000 mAh — provides many full charges (e.g., phones multiple times).",
"Ports: Multiple USB output ports — can charge 2+ devices at once.",
"Inputs: USB‑C and/or Micro‑USB for recharging the power bank.",
"LED Indicators: Battery level display so you know how much power is left.",
"Compatibility: Works with Android, iPhone (with cable), tablets, speakers, earbuds, etc.",
] 
},
"tecno-pb-30000mah":{
brand: "Power Banks",
name:"Tecno Power Bank 30000mah",
price:12,
image:"accessories/Tecno pb 30000mah.jpg",
description:"A high‑capacity portable charger with LED display and fast charging — great for phones, tablets, earbuds, and multiple devices on long trips or power outages",
specs:[
"Capacity: 30000 mAh — huge power for multiple full phone charges.",
"Fast Charging: Up to 15 W output with Type‑C + dual USB‑A ports.",
"Inputs: USB‑C & Micro‑USB 5 V/3 A & 5 V/2 A for recharging the bank.",
"Ports: 3 output ports — charge 2–3 devices at once.",
"Safety: Built‑in protections vs. overcharge, short‑circuit, and overheating.",
"LED Display: Shows battery percentage accurately.",
] 
},
"tecno-pb-20000mah":{
brand: "Power Banks",
name:"Tecno Power Bank 20000mah",
price:12,
image:"accessories/Tecno Power Bank 20000mah.webp",
description:"A high-capacity portable charger from Tecno that’s great for phones, tablets, and other USB gadgets on the go.",
specs:[
"Capacity: 20000 mAh / ~74 Wh — multiple full phone charges.",
"Ports: USB-A + Type-C + built-in Lightning/Type-C cables (varies by model) — can charge several devices at once.",
"Fast Charging: Supports fast charging output for quicker top-ups.",
"Portable: Compact, travel-friendly design (~424 g).",
"Safety: Smart protection against overcharge, overcurrent, short-circuit, etc.",
"LED Indicator: Shows battery level.",
]   
},
"infinix-pb-30000mah":{
brand: "Power Banks",
name:"Infinix Power Bank 30000mah",
price:12,
image:"accessories/Infinix pb30000mah.webp",
description:"A big-capacity portable charger that’s perfect for travel, long days out, emergencies, and powering multiple gadgets without frequent wall charging.",
specs:[
"Capacity: 30000 mAh — charges phones and tablets many times over.",
"Ports: Three USB-A + Type-C input/output — can charge up to four devices at once.",
"Charging: 15 W fast charging on compatible devices.",
"LED Display: Shows exact battery percentage so you know how much power is left.",
"Extras: Built-in torch/flashlight — handy for outdoor or emergency use.",
"Safety: Smart protection vs. overcharge, over-discharge, short circuits, and overheating.",
]    
},
"infinix-pb-20000mah":{
  brand: "Power Banks",
name:"Infinix Power Bank 20000mah",
price:12,
image:"accessories/Infinix pb 20000mah.jpg",
description:"A large-capacity portable charger that’s great for phones, tablets, earbuds, and other USB devices — ideal for travel, work, long outings, or when power’s scarce.",
specs:[
"Capacity: 20000 mAh — enough for multiple full charges on most smartphones.",
"Ports: Dual USB-A + Type-C input/output — charge multiple devices at once.",
"Fast Charging: Supports up to ~15 W (varies by model/phone).",
"LED Indicator: Shows remaining battery level.",
"Safety: Built-in protections against overcharging, short circuits, and overheating.",
] 
},
"newage-pb-55000mah":{
    brand: "Power Banks",
name:"New age Power Bank 55000mah",
price:12,
image:"accessories/New age pb 55000mah.webp",
description:"A very high-capacity portable charger great for powering multiple phones, tablets, and USB devices on long trips, emergencies, or extended outages.",
specs:[
"Capacity: 55 000 mAh — huge battery for many charges.",
"Ports: USB-A + USB-A + Type-C output — charge multiple devices at once.",
"Fast Charging: Up to 22.5 W outputs and 20 W Type-C — faster charge on compatible devices.",
"Inputs: Type-C, Lightning, and micro-USB inputs for recharging the power bank.",
"Display & Features: Digital battery display + built-in torch light on some models.",
"Protection: Multi-protect safety (overcharge, short circuit, overheating).",
] 
},
"newage-pb-44000mah":{
      brand: "Power Banks",
name:"New age Power Bank 44000mah",
price:12,
image:"accessories/New age pb 44000mah.webp",
description:"A very high-capacity portable charger that’s built to keep multiple devices powered for days — great for long trips, power outages, or charging several gadgets at once.",
specs:[
"Capacity: 44 000 mAh — huge power for many full phone/tablet charges.",
"Fast Charging: Up to 22.5 W output via USB-A & Type-C — faster top-ups on supported devices.",
"Multiple Ports: 2× USB-A + Type-C output — charge 2–3 devices at once.",
"Inputs: Micro USB + Type-C for recharging the power bank itself.",
"LED Display: Shows battery level so you know remaining charge.",
"Extras: Built-in flashlight/torch and multi-protection safety (overcharge, short circuit, overheating).",
] 
},
"newage-pb-33000mah":{
      brand: "Power Banks",
name:"New age Power Bank 33000mah",
price:12,
image:"accessories/New age pb 33000mah.webp",
description:"A high-capacity portable charger that keeps your phone, tablet, earbuds, and other USB-powered devices running through long days, travel, or outages.",
specs:[
"Capacity: 33 000 mAh — lots of power for multiple full smartphone charges.",
"Ports: Dual USB-A + Type-C outputs — charge 2–3 devices at once.",
"Fast Charging: Up to ~22.5 W output (varies by model/device support).",
"Inputs: USB-C & Micro-USB for recharging the power bank.",
"LED Display: Shows battery level in % for easy monitoring.",
"Safety: Built-in protections (overcharge, short circuit, overheating).",
]   
},
"newage-pb-22500mah":{
brand: "Power Banks",
name:"New age Power Bank 22500mah",
price:12,
image:"accessories/New age pb 22500mah.webp",
description:"A large-capacity portable charger perfect for phones, tablets, earbuds, and other USB devices — ideal for travel, long days out, or power outages.",
specs:[
"Capacity: 22 500 mAh — enough for multiple full smartphone charges.",
"Ports: Dual USB-A + Type-C output — charge 2–3 devices at once.",
"Fast Charging: Up to ~22.5 W on compatible devices.",
"Inputs: USB-C + Micro-USB for recharging the bank itself.",
"LED Display: Battery level % display so you know exactly how much is left.",
"Safety: Multi-protection against overcharge, short circuits, overheating.",
]  
},
"tecno-airPod":{
  brand: "Airpod",
name:"Tecno Buds 2",
price:12,
image:"accessories/Tecno AirPod.jpg",
description:"A simple Tecno wireless earbud for calls, music, and daily use — affordable and reliable, AirPods-style but not Apple.",
specs:[
"True wireless (TWS) earbuds with charging case",
"Bluetooth connectivity for music & calls",
"Compact in-ear design with touch controls",
"Good battery life with extra charges from the case",
"Clear sound & mic for everyday use",
// "Safety: Multi-protection against overcharge, short circuits, overheating.",
] 
},
"oriamo-airPod":{
brand: "Airpod",
name:"Oraimo AirPod Pro",
price:12,
image:"accessories/Oraimo AirPod.webp",
description:"Stylish true wireless earbuds from Oraimo with features similar to premium earbuds — great for music, calls, and everyday use.",
specs:[
"True Wireless (TWS) earbuds — no cables.",
"Bluetooth: Stable wireless pairing with phones/tablets.",
"Sound: Clear audio with decent bass and balanced mid/high tones.",
"Mic: Built-in mic for calls & voice assistants.",
"Battery: Several hours playtime per charge + extra from charging case.",
"Comfort: In-ear design with silicone tips for snug fit.",
] 
},
"infinix-smartwatch":{
  brand: "Infinix",
name:"Infinix Smartwatch",
price:12,
image:"accessories/Infinix smartwatch.webp",
description:"A stylish, budget-friendly smartwatch made for daily fitness tracking and smart notifications.",
specs:[
"Display: Color touchscreen",
"Health: Heart rate, sleep & activity tracking",
"Sports Modes: Multiple workout options",
"Notifications: Calls, messages & app alerts",
"Battery: Long-lasting for everyday use",
"Design: Lightweight, modern look",
] 
},
"itel-smartwatch":{
    brand: "Itel",
name:"Itel Smartwatch",
price:12,
image:"accessories/Itel smartwatch.webp",
description:"A budget-friendly wearable that tracks your health, fitness, and notifications in a sleek, everyday style — perfect if you want smartwatch features without high cost.",
specs:[
"Display: Color touchscreen",
"Health Tracking: Heart rate, sleep, steps",
"Sports Modes: Multiple activity options",
"Notifications: Calls, messages & app alerts",
"Battery: Long-lasting daily use",
"Extras: Watch faces & lightweight design",
] 
},
"tecno-smartwatch":{
      brand: "Tecno",
name:"Tecno Smartwatch",
price:12,
image:"accessories/Tecno smartwatch.png",
description:"A budget-friendly wearable that tracks your health, fitness, and notifications in a sleek, everyday style — perfect if you want smartwatch features without high cost.",
specs:[
"Display: Color touchscreen",
"Health Tracking: Heart rate, sleep, steps",
"Sports Modes: Multiple activity options",
"Notifications: Calls, messages & app alerts",
"Battery: Long-lasting daily use",
"Extras: Watch faces & lightweight design",
] 
},
"iPad-11gen-pouch-glass":{
        brand: "Ipad",
name:"iPad 11gen Pouch & Glass",
price:12,
image:"accessories/iPad 11gen pouch & glass.webp",
description:"A protective accessory set for your iPad 11th generation — keeps the tablet safe from drops, scratches, and daily wear.",
specs:[
"Pouch / Sleeve: Soft internal lining + durable exterior — protects from bumps and dust",
"Tempered Glass Screen Protector: 9H hardness — resists scratches, smudges, and minor impacts",
"Precision Fit: Designed specifically for iPad 11th Gen dimensions",
"Easy Installation: Bubble-free glass with included cleaning kit",
"Slim & Lightweight: Adds protection without bulk",
// "Extras: Watch faces & lightweight design",
] 
},
"fold6-pouch":{
          brand: "Samsung",
name:"Fold6 Pouch",
price:12,
image:"accessories/Fold6 pouch.webp",
description:"A protective sleeve/case made to fit the Fold6 — guards against scratches, bumps, and daily wear while keeping the foldable slim and stylish.",
specs:[
"Precise Fit: Designed specifically for Galaxy Z Fold6 dimensions and hinge.",
"Protection: Shields front/back from scratches and dust.",
"Soft Interior: Gentle lining to prevent marks on your screen and body.",
"Slim Design: Doesn’t add bulk — easy to slip in bags.",
"Easy Access: Cutouts for camera, buttons, and ports.",
"Material: Durable — often PU leather or premium TPU.",
] 
},
"fold3-pouch":{
            brand: "Samsung",
name:"Fold3 Pouch & Glass",
price:12,
image:"accessories/Fold3 pouch & glass.webp",
description:"A protection combo for your Fold3 — keeps your foldable phone safe from scratches, drops, impacts, and everyday wear.",
specs:[
"Precise Fit: Made for Galaxy Z Fold3 shape and hinge",
"Protection: Shields front/back from scratches & bumps",
"Soft Lining: Gentle interior to protect screen & body",
"Slim & Stylish: Adds protection without bulk",
"Easy Access: Cutouts for buttons, camera & ports",
"9H Hardness: Strong surface resists scratches & everyday marks",
"9H Hardness: Strong surface resists scratches & everyday marks",
"Touch-Friendly: Keeps original smooth feel of screens",
"Fits Fold3 Inner/Outer Displays: Designed for Fold3 dual screens (if specified)"
] 
},
"fold4-pouch":{
brand: "Samsung",
name:"Fold4 Pouch",
price:12,
image:"accessories/fold4-pouch.webp",
description:"A protective sleeve/case designed specifically for the Fold4 — keeps your foldable phone safe from scratches, bumps, and daily wear while staying slim and stylish.",
specs:[
"Precise Fit: Tailored for Galaxy Z Fold4 dimensions and hinge",
"Protection: Guards against scratches, dust, and light impacts",
"Soft Inner Lining: Helps prevent marks and scuffs on the device",
"Slim & Lightweight: Easy to carry without adding bulk",
"Easy Access: Cutouts for buttons, cameras, and ports",
"Material: Durable — usually PU leather, fabric, or soft TPU",
] 
},
"952bt":{
brand: "JBL",
name:"JBL 952bt",
price:12,
image:"accessories/952bt Headset.jfif",
description:"A wireless Bluetooth over-ear headphone with rich JBL sound, comfy design, and multipoint connectivity — great for music, calls, and everyday use.",
specs:[
"Bluetooth Wireless: Easy pairing with phones, tablets & laptops",
"JBL Pure Bass Sound: Deep, punchy audio signature",
"Multipoint Connection: Connects 2 devices at once (switch seamlessly)",
"Battery Life: Long playtime — often ~40 hrs+ on a full charge",
"Fast Charge: Quick power-up in minutes",
"Comfort: Soft earpads for long listening sessions",
"Controls & Mic: On-ear buttons + built-in mic for hands-free calls",
]   
},
"bh-headset":{
  brand: "Earphones-Headphones",
name:"Bh Headset",
price:12,
image:"accessories/Bh headset.webp",
description:"A noise-cancelling headset that keeps your calls and music crystal clear, blocks unwanted noise, and stays comfortable all day.",
specs:[
"Noise Reduction: ~23 dB passive NR",
"Comfort: Soft padded headband & silicone gel ear seals",
"Mic: Noise‑cancelling boom, 270° rotation",
"Audio: Dual independent L/R volume",
"Plugs: Dual GA aviation plugs",
"Weight: ~468 g",
]  
},
"sn-81":{
    brand: "Earphones-Headphones",
name:"JBL Sn-81",
price:12,
image:"accessories/Sn-81 Headset.webp",
description:"Lightweight, foldable wireless Bluetooth headphones with rich bass, hands‑free calls, voice assistant support, long playtime, and multi‑connection options.",
specs:[
"Bluetooth wireless with wired option",
"Hands‑free calls & voice assistant control",
"Pure bass sound",
"Long battery playtime (~16 h)",
"Multi‑point connection + detachable cable",
"USB‑C charging",
"Foldable & lightweight design"
] 
},
"trans-headset":{
      brand: "Earphones-Headphones",
name:"Trans headset",
price:12,
image:"accessories/Trans headset.jfif",
description:"Lightweight true wireless earbuds with active noise reduction, long battery life, Bluetooth 5.0, touch controls, and water‑resistant design.",
specs:[
"Active Noise Reduction (ANC) — reduces background noise (~28 dB)",
"Playtime: up to ~25 h total (ANC on) / ~30 h (ANC off)",
"Bluetooth 5.0 for stable wireless connection",
"IP54 dust & water resistance",
"Touch controls & auto pairing",
"Supports voice assistants (Siri / Google)",
// "Foldable & lightweight design"
] 
},
"sudo-headset":{
        brand: "Earphones-Headphones",
name:"Sodo headset ",
price:12,
image:"accessories/Sodo headset.webp",
description:"Sodo is a brand known for budget-friendly audio gear — typically wired or wireless headphones/earbuds with decent sound and basic features for everyday listening, calls, and casual use.",
specs:[
"Sound: Clear audio with balanced bass for music & video",
"Connectivity: Bluetooth wireless (or wired with 3.5 mm depending on the model)",
"Battery (if wireless): Long playtime — often 8–20 hrs on a full charge",
"Mic: Built-in mic for hands-free calls",
"Comfort: Soft earpads / ergonomic earbuds",
"Controls: On-ear or inline buttons for volume/play/pause/calls",
// "Foldable & lightweight design"
] 
},
"oraimo-clipper":{
          brand: "Others",
name:"Oraimo Clipper",
price:12,
image:"accessories/Oraimo clipper.webp",
description:"A cordless electric hair clipper/trimmer designed for easy home grooming — cuts hair, trims beards, and shapes edges with comfortable handling.",
specs:[
"Cordless Operation: Rechargeable battery for portable use",
"Adjustable Cutting Lengths: Multiple guard combs for different hair lengths",
"Sharp Blades: Stainless steel or precision blades for smooth cuts",
"Comfort Grip: Ergonomic design for easy handling",
"Battery Life: Long runtime on a single charge",
"LED Indicator: Shows charge status (on some models)",
// "Foldable & lightweight design"
] 
},
"oraimo-necklaces":{
          brand: "Earphones-Headphones",
name:"Oraimo Necklaces",
price:12,
image:"accessories/Oraimo necklaces.webp",
description:"Stylish smart wearable accessories from Oraimo that blend fashion with tech — often featuring a built-in audio cable or Bluetooth connectivity for music, calls, and on-the-go convenience.",
specs:[
"Design: Trendy necklace/neckband style — looks good while being functional",
"Connectivity: Bluetooth (wireless models) or built-in audio cable (wired models)",
"Audio: Speakers or earbuds integrated into necklace design for music & calls",
"Comfort: Lightweight & wearable around the neck",
"Controls: Easy inline buttons for volume/play/pause/calls",
"Battery: Long playtime on wireless versions",
// "Foldable & lightweight design"
]
},
"wireless-mouse":{
          brand: "Others",
name:"Wireless Mouse",
price:12,
image:"accessories/Wireless mouse.webp",
description:"A cordless computer mouse that connects via Bluetooth or USB dongle — gives you smooth cursor control without cables, perfect for laptops, desktops, and travel.",
specs:[
"Connection: Bluetooth or 2.4 GHz USB receiver (depends on model)",
"Buttons: Left + right click + scroll wheel (some with extra side buttons)",
"Sensor: Optical tracking — smooth movement on most surfaces",
"Battery: Long battery life — often weeks to months on a single charge/battery",
"Ergonomics: Comfortable shape for everyday use",
"Plug-and-play: No drivers needed on most systems",
// "Foldable & lightweight design"
]
},
"wireless-microphone":{
brand: "Others",
name:"Wireless Microphone",
price:12,
image:"accessories/Wireless microphone.jpg",
description:"A cordless mic that sends your voice to a speaker, camera, phone, or recorder without a cable — ideal for singing, interviews, recording, presentations, and live streams.",
specs:[
"Wireless Connection: 2.4 GHz, UHF/VHF, or Bluetooth — no cable needed",
"Transmitter & Receiver: Mic sends signal to a receiver plugged into speaker/phone/camera",
"Battery Powered: Rechargeable or AA/AAA — portable use",
"Range: Usually 10 m – 100 m depending on system",
"Mic Types: Handheld / Lavalier (clip-on) / Headset",
"Compatibility: Works with speakers, mixers, phones, cameras (with adapter)",
// "Foldable & lightweight design"
]
},
"trans-type-c-charger":{
  brand: "Charger",
name:"Trans Type C Charger",
price:12,
image:"accessories/Trans type c charger.webp",
description:"A charger with a USB-C connector (also called USB-Type-C) — modern, fast, and compatible with most new phones, tablets, laptops, power banks, and accessories.",
specs:[
"Connector: USB-C output — reversible and universal modern port",
"Power Delivery: Supports Fast Charging (e.g., 18 W, 30 W, 45 W, 60 W, 100 W depending on model)",
"Input: Standard AC wall plug (100–240 V)",
"Smart IC / PD: Adjusts power to device safely",
"Compact: Small and travel-friendly designs available",
"Compatibility: Works with Android, iPhone (with USB-C cable), tablets, laptops (higher wattage), earbuds, power banks",
// "Foldable & lightweight design"
]
},
"trans-iPhone-charger":{
  brand: "Charger",
name:"Trans IPhone Charger",
price:12,
image:"accessories/Trans iPhone charger.webp",
description:"A charger with a USB-C output and an Apple-compatible connector (USB-C to Lightning) — made to charge iPhones quickly and safely.",
specs:[
"Connector: USB-C to Lightning — for modern iPhones (iPhone 8 and newer).",
"Fast Charging: Supports 20 W (or higher) Power Delivery (PD) for up to ~50% charge in ~30 min (on supported iPhones).",
"Safe Charging: Smart IC / protection against over-current, over-voltage, overheating.",
"Compact: Small form factor — easy to carry for travel.",
"Compatibility: Works with iPhone (8 → 17/17 Pro/Plus/Max/Air) and also charges AirPods/Power Banks with Lightning.",
// "Foldable & lightweight design"
]  
},
"sam-charger":{
brand: "Chargers-Cables",
name:"Sam charger",
price:12,
image:"accessories/samsung-charger.webp",
description:"A power adapter made for Samsung phones and devices — often USB-C with fast charging support.",
specs:[
"Connector: USB-C output — modern reversible port",
"Fast Charging: Supports Samsung Fast Charge / USB Power Delivery (PD) (typically 15 W, 25 W, 45 W, or higher depending on model)",
"Smart Protection: Over-current, over-voltage, short-circuit safety",
"Compact: Travel-friendly design",
"Compatibility: Works with Samsung Galaxy phones/tablets and other USB-C devices",
// "Foldable & lightweight design"
] 
},
"infinix-charger":{
  brand: "Chargers-Cables",
name:"Infinix Charger",
price:12,
image:"accessories/Infinix charger.webp",
description:"A USB-C power adapter made for Infinix phones and devices — delivers fast, safe charging for everyday use.",
specs:[
"Connector: USB-C output — modern reversible port",
"Fast Charging: Supports fast charge (often 18 W–33 W) on compatible Infinix models",
"Input: Standard AC wall plug (100–240 V)",
"Safety: Built-in protection vs. over-current, over-voltage, over-heat",
"Compatibility: Works with Infinix phones/tablets and other USB-C devices",
// "Foldable & lightweight design"
] 
},
"tecno-charger":{
    brand: "Chargers-Cables",
name:"Tecno Charger",
price:12,
image:"accessories/Tecno charger.webp",
description:"A fast charging adapter that powers up your phone quickly, supports global voltage, and protects against over‑charge, over‑heat, and short circuits.",
specs:[
"18W Fast Charger: quick top‑ups for phones/tablets with Type‑C/USB‑A output.",
"33W Fast Charger: more powerful rapid charging for newer devices.",
"Universal Input: works on 100‑240 V AC worldwide.",
"Built‑in Safety: guards against over‑current, over‑voltage, and short circuits",
] 
},
"shplus-charger":{
      brand: "Chargers-Cables",
name:"SHplus Charger",
price:12,
image:"accessories/SHplus charger.jpg",
description:"A fast USB charger that powers your devices quickly and safely with smart current detection and built‑in protections.",
specs:[
"Fast charging output (e.g., 25 W, 42 W, 45 W, 55 W or higher depending on model)",
"Dual USB/Type‑C ports for charging two devices at once (model‑dependent)",
"Safety protections against over‑voltage, over‑current & short circuits",
"Universal USB compatibility — works with phones, tablets & other USB devices",
"Compact & travel‑friendly design"
] 
},
"iwatch-charger":{
brand: "Chargers-Cables",
name:"Iwatch Charger",
price:12,
image:"accessories/Iwatch charger.webp",
description:"A magnetic fast charger for your Apple Watch — attaches by magnets and powers up your watch quickly and safely with USB‑C.",
specs:[
"Magnetic snap‑on charging: holds your watch in place automatically.",
"Fast charging support (Series 7 & later up to ~80 % in ~45 min with the right adapter).",
"USB‑C connection: works with compatible USB‑C power adapters.",
"Safe & sealed design: no exposed contacts and built‑in protections.",
] 
},
"iwatch-screen-guide":{
  brand: "Chargers-Cables",
name:"Iwatch Screen Guide",
price:12,
image:"accessories/Iwatch screen guard.webp",
description:"A screen guard that keeps your Apple Watch safe from scratches, bumps, and everyday wear without affecting touch sensitivity.",
specs:[
"Scratch Resistant: Shields screen from keys, coins, and everyday wear",
"Smudge & Fingerprint Proof: Keeps the display clean and clear",
"Touch Sensitive: Maintains smooth, responsive touch",
"Impact Protection: Guards against minor bumps and drops",
"Perfect Fit: Designed for specific Apple Watch models",
"Crystal Clear: Transparent with no color or clarity loss"
] 
},
"iwatch-strap":{
brand: "Chargers-Cables",
name:"Iwatch Strap",
price:12,
image:"accessories/Iwatch strap.webp",
description:"A stylish and comfortable Apple Watch strap that keeps your watch secure while adding a personal touch to your look.",
specs:[
"Variety of Colors & Styles: Match any outfit or occasion",
"Comfortable Fit: Soft, breathable, and adjustable",
"Secure & Durable: Keeps your Apple Watch safely on your wrist",
"Easy to Clean: Water and sweat resistant",
"Quick Swap: Easy to install and remove",
// "Crystal Clear: Transparent with no color or clarity loss"
]
},
"car-charger":{
  brand: "Chargers-Cables",
name:"Car Charger",
price:12,
image:"accessories/Car charger.jpg",
description:"A fast, reliable car charger that powers your devices on the go, keeping you connected while driving",
specs:[
"Fast Charging: Quickly charges phones, tablets, and other USB devices",
"Dual Ports (optional): Charge two devices at once",
"Universal Compatibility: Works with most smartphones and tablets",
"Built-in Safety: Protects against over-current, over-voltage, and short circuits",
"Compact & Portable: Fits easily in any car socket",
]
},
"itel-charger":{
    brand: "Chargers-Cables",
name:"Itel Charger",
price:12,
image:"accessories/Itel charger.jpg",
description:"A fast and reliable Itel charger that powers your phone safely and efficiently wherever you are.",
specs:[
"Fast Charging: Quickly charges Itel phones and compatible devices",
"Universal USB Compatibility: Works with USB‑A or Type‑C devices",
"Safety Protections: Guards against over-current, over-voltage, and short circuits",
"Global Voltage Support: Works with 100‑240 V power outlets",
"Compact Design: Portable and travel-friendly",
]
},
"itel-battery":{
    brand: "Chargers-Cables",
name:"Itel Battery",
price:12,
image:"accessories/Itel_ph_battey.avif",
description:"A high-performance Itel battery that keeps your phone powered longer and runs safely throughout the day.",
specs:[
"Long-Lasting Power: Keeps your Itel phone running all day",
"Safe & Reliable: Built-in protection against overcharge, overheating, and short circuits",
"Easy Replacement: Fits perfectly in compatible Itel models",
"Durable & Stable: Maintains consistent performance over time",
"Travel-Friendly: Lightweight and portable",
]  
},
"mtn-wifi":{
      brand: "Routers",
name:"MTN Wi-Fi",
price:12,
image:"accessories/MTN Wi-Fi.webp",
description:"Stay connected anywhere with MTN Wi-Fi — fast, reliable internet for your devices on the go.",
specs:[
"Portable Internet: Connect multiple devices anywhere",
"High-Speed 4G: Smooth browsing, streaming, and downloads",
"Secure Connection: Password-protected Wi-Fi network",
"Long Battery Life: Stay online for hours without recharging",
"Compact & Travel-Friendly: Easy to carry and set up",
] 
},
"airtel-wifi":{
brand: "Routers",
name:"Airtel Wi-Fi Pocket",
price:12,
image:"accessories/Airtel Wi-Fi pocket.webp",
description:"Fast, portable Airtel Wi-Fi that keeps you connected anytime, anywhere, for all your devices.",
specs:[
"Portable Internet: Take your Wi-Fi wherever you go",
"High-Speed 4G/LTE: Smooth streaming, browsing, and downloads",
"Secure Network: Password-protected connection",
"Long Battery Life: Stay online for hours on a single charge",
"Compact & Travel-Friendly: Lightweight and easy to carry",
]
},
};

// Read ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products[productId];

if (!product) {
  document.body.innerHTML = "<h1>Product not found</h1>";
  throw new Error("Invalid product ID");
}

// Inject content
document.getElementById("product-image").src = product.image;
document.getElementById("breadcrumb-product-name").textContent = product.name;
document.getElementById("product-brand").textContent = product.brand;
document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent =
  `₦${product.price.toLocaleString()}`;

document.getElementById("product-description").textContent =
  product.description;

if (product.oldPrice) {
  document.getElementById("product-old-price").textContent =
    `₦${product.oldPrice.toLocaleString()}`;
}

// ✅ THIS IS THE IMPORTANT PART (you did it right)
const productSpec = document.querySelector(".product_details_spec");

productSpec.dataset.id = productId;
productSpec.dataset.name = product.name;
productSpec.dataset.brand = product.brand;
productSpec.dataset.price = product.price;
productSpec.dataset.image = product.image;


// Specs
const specsUl = document.getElementById("product-specs");
specsUl.innerHTML = "";
product.specs.forEach(spec => {
  const li = document.createElement("li");
  li.textContent = spec;
  specsUl.appendChild(li);
});
// Related Product
const relatedContainer = document.getElementById("related-products");

Object.entries(products).forEach(([id, item]) => {
  // Skip the current product
  if (id === productId) return;

  const div = document.createElement("div");
  div.className = "item_display_product";

  div.innerHTML = `
    <div class="item_img">
      <a href="product.html?id=${id}">
        <img src="${item.image}" alt="${item.name}">
      </a>
    </div>

    <div class="phone_details">
      <div class="detail_txt">
        <p class="brand">${item.brand}</p>
        <h3>
          <a href="product.html?id=${id}">${item.name}</a>
        </h3>
      </div>

      <div class="price_cart_flex">
        <div class="price">
          <span class="current">₦${item.price.toLocaleString()}</span>
          ${
            item.oldPrice
              ? `<span class="old">₦${item.oldPrice.toLocaleString()}</span>`
              : ""
          }
        </div>
      </div>
    </div>
  `;

  relatedContainer.appendChild(div);
});
document.addEventListener("DOMContentLoaded", () => {
  const productSpec = document.querySelector(".product_details_spec");
  let quantity = 1;

  const qtySpan = productSpec.querySelector(".qty");

  productSpec.querySelector(".increase").onclick = () => {
    quantity++;
    qtySpan.textContent = quantity;
  };

  productSpec.querySelector(".decrease").onclick = () => {
    if (quantity > 1) {
      quantity--;
      qtySpan.textContent = quantity;
    }
  };

  const addBtn = productSpec.querySelector(".add_to_cart");

  addBtn.onclick = () => {
    const cartProduct = {
      id: productSpec.dataset.id,
      name: productSpec.dataset.name,
      brand: productSpec.dataset.brand,
      price: Number(productSpec.dataset.price),
      image: productSpec.dataset.image
    };

    addItemToCart(cartProduct, quantity);

    addBtn.innerHTML = "✔ Added";
    addBtn.disabled = true;

    setTimeout(() => {
      addBtn.innerHTML = "Add to Cart";
      addBtn.disabled = false;
    }, 1500);
  };

  updateCartBadge();
});

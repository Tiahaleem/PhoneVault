
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
    name:"AirPods Pro (2nd Gen)",
    price:149000,
    image:"images/Airpods Pro(2nd Gen).jfif",
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
}
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

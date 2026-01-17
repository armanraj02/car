
export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    heroImage?: string; // Optional static image override
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "718",
        name: "718 Cayman GT4",
        subName: "Perfectly balanced.",
        price: "$106,500",
        description: "414 HP - 4.2s 0-60 - Naturally Aspirated Flat-Six",
        folderPath: "/images/porsche", // Reuse 911 sequence as placeholder
        heroImage: "/images/hero/718.jpg",
        themeColor: "#d92e2e",
        gradient: "linear-gradient(135deg, #d92e2e 0%, #000000 100%)",
        features: ["414 HP", "4.2s 0-60", "Mid-Engine"],
        stats: [
            { label: "Power", val: "414HP" },
            { label: "0-60", val: "4.2s" },
            { label: "Top Speed", val: "189mph" }
        ],
        section1: { title: "718 Cayman GT4.", subtitle: "Perfectly balanced." },
        section2: { title: "Mid-engine mastery.", subtitle: "A high-revving 4.0-liter naturally aspirated engine placed perfectly for agile handling." },
        section3: { title: "Cornering precision.", subtitle: "GT-sport suspension and aerodynamic downforce for glued-to-the-road feel." },
        section4: { title: "Driver focus.", subtitle: "" },
        detailsSection: {
            title: "Pure Driving Joy",
            description: "The 718 Cayman GT4 is built for the purist. Its mid-engine layout provides unparalleled balance and responsiveness on the track. The centerpiece is the glorious 4.0-liter naturally aspirated flat-six that screams to 8,000 RPM, delivering immediate throttle response and a spine-tingling soundtrack that turbocharged engines simply cannot match.",
            imageAlt: "Porsche 718 Cayman GT4 Details"
        },
        freshnessSection: {
            title: "Track Bread",
            description: "Developed by the Porsche GT department, the 718 GT4 features components directly derived from the 911 GT3. The lightweight chassis, manual transmission option, and functional aerodynamics make it one of the most engaging sports cars ever created. It's not about straight-line speed; it's about the connection between driver and machine."
        },
        buyNowSection: {
            price: "$106,500",
            unit: "MSRP",
            processingParams: ["Mid-Engine Layout", "GT Suspension", "Naturally Aspirated"],
            deliveryPromise: "Track delivery experience available. Professional driving instruction included.",
            returnPolicy: "Porsche Approved Certified Pre-Owned eligible."
        }
    },
    {
        id: "porsche",
        name: "911 Turbo S",
        subName: "German precision.",
        price: "$207,000",
        description: "640 HP - 2.6s 0-60 - Twin-Turbo Flat-Six",
        folderPath: "/images/porsche",
        themeColor: "#C0C0C0",
        gradient: "linear-gradient(135deg, #2c2c2c 0%, #000000 100%)",
        features: ["640 HP", "2.6s 0-60", "Twin-Turbo"],
        stats: [
            { label: "Power", val: "640HP" },
            { label: "0-60", val: "2.6s" },
            { label: "Top Speed", val: "205mph" }
        ],
        section1: { title: "911 Turbo S.", subtitle: "German precision." },
        section2: { title: "Engineering excellence.", subtitle: "Hand-crafted twin-turbo flat-six engine delivering pure adrenaline." },
        section3: { title: "Track-ready performance.", subtitle: "Active aerodynamics and all-wheel drive for ultimate control." },
        section4: { title: "Icon redefined.", subtitle: "" },
        detailsSection: {
            title: "The Ultimate 911",
            description: "The 911 Turbo S represents the pinnacle of Porsche engineering. With a 3.8-liter twin-turbocharged flat-six engine producing 640 horsepower, it rockets from 0-60 mph in just 2.6 seconds. Every component is meticulously crafted in Stuttgart, Germany, where precision meets passion. Carbon-ceramic brakes, active suspension management, and rear-axle steering combine to create a driving experience that's both visceral and refined.",
            imageAlt: "Porsche 911 Turbo S Details"
        },
        freshnessSection: {
            title: "Handcrafted Excellence",
            description: "Each 911 Turbo S is assembled by master technicians who spend years perfecting their craft. From the hand-stitched leather interior to the precisely balanced turbochargers, every detail is obsessed over. The result is a machine that delivers supercar performance with everyday usability—a true testament to German engineering philosophy."
        },
        buyNowSection: {
            price: "$207,000",
            unit: "MSRP",
            processingParams: ["Hand-Assembled", "Track-Tested", "Carbon-Ceramic Brakes"],
            deliveryPromise: "White-glove delivery to your location. Personalized handover experience with Porsche specialist.",
            returnPolicy: "Certified Pre-Owned program available. Full warranty coverage for peace of mind."
        }
    },
    {
        id: "taycan",
        name: "Taycan Turbo S",
        subName: "Soul, electrified.",
        price: "$187,600",
        description: "750 HP - 2.6s 0-60 - All-Electric",
        folderPath: "/images/porsche",
        heroImage: "/images/hero/taycan.jpg",
        themeColor: "#00bfae",
        gradient: "linear-gradient(135deg, #00bfae 0%, #000000 100%)",
        features: ["750 HP", "2.6s 0-60", "Electric"],
        stats: [
            { label: "Power", val: "750HP" },
            { label: "0-60", val: "2.6s" },
            { label: "Range", val: "220mi" }
        ],
        section1: { title: "Taycan Turbo S.", subtitle: "Soul, electrified." },
        section2: { title: "Silent power.", subtitle: "Instant torque and massive acceleration in a completely silent package." },
        section3: { title: "Future now.", subtitle: "800-volt architecture for ultra-fast charging and consistent performance." },
        section4: { title: "Zero emissions.", subtitle: "" },
        detailsSection: {
            title: "Electric Pulse",
            description: "The Taycan Turbo S redefines what an electric sports car can be. With up to 750 horsepower on overboost, it matches the acceleration of the 911 Turbo S but with instant, seamless torque. Its low center of gravity and advanced chassis systems ensure it corners like a true Porsche, proving that electrification enhances rather than diminishes the driving soul.",
            imageAlt: "Porsche Taycan Turbo S Details"
        },
        freshnessSection: {
            title: "Sustainable Performance",
            description: "Production of the Taycan is carbon-neutral in Zuffenhausen. The interior offers sustainable, leather-free option made from recycled materials. It's high-tech meets high-conscience, ensuring the thrill of driving remains sustainable for future generations without compromising on luxury or build quality."
        },
        buyNowSection: {
            price: "$187,600",
            unit: "MSRP",
            processingParams: ["800V Architecture", "Zero Emissions", "Over-the-Air Updates"],
            deliveryPromise: "Home charging station installation support included. Complimentary charging sessions.",
            returnPolicy: "Battery warranty: 8 years / 100,000 miles."
        }
    },
    {
        id: "panamera",
        name: "Panamera Turbo S",
        subName: "Sports car for four.",
        price: "$179,800",
        description: "620 HP - 2.9s 0-60 - Luxury Executive",
        folderPath: "/images/porsche",
        heroImage: "/images/hero/panamera.jpg",
        themeColor: "#ffffff",
        gradient: "linear-gradient(135deg, #444 0%, #000 100%)",
        features: ["620 HP", "2.9s 0-60", "Hybrid"],
        stats: [
            { label: "Power", val: "620HP" },
            { label: "0-60", val: "2.9s" },
            { label: "Executive", val: "4 Seats" }
        ],
        section1: { title: "Panamera Turbo S.", subtitle: "Sports car for four." },
        section2: { title: "Executive class.", subtitle: "Uncompromising luxury and space for four, with the heart of a 911." },
        section3: { title: "Grand Touring.", subtitle: "Effortlessly shrinking continents with comfort and shattering speed." },
        section4: { title: "Hybrid Power.", subtitle: "" },
        detailsSection: {
            title: "Master of All Trades",
            description: "The Panamera Turbo S E-Hybrid bridges the gap between a high-performance sports car and an exclusive saloon. It offers first-class comfort for four passengers while delivering lap times that shame many dedicated coupes. The hybrid powertrain adds massive torque fill and efficiency, making it the ultimate daily driver for the discerning executive.",
            imageAlt: "Porsche Panamera Turbo S Details"
        },
        freshnessSection: {
            title: "Interior Sanctuary",
            description: "The Panamera's cabin is a seamless blend of digital modernity and traditional analog luxury. The Advanced Cockpit concept focuses on the driver, while rear passengers enjoy individual seats with extensive infotainment options. It is a space designed for rapid, comfortable travel across any distance."
        },
        buyNowSection: {
            price: "$179,800",
            unit: "MSRP",
            processingParams: ["E-Hybrid System", "Executive Seating", "Sport Chrono"],
            deliveryPromise: "VIP delivery at Porsche Experience Center available.",
            returnPolicy: "Comprehensive 4-year warranty."
        }
    }
];

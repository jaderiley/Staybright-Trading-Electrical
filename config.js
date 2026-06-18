/* ============================================================
   CONFIG — edit ONLY this file per client
   ============================================================ */

const CONFIG = {

  // ─── BUSINESS INFO ───────────────────────────────────────
  business: {
    name:      "Staybright Trading Electrical",
    phone:     "+27 64 550 3832",
    whatsapp:  "+27 64 550 3832",
    address:   "Edward rd &, Millar St, Johannesburg, South Africa",
    hours:     "Mon–Fri 7am–5pm · Sat 7am–1pm · Emergency callouts available",
    region:    "Gauteng",
    priceRange:"$$",
    suburbs: [
      "Johannesburg CBD",
      "Parktown",
      "Melville",
      "Westdene",
      "Brixton",
      "Newlands",
      "Sophiatown",
      "Auckland Park"
    ]
  },

  // ─── PAGE META / SEO ─────────────────────────────────────
  meta: {
    title:       "Staybright Trading Electrical — Electrician in johannesburg",
    description: "Staybright Trading Electrical provides professional electrician in Johannesburg. 22 Google reviews. Call for a quote today.",
    url:         ""  // Live domain — e.g. https://example.co.za (activates canonical + WebSite schema)
  },

  // ─── BRANDING ────────────────────────────────────────────
  branding: {
    palette:  "volt",   // ember | security | forest | volt | tide
    ogImage:  "images/og.jpg"
  },

  // ─── CONTENT ─────────────────────────────────────────────
  content: {
    eyebrow:    "Electrician · Johannesburg & surrounds",
    heroTitle:  "Electrical faults, installations — <em>fixed properly.</em>",
    heroLead:   "Staybright Trading Electrical handles residential and commercial electrical work across Johannesburg. Fault-finding, DB board repairs, compliance certificates and new installations.",

    googleRating: "4.9",
    reviewsCount: "22",
    featuredQuote: "Had a tripping geyser circuit — they diagnosed it properly, replaced the element and the wiring fault. Excellent work.",
    featuredQuoteAuthor: "— Mark B., Google review",

    trustSignals: ["Fault finding", "DB board work", "CoC certificates", "New installations"],

    // ─── SERVICES ──────────────────────────────────────────
    servicesTitle: "Electrical work done safely and correctly.",
    servicesLead:  "From a tripping breaker to a full rewire — we diagnose, repair and certify.",
    services: [
      {
        icon:  "bolt",
        title: "Fault finding & repairs",
        desc:  "Lights not working, breakers tripping, sockets dead? We trace the fault and fix it properly, not just reset the breaker."
      },
      {
        icon:  "circuit",
        title: "DB board repairs & upgrades",
        desc:  "Faulty breakers, overloaded boards and old fuse boxes repaired or replaced to current standards."
      },
      {
        icon:  "shield",
        title: "Compliance certificates (CoC)",
        desc:  "Electrical compliance certificates for property sales and insurance. We inspect, repair what is needed and certify."
      },
      {
        icon:  "hardhat",
        title: "New electrical installations",
        desc:  "New circuits, extra sockets, outdoor lighting, gate motors and alarm connections installed and certified."
      },
      {
        icon:  "bolt",
        title: "Geyser wiring",
        desc:  "New geyser connections, timer installations and geyser element replacements. Properly wired and tested."
      },
      {
        icon:  "wrench",
        title: "Solar & inverter wiring",
        desc:  "Inverter and solar system electrical connections, battery wiring and DB integration done to code."
      },
    ],

    // ─── WORK GALLERY ──────────────────────────────────────
    galleryTitle: "The work, up close.",
    galleryLead:  "A look at the kind of work we handle every week.",
    gallery: [
      {
        image:   "images/work-1.jpg",
        art:     "lockCylinderPick",
        fig:     "01 — Fault finding",
        title:   "Traced and repaired",
        caption: "Electrical faults traced systematically from the symptom to the source — then fixed rather than just reset."
      },
      {
        image:   "images/work-2.jpg",
        art:     "lockCylinderPick",
        fig:     "02 — DB board work",
        title:   "Upgraded and compliant",
        caption: "Old or overloaded distribution boards replaced with correctly sized breakers and proper labelling."
      },
      {
        image:   "images/work-3.jpg",
        art:     "lockCylinderPick",
        fig:     "03 — CoC inspection",
        title:   "Inspected and certified",
        caption: "Full wiring inspection against SANS 10142 standards. Faults repaired and a certificate of compliance issued."
      },
      {
        image:   "images/work-4.jpg",
        art:     "lockCylinderPick",
        fig:     "04 — New installation",
        title:   "Installed clean",
        caption: "New circuits, sockets and light fittings installed neatly — concealed cable runs where possible."
      },
      {
        image:   "images/work-5.jpg",
        art:     "lockCylinderPick",
        fig:     "05 — Geyser wiring",
        title:   "Correctly wired",
        caption: "Geyser connections installed to standard with the correct breaker size, isolator and earth bonding."
      },
    ],

    // ─── PHOTO BAND ────────────────────────────────────────
    band: {
      image: "images/band.jpg",
      alt:   "Staybright Trading Electrical team at work in Johannesburg",
      text:  "Professional electrical work — done right, first time."
    },

    // ─── AREAS BLURB ───────────────────────────────────────
    areasTitle: "Based in Johannesburg. Serving the wider area.",
    areasLead:  "We work across Johannesburg CBD, Parktown, Melville and the surrounding suburbs.",
    areasNote:  "Covering most of greater Johannesburg — call us to confirm your area.",

    // ─── WHY US ────────────────────────────────────────────
    whyTitle: "Why people call us for electrical work.",
    why: [
      {
        title: "We diagnose before we quote",
        desc:  "We find out what the actual problem is before pricing the job — so you are not paying for unnecessary work."
      },
      {
        title: "Certified, registered electricians",
        desc:  "All work done by registered electricians and certified to SANS 10142. You get the paperwork to prove it."
      },
      {
        title: "Neat, tidy work",
        desc:  "Cables run properly, boxes fitted flush, no exposed wiring left behind. We work as if it is our own home."
      },
    ],

    // ─── REVIEWS ───────────────────────────────────────────
    reviewsTitle: "From 22 verified Google reviews.",
    reviews: [
      {
        body:   "Had a tripping geyser circuit — they diagnosed it properly, replaced the element and the wiring fault. Excellent work.",
        name:   "Mark B.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "DB board was a mess. New board installed, everything labelled and a CoC issued. Very professional.",
        name:   "Chanel T.",
        stars:  5,
        source: "Google"
      },
      {
        body:   "Fast response for an electrical fault that had left us without power. Fixed the same afternoon. Highly recommend.",
        name:   "Sipho N.",
        stars:  5,
        source: "Google"
      },
    ],

    // ─── FAQ ────────────────────────────────────────────────
    faqTitle: "Electrical questions answered.",
    faqLead:  "What most people ask before booking.",
    faq: [
      {
        q: "Why does my circuit breaker keep tripping?",
        a: "Usually an overloaded circuit, a faulty appliance or a wiring fault. We find the cause — resetting the breaker without diagnosing it just means it trips again."
      },
      {
        q: "What is a Certificate of Compliance (CoC) and when do I need it?",
        a: "A CoC certifies that your electrical installation meets current standards. You need one when selling a property or after major electrical work."
      },
      {
        q: "Can you do the CoC for a property sale quickly?",
        a: "Usually within a few days, depending on the state of the installation. We inspect, repair any issues and issue the certificate."
      },
      {
        q: "My geyser is not heating — is it the element or the thermostat?",
        a: "We will check both. Elements and thermostats can both fail, and sometimes it is a wiring issue. We diagnose before ordering parts."
      },
      {
        q: "Can you add more sockets or a new circuit?",
        a: "Yes — all new circuits are installed correctly to the board and certified as part of the work."
      },
    ],

    // ─── CONTACT ───────────────────────────────────────────
    contactTitle: "Tell us what needs to be done.",
    contactLead:  "Describe what is happening and we will advise on the work and cost.",
    contactPlaceholder: "e.g. breaker tripping, need extra sockets, geyser not heating"
  }
};

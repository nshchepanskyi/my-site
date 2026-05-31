
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const i18n = {
  en: {
    title: "Lumina - Find & Book Perfect Stay",
    nav_home: "Home",
    nav_rooms: "Rooms",
    nav_how: "How it works",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    login: "Log in",
    book_now: "Book Now",
    toggle_theme: "Toggle theme",
    hero_eyebrow: "Book your stay effortless",
    hero_title: "Find & Book Perfect Stay",
    hero_text: "Uncover hidden luxury, breathtaking views, and unforgettable moments crafted for true explorers and comfort seekers.",
    search_rooms: "Search Rooms",
    tab_location: "Location",
    tab_dates: "Dates",
    tab_guests: "Guests",
    search_where: "Where",
    search_where_pl: "e.g. Maldives, Tokyo\u2026",
    checkin: "Check-in",
    checkout: "Check-out",
    guests: "Guests",
    search: "Search",
    process_label: "Process",
    process_title: "Seamless Booking Experience",
    process_sub: "Everything you need to find, book, and enjoy your perfect stay, all in one modern platform.",
    proc1_title: "Search Location",
    proc1_desc: "Enter your destination and dates to explore available premium properties.",
    proc2_title: "Choose Room",
    proc2_desc: "Filter by amenities, price, and reviews to find your perfect match.",
    proc3_title: "Book Instantly",
    proc3_desc: "Secure your reservation with our fast, encrypted checkout process.",
    proc4_title: "Enjoy Stay",
    proc4_desc: "Arrive, relax, and enjoy your meticulously curated accommodation.",
    feat1_title: "Easy Booking",
    feat1_desc: "One-click reservation system",
    feat2_title: "Best Prices",
    feat2_desc: "Price match guarantee",
    feat3_title: "Verified Hotels",
    feat3_desc: "Strict quality standards",
    feat4_title: "24/7 Support",
    feat4_desc: "Always here to help you",
    benefit1_title: "Curated Luxury Stays",
    benefit1_desc: "Every property in our collection is personally vetted to ensure exceptional quality, breathtaking views, and unforgettable experiences tailored for discerning travelers like you.",
    benefit2_title: "Seamless Booking Experience",
    benefit2_desc: "From instant confirmations to 24/7 concierge support, we take care of every detail so you can focus on what matters most \u2013 creating memories that last a lifetime.",
    featured_label: "Featured",
    featured_title: "Trending Destinations",
    view_all: "View all properties \u2192",
    room1_name: "Grand Resort & Spa",
    room1_loc: "Maldives",
    room1_beds: "2 Beds",
    room1_bath: "1 Bath",
    room1_wifi: "Free WiFi",
    room1_img: "Grand Resort & Spa, Maldives",
    room2_name: "Urban Loft Suites",
    room2_loc: "New York",
    room2_beds: "1 Bed",
    room2_bath: "1 Bath",
    room2_breakfast: "Breakfast",
    room2_img: "Urban Loft Suites, New York",
    badge_popular: "Popular",
    room3_name: "Alpine Retreat Villa",
    room3_loc: "Swiss Alps",
    room3_beds: "3 Beds",
    room3_bath: "2 Baths",
    room3_fireplace: "Fireplace",
    room3_img: "Alpine Retreat Villa, Swiss Alps",
    room4_name: "Sakura Sky Penthouse",
    room4_loc: "Tokyo",
    room4_beds: "2 Beds",
    room4_bath: "2 Baths",
    room4_view: "City View",
    room4_img: "Sakura Sky Penthouse, Tokyo",
    badge_new: "New",
    per_night: "/ night",
    testimonials_title: "What our guests say",
    testimonial1_text: "\"The booking process was incredibly smooth. Found a hidden gem in Paris that wasn't listed anywhere else.\"",
    testimonial1_name: "Sarah Jenkins",
    testimonial1_place: "Stayed in Paris, France",
    testimonial2_text: "\"Best UI I've seen for a travel site. Clean, fast, and no hidden fees at checkout.\"",
    testimonial2_name: "Michael Chen",
    testimonial2_place: "Stayed in Bali, Indonesia",
    testimonial3_text: "\"I travel for work constantly and Lumina has become my go-to. The instant booking feature saves me hours.\"",
    testimonial3_name: "David Ross",
    testimonial3_place: "Stayed in London, UK",
    cta_title: "Ready to Book Your Stay?",
    cta_text: "Join thousands of travelers who use Lumina to find and book their perfect accommodations worldwide.",
    cta_btn: "Get Started Now",
    modal_title: "Book Your Stay",
    timeout_msg: "Your offer has expired.",
    start_again: "Start Again",
    form_name: "Full Name",
    form_name_pl: "e.g. Jane Smith",
    form_email: "Email",
    form_email_pl: "you@example.com",
    form_phone: "Phone",
    form_phone_pl: "+1 555 000 0000",
    form_checkin: "Check-in",
    form_checkout: "Check-out",
    form_guests: "Guests",
    form_select_guests: "Select guests",
    form_1guest: "1 Guest",
    form_2guests: "2 Guests",
    form_3guests: "3+ Guests",
    offer_expires: "Offer expires in:",
    footer_tagline: "Find and book your perfect stay anywhere in the world.",
    footer_nav: "Navigation",
    footer_contact: "Contact",
    footer_follow: "Follow Us",
    brand: "Lumina",
    rights: "All rights reserved.",
    cookie_text: "We use cookies to enhance your experience. By continuing, you agree to our use of cookies.",
    cookie_accept: "Accept",
    go_top: "Scroll to top",
    toast_success: "Booking submitted! We'll be in touch shortly.",
    lang_btn: "UA",
    lang_aria: "Switch to Ukrainian"
  },
  uk: {
    title: "Lumina \u2014 \u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0442\u0430 \u0437\u0430\u0431\u0440\u043E\u043D\u044E\u0439\u0442\u0435 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    nav_home: "\u0413\u043E\u043B\u043E\u0432\u043D\u0430",
    nav_rooms: "\u041D\u043E\u043C\u0435\u0440\u0438",
    nav_how: "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454",
    nav_reviews: "\u0412\u0456\u0434\u0433\u0443\u043A\u0438",
    nav_contact: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    login: "\u0423\u0432\u0456\u0439\u0442\u0438",
    book_now: "\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438",
    toggle_theme: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u0442\u0435\u043C\u0443",
    hero_eyebrow: "\u0411\u0440\u043E\u043D\u044E\u0439\u0442\u0435 \u0431\u0435\u0437 \u0437\u0443\u0441\u0438\u043B\u044C",
    hero_title: "\u0417\u043D\u0430\u0439\u0434\u0456\u0442\u044C \u0442\u0430 \u0437\u0430\u0431\u0440\u043E\u043D\u044E\u0439\u0442\u0435 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    hero_text: "\u0412\u0456\u0434\u043A\u0440\u0438\u0439\u0442\u0435 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0443 \u0440\u043E\u0437\u043A\u0456\u0448, \u0437\u0430\u0445\u043E\u043F\u043B\u0438\u0432\u0456 \u043A\u0440\u0430\u0454\u0432\u0438\u0434\u0438 \u0442\u0430 \u043D\u0435\u0437\u0430\u0431\u0443\u0442\u043D\u0456 \u043C\u043E\u043C\u0435\u043D\u0442\u0438, \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u0456 \u0434\u043B\u044F \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0445 \u0434\u043E\u0441\u043B\u0456\u0434\u043D\u0438\u043A\u0456\u0432 \u0442\u0430 \u0448\u0443\u043A\u0430\u0447\u0456\u0432 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u0443.",
    search_rooms: "\u041F\u043E\u0448\u0443\u043A \u043D\u043E\u043C\u0435\u0440\u0456\u0432",
    tab_location: "\u041B\u043E\u043A\u0430\u0446\u0456\u044F",
    tab_dates: "\u0414\u0430\u0442\u0438",
    tab_guests: "\u0413\u043E\u0441\u0442\u0456",
    search_where: "\u041A\u0443\u0434\u0438",
    search_where_pl: "\u043D\u0430\u043F\u0440. \u041C\u0430\u043B\u044C\u0434\u0456\u0432\u0438, \u0422\u043E\u043A\u0456\u043E\u2026",
    checkin: "\u0417\u0430\u0457\u0437\u0434",
    checkout: "\u0412\u0438\u0457\u0437\u0434",
    guests: "\u0413\u043E\u0441\u0442\u0456",
    search: "\u041F\u043E\u0448\u0443\u043A",
    process_label: "\u041F\u0440\u043E\u0446\u0435\u0441",
    process_title: "\u041F\u043B\u0430\u0432\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
    process_sub: "\u0423\u0441\u0435, \u0449\u043E \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443, \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0430 \u043D\u0430\u0441\u043E\u043B\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F\u043C \u043D\u0430 \u043E\u0434\u043D\u0456\u0439 \u0441\u0443\u0447\u0430\u0441\u043D\u0456\u0439 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0456.",
    proc1_title: "\u041F\u043E\u0448\u0443\u043A \u043B\u043E\u043A\u0430\u0446\u0456\u0457",
    proc1_desc: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0443\u043D\u043A\u0442 \u043F\u0440\u0438\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0442\u0430 \u0434\u0430\u0442\u0438, \u0449\u043E\u0431 \u0434\u043E\u0441\u043B\u0456\u0434\u0438\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0456 \u0435\u043B\u0456\u0442\u043D\u0456 \u0432\u0430\u0440\u0456\u0430\u043D\u0442\u0438.",
    proc2_title: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043D\u043E\u043C\u0435\u0440",
    proc2_desc: "\u0424\u0456\u043B\u044C\u0442\u0440\u0443\u0439\u0442\u0435 \u0437\u0430 \u0437\u0440\u0443\u0447\u043D\u043E\u0441\u0442\u044F\u043C\u0438, \u0446\u0456\u043D\u043E\u044E \u0442\u0430 \u0432\u0456\u0434\u0433\u0443\u043A\u0430\u043C\u0438, \u0449\u043E\u0431 \u0437\u043D\u0430\u0439\u0442\u0438 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043D\u0442.",
    proc3_title: "\u041C\u0438\u0442\u0442\u0454\u0432\u0435 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
    proc3_desc: "\u0417\u0430\u0445\u0438\u0441\u0442\u0456\u0442\u044C \u0441\u0432\u043E\u0454 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043D\u0430\u0448\u043E\u0433\u043E \u0448\u0432\u0438\u0434\u043A\u043E\u0433\u043E \u0442\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0443.",
    proc4_title: "\u041D\u0430\u0441\u043E\u043B\u043E\u0434\u0436\u0443\u0439\u0442\u0435\u0441\u044C",
    proc4_desc: "\u041F\u0440\u0438\u0457\u0437\u0434\u0436\u0430\u0439\u0442\u0435, \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u0442\u0430 \u043D\u0430\u0441\u043E\u043B\u043E\u0434\u0436\u0443\u0439\u0442\u0435\u0441\u044F \u0440\u0435\u0442\u0435\u043B\u044C\u043D\u043E \u043F\u0456\u0434\u0456\u0431\u0440\u0430\u043D\u0438\u043C \u0436\u0438\u0442\u043B\u043E\u043C.",
    feat1_title: "\u041B\u0435\u0433\u043A\u0435 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
    feat1_desc: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0432 \u043E\u0434\u0438\u043D \u043A\u043B\u0456\u043A",
    feat2_title: "\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0456 \u0446\u0456\u043D\u0438",
    feat2_desc: "\u0413\u0430\u0440\u0430\u043D\u0442\u0456\u044F \u043D\u0430\u0439\u043A\u0440\u0430\u0449\u043E\u0457 \u0446\u0456\u043D\u0438",
    feat3_title: "\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043D\u0456 \u0433\u043E\u0442\u0435\u043B\u0456",
    feat3_desc: "\u0421\u0443\u0432\u043E\u0440\u0456 \u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u0438 \u044F\u043A\u043E\u0441\u0442\u0456",
    feat4_title: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0430 24/7",
    feat4_desc: "\u0417\u0430\u0432\u0436\u0434\u0438 \u043F\u043E\u0440\u0443\u0447, \u0449\u043E\u0431 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438",
    benefit1_title: "\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u043E \u043F\u0456\u0434\u0456\u0431\u0440\u0430\u043D\u0456 \u043B\u044E\u043A\u0441\u043E\u0432\u0456 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    benefit1_desc: "\u041A\u043E\u0436\u0435\u043D \u043E\u0431\u2019\u0454\u043A\u0442 \u0432 \u043D\u0430\u0448\u0456\u0439 \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u0457 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u043E \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0454\u0442\u044C\u0441\u044F, \u0449\u043E\u0431 \u0433\u0430\u0440\u0430\u043D\u0442\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u0432\u0443 \u044F\u043A\u0456\u0441\u0442\u044C, \u0437\u0430\u0445\u043E\u043F\u043B\u0438\u0432\u0456 \u043A\u0440\u0430\u0454\u0432\u0438\u0434\u0438 \u0442\u0430 \u043D\u0435\u0437\u0430\u0431\u0443\u0442\u043D\u0456 \u0432\u0440\u0430\u0436\u0435\u043D\u043D\u044F.",
    benefit2_title: "\u0411\u0435\u0437\u0434\u043E\u0433\u0430\u043D\u043D\u0438\u0439 \u0434\u043E\u0441\u0432\u0456\u0434 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
    benefit2_desc: "\u0412\u0456\u0434 \u043C\u0438\u0442\u0442\u0454\u0432\u043E\u0433\u043E \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u0434\u043E \u043F\u0456\u0434\u0442\u0440\u0438\u043C\u043A\u0438 \u043A\u043E\u043D\u0441\u044A\u0435\u0440\u0436\u0443 24/7 \u2014 \u043C\u0438 \u043F\u0456\u043A\u043B\u0443\u0454\u043C\u043E\u0441\u044F \u043F\u0440\u043E \u043A\u043E\u0436\u0435\u043D \u0434\u0435\u0442\u0430\u043B\u044C, \u0449\u043E\u0431 \u0432\u0438 \u0437\u043E\u0441\u0435\u0440\u0435\u0434\u0438\u043B\u0438\u0441\u044F \u043D\u0430 \u043D\u0430\u0439\u0432\u0430\u0436\u043B\u0438\u0432\u0456\u0448\u043E\u043C\u0443 \u2014 \u0441\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u0456 \u0441\u043F\u043E\u0433\u0430\u0434\u0456\u0432 \u043D\u0430 \u0432\u0441\u0435 \u0436\u0438\u0442\u0442\u044F.",
    featured_label: "\u041F\u0456\u0434\u0456\u0431\u0440\u0430\u043D\u043E",
    featured_title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0456 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0438",
    view_all: "\u0414\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u0432\u0441\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u2192",
    room1_name: "\u0413\u0440\u0430\u043D\u0434 \u0420\u0435\u0437\u043E\u0440\u0442 \u0442\u0430 \u0421\u043F\u0430",
    room1_loc: "\u041C\u0430\u043B\u044C\u0434\u0456\u0432\u0438",
    room1_beds: "2 \u043B\u0456\u0436\u043A\u0430",
    room1_bath: "1 \u0432\u0430\u043D\u043D\u0430",
    room1_wifi: "WiFi",
    room1_img: "\u0413\u0440\u0430\u043D\u0434 \u0420\u0435\u0437\u043E\u0440\u0442 \u0442\u0430 \u0421\u043F\u0430, \u041C\u0430\u043B\u044C\u0434\u0456\u0432\u0438",
    room2_name: "\u041C\u0456\u0441\u044C\u043A\u0456 \u041B\u043E\u0444\u0442 \u0421\u044E\u0457\u0442\u0438",
    room2_loc: "\u041D\u044C\u044E-\u0419\u043E\u0440\u043A",
    room2_beds: "1 \u043B\u0456\u0436\u043A\u043E",
    room2_bath: "1 \u0432\u0430\u043D\u043D\u0430",
    room2_breakfast: "\u0421\u043D\u0456\u0434\u0430\u043D\u043E\u043A",
    room2_img: "\u041C\u0456\u0441\u044C\u043A\u0456 \u041B\u043E\u0444\u0442 \u0421\u044E\u0457\u0442\u0438, \u041D\u044C\u044E-\u0419\u043E\u0440\u043A",
    badge_popular: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u0438\u0439",
    room3_name: "\u0413\u0456\u0440\u044C\u043A\u0430 \u0412\u0456\u043B\u043B\u0430 \u0410\u043B\u044C\u043F\u0438",
    room3_loc: "\u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u044C\u043A\u0456 \u0410\u043B\u044C\u043F\u0438",
    room3_beds: "3 \u043B\u0456\u0436\u043A\u0430",
    room3_bath: "2 \u0432\u0430\u043D\u043D\u0438",
    room3_fireplace: "\u041A\u0430\u043C\u0456\u043D",
    room3_img: "\u0413\u0456\u0440\u044C\u043A\u0430 \u0412\u0456\u043B\u043B\u0430 \u0410\u043B\u044C\u043F\u0438, \u0428\u0432\u0435\u0439\u0446\u0430\u0440\u0441\u044C\u043A\u0456 \u0410\u043B\u044C\u043F\u0438",
    room4_name: "\u041F\u0435\u043D\u0442\u0445\u0430\u0443\u0441 \u0421\u0430\u043A\u0443\u0440\u0430",
    room4_loc: "\u0422\u043E\u043A\u0456\u043E",
    room4_beds: "2 \u043B\u0456\u0436\u043A\u0430",
    room4_bath: "2 \u0432\u0430\u043D\u043D\u0438",
    room4_view: "\u0412\u0438\u0434 \u043D\u0430 \u043C\u0456\u0441\u0442\u043E",
    room4_img: "\u041F\u0435\u043D\u0442\u0445\u0430\u0443\u0441 \u0421\u0430\u043A\u0443\u0440\u0430, \u0422\u043E\u043A\u0456\u043E",
    badge_new: "\u041D\u043E\u0432\u0438\u043D\u043A\u0430",
    per_night: "/ \u043D\u0456\u0447",
    testimonials_title: "\u0429\u043E \u043A\u0430\u0436\u0443\u0442\u044C \u043D\u0430\u0448\u0456 \u0433\u043E\u0441\u0442\u0456",
    testimonial1_text: "\u00AB\u041F\u0440\u043E\u0446\u0435\u0441 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0431\u0443\u0432 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E \u043F\u0440\u043E\u0441\u0442\u0438\u043C. \u0417\u043D\u0430\u0439\u0448\u043B\u0430 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439 \u0441\u043A\u0430\u0440\u0431 \u0443 \u041F\u0430\u0440\u0438\u0436\u0456.\u00BB",
    testimonial1_name: "\u0421\u0430\u0440\u0430 \u0414\u0436\u0435\u043D\u043A\u0456\u043D\u0441",
    testimonial1_place: "\u0417\u0443\u043F\u0438\u043D\u044F\u043B\u0430\u0441\u044C \u0443 \u041F\u0430\u0440\u0438\u0436\u0456, \u0424\u0440\u0430\u043D\u0446\u0456\u044F",
    testimonial2_text: "\u00AB\u041D\u0430\u0439\u043A\u0440\u0430\u0449\u0438\u0439 UI \u0441\u0435\u0440\u0435\u0434 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u043D\u0438\u0445 \u0441\u0430\u0439\u0442\u0456\u0432. \u0427\u0438\u0441\u0442\u043E, \u0448\u0432\u0438\u0434\u043A\u043E \u0442\u0430 \u0431\u0435\u0437 \u043F\u0440\u0438\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u043A\u043E\u043C\u0456\u0441\u0456\u0439.\u00BB",
    testimonial2_name: "\u041C\u0430\u0439\u043A\u043B \u0427\u0435\u043D",
    testimonial2_place: "\u0417\u0443\u043F\u0438\u043D\u0438\u0432\u0441\u044F \u0443 \u0411\u0430\u043B\u0456, \u0406\u043D\u0434\u043E\u043D\u0435\u0437\u0456\u044F",
    testimonial3_text: "\u00AB\u042F \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u043F\u043E\u0434\u043E\u0440\u043E\u0436\u0443\u044E \u0443 \u0441\u043F\u0440\u0430\u0432\u0430\u0445, \u0456 Lumina \u0441\u0442\u0430\u043B\u0430 \u043C\u043E\u0457\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u0438\u043C \u0432\u0438\u0431\u043E\u0440\u043E\u043C. \u041C\u0438\u0442\u0442\u0454\u0432\u0435 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0435\u043A\u043E\u043D\u043E\u043C\u0438\u0442\u044C \u043C\u0435\u043D\u0456 \u0433\u043E\u0434\u0438\u043D\u0438.\u00BB",
    testimonial3_name: "\u0414\u0435\u0432\u0456\u0434 \u0420\u043E\u0441\u0441",
    testimonial3_place: "\u0417\u0443\u043F\u0438\u043D\u0438\u0432\u0441\u044F \u0443 \u041B\u043E\u043D\u0434\u043E\u043D\u0456, \u0412\u0435\u043B\u0438\u043A\u0430 \u0411\u0440\u0438\u0442\u0430\u043D\u0456\u044F",
    cta_title: "\u0413\u043E\u0442\u043E\u0432\u0456 \u0437\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438?",
    cta_text: "\u0414\u043E\u043B\u0443\u0447\u0438\u0442\u0435\u0441\u044F \u0434\u043E \u0442\u0438\u0441\u044F\u0447 \u043C\u0430\u043D\u0434\u0440\u0456\u0432\u043D\u0438\u043A\u0456\u0432, \u044F\u043A\u0456 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C Lumina \u0434\u043B\u044F \u043F\u043E\u0448\u0443\u043A\u0443 \u0442\u0430 \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0436\u0438\u0442\u043B\u0430 \u043F\u043E \u0432\u0441\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0443.",
    cta_btn: "\u0420\u043E\u0437\u043F\u043E\u0447\u0430\u0442\u0438",
    modal_title: "\u0417\u0430\u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F",
    timeout_msg: "\u0422\u0435\u0440\u043C\u0456\u043D \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\u0441\u044F.",
    start_again: "\u0421\u043F\u0440\u043E\u0431\u0443\u0432\u0430\u0442\u0438 \u0437\u043D\u043E\u0432\u0443",
    form_name: "\u0406\u043C'\u044F",
    form_name_pl: "\u043D\u0430\u043F\u0440. \u041E\u043B\u0435\u043D\u0430 \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E",
    form_email: "Email",
    form_email_pl: "you@example.com",
    form_phone: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    form_phone_pl: "+380 50 000 00 00",
    form_checkin: "\u0417\u0430\u0457\u0437\u0434",
    form_checkout: "\u0412\u0438\u0457\u0437\u0434",
    form_guests: "\u0413\u043E\u0441\u0442\u0456",
    form_select_guests: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043A\u0456\u043B\u044C\u043A\u0456\u0441\u0442\u044C",
    form_1guest: "1 \u0433\u0456\u0441\u0442\u044C",
    form_2guests: "2 \u0433\u043E\u0441\u0442\u0456",
    form_3guests: "3+ \u0433\u043E\u0441\u0442\u0435\u0439",
    offer_expires: "\u041F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044F \u0434\u0456\u0454:",
    footer_tagline: "\u0417\u043D\u0430\u0445\u043E\u0434\u044C\u0442\u0435 \u0442\u0430 \u0431\u0440\u043E\u043D\u044E\u0439\u0442\u0435 \u0456\u0434\u0435\u0430\u043B\u044C\u043D\u0435 \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u043D\u044F \u0434\u0435 \u0437\u0430\u0432\u0433\u043E\u0434\u043D\u043E \u0443 \u0441\u0432\u0456\u0442\u0456.",
    footer_nav: "\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044F",
    footer_contact: "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438",
    footer_follow: "\u0421\u0442\u0435\u0436\u0438\u0442\u0438 \u0437\u0430 \u043D\u0430\u043C\u0438",
    brand: "Lumina",
    rights: "\u0423\u0441\u0456 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043D\u0456.",
    cookie_text: "\u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u043C\u043E \u0444\u0430\u0439\u043B\u0438 cookie \u0434\u043B\u044F \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044F \u0432\u0430\u0448\u043E\u0433\u043E \u0434\u043E\u0441\u0432\u0456\u0434\u0443. \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u044E\u0447\u0438, \u0432\u0438 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0454\u0442\u0435\u0441\u044F \u043D\u0430 \u0457\u0445 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F.",
    cookie_accept: "\u041F\u0440\u0438\u0439\u043D\u044F\u0442\u0438",
    go_top: "\u041D\u0430\u0432\u0435\u0440\u0445",
    toast_success: "\u0417\u0430\u044F\u0432\u043A\u0443 \u043F\u0440\u0438\u0439\u043D\u044F\u0442\u043E! \u041C\u0438 \u0437\u0432'\u044F\u0436\u0435\u043C\u043E\u0441\u044F \u0437 \u0432\u0430\u043C\u0438 \u043D\u0435\u043D\u0430\u0431\u0430\u0433\u043E.",
    lang_btn: "EN",
    lang_aria: "\u041F\u0435\u0440\u0435\u043C\u043A\u043D\u0443\u0442\u0438 \u043D\u0430 \u0430\u043D\u0433\u043B\u0456\u0439\u0441\u044C\u043A\u0443"
  }
};


const elements = {
    header: $('#header'),
    burgerBtn: $('#burgerBtn'),
    mobileMenu: $('#mobileMenu'),
    modal: $('#modal'),
    closeBtn: $('#closeBtn'),
    bookForm: $('#bookForm'),
    nameInput: $('#nameInput'),
    nameError: $('#nameError'),
    emailInput: $('#emailInput'),
    emailError: $('#emailError'),
    phoneInput: $('#phoneInput'),
    phoneError: $('#phoneError'),
    checkinInput: $('#checkinInput'),
    checkinError: $('#checkinError'),
    checkoutInput: $('#checkoutInput'),
    checkoutError: $('#checkoutError'),
    guestsSelect: $('#guestsSelect'),
    guestsError: $('#guestsError'),
    submitBtn: $('#submitBtn'),
    modalTimeout: $('#modalTimeout'),
    restartBtn: $('#restartBtn'),
    sliderPrev: $('#sliderPrev'),
    sliderNext: $('#sliderNext'),
    slider: $('#slider'),
    searchBtn: $('#searchBtn'),
    headerBookBtn: $('.header-actions .btn-primary'),
    searchCardBtn: $('#searchCardBtn'),
    searchTabs: $$('.search-tab'),
    ctaBtn: $('#ctaBtn'),
    timerEl: $('#timer'),
    roomBookBtns: $$('.room-card .btn-primary'),
    themeBtn: $('#themeBtn'),
    themeIcon: $('#themeIcon'),
    themeBtnMobile: $('#themeBtnMobile'),
    themeIconMobile: $('#themeIconMobile'),
    toastContainer: $('#toastContainer')
};


const SUN_SVG = `<path d="M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0-5a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 17a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm9-9a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zM4 11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h1zm14.657-5.657a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM7.05 16.95a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zm11.314 1.414a1 1 0 0 1-1.414 0l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707a1 1 0 0 1 0 1.414zM7.05 7.05a1 1 0 0 1-1.414 0l-.707-.707A1 1 0 0 1 6.343 4.93l.707.707a1 1 0 0 1 0 1.414z"/>`;
const MOON_SVG = `<path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>`;

let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
    currentLang = lang;
    const strings = i18n[lang];
    if (!strings) return;

    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (strings[key] !== undefined) {
            el.textContent = strings[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-placeholder');
        if (strings[key] !== undefined) {
            el.placeholder = strings[key];
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function(el) {
        var key = el.getAttribute('data-i18n-aria');
        if (strings[key] !== undefined) {
            el.setAttribute('aria-label', strings[key]);
        }
    });

    var langBtn = $('#langBtn');
    var langBtnMobile = $('#langBtnMobile');
    var nextLang = lang === 'en' ? 'uk' : 'en';
    langBtn.textContent = strings.lang_btn;
    langBtn.setAttribute('aria-label', strings.lang_aria);
    langBtnMobile.textContent = strings.lang_btn;
    langBtnMobile.setAttribute('aria-label', strings.lang_aria);

    localStorage.setItem('lang', lang);
}

function toggleLang() {
    applyLang(currentLang === 'en' ? 'uk' : 'en');
}

applyLang(currentLang);

elements.themeBtn.addEventListener('click', toggleTheme);
elements.themeBtnMobile.addEventListener('click', toggleTheme);
$('#langBtn').addEventListener('click', toggleLang);
$('#langBtnMobile').addEventListener('click', toggleLang);

function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    const svg = dark ? SUN_SVG : MOON_SVG;
    const label = dark ? 'Switch to light mode' : 'Switch to dark mode';
    elements.themeIcon.innerHTML = svg;
    elements.themeBtn.setAttribute('aria-label', label);
    elements.themeIconMobile.innerHTML = svg;
    elements.themeBtnMobile.setAttribute('aria-label', label);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}

applyTheme(localStorage.getItem('theme') === 'dark');

function toggleTheme() {
    applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
}


function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = 'toast toast--' + (type || 'info');
    toast.textContent = message;
    elements.toastContainer.appendChild(toast);

    setTimeout(function() {
        toast.classList.add('leaving');
        setTimeout(function() { toast.remove(); }, 300);
    }, 3500);
}


window.addEventListener('scroll', function() {
    elements.header.style.boxShadow = window.scrollY > 50 ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none';
});


elements.burgerBtn.addEventListener('click', function() {
    const isOpen = elements.mobileMenu.classList.toggle('active');
    elements.burgerBtn.setAttribute('aria-expanded', isOpen);
});

$$('.mobile-menu__link').forEach(function(link) {
    link.addEventListener('click', function() {
        elements.mobileMenu.classList.remove('active');
        elements.burgerBtn.setAttribute('aria-expanded', 'false');
    });
});


elements.searchTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
        elements.searchTabs.forEach(function(t) { t.classList.remove('active'); });
        tab.classList.add('active');
        const target = tab.getAttribute('data-tab');
        $$('.search-card__panel').forEach(function(panel) {
            panel.classList.toggle('active', panel.id === 'panel-' + target);
        });
    });
});


(function() {
    const today = new Date().toISOString().split('T')[0];
    const checkinEl = $('#searchCheckin');
    const checkoutEl = $('#searchCheckout');
    if (checkinEl) {
        checkinEl.min = today;
        checkinEl.addEventListener('change', function() {
            if (checkoutEl) checkoutEl.min = checkinEl.value;
        });
    }
})();


if (elements.searchCardBtn) {
    elements.searchCardBtn.addEventListener('click', function() {
        $('#rooms').scrollIntoView({ behavior: 'smooth' });
    });
}


function setTimedOut(expired) {
    elements.modalTimeout.hidden = !expired;
    elements.bookForm.hidden = expired;
    if (expired) {
        elements.timerEl.textContent = 'Timed out';
        elements.modal.classList.add('modal--timed-out');
    } else {
        elements.modal.classList.remove('modal--timed-out');
    }
}

function openModal() {
    if (!elements.modal.classList.contains('active')) {
        elements.modal.classList.add('active');
        setTimedOut(false);
        startTimer();
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        if (!elements.checkinInput.value) elements.checkinInput.value = today.toISOString().split('T')[0];
        if (!elements.checkoutInput.value) elements.checkoutInput.value = tomorrow.toISOString().split('T')[0];
    }
}

function closeModal() {
    elements.modal.classList.remove('active');
    stopTimer();
}

elements.restartBtn.addEventListener('click', function() {
    elements.bookForm.reset();
    setTimedOut(false);
    startTimer();
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    elements.checkinInput.value = today.toISOString().split('T')[0];
    elements.checkoutInput.value = tomorrow.toISOString().split('T')[0];
});

elements.searchBtn.addEventListener('click', function() {
    $('#rooms').scrollIntoView({ behavior: 'smooth' });
});
elements.ctaBtn.addEventListener('click', openModal);
if (elements.headerBookBtn) elements.headerBookBtn.addEventListener('click', openModal);
elements.roomBookBtns.forEach(function(btn) { btn.addEventListener('click', openModal); });
elements.closeBtn.addEventListener('click', closeModal);

elements.modal.addEventListener('click', function(e) {
    if (e.target === elements.modal) closeModal();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && elements.modal.classList.contains('active')) closeModal();
});


function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateName(name) {
    return name.trim().length >= 2 && /[a-zA-Z]/.test(name);
}

function validatePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    return /^[+\d][\d\s\-()+]{4,}$/.test(phone) && digits.length >= 6;
}

function showFieldError(input, errorEl, message) {
    input.classList.add('error');
    errorEl.textContent = message;
    errorEl.classList.add('show');
}

function clearFieldError(input, errorEl) {
    input.classList.remove('error');
    errorEl.classList.remove('show');
}

elements.nameInput.addEventListener('blur', function() {
    if (elements.nameInput.value && !validateName(elements.nameInput.value))
        showFieldError(elements.nameInput, elements.nameError, 'Name must contain at least 2 letters');
});
elements.nameInput.addEventListener('focus', function() { clearFieldError(elements.nameInput, elements.nameError); });

elements.emailInput.addEventListener('blur', function() {
    if (elements.emailInput.value && !validateEmail(elements.emailInput.value))
        showFieldError(elements.emailInput, elements.emailError, 'Invalid email address');
});
elements.emailInput.addEventListener('focus', function() { clearFieldError(elements.emailInput, elements.emailError); });

elements.phoneInput.addEventListener('blur', function() {
    if (elements.phoneInput.value && !validatePhone(elements.phoneInput.value))
        showFieldError(elements.phoneInput, elements.phoneError, 'Enter a valid phone number (e.g. +1 555 000 0000)');
});
elements.phoneInput.addEventListener('focus', function() { clearFieldError(elements.phoneInput, elements.phoneError); });

elements.checkinInput.addEventListener('change', function() {
    clearFieldError(elements.checkinInput, elements.checkinError);
    const today = new Date().toISOString().split('T')[0];
    if (elements.checkinInput.value < today) {
        showFieldError(elements.checkinInput, elements.checkinError, 'Check-in cannot be in the past');
    }
    if (elements.checkoutInput.value && elements.checkoutInput.value <= elements.checkinInput.value) {
        const next = new Date(elements.checkinInput.value);
        next.setDate(next.getDate() + 1);
        elements.checkoutInput.value = next.toISOString().split('T')[0];
    }
    elements.checkoutInput.min = elements.checkinInput.value;
});

elements.checkoutInput.addEventListener('change', function() {
    clearFieldError(elements.checkoutInput, elements.checkoutError);
    if (elements.checkinInput.value && elements.checkoutInput.value <= elements.checkinInput.value)
        showFieldError(elements.checkoutInput, elements.checkoutError, 'Check-out must be after check-in');
});

elements.guestsSelect.addEventListener('change', function() { clearFieldError(elements.guestsSelect, elements.guestsError); });

elements.bookForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    if (!validateName(elements.nameInput.value)) {
        showFieldError(elements.nameInput, elements.nameError, 'Name must contain at least 2 letters');
        valid = false;
    }
    if (!validateEmail(elements.emailInput.value)) {
        showFieldError(elements.emailInput, elements.emailError, 'Invalid email address');
        valid = false;
    }
    if (!validatePhone(elements.phoneInput.value)) {
        showFieldError(elements.phoneInput, elements.phoneError, 'Enter a valid phone number (e.g. +1 555 000 0000)');
        valid = false;
    }
    const today = new Date().toISOString().split('T')[0];
    if (!elements.checkinInput.value || elements.checkinInput.value < today) {
        showFieldError(elements.checkinInput, elements.checkinError, 'Please select a valid check-in date');
        valid = false;
    }
    if (!elements.checkoutInput.value || elements.checkoutInput.value <= elements.checkinInput.value) {
        showFieldError(elements.checkoutInput, elements.checkoutError, 'Check-out must be after check-in');
        valid = false;
    }
    if (!elements.guestsSelect.value) {
        showFieldError(elements.guestsSelect, elements.guestsError, 'Please select number of guests');
        valid = false;
    }
    if (!valid) return;

    closeModal();
    elements.bookForm.reset();
    showToast(i18n[currentLang].toast_success, 'success');
});


elements.sliderNext.addEventListener('click', function() {
    elements.slider.scrollBy({ left: elements.slider.firstElementChild.offsetWidth + 24, behavior: 'smooth' });
});

elements.sliderPrev.addEventListener('click', function() {
    elements.slider.scrollBy({ left: -(elements.slider.firstElementChild.offsetWidth + 24), behavior: 'smooth' });
});


let timerInterval;

function startTimer() {
    stopTimer();
    let seconds = 600;

    function updateTimer() {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        elements.timerEl.textContent = minutes + ':' + (secs < 10 ? '0' : '') + secs;
        seconds--;
        if (seconds < 0) {
            stopTimer();
            setTimedOut(true);
        }
    }

    updateTimer();
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}


const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

$$('.card, .review, .benefit-row').forEach(function(el) {
    observer.observe(el);
});


(function() {
    var cookieBar = $('#cookieBar');
    var acceptBtn = $('#cookieAcceptBtn');
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        cookieBar.classList.add('cookie-bar--hidden');
    }
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieBar.classList.add('cookie-bar--hidden');
    });
})();


(function() {
    var goTopBtn = $('#goTopBtn');

    function getViewportHeight() {
        return window.innerHeight;
    }

    function toggleGoTop() {
        if (window.scrollY > getViewportHeight()) {
            goTopBtn.classList.add('go-top--visible');
        } else {
            goTopBtn.classList.remove('go-top--visible');
        }
    }

    window.addEventListener('scroll', toggleGoTop);
    window.addEventListener('resize', toggleGoTop);

    goTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();

export interface TourPackage {
  id: string;
  title: string;
  slug: string;
  region: string;
  durationDays: number;
  durationLabel: string;
  samplePriceETB: number;
  samplePriceUSD: number;
  travelStyle: 'Historical & Cultural' | 'Adventure & Trekking' | 'Nature & Wildlife' | 'Cultural Immersion' | 'Multi-Day Journeys' | 'Private & Customized';
  difficulty: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  heroImage: string;
  gallery: string[];
  summary: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    accommodation?: string;
    meals?: string;
  }[];
  inclusions: string[];
  exclusions: string[];
  transportation: string;
  accommodationType: string;
  bestSeason: string;
  groupSize: string;
}

export const formatETB = (price: number): string => {
  return `ETB ${price.toLocaleString()}`;
};

export const TOURS_DATA: TourPackage[] = [
  {
    id: 'lalibela-historic-circuit',
    title: 'Historic Northern Circuit & Rock-Hewn Lalibela',
    slug: 'historic-northern-circuit-lalibela',
    region: 'Amhara & Tigray Highlands',
    durationDays: 8,
    durationLabel: '8 Days / 7 Nights',
    samplePriceETB: 235000,
    samplePriceUSD: 1850,
    travelStyle: 'Historical & Cultural',
    difficulty: 'Moderate',
    heroImage: '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg',
    gallery: [
      '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg',
      '/src/assets/images/destination_lake_tana_1791564373066.jpg',
      '/src/assets/images/tour_simien_mountains_1791564332514.jpg'
    ],
    summary: 'Journey across Ethiopia’s legendary northern historic route. Marvel at the monolith rock-hewn churches of Lalibela, explore the medieval castles of Gondar, cruise Lake Tana to ancient island monasteries, and uncover ancient Axum.',
    highlights: [
      'Private exploration of all 11 UNESCO rock-cut churches in Lalibela including Bet Giyorgis',
      'Sunset boat excursion on Lake Tana with visits to Ura Kidane Mehret monastery',
      'The 17th-century Royal Enclosure (Fasil Ghebbi) castles in Gondar',
      'Traditional Ethiopian coffee ceremony and highland dinner with authentic Azmari musicians',
      'Ancient stelae field and Chapel of the Tablet in Axum'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Addis Ababa — City of Origins',
        description: 'Meet your private tour director at Bole International Airport. Check in to your hotel, followed by an afternoon visit to the National Museum of Ethiopia to see the 3.2-million-year-old fossil of Lucy (Dinkinesh). Enjoy a welcome dinner featuring traditional injera and honey wine.',
        accommodation: 'Selected boutique hotel, Addis Ababa',
        meals: 'Dinner included'
      },
      {
        day: 2,
        title: 'Flight to Bahir Dar — Lake Tana & Blue Nile Falls',
        description: 'Morning flight to Bahir Dar. Take a private motorboat across Lake Tana to explore 14th-century monastery churches decorated with vivid biblical murals. Afternoon drive to the thundering Tis Issat (Blue Nile Falls).',
        accommodation: 'Lakeside lodge, Bahir Dar',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Bahir Dar to Gondar — The Camelot of Africa',
        description: 'Scenic drive through highland agricultural valleys to Gondar. Tour the imperial castles of Emperor Fasilides, the sunken bath of Fasilides, and Debre Berhan Selassie church with its iconic ceiling of winged cherubs.',
        accommodation: 'Historic lodge overlooking Gondar',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Day Excursion to Simien Mountains National Park',
        description: 'Morning drive to the dramatic UNESCO Simien Mountains. Walk along high escarpments to observe troops of endemic, friendly Gelada baboons grazing peacefully. Return to Gondar for the evening.',
        accommodation: 'Historic lodge, Gondar',
        meals: 'Breakfast, Picnic Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Flight to Lalibela — The Eighth Wonder',
        description: 'Morning flight into the mountain sanctuary of Lalibela. Begin your pilgrimage exploring the Northwestern Cluster of churches, including Bet Medhane Alem, the largest monolithic rock-hewn church in the world.',
        accommodation: 'Panoramic cliff lodge, Lalibela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Lalibela — Southeastern Cluster & Bet Giyorgis',
        description: 'Witness early morning chanting priests in white robes. Explore the Southeastern Group connected through subterranean rock tunnels, culminating at the cruciform Church of St. George (Bet Giyorgis) carved out of pink volcanic tuff.',
        accommodation: 'Panoramic cliff lodge, Lalibela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Asheten Maryam Monastery Hike & Cultural Evening',
        description: 'Mule trek or 4WD ascent to Asheten Maryam atop Mount Abuna Yosef (nearly 4,000m) for sweeping highland views. In the evening, celebrate with an authentic culinary experience and traditional music.',
        accommodation: 'Panoramic cliff lodge, Lalibela',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 8,
        title: 'Return to Addis Ababa — Departure',
        description: 'Morning flight back to Addis Ababa. Time for souvenir shopping in the bustling Merkato and local artisanal workshops. Farewell dinner before evening transfer to Bole Airport.',
        accommodation: 'Day room provided',
        meals: 'Breakfast, Farewell Dinner'
      }
    ],
    inclusions: [
      'All internal scheduled domestic flights within Ethiopia',
      'Private 4WD Toyota Land Cruiser with experienced driver and fuel',
      'Professional English-speaking Ethiopian tour leader throughout',
      'Local specialized site guides in Lalibela, Gondar, and Lake Tana',
      'All entrance fees to UNESCO monuments, national parks, and monasteries',
      'Boat charter on Lake Tana',
      'All 7 nights hotel and lodge accommodation based on twin/double sharing',
      'All meals specified in itinerary with bottled mineral water daily'
    ],
    exclusions: [
      'International flights to/from Addis Ababa',
      'Ethiopian tourist visa fees',
      'Travel and medical insurance',
      'Alcoholic beverages and personal expenses',
      'Gratuities for driver, guides, and lodge staff'
    ],
    transportation: 'Domestic flights + Private 4WD Land Cruiser + Lake Tana private boat',
    accommodationType: 'Handpicked boutique lodges & heritage hotels',
    bestSeason: 'October to May (Dry, sunny highland weather)',
    groupSize: 'Private or small groups (2–10 travelers)'
  },
  {
    id: 'simien-mountains-trek',
    title: 'Simien Mountains Roof of Africa Trek',
    slug: 'simien-mountains-roof-of-africa-trek',
    region: 'Northern Ethiopian Highlands',
    durationDays: 6,
    durationLabel: '6 Days / 5 Nights',
    samplePriceETB: 175000,
    samplePriceUSD: 1420,
    travelStyle: 'Adventure & Trekking',
    difficulty: 'Strenuous',
    heroImage: '/src/assets/images/tour_simien_mountains_1791564332514.jpg',
    gallery: [
      '/src/assets/images/tour_simien_mountains_1791564332514.jpg',
      '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg'
    ],
    summary: 'Trek along dramatic cliffs soaring 1,500 meters above vast ravines. Encounter endemic wildlife including the gentle Gelada baboon, Walia ibex, and the rare Ethiopian wolf on this unforgettable alpine journey.',
    highlights: [
      'Walk alongside hundreds of grass-eating Gelada baboons on mountain plateaus',
      'Ascend to stunning viewpoints at Sankaber, Geech, and Imet Gogo (3,926m)',
      'Stand over the vertical 500-meter drop of Jinbar Waterfall canyon',
      'Camp beneath pristine starry highland skies with a private mountain chef',
      'Certified mountain scouts and expert wildlife naturalist guides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Gondar to Sankaber Wilderness Camp',
        description: 'Drive from Gondar to Debark, park headquarters. Meet our mountain crew, ranger scouts, and mules. Begin trekking along the rim to Sankaber camp (3,250m) as geladas feed nearby.',
        accommodation: 'Sankaber wilderness camp',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Sankaber to Geech via Jinbar Falls',
        description: 'Trek along the precipitous northern escarpment with vistas of the abyss. Stop to admire Jinbar Waterfall plunging into a sheer canyon. Ascend to Geech camp (3,600m).',
        accommodation: 'Geech mountain camp',
        meals: 'Breakfast, Trail Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Imet Gogo Panorama & Inatye Peak',
        description: 'Early morning hike to Imet Gogo (3,926m), renowned as one of Africa’s most spectacular vistas with 360-degree views. Continue across afro-alpine moorland past giant lobelia plants to Chennek camp.',
        accommodation: 'Chennek mountain camp (3,620m)',
        meals: 'Breakfast, Trail Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Bwahit Peak Summit (4,430m) & Walia Ibex Tracking',
        description: 'Challenging ascent to Mount Bwahit. Track the rare Walia ibex on rocky crags. Return to Chennek with time to rest around the campfire.',
        accommodation: 'Chennek mountain camp',
        meals: 'Breakfast, Trail Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Chennek to Debark — Return to Gondar',
        description: 'Final morning hike before our 4WD vehicles meet the team. Drive down the switchbacks to Gondar. Enjoy a well-deserved hot shower and celebratory feast.',
        accommodation: 'Gondar Heritage Hotel',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Gondar to Addis Ababa Departure',
        description: 'Morning castle visits in Gondar, then transfer to the airport for flight to Addis Ababa for your onward connections.',
        accommodation: 'Departure',
        meals: 'Breakfast'
      }
    ],
    inclusions: [
      'Professional mountain guides, certified park scout, and pack mules',
      'Private camp chef preparing fresh, hearty three-course mountain meals',
      'All high-grade camping equipment (four-season tents, thick mats, mess tent)',
      'Park entrance fees, camping permits, and scout fees',
      'Round-trip 4WD transfers from Gondar to Simien National Park',
      'Emergency satellite communication and comprehensive first aid'
    ],
    exclusions: [
      'Personal sleeping bag (available for rent)',
      'Flights into Gondar',
      'Personal trekking gear and walking poles',
      'Tips for mountain team and mule handlers'
    ],
    transportation: '4WD mountain transfer + foot trekking with mule pack support',
    accommodationType: 'Comfortable wilderness camping + hotel in Gondar',
    bestSeason: 'September to April (lush wildflowers in Oct–Nov)',
    groupSize: 'Private or small groups (2–8 trekkers)'
  },
  {
    id: 'danakil-depression-expedition',
    title: 'Danakil Depression & Erta Ale Lava Expedition',
    slug: 'danakil-depression-erta-ale-lava-expedition',
    region: 'Afar Triangle & Rift Valley',
    durationDays: 4,
    durationLabel: '4 Days / 3 Nights',
    samplePriceETB: 125000,
    samplePriceUSD: 980,
    travelStyle: 'Adventure & Trekking',
    difficulty: 'Challenging',
    heroImage: '/src/assets/images/tour_danakil_depression_1791564342740.jpg',
    gallery: [
      '/src/assets/images/tour_danakil_depression_1791564342740.jpg',
      '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg'
    ],
    summary: 'Venture into one of the most extreme landscapes on Earth. Witness neon-colored hydrothermal springs at Dallol, vast blinding white salt flats at Lake Karum, and the bubbling caldera of Erta Ale volcano.',
    highlights: [
      'The neon yellow, emerald, and rust hydrothermal terraces of Dallol',
      'Nighttime summit trek to the active bubbling shield volcano of Erta Ale',
      'Lake Assale (Karum) salt flats and watching Afar miners carve salt blocks',
      'Camel salt caravans trekking across the glowing desert horizon at sunset',
      'Full Afar security escort, convoy 4WD Land Cruisers, and field camp chef'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Mekele to Hamed Ela via Afar Salt Canyons',
        description: 'Meet in Mekele. Drive in our 4WD convoy descending over 2,000 meters into the Great Rift Valley. Reach the Afar settlement of Hamed Ela. Sunset aperitif on the salt plains of Lake Assale.',
        accommodation: 'Traditional open-air star beds under Afar sky',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Hydrothermal Wonders of Dallol & Salt Cutters',
        description: 'Early morning exploration of Dallol (-125m below sea level). Discover sulphur springs, miniature geysers, and salt pillars. Visit the salt extraction sites where workers still use ancient hand adzes. Afternoon drive towards Erta Ale.',
        accommodation: 'Base camp at Dodom / Erta Ale caldera rim',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Erta Ale Volcano Caldera & Night Lava Viewing',
        description: 'Early morning sunrise view of the active caldera. Descend to base camp for rest during the midday heat. In the afternoon, travel to the hypersaline Lake Giulietti (Afrera) for a mineral soak.',
        accommodation: 'Local basic guesthouse / star camp in Afrera',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Lake Afrera to Mekele — Journey’s End',
        description: 'Visit the industrial salt extraction pans at Lake Afrera. Ascend the escarpment back to Mekele by late afternoon for flight to Addis Ababa.',
        accommodation: 'End of expedition',
        meals: 'Breakfast, Lunch'
      }
    ],
    inclusions: [
      'Fully equipped 4WD Toyota Land Cruiser convoy with air conditioning',
      'Afar police escort and Afar regional guide as mandated by law',
      'Field camp cook with ample cold water, sodas, and fresh hearty meals',
      'Traditional woven rope beds and clean mattresses/blankets',
      'All regional permits and park entry fees'
    ],
    exclusions: [
      'Domestic flights to/from Mekele',
      'Personal snacks and specialized expedition gear',
      'Gratuities for driver and security escort'
    ],
    transportation: 'Air-conditioned 4WD Land Cruiser convoy',
    accommodationType: 'Afar star beds under the night sky + field camp',
    bestSeason: 'November to February (Mildest temperatures of the year)',
    groupSize: 'Small group convoy (4–12 travelers)'
  },
  {
    id: 'omo-valley-tribal-odyssey',
    title: 'Tribal Odyssey of the Omo Valley',
    slug: 'tribal-odyssey-omo-valley',
    region: 'Southern Nations & Omo Basin',
    durationDays: 7,
    durationLabel: '7 Days / 6 Nights',
    samplePriceETB: 210000,
    samplePriceUSD: 1650,
    travelStyle: 'Cultural Immersion',
    difficulty: 'Moderate',
    heroImage: '/src/assets/images/tour_omo_valley_1791564353175.jpg',
    gallery: [
      '/src/assets/images/tour_omo_valley_1791564353175.jpg',
      '/src/assets/images/destination_lake_tana_1791564373066.jpg'
    ],
    summary: 'An ethical and deeply respectful journey into southern Ethiopia. Meet the diverse indigenous communities of the Lower Omo Valley including the Hamar, Mursi, Karo, and Dorze, learning their living traditions.',
    highlights: [
      'Ethical, respectful community visits coordinated with local tribal elders',
      'Witness the vibrant weekly tribal markets in Dimeka, Key Afer, or Turmi',
      'Traditional beehive bamboo architecture and weaving culture of the Dorze',
      'Sunset on the cliffs overlooking the winding Omo River in Kara territory',
      'Boat trip on Lake Chamo to view giant Nile crocodiles and pods of hippos'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa to Arba Minch via Chencha (Dorze)',
        description: 'Morning flight to Arba Minch. Ascend the Guge Mountains to Chencha to visit the Dorze people, famous for their 12-meter tall bamboo houses that resemble elephant heads, and learn how false banana (enset) bread is baked.',
        accommodation: 'Paradise Lodge overlooking Lake Chamo',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'Lake Chamo Boat Safari & Journey to Jinka',
        description: 'Morning motorboat safari across Lake Chamo, home to the largest Nile crocodiles in Africa. Continue through Konso terraced landscapes (UNESCO) to Jinka.',
        accommodation: 'Eco-lodge in Jinka',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Mago National Park & Mursi Community',
        description: 'Early morning drive through Mago National Park to visit a remote Mursi village. Learn about their pastoralist lifeways and distinctive body ornamentation with an ethical, non-intrusive approach.',
        accommodation: 'Eco-lodge in Jinka',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Key Afer Tribal Market & Drive to Turmi',
        description: 'Experience one of the Omo Valley’s most vibrant multicultural weekly trading markets at Key Afer, where Banna, Ari, and Hamar people gather. Afternoon drive to Turmi.',
        accommodation: 'Boutique river lodge, Turmi',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Dassanech on the Omo River & Hamar Village',
        description: 'Cross the Omo River in a wooden dugout canoe to visit the Dassanech people near the Kenyan border. Afternoon visit to a peaceful Hamar family settlement, observing coffee preparation and beadwork.',
        accommodation: 'Boutique river lodge, Turmi',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Karo People of Korcho & Return to Konso',
        description: 'Drive to Korcho village, perched on high cliffs with spectacular panoramas over the Omo River. Meet the Karo community, master body artists. Travel to UNESCO-listed Konso.',
        accommodation: 'Kanta Lodge, Konso',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Konso Terraces to Arba Minch & Flight to Addis Ababa',
        description: 'Tour the stone-walled terraced hillsides and wooden generation poles (waga) of the Konso culture. Drive to Arba Minch for afternoon flight back to Addis Ababa.',
        accommodation: 'Departure',
        meals: 'Breakfast, Lunch'
      }
    ],
    inclusions: [
      'Private 4WD Land Cruiser with professional chauffeur',
      'Senior bilingual cultural tour leader specialized in Omo Valley anthropology',
      'Local tribal community fees and elder permissions',
      'Lake Chamo private boat charter',
      '6 nights accommodation in top regional lodges',
      'All meals and bottled drinking water'
    ],
    exclusions: [
      'Domestic flights (Addis Ababa – Arba Minch return)',
      'Community photography fees where directly requested by locals',
      'Personal gifts and tipping'
    ],
    transportation: 'Private 4WD Land Cruiser + dugout canoe on Omo River',
    accommodationType: 'Comfortable safari & eco-lodges',
    bestSeason: 'June to September & December to March',
    groupSize: 'Private or small groups (2–8 travelers)'
  },
  {
    id: 'harar-walled-city-coffee',
    title: 'Historic Walled City of Harar & Coffee Route',
    slug: 'harar-walled-city-coffee-route',
    region: 'Eastern Ethiopian Plateau',
    durationDays: 4,
    durationLabel: '4 Days / 3 Nights',
    samplePriceETB: 115000,
    samplePriceUSD: 890,
    travelStyle: 'Historical & Cultural',
    difficulty: 'Easy',
    heroImage: '/src/assets/images/destination_harar_jugol_1791564363559.jpg',
    gallery: [
      '/src/assets/images/destination_harar_jugol_1791564363559.jpg',
      '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg'
    ],
    summary: 'Step inside the UNESCO-listed 16th-century walled city of Harar Jugol, the fourth holiest city in Islam. Experience fragrant spice markets, traditional Harari houses, world-famous coffee, and the centuries-old night hyena-feeding ritual.',
    highlights: [
      'Walk through the 368 narrow labyrinthine cobblestone alleys of Harar Jugol',
      'Visit the Arthur Rimbaud Cultural Museum and traditional Adare houses (Gegar)',
      'Witness the extraordinary nighttime wild hyena feeding outside the ancient city walls',
      'Discover Ethiopia’s premier coffee roasting houses and taste wild Harar coffee beans',
      'Explore the vibrant Aweday Khat market, one of the largest in the Horn of Africa'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa to Dire Dawa & Drive to Harar',
        description: 'Fly to Dire Dawa, the historic French railway town. Drive up the mountains to Harar. Enter through one of the five ancient stone gates of Jugol. Check in to a restored heritage Harari guesthouse.',
        accommodation: 'Traditional Harari heritage home',
        meals: 'Lunch, Dinner'
      },
      {
        day: 2,
        title: 'The Living Heritage of Harar Jugol & Hyena Feeding',
        description: 'Explore the 82 mosques and 102 shrines of Jugol. Visit the house of French poet Arthur Rimbaud, the vibrant spice market, and local bookbinding workshops. At dusk, witness the legendary “hyena man” calling wild hyenas by name.',
        accommodation: 'Traditional Harari heritage home',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'The Coffee Terroir of Harar & Aweday Market',
        description: 'Tour historic coffee estates in the surrounding hills. Discover traditional washed and sun-dried processing methods. Participate in an authentic Harari coffee tasting session.',
        accommodation: 'Traditional Harari heritage home',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Dire Dawa French Railway Heritage & Return',
        description: 'Descend to Dire Dawa. Tour the historic Chemin de Fer Djibouto-Éthiopien station and colonial quarters before your afternoon flight to Addis Ababa.',
        accommodation: 'Departure',
        meals: 'Breakfast, Lunch'
      }
    ],
    inclusions: [
      'Private air-conditioned vehicle with driver',
      'Expert local Harari cultural historian guide',
      'Heritage Harari guesthouse accommodation',
      'All entrance fees, museums, and night hyena man interaction',
      'Specialist coffee tastings and workshops'
    ],
    exclusions: [
      'Domestic flights to/from Dire Dawa',
      'Alcohol and personal shopping'
    ],
    transportation: 'Air-conditioned private van / 4WD',
    accommodationType: 'Authentic restored Harari Adare heritage house',
    bestSeason: 'All year round',
    groupSize: 'Private or small groups (2–6 travelers)'
  },
  {
    id: 'grand-ethiopia-circuit',
    title: 'Grand Ethiopia: Master Northern & Southern Odyssey',
    slug: 'grand-ethiopia-master-circuit',
    region: 'Pan-Ethiopian Expedition',
    durationDays: 14,
    durationLabel: '14 Days / 13 Nights',
    samplePriceETB: 410000,
    samplePriceUSD: 3200,
    travelStyle: 'Multi-Day Journeys',
    difficulty: 'Moderate',
    heroImage: '/src/assets/images/destination_lake_tana_1791564373066.jpg',
    gallery: [
      '/src/assets/images/destination_lake_tana_1791564373066.jpg',
      '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg',
      '/src/assets/images/tour_simien_mountains_1791564332514.jpg',
      '/src/assets/images/tour_omo_valley_1791564353175.jpg'
    ],
    summary: 'The ultimate Ethiopian expedition combining the northern historical treasures (Lalibela, Gondar, Lake Tana) with the diverse cultural heartlands of the South Omo Valley.',
    highlights: [
      'The comprehensive Ethiopian journey covering 5 UNESCO World Heritage sites',
      'Monolithic churches of Lalibela & imperial castles of Gondar',
      'Simien Mountains wildlife safari with Gelada baboons',
      'Omo Valley tribal encounters with the Hamar and Mursi communities',
      'Chamo Lake crocodile safari and Great Rift Valley lakes'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Addis Ababa Heritage Tour',
        description: 'Explore the capital: National Museum, Holy Trinity Cathedral, Mount Entoto views, and authentic cultural welcome dinner.',
        meals: 'Dinner'
      },
      {
        day: 2,
        title: 'Bahir Dar & Lake Tana Monasteries',
        description: 'Fly to Bahir Dar. Private boat cruise to ancient island monasteries and Tis Issat falls.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 3,
        title: 'Medieval Gondar Castles',
        description: 'Discover the Royal Enclosure and the celestial cherub ceiling of Debre Berhan Selassie.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 4,
        title: 'Simien Mountains Escarpments',
        description: 'Day trek in Simien Mountains National Park observing troops of friendly gelada baboons.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Lalibela — Northwestern Rock Churches',
        description: 'Fly to Lalibela. Explore the monolithic masterpieces carved directly into the mountain bedrock.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 6,
        title: 'Bet Giyorgis & Highland Monasteries',
        description: 'Visit the world-famous cruciform Church of St. George and ancient hermitage sanctuaries.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 7,
        title: 'Return to Addis Ababa — Transition to South',
        description: 'Flight to Addis Ababa. Rest and prepare for the southern expedition.',
        meals: 'Breakfast, Dinner'
      },
      {
        day: 8,
        title: 'Addis Ababa to Arba Minch & Dorze Village',
        description: 'Fly to Arba Minch. Ascend to Chencha to meet the bamboo-weaving Dorze community.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 9,
        title: 'Lake Chamo Boat Safari to Jinka',
        description: 'Boat trip along crocodile market in Lake Chamo, then travel to Jinka.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 10,
        title: 'Mago National Park & Mursi People',
        description: 'Respectful cultural encounter with the Mursi in Mago National Park.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 11,
        title: 'Key Afer Market & Turmi (Hamar Land)',
        description: 'Weekly tribal market gathering and overnight in Turmi on the riverbank.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 12,
        title: 'Dassanech & Hamar Community Visits',
        description: 'Canoe crossing on the Omo River, afternoon with Hamar families.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 13,
        title: 'Karo of Korcho & Konso UNESCO Terraces',
        description: 'Panoramic river vistas at Korcho and ancient agricultural terraces of Konso.',
        meals: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 14,
        title: 'Arba Minch to Addis Ababa — Farewell Dinner',
        description: 'Fly back to Addis Ababa for souvenir shopping, traditional farewell feast, and airport transfer.',
        meals: 'Breakfast, Farewell Dinner'
      }
    ],
    inclusions: [
      'All 4 domestic flights within Ethiopia',
      'Private 4WD transportation with dedicated drivers',
      'Full-time senior tour director and local specialist guides',
      'All 13 nights lodge and boutique hotel accommodations',
      'All national park, UNESCO, monastery, and community permits',
      'All meals throughout the 14 days'
    ],
    exclusions: [
      'International airfare',
      'Entry visa',
      'Personal travel insurance'
    ],
    transportation: 'Domestic flights + 4WD Toyota Land Cruisers + boats',
    accommodationType: 'Top eco-lodges, boutique hotels, and heritage lodges',
    bestSeason: 'October to May',
    groupSize: 'Small group (2–10 travelers)'
  }
];

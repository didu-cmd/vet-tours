export interface Destination {
  id: string;
  name: string;
  amharicName: string;
  region: string;
  heroImage: string;
  shortDesc: string;
  tagline: string;
  overview: string;
  attractions: string[];
  culturalHighlights: string[];
  travelTips: {
    bestTime: string;
    altitude: string;
    gettingThere: string;
    clothing: string;
  };
  mapCoords: {
    lat: number;
    lng: number;
    // Relative coordinates on Ethiopia map SVG fallback (0–100%)
    x: number;
    y: number;
  };
  relatedTourIds: string[];
}

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'lalibela',
    name: 'Lalibela',
    amharicName: 'ላሊበላ',
    region: 'Amhara Region (Northern Highlands)',
    heroImage: '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg',
    shortDesc: 'The Jerusalem of Africa, home to 11 monolithic rock-hewn churches carved from living stone in the 12th century.',
    tagline: 'Living monolithic sanctuaries carved into the mountain earth',
    overview: 'Perched in the rugged Lasta mountains at 2,630 meters, Lalibela is one of the world’s most astounding architectural and spiritual wonders. Commissioned by King Lalibela in the 12th–13th century after Muslim conquests halted pilgrimages to Jerusalem, these 11 monolithic churches were not constructed from masonry, but chiseled downwards directly into solid red volcanic tuff. Still active places of Orthodox Christian worship today, early mornings echo with deep drums, incense smoke, and white-clad pilgrims chanting ancient Ge’ez prayers.',
    attractions: [
      'Bet Giyorgis (Church of St. George) — The iconic cruciform monolith standing 12 meters deep in a carved trench',
      'Bet Medhane Alem — The largest rock-hewn monolith church in the world, surrounded by 34 massive pillars',
      'Bet Maryam (Church of St. Mary) — Known for exquisite carved bas-reliefs, biblical frescoes, and painted ceilings',
      'Asheten Maryam Monastery — Perched atop a high mountain ridge at 3,150 meters, accessible by foot or mule',
      'Yemrehanna Kristos — A built cave church pre-dating Lalibela by 80 years, featuring Aksumite wood-and-stone layers'
    ],
    culturalHighlights: [
      'Daily dawn liturgical services with white-robed priests carrying ancient bronze processional crosses',
      'Genna (Ethiopian Christmas) and Timkat (Epiphany) celebrations with tens of thousands of pilgrims',
      'Traditional tej (honey wine) drinking houses and Azmari folk music performers in town'
    ],
    travelTips: {
      bestTime: 'October to May for clear skies; early January for the spectacular Genna festival.',
      altitude: '2,630 m (8,630 ft) — Take it easy on day one; stay hydrated.',
      gettingThere: 'Daily 1-hour flights from Addis Ababa, Gondar, and Axum to Lalibela Airport (LLI).',
      clothing: 'Modest attire covering shoulders and knees; slip-on shoes recommended for visiting sacred shrines.'
    },
    mapCoords: { lat: 12.0322, lng: 39.0476, x: 53, y: 34 },
    relatedTourIds: ['lalibela-historic-circuit', 'grand-ethiopia-circuit']
  },
  {
    id: 'simien-mountains',
    name: 'Simien Mountains',
    amharicName: 'ስሜን ተራሮች',
    region: 'North Gondar Zone',
    heroImage: '/src/assets/images/tour_simien_mountains_1791564332514.jpg',
    shortDesc: 'UNESCO World Heritage high-altitude plateau with vertical cliffs dropping 1,500m and endemic Gelada baboons.',
    tagline: 'The Roof of Africa with dramatic escarpments and wild alpine peaks',
    overview: 'Referred to by Homer as the “Chessboard of the Gods,” the Simien Mountains National Park is an awe-inspiring volcanic plateau gouged by millions of years of erosion into sheer precipices, needle-like pinnacles, and 1,500-meter drops. It includes Ras Dashen (4,550m), the highest peak in Ethiopia and fourth highest in Africa. The park is a global sanctuary for rare endemic species found nowhere else on earth, including the vegetarian Gelada baboon, the endangered Walia ibex, and the Ethiopian wolf.',
    attractions: [
      'Imet Gogo (3,926m) — Perhaps the most breathtaking viewpoint on the African continent with panoramic cliffs',
      'Jinbar Waterfall — A dramatic 500-meter drop into the Geech Abyss gorge',
      'Chennek Camp — Prime habitat for observing the endangered Walia ibex grazing on vertical cliff faces',
      'Mount Bwahit (4,430m) — A rewarding trekking summit offering panoramic views across the whole range',
      'Sankaber Escarpment — Walk right beside peaceful troops of hundreds of golden-maned Gelada baboons'
    ],
    culturalHighlights: [
      'Traditional Amhara highland pastoralists living in stone villages in harmony with the extreme environment',
      'Warm campfires with local ranger scouts and mountain guides sharing highland folklore and stories'
    ],
    travelTips: {
      bestTime: 'October to March (October and November feature lush carpets of wildflowers).',
      altitude: '3,000 to 4,550 m (9,800 to 14,900 ft) — Warm layers and windbreakers are essential.',
      gettingThere: '2.5-hour drive north from Gondar to Debark, the national park headquarters.',
      clothing: 'Sturdy trekking boots, thermal base layers, fleece jacket, sun hat, and high UV sunglasses.'
    },
    mapCoords: { lat: 13.2500, lng: 38.3700, x: 42, y: 26 },
    relatedTourIds: ['simien-mountains-trek', 'lalibela-historic-circuit', 'grand-ethiopia-circuit']
  },
  {
    id: 'gondar',
    name: 'Gondar',
    amharicName: 'ጎንደር',
    region: 'Amhara Region',
    heroImage: '/src/assets/images/destination_lake_tana_1791564373066.jpg',
    shortDesc: 'The Camelot of Africa, celebrated for its 17th-century fairy-tale stone castles and magnificent church art.',
    tagline: 'Imperial stone castles, royal bath sanctuaries, and winged cherub frescoes',
    overview: 'Founded by Emperor Fasilides in 1636, Gondar served as Ethiopia’s imperial capital for over two centuries. Set in a fertile bowl surrounded by highland hills, the city is unlike any other in sub-Saharan Africa, dominated by Fasil Ghebbi—a walled fortress compound containing six medieval European-influenced stone castles, banqueting halls, royal libraries, and towers. Nearby stands the historic sunken Fasilides Bath and Debre Berhan Selassie, whose wooden ceiling of 135 painted cherub faces has watched over worshippers for hundreds of years.',
    attractions: [
      'Royal Enclosure (Fasil Ghebbi) — The 70,000-square-meter UNESCO castle compound of 17th-century emperors',
      'Debre Berhan Selassie Church — World-famous ceiling with dozens of painted angels looking down from the rafters',
      'Fasilides’ Bath — Enchanting rectangular stone pool surrounded by ancient banyan roots, the centerpiece of Timkat',
      'Mentewab’s Palace at Kuskuam — The tranquil hilltop royal retreat of Empress Mentewab',
      'Wolleka Village — Historic settlement of the Beta Israel (Ethiopian Jewish) community with pottery craft traditions'
    ],
    culturalHighlights: [
      'Epicenter of the Timkat (Epiphany) festival each January, when Fasilides’ Bath is filled for mass ritual renewal',
      'Historic brewing of traditional tella and tej amidst lively traditional music clubs'
    ],
    travelTips: {
      bestTime: 'October to May; visit mid-January for the Timkat celebrations.',
      altitude: '2,133 m (7,000 ft) — Pleasant highland climate year-round.',
      gettingThere: 'Daily domestic flights from Addis Ababa or scenic 3-hour drive from Bahir Dar.',
      clothing: 'Comfortable walking shoes and modest dress when entering sacred grounds.'
    },
    mapCoords: { lat: 12.6075, lng: 37.4667, x: 40, y: 31 },
    relatedTourIds: ['lalibela-historic-circuit', 'simien-mountains-trek', 'grand-ethiopia-circuit']
  },
  {
    id: 'axum',
    name: 'Axum',
    amharicName: 'አክሱም',
    region: 'Tigray Region',
    heroImage: '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg',
    shortDesc: 'The ancient capital of the Aksumite Empire, famed for giant granite stelae and the legendary Ark of the Covenant.',
    tagline: 'Ancient obelisks, lost empires, and the resting place of the Ark',
    overview: 'Dating back to the 1st century AD, Axum was once the capital of one of the four greatest powers of the ancient world alongside Rome, Persia, and China. Mentioned in Greek, Roman, and Persian texts, it commanded maritime trade between the Mediterranean and India. Today, Axum is crowned by colossal granite monoliths erected as royal grave markers—including the Great Stele, the largest single carved stone ever attempted by antiquity. According to Ethiopian tradition, the sacred Chapel of the Tablet here houses the original Ark of the Covenant brought from Jerusalem by Menelik I.',
    attractions: [
      'Northern Stelae Park — Giant carved single-piece granite obelisks towering up to 24 meters high',
      'Church of Our Lady Mary of Zion & Chapel of the Tablet — The spiritual home of Ethiopian Orthodoxy',
      'Palace and Tomb of Kaleb and Gebre Meskel — Remarkable 6th-century stone masonry and underground burial chambers',
      'Dungur Ruins (Queen of Sheba’s Palace) — Expansive 50-room mansion complex with ancient bathing chambers',
      'Ezana Stone — Trilingual stone inscription carved in Ge’ez, Sabaean, and Greek, the Rosetta Stone of Ethiopia'
    ],
    culturalHighlights: [
      'The sacred mystery of the lone Guardian Monk who watches over the Ark of the Covenant for life',
      'The ancient Ge’ez liturgy and illuminated parchment manuscripts dating back centuries'
    ],
    travelTips: {
      bestTime: 'October through April; late November for the annual Feast of Mary of Zion.',
      altitude: '2,130 m (6,990 ft) — Warm days, crisp evenings.',
      gettingThere: 'Connected by domestic flights via Axum Airport (AXU).',
      clothing: 'Lightweight linen, sun hat, and easily removable shoes for sanctuary visits.'
    },
    mapCoords: { lat: 14.1278, lng: 38.7242, x: 45, y: 19 },
    relatedTourIds: ['lalibela-historic-circuit']
  },
  {
    id: 'danakil-depression',
    name: 'Danakil Depression',
    amharicName: 'ዳናኪል',
    region: 'Afar Depression',
    heroImage: '/src/assets/images/tour_danakil_depression_1791564342740.jpg',
    shortDesc: 'One of Earth’s most extreme landscapes: neon acid springs at Dallol, salt flats below sea level, and Erta Ale volcano.',
    tagline: 'The hottest place on Earth and an otherworldly volcanic wonderland',
    overview: 'Located in the Afar Triangle where three tectonic plates are slowly pulling apart, the Danakil Depression is one of the lowest (-125m below sea level) and hottest inhabited places on our planet. This alien wonderland features Dallol’s hyper-acidic geothermal terraces glowing in neon yellows, bright greens, and burnt rust; the shimmering salt desert of Lake Karum where Afar miners quarry salt as they have for millennia; and Erta Ale, one of only a handful of volcanoes on Earth containing a continuously churning lava lake.',
    attractions: [
      'Dallol Hydrothermal Springs — Vivid mineral terraces with bubbling acid pools, salt chimneys, and geysers',
      'Erta Ale Volcano — The “Smoking Mountain,” an active shield volcano featuring a bubbling molten lava lake',
      'Lake Karum (Assale) — 1,200 square kilometers of blinding white salt pan reflecting the desert sky',
      'Afar Camel Caravans — Hundreds of camels carrying carved salt bars across the shimmering sunset horizon',
      'Lake Afrera — Deep emerald hypersaline lake where visitors can float weightlessly and bathe in natural hot springs'
    ],
    culturalHighlights: [
      'The proud Afar pastoralist nomads who survive in this unforgiving territory with deep environmental wisdom',
      'Ancient manual salt cutting techniques using timber levers and traditional hand axes'
    ],
    travelTips: {
      bestTime: 'November to February only (temperatures are most manageable; avoid summer heat exceeding 48°C).',
      altitude: '-125 m below sea level to 613 m — Extreme arid conditions.',
      gettingThere: 'Organized 4WD Land Cruiser convoy departure from Mekele or Semera with regional security escort.',
      clothing: 'Breathable UV-protective clothing, strong hiking boots with thick rubber soles, electrolyte tablets, bandana.'
    },
    mapCoords: { lat: 14.2417, lng: 40.2989, x: 62, y: 25 },
    relatedTourIds: ['danakil-depression-expedition']
  },
  {
    id: 'omo-valley',
    name: 'Omo Valley',
    amharicName: 'ኦሞ ሸለቆ',
    region: 'South Ethiopia Regional State',
    heroImage: '/src/assets/images/tour_omo_valley_1791564353175.jpg',
    shortDesc: 'A cultural crossroad of ancient traditions, home to diverse ethnic communities including the Hamar, Mursi, and Karo.',
    tagline: 'Ancient living cultures and tribal heritage in the cradle of humankind',
    overview: 'The Lower Valley of the Omo is a UNESCO World Heritage site of immense anthropological significance. Here, in the sun-drenched savannahs of southern Ethiopia, over a dozen distinct ethnic groups have preserved their distinctive linguistic identities, pastoralist customs, body ornamentation, and ceremonial rituals. Visiting with deep respect and sensitivity offers a rare glimpse into ancestral lifeways that remain closely connected to the land, livestock, and seasonal rhythms of the Omo River.',
    attractions: [
      'Hamar Settlements & Bull Jumping Ceremony — Renowned for elaborate braided ochre hairstyles and coming-of-age rites',
      'Mursi Community in Mago National Park — Known for ceremonial lip plates, painted body patterns, and cattle traditions',
      'Karo People at Korcho Village — Panoramic cliff village above the Omo River, celebrated for intricate chalk body painting',
      'Dorze High Bamboo Houses in Chencha — 12-meter tall beehive woven homes and weaving demonstrations',
      'Key Afer & Dimeka Weekly Markets — Vibrant inter-tribal gathering places where goods and stories are traded'
    ],
    culturalHighlights: [
      'Living traditions practiced with deep communal pride and oral history',
      'Intricate body painting, beaded jewelry, wooden headrests, and pastoral horn instruments'
    ],
    travelTips: {
      bestTime: 'June to September & December to March; market days vary weekly (Thursdays in Key Afer, Saturdays in Dimeka).',
      altitude: '500 to 1,500 m — Warm savannah climate.',
      gettingThere: 'Flight from Addis Ababa to Arba Minch or Jinka, followed by private 4WD expedition.',
      clothing: 'Neutral lightweight cotton or linen clothing, comfortable walking sandals or shoes, insect repellent.'
    },
    mapCoords: { lat: 5.7833, lng: 36.5667, x: 38, y: 78 },
    relatedTourIds: ['omo-valley-tribal-odyssey', 'grand-ethiopia-circuit']
  },
  {
    id: 'harar',
    name: 'Harar',
    amharicName: 'ሐረር',
    region: 'Harari Region (Eastern Highlands)',
    heroImage: '/src/assets/images/destination_harar_jugol_1791564363559.jpg',
    shortDesc: 'The 16th-century fortified city of Harar Jugol, Islam’s 4th holy city with 368 winding alleys and night hyena rituals.',
    tagline: 'Cobblestone labyrinths, legendary coffee, and peaceful nightly hyena encounters',
    overview: 'Harar Jugol is a fortified historic city perched at 1,885 meters on the eastern plateau. Established between the 13th and 16th centuries, it is considered the fourth holy city of Islam, containing 82 mosques (three of which date back to the 10th century) and 102 sacred shrines packed into less than one square kilometer. Harar’s unique cultural fusion between African and Islamic traditions is expressed in its traditional Adare houses, its exquisite hand-woven textiles, its historic coffee terroir, and the world-famous tradition of feeding wild spotted hyenas by hand outside the walls at night.',
    attractions: [
      'Historic Walled City of Jugol — UNESCO site surrounded by 4-meter high stone walls entered through five historic gates',
      'Arthur Rimbaud House & Museum — An elegant Indian-style wooden mansion where the famed French poet lived in the 1880s',
      'Nighttime Hyena Feeding — A centuries-old peace treaty where a local hyena master hand-feeds wild spotted hyenas meat scraps',
      'Ras Makonnen Palace & Harari Cultural Museum — Displays of traditional wedding garments, silver jewelry, and Adare interiors',
      'Harar Spice and Coffee Market — Heaps of fiery berbere chili, cardamom, frankincense, and famous Harari longberry coffee'
    ],
    culturalHighlights: [
      'The harmonious coexistence between Harari Muslim and Ethiopian Orthodox communities',
      'Adare interior decoration: walls hung with colorful handwoven baskets (mesob) and Chinese porcelain bowls'
    ],
    travelTips: {
      bestTime: 'Pleasant and temperate all year round; best October to May.',
      altitude: '1,885 m (6,180 ft).',
      gettingThere: '45-minute domestic flight from Addis to Dire Dawa, then a scenic 1-hour drive through mountain passes.',
      clothing: 'Conservative clothing with shoulders and knees covered; comfortable flat shoes for cobblestone alleys.'
    },
    mapCoords: { lat: 9.3139, lng: 42.1283, x: 74, y: 47 },
    relatedTourIds: ['harar-walled-city-coffee']
  },
  {
    id: 'lake-tana',
    name: 'Lake Tana',
    amharicName: 'ጣና ሐይቅ',
    region: 'Bahir Dar, Amhara Region',
    heroImage: '/src/assets/images/destination_lake_tana_1791564373066.jpg',
    shortDesc: 'Ethiopia’s largest lake, dotted with ancient island monasteries housing treasured religious art, and the source of the Blue Nile.',
    tagline: 'Sacred island sanctuaries, serene waters, and the cradle of the Blue Nile',
    overview: 'Covering 3,600 square kilometers at an elevation of 1,840 meters, Lake Tana is the source of the Blue Nile and a UNESCO Biosphere Reserve. Hidden among its lush forested islands and remote peninsulas are more than 20 monastic churches dating from the 14th to 17th centuries. Inside these thatched and stone circular sanctuaries are breathtaking, vibrant wall paintings and illuminated manuscripts depicting saintly legends and royal donors. Fishermen still navigate the tranquil waters in ancient papyrus reed boats called tankwas.',
    attractions: [
      'Ura Kidane Mehret — Zege Peninsula’s most famous circular monastery, celebrated for its brilliant, vivid murals',
      'Kibran Gabriel & Dega Estifanos — Historic island monasteries holding royal crowns and ancient religious relics',
      'Blue Nile Falls (Tis Issat) — Known as the “Smoke of Fire”, plunging 45 meters over a basalt cliff into a gorge',
      'Papyrus Tankwa Boats — Ancient traditional reed craft still handcrafted and sailed across the lake shallows',
      'Bird Sanctuary at Lake Tana Shore — Over 215 bird species including pelicans, fish eagles, and kingfishers'
    ],
    culturalHighlights: [
      'Monastic coffee plantations growing wild heirloom Arabica beneath ancient fig and mahogany trees',
      'Pristine monastic libraries holding leather-bound parchment Ge’ez bibles over 600 years old'
    ],
    travelTips: {
      bestTime: 'October to May (October sees the Blue Nile Falls at their highest volume after the rainy season).',
      altitude: '1,840 m (6,036 ft) — Gentle lakeside climate.',
      gettingThere: 'Daily direct flights from Addis Ababa to Bahir Dar (BJR), 10 minutes from the lake harbor.',
      clothing: 'Light breathable clothing, sun hat, slip-on shoes, and binoculars for birdwatching.'
    },
    mapCoords: { lat: 11.5947, lng: 37.3878, x: 39, y: 39 },
    relatedTourIds: ['lalibela-historic-circuit', 'grand-ethiopia-circuit']
  },
  {
    id: 'addis-ababa',
    name: 'Addis Ababa',
    amharicName: 'አዲስ አበባ',
    region: 'Federal Capital',
    heroImage: '/src/assets/images/destination_addis_national_palace_1791567534648.jpg',
    shortDesc: 'The bustling diplomatic capital of Africa, home to the historic National Palace, Lucy at the National Museum, lively jazz, and world-class coffee.',
    tagline: 'The vibrant diplomatic and cultural heartbeat of the continent',
    overview: 'Situated at 2,355 meters at the foot of Mount Entoto, Addis Ababa (“New Flower”) is the third-highest capital city in the world and the diplomatic hub of Africa, hosting the African Union headquarters. It is a city where deep historical roots merge with modern energy: explore the majestic National Palace (Jubilee Palace) set in royal palm gardens, the 3.2-million-year-old hominid fossil of “Lucy” at the National Museum, climb Mount Entoto for sweeping forest vistas, get lost in Merkato (Africa’s largest open-air market), and savor the world’s most celebrated coffee ceremonies in historic roasteries.',
    attractions: [
      'The National Palace (Jubilee Palace) — The historic imperial residence with grand arches, state halls, and lush royal botanical gardens',
      'National Museum of Ethiopia — Houses the cast of Lucy (Dinkinesh) and magnificent imperial coronation crowns',
      'Holy Trinity Cathedral (Kidist Selassie) — Final resting place of Emperor Haile Selassie and Empress Menen Asfaw',
      'Mount Entoto & Entoto Natural Park — Eucalyptus-scented mountain peak with panoramic views over the metropolis',
      'Addis Merkato — The vast open-air market spanning several square kilometers with spice alleys and artisan wares',
      'Red Terror Martyrs Memorial Museum — A poignant, modern testament to Ethiopia’s 20th-century history'
    ],
    culturalHighlights: [
      'The authentic Ethiopian Coffee Ceremony (Buna) performed with freshly roasted beans, frankincense, and popcorn',
      'Ethio-jazz music clubs and traditional Azmari Bet venues where minstrels improvise songs for patrons'
    ],
    travelTips: {
      bestTime: 'October to May; sunny, dry, and mild.',
      altitude: '2,355 m (7,726 ft) — Cool evenings requiring a sweater or light coat.',
      gettingThere: 'Bole International Airport (ADD), the primary global gateway to Ethiopia and East Africa.',
      clothing: 'Smart-casual layers; comfortable shoes for walking; jacket for cool evenings.'
    },
    mapCoords: { lat: 9.0320, lng: 38.7480, x: 48, y: 52 },
    relatedTourIds: ['lalibela-historic-circuit', 'grand-ethiopia-circuit', 'harar-walled-city-coffee']
  }
];

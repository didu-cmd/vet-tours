export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Destination Guide' | 'Cultural Insights' | 'Trekking & Wildlife' | 'Adventure & Trekking' | 'Travel Advice';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'guide-to-lalibela-churches',
    slug: 'complete-guide-to-rock-hewn-churches-of-lalibela',
    title: 'The Living Stone: A Master Guide to the 11 Rock-Hewn Churches of Lalibela',
    category: 'Destination Guide',
    date: 'January 14, 2026',
    readTime: '9 min read',
    author: {
      name: 'Ephraim Mengistu',
      role: 'Senior Heritage Specialist, Vacation to Ethiopia Tours'
    },
    image: '/src/assets/images/hero_ethiopia_lalibela_1791564320721.jpg',
    excerpt: 'Carved straight down into the pink volcanic rock of the Lasta mountains, Lalibela remains one of humankind’s most profound architectural and spiritual wonders.',
    content: [
      'When 12th-century King Lalibela envisioned creating a “New Jerusalem” high in the remote Lasta mountains of northern Ethiopia, his builders chose an architectural path unlike any other civilization. Rather than gathering timber and mortar to raise walls toward the sky, they carved downwards directly into solid red volcanic tuff, extracting millions of tons of stone to reveal complete subterranean sanctuaries.',
      'Standing at ground level across the dusty highland plateau, an unguided visitor might initially see nothing extraordinary—until they step toward the edge of an abyss. Looking down into twelve-meter deep rock-cut trenches, the monolithic facades of ancient cathedrals appear, complete with arched windows, colonnaded porticos, drainage conduits, and subterranean catacombs.',
      'The eleven churches are divided into two primary clusters separated by the symbolic River Jordan, plus the isolated cruciform masterpiece of Bet Giyorgis (Church of St. George). In the Northern Cluster, Bet Medhane Alem stands as the largest monolithic rock-hewn church in the world, framed by 34 massive external pillars and holding the sacred 7-kilogram gold Afro Ayigeba cross. Adjoining it via subterranean rock-cut passageways is Bet Maryam, celebrated for its delicate relief carvings of double-headed eagles and painted biblical frescoes.',
      'The crown jewel remains Bet Giyorgis. Chiseled out of a single piece of volcanic rock inside a deep trench, its roof forms an exquisite Greek cross adorned with carved concentric borders. To reach its subterranean entrance, travelers descend through a narrow, winding trench worn smooth by eight centuries of bare feet. When sunlight catches the amber lichen on the roof at golden hour, the entire stone edifice appears to glow from within.',
      'Crucially, Lalibela is not an archaeological ruin or a static museum. It is an active sanctuary whose liturgical rhythm has continued without pause for more than eight hundred years. Every morning before dawn, as highland mist wraps around the mountain ridges, hundreds of white-cloaked Orthodox pilgrims (wearing the cotton netela) gather along the rock terraces. The air fills with the fragrance of burning frankincense and the deep cadence of Ge’ez liturgy, accompanied by prayer sticks (maqqamiya) and bronze sistra.',
      'Practical guidance for travelers: We strongly recommend dedicating at least two full days to explore both clusters with a licensed specialist guide. Shoes must be removed before entering every sanctuary; slip-on walking shoes and thick socks will keep you comfortable on cool stone floors. Visiting during the Ethiopian Christmas (Genna, January 7) or Timkat (January 19) provides an unforgettable encounter with tens of thousands of pilgrims gathering from across the nation.'
    ],
    tags: ['Lalibela', 'UNESCO Heritage', 'Culture', 'Highlands', 'Architecture']
  },
  {
    id: 'trekking-simien-mountains',
    slug: 'trekking-roof-of-africa-simien-mountains',
    title: 'On the Rim of the Abyss: Trekking the Simien Mountains National Park',
    category: 'Trekking & Wildlife',
    date: 'February 3, 2026',
    readTime: '8 min read',
    author: {
      name: 'Yared Bekele',
      role: 'Highland Mountain Guide, Vacation to Ethiopia Tours'
    },
    image: '/src/assets/images/tour_simien_mountains_1791564332514.jpg',
    excerpt: 'Standing on the cliff edge at Imet Gogo with clouds swirling 1,500 meters below, surrounded by golden-maned Gelada baboons grazing peacefully.',
    content: [
      'The Simien Mountains do not resemble any other alpine range in Africa. Formed forty million years ago by massive volcanic eruptions that deposited layers of basalt thousands of meters thick, millions of subsequent years of water erosion carved the plateau into sheer escarpments, deep amphitheaters, and razor-sharp pinnacles that plunge vertically into endless highland valleys.',
      'Starting from the park gateway at Debark (2,850m), the ascent to Sankaber Camp introduces trekkers to the afro-alpine moorland ecosystem. Here, giant lobelia plants stand like prehistoric sentinels amid golden grasses. But the immediate highlight is meeting troops of endemic Gelada baboons. Often called “bleeding-heart baboons” due to the crimson hourglass patch on their chests, Geladas are the only surviving grass-grazing primates on Earth.',
      'Because they have never experienced hunting by humans, Geladas regard respectful trekkers with serene calm. Sitting quietly on a grassy ledge just two or three meters from a troop of two hundred baboons as they groom and chatter in gentle communicative grunts is one of the most intimate wildlife experiences in the natural world.',
      'The trek from Geech to Imet Gogo (3,926m) is the crown jewel of the Simien traverse. Perched on a narrow promontory extending out into the abyss, Imet Gogo delivers a dizzying 360-degree panorama. Towering buttresses drop more than 1,500 meters beneath your boots into the Tekeze River basin. In the crisp early morning light, a sea of white cloud often blankets the ravines below, creating the impression of standing atop an island in the sky.',
      'Continuing east to Chennek Camp (3,620m), the terrain transitions into vertical crags that are the exclusive sanctuary of the endangered Walia ibex—a majestic mountain goat with massive ridged backward-curving horns found nowhere else on the planet. Lucky trekkers may also glimpse the slender silhouette of the Ethiopian wolf, the world’s rarest canid.',
      'Trekker recommendations from our expedition team: Highland nights are cold, frequently dipping below freezing at Geech and Chennek camps. A 4-season sleeping bag, thermal base layers, and windproof outer shells are non-negotiable. Pacing is key: stay well-hydrated to acclimatize comfortably to the 3,600m+ elevations, and take time around the evening campfire to hear our local Amhara rangers share stories of highland lore.'
    ],
    tags: ['Simien Mountains', 'Trekking', 'Wildlife', 'Gelada Baboons', 'Ras Dashen']
  },
  {
    id: 'danakil-expedition-guide',
    slug: 'expedition-danakil-depression-hottest-place-on-earth',
    title: 'Venture into the Extreme: An Expedition into the Danakil Depression & Dallol',
    category: 'Adventure & Trekking',
    date: 'February 19, 2026',
    readTime: '10 min read',
    author: {
      name: 'Dawit Tadesse',
      role: 'Expedition Leader, Afar Region'
    },
    image: '/src/assets/images/tour_danakil_depression_1791564342740.jpg',
    excerpt: 'A journey 125 meters below sea level into shimmering neon sulphur terraces, incandescent lava lakes, and ancient Afar camel salt caravans.',
    content: [
      'The Danakil Depression in northeastern Ethiopia challenges every conventional definition of what a terrestrial environment looks like. Located in the Afar Triangle—where the Nubian, Somalian, and Arabian tectonic plates are gradually pulling apart at a rate of 1 to 2 centimeters per year—this sunken basin is one of the lowest (-125m below sea level) and hottest inhabited places on Earth.',
      'Departing the highland city of Mekele, our 4WD Toyota Land Cruiser convoy descends dramatic switchback canyons, watching the thermometer climb steadily as the surrounding landscape flattens into blinding white expanses of salt crust. The Danakil feels distinctly extraterrestrial; astrobiologists and NASA researchers regularly visit here to study how extremophile bacteria survive in conditions that mirror early Mars.',
      'At Dallol, subterranean magma superheats groundwater rich in salt, iron, sulphur, and potassium. As this boiling brine discharges at the surface, it forms surreal terraces glowing in fluorescent neon yellows, emerald greens, and vibrant ochre reds. Miniature geysers hiss continuously, surrounded by delicate salt chimney towers and brittle mineral crusts that crunch softly beneath your hiking boots.',
      'Just a few miles away on the vast salt flats of Lake Karum (Assale), the human story of the Danakil unfolds. Here, Afar and Tigrayan salt miners still quarry salt blocks entirely by hand using ancient timber crowbars and adzes, cutting the mineral into uniform slabs known as amolé. At late afternoon, long caravans of hundreds of dromedary camels traverse the glowing salt horizon, carrying the white gold to highland markets just as they have for two thousand years.',
      'Further south rises Erta Ale, an active basaltic shield volcano whose caldera harbors one of only five permanent molten lava lakes in the world. Expeditions ascend the volcanic slope during the cool evening hours to reach the crater rim by nightfall. Peering down into the churning, bubbling lake of red-hot magma as crust plates fracture and collide under a canopy of desert stars is an awe-inspiring, primal encounter.',
      'Expedition essentials: Danakil expeditions should only be undertaken between November and February when winter daytime temperatures average a manageable 32°C to 38°C (summer exceeds 48°C). Travelers must travel in properly equipped 4WD convoys accompanied by regional Afar guides and police escorts as mandated by regional law. Bring high-grade eye protection, electrolyte powder, sturdy closed boots with thick heat-resistant soles, and a lightweight scarf to protect against salt dust.'
    ],
    tags: ['Danakil', 'Dallol', 'Erta Ale', 'Volcanoes', 'Expedition', 'Afar']
  },
  {
    id: 'ethiopian-coffee-culture',
    slug: 'the-art-of-the-ethiopian-coffee-ceremony',
    title: 'Buna Tetu: The Sacred Rhythm of the Traditional Ethiopian Coffee Ceremony',
    category: 'Cultural Insights',
    date: 'March 2, 2026',
    readTime: '6 min read',
    author: {
      name: 'Selamawit Girma',
      role: 'Cultural Travel Specialist, Addis Ababa'
    },
    image: '/src/assets/images/destination_harar_jugol_1791564363559.jpg',
    excerpt: 'Coffee is not a hasty beverage in Ethiopia—it is a communal ritual of hospitality, peace, and unhurried human connection.',
    content: [
      'In Ethiopia, the global birthplace of Coffea Arabica, coffee is never consumed hurriedly from a paper cup on the way to an appointment. Here, the phrase "Buna Tetu" (literally "drink coffee") is a sacred invitation to friendship, reconciliation, and community that commands time, patience, and sensory devotion.',
      'Legend traces coffee back to the 9th century in the forested highlands of Kaffa in southwestern Ethiopia, where a goat herder named Kaldi observed his herd dancing with boundless vitality after nibbling the bright crimson berries of wild bushes. Monks at a nearby monastery brewed the berries into a decoction that allowed them to sustain long midnight prayers—and from those ancient mountain groves, coffee spread across the world.',
      'The traditional Ethiopian coffee ceremony is an exquisite home ritual conducted by the woman of the household. It begins with spreading freshly cut green grass (ketema) across the floor to symbolize life and abundance. Raw green coffee beans are carefully washed in warm water, then roasted over a small clay stove filled with glowing charcoal embers in a round iron pan.',
      'As the beans crackle and turn an aromatic dark mahogany, the hostess walks the smoking pan around the room so every guest can gently cup the fragrant smoke toward their face, inhaling the sweet, nutty aroma. The beans are then ground by hand using a heavy wooden mortar and pestle (mukecha and zenezena) before being transferred into a black spherical clay pot with a slender neck known as a jebena.',
      'Water is brought to a boil inside the jebena, and the brewed coffee is poured in a continuous, elegant stream from a height of a foot into small handleless ceramic cups (cini) arranged neatly on a low painted wooden table (rekebot). The coffee is served in three distinct rounds: Abol (the first and strongest brew), Tona (the second, sweeter round made by adding fresh water to the grounds), and Baraka (the third round, which carries the solemn blessing of the household).',
      'Accompanied by freshly popped corn, roasted barley (kolo), and fragrant frankincense smoke swirling toward the ceiling, the ceremony teaches travelers the timeless Ethiopian art of slowing down. To be welcomed into a home for coffee is the highest honor a traveler can receive in Ethiopia.'
    ],
    tags: ['Coffee', 'Buna', 'Traditions', 'Harar', 'Addis Ababa', 'Culture']
  },
  {
    id: 'timkat-festival-gondar',
    slug: 'timkat-in-gondar-epiphany-festival-ethiopia',
    title: 'Timkat in Gondar: Inside Ethiopia’s Most Mesmerizing Religious Festival',
    category: 'Cultural Insights',
    date: 'March 18, 2026',
    readTime: '8 min read',
    author: {
      name: 'Ephraim Mengistu',
      role: 'Senior Heritage Specialist, Vacation to Ethiopia Tours'
    },
    image: '/src/assets/images/destination_lake_tana_1791564373066.jpg',
    excerpt: 'Tens of thousands of white-robed worshippers, velvet ceremonial umbrellas, and the sacred baptismal waters of Fasilides’ Bath.',
    content: [
      'Every January on the 19th (or 20th in leap years), Ethiopia commemorates Timkat—the Feast of the Epiphany celebrating the baptism of Jesus in the River Jordan. While Timkat is celebrated with immense devotion across the country, nowhere is the spectacle more grand, cinematic, and historically resonant than in the 17th-century castle city of Gondar.',
      'The celebration begins on Timkat Eve, known as Ketera. In the early afternoon, priests clad in gold-embroidered satin vestments emerge from Gondar’s dozens of historic churches carrying the tabot—the sacred consecrated replica of the Ark of the Covenant—wrapped in layers of rich silk and carried on their heads. They are shielded by ornate velvet umbrellas trimmed with gold fringe as deacons ring brass bells and beat massive kebero drums.',
      'Tens of thousands of devotees, clad in pristine white woven netela garments with embroidered borders, follow the tabot processions through the streets of Gondar, chanting hymns and dancing in joyful reverence toward the sunken stone pool known as Fasilides’ Bath.',
      'Built in the 1630s by Emperor Fasilides, this rectangular stone pool is surrounded by centuries-old banyan tree roots that wind tightly around stone towers. For Timkat, the pool is fed with water from the nearby river. Throughout the night, priests conduct a candlelight vigil around the perimeter of the bath, their Ge’ez chants echoing over the still water beneath a starry highland sky.',
      'At dawn, after the water is consecrated by the bishop, the climactic moment arrives: the waters are blessed with a golden cross and extinguished candles, symbolizing Christ’s baptism. Hundreds of worshippers joyously leap into the deep pool to renew their baptismal vows, while priests use hoses to shower holy water over the vast sea of chanting pilgrims on the banks.',
      'Planning tips for Timkat: Gondar experiences peak international and domestic travel during Timkat; hotel rooms and flights book out 6 to 9 months in advance. We recommend arriving at least two days before Ketera to acclimatize and tour the royal enclosure of Fasil Ghebbi before streets close for processions. Modest white clothing is welcomed by locals if you wish to join the procession respectfully.'
    ],
    tags: ['Timkat', 'Gondar', 'Festivals', 'Orthodox Heritage', 'Fasilides Bath']
  },
  {
    id: 'walled-city-of-harar',
    slug: '24-hours-in-harar-jugol-walled-city-peace',
    title: 'The Walled City of Peace: 24 Hours Inside Ancient Harar Jugol',
    category: 'Destination Guide',
    date: 'April 4, 2026',
    readTime: '7 min read',
    author: {
      name: 'Selamawit Girma',
      role: 'Cultural Travel Specialist, Addis Ababa'
    },
    image: '/src/assets/images/destination_harar_jugol_1791564363559.jpg',
    excerpt: 'Labyrinthine cobblestone alleys painted cobalt and ochre, Adare living heritage, wild coffee terroir, and the legendary night hyena masters.',
    content: [
      'Perched at nearly 1,900 meters on the eastern Ethiopian plateau overlooking the Danakil desert, Harar Jugol is a cultural enclave unlike any other in East Africa. Founded between the 10th and 13th centuries, this fortified city served for centuries as an independent sultanate and the crossroads of trade between the Ethiopian highlands, the Red Sea ports, and the Arabian Peninsula.',
      'Considered the fourth holiest city of Islam, Harar squeezes 82 historic mosques and 102 sacred shrines into less than one square kilometer, surrounded by four-meter-high stone walls entered through five historical gates. Inside, cars cannot navigate: 368 narrow, winding cobblestone alleys create a living labyrinth whose whitewashed limestone walls are painted in striking washes of cobalt blue, indigo, and warm terracotta.',
      'To step through the carved wooden doorway of a traditional Harari home (Gegar) is to discover a masterwork of Islamic domestic architecture. The main salon features five raised seating tiers (nedeba) designed for family hierarchy and hospitality, with walls adorned with scores of handcrafted woven baskets (mesob) and vibrant Chinese porcelain bowls that arrived via ancient maritime spice routes.',
      'In the late 19th century, French poet Arthur Rimbaud abandoned literature and made Harar his home for over a decade, trading in coffee, gums, and textiles. Today, the Arthur Rimbaud Cultural Center—an airy Indian-style timber mansion with stained-glass windows—offers panoramic views over the city’s minarets and church steeples, a testament to the peaceful interfaith harmony between Harari Muslims and Ethiopian Christians.',
      'At nightfall, Harar reveals its most extraordinary tradition: the wild hyena feeding. Just outside the ancient walls, a local "hyena master" sits in the dark and calls out to packs of wild spotted hyenas by name in the Harari language. The predators emerge cautiously from the scrubland and feed directly from scraps of meat held in the master’s bare hands—and even from sticks held between his teeth. Originating centuries ago as a practical peace pact during famine, the ritual continues nightly without interruption.',
      'Traveler advice: Harar is best visited via a 45-minute flight from Addis Ababa to Dire Dawa, followed by a scenic one-hour drive up into the eastern highlands. Be sure to sample freshly ground wild Harar Longberry coffee at local roasteries, and allow time to browse the bustling spice stalls of the Gidir Megala market.'
    ],
    tags: ['Harar', 'Walled City', 'Hyena Feeding', 'Rimbaud', 'Coffee', 'UNESCO']
  },
  {
    id: 'omo-valley-ethical-travel',
    slug: 'ethical-travel-guide-to-the-lower-omo-valley',
    title: 'Ethical Encounters in the Lower Omo Valley: A Respectful Traveler’s Guide',
    category: 'Travel Advice',
    date: 'April 22, 2026',
    readTime: '9 min read',
    author: {
      name: 'Dawit Tadesse',
      role: 'Expedition Leader & Cultural Anthropologist'
    },
    image: '/src/assets/images/tour_omo_valley_1791564353175.jpg',
    excerpt: 'How to experience the ancestral traditions of the Hamar, Mursi, and Karo with dignity, ethical awareness, and genuine cross-cultural respect.',
    content: [
      'The Lower Valley of the Omo in southwestern Ethiopia is one of the most culturally diverse anthropological landscapes on the African continent. Here, along the meandering channels of the Omo River and the scrub savannahs of the Great Rift Valley, more than a dozen distinct indigenous ethnic groups have preserved pastoralist customs, intricate body ornamentation, and ceremonial rites for centuries.',
      'However, traveling in the Omo Valley requires a level of ethical awareness far beyond standard tourism. As international interest has grown, mass tour operators have at times reduced complex ancestral cultures to transactional "human safaris." At Vacation to Ethiopia Tours, our mission is to ensure every community visit is conducted with dignity, transparency, and reciprocal respect.',
      'First and foremost: work exclusively with licensed native guides who belong to or have established deep trust with the local communities. A quality guide does not simply drive visitors into a village; they first seek permission from the village elders (olani), introduce guests as respectful visitors, and facilitate genuine two-way conversation about daily life, cattle husbandry, and seasonal harvests.',
      'The matter of photography requires thoughtful restraint. In many Omo Valley communities—particularly among the Mursi and Karo—a system of paying per photograph was introduced decades ago, creating an environment of hurried commercial transactions. We encourage travelers to put the camera away for the first hour of every village visit. Spend time sitting under the acacia tree, watch women weave baskets or grind grain, exchange smiles, and only ask for photographs once genuine rapport has been established.',
      'Experiencing a weekly tribal market—such as Key Afer on Thursdays or Dimeka on Saturdays—is one of the most authentic ways to witness Omo Valley culture. These are genuine commercial and social gatherings where Banna, Hamar, and Ari pastoralists walk for miles to trade grains, honey, livestock, and hand-carved wooden headrests. Here, visitors are merely quiet observers in a bustling local marketplace rather than the center of attention.',
      'Responsible tourism principles we uphold: We ensure community entry fees are paid directly to village councils and elders; we do not distribute candy, plastic pens, or money to children, which fosters dependency and truancy from school; and we encourage purchasing authentic handicrafts directly from female artisans. Done with reverence, traveling the Omo Valley is a humbling, unforgettable encounter with ancestral human wisdom.'
    ],
    tags: ['Omo Valley', 'Ethical Travel', 'Cultural Immersion', 'Hamar', 'Mursi', 'Respect']
  }
];

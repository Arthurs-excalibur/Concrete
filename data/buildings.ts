export interface BuildingAnnotation {
  id: string;
  number: string;
  title: string;
  description: string;
  x: number; // percentage from left
  y: number; // percentage from top
}

export interface BuildingRecord {
  id: string; // e.g. "001"
  slug: string;
  name: string;
  architect: string;
  location: string;
  city: string;
  country: string;
  completionYear: number;
  yearRange: string;
  decade: "1950s" | "1960s" | "1970s" | "1980s";
  buildingType: string; // Category for filter
  typology: string; // Detailed typology
  materials: string;
  status: string;
  coordinates: string;
  tagline: string;
  summary: string;
  storyHeadline: string;
  storyParagraphs: string[];
  heroImage: string;
  detailsImage?: string;
  annotations?: BuildingAnnotation[];
  featured: boolean;
  selectedStory?: {
    hook: string;
  };
}

export const BUILDINGS: BuildingRecord[] = [
  {
    id: "001",
    slug: "barbican-estate",
    name: "Barbican Estate",
    architect: "Chamberlin, Powell and Bon",
    location: "London, United Kingdom",
    city: "London",
    country: "United Kingdom",
    completionYear: 1976,
    yearRange: "1965—1976",
    decade: "1970s",
    buildingType: "Residential / Cultural",
    typology: "Residential & Cultural Complex",
    materials: "Bush-hammered concrete",
    status: "Grade II listed",
    coordinates: "51.5202° N  0.0939° W",
    tagline: "A city within a city.",
    summary:
      "A radical experiment in collective living. An enduring argument for the public realm.",
    storyHeadline: "An island of possibility in the heart of London.",
    storyParagraphs: [
      "Raised above the city’s restless streets, the Barbican proposes another way to live: dense, generous and unapologetically collective.",
      "Built on a site devastated during the Second World War, the estate reimagined the City of London as a place to call home. Towers, terraces and elevated walkways form an intricate landscape of shared space.",
      "Its rough concrete is more than a surface. It gives the architecture weight and texture, balancing monumental scale with the intimacy of gardens, water and everyday rituals.",
    ],
    heroImage: "/images/buildings/barbican.png",
    detailsImage: "/images/buildings/barbican-details.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "EXPOSED AGGREGATE",
        description:
          "The concrete was worked by hand to reveal the stone beneath.",
        x: 20.3,
        y: 54.1,
      },
      {
        id: "detail-2",
        number: "02",
        title: "SCULPTED PARAPETS",
        description:
          "Curved balcony edges temper the estate’s formidable mass.",
        x: 77.3,
        y: 91.6,
      },
      {
        id: "detail-3",
        number: "03",
        title: "A PEDESTRIAN LANDSCAPE",
        description:
          "Elevated routes separate daily life from the traffic below.",
        x: 51.9,
        y: 117.7,
      },
    ],
    featured: true,
  },
  {
    id: "002",
    slug: "trellick-tower",
    name: "Trellick Tower",
    architect: "Ernő Goldfinger",
    location: "London, United Kingdom",
    city: "London",
    country: "United Kingdom",
    completionYear: 1972,
    yearRange: "1968—1972",
    decade: "1970s",
    buildingType: "Residential",
    typology: "High-Rise Social Housing",
    materials: "Cast-in-place textured concrete, cedar cladding",
    status: "Grade II* listed",
    coordinates: "51.5244° N  0.2078° W",
    tagline: "The architecture of ambition.",
    summary:
      "A towering 31-storey landmark with a detached service tower linked by dramatic aerial bridges.",
    storyHeadline: "Vertical clarity on the London skyline.",
    storyParagraphs: [
      "Commissioned by the Greater London Council and designed by Hungarian-born modernist Ernő Goldfinger, Trellick Tower represents the dramatic zenith of post-war civic housing.",
      "Its defining gesture—a separate service tower housing lifts, stairs, and boiler plants connected every third floor by cantilevered bridge corridors—freed residences from mechanical vibration and noise.",
      "Once demonized during decades of municipal disinvestment, Trellick has emerged as one of Europe's most celebrated brutalist icons.",
    ],
    heroImage: "/images/buildings/trellick-tower.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "DETACHED SERVICE TOWER",
        description:
          "Lifts, stairs, and boiler plants are completely isolated from residential quarters to eliminate vibration.",
        x: 28.0,
        y: 35.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "AERIAL CORRIDOR BRIDGES",
        description:
          "Cantilevered covered bridges span between the service tower and apartments every third floor.",
        x: 45.0,
        y: 52.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "TEXTURED CONCRETE FINS",
        description:
          "Cast-in-place vertical fins articulate the facade and provide rhythmic acoustic and solar protection.",
        x: 68.0,
        y: 70.0,
      },
    ],
    featured: false,
    selectedStory: {
      hook: "The architecture of ambition.",
    },
  },
  {
    id: "003",
    slug: "national-theatre",
    name: "National Theatre",
    architect: "Sir Denys Lasdun",
    location: "London, United Kingdom",
    city: "London",
    country: "United Kingdom",
    completionYear: 1976,
    yearRange: "1969—1976",
    decade: "1970s",
    buildingType: "Cultural",
    typology: "Civic Theatre Complex",
    materials: "Board-marked concrete, glass, quarry tile",
    status: "Grade II* listed",
    coordinates: "51.5070° N  0.1147° W",
    tagline: "A stage for the everyday.",
    summary:
      "Lasdun's 'fourth theatre'—a sprawling series of public river terraces that turn the South Bank into an open-air amphitheatre.",
    storyHeadline: "Strata of concrete meeting the Thames.",
    storyParagraphs: [
      "Denys Lasdun envisioned the National Theatre not as a sealed monument, but as an urban landscape. He called its cantilevered terraces 'strata', inviting citizens to populate its outdoor balconies as informal performers.",
      "The building's concrete surfaces preserve the precise wood-grain imprint of rough-sawn Douglas fir boards, treating structural concrete with the deliberate delicacy of natural stone.",
      "Internally housing three distinct theatres, it remains a masterwork of civic circulation, communal foyers, and unapologetic concrete mass.",
    ],
    heroImage: "/images/buildings/national-theatre.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "BOARD-MARKED TIMBER IMPRINT",
        description:
          "Exposed surfaces retain the wood grain texture of sawn Douglas fir planks used as concrete formwork.",
        x: 32.0,
        y: 65.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "CANTILEVERED RIVER STRATA",
        description:
          "Horizontal pedestrian terraces project outward over the South Bank walkway like geological formations.",
        x: 60.0,
        y: 48.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "FLY TOWER MONOLITH",
        description:
          "Vertical fly towers housing stage rigging rise as monumental geometric volumes anchoring the composition.",
        x: 48.0,
        y: 25.0,
      },
    ],
    featured: false,
    selectedStory: {
      hook: "A stage for the everyday.",
    },
  },
  {
    id: "004",
    slug: "habitat-67",
    name: "Habitat 67",
    architect: "Moshe Safdie",
    location: "Montréal, Canada",
    city: "Montréal",
    country: "Canada",
    completionYear: 1967,
    yearRange: "1966—1967",
    decade: "1960s",
    buildingType: "Residential",
    typology: "Prefabricated Modular Housing",
    materials: "Prefabricated precast concrete box modules",
    status: "Classified Heritage Building (Quebec)",
    coordinates: "45.5000° N  73.5433° W",
    tagline: "A different kind of density.",
    summary:
      "A visionary cellular community combining the community of an apartment block with the private gardens of a suburban house.",
    storyHeadline: "Fractured geometric utopianism.",
    storyParagraphs: [
      "Originally conceived as Moshe Safdie's master's thesis at McGill University and realized for Expo 67, Habitat 67 consists of 354 prefabricated precast concrete boxes stepped up to 12 storeys.",
      "By cantilevering and arranging boxes in complex stepped configurations, every residence is endowed with private landscaped terrace spaces, open fresh air, and multi-directional exposure.",
      "It remains one of the world's most radical demonstrations of prefabricated concrete architecture reconciling urban density with humane habitability.",
    ],
    heroImage: "/images/buildings/habitat-67.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "PRECAST MODULAR CELLS",
        description:
          "354 modular boxes were cast on-site in a vertical assembly plant and craned into interlocking position.",
        x: 42.0,
        y: 45.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "STEPPED GARDEN TERRACES",
        description:
          "Each apartment roof functions as a landscaped private terrace for the neighbouring residence above.",
        x: 62.0,
        y: 55.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "POST-TENSIONED TIE RODS",
        description:
          "High-strength tensioning bars lock the cantilevered modules together against wind and seismic loads.",
        x: 30.0,
        y: 70.0,
      },
    ],
    featured: false,
    selectedStory: {
      hook: "A different kind of density.",
    },
  },
  {
    id: "005",
    slug: "boston-city-hall",
    name: "Boston City Hall",
    architect: "Kallmann McKinnell & Knowles",
    location: "Boston, United States",
    city: "Boston",
    country: "United States",
    completionYear: 1968,
    yearRange: "1963—1968",
    decade: "1960s",
    buildingType: "Civic",
    typology: "Municipal Government Headquarters",
    materials: "Poured-in-place and precast post-tensioned concrete, brick",
    status: "Boston Landmark Study",
    coordinates: "42.3603° N  71.0580° W",
    tagline: "Honesty in civic power.",
    summary:
      "An unyielding tripartite civic fortress translating democratic transparency into monumental structural expression.",
    storyHeadline: "The bold anatomy of government.",
    storyParagraphs: [
      "Selected through a nationwide open design competition in 1962, Boston City Hall expresses its civic functions openly through its three distinct vertical sections.",
      "The lower red brick tiers integrate with the public plaza; the suspended middle levels house executive chambers; while the massive stepped precast concrete cantilevers hold administrative offices.",
      "Deeply influenced by Le Corbusier's Sainte Marie de La Tourette, its monumental raw surfaces project strength, permanence, and civic conviction.",
    ],
    heroImage: "/images/buildings/boston-city-hall.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "SUSPENDED CANTILEVER BEAMS",
        description:
          "Heavy precast concrete trusses overhang the plaza, housing civic bureau floors above open ground.",
        x: 50.0,
        y: 35.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "TRIPARTITE SECTION DIVISION",
        description:
          "Direct exterior expression reveals public services below, mayoral offices in the center, and bureaucracy above.",
        x: 35.0,
        y: 55.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "RED BRICK PLAZA INTEGRATION",
        description:
          "Traditional red paving extends straight into the lower concourses, grounding the raw concrete volumes.",
        x: 65.0,
        y: 78.0,
      },
    ],
    featured: false,
  },
  {
    id: "006",
    slug: "robin-hood-gardens",
    name: "Robin Hood Gardens",
    architect: "Alison and Peter Smithson",
    location: "London, United Kingdom",
    city: "London",
    country: "United Kingdom",
    completionYear: 1972,
    yearRange: "1968—1972",
    decade: "1970s",
    buildingType: "Residential",
    typology: "Social Housing Estate",
    materials: "Precast ribbed concrete panels with acoustic vertical fins",
    status: "Demolished / V&A Salvaged Fragment",
    coordinates: "51.5097° N  0.0075° W",
    tagline: "Streets in the sky.",
    summary:
      "The Smithsons' radical residential manifesto enclosing a peaceful acoustic earthen mound in East London.",
    storyHeadline: "The contested promise of modernism.",
    storyParagraphs: [
      "Constructed by the London Borough of Tower Hamlets, Robin Hood Gardens deployed wide concrete access decks termed 'streets in the sky', designed wide enough for children to play and neighbours to converse.",
      "The estate turned its back on adjacent traffic through solid concrete vertical fins, framing an artificial central green hill that offered quiet contemplation in an industrial landscape.",
      "Despite international campaigns by world-renowned architects to secure listed status, the western block was demolished in 2017—its raw concrete fragments later collected by the Victoria and Albert Museum as significant artifacts of British post-war housing.",
    ],
    heroImage: "/images/buildings/robin-hood-gardens.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "ACOUSTIC PRECAST FINS",
        description:
          "Angled vertical ribs were engineered to deflect roadway roar from the Blackwall Tunnel approach.",
        x: 40.0,
        y: 40.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "STREETS IN THE SKY",
        description:
          "Three-metre-wide exterior decks running every third floor were conceived as sociable communal thoroughfares.",
        x: 65.0,
        y: 58.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "EARTHEN PROTECTION MOUND",
        description:
          "The estate encircled a quiet man-made park built from spoil, shielding families from urban congestion.",
        x: 50.0,
        y: 80.0,
      },
    ],
    featured: false,
  },
  {
    id: "007",
    slug: "geisel-library",
    name: "Geisel Library",
    architect: "William Pereira & Associates",
    location: "San Diego, United States",
    city: "San Diego",
    country: "United States",
    completionYear: 1970,
    yearRange: "1968—1970",
    decade: "1970s",
    buildingType: "Education",
    typology: "University Research Library",
    materials: "Reinforced concrete, solar bronze reflective glass",
    status: "Modernist Landmark",
    coordinates: "32.8812° N  117.2376° W",
    tagline: "Concrete hands holding knowledge.",
    summary:
      "An inverted geometric ziggurat cantilevered atop monumental concrete piers at UC San Diego.",
    storyHeadline: "Futurism grounded in raw mass.",
    storyParagraphs: [
      "Perched dramatically at the head of a canyon on the University of California San Diego campus, Geisel Library resembles hands holding an open stack of books up to the sky.",
      "Pereira calculated that a stepped cantilever allowed maximum daylight penetration and perimeter window seating for the highest concentrations of library collections.",
      "The structural piers act as massive concrete cantilevers tied together by post-tensioned floor plates, creating a silhouette that effortlessly bridges brutalism and cinematic sci-fi architecture.",
    ],
    heroImage: "/images/buildings/geisel-library.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "INVERTED CANTILEVER TIERS",
        description:
          "The upper levels step outward progressively to provide maximum perimeter reading desks with canyon views.",
        x: 48.0,
        y: 42.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "MASSIVE ANGLED PIERS",
        description:
          "Sixteen reinforced concrete bents branch upward like stylized arms transferring 40,000 tons of structural load.",
        x: 32.0,
        y: 68.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "SOLAR BRONZE RIBBONS",
        description:
          "Dark reflective glazing reduces southern California glare while contrasting with rough cast surfaces.",
        x: 68.0,
        y: 45.0,
      },
    ],
    featured: false,
  },
  {
    id: "008",
    slug: "unite-d-habitation",
    name: "Unité d’habitation",
    architect: "Le Corbusier",
    location: "Marseille, France",
    city: "Marseille",
    country: "France",
    completionYear: 1952,
    yearRange: "1947—1952",
    decade: "1950s",
    buildingType: "Residential",
    typology: "Vertical City Housing Block",
    materials: "Béton brut (rough unpolished cast concrete)",
    status: "UNESCO World Heritage Site",
    coordinates: "43.2614° N  5.3789° E",
    tagline: "The origin of Béton Brut.",
    summary:
      "The foundational masterpiece that gave birth to brutalism, introducing raw exposed concrete and the Modulor proportion system.",
    storyHeadline: "The birth of raw concrete architecture.",
    storyParagraphs: [
      "Commissioned by the French Ministry of Reconstruction following the devastation of World War II, the Cité Radieuse in Marseille pioneered 'Béton brut'—leaving the imperfections, wood knots, and joints of wooden formwork exposed without plaster.",
      "Standing on colossal pilotis, the 18-storey block incorporated 337 split-level duplex apartments, internal shopping 'streets', a hotel, medical facilities, and a sculpted sculptural rooftop featuring a running track, paddling pool, and kindergarten.",
      "More than a building, it established an international visual grammar and social philosophy that defined modern architectural thought for half a century.",
    ],
    heroImage: "/images/buildings/unite-d-habitation.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "MONUMENTAL PILOTIS",
        description:
          "Huge board-marked concrete stilts elevate the building, allowing the park landscape to flow underneath.",
        x: 35.0,
        y: 75.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "BÉTON BRUT FORM IMPRINTS",
        description:
          "Le Corbusier deliberately retained the natural blemishes, nails, and knots of the formwork timber.",
        x: 55.0,
        y: 42.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "SCULPTED ROOF GARDEN",
        description:
          "The roof terrace features a running track, paddling pool, kindergarten, and sculptural ventilation towers.",
        x: 50.0,
        y: 20.0,
      },
    ],
    featured: false,
  },
  {
    id: "009",
    slug: "preston-bus-station",
    name: "Preston Bus Station",
    architect: "BDP (Keith Ingham & Charles Wilson)",
    location: "Preston, United Kingdom",
    city: "Preston",
    country: "United Kingdom",
    completionYear: 1969,
    yearRange: "1968—1969",
    decade: "1960s",
    buildingType: "Infrastructure",
    typology: "Integrated Transport Terminal & Car Park",
    materials: "Precast white aggregate concrete curved parapets",
    status: "Grade II listed",
    coordinates: "53.7610° N  2.6934° W",
    tagline: "The majesty of municipal transit.",
    summary:
      "A monumental European transport hub defined by four tiers of curved precast sculptural concrete aprons.",
    storyHeadline: "Sculptural velocity in civic transport.",
    storyParagraphs: [
      "Built by Ove Arup and Partners with BDP, Preston Bus Station was designed to welcome 1,100 buses daily while parking 1,100 cars in an integrated multi-storey superstructure.",
      "Its exterior is instantly recognizable by the sculptural parabolic curves of its precast concrete balconies, shaped intentionally to prevent vehicle bumpers from striking walls while acting as protective weather canopies for pedestrians.",
      "Following a high-profile preservation victory against municipal demolition plans, the building was Grade II listed in 2013 and meticulously refurbished, cementing its status as one of Britain's finest democratic architectural achievements.",
    ],
    heroImage: "/images/buildings/preston-bus-station.png",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "PARABOLIC BALCONY APRONS",
        description:
          "Precast white aggregate curved panels curve gracefully outward, functioning as car wheel bumpers.",
        x: 52.0,
        y: 45.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "INTEGRATED MULTI-STOREY CRADLE",
        description:
          "Four elevated parking levels float seamlessly above 80 bus gates without visual clutter.",
        x: 65.0,
        y: 32.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "GLAZED PASSENGER CONCOURSE",
        description:
          "Double-sided glazed circulation terminal sheltered completely beneath deep concrete overhangs.",
        x: 38.0,
        y: 72.0,
      },
    ],
    featured: false,
  },
  {
    id: "010",
    slug: "salk-institute",
    name: "Salk Institute",
    architect: "Louis Kahn",
    location: "San Diego, United States",
    city: "San Diego",
    country: "United States",
    completionYear: 1965,
    yearRange: "1962—1965",
    decade: "1960s",
    buildingType: "Research / Science",
    typology: "Biomedical Research Center",
    materials: "Pozzolanic volcanic ash concrete, teak timber, travertine",
    status: "National Historic Landmark",
    coordinates: "32.8872° N  117.2464° W",
    tagline: "A monastery for science facing the sea.",
    summary:
      "Twin mirror-image laboratory wings framing an open travertine courtyard oriented toward the Pacific Ocean horizon.",
    storyHeadline: "Monumental silence framing the Pacific.",
    storyParagraphs: [
      "Founded by Jonas Salk, developer of the first safe polio vaccine, and designed in close dialogue with Louis Kahn, the Salk Institute treats scientific inquiry as a sacred communal vocation.",
      "Kahn formulated a special pozzolanic concrete mix using volcanic ash reminiscent of ancient Roman engineering, giving the laboratory walls a warm, luminescent pinkish-grey tone that refuses to decay in ocean fog.",
      "At the recommendation of Mexican architect Luis Barragán, Kahn left the central travertine plaza completely unplanted—creating an austere stone piazza bisected only by a thin stream of running water aimed directly at the ocean sunset.",
    ],
    heroImage: "/images/buildings/salk-institute.jpg",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "POZZOLANIC ROMAN CONCRETE",
        description:
          "Volcanic ash additive provides a velvety, warm texture resistant to corrosive ocean moisture.",
        x: 25.0,
        y: 40.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "UNFINISHED TEAK SCREENS",
        description:
          "Untreated Burmese teak window infills weather naturally to silver-grey alongside raw concrete.",
        x: 75.0,
        y: 55.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "TRAVERTINE WATER AXIS",
        description:
          "A single water rill bisects the unplanted stone courtyard, guiding the gaze directly to the horizon.",
        x: 50.0,
        y: 85.0,
      },
    ],
    featured: false,
  },
  {
    id: "011",
    slug: "torre-velasca",
    name: "Torre Velasca",
    architect: "BBPR (Banfi, Belgiojoso, Peressutti, Rogers)",
    location: "Milan, Italy",
    city: "Milan",
    country: "Italy",
    completionYear: 1958,
    yearRange: "1956—1958",
    decade: "1950s",
    buildingType: "Mixed-Use",
    typology: "Brutalist Medievalist Tower",
    materials: "Reinforced concrete structural bents, precast concrete panels",
    status: "Italian National Architectural Heritage",
    coordinates: "45.4600° N  9.1897° E",
    tagline: "The fortress of post-war Milan.",
    summary:
      "A mushroom-shaped skyscraper whose cantilevered upper crown reinterprets the fortified towers of Lombardy.",
    storyHeadline: "A brutalist silhouette on the Lombard skyline.",
    storyParagraphs: [
      "Rising 106 metres near the Duomo in Milan, Torre Velasca was designed by the renowned anti-fascist architectural collective BBPR to rebuild the city's bombed historic center.",
      "Rejecting the generic glass-and-steel curtain walls proliferating from North America, the architects embraced Neo-Liberty and contextual brutalism, expanding the upper residential floors over outward-thrusting concrete bents.",
      "The resulting mushroom profile references Milan's medieval Sforza Castle watchtowers, grounding cutting-edge post-war engineering in profound municipal history.",
    ],
    heroImage: "/images/buildings/torre-velasca.jpg",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "DIAGONAL SUPPORT BENTS",
        description:
          "Precast diagonal concrete struts jut outward to support the expanded six-storey residential crown.",
        x: 42.0,
        y: 52.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "EXPANDED UPPER CROWN",
        description:
          "Top tiers flare out to provide deeper floorplans for private flats above lower commercial offices.",
        x: 55.0,
        y: 30.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "LOMBARD STONE AGGREGATE",
        description:
          "Exterior panels incorporate pink-grey gravel aggregates matching historical Milanese stonework.",
        x: 68.0,
        y: 72.0,
      },
    ],
    featured: false,
  },
  {
    id: "012",
    slug: "wotruba-church",
    name: "Wotruba Church",
    architect: "Fritz Wotruba & Fritz G. Mayr",
    location: "Vienna, Austria",
    city: "Vienna",
    country: "Austria",
    completionYear: 1976,
    yearRange: "1974—1976",
    decade: "1970s",
    buildingType: "Sacred / Cultural",
    typology: "Sculptural Concrete Sanctuary",
    materials: "152 asymmetrical cast concrete monolith blocks, glazing",
    status: "Cultural Heritage Monument (Austria)",
    coordinates: "48.1477° N  16.2536° E",
    tagline: "Chaos assembled into sanctuary.",
    summary:
      "152 massive unadorned concrete blocks stacked into a transcendent sanctuary perched over the Vienna Woods.",
    storyHeadline: "Pure sculptured mass defying gravity.",
    storyParagraphs: [
      "Officially dedicated as the Church of the Holy Trinity, the Wotruba Church is the singular architectural creation of visionary Austrian sculptor Fritz Wotruba.",
      "Wotruba conceived the chapel not from functional floorplans, but as an enormous cubist sculpture composed of 152 asymmetrical concrete blocks weighing between 1.84 and 141 tons each.",
      "Narrow slivers of frameless glass seal the irregular gaps between raw stone-like slabs, flooding the stark interior with unpredictable shafts of natural light as the sun arcs across the Austrian hills.",
    ],
    heroImage: "/images/buildings/wotruba-church.jpg",
    annotations: [
      {
        id: "detail-1",
        number: "01",
        title: "152 ASYMMETRICAL MONOLITHS",
        description:
          "Blocks up to 141 tonnes each are stacked with deliberate irregularity to form the chapel walls and roof.",
        x: 50.0,
        y: 50.0,
      },
      {
        id: "detail-2",
        number: "02",
        title: "FRAMELESS GLASS SLITS",
        description:
          "Direct plate glass is recessed between unaligned concrete blocks to illuminate the sacred space.",
        x: 38.0,
        y: 40.0,
      },
      {
        id: "detail-3",
        number: "03",
        title: "ROUGH CAST BÉTON SURFACES",
        description:
          "Poured concrete surfaces bear heavy gravel aggregate textures without plaster or ornament.",
        x: 62.0,
        y: 65.0,
      },
    ],
    featured: false,
  },
];

export function getBuildingBySlug(slug: string): BuildingRecord | undefined {
  return BUILDINGS.find((b) => b.slug === slug);
}

export function getAdjacentBuildings(slug: string): {
  prev: BuildingRecord;
  next: BuildingRecord;
} {
  const index = BUILDINGS.findIndex((b) => b.slug === slug);
  const prevIndex = (index - 1 + BUILDINGS.length) % BUILDINGS.length;
  const nextIndex = (index + 1) % BUILDINGS.length;
  return {
    prev: BUILDINGS[prevIndex],
    next: BUILDINGS[nextIndex],
  };
}

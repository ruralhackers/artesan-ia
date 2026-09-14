export const site = {
  name: "ARTESAN-IA",
  org: "Rural Hackers",
  partnerSouth: "Espacio Geranios",
  email: "ana@ruralhackers.com",
  url: "https://artesania.ruralhackers.com",
  anceuUrl: "https://anceu.com",
  geraniosUrl: "https://www.espaciogeranios.com",
  hashtags: ["#ARTESANIA", "#OficioeIA"],
  description:
    "Una semana y dos regiones de artesanía: 20 plazas abiertas a toda España, para ir a Anceu (Galicia) o a Caravaca (Murcia).",
} as const;

export const nav = [
  { href: "#que-es", label: "Para ti" },
  { href: "#programa", label: "La semana" },
  { href: "#metodo", label: "Dos regiones" },
  { href: "#cierre", label: "Cierre" },
  { href: "#quien", label: "Quiénes" },
  { href: "#calendario", label: "Calendario" },
  { href: "#convocatoria", label: "Convocatoria" },
] as const;

export const hero = {
  brand: "ARTESAN-IA",
  eyebrow: "Anceu, Galicia · Caravaca, Murcia · TBC 2026",
  headline: "Tu oficio no necesita una máquina que lo sustituya. Necesita tiempo, territorio y otras manos.",
  support:
    "Una semana para personas que se dedican a la artesanía. Por las mañanas: talleres de oficio local, visitas a espacios creativos, e IA, emprendimiento e internacionalización. Por las tardes: aprendizaje entre pares, con la gente de la aldea de Anceu y del pueblo de Caravaca, un proyecto pequeño que deje algo en el sitio.",
  primaryCta: { href: "#convocatoria", label: "Quiero ir" },
  secondaryCta: { href: "#programa", label: "Cómo es la semana" },
  facts: [
    "20 plazas · toda España",
    "15 a Anceu",
    "5 a Caravaca",
    "Rural Hackers",
    "Espacio Geranios",
  ],
  images: {
    large: {
      src: "/images/hero-large.jpg",
      alt: "Retrato textil colgado entre árboles, en el bosque de Anceu",
      width: 1707,
      height: 2560,
    },
    small: {
      src: "/images/hero-small.jpg",
      alt: "Rogelilo junto a su retrato, junto al río en Anceu",
      width: 1536,
      height: 1024,
    },
  },
} as const;

export const about = {
  id: "que-es",
  title: "Si te dedicas a la artesanía y quieres que tu oficio dialogue con otro territorio",
  lead:
    "Esto no es un curso de pantallas ni una feria. Es una residencia corta, abierta a personas de toda España que se dedican a la artesanía: 20 plazas para ir a Galicia o a Murcia, vivir en el sitio y probar IA y emprendimiento sin soltar el oficio.",
  body: "Sales con contactos reales — la gente de la aldea de Anceu y del pueblo de Caravaca — y con un proyecto pequeño hecho ahí, no en abstracto.",
  workshops: {
    title: "Talleres con artistas locales",
    text: "En cada región hay dos talleres de mañana con artistas locales: conoces el oficio de otra persona, de cerca.",
  },
  pillars: [
    {
      title: "IA para el oficio",
      text: "Para ganar tiempo en las tareas del oficio que no te gustan — papeles, fotos, mails, organización — y dejar las manos para lo que sí.",
    },
    {
      title: "Emprender sin disfraz",
      text: "Precios, clientes, internacionalizar lo que ya haces. Sesiones concretas, con quien ya vive de un oficio.",
    },
    {
      title: "Espacios creativos de la región",
      text: "Visitas a espacios del entorno en Anceu o en Caravaca. Ver cómo se trabaja aquí.",
    },
  ],
} as const;

export const lab = {
  id: "programa",
  title: "Una semana, dos regiones de artesanía",
  lead:
    "20 personas de toda España, dos regiones: 15 plazas en Anceu (Galicia) y 5 en Caravaca (Murcia), con Espacio Geranios. Misma semana en cada sitio: mañanas de oficio, visitas e IA; tardes con la gente de Anceu o de Caravaca.",
  facts: [
    { label: "A Anceu", value: "15" },
    { label: "A Caravaca", value: "5" },
    { label: "Noches", value: "6" },
    { label: "Fechas", value: "TBC" },
  ],
  modules: [
    {
      title: "Talleres de oficio local",
      tag: "2 mañanas",
      text: "Dos mañanas con artistas locales del territorio de acogida. Una mañana, un taller. Ves el gesto, el material, la manera de trabajar de quien vive aquí.",
      image: {
        src: "/images/lab-atelier.jpg",
        alt: "Textiles naturales colgados en un palo, contra un muro de piedra",
        width: 1996,
        height: 1331,
      },
    },
    {
      title: "Visitas a espacios creativos",
      tag: "2 mañanas",
      text: "Otras dos mañanas salís del alojamiento: espacios creativos del entorno, talleres vecinos, sitios donde se hace y se comparte. Para vincularte con la región, no solo con la casa.",
      image: {
        src: "/images/lab-cowork.jpg",
        alt: "Gente en el territorio de Anceu, con el monte al fondo",
        width: 1453,
        height: 972,
      },
    },
    {
      title: "IA, emprender, internacionalizar",
      tag: "Mañanas",
      text: "Sesiones de mañana: IA aplicada al oficio, competencias de emprendimiento e internacionalización. Ritmo de taller, no de máster.",
      image: {
        src: "/images/lab-ruralia.jpg",
        alt: "Un ordenador en medio de los helechos: IA y oficio en el rural",
        width: 1920,
        height: 2560,
      },
    },
    {
      title: "Tardes entre pares",
      tag: "Todas las tardes",
      text: "Aprendizaje entre pares y un proyecto pequeño de impacto, con el acompañamiento de la gente de la aldea de Anceu o del pueblo de Caravaca. Algo que deje huella en el sitio.",
      image: {
        src: "/images/mural.jpg",
        alt: "Pandereteiras de Anceu: el oficio y la gente de la aldea",
        width: 2048,
        height: 1365,
      },
    },
  ],
} as const;

export const method = {
  id: "metodo",
  title: "Galicia y Murcia",
  lead:
    "Dos comunidades autónomas, 20 plazas abiertas a toda España. Eliges destino: Anceu (Galicia) o Caravaca (Murcia), con Espacio Geranios. Mismo ritmo: mañanas de oficio, visitas e IA; tardes con quien vive allí.",
  items: [
    {
      title: "Anceu, Galicia",
      text: "15 plazas. Acogida de Rural Hackers. Cierre con Fuchiqueira y Entre Culturas, con la gente de la aldea.",
      image: {
        src: "/images/anceu-destino.jpg",
        alt: "Círculo a la puerta de la casa, con el cartel de Anceu",
        width: 1332,
        height: 999,
      },
    },
    {
      title: "Caravaca, Murcia",
      text: "5 plazas. Acogida de Espacio Geranios. Cierre abierto con el pueblo para mostrar lo trabajado.",
      image: {
        src: "/images/oficio.jpg",
        alt: "Tapiz de plantas y fibras: el oficio como materia viva",
        width: 1296,
        height: 864,
      },
    },
  ],
} as const;

export const showcase = {
  id: "cierre",
  title: "Cierre con quien ha acogido",
  lead:
    "En Anceu, el cierre es Fuchiqueira y Entre Culturas. En Caravaca, un cierre abierto con el pueblo para mostrar los resultados de la semana — oficio, procesos y el proyecto hecho allí.",
  image: {
    src: "/images/cierre.jpg",
    alt: "Cierre con la aldea: gente de Anceu y residentes delante del mural",
    width: 1920,
    height: 1280,
  },
} as const;

export const who = {
  id: "quien",
  title: "Quiénes somos",
  lead:
    "ARTESAN-IA lo impulsan Rural Hackers, desde Anceu (Galicia), y Espacio Geranios, en Caravaca (Murcia). Dos regiones de artesanía se prestan oficio, espacios creativos y pueblo.",
  image: {
    src: "/images/revista.jpg",
    alt: "Revista Rural Hackers, issue 01 Galicia",
    width: 1548,
    height: 1032,
  },
  links: [
    { href: "https://ruralhackers.com", label: "Rural Hackers" },
    { href: "https://anceu.com", label: "Anceu" },
    { href: "https://www.espaciogeranios.com", label: "Espacio Geranios" },
  ],
} as const;

export const timeline = {
  id: "calendario",
  title: "Calendario",
  phases: [
    {
      when: "TBC 2026",
      title: "Convocatoria",
      text: "Se abre la inscripción para las dos residencias. Fechas por confirmar.",
    },
    {
      when: "6 noches · TBC",
      title: "Residencia Anceu",
      text: "15 plazas en Galicia, abiertas a toda España. Cierre con Fuchiqueira y Entre Culturas.",
    },
    {
      when: "6 noches · TBC",
      title: "Residencia Caravaca",
      text: "5 plazas en Murcia, abiertas a toda España, con Espacio Geranios. Cierre abierto con el pueblo.",
    },
  ],
} as const;

export const apply = {
  id: "convocatoria",
  title: "Convocatoria",
  lead:
    "Si te dedicas a la artesanía — o estás en ello — y vives en cualquier lugar de España, esta convocatoria es para ti: 20 plazas para una semana en Anceu o en Caravaca.",
  included: {
    title: "Qué te cubrimos",
    items: [
      "Alojamiento en Anceu o en Caravaca",
      "Comida todos los días de la residencia",
      "Transporte cubierto (200 €)",
      "Talleres, visitas, sesiones de IA y emprendimiento",
    ],
    note: "Abierta a toda España. Fechas TBC 2026. Destinos: Anceu (Galicia) y Caravaca (Murcia), con Espacio Geranios. Bases: https://docs.google.com/document/d/1YlAVl36BoolonvTkuT1WgLN-BOPQg_MZORKcmkO9K9o/edit",
  },
  requirements: [
    "Vivir en España: la convocatoria está abierta a cualquier comunidad autónoma.",
    "Dedicarte a la artesanía o a una práctica de taller (cerámica, textil, madera, joyería, cuero, vidrio, híbridos…).",
    "Ganas de compartir el oficio y de aprender IA, emprendimiento e internacionalización sin soltar las manos.",
    "Disponibilidad de una semana (6 noches) en Anceu o en Caravaca.",
    "Respeto por la gente de la aldea de Anceu y del pueblo de Caravaca: el proyecto de las tardes se hace con esa gente, no sobre ella.",
  ],
  ctaLabel: "Escribir",
  cohorts: [
    {
      id: "anceu",
      label: "Anceu, Galicia",
      edition: "15 plazas",
      dates: "Destino Galicia · 6 noches · TBC 2026",
      formUrl:
        "mailto:ana@ruralhackers.com?subject=ARTESAN-IA%20Anceu%20%E2%80%94%2015%20plazas",
    },
    {
      id: "caravaca",
      label: "Caravaca, Murcia",
      edition: "5 plazas",
      dates: "Destino Murcia · Espacio Geranios · TBC 2026",
      formUrl:
        "mailto:ana@ruralhackers.com?subject=ARTESAN-IA%20Caravaca%20%E2%80%94%205%20plazas",
    },
  ],
} as const;

export const partners = {
  title: "Quién lo hace",
  items: [
    { name: "Rural Hackers", role: "Anceu, Galicia", href: "https://ruralhackers.com" },
    { name: "Espacio Geranios", role: "Caravaca, Murcia", href: "https://www.espaciogeranios.com" },
    { name: "Anceu", role: "Acogida en Galicia", href: "https://anceu.com" },
  ],
} as const;

export const marqueeLine =
  "ARTESAN-IA ● ABIERTA A TODA ESPAÑA ● 20 PLAZAS ● 15 ANCEU ● 5 CARAVACA ● TBC 2026 ● ";

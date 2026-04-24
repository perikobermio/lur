import { useEffect, useState } from "react";

const heroImage = new URL(
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.27.37(8).jpeg",
  import.meta.url,
).href;

const profileImage = new URL(
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.40.16.jpeg",
  import.meta.url,
).href;

const languages = [
  { code: "eu", label: "EUS" },
  { code: "es", label: "ESP" },
  { code: "en", label: "ENG" },
];

const copy = {
  eu: {
    htmlLang: "eu",
    pageTitle: "LUR | Mendi gida",
    nav: {
      profile: "Profila",
      expeditions: "Espedizioak",
      booking: "Kontratazioa",
    },
    hero: {
      eyebrow: "Mendi gida / Espedizioak / Altitudea",
      subtitle: "Lurra, altitudea eta mendian gidatzeko modu sendo bat.",
      text:
        "Lur Uribarren mendiko gidaren erakusleiho korporatiboa. Himalaya, nazioarteko espedizioak eta irudi sendoa uztartzen dituen proposamen bat.",
      profileKicker: "Profil nagusia",
      profileText: "Mendi gida, altuerako espedizio, zeharkaldi eta kontakizuneko bidaietara bideratua.",
    },
    stats: [
      { value: "Goi mendia", label: "Altuerako espedizio gidatuak eta trekking teknikoa" },
      { value: "Himalaya", label: "Proposamen bisual eta profesionalaren ardatz nagusia" },
      { value: "Karakorum", label: "Esperientzia, logistika eta segurtasunean oinarritutako programak" },
      { value: "Afrika", label: "Formatu handiko igoerak ikuspegi irisgarriarekin" },
    ],
    profile: {
      eyebrow: "Profila",
      title: "Mendiarekin, espedizio kulturarekin eta lurraren irakurketarekin lotutako nortasuna.",
      text:
        "Homeak kontakizun nagusia biltzen du: erretratua, proposamen profesionala, lan eremuak eta Himalayara begiratzen duen marka irudi sendoa.",
      paragraphs: [
        "Lur Uribarren hemen aurkezten da mendiko gida gisa, hizkuntza bisual argi batekin: harkaitza, izotza, zeru garbiak eta sakontasuna. Weba abentura konplexu baten aurretik konfiantza bilatzen duten bezeroentzat pentsatua dago.",
        "Lehen bertsio honek biografia, kredentzialak, titulazioak, hizkuntzak, telefonoa, emaila eta kontratazio baldintza errealak txertatzeko oinarria prestatuta uzten du.",
      ],
      services: [
        "Nazioarteko espedizioen gidaritza",
        "Talde eta markentzat neurrira egindako bidaiak",
        "Altuerako trekking teknikoan laguntza",
        "Mendiari lotutako hitzaldiak, ekitaldiak eta edukia",
      ],
      cardKicker: "Profil nagusia",
      cardText: "Mendi gida, altuerako espedizio, zeharkaldi eta kontakizuneko bidaietara bideratua.",
    },
    presence: {
      eyebrow: "Presentzia",
      title: "Homea da erakusleiho nagusia eta informazioaren zatirik handiena bertan biltzen da.",
      text:
        "Edukia bloke laburretan antolatu da irakurketa komertzial azkarra izan dadin desktopen zein mugikorrean.",
      galleryAlt: "Lur Uribarrenen galeria",
    },
    expeditions: {
      eyebrow: "Espedizioak",
      title: "Hiru geografia, irizpide bakarra: esperientzia, segurtasuna eta presentzia bisual sendoa.",
      text:
        "Bloke bakoitzak testu komertziala eta irudi aukeraketa uztartzen ditu markaren sinesgarritasuna eta bidaiaren desiragarritasuna eraikitzeko.",
      items: [
        {
          region: "Himalaya",
          title: "Altuerako espedizioak",
          text:
            "Sokadentzat, talde txikientzat eta lur glaziarrean laguntza serioa bilatzen duten bezeroentzat diseinatutako programak.",
        },
        {
          region: "Karakorum",
          title: "Pakistango ibilbide teknikoak",
          text:
            "Estrategia, aklimatazio progresiboa eta ingurune urrunetako logistika txukuna baloratzen duten profilen bidaiak.",
        },
        {
          region: "Kilimanjaro",
          title: "Igoerak eta talde bidaiak",
          text:
            "Irudi indartsuko eta logistika zainduko ibilbideak, talde pribatu zein bezero korporatiboentzat.",
        },
      ],
    },
    booking: {
      eyebrow: "Kontratazioa",
      title: "Datu pertsonalak, kontaktu bideak eta proposamen komertzialak jasotzeko prest.",
      text:
        "Atal hau home barruko bloke korporatibo nagusi gisa prestatuta dago bihurketa bertatik ixteko.",
      items: [
        { label: "Formatua", value: "Gidaritza pribatua, talde txikiak eta markekin lankidetzak" },
        { label: "Oinarri operatiboa", value: "Euskal Herria, nazioarteko erabilgarritasunarekin" },
        { label: "Leiho aproposa", value: "Mendikatearen eta helburuaren araberako plangintza estazionala" },
        { label: "Kontaktua", value: "Atal honetan bertan pertsonaliza daitezkeen kontratazio datuak" },
      ],
      ctaKicker: "LUR / Mountain Guide",
      ctaTitle: "Biografia, dossier komertziala eta egutegia fintzen jarraitzeko oinarri sendoa.",
      ctaText:
        "Telefonoa, emaila, titulazioak edo espedizio zehatzak ematean, home hau eduki finalarekin ixteko prest dago norabide bisuala aldatu gabe.",
      backTop: "Gora itzuli",
    },
    lightbox: {
      prev: "Aurrekoa",
      next: "Hurrengoa",
      close: "Itxi",
      closeLabel: "Irudia itxi",
      prevLabel: "Aurreko irudia",
      nextLabel: "Hurrengo irudia",
    },
  },
  es: {
    htmlLang: "es",
    pageTitle: "LUR | Guia de montana",
    nav: {
      profile: "Perfil",
      expeditions: "Expediciones",
      booking: "Contratacion",
    },
    hero: {
      eyebrow: "Guia de montana / Expediciones / Altitud",
      subtitle: "Tierra, altura y una manera solida de guiar en gran montana.",
      text:
        "Escaparate corporativo de Lur Uribarren como guia de montana, con foco en Himalaya, expediciones internacionales y una presencia visual potente.",
      profileKicker: "Perfil principal",
      profileText: "Guia de montana orientado a expediciones, travesias de altura y viajes con relato.",
    },
    stats: [
      { value: "Alta montana", label: "Expediciones guiadas en altura y trekking tecnico" },
      { value: "Himalaya", label: "Territorio central de la propuesta visual y profesional" },
      { value: "Karakorum", label: "Programas orientados a experiencia, logistica y seguridad" },
      { value: "Africa", label: "Ascensiones de gran formato con enfoque accesible" },
    ],
    profile: {
      eyebrow: "Perfil",
      title: "Una identidad ligada a la montana, la cultura de expedicion y la lectura del terreno.",
      text:
        "La home concentra el relato principal: retrato, propuesta profesional, geografias de trabajo y una imagen de marca que mira al Himalaya sin perder sobriedad corporativa.",
      paragraphs: [
        "Lur Uribarren se presenta aqui como un guia de montana con un lenguaje visual claro: roca, hielo, cielos limpios y profundidad. La web esta pensada para clientes que buscan confianza antes de una aventura compleja.",
        "Esta primera version deja el contenido preparado para completar con biografia, credenciales, titulaciones, idiomas, telefono, email y condiciones de contratacion reales.",
      ],
      services: [
        "Guiado de expediciones internacionales",
        "Diseno de viajes a medida para grupos y marcas",
        "Acompanamiento tecnico en trekking de altura",
        "Charlas, activaciones y contenido de montana para eventos",
      ],
      cardKicker: "Perfil principal",
      cardText: "Guia de montana orientado a expediciones, travesias de altura y viajes con relato.",
    },
    presence: {
      eyebrow: "Presencia",
      title: "La home funciona como escaparate principal y concentra la mayor parte de la informacion.",
      text:
        "El contenido se divide en bloques cortos para favorecer una lectura comercial rapida en desktop y movil.",
      galleryAlt: "Galeria de Lur Uribarren",
    },
    expeditions: {
      eyebrow: "Expediciones",
      title: "Tres geografias, un mismo criterio: experiencia, seguridad y una presencia visual muy cuidada.",
      text:
        "Cada bloque mezcla texto comercial y seleccion de imagenes para construir credibilidad de marca y deseo de viaje.",
      items: [
        {
          region: "Himalaya",
          title: "Expediciones de altura",
          text:
            "Programas para cordadas, grupos reducidos y clientes que buscan acompanamiento serio en terreno glaciar y cultura de expedicion.",
        },
        {
          region: "Karakorum",
          title: "Rutas tecnicas en Pakistan",
          text:
            "Viajes para perfiles que valoran estrategia, aclimatacion progresiva y una operativa limpia en entornos remotos.",
        },
        {
          region: "Kilimanjaro",
          title: "Ascensiones y viajes de grupo",
          text:
            "Itinerarios de gran atractivo visual y logistica afinada para clientes corporativos, grupos privados y experiencias de altura.",
        },
      ],
    },
    booking: {
      eyebrow: "Contratacion",
      title: "Lista para recibir datos personales, vias de contacto y propuestas comerciales.",
      text:
        "Esta seccion queda preparada como bloque corporativo principal para cerrar conversion desde la propia home.",
      items: [
        { label: "Formato", value: "Guiado privado, grupos reducidos y colaboraciones de marca" },
        { label: "Base operativa", value: "Euskal Herria con disponibilidad internacional" },
        { label: "Ventana ideal", value: "Programacion estacional segun cordillera y objetivo" },
        { label: "Contacto", value: "Datos de contratacion personalizables en esta misma seccion" },
      ],
      ctaKicker: "LUR / Mountain Guide",
      ctaTitle: "Una base solida para seguir afinando biografia, dossier comercial y calendario.",
      ctaText:
        "Cuando tengamos telefono, email, titulaciones o expediciones concretas, esta home se puede cerrar con contenido final sin tocar la direccion visual.",
      backTop: "Volver arriba",
    },
    lightbox: {
      prev: "Anterior",
      next: "Siguiente",
      close: "Cerrar",
      closeLabel: "Cerrar imagen",
      prevLabel: "Imagen anterior",
      nextLabel: "Imagen siguiente",
    },
  },
  en: {
    htmlLang: "en",
    pageTitle: "LUR | Mountain guide",
    nav: {
      profile: "Profile",
      expeditions: "Expeditions",
      booking: "Booking",
    },
    hero: {
      eyebrow: "Mountain guide / Expeditions / Altitude",
      subtitle: "Land, altitude and a grounded way of guiding in big mountains.",
      text:
        "A corporate showcase for Lur Uribarren as a mountain guide, focused on the Himalaya, international expeditions and a strong visual identity.",
      profileKicker: "Main profile",
      profileText: "Mountain guide focused on expeditions, high altitude traverses and journeys with narrative depth.",
    },
    stats: [
      { value: "High mountain", label: "Guided altitude expeditions and technical trekking" },
      { value: "Himalaya", label: "Core territory of the visual and professional proposal" },
      { value: "Karakorum", label: "Programs shaped by experience, logistics and safety" },
      { value: "Africa", label: "Large-format ascents with an accessible approach" },
    ],
    profile: {
      eyebrow: "Profile",
      title: "An identity shaped by the mountains, expedition culture and terrain reading.",
      text:
        "The home page brings together the main story: portrait, professional offer, working geographies and a brand image that looks to the Himalaya without losing corporate sobriety.",
      paragraphs: [
        "Lur Uribarren is presented here as a mountain guide with a clear visual language: rock, ice, open skies and depth. The website is designed for clients looking for confidence before a demanding adventure.",
        "This first version leaves room to complete the site with biography, credentials, certifications, languages, phone, email and real booking terms.",
      ],
      services: [
        "International expedition guiding",
        "Tailor-made travel design for groups and brands",
        "Technical support on high altitude trekking",
        "Mountain talks, events and branded content",
      ],
      cardKicker: "Main profile",
      cardText: "Mountain guide focused on expeditions, high altitude traverses and journeys with narrative depth.",
    },
    presence: {
      eyebrow: "Presence",
      title: "The home page acts as the main showcase and holds most of the information.",
      text:
        "Content is divided into short blocks to support fast commercial reading on both desktop and mobile.",
      galleryAlt: "Lur Uribarren gallery",
    },
    expeditions: {
      eyebrow: "Expeditions",
      title: "Three geographies, one standard: experience, safety and a carefully built visual presence.",
      text:
        "Each block combines commercial copy and image selection to build brand credibility and travel desire.",
      items: [
        {
          region: "Himalaya",
          title: "High altitude expeditions",
          text:
            "Programs for rope teams, small groups and clients seeking serious support on glaciated terrain and expedition culture.",
        },
        {
          region: "Karakorum",
          title: "Technical routes in Pakistan",
          text:
            "Journeys for profiles who value strategy, progressive acclimatization and clean operations in remote terrain.",
        },
        {
          region: "Kilimanjaro",
          title: "Ascents and group journeys",
          text:
            "Visually strong itineraries with refined logistics for corporate clients, private groups and altitude-first experiences.",
        },
      ],
    },
    booking: {
      eyebrow: "Booking",
      title: "Ready to receive personal details, contact channels and commercial proposals.",
      text:
        "This section is prepared as the main corporate block to close conversion directly from the home page.",
      items: [
        { label: "Format", value: "Private guiding, small groups and brand collaborations" },
        { label: "Operating base", value: "Basque Country with international availability" },
        { label: "Ideal window", value: "Seasonal planning depending on range and objective" },
        { label: "Contact", value: "Booking details that can be customized in this same section" },
      ],
      ctaKicker: "LUR / Mountain Guide",
      ctaTitle: "A solid base to keep refining biography, commercial deck and calendar.",
      ctaText:
        "Once we add phone, email, certifications or specific expeditions, this home page can be finalized without changing the visual direction.",
      backTop: "Back to top",
    },
    lightbox: {
      prev: "Previous",
      next: "Next",
      close: "Close",
      closeLabel: "Close image",
      prevLabel: "Previous image",
      nextLabel: "Next image",
    },
  },
};

function getGallery(globPattern) {
  return Object.entries(globPattern)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, image]) => image);
}

function getRepresentativeImages(images, count = 4) {
  if (images.length <= count) {
    return images;
  }

  const picks = new Set();

  for (let index = 0; index < count; index += 1) {
    const position = Math.round((index * (images.length - 1)) / (count - 1));
    picks.add(position);
  }

  return [...picks].sort((a, b) => a - b).map((index) => images[index]);
}

const lurGallery = getGallery(
  import.meta.glob("../resources/photos/lur/*.jpeg", {
    eager: true,
    import: "default",
  }),
);
const himalayaGallery = getGallery(
  import.meta.glob("../resources/photos/himalaya/*.jpeg", {
    eager: true,
    import: "default",
  }),
);
const karakorumGallery = getGallery(
  import.meta.glob("../resources/photos/karakorum/*.jpeg", {
    eager: true,
    import: "default",
  }),
);
const kilimanjaroGallery = getGallery(
  import.meta.glob("../resources/photos/kilimanjaro/*.jpeg", {
    eager: true,
    import: "default",
  }),
);

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ImageStrip({ images, altPrefix, onOpenImage }) {
  return (
    <div className="image-strip">
      {images.map((image, index) => (
        <article key={image} className="image-card">
          <button
            type="button"
            className="image-button"
            onClick={() => onOpenImage(image, `${altPrefix} ${index + 1}`)}
          >
            <img src={image} alt={`${altPrefix} ${index + 1}`} />
          </button>
        </article>
      ))}
    </div>
  );
}

function ResponsiveGallery({ images, altPrefix, onOpenImage }) {
  return (
    <>
      <div className="desktop-gallery">
        <ImageStrip
          images={getRepresentativeImages(images)}
          altPrefix={altPrefix}
          onOpenImage={onOpenImage}
        />
      </div>
      <div className="mobile-gallery">
        <ImageStrip images={images} altPrefix={altPrefix} onOpenImage={onOpenImage} />
      </div>
    </>
  );
}

export default function App() {
  const [language, setLanguage] = useState("eu");
  const [activeImage, setActiveImage] = useState(null);
  const [activeGallery, setActiveGallery] = useState([]);

  const t = copy[language];
  const expeditions = [
    { ...t.expeditions.items[0], images: himalayaGallery },
    { ...t.expeditions.items[1], images: karakorumGallery },
    { ...t.expeditions.items[2], images: kilimanjaroGallery },
  ];

  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
    document.title = t.pageTitle;
  }, [t]);

  function openGallery(images, clickedImage, altPrefix) {
    const activeIndex = Math.max(
      0,
      images.findIndex((image) => image === clickedImage),
    );

    setActiveGallery(images);
    setActiveImage({
      src: images[activeIndex],
      alt: `${altPrefix} ${activeIndex + 1}`,
      index: activeIndex,
      altPrefix,
    });
  }

  function closeLightbox() {
    setActiveImage(null);
    setActiveGallery([]);
  }

  function moveLightbox(direction) {
    if (!activeImage || activeGallery.length === 0) {
      return;
    }

    const nextIndex =
      (activeImage.index + direction + activeGallery.length) % activeGallery.length;

    setActiveImage({
      src: activeGallery[nextIndex],
      alt: `${activeImage.altPrefix} ${nextIndex + 1}`,
      index: nextIndex,
      altPrefix: activeImage.altPrefix,
    });
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-mark">LUR</span>
          <span className="brand-copy">Lur Uribarren</span>
        </a>
        <div className="header-tools">
          <nav className="site-nav">
            <a href="#perfil">{t.nav.profile}</a>
            <a href="#expediciones">{t.nav.expeditions}</a>
            <a href="#contratacion">{t.nav.booking}</a>
          </nav>
          <label className="language-select-wrap">
            <span className="sr-only">Language</span>
            <select
              className="language-select"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
              aria-label="Language"
            >
              {languages.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          <div className="language-switcher" aria-label="Language switcher">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={`language-chip${language === item.code ? " is-active" : ""}`}
                onClick={() => setLanguage(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img src={heroImage} alt="Lur Uribarren summit portrait" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="hero-profile-card">
              <img src={profileImage} alt="Lur Uribarren portrait" />
              <div className="profile-meta">
                <span>{t.hero.profileKicker}</span>
                <strong>Lur Uribarren</strong>
                <p>{t.hero.profileText}</p>
              </div>
            </div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>
              LUR
              <span>{t.hero.subtitle}</span>
            </h1>
            <p className="hero-text">{t.hero.text}</p>
          </div>
        </section>

        <section className="stats-panel">
          {t.stats.map((item) => (
            <article key={item.value} className="stat-card">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section id="perfil" className="content-section profile-section">
          <div className="profile-copy">
            <SectionHeading
              eyebrow={t.profile.eyebrow}
              title={t.profile.title}
              text={t.profile.text}
            />
            <div className="profile-text-columns">
              {t.profile.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="services-grid">
              {t.profile.services.map((service) => (
                <div key={service} className="service-item">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <aside className="profile-visual">
            <div className="profile-card">
              <img src={profileImage} alt="Lur Uribarren portrait" />
              <div className="profile-meta">
                <span>{t.profile.cardKicker}</span>
                <strong>Lur Uribarren</strong>
                <p>{t.profile.cardText}</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="content-section story-section">
          <SectionHeading
            eyebrow={t.presence.eyebrow}
            title={t.presence.title}
            text={t.presence.text}
          />
          <ResponsiveGallery
            images={lurGallery}
            altPrefix={t.presence.galleryAlt}
            onOpenImage={(src) => openGallery(lurGallery, src, t.presence.galleryAlt)}
          />
        </section>

        <section id="expediciones" className="content-section expeditions-section">
          <SectionHeading
            eyebrow={t.expeditions.eyebrow}
            title={t.expeditions.title}
            text={t.expeditions.text}
          />

          <div className="expeditions-grid">
            {expeditions.map((expedition) => (
              <article key={expedition.region} className="expedition-card">
                <div className="expedition-copy">
                  <span>{expedition.region}</span>
                  <h3>{expedition.title}</h3>
                  <p>{expedition.text}</p>
                </div>
                <ResponsiveGallery
                  images={expedition.images}
                  altPrefix={expedition.title}
                  onOpenImage={(src) => openGallery(expedition.images, src, expedition.title)}
                />
              </article>
            ))}
          </div>
        </section>

        <section id="contratacion" className="content-section booking-section">
          <div className="booking-panel">
            <SectionHeading
              eyebrow={t.booking.eyebrow}
              title={t.booking.title}
              text={t.booking.text}
            />
            <div className="booking-grid">
              {t.booking.items.map((item) => (
                <article key={item.label} className="booking-item">
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="cta-card">
            <p className="cta-kicker">{t.booking.ctaKicker}</p>
            <h3>{t.booking.ctaTitle}</h3>
            <p>{t.booking.ctaText}</p>
            <a href="#top" className="button button-primary">
              {t.booking.backTop}
            </a>
          </div>
        </section>
      </main>

      {activeImage ? (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          {activeGallery.length > 1 ? (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label={t.lightbox.prevLabel}
              onClick={(event) => {
                event.stopPropagation();
                moveLightbox(-1);
              }}
            >
              {t.lightbox.prev}
            </button>
          ) : null}
          <button
            type="button"
            className="lightbox-close"
            aria-label={t.lightbox.closeLabel}
            onClick={closeLightbox}
          >
            {t.lightbox.close}
          </button>
          <img
            className="lightbox-image"
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
          {activeGallery.length > 1 ? (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              aria-label={t.lightbox.nextLabel}
              onClick={(event) => {
                event.stopPropagation();
                moveLightbox(1);
              }}
            >
              {t.lightbox.next}
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

const heroImage = new URL(
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.27.37(8).jpeg",
  import.meta.url,
).href;

const profileImage = new URL(
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.40.16.jpeg",
  import.meta.url,
).href;

const lurGallery = [
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.40.16(1).jpeg",
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.40.16(2).jpeg",
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.40.17.jpeg",
  "../resources/photos/lur/WhatsApp Image 2026-04-24 at 08.36.47(3).jpeg",
].map((path) => new URL(path, import.meta.url).href);

const himalayaGallery = [
  "../resources/photos/himalaya/WhatsApp Image 2026-04-24 at 08.27.37(4).jpeg",
  "../resources/photos/himalaya/WhatsApp Image 2026-04-24 at 08.31.50.jpeg",
  "../resources/photos/himalaya/WhatsApp Image 2026-04-24 at 08.31.51(1).jpeg",
  "../resources/photos/himalaya/WhatsApp Image 2025-02-27 at 10.18.58.jpeg",
].map((path) => new URL(path, import.meta.url).href);

const karakorumGallery = [
  "../resources/photos/karakorum/WhatsApp Image 2026-04-24 at 08.31.52.jpeg",
  "../resources/photos/karakorum/WhatsApp Image 2026-04-24 at 08.34.47(4).jpeg",
  "../resources/photos/karakorum/WhatsApp Image 2026-04-24 at 08.31.52(20).jpeg",
  "../resources/photos/karakorum/WhatsApp Image 2026-04-24 at 08.31.52(6).jpeg",
].map((path) => new URL(path, import.meta.url).href);

const kilimanjaroGallery = [
  "../resources/photos/kilimanjaro/WhatsApp Image 2026-04-24 at 08.34.48.jpeg",
  "../resources/photos/kilimanjaro/WhatsApp Image 2026-04-24 at 08.34.47(8).jpeg",
  "../resources/photos/kilimanjaro/WhatsApp Image 2026-04-24 at 08.34.48(2).jpeg",
  "../resources/photos/kilimanjaro/WhatsApp Image 2026-04-24 at 08.34.47(10).jpeg",
].map((path) => new URL(path, import.meta.url).href);

const stats = [
  { value: "Alta montana", label: "Expediciones guiadas en altura y trekking tecnico" },
  { value: "Himalaya", label: "Territorio central de la propuesta visual y profesional" },
  { value: "Karakorum", label: "Programas orientados a experiencia, logistica y seguridad" },
  { value: "Africa", label: "Ascensiones de gran formato con enfoque accesible" },
];

const expeditions = [
  {
    region: "Himalaya",
    title: "Expediciones de altura",
    text: "Programas para cordadas, grupos reducidos y clientes que buscan acompanamiento serio en terreno glaciar, cultura de expedicion y lectura meteo.",
    images: himalayaGallery,
  },
  {
    region: "Karakorum",
    title: "Rutas tecnicas en Pakistan",
    text: "Viajes pensados para perfiles que valoran estrategia, aclimatacion progresiva y una operativa limpia en entornos remotos de gran caracter.",
    images: karakorumGallery,
  },
  {
    region: "Kilimanjaro",
    title: "Ascensiones y viajes de grupo",
    text: "Itinerarios de gran atractivo visual y logistica afinada para clientes corporativos, grupos privados y experiencias de introduccion a la altura.",
    images: kilimanjaroGallery,
  },
];

const services = [
  "Guiado de expediciones internacionales",
  "Diseno de viajes a medida para grupos y marcas",
  "Acompanamiento tecnico en trekking de altura",
  "Charlas, activaciones y contenido de montana para eventos",
];

const hiringItems = [
  { label: "Formato", value: "Guiado privado, grupos reducidos y colaboraciones de marca" },
  { label: "Base operativa", value: "Euskal Herria con disponibilidad internacional" },
  { label: "Ventana ideal", value: "Programacion estacional segun cordillera y objetivo" },
  { label: "Contacto", value: "Datos de contratacion personalizables en esta misma seccion" },
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ImageStrip({ images, altPrefix }) {
  return (
    <div className="image-strip">
      {images.map((image, index) => (
        <article key={image} className="image-card">
          <img src={image} alt={`${altPrefix} ${index + 1}`} />
        </article>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a href="#top" className="brand">
          <span className="brand-mark">LUR</span>
          <span className="brand-copy">Lur Uribarren</span>
        </a>
        <nav className="site-nav">
          <a href="#perfil">Perfil</a>
          <a href="#expediciones">Expediciones</a>
          <a href="#contratacion">Contratacion</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <img src={heroImage} alt="Lur Uribarren en una cumbre nevada" className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">Guia de montana / Expediciones / Altitud</p>
            <h1>
              LUR
              <span>Tierra, altura y una manera sobria de guiar en gran montana.</span>
            </h1>
            <p className="hero-text">
              Web corporativa para presentar a Lur Uribarren como guia de montana, con foco
              en Himalaya, expediciones internacionales y proyectos que combinan seguridad,
              criterio y una imagen potente.
            </p>
            <div className="hero-actions">
              <a href="#contratacion" className="button button-primary">
                Solicitar expedicion
              </a>
              <a href="#expediciones" className="button button-secondary">
                Ver recorridos
              </a>
            </div>
          </div>
        </section>

        <section className="stats-panel">
          {stats.map((item) => (
            <article key={item.value} className="stat-card">
              <strong>{item.value}</strong>
              <p>{item.label}</p>
            </article>
          ))}
        </section>

        <section id="perfil" className="content-section profile-section">
          <div className="profile-copy">
            <SectionHeading
              eyebrow="Perfil"
              title="Una identidad ligada a la montana, la cultura de expedicion y la lectura del terreno."
              text="La home concentra el relato principal: retrato, propuesta profesional, geografias de trabajo y una imagen de marca que mira al Himalaya sin perder sobriedad corporativa."
            />
            <div className="profile-text-columns">
              <p>
                Lur Uribarren se presenta aqui como un guia de montana con un lenguaje
                visual claro: roca, hielo, cielos limpios y profundidad. La web esta
                pensada para clientes que buscan confianza antes de una aventura compleja.
              </p>
              <p>
                Esta primera version deja el contenido preparado para completar con biografia,
                credenciales, titulaciones, idiomas, telefono, email y condiciones de
                contratacion reales cuando quieras cerrarlas.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <div key={service} className="service-item">
                  {service}
                </div>
              ))}
            </div>
          </div>

          <aside className="profile-visual">
            <div className="profile-card">
              <img src={profileImage} alt="Retrato de Lur Uribarren en alta montana" />
              <div className="profile-meta">
                <span>Perfil principal</span>
                <strong>Lur Uribarren</strong>
                <p>Guia de montana orientado a expediciones, travesias de altura y viajes con relato.</p>
              </div>
            </div>
          </aside>
        </section>

        <section className="content-section story-section">
          <SectionHeading
            eyebrow="Presencia"
            title="La home funciona como escaparate principal y concentra la mayor parte de la informacion."
            text="Se ha dividido el contenido en bloques cortos para que el sitio tenga lectura comercial rapida en desktop y tambien en movil."
          />
          <ImageStrip images={lurGallery} altPrefix="Galeria de Lur Uribarren" />
        </section>

        <section id="expediciones" className="content-section expeditions-section">
          <SectionHeading
            eyebrow="Expediciones"
            title="Tres geografias, un mismo criterio: experiencia, seguridad y una puesta en escena muy fotografica."
            text="Cada bloque mezcla texto comercial y seleccion de imagenes para construir credibilidad de marca y deseo de viaje."
          />

          <div className="expeditions-grid">
            {expeditions.map((expedition) => (
              <article key={expedition.region} className="expedition-card">
                <div className="expedition-copy">
                  <span>{expedition.region}</span>
                  <h3>{expedition.title}</h3>
                  <p>{expedition.text}</p>
                </div>
                <ImageStrip images={expedition.images} altPrefix={expedition.title} />
              </article>
            ))}
          </div>
        </section>

        <section id="contratacion" className="content-section booking-section">
          <div className="booking-panel">
            <SectionHeading
              eyebrow="Contratacion"
              title="Lista para recibir datos personales, vias de contacto y propuestas comerciales."
              text="He dejado esta seccion preparada como bloque corporativo principal para cerrar conversion desde la propia home."
            />
            <div className="booking-grid">
              {hiringItems.map((item) => (
                <article key={item.label} className="booking-item">
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="cta-card">
            <p className="cta-kicker">LUR / Mountain Guide</p>
            <h3>Una base solida para seguir afinando biografia, dossier comercial y calendario.</h3>
            <p>
              Cuando me pases telefono, email, titulaciones o expediciones concretas, esta home
              se puede cerrar con contenido final sin tocar la direccion visual.
            </p>
            <a href="#top" className="button button-primary">
              Volver arriba
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

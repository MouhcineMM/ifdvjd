import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Section titre générique
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-text">{children}</h2>
);

// Hero vidéo
const Hero = () => (
  <section className="relative flex min-h-screen pt-[80px]">
    <div className="flex-[0_0_50%] h-[calc(100vh-80px)] overflow-hidden relative">
      <video
        src="/salon-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full grayscale"
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
    <div className="flex-[0_0_50%] h-[calc(100vh-80px)] relative flex items-center justify-start pl-[7%] bg-beige p-10">
      <div className="max-w-lg text-left">
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-text">
          L’art de la coiffure,<br />en toute élégance
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Découvrez un lieu où la beauté se conjugue avec raffinement et simplicité.
        </p>
        <Link
          to="/reservation"
          className="px-8 py-4 rounded-full text-sm md:text-base tracking-wide uppercase text-white shadow-md transition-all"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Prendre rendez-vous
        </Link>
      </div>
    </div>
  </section>
);

// Galerie photo après Hero
const Gallery = () => (
  <section className="max-w-6xl mx-auto mt-16 px-6 md:px-0">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["inspiration1.jpg","inspiration2.jpg","inspiration3.jpg","inspiration4.jpg"].map((img, i) => (
        <motion.img
          key={i}
          src={`/${img}`}
          alt={`Inspir ${i+1}`}
          className="rounded-lg object-cover w-full h-60 md:h-80 cursor-pointer hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        />
      ))}
    </div>
  </section>
);

// À propos
const About = () => (
  <section className="px-8 py-20 bg-white text-text">
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <SectionTitle>À propos</SectionTitle>
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        Depuis 2024, Maison Élégance incarne le luxe discret. Chaque visite est une expérience unique,
        pensée pour sublimer votre style dans un espace calme et épuré.
      </p>
    </div>
  </section>
);

// Nos services avec images
const servicesList = [
  { title: "Coupe Femme", desc: "Diagnostic sur mesure et coupe signature.", img: "service1.jpg" },
  { title: "Coupe Homme", desc: "Style moderne et entretien personnalisé.", img: "service2.jpg" },
  { title: "Coloration", desc: "Balayages, gloss et teintes naturelles.", img: "service3.jpg" },
  { title: "Soin Expert", desc: "Traitements profonds et botox capillaire.", img: "service4.jpg" },
];

const Services = () => (
  <section className="px-8 py-20 bg-beige text-text">
    <SectionTitle>Nos services</SectionTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicesList.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="card relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
        >
          <img src={`/${s.img}`} alt={s.title} className="w-full h-56 object-cover" />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
            <h3 className="text-white font-semibold text-lg">{s.title}</h3>
            <p className="text-white text-sm">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

// Notre équipe
const Team = () => {
  const members = [
    { name: "Alice Dupont", role: "Coiffeuse experte", img: "team1.jpg" },
    { name: "Bruno Martin", role: "Coiffeur senior", img: "team2.jpg" },
    { name: "Clara Moreau", role: "Coloriste", img: "team3.jpg" },
    { name: "David Leroy", role: "Soin expert", img: "team4.jpg" },
  ];

  return (
    <section className="px-8 py-20 bg-white text-text">
      <SectionTitle>Notre équipe</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {members.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <img src={`/${m.img}`} alt={m.name} className="w-40 h-40 object-cover rounded-full mb-4" />
            <h4 className="font-medium text-lg">{m.name}</h4>
            <p className="text-gray-600">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Avis clients
const Testimonials = () => {
  const reviews = [
    { text: "Une expérience incroyable, le salon est sublime et les coiffeurs sont des artistes !", author: "Sophie L." },
    { text: "Je recommande Maison Élégance pour un moment de détente et de beauté inégalé.", author: "Julien M." },
  ];

  return (
    <section className="px-8 py-20 bg-beige text-text">
      <SectionTitle>Avis clients</SectionTitle>
      <div className="max-w-4xl mx-auto space-y-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-xl shadow hover:shadow-2xl transition-shadow"
          >
            <p className="italic">"{r.text}"</p>
            <p className="mt-2 text-right font-medium">– {r.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="px-8 py-12 bg-white text-text">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
      <div>
        <div className="font-semibold text-lg">Maison Élégance</div>
        <div className="text-sm mt-1 text-gray-700">12 Rue du Raffinement, 75001 Paris</div>
      </div>
      <div className="text-sm text-gray-600">
        <div>01 23 45 67 89</div>
        <div>contact@maison-elegance.fr</div>
      </div>
    </div>
    <div className="mt-8 text-xs text-gray-400 text-center">© 2025 Maison Élégance — Tous droits réservés.</div>
  </footer>
);

// Page d'accueil complète
export default function HomePage() {
  return (
    <main className="flex-grow">
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Footer />
    </main>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import ReservationPage from "./ReservationPage";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Header fixe
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-6 px-10 flex items-center justify-between transition-all ${
        scrolled ? "bg-beige/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="text-xl font-semibold tracking-widest uppercase">Maison Élégance</div>
      <nav className="space-x-8 text-sm uppercase">
        <Link to="/">Accueil</Link>
        <Link to="/">À propos</Link>
        <Link to="/">Services</Link>
        <Link to="/reservation">Réservation</Link>
        <Link to="/">Contact</Link>
      </nav>
    </header>
  );
};

// Hero vidéo avec texte animé
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
      <motion.div
        className="max-w-lg text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-serif mb-6 leading-tight text-text">
          L’art de la coiffure,<br />en toute élégance
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Découvrez un lieu où la beauté se conjugue avec raffinement et simplicité.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/reservation"
            className="px-8 py-4 rounded-full text-sm md:text-base tracking-wide uppercase text-white shadow-md transition-all"
            style={{ backgroundColor: "var(--color-accent)" }}
          >
            Prendre rendez-vous
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

// Section titre générique
const SectionTitle = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-text">{children}</h2>
);

// Galerie inspirations
const Gallery = () => (
  <section className="max-w-6xl mx-auto mt-16 px-6 md:px-0">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {["inspiration1.jpg", "inspiration2.jpg", "inspiration3.jpg", "inspiration4.jpg"].map(
        (img, i) => (
          <motion.img
            key={i}
            src={`/${img}`}
            alt={`Inspir ${i + 1}`}
            className="rounded-lg object-cover w-full h-60 md:h-80 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )
      )}
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

// Section Expérience
const Experience = () => {
  const items = [
    { title: "Accueil", img: "experience1.jpg", text: "Un café, un sourire, une écoute attentive." },
    { title: "Ambiance", img: "experience2.jpg", text: "Un lieu feutré, pensé pour le bien-être." },
    { title: "Détente", img: "experience3.jpg", text: "Des soins experts, un moment pour soi." },
  ];
  return (
    <section className="py-20 bg-white">
      <SectionTitle>L’Expérience Maison Élégance</SectionTitle>
      <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
        {items.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
          >
            <img
              src={`/${e.img}`}
              alt={e.title}
              className="object-cover w-full h-72 group-hover:scale-105 transition-transform"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h3 className="text-lg font-semibold">{e.title}</h3>
              <p className="text-sm opacity-90">{e.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Services
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

// Équipe
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

// Statistiques
const Stats = () => {
  const stats = [
    { label: "Clients satisfaits", value: 1200 },
    { label: "Années d'expérience", value: 8 },
    { label: "Prestations uniques", value: 25 },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <h3 className="text-4xl font-serif text-text mb-2">{s.value}+</h3>
            <p className="text-gray-600">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};


// Partenaires
const Partners = () => {
  const logos = ["loreal.png", "kerastase.png", "ghd.png"];
  return (
    <section className="py-16 bg-beige">
      <SectionTitle>Nos partenaires</SectionTitle>
      <div className="flex justify-center items-center gap-12 flex-wrap mt-8">
        {logos.map((logo, i) => (
          <img
            key={i}
            src={`/${logo}`}
            alt={`Logo ${i}`}
            className="h-16 object-contain grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>
    </section>
  );
};

// Avis clients
// Avis clients avec ajout d'avis
const Testimonials = () => {
  const [reviews, setReviews] = useState([
    { text: "Une expérience incroyable, le salon est sublime et les coiffeurs sont des artistes !", author: "Sophie L.", rating: 5 },
    { text: "Je recommande Maison Élégance pour un moment de détente et de beauté inégalé.", author: "Julien M.", rating: 4 },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newReviewText, setNewReviewText] = useState("");
  const [newRating, setNewRating] = useState(0);

  const submitReview = () => {
    if (newReviewText && newRating > 0) {
      setReviews([{ text: newReviewText, author: "Utilisateur", rating: newRating }, ...reviews]);
      setNewReviewText("");
      setNewRating(0);
      setModalOpen(false);
    }
  };

  return (
    <section className="px-8 py-20 bg-beige text-text relative">
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
            <p className="text-right text-yellow-400">
              {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bouton flottant */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-8 right-8 bg-accent text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
      >
        Ajouter un avis
      </button>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-xl p-8 max-w-md w-full relative"
            >
              <h3 className="text-xl font-semibold mb-4">Votre avis</h3>
              <textarea
                value={newReviewText}
                onChange={(e) => setNewReviewText(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                placeholder="Écrivez votre avis..."
              />
              {/* Étoiles */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setNewRating(star)}
                    className={`cursor-pointer text-2xl ${star <= newRating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  Annuler
                </button>
                <button
                  onClick={submitReview}
                  className="px-4 py-2 rounded-md bg-accent text-white hover:bg-accent-dark transition"
                >
                  Envoyer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};


// FAQ
const FAQ = () => {
  const faqs = [
    { q: "Quels sont vos horaires ?", a: "Nous sommes ouverts du mardi au samedi, 9h à 19h." },
    { q: "Dois-je prendre rendez-vous ?", a: "Oui, nous recommandons la réservation pour garantir votre créneau." },
    { q: "Proposez-vous des soins spécifiques ?", a: "Oui, nous avons des soins capillaires haut de gamme sur mesure." }
  ];
  const [open, setOpen] = useState(null);
  return (
    <section className="py-16 bg-beige">
      <SectionTitle>FAQ</SectionTitle>
      <div className="max-w-4xl mx-auto px-4 space-y-4">
        {faqs.map((f,i)=>(
          <div key={i} className="bg-white rounded-xl shadow p-4 cursor-pointer" onClick={()=>setOpen(open===i?null:i)}>
            <h4 className="font-semibold">{f.q}</h4>
            <motion.div
              initial={{ height:0, opacity:0 }}
              animate={{ height: open===i ? "auto" : 0, opacity: open===i ? 1 : 0 }}
              transition={{duration:0.3}}
              className="overflow-hidden mt-2 text-gray-600"
            >
              {f.a}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Carte interactive
const MapSection = () => (
  <section className="py-16 bg-white">
    <div className="max-w-6xl mx-auto px-8">
      <SectionTitle>Nous trouver</SectionTitle>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999999!2d2.333333!3d48.866666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fcf99999999%3A0xabcdef1234567890!2s12%20Rue%20du%20Raffinement%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
        className="w-full h-72 rounded-xl border-none"
        loading="lazy"
      ></iframe>
    </div>
  </section>
);



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

// App principal
export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <main className="flex-grow">
              <Hero />
              <Gallery />
              <About />
              <Experience />
              <Services />
              <Team />
              <Stats />
              <Partners />
              <Testimonials />
              <FAQ />
              <MapSection />
              <Footer />
            </main>
          }
        />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

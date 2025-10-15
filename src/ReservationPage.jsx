import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ReservationPage = () => {
  const [service, setService] = useState("");
  const [stylist, setStylist] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [options, setOptions] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const navigate = useNavigate();

  const services = [
    { name: "Coupe Femme", price: 60, duration: 60 },
    { name: "Coupe Homme", price: 45, duration: 45 },
    { name: "Coloration", price: 80, duration: 90 },
    { name: "Soin Expert", price: 50, duration: 30 },
  ];
  const stylists = ["Alice", "Bruno", "Clara", "David"];
  const times = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"];
  const extraOptions = [
    { name: "Shampoing Premium", price: 15 },
    { name: "Massage cuir chevelu", price: 20 },
    { name: "Brushing luxe", price: 25 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirmed(true);
  };

  const selectedService = services.find((s) => s.name === service);
  const optionsPrice = options.reduce(
    (total, opt) => total + extraOptions.find((o) => o.name === opt)?.price || 0,
    0
  );
  const totalPrice = (selectedService?.price || 0) + optionsPrice;
  const totalDuration = (selectedService?.duration || 0) + options.length * 15;

  return (
    <motion.div
      className="min-h-screen bg-beige pt-[80px] px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero réservation */}
      <section className="relative h-64 md:h-96 mb-12">
        <img
          src="/salon-bw.jpg"
          alt="Salon"
          className="absolute w-full h-full object-cover grayscale brightness-75 rounded-xl"
        />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-serif text-center">
            Réservez votre expérience luxe
          </h1>
        </div>
      </section>

      {/* Formulaire */}
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-2xl space-y-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Service</label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Sélectionnez un service</option>
              {services.map((s) => (
                <option key={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Coiffeur(se)</label>
            <select
              value={stylist}
              onChange={(e) => setStylist(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Sélectionnez un coiffeur</option>
              {stylists.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Créneau horaire</label>
            <select
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="">Sélectionnez un créneau</option>
              {times.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium">Options supplémentaires</label>
          <div className="flex flex-wrap gap-3">
            {extraOptions.map((opt) => (
              <label
                key={opt.name}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full cursor-pointer hover:bg-gray-200"
              >
                <input
                  type="checkbox"
                  value={opt.name}
                  checked={options.includes(opt.name)}
                  onChange={(e) => {
                    if (e.target.checked) setOptions([...options, opt.name]);
                    else setOptions(options.filter((o) => o !== opt.name));
                  }}
                  className="form-checkbox"
                />
                <span>{opt.name} (+{opt.price}€)</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 font-medium">Nom complet</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Téléphone</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Résumé animé */}
        {service && (
          <motion.div
            className="bg-gray-100 p-4 rounded-lg text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p><strong>Service:</strong> {service}</p>
            <p><strong>Coiffeur:</strong> {stylist || "-"}</p>
            <p><strong>Date:</strong> {date || "-"}</p>
            <p><strong>Heure:</strong> {time || "-"}</p>
            <p><strong>Options:</strong> {options.join(", ") || "Aucune"}</p>
            <p><strong>Prix total estimé:</strong> {totalPrice}€</p>
            <p><strong>Durée totale estimée:</strong> {totalDuration} min</p>
          </motion.div>
        )}

        <button
          type="submit"
          className="w-full py-3 rounded-full text-white bg-accent hover:bg-accent-dark transition-colors"
        >
          Confirmer la réservation
        </button>
      </motion.form>

      {/* Popup confirmation */}
      {confirmed && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-12 text-center flex flex-col items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <svg
              className="w-16 h-16 mb-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="text-2xl font-semibold mb-2">Réservation confirmée !</h2>
            <p className="text-gray-600">Merci ! Votre rendez-vous a bien été pris en compte.</p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 px-6 py-3 rounded-full bg-accent text-white hover:bg-accent-dark transition-colors"
            >
              Bien reçu
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Galerie inspiration */}
      <section className="max-w-5xl mx-auto mt-16">
        <h2 className="text-3xl font-serif text-text mb-6 text-center">Inspirations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/inspiration1.jpg" alt="Inspir 1" className="rounded-lg object-cover h-40 w-full" />
          <img src="/inspiration2.jpg" alt="Inspir 2" className="rounded-lg object-cover h-40 w-full" />
          <img src="/inspiration3.jpg" alt="Inspir 3" className="rounded-lg object-cover h-40 w-full" />
          <img src="/inspiration4.jpg" alt="Inspir 4" className="rounded-lg object-cover h-40 w-full" />
        </div>
      </section>

      {/* Témoignages */}
      <section className="max-w-4xl mx-auto mt-16 mb-12">
        <h2 className="text-3xl font-serif text-text mb-6 text-center">Avis clients</h2>
        <div className="space-y-6">
          <motion.div className="p-4 bg-white rounded-xl shadow" whileHover={{ scale: 1.02 }}>
            <p>"Une expérience incroyable, le salon est sublime et les coiffeurs sont des artistes !"</p>
            <p className="mt-2 text-right font-medium">– Sophie L.</p>
          </motion.div>
          <motion.div className="p-4 bg-white rounded-xl shadow" whileHover={{ scale: 1.02 }}>
            <p>"Je recommande Maison Élégance pour un moment de détente et de beauté inégalé."</p>
            <p className="mt-2 text-right font-medium">– Julien M.</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ReservationPage;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AddReview = ({ onAdd }) => {
  const [open, setOpen] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  const submitReview = () => {
    if (reviewText && rating > 0) {
      onAdd({ text: reviewText, author: "Utilisateur", rating });
      setReviewText("");
      setRating(0);
      setOpen(false);
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 bg-accent text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
      >
        Ajouter un avis
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
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
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mb-4"
                placeholder="Écrivez votre avis..."
              />
              {/* Étoiles */}
              <div className="flex gap-2 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <span
                    key={star}
                    onClick={() => setRating(star)}
                    className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setOpen(false)}
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
    </>
  );
};

export default AddReview;

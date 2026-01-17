
import { Plan, Testimonial } from './types';

export const TRAINING_PLANS: Plan[] = [
  {
    id: 1,
    name: "Hypertrophy Master",
    description: "Enfoque científico en el crecimiento muscular máximo.",
    price: "$49",
    features: ["Rutina 5 días", "Guía de suplementación", "Cálculo de macros"],
  },
  {
    id: 2,
    name: "Powerlifting Base",
    description: "Construye fuerza real en los tres grandes levantamientos.",
    price: "$59",
    features: ["Periodización RPE", "Técnica avanzada", "Acceso a comunidad"],
  },
  {
    id: 3,
    name: "Cutting Phase",
    description: "Pierde grasa manteniendo el tejido muscular ganado.",
    highlighted: true,
    price: "$69",
    features: ["Déficit controlado", "Protocolo Cardio", "Check-ins semanales"],
  },
  {
    id: 4,
    name: "Home Athlete",
    description: "Resultados profesionales sin necesidad de gimnasio comercial.",
    price: "$39",
    features: ["Mínimo equipo", "Video tutoriales", "Flexibilidad total"],
  },
  {
    id: 5,
    name: "Elite Performance",
    description: "Combinación de fuerza, resistencia y movilidad.",
    price: "$79",
    features: ["Programación híbrida", "Nutrición avanzada", "Soporte VIP"],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos R.",
    transformation: "De 95kg a 82kg (12% grasa)",
    quote: "No solo cambié mi cuerpo, aprendí a comer y entrenar con lógica.",
    image: "https://picsum.photos/seed/trans1/400/400"
  },
  {
    id: 2,
    name: "Elena M.",
    transformation: "+5kg Masa Muscular",
    quote: "La estructura y el conocimiento de este programa son de otro nivel.",
    image: "https://picsum.photos/seed/trans2/400/400"
  }
];

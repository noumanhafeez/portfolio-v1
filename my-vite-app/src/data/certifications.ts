export type Certification = {
  title: string;
  issuer: string;
  date: string;
  url?: string;
  skills?: string[];
};

// 👉 To add a new certificate, just append a new object to this array.
export const certifications: Certification[] = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera — Andrew Ng",
    date: "2024",
    skills: ["Supervised Learning", "Neural Networks", "Recommender Systems"],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera — DeepLearning.AI",
    date: "2024",
    skills: ["CNNs", "RNNs", "Sequence Models"],
  },
  {
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2023",
    skills: ["Python", "Pandas", "NumPy"],
  },
];
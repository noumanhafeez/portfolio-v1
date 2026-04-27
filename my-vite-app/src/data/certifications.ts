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
    date: "2026",
    skills: ["Supervised Learning", "Neural Networks", "Recommender Systems"],
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera — DeepLearning.AI",
    date: "2026",
    skills: ["CNNs", "RNNs", "Sequence Models"],
  },
  {
    title: "Transformer Models with PyTorch",
    issuer: "DataCamp",
    date: "2026",
    skills: ["Python", "Pytorch", "Nlp", "Transformers"],
  },
  {
    title: "Vector Databases with Pinecone",
    issuer: "DataCamp",
    date: "2026",
    skills: ["Python", "Pytorch", "Vector Search", "Pinecone", "MLOps"],
  },
  {
    title: "Introduction to LLMs",
    issuer: "DataCamp",
    date: "2026",
    skills: ["Python", "Pytorch", "Nlp", "LLMs"],
  },
  {
    title: "CI/CD for MLOps",
    issuer: "DataCamp",
    date: "2026",
    skills: ["Python", "GitHub Actions", "MLOps", "CI/CD"],
  },


];
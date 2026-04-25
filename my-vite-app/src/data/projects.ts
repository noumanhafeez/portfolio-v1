export type Project = {
  title: string;
  description: string;
  tech: string[];
  highlights?: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

// 👉 To add a new project, just append a new object to this array.
export const projects: Project[] = [
  {
    title: "PDF Chat Assistant",
    description:
      "End-to-end Retrieval-Augmented Generation (RAG) system that lets users upload PDFs and chat with them via a conversational AI interface.",
    tech: ["Python", "FastAPI", "FAISS", "Sentence Transformers", "HuggingFace", "Tesseract OCR"],
    highlights: [
      "Implemented text extraction, semantic chunking, and embedding-based retrieval",
      "Vector search engine for efficient document retrieval",
      "Modular FastAPI backend with structured logging & service-oriented architecture",
    ],
    github: "https://github.com/noumanhafeez",
    featured: true,
  },
  {
    title: "Production MLOps Pipeline for CNN",
    description:
      "Production-ready end-to-end CNN pipeline for image classification on the Fashion MNIST dataset with full MLOps tooling.",
    tech: ["Python", "PyTorch", "CNN", "MLflow", "FastAPI", "Docker"],
    highlights: [
      "Modular, config-driven architecture for scalable model selection",
      "MLflow for experiment tracking, Docker for containerized deployment",
      "FastAPI inference API + GitHub Actions CI for automated training & validation",
    ],
    github: "https://github.com/noumanhafeez",
    featured: true,
  },
  {
    title: "Production MLOps Pipeline for House Price Prediction",
    description:
      "End-to-end ML pipeline for predicting house prices with multi-model training, evaluation, and deployment.",
    tech: ["Python", "Flask", "Linear Regression", "MLflow", "Docker"],
    highlights: [
      "YAML config-driven architecture for scalable model selection & tuning",
      "MLflow experiment tracking + Docker containerized deployment",
      "Flask web app for real-time predictions, GitHub Actions CI pipeline",
    ],
    github: "https://github.com/noumanhafeez",
    featured: true,
  },
];
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
  title: "Fine-Tuned BERT Sentiment Analysis System",
  description:
    "End-to-end NLP system that uses a fine-tuned BERT model to classify text sentiment as positive or negative. Built with a complete ML pipeline including training on the IMDb dataset, FastAPI-based inference API, and an interactive web interface with confidence scores and visual analytics.",
  tech: [
    "Python",
    "PyTorch",
    "Transformers (BERT)",
    "FastAPI",
    "Pandas",
    "Scikit-learn",
    "HTML/CSS/JS"
  ],
  highlights: [
    "Fine-tuned BERT model on IMDb dataset for binary sentiment classification",
    "Built scalable FastAPI backend for real-time and batch inference",
    "Implemented bulk text processing for CSV, JSON, and TXT inputs",
    "Developed interactive UI with sentiment visualization and confidence scoring",
    "Designed full end-to-end ML pipeline from training to deployment"
  ],
  github: "https://github.com/noumanhafeez/sentiment-analysis-bert",
  featured: true,
},
  {
  title: "PDF Chat Assistant",
  description:
    "End-to-end Retrieval-Augmented Generation (RAG) system that enables users to upload PDFs and interact with them through a conversational AI interface powered by semantic search and LLM-based responses. The system is designed for scalable document understanding and intelligent question answering.",
  tech: [
    "Python",
    "FastAPI",
    "FAISS",
    "Sentence Transformers",
    "HuggingFace",
    "Tesseract OCR"
  ],
  highlights: [
    "Implemented full RAG pipeline including text extraction, chunking, embedding generation, and semantic retrieval",
    "Built FAISS-based vector search engine for efficient and scalable document retrieval",
    "Developed modular FastAPI backend with clean architecture and structured logging",
    "Integrated OCR (Tesseract) for handling scanned and image-based PDFs"
  ],
  github: "https://github.com/noumanhafeez/pdf-chat-assistant",
  featured: true,
},
  {
  title: "Production MLOps Pipeline for Image Classification (CNN)",
  description:
    "End-to-end production-grade deep learning pipeline for image classification using CNNs, built with full MLOps practices including experiment tracking, containerized deployment, and automated CI/CD workflows.",
  tech: [
    "Python",
    "PyTorch",
    "CNN",
    "MLflow",
    "FastAPI",
    "Docker",
    "GitHub Actions"
  ],
  highlights: [
    "Designed modular and config-driven training pipeline for scalable model experimentation",
    "Implemented MLflow for experiment tracking, metrics logging, and model versioning",
    "Containerized inference service using Docker with FastAPI-based API layer",
    "Integrated CI/CD pipeline using GitHub Actions for automated training and validation"
  ],
  github: "https://github.com/noumanhafeez/production-cnn-mlops-pipeline",
  featured: true,
},
  {
  title: "End-to-End MLOps Pipeline for House Price Prediction",
  description:
    "Production-oriented machine learning pipeline for house price prediction, featuring multi-model training, experiment tracking, and deployment using modern MLOps practices.",
  tech: [
    "Python",
    "Flask",
    "Scikit-learn",
    "MLflow",
    "Docker",
    "GitHub Actions"
  ],
  highlights: [
    "Built configurable ML pipeline supporting multiple regression models and hyperparameter tuning",
    "Implemented MLflow for experiment tracking and model comparison",
    "Developed Flask-based web application for real-time predictions",
    "Containerized application using Docker with CI/CD automation via GitHub Actions"
  ],
  github: "https://github.com/noumanhafeez/production-ml-pipeline-house-prices",
  featured: true,
},
{
  title: "N-gram Language Model & Sentence Generator",
  description:
    "Implemented a trigram-based language model for next-word prediction, sentence generation, and perplexity evaluation using statistical NLP techniques. Built an end-to-end text processing pipeline for Project Gutenberg datasets with support for probabilistic language modeling and text generation.",
  tech: [
    "Python",
    "NumPy",
    "NLP",
    "Language Modeling",
    "Text Generation",
    "Perplexity Analysis"
  ],
  highlights: [
    "Built unigram, bigram, and trigram language models from scratch for probabilistic text generation",
    "Implemented next-word prediction and sentence generation using statistical sampling techniques",
    "Evaluated model performance using perplexity as a key metric for language quality",
    "Designed preprocessing pipeline for large-scale Project Gutenberg text datasets"
  ],
  github: "https://github.com/noumanhafeez/statistical-ngram-text-generator",
  featured: true,
},
{
  title: "Machine Learning Algorithms from Scratch (Decision Trees & Linear Regression)",
  description:
    "Built core machine learning algorithms from scratch, including Decision Trees (classification and regression) and Linear Regression, using only NumPy. Designed a modular ML framework with structured evaluation, logging, and performance analysis without relying on high-level ML libraries.",
  tech: [
    "Python",
    "NumPy",
    "Machine Learning",
    "Decision Trees",
    "Linear Regression",
    "Algorithm Design",
    "Data Science"
  ],
  highlights: [
    "Implemented Decision Tree algorithm for both classification and regression tasks from scratch",
    "Developed Linear Regression model using only NumPy without Scikit-learn dependency",
    "Designed modular architecture separating models, training, and evaluation components",
    "Implemented evaluation metrics including MSE, accuracy, and feature importance analysis",
    "Added structured logging system for training tracking and debugging"
  ],
  github: "https://github.com/noumanhafeez/scratch-ml-core",
  featured: true,
}
];
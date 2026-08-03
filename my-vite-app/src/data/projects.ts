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
  title: "Hybrid Cache Bot for LLM Systems",

  description:
    "A hybrid caching system for LLM-based chatbots that reduces redundant model calls by resolving prompts through a layered cache stack — exact-match prompt caching, semantic similarity caching, and LLM fallback — before falling back to inference. Includes a FastAPI service, CLI testing tool, and a metrics layer for tracking cache performance.",

  tech: [
    "Python",
    "FastAPI",
    "Redis",
    "FAISS",
    "Ollama Embeddings",
    "LLM"
  ],

  highlights: [
  "Designed and implemented a 3-tier Hybrid LLM Cache (Prompt Cache → Semantic Cache → LLM Fallback) using Python, Redis, FAISS, and Ollama Embeddings, reducing redundant LLM calls by 40%",
  "Built a Redis-backed Prompt Cache for exact-match lookups with latency tracking, contributing to sub-500ms average response times",
  "Implemented a FAISS-based Semantic Cache with Ollama embeddings, similarity thresholding, and persistent indexing, achieving an 80% cache hit rate across 200+ test queries",
  "Developed a FastAPI service exposing chat, health, and metrics endpoints for cache orchestration and monitoring",
  "Created a CLI-based interactive testing tool to validate cache behavior and benchmark end-to-end response performance",
  "Built a CacheMetrics module to monitor cache hit/miss rates, per-layer latency, and service uptime for performance analysis",
  "Centralized configuration for embedding models, Redis, FAISS, and cache parameters, improving maintainability and deployment flexibility",
  "Integrated LangSmith tracing to monitor cache execution flow, LLM requests, and debugging workflows"
],

  github:
    "https://github.com/noumanhafeez/optimize-llm-caching-architecture",

  featured: true,
},
{
  title: "Agentic Multi-Tool Chatbot with RAG & Cloud Deployment",
  description:
    "Production-ready agentic multi-tool chatbot built using LangGraph with Retrieval-Augmented Generation (RAG) capabilities for context-aware responses. Designed with a multi-agent workflow, containerized using Docker, deployed on AWS, and integrated with a Streamlit frontend to deliver scalable and interactive AI experiences.",

  tech: [
    "Python",
    "LangGraph",
    "LangChain",
    "LLM",
    "RAG",
    "Vector Database",
    "Docker",
    "AWS",
    "Streamlit",
    "FastAPI"
  ],

  highlights: [
  "Built an agentic chatbot using LangChain and LangGraph with dynamic tool selection, multi-step reasoning, and RAG, improving answer relevance by 25% over a baseline chatbot",
  "Integrated modular tools for web search, document retrieval, and external APIs, enabling context-aware task execution across multiple workflows",
  "Implemented conversation memory and state management to support multi-turn interactions and improve response continuity",
  "Developed a FastAPI backend exposing chat APIs and deployed the application on AWS and Render for scalable access",
  "Built an interactive Streamlit interface with session-based chat history for seamless user interaction and testing",
  "Integrated LangSmith tracing and observability to monitor agent execution, tool calls, and workflow debugging, reducing development and troubleshooting time",
  "Designed a modular, extensible agent architecture supporting plug-and-play tool integration and future workflow expansion"
],

  github: "https://github.com/noumanhafeez/Agentic-Multi-Tool-Chatbot",

  featured: true,
},
  
  
{
  title: "Agentic Travel Assistant with Multi-Agent Workflow",

  description:
    "AI-powered travel planning assistant built using LangGraph and LangChain to automate itinerary generation through multi-agent orchestration. Integrated external travel tools for flight retrieval and hotel recommendations with persistent conversation memory and an interactive Streamlit interface.",

  tech: [
    "Python",
    "LangGraph",
    "LangChain",
    "LLM",
    "PostgreSQL",
    "Streamlit",
    "Tavily API"
  ],

  highlights: [
  "Designed a 4-agent travel planning workflow using LangGraph for flight search, hotel recommendations, itinerary generation, and final responses",
  "Integrated Tavily and AviationStack APIs for flight and hotel data retrieval",
  "Implemented persistent conversation memory and workflow checkpointing using PostgreSQL",
  "Built a modular agent architecture for scalable and extensible travel automation",
  "Developed an interactive Streamlit interface for end-to-end travel planning",
  "Generated personalized multi-day itineraries through context-aware agent orchestration",
  "Structured the system for future tool integrations, dynamic routing, and human-in-the-loop workflows"
],
  github:
    "https://github.com/noumanhafeez/Agentic-Travel-Assistant-LangGraph",

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
  "Built a Retrieval-Augmented Generation (RAG) pipeline for conversational PDF Q&A, combining text extraction, semantic chunking, embedding generation, and vector retrieval",
  "Implemented a FAISS-based semantic search engine using Sentence Transformers, delivering document query responses in under 2 seconds",
  "Integrated Tesseract OCR to extract text from scanned and image-based PDFs, expanding support for diverse document formats",
  "Developed a modular FastAPI backend with clean architecture, structured logging, and REST APIs for document ingestion and querying",
  "Optimized document indexing and retrieval to reliably process and search 70+ page PDFs with low-latency responses",
  "Designed reusable components for document processing, embedding generation, and retrieval, improving maintainability and extensibility"
],
  github: "https://github.com/noumanhafeez/pdf-chat-assistant",
  featured: true,
},
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
import { Phase, Topic, TopicResource } from './frontend/src/types';

const topic = (name: string, resources: TopicResource[]): Topic => ({ name, resources });
const playlist = (title: string, url: string, author?: string): TopicResource => ({ type: 'playlist', title, url, author });
const vid = (title: string, url: string, author?: string): TopicResource => ({ type: 'video', title, url, author });
const art = (title: string, url: string, author?: string): TopicResource => ({ type: 'article', title, url, author });
const doc = (title: string, url: string, author?: string): TopicResource => ({ type: 'doc', title, url, author });

const aiEngineerRoadmapPlan: Phase[] = [
    {
        id: "air-p1",
        title: "Phase 1: Machine Learning & Python (CampusX)",
        weeks: "Month 1–3",
        modules: [
            {
                id: "air-m1.1",
                title: "Python & Math for ML Foundation",
                weeks: "Month 1",
                topics: [
                    topic("Python Advanced & OOPs", [
                        playlist("CampusX Python Playlist", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvb1REQSmERk4-Tq1iFjInT-", "CampusX"),
                        vid("Decorators & Generators", "https://www.youtube.com/watch?v=FsAPt_9Bf3U", "Corey Schafer"),
                        vid("Python OOP Masterclass", "https://www.youtube.com/watch?v=JeznW_7DlB0", "Corey Schafer")
                    ]),
                    topic("Math: Linear Algebra & Calculus", [
                        playlist("CampusX Math for ML", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbTfJ_M1L1R7QxW7P0xY2a4", "CampusX"),
                        art("Essence of Linear Algebra", "https://www.3blue1brown.com/topics/linear-algebra", "3Blue1Brown"),
                        vid("Essence of Calculus", "https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr", "3Blue1Brown"),
                        art("Mathematics for ML Book", "https://mml-book.github.io/book/mml-book.pdf", "Deisenroth & Faisal")
                    ]),
                    topic("Probability & Statistics for ML", [
                        playlist("CampusX Statistics for ML", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbTfJ_M1L1R7QxW7P0xY2a4", "CampusX"),
                        vid("Descriptive vs Inferential Stats", "https://www.youtube.com/watch?v=wXWz9BwTta8", "StatQuest"),
                        vid("Statistics for Data Science", "https://www.youtube.com/watch?v=guXirfTk_qg", "Great Learning")
                    ])
                ],
                project: {
                    title: "Statistical Hypothesis Testing Engine",
                    description: ["Perform A/B Testing on real company data", "Implement T-tests, ANOVA, and Chi-Square", "Build visual PDF reports of statistical significance"],
                    outcomes: ["Mathematical intuition for ML", "Python data analysis mastery"]
                }
            },
            {
                id: "air-m1.2",
                title: "EDA & Feature Engineering",
                weeks: "Month 2",
                topics: [
                    topic("Pandas & Numpy Masterclass", [
                        playlist("100 Days of ML (Pandas)", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcUaPtE", "CampusX"),
                        doc("Pandas Official Docs", "https://pandas.pydata.org/docs/"),
                        art("Python for Data Analysis", "https://wesmckinney.com/book/", "Wes McKinney")
                    ]),
                    topic("Data Visualization (Matplotlib/Seaborn)", [
                        vid("Matplotlib Crash Course", "https://www.youtube.com/watch?v=3Xc3CA655Ls", "Traversy Media"),
                        vid("Seaborn Tutorial", "https://www.youtube.com/watch?v=6GUO8qrZEXQ", "Derek Banas"),
                        art("Storytelling with Data", "https://www.storytellingwithdata.com/blog", "Cole Knaflic")
                    ]),
                    topic("Feature Selection & Engineering", [
                        playlist("CampusX Feature Engineering", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcUaPtE", "CampusX"),
                        art("Feature Engineering Best Practices", "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/", "Machine Learning Mastery"),
                        art("Feature Engineering for ML", "https://www.oreilly.com/library/view/feature-engineering-for/9781491953235/", "Alice Zheng")
                    ])
                ],
                project: {
                    title: "Automated EDA & Cleaning Pipeline",
                    description: ["Handle missing values and outliers automatically", "Create automated correlation heatmaps", "Encode categorical data correctly (OHE/Label)"],
                    outcomes: ["Data preprocessing expertise", "Feature engineering intuition"]
                }
            },
            {
                id: "air-m1.3",
                title: "Machine Learning Algorithms",
                weeks: "Month 3",
                topics: [
                    topic("Supervised: Linear & Logistic Regression", [
                        vid("Linear Regression Intuition", "https://www.youtube.com/watch?v=nk2CQITm_eo", "StatQuest"),
                        vid("Logistic Regression Explained", "https://www.youtube.com/watch?v=yIYKR4sgzI8", "StatQuest"),
                        vid("CampusX Linear Regression", "https://www.youtube.com/watch?v=VxzjcJ54XQc", "CampusX")
                    ]),
                    topic("Tree-Based Models: Decision Trees to XGBoost", [
                        vid("Decision Trees", "https://www.youtube.com/watch?v=7VeUPuVNHT8", "StatQuest"),
                        vid("Random Forests", "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ", "StatQuest"),
                        vid("XGBoost Part 1: Regression", "https://www.youtube.com/watch?v=OtD8wVaFm6E", "StatQuest"),
                        vid("CampusX XGBoost", "https://www.youtube.com/watch?v=0hX0C2d4-sU", "CampusX")
                    ]),
                    topic("Unsupervised: KMeans & PCA", [
                        vid("K-Means Clustering", "https://www.youtube.com/watch?v=4b5d3muPQmA", "StatQuest"),
                        vid("Principal Component Analysis (PCA)", "https://www.youtube.com/watch?v=FgakZw6K1QQ", "StatQuest")
                    ])
                ],
                project: {
                    title: "End-to-End Predictor with Streamlit UI",
                    description: ["Train multiple ML models (XGBoost, Random Forest)", "Perform Hyperparameter Tuning (GridSearchCV/Optuna)", "Build an interactive UI using Streamlit to predict outcomes"],
                    outcomes: ["Scikit-learn mastery", "Model evaluation and tuning"]
                }
            }
        ]
    },
    {
        id: "air-p2",
        title: "Phase 2: Deep Learning Roadmap (CampusX)",
        weeks: "Month 4–5",
        modules: [
            {
                id: "air-m2.1",
                title: "Neural Networks & PyTorch",
                weeks: "Month 4",
                topics: [
                    topic("Perceptrons & Backpropagation", [
                        playlist("100 Days of DL", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYu1zOANL8vAEZgZhQ3KjTz", "CampusX"),
                        vid("Neural Networks: Zero to Hero", "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAWtfgr9", "Andrej Karpathy"),
                        vid("But what is a neural network?", "https://www.youtube.com/watch?v=aircAruvnKk", "3Blue1Brown")
                    ]),
                    topic("PyTorch Fundamentals", [
                        playlist("PyTorch for Deep Learning", "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4", "Patrick Loeber"),
                        doc("PyTorch Official Tutorials", "https://pytorch.org/tutorials/"),
                        vid("Deep Learning with PyTorch", "https://www.youtube.com/watch?v=V_xro1bcAuA", "freeCodeCamp")
                    ]),
                    topic("Optimizers & Loss Functions", [
                        vid("Optimizers Explained", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "StatQuest"),
                        vid("CampusX SGD/Adam", "https://www.youtube.com/watch?v=1b1fW_RIT2s", "CampusX"),
                        art("Visualizing Gradient Descent", "https://distill.pub/2017/momentum/", "Distill.pub")
                    ])
                ],
                project: {
                    title: "Custom Neural Network Framework",
                    description: ["Build a multi-layer perceptron using pure Numpy (Micrograd style)", "Implement forward pass, backward pass, and SGD", "Compare results with PyTorch implementation"],
                    outcomes: ["Deep intuition of NNs", "PyTorch workflow understanding"]
                }
            },
            {
                id: "air-m2.2",
                title: "Computer Vision (CNNs) & NLP Basics (RNNs)",
                weeks: "Month 5",
                topics: [
                    topic("CNNs, ResNets & Transfer Learning", [
                        vid("CNNs Explained", "https://www.youtube.com/watch?v=YRhxdVk_sIs", "StatQuest"),
                        vid("CampusX CNN Tutorial", "https://www.youtube.com/watch?v=QzzRGGhP9P8", "CampusX"),
                        art("Transfer Learning Guide", "https://cs231n.github.io/transfer-learning/", "Stanford CS231n"),
                        art("Visualizing CNNs", "https://poloclub.github.io/cnn-explainer/", "Polo Club")
                    ]),
                    topic("RNNs, LSTMs & GRUs", [
                        vid("RNNs Explained", "https://www.youtube.com/watch?v=AsNTP8Kwu80", "StatQuest"),
                        vid("LSTMs Explained", "https://www.youtube.com/watch?v=YCzL96nL7j0", "StatQuest"),
                        vid("CampusX LSTMs", "https://www.youtube.com/watch?v=x-j2O_z2598", "CampusX"),
                        art("Understanding LSTMs", "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", "Chris Olah")
                    ]),
                    topic("Word Embeddings (Word2Vec, GloVe)", [
                        vid("Word Embeddings", "https://www.youtube.com/watch?v=5MaWmXwxFNQ", "StatQuest"),
                        vid("CampusX Word2Vec", "https://www.youtube.com/watch?v=ZMTzG1Yw_nI", "CampusX"),
                        art("Illustrated Word2Vec", "https://jalammar.github.io/illustrated-word2vec/", "Jay Alammar")
                    ])
                ],
                project: {
                    title: "Real-time Sentiment & Image Classifier API",
                    description: ["Fine-tune ResNet-50 for image classification", "Train LSTM for IMDb sentiment analysis", "Serve models simultaneously via FastAPI"],
                    outcomes: ["CNN and RNN mastery", "Pre-trained models usage"]
                }
            }
        ]
    },
    {
        id: "air-p3",
        title: "Phase 3: GenAI & Transformers (CampusX)",
        weeks: "Month 6–8",
        modules: [
            {
                id: "air-m3.1",
                title: "Transformers Architecture",
                weeks: "Month 6",
                topics: [
                    topic("Self-Attention Mechanism", [
                        vid("Attention is All You Need", "https://www.youtube.com/watch?v=iDulhoQ2pro", "StatQuest"),
                        vid("CampusX Transformers", "https://www.youtube.com/watch?v=5zCGnIfBmlM", "CampusX"),
                        art("The Illustrated Transformer", "https://jalammar.github.io/illustrated-transformer/", "Jay Alammar"),
                        vid("Let's build GPT", "https://www.youtube.com/watch?v=kCc8FmEb1nY", "Andrej Karpathy")
                    ]),
                    topic("Hugging Face Transformers Library", [
                        playlist("Complete NLP Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1AsG_S9ySjO2P8370uGv_L7", "Vizuara AI"),
                        playlist("Hugging Face Course", "https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o", "Hugging Face"),
                        doc("HuggingFace NLP Course", "https://huggingface.co/learn/nlp-course/")
                    ]),
                    topic("Fine-Tuning BERT / InstructGPT", [
                        vid("Fine-Tune BERT", "https://www.youtube.com/watch?v=GSt00_-0ncQ", "Venelin Valkov"),
                        doc("HuggingFace Fine-Tuning", "https://huggingface.co/docs/transformers/training"),
                        art("State of GPT", "https://www.youtube.com/watch?v=bZQun8Y4L2A", "Andrej Karpathy")
                    ])
                ],
                project: {
                    title: "Transformer from Scratch",
                    description: ["Implement Multi-Head Attention in PyTorch", "Build Encoder and Decoder blocks", "Train a mini-transformer on tokenized text translation"],
                    outcomes: ["Absolute mastery of the Transformer architecture"]
                }
            },
            {
                id: "air-m3.2",
                title: "LLMs, LangChain & Vector DBs",
                weeks: "Month 7",
                topics: [
                    topic("LangChain Core Concepts", [
                        playlist("LangChain Full Course", "https://www.youtube.com/playlist?list=PLqAmigZvYxILVLf4e6r2dcq-S3WJ1mUfY", "Krish Naik"),
                        doc("LangChain Docs", "https://python.langchain.com/docs/get_started/introduction"),
                        vid("LangChain in 15 mins", "https://www.youtube.com/watch?v=aywZrzNaKjs", "Rabbitmetrics")
                    ]),
                    topic("Vector DBs (Chroma/Pinecone)", [
                        vid("Vector Databases Explained", "https://www.youtube.com/watch?v=klTvEwg3oJ4", "Fireship"),
                        vid("ChromaDB Tutorial", "https://www.youtube.com/watch?v=3yPBVii7lzI", "pixegami"),
                        art("Vector Search Explained", "https://www.pinecone.io/learn/vector-database/", "Pinecone")
                    ]),
                    topic("Building RAG Pipelines", [
                        vid("CampusX Complete RAG", "https://www.youtube.com/watch?v=wd7TZ4e1mN0", "CampusX"),
                        vid("Advanced RAG", "https://www.youtube.com/watch?v=T-D1OfcDW1M", "LangChain"),
                        art("RAG Best Practices", "https://www.anyscale.com/blog/a-comprehensive-guide-for-building-rag-based-llm-applications-part-1", "Anyscale")
                    ])
                ],
                project: {
                    title: "Enterprise Context-Aware Chatbot",
                    description: ["Ingest company PDFs into Pinecone via LangChain chunks", "Implement Hybrid Search and Cohere Reranking", "Add buffer memory for conversational context"],
                    outcomes: ["RAG architecture mastery", "LangChain expertise"]
                }
            },
            {
                id: "air-m3.3",
                title: "LLM Fine-Tuning (LoRA) & AI Agents",
                weeks: "Month 8",
                topics: [
                    topic("LoRA & QLoRA Fine-Tuning", [
                        vid("LoRA Explained", "https://www.youtube.com/watch?v=YVU5wAA6Txo", "Weights & Biases"),
                        vid("QLoRA Llama-3 Fine-tuning", "https://www.youtube.com/watch?v=XpoKB3usmKc", "Trelis Research"),
                        art("LoRA: Low-Rank Adaptation", "https://huggingface.co/docs/peft/conceptual_guides/lora", "Hugging Face")
                    ]),
                    topic("Building AI Agents with LangGraph", [
                        vid("LangGraph Full Course", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        doc("LangGraph Documentation", "https://langchain-ai.github.io/langgraph/"),
                        art("LLM Powered Autonomous Agents", "https://lilianweng.github.io/posts/2023-06-23-agent/", "Lilian Weng")
                    ]),
                    topic("Multi-Agent Frameworks (CrewAI)", [
                        vid("CrewAI Tutorial", "https://www.youtube.com/watch?v=sPzc6hMg7So", "Matt Williams"),
                        doc("CrewAI Docs", "https://docs.crewai.com/"),
                        vid("Building CrewAI agents", "https://www.youtube.com/watch?v=nZ_G_Vp8y8k", "Brandon Hancock")
                    ])
                ],
                project: {
                    title: "Multi-Agent Research Assistant",
                    description: ["Build AI Agent using LangGraph/CrewAI", "Agent 1: Searches web for research papers. Agent 2: Summarizes findings. Agent 3: Writes blog post", "Fine-tune a small LLM with LoRA to act as the exact persona of your CTO"],
                    outcomes: ["AI Agent creation", "LLM fine-tuning"]
                }
            }
        ]
    },
    {
        id: "air-p4",
        title: "Phase 4: MLOps & Production",
        weeks: "Month 9",
        modules: [
            {
                id: "air-m4.1",
                title: "Docker, CI/CD & MLflow",
                weeks: "Month 9",
                topics: [
                    topic("Docker Compose for ML Services", [
                        vid("Docker in 100 Seconds", "https://www.youtube.com/watch?v=Gjnup-PuquQ", "Fireship"),
                        vid("Deploy ML Models Docker", "https://www.youtube.com/watch?v=h5wLuVDr0oc", "Patrick Loeber"),
                        doc("MLOps Roadmaps", "https://github.com/GokuMohandas/Made-With-ML", "Goku Mohandas")
                    ]),
                    topic("MLflow Experiment Tracking", [
                        vid("MLflow Tutorial", "https://www.youtube.com/watch?v=ksYIVDue8ak", "Krish Naik"),
                        doc("MLflow Docs", "https://mlflow.org/docs/latest/index.html")
                    ]),
                    topic("AWS Deployment & GitHub Actions", [
                        vid("AWS EC2 Deploy CI/CD", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        doc("GitHub Actions Docs", "https://docs.github.com/en/actions"),
                        art("The MLOps Stack", "https://huyenchip.com/2020/12/22/mlops-stack.html", "Chip Huyen")
                    ])
                ],
                project: {
                    title: "Automated ML CI/CD Pipeline",
                    description: ["Dockerize RAG Application", "Setup GitHub actions to automatically test API endpoints", "Track model parameters via MLflow", "Auto-deploy to AWS EC2"],
                    outcomes: ["Cloud deployment expertise", "MLOps proficiency"]
                }
            }
        ]
    },
    {
        id: "air-p5",
        title: "Phase 5: Portfolio & Job Hunt",
        weeks: "Month 10",
        modules: [
            {
                id: "air-m5.1",
                title: "FAANG Prep & Resumes",
                weeks: "Month 10",
                topics: [
                    topic("LeetCode & ML System Design", [
                        playlist("NeetCode 150", "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf", "NeetCode"),
                        vid("ML System Design Interview", "https://www.youtube.com/watch?v=pYs1lNd-XbI", "Stanford MLSys"),
                        art("Machine Learning System Design", "https://github.com/chiphuyen/machine-learning-systems-design", "Chip Huyen")
                    ]),
                    topic("ATS Resume Optimization", [
                        vid("Tech Resume Tips", "https://www.youtube.com/watch?v=J-4Fv8nq1iA", "Jeff Su"),
                        art("ATS Resume Guide", "https://www.jobscan.co/blog/ats-resume-guide/", "Jobscan")
                    ]),
                    topic("STAR Behavioral Prep", [
                        vid("FAANG Behavioral Interview", "https://www.youtube.com/watch?v=PJKYqLP6MRE", "Jeff Su"),
                        art("STAR Method for Engineers", "https://www.levels.fyi/blog/applying-star-framework.html", "levels.fyi")
                    ])
                ],
                project: {
                    title: "Interview Readiness Package",
                    description: ["Solve 150 LeetCode Patterns", "Complete 5 mock ML system designs", "Create a metrics-driven portfolio and ATS resume"],
                    outcomes: ["FAANG ready", "Land AI engineering roles"]
                }
            }
        ]
    }
];

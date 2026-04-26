"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.learningPlan = exports.allLearningPlans = exports.t = exports.course = exports.channel = exports.playlist = exports.art = exports.doc = exports.vid = exports.topic = void 0;
// Enhanced helper - supports video, doc, article, playlist, channel
const topic = (name, resources) => ({ name, resources });
exports.topic = topic;
// Quick helpers
const vid = (title, url, author) => ({ type: 'video', title, url, author });
exports.vid = vid;
const doc = (title, url) => ({ type: 'doc', title, url });
exports.doc = doc;
const art = (title, url, author) => ({ type: 'article', title, url, author });
exports.art = art;
const playlist = (title, url, author) => ({ type: 'playlist', title, url, author });
exports.playlist = playlist;
const channel = (name, url) => ({ type: 'channel', title: name, url });
exports.channel = channel;
const course = (title, url, author) => ({ type: 'course', title, url, author });
exports.course = course;
// Backward compatible helper
const t = (name, videoUrl, docUrl) => ({
    name,
    resources: [
        ...(videoUrl ? [{ type: 'video', title: 'Watch Tutorial', url: videoUrl, duration: '20min' }] : []),
        ...(docUrl ? [{ type: 'doc', title: 'Documentation', url: docUrl }] : []),
    ]
});
exports.t = t;
const antern_sprint_plan_1 = require("./antern-sprint-plan");
// ===== PLAN 1: GENAI ENGINEER PATH =====
const genaiPlan = [
    {
        id: "p0",
        title: "Phase 0: Mathematical & Neural Foundations",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "m0.1",
                title: "Mathematics for AI/ML Masterclass",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("Calculus & Optimization", [
                        (0, exports.vid)("Calculus for ML (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbW-0X9IeR4pGgU2T8Zsc2Q", "CampusX"),
                        (0, exports.vid)("Optimization for Deep Learning (Krish Naik)", "https://www.youtube.com/watch?v=A6FiCD0796E", "Krish Naik"),
                        (0, exports.vid)("Math for ML Foundations (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.doc)("Whitepaper: Matrix Calculus for DL", "https://arxiv.org/abs/1802.01528"),
                        (0, exports.art)("Mathematics for Machine Learning", "https://mml-book.github.io/")
                    ]),
                    (0, exports.topic)("Linear Algebra & Probability", [
                        (0, exports.vid)("Linear Algebra for DS (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYhp0_L3f_J4U4NfEtoV0Mh", "CampusX"),
                        (0, exports.vid)("Probability & Statistics (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QzC67Y_S_TaqCOuuvY97", "Krish Naik"),
                        (0, exports.vid)("Linear Algebra Foundations (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.art)("Probability Theory for AI", "https://towardsdatascience.com/probability-theory-for-ai-and-ml-9c2b8c9c9c9c")
                    ])
                ],
                project: {
                    title: "Math-Focused ML Optimizer",
                    description: ["Implement Gradient Descent from scratch", "Visualise loss landscapes", "Matrix multiplication library in Python"],
                    outcomes: ["Master Calculus for Backpropagation", "Understand Linear Algebra for Tensors", "Probability for Generative Models"]
                }
            },
            {
                id: "m0.2",
                title: "Neural Networks from Scratch",
                weeks: "Week 3-4",
                topics: [
                    (0, exports.topic)("Neuron Architecture & Forward Prop", [
                        (0, exports.vid)("Neural Networks from Scratch (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauAoOxyczvOAnAnT4Yx", "CampusX"),
                        (0, exports.vid)("Deep Learning Full Course (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU7TKgz8SAInSno_Y6G0z", "Krish Naik"),
                        (0, exports.vid)("Build NN from Scratch (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.doc)("Paper: Perceptrons", "https://archive.org/details/perceptronsintrostem00minsky"),
                        (0, exports.art)("Visualizing Neural Networks", "https://distill.pub/2016/misread-tsne/")
                    ]),
                    (0, exports.topic)("Backpropagation & Training Loops", [
                        (0, exports.vid)("Backpropagation Calculus (CampusX)", "https://www.youtube.com/watch?v=I67WInp6k-s", "CampusX"),
                        (0, exports.vid)("Optimizers in Deep Learning (Krish Naik)", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "Krish Naik"),
                        (0, exports.art)("The Bitter Lesson (Rich Sutton)", "http://www.incompleteideas.net/IncIdeas/BitterLesson.html")
                    ])
                ],
                project: {
                    title: "DIY Neural Engine",
                    description: ["Build a multi-layer perceptron using only NumPy", "Implement custom activation functions", "Train on MNIST dataset"],
                    outcomes: ["Deep understanding of gradients", "Mastering weight updates", "Foundation for Transformers"]
                }
            }
        ]
    },
    {
        id: "p1",
        title: "Phase 1: Backend Fundamentals & Microservices",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "m1.1",
                title: "Advanced Node.js Backend",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.t)("Event Loop Phases & Internals", "https://www.youtube.com/watch?v=8aGhZQkoFbQ", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"),
                    (0, exports.t)("Macrotasks vs Microtasks", "https://www.youtube.com/watch?v=8zKuNo4ay8E", "https://javascript.info/event-loop"),
                    (0, exports.t)("Node.js Clustering Module", "https://www.youtube.com/watch?v=9Sw_OUc_RY0", "https://nodejs.org/api/cluster.html"),
                    (0, exports.t)("Worker Threads for CPU tasks", "https://www.youtube.com/watch?v=mYP1ioHZDZ4", "https://nodejs.org/api/worker_threads.html"),
                    (0, exports.t)("Streams: Readable, Writable, Transform", "https://www.youtube.com/watch?v=GlybFFMXXmQ", "https://nodejs.org/api/stream.html"),
                    (0, exports.t)("Security: Helmet & Rate Limiting", "https://www.youtube.com/watch?v=0Hu27PoloYw", "https://helmetjs.github.io/"),
                    (0, exports.t)("Input Validation (Zod/Joi)", "https://www.youtube.com/watch?v=L6BE-U3oy80", "https://zod.dev/"),
                    (0, exports.topic)("DSA: Event Loop queues (Queues/Heaps)", [(0, exports.doc)("Node.js Event Loop", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/")])
                ],
                project: {
                    title: "High-Performance File Processing Service",
                    description: ["Build a service that processes large files", "Implement streaming for memory efficiency", "Add worker threads for CPU-intensive operations"],
                    outcomes: ["Understand Node.js internals (V8 engine semantics)", "Master Event Loop Task/Microtask mapping", "Scale single-threaded processes with clustering"]
                }
            },
            {
                id: "m1.2",
                title: "Microservices Architecture",
                weeks: "Week 3-4",
                topics: [
                    (0, exports.t)("API Gateway Pattern", "https://www.youtube.com/watch?v=6ULyxuHKxg8"),
                    (0, exports.t)("Service Discovery (Eureka/Consul)", "https://www.youtube.com/watch?v=OKsi6wsZTQ8"),
                    (0, exports.t)("Circuit Breaker (Resilience4j)", "https://www.youtube.com/watch?v=uRYe5zSfnkk"),
                    (0, exports.t)("Inter-service Communication: gRPC", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "https://grpc.io/docs/"),
                    (0, exports.t)("Distributed Tracing (Jaeger)", "https://www.youtube.com/watch?v=idDu_jXqf4E"),
                    (0, exports.t)("Saga Pattern for Transactions", "https://www.youtube.com/watch?v=xDuwrtwYHu8"),
                    (0, exports.topic)("DSA: Consistent Hashing for Service Discovery", [(0, exports.doc)("Wikipedia: Consistent Hashing", "https://en.wikipedia.org/wiki/Consistent_hashing")])
                ],
                project: {
                    title: "Multi-Service Authentication System",
                    description: ["Auth Service with JWT", "API Gateway with rate limiting", "Distributed tracing"],
                    outcomes: ["Architect distributed Node microservices", "Implement gRPC multiplexed streams", "Design scalable ring-hashing topologies"]
                }
            }
        ]
    },
    {
        id: "p2",
        title: "Phase 2: Databases & Vector Stores",
        weeks: "Weeks 5-8",
        modules: [
            {
                id: "m2.1",
                title: "Vector Databases & Embeddings",
                weeks: "Week 5-6",
                topics: [
                    (0, exports.t)("Vector Embeddings 101", "https://www.youtube.com/watch?v=5MaWmXwxFNQ"),
                    (0, exports.t)("PgVector Extension Setup", "https://www.youtube.com/watch?v=d0KYv65geeY", "https://github.com/pgvector/pgvector"),
                    (0, exports.t)("HNSW & IVFFlat Indexes", "https://www.youtube.com/watch?v=QvKMwLjdK-s"),
                    (0, exports.t)("Hybrid Search Implementation", "https://www.youtube.com/watch?v=dRUIGgNBvVk"),
                    (0, exports.t)("Chunking Strategies", "https://www.youtube.com/watch?v=8OJC21T2SL4"),
                    (0, exports.topic)("DSA: K-D Trees & HNSW for Vector Search", [(0, exports.doc)("Pinecone: HNSW", "https://www.pinecone.io/learn/series/faiss/hnsw/")])
                ],
                project: {
                    title: "Semantic Search Engine",
                    description: ["Document ingestion pipeline", "Embeddings with OpenAI", "Hybrid search"],
                    outcomes: ["Implement Hierarchical Navigable Small World graphs", "Build high-speed cosine similarity searches", "Master cross-encoder reranking"]
                }
            }
        ]
    },
    {
        id: "p3",
        title: "Phase 3: LLMs & RAG Systems",
        weeks: "Weeks 9-12",
        modules: [
            {
                id: "m3.1",
                title: "LLM Fundamentals & Prompting",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.t)("Transformer Architecture", "https://www.youtube.com/watch?v=SZorAJ4I-sA"),
                    (0, exports.t)("OpenAI/Anthropic APIs", "https://www.youtube.com/watch?v=uRQH2CFvedY", "https://platform.openai.com/docs/"),
                    (0, exports.t)("Zero-shot vs Few-shot", "https://www.youtube.com/watch?v=v2gD8BHOaX4"),
                    (0, exports.t)("Chain-of-Thought Prompting", "https://www.youtube.com/watch?v=Coj72EzmX20"),
                    (0, exports.t)("Function Calling / Tools", "https://www.youtube.com/watch?v=0-zlUy7VUjg"),
                    (0, exports.topic)("Whitepaper: Attention Is All You Need", [(0, exports.doc)("Arxiv: Attention", "https://arxiv.org/abs/1706.03762")])
                ],
                project: {
                    title: "AI Content Assistant",
                    description: ["Multi-model LLM layer", "Streaming responses", "Function calling"],
                    outcomes: ["Build programmatic agentic tool invocations", "Minimize hallucinations via system prompts", "Understand Attention matrix maths"]
                }
            },
            {
                id: "m3.2",
                title: "RAG (Retrieval-Augmented Generation)",
                weeks: "Week 11-12",
                topics: [
                    (0, exports.t)("RAG Architecture Workflow", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                    (0, exports.t)("Advanced RAG Patterns", "https://www.youtube.com/watch?v=sVcwVQRHIc8"),
                    (0, exports.t)("Reranking Models", "https://www.youtube.com/watch?v=9VgLi3wHNM0"),
                    (0, exports.t)("RAG Evaluation (Ragas)", "https://www.youtube.com/watch?v=ahnGLM-RC1Y", "https://docs.ragas.io/")
                ],
                project: {
                    title: "Enterprise Knowledge Base Q&A",
                    description: ["Smart chunking", "Retrieval with reranking", "Citation tracking"],
                    outcomes: ["Production RAG systems"]
                }
            },
            {
                id: "m3.3",
                title: "Build an LLM from Scratch",
                weeks: "Week 12-13",
                topics: [
                    (0, exports.topic)("Tokenization & Vocabulary", [
                        (0, exports.vid)("BPE & Tokenization Masterclass (CampusX)", "https://www.youtube.com/watch?v=zduSFxRajkE", "CampusX"),
                        (0, exports.vid)("Tokenization (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.art)("HuggingFace: Summary of the Tokenizers", "https://huggingface.co/docs/transformers/tokenizer_summary")
                    ]),
                    (0, exports.topic)("Architecture & Pre-training", [
                        (0, exports.vid)("Build GPT from Scratch (Andrej Karpathy)", "https://www.youtube.com/watch?v=kCc8FmEb1nY"),
                        (0, exports.vid)("LLM Architecture Deep Dive (Krish Naik)", "https://www.youtube.com/watch?v=uRQH2CFvedY", "Krish Naik"),
                        (0, exports.vid)("Build LLM from Scratch (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.doc)("Whitepaper: LLaMA - Open & Efficient Foundation Models", "https://arxiv.org/abs/2302.13971")
                    ])
                ],
                project: {
                    title: "Baby GPT",
                    description: ["Train a small Transformer model on a local dataset", "Implement custom BPE tokenizer", "Measure perplexity"],
                    outcomes: ["Understand Pre-training dynamics", "Master Transformer blocks", "Foundations for SLMs"]
                }
            },
            {
                id: "m3.4",
                title: "Fine-Tuning LLMs (LoRA/QLoRA)",
                weeks: "Week 14-15",
                topics: [
                    (0, exports.topic)("Instruction Fine-tuning & PEFT", [
                        (0, exports.vid)("Finetuning LLMs (Krish Naik)", "https://www.youtube.com/watch?v=idDu_jXqf4E", "Krish Naik"),
                        (0, exports.vid)("LoRA & QLoRA Explained (CampusX)", "https://www.youtube.com/watch?v=Vf8p_d086E4", "CampusX"),
                        (0, exports.vid)("PEFT Techniques (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.doc)("Whitepaper: LoRA - Low-Rank Adaptation", "https://arxiv.org/abs/2106.09685")
                    ]),
                    (0, exports.topic)("Model Evaluation & Weights & Biases", [
                        (0, exports.vid)("Evaluate LLM Quality (Krish Naik)", "https://www.youtube.com/watch?v=9VgLi3wHNM0"),
                        (0, exports.art)("DeepLearning.ai: Fine-tuning LLMs", "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/")
                    ])
                ],
                project: {
                    title: "Domain-Specific Assistant",
                    description: ["Fine-tune Llama-3/Mistral on a custom PDF dataset", "Use Unsloth for 2x faster training", "Deploy using Ollama"],
                    outcomes: ["Production model adapter management", "Efficient VRAM usage strategies", "Model Quantization mastery"]
                }
            }
        ]
    },
    {
        id: "p4",
        title: "Phase 4: Agentic AI",
        weeks: "Weeks 13-16",
        modules: [
            {
                id: "m4.1",
                title: "AI Agents & Workflows",
                weeks: "Week 13-16",
                topics: [
                    (0, exports.t)("ReAct Pattern", "https://www.youtube.com/watch?v=Eug2clsLtFs"),
                    (0, exports.t)("LangGraph State Management", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "https://langchain-ai.github.io/langgraph/"),
                    (0, exports.t)("Tool Definition & Schemas", "https://www.youtube.com/watch?v=TLf90ipMzfE"),
                    (0, exports.t)("Multi-Agent Collaboration", "https://www.youtube.com/watch?v=MxRn2N2DXvs"),
                    (0, exports.t)("Human-in-the-loop", "https://www.youtube.com/watch?v=9BPCV5TYWnk"),
                    (0, exports.topic)("Whitepaper: ReAct Framework", [(0, exports.doc)("Arxiv: ReAct", "https://arxiv.org/abs/2210.03629")])
                ],
                project: {
                    title: "AI Helpdesk Agent",
                    description: ["Multi-step ticket resolution", "Tool calling", "Workflow orchestration"],
                    outcomes: ["Build cyclic graph execution engines", "Implement ReAct (Reasoning & Acting) loop", "Master stateful conversational memory"]
                }
            }
        ]
    },
    {
        id: "p5",
        title: "Phase 5: Domain-Specific AI & Reasoning",
        weeks: "Weeks 17-20",
        modules: [
            {
                id: "m5.1",
                title: "Computer Vision & Visual LLMs",
                weeks: "Week 17-18",
                topics: [
                    (0, exports.topic)("CNN Fundamentals to ViT", [
                        (0, exports.vid)("CNN Full Course (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauAoOxyczvOAnAnT4Yx", "CampusX"),
                        (0, exports.vid)("Computer Vision (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B", "Krish Naik"),
                        (0, exports.vid)("Vision Transformers (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.doc)("Whitepaper: Vision Transformer (ViT)", "https://arxiv.org/abs/2010.11929")
                    ]),
                    (0, exports.topic)("Multi-modal Understanding", [
                        (0, exports.vid)("Multimodal LLMs Explained (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        (0, exports.art)("CLIP: Connecting Text and Images", "https://openai.com/research/clip")
                    ])
                ],
                project: {
                    title: "Visual Question Answering App",
                    description: ["Combine CLIP + Llama-3 for image reasoning", "Deploy as a Streamlit app", "Implement image-to-text retrieval"],
                    outcomes: ["Master Vision-Language bridging", "Build multi-modal RAG systems", "Deploy CV models at scale"]
                }
            },
            {
                id: "m5.2",
                title: "RL & Reasoning Models (Search/Reasoning)",
                weeks: "Week 19-20",
                topics: [
                    (0, exports.topic)("Reinforcement Learning Fundamentals", [
                        (0, exports.vid)("RL Full Course (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QzC67Y_S_TaqCOuuvY97", "Krish Naik"),
                        (0, exports.vid)("Policy Optimization (CampusX)", "https://www.youtube.com/@campusx-official", "CampusX"),
                        (0, exports.vid)("Reasoning in LLMs (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        (0, exports.doc)("Paper: RLHF - Training language models to follow instructions", "https://arxiv.org/abs/2203.02155")
                    ]),
                    (0, exports.topic)("Small Language Models (SLM) Optimization", [
                        (0, exports.vid)("Mobile AI & SLMs (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        (0, exports.doc)("Microsoft: Phi-3 Technical Report", "https://arxiv.org/abs/2404.14219"),
                        (0, exports.art)("Knowledge Distillation for LLMs", "https://towardsdatascience.com/knowledge-distillation-for-llms-d0e513511eb3")
                    ])
                ],
                project: {
                    title: "Reasoning Agent POC",
                    description: ["Implement Monte Carlo Tree Search for a simple task", "Apply DPO (Direct Preference Optimization) on a small model", "Optimize for mobile deployment"],
                    outcomes: ["Understand O1-style reasoning semantics", "Deploy ultra-efficient SLMs", "Master alignment techniques (RLHF/DPO)"]
                }
            }
        ]
    }
];
// ===== PLAN 2: BACKEND DEVELOPER PATH (SD3/SD4) =====
const backendPlan = [
    {
        id: "be-p1",
        title: "Phase 1: Programming Fundamentals",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "be-m1.1",
                title: "Core Programming & DSA",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.t)("Big O Notation & Complexity", "https://www.youtube.com/watch?v=D6xkbGLQesk", "https://www.bigocheatsheet.com/"),
                    (0, exports.t)("Arrays, Strings, HashMaps", "https://www.youtube.com/watch?v=8hly31xKli0"),
                    (0, exports.t)("Linked Lists & Trees", "https://www.youtube.com/watch?v=oSWTXtMglKE"),
                    (0, exports.t)("Graphs & BFS/DFS", "https://www.youtube.com/watch?v=pcKY4hjDrxk"),
                    (0, exports.t)("Dynamic Programming", "https://www.youtube.com/watch?v=oBt53YbR9Kk"),
                    (0, exports.t)("Sorting & Searching", "https://www.youtube.com/watch?v=pkkFqlG0Hds")
                ],
                project: {
                    title: "LeetCode 100 Problems",
                    description: ["Solve 100 medium-level problems", "Focus on patterns", "Time complexity analysis"],
                    outcomes: ["Strong DSA foundation", "Interview readiness"]
                }
            },
            {
                id: "be-m1.2",
                title: "JavaScript/TypeScript Deep Dive",
                weeks: "Week 3-4",
                topics: [
                    (0, exports.t)("Closures & Scope", "https://www.youtube.com/watch?v=qikxEIxsXco"),
                    (0, exports.t)("Prototypes & Classes", "https://www.youtube.com/watch?v=1UTqFnCoCWw"),
                    (0, exports.t)("Async/Await & Promises", "https://www.youtube.com/watch?v=V_Kr9OSfDeU"),
                    (0, exports.t)("TypeScript Generics", "https://www.youtube.com/watch?v=nViEqpgwxHE", "https://www.typescriptlang.org/docs/"),
                    (0, exports.t)("TypeScript Utility Types", "https://www.youtube.com/watch?v=EU0TB_8KHpY"),
                    (0, exports.t)("Error Handling Patterns", "https://www.youtube.com/watch?v=Pfiht1blqZQ")
                ],
                project: {
                    title: "TypeScript Utility Library",
                    description: ["Build custom utility functions", "Type-safe implementations", "Unit tests with Jest"],
                    outcomes: ["TypeScript mastery", "Clean code practices"]
                }
            }
        ]
    },
    {
        id: "be-p2",
        title: "Phase 2: Backend Core Concepts",
        weeks: "Weeks 5-8",
        modules: [
            {
                id: "be-m2.1",
                title: "Node.js & Express Deep Dive",
                weeks: "Week 5-6",
                topics: [
                    (0, exports.t)("Event Loop Internals", "https://www.youtube.com/watch?v=8aGhZQkoFbQ", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"),
                    (0, exports.t)("Clustering & Worker Threads", "https://www.youtube.com/watch?v=9Sw_OUc_RY0", "https://nodejs.org/api/cluster.html"),
                    (0, exports.t)("Streams & Buffers", "https://www.youtube.com/watch?v=GlybFFMXXmQ", "https://nodejs.org/api/stream.html"),
                    (0, exports.t)("Express Middleware Pattern", "https://www.youtube.com/watch?v=lY6icfhap2o"),
                    (0, exports.t)("Authentication (JWT/Sessions)", "https://www.youtube.com/watch?v=7Q17ubqLfaM"),
                    (0, exports.t)("Rate Limiting & Security", "https://www.youtube.com/watch?v=0Hu27PoloYw", "https://helmetjs.github.io/")
                ],
                project: {
                    title: "Production REST API",
                    description: ["User authentication system", "Role-based access control", "API documentation with Swagger"],
                    outcomes: ["Production-ready APIs", "Security best practices"]
                }
            },
            {
                id: "be-m2.2",
                title: "Database Mastery",
                weeks: "Week 7-8",
                topics: [
                    (0, exports.t)("PostgreSQL Advanced Queries", "https://www.youtube.com/watch?v=qw--VYLpxG4", "https://www.postgresql.org/docs/"),
                    (0, exports.t)("Indexing Strategies (B-Tree, GIN)", "https://www.youtube.com/watch?v=clrtT_4WBAw"),
                    (0, exports.t)("Query Optimization & EXPLAIN", "https://www.youtube.com/watch?v=NI9wYuVIYcA"),
                    (0, exports.t)("Transactions & ACID", "https://www.youtube.com/watch?v=4EajrPgJAk0"),
                    (0, exports.t)("Database Sharding", "https://www.youtube.com/watch?v=5faMjKuq9Js"),
                    (0, exports.t)("Replication & Failover", "https://www.youtube.com/watch?v=bI8Ry6GhMSE"),
                    (0, exports.t)("Redis Caching Patterns", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "https://redis.io/docs/"),
                    (0, exports.t)("MongoDB Aggregation", "https://www.youtube.com/watch?v=A3jvoE0jGdE", "https://www.mongodb.com/docs/"),
                    (0, exports.topic)("DSA: B-Trees & GIN Indexes", [(0, exports.doc)("Use The Index Luke", "https://use-the-index-luke.com/")])
                ],
                project: {
                    title: "E-Commerce Database Design",
                    description: ["Complex schema design", "Optimized queries", "Caching layer with Redis"],
                    outcomes: ["Design 3NF relational schemas", "Implement B-Tree query optimizers", "Master caching eviction algorithms (LRU/LFU)"]
                }
            }
        ]
    },
    {
        id: "be-p3",
        title: "Phase 3: System Design Fundamentals",
        weeks: "Weeks 9-12",
        modules: [
            {
                id: "be-m3.1",
                title: "Distributed Systems Basics",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.t)("CAP Theorem", "https://www.youtube.com/watch?v=k-Yaq8AHlFA"),
                    (0, exports.t)("Consistency Patterns", "https://www.youtube.com/watch?v=m4q7VkgDWRM"),
                    (0, exports.t)("Distributed Consensus (Raft/Paxos)", "https://www.youtube.com/watch?v=vYp4LYbnnW8"),
                    (0, exports.t)("Distributed Transactions", "https://www.youtube.com/watch?v=S4FnmSeRpAY"),
                    (0, exports.t)("Two-Phase Commit", "https://www.youtube.com/watch?v=-_rdWB9hN1c"),
                    (0, exports.t)("Saga Pattern", "https://www.youtube.com/watch?v=xDuwrtwYHu8"),
                    (0, exports.topic)("Whitepaper: Amazon Dynamo", [(0, exports.doc)("AllThingsDistributed", "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf")]),
                    (0, exports.topic)("Whitepaper: Raft Consensus", [(0, exports.doc)("Raft Github", "https://raft.github.io/raft.pdf")])
                ],
                project: {
                    title: "Distributed Key-Value Store",
                    description: ["Simple distributed storage", "Replication", "Consistency guarantees"],
                    outcomes: ["Architect split-brain tolerant clusters", "Enforce eventual vs strict consistency", "Implement leader election protocols"]
                }
            },
            {
                id: "be-m3.2",
                title: "Load Balancing & Scaling",
                weeks: "Week 11-12",
                topics: [
                    (0, exports.t)("Load Balancer Types (L4/L7)", "https://www.youtube.com/watch?v=sCR3SAVdyCc"),
                    (0, exports.t)("NGINX Configuration", "https://www.youtube.com/watch?v=7VAI73roXaY", "https://nginx.org/en/docs/"),
                    (0, exports.t)("HAProxy Deep Dive", "https://www.youtube.com/watch?v=aKMLgFVxZYk", "https://www.haproxy.org/"),
                    (0, exports.t)("Horizontal vs Vertical Scaling", "https://www.youtube.com/watch?v=sCR3SAVdyCc"),
                    (0, exports.t)("Auto-scaling Strategies", "https://www.youtube.com/watch?v=a4SicVoqKRU"),
                    (0, exports.t)("Connection Pooling", "https://www.youtube.com/watch?v=GTeCtIoV2Tw"),
                    (0, exports.t)("CDN & Edge Caching", "https://www.youtube.com/watch?v=RI9np1LWzqw")
                ],
                project: {
                    title: "Load-Balanced Application",
                    description: ["NGINX load balancer setup", "Multiple app instances", "Health checks & failover"],
                    outcomes: ["Load balancing mastery", "High availability"]
                }
            }
        ]
    },
    {
        id: "be-p4",
        title: "Phase 4: Advanced System Design",
        weeks: "Weeks 13-16",
        modules: [
            {
                id: "be-m4.1",
                title: "Message Queues & Event-Driven",
                weeks: "Week 13-14",
                topics: [
                    (0, exports.t)("Message Queue Patterns", "https://www.youtube.com/watch?v=O1PgqUqZKTA"),
                    (0, exports.t)("RabbitMQ Deep Dive", "https://www.youtube.com/watch?v=deG25y_r6OY", "https://www.rabbitmq.com/docs"),
                    (0, exports.t)("Apache Kafka Architecture", "https://www.youtube.com/watch?v=Ch5VhJzaoaI", "https://kafka.apache.org/documentation/"),
                    (0, exports.t)("Kafka Partitions & Consumer Groups", "https://www.youtube.com/watch?v=SqVfCyfCJqw"),
                    (0, exports.t)("Event Sourcing", "https://www.youtube.com/watch?v=STKCRSUsyP0"),
                    (0, exports.t)("CQRS Pattern", "https://www.youtube.com/watch?v=DQ3D_mplIgY"),
                    (0, exports.t)("Dead Letter Queues", "https://www.youtube.com/watch?v=nK-hfzr_X98")
                ],
                project: {
                    title: "Event-Driven Order System",
                    description: ["Kafka event streaming", "Multiple consumers", "Event sourcing for audit"],
                    outcomes: ["Event-driven architecture", "Async processing"]
                }
            },
            {
                id: "be-m4.2",
                title: "Microservices at Scale",
                weeks: "Week 15-16",
                topics: [
                    (0, exports.t)("API Gateway Pattern", "https://www.youtube.com/watch?v=6ULyxuHKxg8"),
                    (0, exports.t)("Service Mesh (Istio)", "https://www.youtube.com/watch?v=16fgzklcF7Y", "https://istio.io/latest/docs/"),
                    (0, exports.t)("Circuit Breaker Pattern", "https://www.youtube.com/watch?v=uRYe5zSfnkk"),
                    (0, exports.t)("Distributed Tracing (Jaeger)", "https://www.youtube.com/watch?v=idDu_jXqf4E", "https://www.jaegertracing.io/docs/"),
                    (0, exports.t)("Service Discovery", "https://www.youtube.com/watch?v=OKsi6wsZTQ8"),
                    (0, exports.t)("gRPC for Microservices", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "https://grpc.io/docs/"),
                    (0, exports.t)("API Versioning Strategies", "https://www.youtube.com/watch?v=fWTRzUJG-5A")
                ],
                project: {
                    title: "Microservices Platform",
                    description: ["5+ microservices", "Service mesh with Istio", "Full observability"],
                    outcomes: ["Production microservices", "Enterprise patterns"]
                }
            }
        ]
    },
    {
        id: "be-p5",
        title: "Phase 5: Cloud & DevOps",
        weeks: "Weeks 17-20",
        modules: [
            {
                id: "be-m5.1",
                title: "Containerization & Kubernetes",
                weeks: "Week 17-18",
                topics: [
                    (0, exports.t)("Docker Best Practices", "https://www.youtube.com/watch?v=8vmKtS8W7IQ", "https://docs.docker.com/"),
                    (0, exports.t)("Multi-stage Builds", "https://www.youtube.com/watch?v=zpkqNPwEzac"),
                    (0, exports.t)("Kubernetes Architecture", "https://www.youtube.com/watch?v=X48VuDVv0do", "https://kubernetes.io/docs/"),
                    (0, exports.t)("Pods, Services, Deployments", "https://www.youtube.com/watch?v=NPFbYpb0I7w"),
                    (0, exports.t)("ConfigMaps & Secrets", "https://www.youtube.com/watch?v=FAnQTgr04mU"),
                    (0, exports.t)("Helm Charts", "https://www.youtube.com/watch?v=-ykwb1d0DXU", "https://helm.sh/docs/"),
                    (0, exports.t)("Horizontal Pod Autoscaling", "https://www.youtube.com/watch?v=uxuyPru3_Lc"),
                    (0, exports.t)("K8s Networking & Ingress", "https://www.youtube.com/watch?v=NPFbYpb0I7w")
                ],
                project: {
                    title: "K8s Production Deployment",
                    description: ["Full K8s cluster setup", "All services containerized", "Auto-scaling configured"],
                    outcomes: ["Kubernetes mastery", "Container orchestration"]
                }
            },
            {
                id: "be-m5.2",
                title: "AWS Cloud Architecture",
                weeks: "Week 19-20",
                topics: [
                    (0, exports.t)("AWS VPC & Networking", "https://www.youtube.com/watch?v=2doSoMN2xvI", "https://docs.aws.amazon.com/vpc/"),
                    (0, exports.t)("EC2 & Auto Scaling Groups", "https://www.youtube.com/watch?v=8TlukLu11Yo", "https://docs.aws.amazon.com/ec2/"),
                    (0, exports.t)("ECS vs EKS", "https://www.youtube.com/watch?v=AYAh6YDXuho"),
                    (0, exports.t)("RDS & Aurora", "https://www.youtube.com/watch?v=OfZgHXsKqNE", "https://docs.aws.amazon.com/rds/"),
                    (0, exports.t)("ElastiCache (Redis)", "https://www.youtube.com/watch?v=m5JpPNsXsHI"),
                    (0, exports.t)("AWS Lambda & Serverless", "https://www.youtube.com/watch?v=eOBq__h4OJ4", "https://docs.aws.amazon.com/lambda/"),
                    (0, exports.t)("CloudWatch & X-Ray", "https://www.youtube.com/watch?v=vAnIhIwE5hY"),
                    (0, exports.t)("IAM Best Practices", "https://www.youtube.com/watch?v=iF9fs8Rw4Uo")
                ],
                project: {
                    title: "AWS Production Architecture",
                    description: ["Multi-AZ deployment", "EKS cluster", "Full monitoring stack"],
                    outcomes: ["AWS Solutions Architect level", "Cloud architecture"]
                }
            }
        ]
    },
    {
        id: "be-p6",
        title: "Phase 6: SD3/SD4 Level Expertise",
        weeks: "Weeks 21-24",
        modules: [
            {
                id: "be-m6.1",
                title: "System Design Interviews",
                weeks: "Week 21-22",
                topics: [
                    (0, exports.t)("Design URL Shortener", "https://www.youtube.com/watch?v=fMZMm_0ZhK4"),
                    (0, exports.t)("Design Twitter/X Timeline", "https://www.youtube.com/watch?v=wYk0xPP_P_8"),
                    (0, exports.t)("Design WhatsApp/Messenger", "https://www.youtube.com/watch?v=vvhC64hQZMk"),
                    (0, exports.t)("Design YouTube/Netflix", "https://www.youtube.com/watch?v=psQzyFfsUGU"),
                    (0, exports.t)("Design Uber/Lyft", "https://www.youtube.com/watch?v=umWABit-wbk"),
                    (0, exports.t)("Design Payment System", "https://www.youtube.com/watch?v=olfaBgJrUBI"),
                    (0, exports.t)("Rate Limiter Design", "https://www.youtube.com/watch?v=FU4WlwfS3G0")
                ],
                project: {
                    title: "System Design Portfolio",
                    description: ["10 system design docs", "Trade-off analysis", "Interview ready"],
                    outcomes: ["Senior-level system design", "Interview mastery"]
                }
            },
            {
                id: "be-m6.2",
                title: "Production Excellence",
                weeks: "Week 23-24",
                topics: [
                    (0, exports.t)("SRE Principles", "https://www.youtube.com/watch?v=uTEL8Ff1Zvk", "https://sre.google/sre-book/table-of-contents/"),
                    (0, exports.t)("SLOs, SLIs, SLAs", "https://www.youtube.com/watch?v=tEylFyxbDLE"),
                    (0, exports.t)("Chaos Engineering", "https://www.youtube.com/watch?v=MhdW_EGycmw"),
                    (0, exports.t)("Production Debugging", "https://www.youtube.com/watch?v=jA_F94FPEv8"),
                    (0, exports.t)("Performance Profiling", "https://www.youtube.com/watch?v=LaxbdIyBkL0"),
                    (0, exports.t)("Incident Management", "https://www.youtube.com/watch?v=r1yNZ_BrHfY"),
                    (0, exports.t)("Technical Leadership", "https://www.youtube.com/watch?v=1K7BdaAsjTQ")
                ],
                project: {
                    title: "Full Production System",
                    description: ["Complete production app", "Full observability", "Runbooks & documentation"],
                    outcomes: ["SD3/SD4 ready", "Production ownership"]
                }
            }
        ]
    }
];
// ===== PLAN 3: AGENTIC AI ARCHITECT =====
const agenticAIPlan = [
    {
        id: "ai-p1",
        title: "Phase 1: AI Foundations",
        weeks: "Weeks 1-3",
        modules: [
            {
                id: "ai-m1.1",
                title: "LLM & Prompt Engineering",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.t)("Transformer Architecture", "https://www.youtube.com/watch?v=SZorAJ4I-sA"),
                    (0, exports.t)("Attention Mechanism Deep Dive", "https://www.youtube.com/watch?v=eMlx5fFNoYc"),
                    (0, exports.t)("Tokenization Strategies", "https://www.youtube.com/watch?v=zduSFxRajkE"),
                    (0, exports.t)("Zero-shot vs Few-shot Learning", "https://www.youtube.com/watch?v=v2gD8BHOaX4"),
                    (0, exports.t)("Chain-of-Thought Prompting", "https://www.youtube.com/watch?v=Coj72EzmX20"),
                    (0, exports.t)("Self-Consistency Prompting", "https://www.youtube.com/watch?v=0XHkWxPAeHw"),
                    (0, exports.t)("Tree-of-Thoughts", "https://www.youtube.com/watch?v=ut5kp56wW_4"),
                    (0, exports.t)("Prompt Injection & Safety", "https://www.youtube.com/watch?v=P2ElwzQMR-c"),
                    (0, exports.topic)("Whitepaper: Tree of Thoughts", [(0, exports.doc)("Arxiv: ToT", "https://arxiv.org/abs/2305.10601")]),
                    (0, exports.topic)("Whitepaper: Chain of Thought", [(0, exports.doc)("Google Research", "https://arxiv.org/abs/2201.11903")])
                ],
                project: {
                    title: "Advanced Prompt Library",
                    description: ["50+ production prompts", "Evaluation framework", "A/B testing system"],
                    outcomes: ["Expert prompt engineering"]
                }
            },
            {
                id: "ai-m1.2",
                title: "Function Calling & Tools",
                weeks: "Week 3",
                topics: [
                    (0, exports.t)("OpenAI Function Calling", "https://www.youtube.com/watch?v=0-zlUy7VUjg", "https://platform.openai.com/docs/guides/function-calling"),
                    (0, exports.t)("Tool Schema Definition", "https://www.youtube.com/watch?v=TLf90ipMzfE"),
                    (0, exports.t)("Parallel Tool Execution", "https://www.youtube.com/watch?v=JdVwXZxYqs8"),
                    (0, exports.t)("Error Handling in Tools", "https://www.youtube.com/watch?v=6etT4oH-3oM"),
                    (0, exports.t)("Custom Tool Development", "https://www.youtube.com/watch?v=mrjq3lFz23k")
                ],
                project: {
                    title: "Tool Integration Framework",
                    description: ["Multi-tool orchestration", "Error recovery", "Logging & monitoring"],
                    outcomes: ["Tool integration expertise"]
                }
            }
        ]
    },
    {
        id: "ai-p2",
        title: "Phase 2: Agent Architectures",
        weeks: "Weeks 4-7",
        modules: [
            {
                id: "ai-m2.1",
                title: "Core Agent Patterns",
                weeks: "Week 4-5",
                topics: [
                    (0, exports.t)("ReAct Pattern (Reasoning + Acting)", "https://www.youtube.com/watch?v=Eug2clsLtFs", "https://arxiv.org/abs/2210.03629"),
                    (0, exports.t)("Plan-and-Execute Pattern", "https://www.youtube.com/watch?v=QLC5ij_8Cek"),
                    (0, exports.t)("Reflexion Pattern", "https://www.youtube.com/watch?v=5SxFx5P6DEs"),
                    (0, exports.t)("LATS (Language Agent Tree Search)", "https://www.youtube.com/watch?v=xQBNnWmA4-U"),
                    (0, exports.t)("Self-Ask Pattern", "https://www.youtube.com/watch?v=Tx_kV3Yv7Lg"),
                    (0, exports.t)("Agent Loop Architecture", "https://www.youtube.com/watch?v=DjuXACWYkkU"),
                    (0, exports.topic)("Whitepaper: Reflexion", [(0, exports.doc)("Arxiv: Reflexion", "https://arxiv.org/abs/2303.11366")]),
                    (0, exports.topic)("Whitepaper: ReAct", [(0, exports.doc)("Google: ReAct", "https://arxiv.org/abs/2210.03629")]),
                    (0, exports.topic)("Whitepaper: LATS", [(0, exports.doc)("Arxiv: LATS", "https://arxiv.org/abs/2310.04406")])
                ],
                project: {
                    title: "Multi-Pattern Agent",
                    description: ["Implement 5 agent patterns", "Pattern selection logic", "Performance comparison"],
                    outcomes: ["Agent pattern mastery"]
                }
            },
            {
                id: "ai-m2.2",
                title: "Memory Systems",
                weeks: "Week 6-7",
                topics: [
                    (0, exports.t)("Short-term Memory (Context)", "https://www.youtube.com/watch?v=6D-W16J_KYk"),
                    (0, exports.t)("Long-term Memory (Vector DB)", "https://www.youtube.com/watch?v=d0KYv65geeY"),
                    (0, exports.t)("Episodic Memory", "https://www.youtube.com/watch?v=TRjq7t2Ms5I"),
                    (0, exports.t)("Semantic Memory", "https://www.youtube.com/watch?v=5MaWmXwxFNQ"),
                    (0, exports.t)("Memory Retrieval Strategies", "https://www.youtube.com/watch?v=9VgLi3wHNM0"),
                    (0, exports.t)("Memory Summarization", "https://www.youtube.com/watch?v=2YCZpJ4aXdk"),
                    (0, exports.t)("Conversation Buffer Management", "https://www.youtube.com/watch?v=kn7Yg3Ohsuw")
                ],
                project: {
                    title: "Intelligent Memory System",
                    description: ["Hybrid memory architecture", "Automatic summarization", "Context management"],
                    outcomes: ["Memory system design"]
                }
            }
        ]
    },
    {
        id: "ai-p3",
        title: "Phase 3: Workflow Orchestration",
        weeks: "Weeks 8-11",
        modules: [
            {
                id: "ai-m3.1",
                title: "LangGraph & State Machines",
                weeks: "Week 8-9",
                topics: [
                    (0, exports.t)("LangGraph Fundamentals", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "https://langchain-ai.github.io/langgraph/"),
                    (0, exports.t)("State Graph Design", "https://www.youtube.com/watch?v=HqGY8H8SXjo"),
                    (0, exports.t)("Conditional Edges", "https://www.youtube.com/watch?v=bq1_jWb3j5g"),
                    (0, exports.t)("Checkpointing & Persistence", "https://www.youtube.com/watch?v=9FOeTmLKPzY"),
                    (0, exports.t)("Human-in-the-Loop", "https://www.youtube.com/watch?v=9BPCV5TYWnk"),
                    (0, exports.t)("Parallel Node Execution", "https://www.youtube.com/watch?v=sJ5lK8mH8dM"),
                    (0, exports.t)("Subgraphs & Composition", "https://www.youtube.com/watch?v=v8V3P8Xl0R8"),
                    (0, exports.t)("Error Handling & Retries", "https://www.youtube.com/watch?v=9T4sxjNJCqo")
                ],
                project: {
                    title: "Complex Workflow Engine",
                    description: ["Multi-step workflows", "Human approval gates", "Parallel execution"],
                    outcomes: ["LangGraph expert"]
                }
            },
            {
                id: "ai-m3.2",
                title: "Multi-Agent Systems",
                weeks: "Week 10-11",
                topics: [
                    (0, exports.t)("Multi-Agent Collaboration", "https://www.youtube.com/watch?v=MxRn2N2DXvs"),
                    (0, exports.t)("CrewAI Framework", "https://www.youtube.com/watch?v=sPzc6hMg7So", "https://docs.crewai.com/"),
                    (0, exports.t)("AutoGen Multi-Agent", "https://www.youtube.com/watch?v=vU2S6dVf79M", "https://microsoft.github.io/autogen/"),
                    (0, exports.t)("Agent Communication Protocols", "https://www.youtube.com/watch?v=RwGXj-DQMUI"),
                    (0, exports.t)("Task Delegation Patterns", "https://www.youtube.com/watch?v=F7LnXw3Wzjs"),
                    (0, exports.t)("Supervisor Agent Pattern", "https://www.youtube.com/watch?v=hvAPnpSfSGo"),
                    (0, exports.t)("Debate & Consensus", "https://www.youtube.com/watch?v=Xf_lDMvZT-w")
                ],
                project: {
                    title: "Multi-Agent Research Team",
                    description: ["5+ specialized agents", "Task delegation", "Consensus mechanisms"],
                    outcomes: ["Multi-agent architecture"]
                }
            }
        ]
    },
    {
        id: "ai-p4",
        title: "Phase 4: Production Agentic Systems",
        weeks: "Weeks 12-15",
        modules: [
            {
                id: "ai-m4.1",
                title: "RAG for Agents",
                weeks: "Week 12-13",
                topics: [
                    (0, exports.t)("Agentic RAG Patterns", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                    (0, exports.t)("Self-RAG (Self-Reflective)", "https://www.youtube.com/watch?v=B9GOzWz0VZw"),
                    (0, exports.t)("Corrective RAG", "https://www.youtube.com/watch?v=E2shqsYwxck"),
                    (0, exports.t)("Adaptive RAG", "https://www.youtube.com/watch?v=gRm8p2cMwJg"),
                    (0, exports.t)("Query Decomposition", "https://www.youtube.com/watch?v=TRjq7t2Ms5I"),
                    (0, exports.t)("Multi-hop Retrieval", "https://www.youtube.com/watch?v=FLn8f8PaLwA"),
                    (0, exports.t)("Source Grounding", "https://www.youtube.com/watch?v=Eo8dR5qMsUI")
                ],
                project: {
                    title: "Self-Improving RAG Agent",
                    description: ["Self-correcting retrieval", "Query expansion", "Source verification"],
                    outcomes: ["Advanced RAG patterns"]
                }
            },
            {
                id: "ai-m4.2",
                title: "Evaluation & Testing",
                weeks: "Week 14-15",
                topics: [
                    (0, exports.t)("Agent Evaluation Metrics", "https://www.youtube.com/watch?v=2CIIQ5KZWUM"),
                    (0, exports.t)("LangSmith Tracing", "https://www.youtube.com/watch?v=tFXm5ijih98", "https://smith.langchain.com/"),
                    (0, exports.t)("Ragas for RAG Eval", "https://www.youtube.com/watch?v=ahnGLM-RC1Y", "https://docs.ragas.io/"),
                    (0, exports.t)("DeepEval Framework", "https://www.youtube.com/watch?v=Op3P_Xy-YIg", "https://docs.confident-ai.com/"),
                    (0, exports.t)("A/B Testing Agents", "https://www.youtube.com/watch?v=Jl0gBNn4U7w"),
                    (0, exports.t)("Cost Optimization", "https://www.youtube.com/watch?v=2xOVFezBmIY"),
                    (0, exports.t)("Latency Optimization", "https://www.youtube.com/watch?v=rvBSPRQ4F6Y")
                ],
                project: {
                    title: "Agent Testing Framework",
                    description: ["Comprehensive test suite", "Regression testing", "Performance benchmarks"],
                    outcomes: ["Production testing expertise"]
                }
            }
        ]
    },
    {
        id: "ai-p5",
        title: "Phase 5: Enterprise Agentic AI",
        weeks: "Weeks 16-20",
        modules: [
            {
                id: "ai-m5.1",
                title: "Production Deployment",
                weeks: "Week 16-17",
                topics: [
                    (0, exports.t)("Agent API Design", "https://www.youtube.com/watch?v=1K7BdaAsjTQ"),
                    (0, exports.t)("Streaming Responses", "https://www.youtube.com/watch?v=rvBSPRQ4F6Y"),
                    (0, exports.t)("WebSocket for Real-time", "https://www.youtube.com/watch?v=1BfCnjr_Vjg"),
                    (0, exports.t)("Queue-based Architecture", "https://www.youtube.com/watch?v=O1PgqUqZKTA"),
                    (0, exports.t)("Observability Setup", "https://www.youtube.com/watch?v=tFXm5ijih98"),
                    (0, exports.t)("Error Recovery Patterns", "https://www.youtube.com/watch?v=uRYe5zSfnkk"),
                    (0, exports.t)("Rate Limiting & Quotas", "https://www.youtube.com/watch?v=FU4WlwfS3G0")
                ],
                project: {
                    title: "Production Agent Platform",
                    description: ["Scalable agent APIs", "Full observability", "Error recovery"],
                    outcomes: ["Production deployment"]
                }
            },
            {
                id: "ai-m5.2",
                title: "Enterprise Use Cases",
                weeks: "Week 18-20",
                topics: [
                    (0, exports.t)("Customer Support Agent", "https://www.youtube.com/watch?v=Eug2clsLtFs"),
                    (0, exports.t)("Research Assistant Agent", "https://www.youtube.com/watch?v=MxRn2N2DXvs"),
                    (0, exports.t)("Code Generation Agent", "https://www.youtube.com/watch?v=QLC5ij_8Cek"),
                    (0, exports.t)("Data Analysis Agent", "https://www.youtube.com/watch?v=TRjq7t2Ms5I"),
                    (0, exports.t)("Document Processing Agent", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                    (0, exports.t)("Workflow Automation Agent", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g"),
                    (0, exports.t)("Sales & CRM Agent", "https://www.youtube.com/watch?v=hvAPnpSfSGo")
                ],
                project: {
                    title: "Enterprise Agent Suite",
                    description: ["3+ production agents", "Integration with enterprise systems", "Complete documentation"],
                    outcomes: ["Enterprise AI implementation"]
                }
            }
        ]
    }
];
// ===== PLAN 4: API GATEWAY ENGINEER =====
const apiGatewayPlan = [
    {
        id: "gw-p1",
        title: "Phase 1: Foundations",
        weeks: "Weeks 1-2",
        modules: [
            {
                id: "gw-m1.1",
                title: "Core Concepts & HTTP Deep Dive",
                weeks: "Week 1",
                topics: [
                    (0, exports.topic)("What is an API Gateway?", [
                        (0, exports.vid)("API Gateway Explained", "https://www.youtube.com/watch?v=6ULyxuHKxg8", "Hussein Nasser"),
                        (0, exports.doc)("AWS API Gateway Concepts", "https://docs.aws.amazon.com/apigateway/"),
                        (0, exports.art)("API Gateway Pattern", "https://microservices.io/patterns/apigateway.html", "Chris Richardson")
                    ]),
                    (0, exports.topic)("HTTP/HTTPS Protocols Deep Dive", [
                        (0, exports.playlist)("HTTP Crash Course", "https://www.youtube.com/watch?v=iYM2zFP3Zn0", "Traversy Media"),
                        (0, exports.doc)("MDN HTTP Guide", "https://developer.mozilla.org/en-US/docs/Web/HTTP"),
                        (0, exports.art)("HTTP/2 vs HTTP/3", "https://blog.cloudflare.com/http3-the-past-present-and-future/", "Cloudflare")
                    ]),
                    (0, exports.topic)("RESTful API Principles", [
                        (0, exports.vid)("REST API Tutorial", "https://www.youtube.com/watch?v=SLwpqD8n3d0", "Programming with Mosh"),
                        (0, exports.doc)("REST API Design Guide", "https://restfulapi.net/"),
                        (0, exports.art)("Best Practices for REST API Design", "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/", "Stack Overflow")
                    ]),
                    (0, exports.topic)("Request/Response Lifecycle", [
                        (0, exports.vid)("How the Internet Works", "https://www.youtube.com/watch?v=7_LPdttKXPc", "Aaron Jack"),
                        (0, exports.art)("Journey of a Request", "https://aws.amazon.com/blogs/architecture/", "AWS Architecture Blog")
                    ]),
                    (0, exports.topic)("HTTP Status Codes (2xx, 3xx, 4xx, 5xx)", [
                        (0, exports.vid)("HTTP Status Codes Explained", "https://www.youtube.com/watch?v=VLH3FMQ5BIg", "Web Dev Simplified"),
                        (0, exports.doc)("HTTP Status Codes", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status")
                    ]),
                    (0, exports.topic)("Headers: Authorization, CORS, Content-Type", [
                        (0, exports.vid)("CORS in 100 Seconds", "https://www.youtube.com/watch?v=4KHiSt0oLJ0", "Fireship"),
                        (0, exports.doc)("HTTP Headers", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers")
                    ]),
                    (0, exports.topic)("DNS and Domain Resolution", [
                        (0, exports.vid)("DNS Explained", "https://www.youtube.com/watch?v=72snZctFFtA", "Fireship"),
                        (0, exports.art)("How DNS Works", "https://howdns.works/", "DNSimple")
                    ])
                ],
                project: {
                    title: "HTTP Request Analyzer",
                    description: ["Build tool to analyze HTTP requests", "Parse headers, body, query params", "Display request lifecycle timing"],
                    outcomes: ["Deep HTTP understanding", "Request/response analysis skills"]
                }
            },
            {
                id: "gw-m1.2",
                title: "Gateway Architecture & Patterns",
                weeks: "Week 2",
                topics: [
                    (0, exports.topic)("Reverse Proxy Pattern", [
                        (0, exports.vid)("Reverse Proxy vs Forward Proxy", "https://www.youtube.com/watch?v=ozhe__GdWC8", "Hussein Nasser"),
                        (0, exports.doc)("NGINX Reverse Proxy", "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/")
                    ]),
                    (0, exports.topic)("Load Balancing Strategies", [
                        (0, exports.vid)("Load Balancing Algorithms", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        (0, exports.art)("Load Balancing", "https://www.nginx.com/resources/glossary/load-balancing/", "NGINX")
                    ]),
                    (0, exports.topic)("Request Router & Pattern Matching", [
                        (0, exports.vid)("URL Routing Explained", "https://www.youtube.com/watch?v=SLwpqD8n3d0", "Traversy Media"),
                        (0, exports.doc)("Express Routing", "https://expressjs.com/en/guide/routing.html"),
                        (0, exports.topic)("DSA: Tries for Fast Route Matching", [(0, exports.doc)("Wikipedia: Trie", "https://en.wikipedia.org/wiki/Trie")])
                    ]),
                    (0, exports.topic)("Middleware Pipeline (Chain of Responsibility)", [
                        (0, exports.vid)("Middleware Explained", "https://www.youtube.com/watch?v=lY6icfhap2o", "Web Dev Simplified"),
                        (0, exports.art)("Middleware Pattern", "https://www.patterns.dev/posts/middleware-pattern", "patterns.dev")
                    ]),
                    (0, exports.topic)("Connection Pooling", [
                        (0, exports.vid)("Connection Pooling", "https://www.youtube.com/watch?v=GTeCtIoV2Tw", "Hussein Nasser"),
                        (0, exports.art)("Database Connection Pools", "https://www.cockroachlabs.com/blog/what-is-connection-pooling/", "CockroachDB")
                    ]),
                    (0, exports.topic)("Circuit Breaker Pattern", [
                        (0, exports.vid)("Circuit Breaker Explained", "https://www.youtube.com/watch?v=uRYe5zSfnkk", "Hussein Nasser"),
                        (0, exports.art)("Circuit Breaker", "https://martinfowler.com/bliki/CircuitBreaker.html", "Martin Fowler")
                    ])
                ],
                project: {
                    title: "Gateway Architecture Diagram",
                    description: ["Create architecture diagrams", "Document request flow", "Identify failure points"],
                    outcomes: ["Design robust scalable API topologies", "Understand proxy connection pooling maths", "Visualize traffic routing paths"]
                }
            }
        ]
    },
    {
        id: "gw-p2",
        title: "Phase 2: Hands-on Fundamentals",
        weeks: "Weeks 3-4",
        modules: [
            {
                id: "gw-m2.1",
                title: "Build Simple Gateway from Scratch",
                weeks: "Week 3",
                topics: [
                    (0, exports.topic)("HTTP Server with Node.js http module", [
                        (0, exports.vid)("Node.js HTTP Module", "https://www.youtube.com/watch?v=VShtPwEkDD0", "The Net Ninja"),
                        (0, exports.doc)("Node.js HTTP", "https://nodejs.org/api/http.html")
                    ]),
                    (0, exports.topic)("Basic Routing Implementation", [
                        (0, exports.vid)("Build Express from Scratch", "https://www.youtube.com/watch?v=L72fhGm1tfE", "Web Dev Simplified"),
                        (0, exports.art)("Building a Router", "https://blog.logrocket.com/build-your-own-express-router/", "LogRocket")
                    ]),
                    (0, exports.topic)("Proxy Pattern with http-proxy", [
                        (0, exports.vid)("Node.js Proxy", "https://www.youtube.com/watch?v=wVnimcQsNtM", "Hussein Nasser"),
                        (0, exports.doc)("http-proxy library", "https://github.com/http-party/node-http-proxy")
                    ]),
                    (0, exports.topic)("Request Logging Middleware", [
                        (0, exports.vid)("Morgan Logging", "https://www.youtube.com/watch?v=FM-FTauz8ho", "Traversy Media"),
                        (0, exports.doc)("Winston Logger", "https://github.com/winstonjs/winston")
                    ]),
                    (0, exports.topic)("JWT Authentication Middleware", [
                        (0, exports.vid)("JWT Authentication", "https://www.youtube.com/watch?v=7Q17ubqLfaM", "Web Dev Simplified"),
                        (0, exports.doc)("jsonwebtoken", "https://github.com/auth0/node-jsonwebtoken")
                    ]),
                    (0, exports.topic)("Rate Limiter (In-memory ΓåÆ Redis)", [
                        (0, exports.vid)("Rate Limiting Algorithms", "https://www.youtube.com/watch?v=FU4WlwfS3G0", "ByteByteGo"),
                        (0, exports.art)("Rate Limiting Strategies", "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/", "Cloudflare")
                    ])
                ],
                project: {
                    title: "Simple API Gateway v1",
                    description: ["HTTP server with routing", "Proxy to backend services", "Logging and auth middleware", "Basic rate limiting"],
                    outcomes: ["Implement Trie-based URL routers", "Build middleware interceptors", "Master rolling-window rate limiting algorithms"]
                }
            },
            {
                id: "gw-m2.2",
                title: "Advanced Gateway Features",
                weeks: "Week 4",
                topics: [
                    (0, exports.topic)("Caching Layer (node-cache ΓåÆ Redis)", [
                        (0, exports.vid)("Redis Caching", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "Traversy Media"),
                        (0, exports.doc)("Redis Docs", "https://redis.io/docs/"),
                        (0, exports.topic)("DSA: LRU & LFU Cache Eviction", [(0, exports.doc)("Wikipedia: Cache Replacement", "https://en.wikipedia.org/wiki/Cache_replacement_policies")])
                    ]),
                    (0, exports.topic)("Circuit Breaker with Opossum", [
                        (0, exports.vid)("Implementing Circuit Breaker", "https://www.youtube.com/watch?v=ADHcBxEXvFA", "DevOps Directive"),
                        (0, exports.doc)("Opossum", "https://nodeshift.dev/opossum/")
                    ]),
                    (0, exports.topic)("Request/Response Validation (Joi/Zod)", [
                        (0, exports.vid)("Zod Validation", "https://www.youtube.com/watch?v=L6BE-U3oy80", "Matt Pocock"),
                        (0, exports.doc)("Zod Docs", "https://zod.dev/")
                    ]),
                    (0, exports.topic)("API Key Management", [
                        (0, exports.vid)("API Key Auth", "https://www.youtube.com/watch?v=eFxT-VCLxXA", "Traversy Media"),
                        (0, exports.art)("API Key Best Practices", "https://cloud.google.com/docs/authentication/api-keys", "Google Cloud")
                    ]),
                    (0, exports.topic)("Metrics Collection (Response times, Error rates)", [
                        (0, exports.vid)("Prometheus Metrics", "https://www.youtube.com/watch?v=h4Sl21AKiDg", "TechWorld with Nana"),
                        (0, exports.doc)("prom-client", "https://github.com/siimon/prom-client")
                    ]),
                    (0, exports.topic)("Health Check Endpoints", [
                        (0, exports.vid)("Health Checks Best Practices", "https://www.youtube.com/watch?v=mxlJqrSG4vQ", "IBM Technology"),
                        (0, exports.art)("Health Check Patterns", "https://microservices.io/patterns/health-check-api.html")
                    ])
                ],
                project: {
                    title: "Simple API Gateway v2",
                    description: ["Add caching layer", "Circuit breaker integration", "Metrics endpoint", "Health checks"],
                    outcomes: ["Production-ready features", "Observability basics"]
                }
            }
        ]
    },
    {
        id: "gw-p3",
        title: "Phase 3: Production-Grade Patterns",
        weeks: "Weeks 5-6",
        modules: [
            {
                id: "gw-m3.1",
                title: "Service Discovery & Advanced Routing",
                weeks: "Week 5",
                topics: [
                    (0, exports.topic)("Service Registry (Consul/etcd)", [
                        (0, exports.vid)("Consul Service Discovery", "https://www.youtube.com/watch?v=OKsi6wsZTQ8", "HashiCorp"),
                        (0, exports.doc)("Consul Docs", "https://developer.hashicorp.com/consul/docs")
                    ]),
                    (0, exports.topic)("Dynamic Route Registration", [
                        (0, exports.vid)("Dynamic Routing", "https://www.youtube.com/watch?v=lZndBxJ0VR4", "Kong"),
                        (0, exports.doc)("Kong Routing", "https://docs.konghq.com/gateway/latest/key-concepts/routes/")
                    ]),
                    (0, exports.topic)("Path-based vs Header-based Routing", [
                        (0, exports.vid)("API Versioning Strategies", "https://www.youtube.com/watch?v=fWTRzUJG-5A", "AmigosCode"),
                        (0, exports.art)("Routing Strategies", "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html", "AWS")
                    ]),
                    (0, exports.topic)("Canary Deployments (Traffic Splitting)", [
                        (0, exports.vid)("Canary Deployments", "https://www.youtube.com/watch?v=3IJ5ko1FGHI", "TechWorld with Nana"),
                        (0, exports.art)("Traffic Splitting", "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration", "Google Cloud")
                    ]),
                    (0, exports.topic)("A/B Testing Support", [
                        (0, exports.vid)("A/B Testing Architecture", "https://www.youtube.com/watch?v=1fYw8eCNW-A", "InfoQ"),
                        (0, exports.art)("Feature Flags", "https://martinfowler.com/articles/feature-toggles.html", "Martin Fowler")
                    ])
                ],
                project: {
                    title: "E-Commerce Gateway - Service Discovery",
                    description: ["Consul integration", "Dynamic service registration", "Weighted routing", "Canary setup"],
                    outcomes: ["Service discovery mastery", "Traffic management"]
                }
            },
            {
                id: "gw-m3.2",
                title: "Authentication & API Composition",
                weeks: "Week 6",
                topics: [
                    (0, exports.topic)("OAuth 2.0 Integration (Google, GitHub)", [
                        (0, exports.vid)("OAuth 2.0 Explained", "https://www.youtube.com/watch?v=996OiexHze0", "Hussein Nasser"),
                        (0, exports.doc)("OAuth 2.0", "https://oauth.net/2/")
                    ]),
                    (0, exports.topic)("JWT Token Generation & Verification", [
                        (0, exports.vid)("JWT Deep Dive", "https://www.youtube.com/watch?v=7Q17ubqLfaM", "Web Dev Simplified"),
                        (0, exports.art)("JWT Best Practices", "https://curity.io/resources/learn/jwt-best-practices/", "Curity")
                    ]),
                    (0, exports.topic)("Role-Based Access Control (RBAC)", [
                        (0, exports.vid)("RBAC Implementation", "https://www.youtube.com/watch?v=4P6M2kEkPJk", "Hussein Nasser"),
                        (0, exports.art)("RBAC Patterns", "https://auth0.com/docs/manage-users/access-control/rbac", "Auth0")
                    ]),
                    (0, exports.topic)("API Composition (BFF Pattern)", [
                        (0, exports.vid)("Backend for Frontend", "https://www.youtube.com/watch?v=SSo-z16wEnE", "Sam Newman"),
                        (0, exports.art)("BFF Pattern", "https://samnewman.io/patterns/architectural/bff/", "Sam Newman")
                    ]),
                    (0, exports.topic)("Parallel Request Execution", [
                        (0, exports.vid)("Promise.all vs Promise.allSettled", "https://www.youtube.com/watch?v=W1Z7EAf8o4w", "Web Dev Simplified"),
                        (0, exports.doc)("Promise APIs", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise")
                    ]),
                    (0, exports.topic)("Rate Limiting Algorithms (Token/Leaky Bucket, Sliding Window)", [
                        (0, exports.vid)("Rate Limiting Deep Dive", "https://www.youtube.com/watch?v=FU4WlwfS3G0", "ByteByteGo"),
                        (0, exports.art)("Rate Limiting Algorithms", "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/", "Cloudflare")
                    ])
                ],
                project: {
                    title: "E-Commerce Gateway - Auth & Composition",
                    description: ["OAuth integration", "JWT with refresh tokens", "RBAC middleware", "API aggregation endpoint"],
                    outcomes: ["Enterprise auth patterns", "BFF implementation"]
                }
            }
        ]
    },
    {
        id: "gw-p4",
        title: "Phase 4: Enterprise Scale",
        weeks: "Weeks 7-8",
        modules: [
            {
                id: "gw-m4.1",
                title: "Multi-Tenancy & GraphQL Gateway",
                weeks: "Week 7",
                topics: [
                    (0, exports.topic)("Multi-Tenant Architecture", [
                        (0, exports.vid)("Multi-Tenancy Patterns", "https://www.youtube.com/watch?v=6ULyxuHKxg8", "AWS"),
                        (0, exports.art)("SaaS Tenancy Models", "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-isolation.html", "AWS")
                    ]),
                    (0, exports.topic)("Tenant Identification (Subdomain, Header, Path)", [
                        (0, exports.vid)("Subdomain Routing", "https://www.youtube.com/watch?v=lZndBxJ0VR4", "Traversy Media"),
                        (0, exports.art)("Multi-tenant Patterns", "https://www.microsoft.com/en-us/research/publication/multi-tenant-cloud-architecture/", "Microsoft Research")
                    ]),
                    (0, exports.topic)("GraphQL Gateway (Apollo Federation)", [
                        (0, exports.vid)("Apollo Federation", "https://www.youtube.com/watch?v=v_1bn2sHdk4", "Apollo GraphQL"),
                        (0, exports.doc)("Apollo Gateway", "https://www.apollographql.com/docs/federation/")
                    ]),
                    (0, exports.topic)("Query Cost Analysis & Depth Limiting", [
                        (0, exports.vid)("GraphQL Security", "https://www.youtube.com/watch?v=GLP_pBlz9g4", "GraphQL Conf"),
                        (0, exports.art)("GraphQL Rate Limiting", "https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/", "Apollo")
                    ]),
                    (0, exports.topic)("N+1 Query Prevention (DataLoader)", [
                        (0, exports.vid)("DataLoader Explained", "https://www.youtube.com/watch?v=OQTnXNCDywA", "Ben Awad"),
                        (0, exports.doc)("DataLoader", "https://github.com/graphql/dataloader")
                    ])
                ],
                project: {
                    title: "Multi-Tenant SaaS Gateway",
                    description: ["Tenant isolation", "Per-tenant rate limits", "GraphQL federation", "Query cost analysis"],
                    outcomes: ["SaaS architecture", "GraphQL at scale"]
                }
            },
            {
                id: "gw-m4.2",
                title: "WebSocket & gRPC Gateway",
                weeks: "Week 8",
                topics: [
                    (0, exports.topic)("WebSocket Proxy Implementation", [
                        (0, exports.vid)("WebSocket Deep Dive", "https://www.youtube.com/watch?v=1BfCnjr_Vjg", "Hussein Nasser"),
                        (0, exports.doc)("Socket.io Docs", "https://socket.io/docs/v4/")
                    ]),
                    (0, exports.topic)("gRPC to REST Transcoding", [
                        (0, exports.vid)("gRPC Gateway", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "Hussein Nasser"),
                        (0, exports.doc)("gRPC-Gateway", "https://grpc-ecosystem.github.io/grpc-gateway/")
                    ]),
                    (0, exports.topic)("Protocol Buffers", [
                        (0, exports.vid)("Protobuf Crash Course", "https://www.youtube.com/watch?v=46O73On0gyI", "Traversy Media"),
                        (0, exports.doc)("Protocol Buffers", "https://protobuf.dev/")
                    ]),
                    (0, exports.topic)("Streaming (Server, Client, Bidirectional)", [
                        (0, exports.vid)("gRPC Streaming", "https://www.youtube.com/watch?v=BqrGOoMxPaY", "Hussein Nasser"),
                        (0, exports.doc)("gRPC Streaming", "https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc")
                    ]),
                    (0, exports.topic)("Kubernetes Deployment (Ingress, HPA)", [
                        (0, exports.vid)("Kubernetes Ingress", "https://www.youtube.com/watch?v=NPFbYpb0I7w", "TechWorld with Nana"),
                        (0, exports.doc)("K8s Ingress", "https://kubernetes.io/docs/concepts/services-networking/ingress/")
                    ])
                ],
                project: {
                    title: "Multi-Protocol Gateway",
                    description: ["WebSocket support", "gRPC transcoding", "K8s deployment", "HPA configuration"],
                    outcomes: ["Multi-protocol handling", "Container orchestration"]
                }
            }
        ]
    },
    {
        id: "gw-p5",
        title: "Phase 5: Real-World Scenarios",
        weeks: "Weeks 9-10",
        modules: [
            {
                id: "gw-m5.1",
                title: "Production Issue Debugging",
                weeks: "Week 9",
                topics: [
                    (0, exports.topic)("Cascading Failures & Bulkhead Pattern", [
                        (0, exports.vid)("Bulkhead Pattern", "https://www.youtube.com/watch?v=K6sxY0YPgqU", "Microsoft Azure"),
                        (0, exports.art)("Stability Patterns", "https://www.oreilly.com/library/view/release-it-2nd/9781680504552/", "Michael Nygard")
                    ]),
                    (0, exports.topic)("DDoS Mitigation Strategies", [
                        (0, exports.vid)("DDoS Protection", "https://www.youtube.com/watch?v=fQ4Y-dCVoR8", "Cloudflare"),
                        (0, exports.art)("DDoS Mitigation", "https://www.cloudflare.com/learning/ddos/ddos-mitigation/", "Cloudflare")
                    ]),
                    (0, exports.topic)("Memory Leak Detection & Profiling", [
                        (0, exports.vid)("Node.js Memory Profiling", "https://www.youtube.com/watch?v=LaxbdIyBkL0", "Fireship"),
                        (0, exports.art)("Memory Leaks in Node", "https://blog.risingstack.com/finding-a-memory-leak-in-node-js/", "RisingStack")
                    ]),
                    (0, exports.topic)("Zero-Downtime Deployment", [
                        (0, exports.vid)("Blue-Green Deployment", "https://www.youtube.com/watch?v=AWVTKBUnoIg", "TechWorld with Nana"),
                        (0, exports.art)("Rolling Updates", "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/", "Kubernetes")
                    ]),
                    (0, exports.topic)("Graceful Shutdown & Connection Draining", [
                        (0, exports.vid)("Graceful Shutdown", "https://www.youtube.com/watch?v=Z3fBWQ2K3wg", "Hussein Nasser"),
                        (0, exports.art)("K8s Graceful Shutdown", "https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/", "RisingStack")
                    ])
                ],
                project: {
                    title: "Production Issue Simulations",
                    description: ["Simulate cascading failures", "DDoS attack response", "Memory leak debugging", "Zero-downtime deploy"],
                    outcomes: ["Incident response skills", "Production debugging"]
                }
            },
            {
                id: "gw-m5.2",
                title: "Observability & Monitoring",
                weeks: "Week 10",
                topics: [
                    (0, exports.topic)("Distributed Tracing (Jaeger/Zipkin)", [
                        (0, exports.vid)("Distributed Tracing", "https://www.youtube.com/watch?v=idDu_jXqf4E", "IBM Technology"),
                        (0, exports.doc)("Jaeger Docs", "https://www.jaegertracing.io/docs/")
                    ]),
                    (0, exports.topic)("Prometheus Metrics", [
                        (0, exports.vid)("Prometheus Tutorial", "https://www.youtube.com/watch?v=h4Sl21AKiDg", "TechWorld with Nana"),
                        (0, exports.doc)("Prometheus Docs", "https://prometheus.io/docs/")
                    ]),
                    (0, exports.topic)("Grafana Dashboards", [
                        (0, exports.vid)("Grafana Tutorial", "https://www.youtube.com/watch?v=9TJx7QTrTyo", "TechWorld with Nana"),
                        (0, exports.doc)("Grafana Docs", "https://grafana.com/docs/")
                    ]),
                    (0, exports.topic)("Alerting (PagerDuty/OpsGenie)", [
                        (0, exports.vid)("On-Call Best Practices", "https://www.youtube.com/watch?v=r1yNZ_BrHfY", "PagerDuty"),
                        (0, exports.art)("Alerting Strategy", "https://sre.google/sre-book/practical-alerting/", "Google SRE")
                    ]),
                    (0, exports.topic)("Log Aggregation (ELK Stack)", [
                        (0, exports.vid)("ELK Stack Tutorial", "https://www.youtube.com/watch?v=4X0WLg05ASw", "TechWorld with Nana"),
                        (0, exports.doc)("Elasticsearch Guide", "https://www.elastic.co/guide/index.html")
                    ])
                ],
                project: {
                    title: "Full Observability Stack",
                    description: ["Jaeger tracing setup", "Prometheus metrics", "Grafana dashboards", "Alert rules"],
                    outcomes: ["Complete observability", "Monitoring mastery"]
                }
            }
        ]
    },
    {
        id: "gw-p6",
        title: "Phase 6: Advanced Topics",
        weeks: "Weeks 11-12",
        modules: [
            {
                id: "gw-m6.1",
                title: "Service Mesh & Advanced Patterns",
                weeks: "Week 11",
                topics: [
                    (0, exports.topic)("API Gateway vs Service Mesh", [
                        (0, exports.vid)("Service Mesh Explained", "https://www.youtube.com/watch?v=16fgzklcF7Y", "IBM Technology"),
                        (0, exports.art)("Gateway vs Mesh", "https://konghq.com/blog/api-gateway-vs-service-mesh", "Kong")
                    ]),
                    (0, exports.topic)("Istio Basics", [
                        (0, exports.vid)("Istio Tutorial", "https://www.youtube.com/watch?v=voAyroDb6xk", "TechWorld with Nana"),
                        (0, exports.doc)("Istio Docs", "https://istio.io/latest/docs/")
                    ]),
                    (0, exports.topic)("Envoy Proxy Internals", [
                        (0, exports.vid)("Envoy Proxy", "https://www.youtube.com/watch?v=bhp3I0XKSYU", "CNCF"),
                        (0, exports.doc)("Envoy Docs", "https://www.envoyproxy.io/docs/envoy/latest/")
                    ]),
                    (0, exports.topic)("API Analytics & Monetization", [
                        (0, exports.vid)("API Monetization", "https://www.youtube.com/watch?v=Xf34Tm0Q-ZA", "Postman"),
                        (0, exports.art)("API Economy", "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-seven-make-or-break-api-challenges-cios-need-to-address", "McKinsey")
                    ]),
                    (0, exports.topic)("API Documentation (OpenAPI/Swagger)", [
                        (0, exports.vid)("OpenAPI Tutorial", "https://www.youtube.com/watch?v=x52fxBQ5R8I", "Swagger"),
                        (0, exports.doc)("OpenAPI Spec", "https://swagger.io/specification/")
                    ])
                ],
                project: {
                    title: "Service Mesh Integration",
                    description: ["Istio sidecar setup", "Traffic policies", "mTLS configuration", "API docs generation"],
                    outcomes: ["Service mesh understanding", "Advanced networking"]
                }
            },
            {
                id: "gw-m6.2",
                title: "Production Checklist & Interview Prep",
                weeks: "Week 12",
                topics: [
                    (0, exports.topic)("Performance: Sub-5ms latency, 10K RPS", [
                        (0, exports.vid)("High Performance Node.js", "https://www.youtube.com/watch?v=joNQuZcBkjY", "Matteo Collina"),
                        (0, exports.art)("Performance Best Practices", "https://nodejs.org/en/docs/guides/dont-block-the-event-loop/", "Node.js")
                    ]),
                    (0, exports.topic)("Security Hardening (OWASP Top 10)", [
                        (0, exports.vid)("OWASP Top 10", "https://www.youtube.com/watch?v=rWHvp7rUka8", "OWASP"),
                        (0, exports.doc)("OWASP Guide", "https://owasp.org/www-project-api-security/")
                    ]),
                    (0, exports.topic)("Infrastructure as Code (Terraform)", [
                        (0, exports.vid)("Terraform Tutorial", "https://www.youtube.com/watch?v=l5k1ai_GBDE", "TechWorld with Nana"),
                        (0, exports.doc)("Terraform Docs", "https://developer.hashicorp.com/terraform/docs")
                    ]),
                    (0, exports.topic)("CI/CD Pipeline for Gateway", [
                        (0, exports.vid)("GitHub Actions", "https://www.youtube.com/watch?v=R8_veQiYBjI", "TechWorld with Nana"),
                        (0, exports.doc)("GitHub Actions", "https://docs.github.com/en/actions")
                    ]),
                    (0, exports.topic)("System Design Interview: 1M RPS Gateway", [
                        (0, exports.vid)("Design API Gateway", "https://www.youtube.com/watch?v=RqfaTIWc3LQ", "Exponent"),
                        (0, exports.channel)("ByteByteGo", "https://www.youtube.com/@ByteByteGo")
                    ])
                ],
                project: {
                    title: "Production-Ready Gateway",
                    description: ["Security audit", "Performance benchmarks", "IaC deployment", "CI/CD pipeline"],
                    outcomes: ["Senior-level readiness", "Interview preparation"]
                }
            }
        ]
    },
    {
        id: "gw-p7",
        title: "Phase 7: Final Project",
        weeks: "Week 13-14",
        modules: [
            {
                id: "gw-m7.1",
                title: "Universal API Gateway Portfolio Project",
                weeks: "Week 13-14",
                topics: [
                    (0, exports.topic)("Multi-Protocol Support (REST, GraphQL, gRPC, WebSocket)", [
                        (0, exports.art)("Protocol Comparison", "https://www.redhat.com/architect/apis-rest-grpc-graphql", "Red Hat")
                    ]),
                    (0, exports.topic)("Plugin Architecture", [
                        (0, exports.vid)("Plugin Systems", "https://www.youtube.com/watch?v=iB6Rb-6DE6g", "uidotdev"),
                        (0, exports.art)("Building Plugin Systems", "https://css-tricks.com/designing-a-javascript-plugin-system/", "CSS-Tricks")
                    ]),
                    (0, exports.topic)("Admin Dashboard (React)", [
                        (0, exports.playlist)("React Dashboard", "https://www.youtube.com/playlist?list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR", "Lama Dev")
                    ]),
                    (0, exports.topic)("Complete Observability", [
                        (0, exports.doc)("Observability Guide", "https://opentelemetry.io/docs/")
                    ]),
                    (0, exports.topic)("Cloud Deployment (AWS/GCP/Azure)", [
                        (0, exports.vid)("AWS Deployment", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        (0, exports.doc)("AWS Well-Architected", "https://aws.amazon.com/architecture/well-architected/")
                    ]),
                    (0, exports.topic)("Video Walkthrough & Documentation", [
                        (0, exports.art)("Technical Writing", "https://developers.google.com/tech-writing", "Google"),
                        (0, exports.art)("Digital Ocean: Writing Technical Tutorials", "https://www.digitalocean.com/community/tutorials/how-to-write-technical-tutorials")
                    ])
                ],
                project: {
                    title: "Universal API Gateway",
                    description: ["Multi-protocol support", "Plugin system", "Admin UI", "Full observability", "Production deployment", "Documentation & demo video"],
                    outcomes: ["Portfolio-ready project", "Interview demonstration", "Open-source contribution ready"]
                }
            }
        ]
    }
];
// ===== PLAN 5: 7-LAYER SYSTEM DESIGN STACK =====
const systemDesignStackPlan = [
    {
        id: "sd-p1",
        title: "Layer 1: Network & Infrastructure",
        weeks: "Weeks 1-2",
        modules: [
            {
                id: "sd-m1.1",
                title: "The Foundation Everything Sits On",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("DNS Routing & Request Resolution", [
                        (0, exports.vid)("DNS Explained in 100 Seconds", "https://www.youtube.com/watch?v=72snZctFFtA", "Fireship"),
                        (0, exports.vid)("How DNS Works - Complete Guide", "https://www.youtube.com/watch?v=mpQZVYPuDGU", "Hussein Nasser"),
                        (0, exports.doc)("AWS Route 53 Guide", "https://docs.aws.amazon.com/Route53/"),
                        (0, exports.art)("How DNS Works", "https://howdns.works/", "DNSimple")
                    ]),
                    (0, exports.topic)("CDN for Global Distribution", [
                        (0, exports.vid)("CDN Explained", "https://www.youtube.com/watch?v=RI9np1LWzqw", "Hussein Nasser"),
                        (0, exports.vid)("CloudFront Deep Dive", "https://www.youtube.com/watch?v=AT-nHW3_SVI", "Be A Better Dev"),
                        (0, exports.doc)("Cloudflare CDN", "https://developers.cloudflare.com/cache/"),
                        (0, exports.art)("CDN Best Practices", "https://web.dev/articles/content-delivery-networks", "web.dev")
                    ]),
                    (0, exports.topic)("Load Balancers & Traffic Direction", [
                        (0, exports.vid)("Load Balancing Algorithms", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        (0, exports.vid)("Layer 4 vs Layer 7 Load Balancers", "https://www.youtube.com/watch?v=aKMLgFVxZYk", "Hussein Nasser"),
                        (0, exports.vid)("Consistent Hashing Deep Dive", "https://www.youtube.com/watch?v=fMZMm_0ZhK4", "ByteByteGo"),
                        (0, exports.doc)("NGINX Load Balancing", "https://docs.nginx.com/nginx/admin-guide/load-balancer/"),
                        (0, exports.art)("Load Balancing Concepts", "https://www.nginx.com/resources/glossary/load-balancing/", "NGINX")
                    ]),
                    (0, exports.topic)("Cloud Provider Choices (AWS, GCP, Azure)", [
                        (0, exports.vid)("AWS vs Azure vs GCP", "https://www.youtube.com/watch?v=n24OBVGHufQ", "Fireship"),
                        (0, exports.vid)("AWS Fundamentals", "https://www.youtube.com/watch?v=ulprqHHWlng", "freeCodeCamp"),
                        (0, exports.doc)("AWS Well-Architected Framework", "https://aws.amazon.com/architecture/well-architected/"),
                        (0, exports.art)("Choosing a Cloud Provider", "https://cloud.google.com/docs/compare", "Google Cloud")
                    ]),
                    (0, exports.topic)("VPC & Network Security", [
                        (0, exports.vid)("AWS VPC Tutorial", "https://www.youtube.com/watch?v=2doSoMN2xvI", "TechWorld with Nana"),
                        (0, exports.doc)("AWS VPC Documentation", "https://docs.aws.amazon.com/vpc/"),
                        (0, exports.art)("VPC Best Practices", "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html", "AWS")
                    ])
                ],
                project: {
                    title: "Multi-Region Infrastructure Setup",
                    description: ["Setup DNS routing with Route 53", "Configure CDN with CloudFront", "Implement load balancer with health checks"],
                    outcomes: ["Understand network fundamentals", "Configure production infrastructure"]
                }
            }
        ]
    },
    {
        id: "sd-p2",
        title: "Layer 2: Data Storage & Management",
        weeks: "Weeks 3-4",
        modules: [
            {
                id: "sd-m2.1",
                title: "Where Your Data Lives Matters",
                weeks: "Week 3-4",
                topics: [
                    (0, exports.topic)("Redis for Caching", [
                        (0, exports.vid)("Redis Crash Course", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "Hussein Nasser"),
                        (0, exports.vid)("Redis Caching Patterns", "https://www.youtube.com/watch?v=oaJq1mQ3dFI", "Be A Better Dev"),
                        (0, exports.doc)("Redis Documentation", "https://redis.io/docs/"),
                        (0, exports.art)("Caching Strategies", "https://aws.amazon.com/caching/best-practices/", "AWS")
                    ]),
                    (0, exports.topic)("NoSQL for Flexibility", [
                        (0, exports.vid)("MongoDB in 100 Seconds", "https://www.youtube.com/watch?v=-bt_y4Loofg", "Fireship"),
                        (0, exports.vid)("DynamoDB Deep Dive", "https://www.youtube.com/watch?v=2k2GINpO308", "Be A Better Dev"),
                        (0, exports.doc)("MongoDB Documentation", "https://www.mongodb.com/docs/"),
                        (0, exports.art)("When to Use NoSQL", "https://www.mongodb.com/nosql-explained", "MongoDB")
                    ]),
                    (0, exports.topic)("Blob Storage for Files", [
                        (0, exports.vid)("S3 Deep Dive", "https://www.youtube.com/watch?v=tfU0JEZjcsg", "Be A Better Dev"),
                        (0, exports.vid)("Object Storage Explained", "https://www.youtube.com/watch?v=5Vt0GHRfS-8", "IBM Technology"),
                        (0, exports.doc)("AWS S3 Documentation", "https://docs.aws.amazon.com/s3/"),
                        (0, exports.art)("Blob Storage Best Practices", "https://cloud.google.com/storage/docs/best-practices", "Google Cloud")
                    ]),
                    (0, exports.topic)("Data Lakes for Analytics", [
                        (0, exports.vid)("Data Lake Explained", "https://www.youtube.com/watch?v=zlBZrG8dDMM", "IBM Technology"),
                        (0, exports.vid)("AWS Data Lake Architecture", "https://www.youtube.com/watch?v=V_WcXs-TMDs", "AWS"),
                        (0, exports.doc)("Data Lake on AWS", "https://aws.amazon.com/solutions/implementations/data-lake-solution/"),
                        (0, exports.art)("Data Lake vs Data Warehouse", "https://www.databricks.com/glossary/data-lake", "Databricks")
                    ]),
                    (0, exports.topic)("SQL Databases for Transactions", [
                        (0, exports.vid)("PostgreSQL Tutorial", "https://www.youtube.com/watch?v=qw--VYLpxG4", "freeCodeCamp"),
                        (0, exports.vid)("SQL Indexing Deep Dive", "https://www.youtube.com/watch?v=clrtT_4WBAw", "Hussein Nasser"),
                        (0, exports.doc)("PostgreSQL Documentation", "https://www.postgresql.org/docs/"),
                        (0, exports.art)("ACID Properties", "https://www.postgresql.org/docs/current/transaction-iso.html", "PostgreSQL"),
                        (0, exports.topic)("Whitepaper: Google Spanner", [(0, exports.doc)("Google Research", "https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf")]),
                        (0, exports.topic)("DSA: LSM Trees & SSTables", [(0, exports.doc)("TowardsDataScience", "https://towardsdatascience.com/log-structured-merge-trees-9c8e2bea89e8")])
                    ]),
                    (0, exports.topic)("Database Sharding & Replication", [
                        (0, exports.vid)("Database Sharding", "https://www.youtube.com/watch?v=5faMjKuq9Js", "Hussein Nasser"),
                        (0, exports.vid)("Database Replication", "https://www.youtube.com/watch?v=bI8Ry6GhMSE", "Hussein Nasser"),
                        (0, exports.art)("Sharding Strategies", "https://www.digitalocean.com/community/tutorials/understanding-database-sharding", "DigitalOcean")
                    ])
                ],
                project: {
                    title: "Multi-Tier Data Architecture",
                    description: ["Design caching layer with Redis", "Implement SQL + NoSQL hybrid", "Setup S3 for file storage"],
                    outcomes: ["Choose explicit storage models (Document vs Relational vs Wide-Column)", "Understand Spanner-level global distribution patterns", "Master B-Tree index optimization heuristics"]
                }
            }
        ]
    },
    {
        id: "sd-p3",
        title: "Layer 3: Compute & Scaling",
        weeks: "Weeks 5-6",
        modules: [
            {
                id: "sd-m3.1",
                title: "The Processing Backbone",
                weeks: "Week 5-6",
                topics: [
                    (0, exports.topic)("Microservices for Modularity", [
                        (0, exports.vid)("Microservices Explained", "https://www.youtube.com/watch?v=j3XufmvEMiM", "IBM Technology"),
                        (0, exports.vid)("Microservices Architecture", "https://www.youtube.com/watch?v=CdBtNQZH8a4", "TechWorld with Nana"),
                        (0, exports.doc)("Microservices.io", "https://microservices.io/"),
                        (0, exports.art)("Microservices Best Practices", "https://martinfowler.com/articles/microservices.html", "Martin Fowler")
                    ]),
                    (0, exports.topic)("Auto-scaling for Demand Spikes", [
                        (0, exports.vid)("Auto Scaling Deep Dive", "https://www.youtube.com/watch?v=a4SicVoqKRU", "Be A Better Dev"),
                        (0, exports.vid)("AWS Auto Scaling", "https://www.youtube.com/watch?v=4EOaAkY4pNE", "AWS"),
                        (0, exports.doc)("AWS Auto Scaling", "https://docs.aws.amazon.com/autoscaling/"),
                        (0, exports.art)("Scaling Strategies", "https://aws.amazon.com/blogs/architecture/scaling-up-to-your-first-10-million-users/", "AWS")
                    ]),
                    (0, exports.topic)("Containers with Docker", [
                        (0, exports.vid)("Docker in 100 Seconds", "https://www.youtube.com/watch?v=Gjnup-PuquQ", "Fireship"),
                        (0, exports.vid)("Docker Deep Dive", "https://www.youtube.com/watch?v=8vmKtS8W7IQ", "TechWorld with Nana"),
                        (0, exports.doc)("Docker Documentation", "https://docs.docker.com/"),
                        (0, exports.art)("Docker Best Practices", "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/", "Docker")
                    ]),
                    (0, exports.topic)("Kubernetes Orchestration", [
                        (0, exports.vid)("Kubernetes in 100 Seconds", "https://www.youtube.com/watch?v=PziYflu8cB8", "Fireship"),
                        (0, exports.vid)("Kubernetes Course", "https://www.youtube.com/watch?v=X48VuDVv0do", "TechWorld with Nana"),
                        (0, exports.doc)("Kubernetes Documentation", "https://kubernetes.io/docs/"),
                        (0, exports.art)("K8s Best Practices", "https://kubernetes.io/docs/concepts/configuration/overview/", "Kubernetes")
                    ]),
                    (0, exports.topic)("Serverless Functions for Event-Driven Work", [
                        (0, exports.vid)("Serverless in 100 Seconds", "https://www.youtube.com/watch?v=W_VV2Fx32_Y", "Fireship"),
                        (0, exports.vid)("AWS Lambda Deep Dive", "https://www.youtube.com/watch?v=eOBq__h4OJ4", "Be A Better Dev"),
                        (0, exports.doc)("AWS Lambda", "https://docs.aws.amazon.com/lambda/"),
                        (0, exports.art)("When to Use Serverless", "https://aws.amazon.com/lambda/faqs/", "AWS")
                    ]),
                    (0, exports.topic)("Horizontal vs Vertical Scaling", [
                        (0, exports.vid)("Scaling Explained", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        (0, exports.art)("Scaling Strategies", "https://www.digitalocean.com/community/tutorials/understanding-the-differences-between-vertical-and-horizontal-scaling", "DigitalOcean")
                    ])
                ],
                project: {
                    title: "Scalable Compute Platform",
                    description: ["Containerize app with Docker", "Deploy on Kubernetes", "Implement auto-scaling policies"],
                    outcomes: ["Master container orchestration", "Optimize AWS costs"]
                }
            }
        ]
    },
    {
        id: "sd-p4",
        title: "Layer 4: Communication",
        weeks: "Weeks 7-8",
        modules: [
            {
                id: "sd-m4.1",
                title: "Services Need to Talk",
                weeks: "Week 7-8",
                topics: [
                    (0, exports.topic)("gRPC for Performance", [
                        (0, exports.vid)("gRPC Crash Course", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "Hussein Nasser"),
                        (0, exports.vid)("gRPC vs REST", "https://www.youtube.com/watch?v=gnchfOojMk4", "IBM Technology"),
                        (0, exports.doc)("gRPC Documentation", "https://grpc.io/docs/"),
                        (0, exports.art)("When to Use gRPC", "https://grpc.io/docs/what-is-grpc/introduction/", "gRPC")
                    ]),
                    (0, exports.topic)("REST APIs for Simplicity", [
                        (0, exports.vid)("REST API Best Practices", "https://www.youtube.com/watch?v=SLwpqD8n3d0", "Traversy Media"),
                        (0, exports.doc)("RESTful API Design", "https://restfulapi.net/"),
                        (0, exports.art)("REST API Guidelines", "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design", "Microsoft")
                    ]),
                    (0, exports.topic)("Message Queues for Async Work", [
                        (0, exports.vid)("Message Queues Explained", "https://www.youtube.com/watch?v=O1PgqUqZKTA", "Hussein Nasser"),
                        (0, exports.vid)("RabbitMQ Tutorial", "https://www.youtube.com/watch?v=deG25y_r6OY", "Hussein Nasser"),
                        (0, exports.vid)("Kafka Architecture", "https://www.youtube.com/watch?v=Ch5VhJzaoaI", "Hussein Nasser"),
                        (0, exports.doc)("RabbitMQ Documentation", "https://www.rabbitmq.com/docs"),
                        (0, exports.doc)("Kafka Documentation", "https://kafka.apache.org/documentation/")
                    ]),
                    (0, exports.topic)("Service Meshes for Complex Orchestration", [
                        (0, exports.vid)("Istio Explained", "https://www.youtube.com/watch?v=16fgzklcF7Y", "TechWorld with Nana"),
                        (0, exports.vid)("Service Mesh 101", "https://www.youtube.com/watch?v=vh1YtWjfcyk", "IBM Technology"),
                        (0, exports.doc)("Istio Documentation", "https://istio.io/latest/docs/"),
                        (0, exports.art)("Service Mesh Benefits", "https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh", "Red Hat")
                    ]),
                    (0, exports.topic)("WebSockets for Real-time", [
                        (0, exports.vid)("WebSockets Explained", "https://www.youtube.com/watch?v=1BfCnjr_Vjg", "Fireship"),
                        (0, exports.vid)("WebSockets vs HTTP", "https://www.youtube.com/watch?v=xTR5OflgwgU", "Hussein Nasser"),
                        (0, exports.doc)("WebSocket API", "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API")
                    ]),
                    (0, exports.topic)("GraphQL for Flexible Queries", [
                        (0, exports.vid)("GraphQL in 100 Seconds", "https://www.youtube.com/watch?v=eIQh02xuVw4", "Fireship"),
                        (0, exports.doc)("GraphQL Documentation", "https://graphql.org/learn/"),
                        (0, exports.art)("When to Use GraphQL", "https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/", "Apollo")
                    ])
                ],
                project: {
                    title: "Multi-Protocol Communication System",
                    description: ["Implement gRPC between services", "Add message queue for async", "Setup service mesh with Istio"],
                    outcomes: ["Avoid distributed monoliths", "Choose right protocol for use case"]
                }
            }
        ]
    },
    {
        id: "sd-p5",
        title: "Layer 5: Application Logic",
        weeks: "Weeks 9-10",
        modules: [
            {
                id: "sd-m5.1",
                title: "Your Actual Business Logic",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.topic)("Microservices for Scale", [
                        (0, exports.vid)("Decomposing Monolith", "https://www.youtube.com/watch?v=UzEW0X8a010", "GOTO Conferences"),
                        (0, exports.art)("Microservices Patterns", "https://microservices.io/patterns/index.html", "Chris Richardson")
                    ]),
                    (0, exports.topic)("API Gateways for Management", [
                        (0, exports.vid)("API Gateway Pattern", "https://www.youtube.com/watch?v=6ULyxuHKxg8", "Hussein Nasser"),
                        (0, exports.doc)("Kong Gateway", "https://docs.konghq.com/"),
                        (0, exports.art)("API Gateway Benefits", "https://aws.amazon.com/api-gateway/", "AWS")
                    ]),
                    (0, exports.topic)("Domain-Driven Design for Clarity", [
                        (0, exports.vid)("DDD Explained", "https://www.youtube.com/watch?v=pMuiVlnGqjk", "Amithabh Shah"),
                        (0, exports.vid)("Bounded Contexts", "https://www.youtube.com/watch?v=am-HkyENxeI", "CodeOpinion"),
                        (0, exports.art)("DDD Reference", "https://martinfowler.com/bliki/DomainDrivenDesign.html", "Martin Fowler")
                    ]),
                    (0, exports.topic)("Middleware for Cross-Cutting Concerns", [
                        (0, exports.vid)("Middleware Pattern", "https://www.youtube.com/watch?v=lY6icfhap2o", "Web Dev Simplified"),
                        (0, exports.art)("Cross-Cutting Concerns", "https://www.patterns.dev/posts/middleware-pattern", "patterns.dev")
                    ]),
                    (0, exports.topic)("Event Sourcing & CQRS", [
                        (0, exports.vid)("Event Sourcing Explained", "https://www.youtube.com/watch?v=STKCRSUsyP0", "CodeOpinion"),
                        (0, exports.vid)("CQRS Pattern", "https://www.youtube.com/watch?v=DQ3D_mplIgY", "CodeOpinion"),
                        (0, exports.art)("Event Sourcing", "https://martinfowler.com/eaaDev/EventSourcing.html", "Martin Fowler")
                    ]),
                    (0, exports.topic)("Saga Pattern for Distributed Transactions", [
                        (0, exports.vid)("Saga Pattern Explained", "https://www.youtube.com/watch?v=xDuwrtwYHu8", "Hussein Nasser"),
                        (0, exports.art)("Saga Pattern", "https://microservices.io/patterns/data/saga.html", "Chris Richardson")
                    ])
                ],
                project: {
                    title: "DDD-Based Microservice",
                    description: ["Design bounded contexts", "Implement API gateway", "Apply CQRS pattern"],
                    outcomes: ["Understand business logic design", "Master enterprise patterns"]
                }
            }
        ]
    },
    {
        id: "sd-p6",
        title: "Layer 6: Observability & Reliability",
        weeks: "Weeks 11-12",
        modules: [
            {
                id: "sd-m6.1",
                title: "You Can't Fix What You Can't See",
                weeks: "Week 11-12",
                topics: [
                    (0, exports.topic)("Logging with ELK Stack", [
                        (0, exports.vid)("ELK Stack Tutorial", "https://www.youtube.com/watch?v=ZP0NmfyfsoM", "TechWorld with Nana"),
                        (0, exports.vid)("Elasticsearch Explained", "https://www.youtube.com/watch?v=1EnvkPf7t6Y", "IBM Technology"),
                        (0, exports.doc)("Elasticsearch Guide", "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"),
                        (0, exports.art)("Logging Best Practices", "https://www.datadoghq.com/blog/log-management-best-practices/", "Datadog")
                    ]),
                    (0, exports.topic)("Tracing for Request Flows", [
                        (0, exports.vid)("Distributed Tracing", "https://www.youtube.com/watch?v=idDu_jXqf4E", "Hussein Nasser"),
                        (0, exports.vid)("Jaeger Explained", "https://www.youtube.com/watch?v=UNqilb9_zwY", "CNCF"),
                        (0, exports.doc)("Jaeger Documentation", "https://www.jaegertracing.io/docs/"),
                        (0, exports.doc)("OpenTelemetry", "https://opentelemetry.io/docs/")
                    ]),
                    (0, exports.topic)("Chaos Testing for Resilience", [
                        (0, exports.vid)("Chaos Engineering", "https://www.youtube.com/watch?v=MhdW_EGycmw", "Fireship"),
                        (0, exports.vid)("Chaos Monkey", "https://www.youtube.com/watch?v=7sQiIR9qCdA", "Netflix"),
                        (0, exports.art)("Chaos Engineering Principles", "https://principlesofchaos.org/", "Chaos Community")
                    ]),
                    (0, exports.topic)("Monitoring with Prometheus", [
                        (0, exports.vid)("Prometheus Tutorial", "https://www.youtube.com/watch?v=h4Sl21AKiDg", "TechWorld with Nana"),
                        (0, exports.vid)("Grafana Dashboards", "https://www.youtube.com/watch?v=lILY8eSspEo", "TechWorld with Nana"),
                        (0, exports.doc)("Prometheus Documentation", "https://prometheus.io/docs/"),
                        (0, exports.doc)("Grafana Documentation", "https://grafana.com/docs/")
                    ]),
                    (0, exports.topic)("SLOs, SLIs, SLAs", [
                        (0, exports.vid)("SLOs Explained", "https://www.youtube.com/watch?v=tEylFyxbDLE", "Google Cloud"),
                        (0, exports.doc)("Google SRE Book", "https://sre.google/sre-book/table-of-contents/"),
                        (0, exports.art)("Defining SLOs", "https://cloud.google.com/blog/products/gcp/sre-fundamentals-slis-slas-and-slos", "Google Cloud")
                    ]),
                    (0, exports.topic)("Incident Management", [
                        (0, exports.vid)("Incident Response", "https://www.youtube.com/watch?v=r1yNZ_BrHfY", "Google Cloud"),
                        (0, exports.art)("On-Call Best Practices", "https://increment.com/on-call/", "Increment")
                    ])
                ],
                project: {
                    title: "Full Observability Stack",
                    description: ["Setup ELK for logging", "Implement Prometheus + Grafana", "Configure distributed tracing"],
                    outcomes: ["Debug production issues", "Implement SRE best practices"]
                }
            }
        ]
    },
    {
        id: "sd-p7",
        title: "Layer 7: AI-Powered Optimization",
        weeks: "Weeks 13-14",
        modules: [
            {
                id: "sd-m7.1",
                title: "The Future is Here",
                weeks: "Week 13-14",
                topics: [
                    (0, exports.topic)("Anomaly Detection", [
                        (0, exports.vid)("ML for Anomaly Detection", "https://www.youtube.com/watch?v=VClXOFVGmIQ", "StatQuest"),
                        (0, exports.art)("AWS Anomaly Detection", "https://aws.amazon.com/blogs/aws/amazon-cloudwatch-anomaly-detection/", "AWS"),
                        (0, exports.doc)("Datadog Anomaly Detection", "https://docs.datadoghq.com/monitors/types/anomaly/")
                    ]),
                    (0, exports.topic)("Intelligent Routing Optimization", [
                        (0, exports.vid)("Traffic Management with AI", "https://www.youtube.com/watch?v=QLC5ij_8Cek", "Google Cloud"),
                        (0, exports.art)("AI-Driven Load Balancing", "https://cloud.google.com/load-balancing/docs/backend-services", "Google Cloud")
                    ]),
                    (0, exports.topic)("Intelligent Autoscaling", [
                        (0, exports.vid)("Predictive Scaling", "https://www.youtube.com/watch?v=uxuyPru3_Lc", "AWS"),
                        (0, exports.doc)("AWS Predictive Scaling", "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html"),
                        (0, exports.art)("ML-Based Scaling", "https://cloud.google.com/blog/products/ai-machine-learning/using-ml-to-better-predict-scaling-needs", "Google Cloud")
                    ]),
                    (0, exports.topic)("Predictive Load Balancing", [
                        (0, exports.vid)("Predictive Infrastructure", "https://www.youtube.com/watch?v=a4SicVoqKRU", "AWS"),
                        (0, exports.art)("ML in Load Balancing", "https://www.nginx.com/blog/", "NGINX")
                    ]),
                    (0, exports.topic)("AIOps for Self-Healing Systems", [
                        (0, exports.vid)("AIOps Explained", "https://www.youtube.com/watch?v=e4VB17ot-D0", "IBM Technology"),
                        (0, exports.vid)("Self-Healing Infrastructure", "https://www.youtube.com/watch?v=5lTTVGIZ-HE", "CNCF"),
                        (0, exports.art)("AIOps Guide", "https://www.ibm.com/topics/aiops", "IBM"),
                        (0, exports.doc)("Kubernetes Self-Healing", "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/")
                    ]),
                    (0, exports.topic)("Cost Optimization with ML", [
                        (0, exports.vid)("AWS Cost Optimization", "https://www.youtube.com/watch?v=8TlukLu11Yo", "AWS"),
                        (0, exports.art)("FinOps with AI", "https://www.finops.org/", "FinOps Foundation")
                    ])
                ],
                project: {
                    title: "AI-Enhanced Infrastructure",
                    description: ["Implement anomaly detection", "Setup predictive autoscaling", "Build self-healing workflows"],
                    outcomes: ["Outperform competitors 3x", "Master next-gen infrastructure"]
                }
            }
        ]
    }
];
// ===== PLAN 6: 12-MONTH AI ENGINEER $200K ROADMAP =====
const aiEngineerRoadmapPlan = [
    {
        id: "air-p1",
        title: "Phase 1: Python & API Foundations",
        weeks: "Month 1ΓÇô2",
        modules: [
            {
                id: "air-m1.1",
                title: "Advanced Python Mastery",
                weeks: "Month 1",
                topics: [
                    (0, exports.topic)("Async/Await & Asyncio", [
                        (0, exports.playlist)("Python Async Full Course", "https://www.youtube.com/playlist?list=PLhTjy8cBISEqkN-5Ku_kXG4QW33sxQo0t", "Tech With Tim"),
                        (0, exports.vid)("Async/Await in Python", "https://www.youtube.com/watch?v=2IW-ZEui4h4", "Tech With Tim"),
                        (0, exports.doc)("Python asyncio Docs", "https://docs.python.org/3/library/asyncio.html"),
                        (0, exports.art)("Real Python - Async IO", "https://realpython.com/async-io-python/", "Real Python")
                    ]),
                    (0, exports.topic)("Decorators & Metaclasses", [
                        (0, exports.vid)("Python Decorators in 15 Minutes", "https://www.youtube.com/watch?v=r7Dtus7N4pI", "Tech With Tim"),
                        (0, exports.vid)("Decorators - Full Tutorial", "https://www.youtube.com/watch?v=FsAPt_9Bf3U", "Corey Schafer"),
                        (0, exports.doc)("Python Decorator Guide", "https://docs.python.org/3/glossary.html#term-decorator"),
                        (0, exports.art)("Primer on Decorators", "https://realpython.com/primer-on-python-decorators/", "Real Python")
                    ]),
                    (0, exports.topic)("Generators & Iterators", [
                        (0, exports.vid)("Python Generators Explained", "https://www.youtube.com/watch?v=bD05uGo_sVI", "Corey Schafer"),
                        (0, exports.vid)("Generators & Iterators", "https://www.youtube.com/watch?v=u3T7hmLthUU", "Tech With Tim"),
                        (0, exports.doc)("Python Generators", "https://docs.python.org/3/howto/functional.html#generators")
                    ]),
                    (0, exports.topic)("Type Hints & Pydantic", [
                        (0, exports.vid)("Python Type Hints Full Course", "https://www.youtube.com/watch?v=dgBCEB2jVU0", "ArjanCodes"),
                        (0, exports.vid)("Pydantic V2 Tutorial", "https://www.youtube.com/watch?v=502XOB0u8OY", "ArjanCodes"),
                        (0, exports.doc)("Pydantic Documentation", "https://docs.pydantic.dev/latest/")
                    ]),
                    (0, exports.topic)("Python Package Management (Poetry/uv)", [
                        (0, exports.vid)("Poetry Tutorial", "https://www.youtube.com/watch?v=0f3moPe_bhk", "ArjanCodes"),
                        (0, exports.doc)("Poetry Docs", "https://python-poetry.org/docs/"),
                        (0, exports.art)("Python Packaging Guide", "https://packaging.python.org/en/latest/", "PyPA")
                    ]),
                    (0, exports.topic)("Testing with Pytest", [
                        (0, exports.vid)("Pytest Full Course", "https://www.youtube.com/watch?v=cHYq1MRoyI0", "freeCodeCamp"),
                        (0, exports.doc)("Pytest Documentation", "https://docs.pytest.org/en/stable/")
                    ])
                ],
                project: {
                    title: "Async Data Pipeline CLI",
                    description: ["Build async web scraper with aiohttp", "Implement decorator-based retry logic", "Use generators for streaming large datasets", "Package with Poetry, test with Pytest"],
                    outcomes: ["Advanced Python patterns", "Production-quality code"]
                }
            },
            {
                id: "air-m1.2",
                title: "Pandas & Data Manipulation",
                weeks: "Month 1 (Week 3ΓÇô4)",
                topics: [
                    (0, exports.topic)("Pandas Core Operations", [
                        (0, exports.playlist)("Pandas Complete Tutorial", "https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS", "Corey Schafer"),
                        (0, exports.playlist)("Pandas for Data Science", "https://www.youtube.com/watch?v=vmEHCJofslg", "CampusX"),
                        (0, exports.vid)("Pandas Crash Course", "https://www.youtube.com/watch?v=x9JiIFvlUjc", "Krish Naik"),
                        (0, exports.vid)("Pandas in 1 Hour", "https://www.youtube.com/watch?v=vmEHCJofslg", "Programming with Mosh"),
                        (0, exports.doc)("Pandas User Guide", "https://pandas.pydata.org/docs/user_guide/index.html")
                    ]),
                    (0, exports.topic)("Data Cleaning & Transformation", [
                        (0, exports.vid)("Data Cleaning with Pandas", "https://www.youtube.com/watch?v=bDhvCp3_lYw", "Alex The Analyst"),
                        (0, exports.art)("Pandas Data Cleaning", "https://realpython.com/python-data-cleaning-numpy-pandas/", "Real Python")
                    ]),
                    (0, exports.topic)("Advanced Groupby & Merging", [
                        (0, exports.vid)("Pandas GroupBy Explained", "https://www.youtube.com/watch?v=qy0fDqoMJx8", "Corey Schafer"),
                        (0, exports.doc)("Pandas Merging Guide", "https://pandas.pydata.org/docs/user_guide/merging.html")
                    ]),
                    (0, exports.topic)("NumPy Fundamentals", [
                        (0, exports.vid)("NumPy Full Course", "https://www.youtube.com/watch?v=QUT1VHiLmmI", "freeCodeCamp"),
                        (0, exports.doc)("NumPy User Guide", "https://numpy.org/doc/stable/user/index.html")
                    ])
                ],
                project: {
                    title: "Data Analysis Report Generator",
                    description: ["Analyze real-world dataset (Kaggle)", "Build automated EDA pipeline", "Generate PDF reports with matplotlib", "Handle missing data and outliers"],
                    outcomes: ["Data manipulation mastery", "Analysis pipeline skills"]
                }
            },
            {
                id: "air-m1.3",
                title: "FastAPI & REST API Design",
                weeks: "Month 2",
                topics: [
                    (0, exports.topic)("FastAPI Fundamentals", [
                        (0, exports.playlist)("FastAPI Full Course 2024", "https://www.youtube.com/playlist?list=PLqAmigZvYxIL9dnYeZEhMoHcoP4zop8-p", "Bitfumes"),
                        (0, exports.vid)("FastAPI crash course in Hindi", "https://www.youtube.com/watch?v=7t2alSnE2-I", "Chai aur Code"),
                        (0, exports.vid)("FastAPI Complete Tutorial", "https://www.youtube.com/watch?v=7t2alSnE2-I", "Akamai Developer"),
                        (0, exports.doc)("FastAPI Official Tutorial", "https://fastapi.tiangolo.com/tutorial/")
                    ]),
                    (0, exports.topic)("Pydantic Models & Validation", [
                        (0, exports.vid)("Pydantic V2 for FastAPI", "https://www.youtube.com/watch?v=502XOB0u8OY", "ArjanCodes"),
                        (0, exports.doc)("FastAPI Request Body", "https://fastapi.tiangolo.com/tutorial/body/")
                    ]),
                    (0, exports.topic)("Authentication with JWT", [
                        (0, exports.vid)("FastAPI JWT Auth", "https://www.youtube.com/watch?v=5GxQ1rLTwaU", "Ssali Jonathan"),
                        (0, exports.doc)("FastAPI Security", "https://fastapi.tiangolo.com/tutorial/security/")
                    ]),
                    (0, exports.topic)("SQLAlchemy ORM & Alembic Migrations", [
                        (0, exports.vid)("SQLAlchemy Full Course", "https://www.youtube.com/watch?v=AKQ3XEDI9Mw", "freeCodeCamp"),
                        (0, exports.doc)("SQLAlchemy ORM Tutorial", "https://docs.sqlalchemy.org/en/20/orm/quickstart.html")
                    ]),
                    (0, exports.topic)("PostgreSQL Integration", [
                        (0, exports.vid)("PostgreSQL Full Course", "https://www.youtube.com/watch?v=qw--VYLpxG4", "freeCodeCamp"),
                        (0, exports.doc)("PostgreSQL Docs", "https://www.postgresql.org/docs/")
                    ]),
                    (0, exports.topic)("API Documentation (OpenAPI/Swagger)", [
                        (0, exports.vid)("FastAPI Auto Docs", "https://www.youtube.com/watch?v=tLKKmouUams", "Patrick Loeber"),
                        (0, exports.doc)("FastAPI OpenAPI Docs", "https://fastapi.tiangolo.com/tutorial/metadata/")
                    ])
                ],
                project: {
                    title: "FastAPI CRUD API with Auth",
                    description: ["Full CRUD REST API with FastAPI", "JWT authentication & authorization", "PostgreSQL with SQLAlchemy ORM", "Deploy on Railway/Render with automated testing"],
                    outcomes: ["Production API development", "Database integration", "Deployment skills"]
                }
            }
        ]
    },
    {
        id: "air-p2",
        title: "Phase 2: Practical Deep Learning",
        weeks: "Month 3",
        modules: [
            {
                id: "air-m2.1",
                title: "PyTorch Fundamentals",
                weeks: "Month 3 (Week 1ΓÇô2)",
                topics: [
                    (0, exports.topic)("Tensors & Autograd", [
                        (0, exports.playlist)("Complete ML Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1B5_5eWd7yv28K6K0z0_U5x", "Vizuara AI"),
                        (0, exports.playlist)("PyTorch for Deep Learning", "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4", "Patrick Loeber"),
                        (0, exports.vid)("PyTorch for Beginners", "https://www.youtube.com/watch?v=ORMx45xqWkA", "CampusX"),
                        (0, exports.vid)("PyTorch in 100 Seconds", "https://www.youtube.com/watch?v=ORMx45xqWkA", "Fireship"),
                        (0, exports.doc)("PyTorch Tutorials", "https://pytorch.org/tutorials/")
                    ]),
                    (0, exports.topic)("Building Neural Networks", [
                        (0, exports.vid)("Neural Networks from Scratch", "https://www.youtube.com/watch?v=VMj-3S1tku0", "Andrej Karpathy"),
                        (0, exports.vid)("PyTorch Neural Network Tutorial", "https://www.youtube.com/watch?v=c36lUUr864M", "Patrick Loeber"),
                        (0, exports.doc)("PyTorch nn Module", "https://pytorch.org/docs/stable/nn.html")
                    ]),
                    (0, exports.topic)("Training Loops & Optimization", [
                        (0, exports.vid)("Training Loop Explained", "https://www.youtube.com/watch?v=WvoLTXIjBYU", "Andrej Karpathy"),
                        (0, exports.vid)("Optimizers Explained", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "StatQuest"),
                        (0, exports.doc)("PyTorch Optimizers", "https://pytorch.org/docs/stable/optim.html")
                    ]),
                    (0, exports.topic)("Data Loading & Preprocessing", [
                        (0, exports.vid)("PyTorch DataLoader", "https://www.youtube.com/watch?v=PXOzkkB5eH0", "Patrick Loeber"),
                        (0, exports.doc)("PyTorch Data Utils", "https://pytorch.org/docs/stable/data.html")
                    ]),
                    (0, exports.topic)("GPU Acceleration & Mixed Precision", [
                        (0, exports.vid)("PyTorch GPU Training", "https://www.youtube.com/watch?v=V_xro1bcAuA", "Aladdin Persson"),
                        (0, exports.doc)("CUDA Semantics", "https://pytorch.org/docs/stable/notes/cuda.html")
                    ])
                ],
                project: {
                    title: "Image Classifier from Scratch",
                    description: ["Build CNN for CIFAR-10 classification", "Implement training/validation loop", "Use data augmentation techniques", "Achieve >90% accuracy"],
                    outcomes: ["PyTorch mastery", "Deep learning fundamentals"]
                }
            },
            {
                id: "air-m2.2",
                title: "Hugging Face Transformers & Fine-Tuning",
                weeks: "Month 3 (Week 3ΓÇô4)",
                topics: [
                    (0, exports.topic)("Hugging Face Transformers Library", [
                        (0, exports.playlist)("Complete NLP Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1AsG_S9ySjO2P8370uGv_L7", "Vizuara AI"),
                        (0, exports.playlist)("Hugging Face Course", "https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o", "Hugging Face"),
                        (0, exports.vid)("Hugging Face in 15 Minutes", "https://www.youtube.com/watch?v=QEaBAZQCtwE", "AssemblyAI"),
                        (0, exports.doc)("HuggingFace Course", "https://huggingface.co/learn/nlp-course/chapter1/1")
                    ]),
                    (0, exports.topic)("Transfer Learning Concepts", [
                        (0, exports.vid)("Transfer Learning Explained", "https://www.youtube.com/watch?v=yofjFQddwHE", "StatQuest"),
                        (0, exports.art)("Transfer Learning Guide", "https://huggingface.co/docs/transformers/training", "Hugging Face")
                    ]),
                    (0, exports.topic)("Fine-Tuning BERT / DistilBERT", [
                        (0, exports.vid)("Fine-Tune BERT for Sentiment Analysis", "https://www.youtube.com/watch?v=GSt00_-0ncQ", "Venelin Valkov"),
                        (0, exports.vid)("Hugging Face Fine-Tuning Tutorial", "https://www.youtube.com/watch?v=iY2AZYdZAr0", "James Briggs"),
                        (0, exports.doc)("HuggingFace Trainer", "https://huggingface.co/docs/transformers/main_classes/trainer")
                    ]),
                    (0, exports.topic)("Model Evaluation Metrics", [
                        (0, exports.vid)("Precision, Recall, F1 Explained", "https://www.youtube.com/watch?v=jJ7ff7Gcq34", "StatQuest"),
                        (0, exports.vid)("Confusion Matrix", "https://www.youtube.com/watch?v=Kdsp6soqA7o", "StatQuest"),
                        (0, exports.doc)("HuggingFace Evaluate", "https://huggingface.co/docs/evaluate/index")
                    ]),
                    (0, exports.topic)("Model Hub & Sharing", [
                        (0, exports.vid)("Push Model to Hub", "https://www.youtube.com/watch?v=Z1-XMy-GNLQ", "Hugging Face"),
                        (0, exports.doc)("Model Hub Guide", "https://huggingface.co/docs/hub/models")
                    ])
                ],
                project: {
                    title: "Sentiment Analysis API",
                    description: ["Fine-tune DistilBERT on IMDb reviews", "Achieve >92% accuracy", "Deploy as FastAPI with inference <200ms", "Push model to HuggingFace Hub"],
                    outcomes: ["Transfer learning mastery", "Model deployment skills"]
                }
            }
        ]
    },
    {
        id: "air-p3",
        title: "Phase 3: RAG Systems (The Money-Maker)",
        weeks: "Month 4",
        modules: [
            {
                id: "air-m3.1",
                title: "LangChain & LlamaIndex Frameworks",
                weeks: "Month 4 (Week 1ΓÇô2)",
                topics: [
                    (0, exports.topic)("LangChain Core Concepts", [
                        (0, exports.playlist)("Complete Langchain Course", "https://www.youtube.com/watch?v=tcqEUSNCn8I", "Krish Naik"),
                        (0, exports.playlist)("LangChain Full Course", "https://www.youtube.com/playlist?list=PLqAmigZvYxILVLf4e6r2dcq-S3WJ1mUfY", "Krish Naik"),
                        (0, exports.vid)("LangChain Crash Course", "https://www.youtube.com/watch?v=lG7Uxts9SXs", "Tech With Tim"),
                        (0, exports.doc)("LangChain Docs", "https://python.langchain.com/docs/get_started/introduction")
                    ]),
                    (0, exports.topic)("LlamaIndex for Data Frameworks", [
                        (0, exports.vid)("LlamaIndex Full Tutorial", "https://www.youtube.com/watch?v=cNMYeW2mpBs", "freeCodeCamp"),
                        (0, exports.doc)("LlamaIndex Docs", "https://docs.llamaindex.ai/en/stable/")
                    ]),
                    (0, exports.topic)("Chains, Agents & Tools", [
                        (0, exports.vid)("LangChain Agents Explained", "https://www.youtube.com/watch?v=jSP-gSEyVeI", "James Briggs"),
                        (0, exports.vid)("Building Agents with LangChain", "https://www.youtube.com/watch?v=DWUdGhRrv2c", "Sam Witteveen"),
                        (0, exports.doc)("LangChain Agents", "https://python.langchain.com/docs/modules/agents/")
                    ]),
                    (0, exports.topic)("Prompt Templates & Output Parsers", [
                        (0, exports.vid)("Prompt Engineering with LangChain", "https://www.youtube.com/watch?v=RflBcK0oDH0", "Patrick Loeber"),
                        (0, exports.doc)("LangChain Prompt Templates", "https://python.langchain.com/docs/modules/model_io/prompts/")
                    ])
                ],
                project: {
                    title: "Multi-Source Q&A Chatbot",
                    description: ["Build chatbot using LangChain", "Connect multiple data sources", "Implement conversation memory", "Add streaming responses"],
                    outcomes: ["LangChain/LlamaIndex proficiency", "Agent development"]
                }
            },
            {
                id: "air-m3.2",
                title: "Vector Databases & RAG Architecture",
                weeks: "Month 4 (Week 3ΓÇô4)",
                topics: [
                    (0, exports.topic)("Embedding Models & Semantic Search", [
                        (0, exports.vid)("Word Embeddings Explained", "https://www.youtube.com/watch?v=5MaWmXwxFNQ", "StatQuest"),
                        (0, exports.vid)("OpenAI Embeddings Tutorial", "https://www.youtube.com/watch?v=ySus5ZS0b94", "James Briggs"),
                        (0, exports.doc)("OpenAI Embeddings", "https://platform.openai.com/docs/guides/embeddings")
                    ]),
                    (0, exports.topic)("Vector DBs: Pinecone, ChromaDB, FAISS", [
                        (0, exports.vid)("ChromaDB Tutorial", "https://www.youtube.com/watch?v=3yPBVii7lzI", "pixegami"),
                        (0, exports.vid)("Pinecone + LangChain", "https://www.youtube.com/watch?v=LhnCsygAvzY", "James Briggs"),
                        (0, exports.doc)("Pinecone Learning Center", "https://www.pinecone.io/learn/"),
                        (0, exports.doc)("ChromaDB Docs", "https://docs.trychroma.com/")
                    ]),
                    (0, exports.topic)("Document Chunking Strategies", [
                        (0, exports.vid)("RAG Chunking Strategies", "https://www.youtube.com/watch?v=8OJC21T2SL4", "Greg Kamradt"),
                        (0, exports.art)("Chunking Best Practices", "https://www.pinecone.io/learn/chunking-strategies/", "Pinecone")
                    ]),
                    (0, exports.topic)("RAG Pipeline: End-to-End", [
                        (0, exports.playlist)("RAG - GenAI Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1D_3Y4uXk3O6y0PjS6j1o5I", "Vizuara AI"),
                        (0, exports.vid)("Complete RAG Tutorial 2026", "https://www.youtube.com/watch?v=tcqEUSNCn8I", "freeCodeCamp"),
                        (0, exports.vid)("RAG from Scratch", "https://www.youtube.com/watch?v=sVcwVQRHIc8", "LangChain"),
                        (0, exports.doc)("LangChain RAG Guide", "https://python.langchain.com/docs/use_cases/question_answering/")
                    ]),
                    (0, exports.topic)("Advanced RAG: Reranking & Hybrid Search", [
                        (0, exports.channel)("Vizuara AI (Vijayraja)", "https://www.youtube.com/@VizuaraAI"),
                        (0, exports.vid)("Advanced RAG Techniques", "https://www.youtube.com/watch?v=T-D1OfcDW1M", "LangChain"),
                        (0, exports.vid)("Reranking for Better RAG", "https://www.youtube.com/watch?v=9VgLi3wHNM0", "James Briggs"),
                        (0, exports.art)("Hybrid Search Guide", "https://www.pinecone.io/learn/hybrid-search-intro/", "Pinecone")
                    ]),
                    (0, exports.topic)("Conversation Memory & Source Citations", [
                        (0, exports.vid)("Memory in LangChain", "https://www.youtube.com/watch?v=kn7Yg3Ohsuw", "Sam Witteveen"),
                        (0, exports.doc)("LangChain Memory", "https://python.langchain.com/docs/modules/memory/")
                    ])
                ],
                project: {
                    title: "RAG-Powered PDF Knowledge Base",
                    description: ["Build RAG chatbot for PDF documents", "Use ChromaDB/Pinecone for vectors", "Add conversation memory & citations", "Implement hybrid search with reranking"],
                    outcomes: ["Production RAG systems", "Vector DB mastery", "High-demand skill achieved"]
                }
            }
        ]
    },
    {
        id: "air-p4",
        title: "Phase 4: Production & MLOps",
        weeks: "Month 5",
        modules: [
            {
                id: "air-m4.1",
                title: "Docker & Containerization",
                weeks: "Month 5 (Week 1ΓÇô2)",
                topics: [
                    (0, exports.topic)("Docker Fundamentals", [
                        (0, exports.vid)("Docker in 100 Seconds", "https://www.youtube.com/watch?v=Gjnup-PuquQ", "Fireship"),
                        (0, exports.playlist)("Docker Full Course", "https://www.youtube.com/playlist?list=PLy7NrYWoggjzfAHlUusx2wuDwfCrmJYcs", "TechWorld with Nana"),
                        (0, exports.doc)("Docker Official Docs", "https://docs.docker.com/get-started/")
                    ]),
                    (0, exports.topic)("Multi-stage Builds & Optimization", [
                        (0, exports.vid)("Docker Best Practices", "https://www.youtube.com/watch?v=8vmKtS8W7IQ", "TechWorld with Nana"),
                        (0, exports.vid)("Multi-stage Docker Builds", "https://www.youtube.com/watch?v=zpkqNPwEzac", "DevOps Directive"),
                        (0, exports.art)("Dockerfile Best Practices", "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/", "Docker")
                    ]),
                    (0, exports.topic)("Docker Compose for ML Services", [
                        (0, exports.vid)("Docker Compose Tutorial", "https://www.youtube.com/watch?v=HG6yIjZapSA", "TechWorld with Nana"),
                        (0, exports.doc)("Docker Compose Docs", "https://docs.docker.com/compose/")
                    ]),
                    (0, exports.topic)("Deploying ML Models with Docker", [
                        (0, exports.vid)("Deploy ML Models with FastAPI & Docker", "https://www.youtube.com/watch?v=h5wLuVDr0oc", "Patrick Loeber"),
                        (0, exports.art)("ML Docker Guide", "https://aws.amazon.com/blogs/machine-learning/deploy-deep-learning-models-on-amazon-ecs/", "AWS")
                    ])
                ],
                project: {
                    title: "Dockerized RAG Application",
                    description: ["Dockerize the RAG app from Month 4", "Multi-stage builds for optimization", "Docker Compose with vector DB + API", "Health checks and resource limits"],
                    outcomes: ["Container mastery", "ML deployment skills"]
                }
            },
            {
                id: "air-m4.2",
                title: "CI/CD & MLflow",
                weeks: "Month 5 (Week 2ΓÇô3)",
                topics: [
                    (0, exports.topic)("GitHub Actions for CI/CD", [
                        (0, exports.playlist)("GitHub Actions Full Course", "https://www.youtube.com/playlist?list=PLArH6NjfKsUhvGHrpag7SuPumMzQRhUKY", "TechWorld with Nana"),
                        (0, exports.vid)("GitHub Actions Tutorial", "https://www.youtube.com/watch?v=R8_veQiYBjI", "TechWorld with Nana"),
                        (0, exports.doc)("GitHub Actions Docs", "https://docs.github.com/en/actions")
                    ]),
                    (0, exports.topic)("Automated Testing in CI", [
                        (0, exports.vid)("CI/CD for ML Projects", "https://www.youtube.com/watch?v=9BgIDqAzfuA", "MLOps Community"),
                        (0, exports.art)("Testing ML Pipelines", "https://madewithml.com/courses/mlops/testing/", "Made With ML")
                    ]),
                    (0, exports.topic)("MLflow Experiment Tracking", [
                        (0, exports.vid)("MLflow Tutorial", "https://www.youtube.com/watch?v=ksYIVDue8ak", "Krish Naik"),
                        (0, exports.vid)("MLOps Zero to Hero", "https://www.youtube.com/watch?v=x3cxvsUFVZA", "Krish Naik"),
                        (0, exports.vid)("MLflow Complete Guide", "https://www.youtube.com/watch?v=x3cxvsUFVZA", "freeCodeCamp"),
                        (0, exports.doc)("MLflow Documentation", "https://mlflow.org/docs/latest/index.html")
                    ]),
                    (0, exports.topic)("Model Registry & Versioning", [
                        (0, exports.vid)("MLflow Model Registry", "https://www.youtube.com/watch?v=E6J86PlYBHk", "Databricks"),
                        (0, exports.doc)("MLflow Model Registry", "https://mlflow.org/docs/latest/model-registry.html")
                    ]),
                    (0, exports.topic)("Model Monitoring & Observability", [
                        (0, exports.vid)("ML Monitoring Explained", "https://www.youtube.com/watch?v=fZj6UOb1lXE", "Evidently AI"),
                        (0, exports.doc)("Evidently AI Docs", "https://docs.evidentlyai.com/")
                    ])
                ],
                project: {
                    title: "ML CI/CD Pipeline",
                    description: ["Setup GitHub Actions for testing & deployment", "Add MLflow for experiment tracking", "Implement model versioning & registry", "Create monitoring dashboard"],
                    outcomes: ["MLOps pipeline mastery", "Production ML workflows"]
                }
            },
            {
                id: "air-m4.3",
                title: "Cloud Deployment (AWS/GCP)",
                weeks: "Month 5 (Week 4)",
                topics: [
                    (0, exports.topic)("AWS EC2 & ECS Deployment", [
                        (0, exports.vid)("Deploy to AWS EC2", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        (0, exports.vid)("AWS ECS Tutorial", "https://www.youtube.com/watch?v=AYAh6YDXuho", "Be A Better Dev"),
                        (0, exports.doc)("AWS ECS Docs", "https://docs.aws.amazon.com/ecs/")
                    ]),
                    (0, exports.topic)("AWS Lambda for Serverless ML", [
                        (0, exports.vid)("AWS Lambda Tutorial", "https://www.youtube.com/watch?v=eOBq__h4OJ4", "Be A Better Dev"),
                        (0, exports.doc)("Lambda Docs", "https://docs.aws.amazon.com/lambda/")
                    ]),
                    (0, exports.topic)("Load Balancing & Auto-scaling", [
                        (0, exports.vid)("AWS ALB Tutorial", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        (0, exports.doc)("AWS ELB Docs", "https://docs.aws.amazon.com/elasticloadbalancing/")
                    ]),
                    (0, exports.topic)("GCP Vertex AI (Alternative)", [
                        (0, exports.vid)("Google Cloud AI Platform", "https://www.youtube.com/watch?v=6s9YbGcoYV4", "Google Cloud"),
                        (0, exports.doc)("Vertex AI Docs", "https://cloud.google.com/vertex-ai/docs")
                    ])
                ],
                project: {
                    title: "Cloud-Deployed ML Platform",
                    description: ["Deploy RAG app on AWS EC2/ECS", "Add load balancing & monitoring", "Configure auto-scaling policies", "Setup CloudWatch alerts"],
                    outcomes: ["Cloud deployment expertise", "Production infrastructure"]
                }
            }
        ]
    },
    {
        id: "air-p5",
        title: "Phase 5: Portfolio & Job Hunt",
        weeks: "Month 6",
        modules: [
            {
                id: "air-m5.1",
                title: "Portfolio Projects & GitHub",
                weeks: "Month 6 (Week 1ΓÇô2)",
                topics: [
                    (0, exports.topic)("End-to-End RAG with Custom UI (Streamlit/Gradio)", [
                        (0, exports.vid)("Streamlit Full Course", "https://www.youtube.com/watch?v=JoFGrSRj4X4", "freeCodeCamp"),
                        (0, exports.vid)("Gradio Tutorial", "https://www.youtube.com/watch?v=44vi31hehw4", "1littlecoder"),
                        (0, exports.doc)("Streamlit Docs", "https://docs.streamlit.io/"),
                        (0, exports.doc)("Gradio Docs", "https://www.gradio.app/docs/")
                    ]),
                    (0, exports.topic)("ML Model Serving with A/B Testing", [
                        (0, exports.vid)("A/B Testing for ML Models", "https://www.youtube.com/watch?v=Jl0gBNn4U7w", "MLOps Community"),
                        (0, exports.art)("ML A/B Testing Guide", "https://madewithml.com/courses/mlops/testing/#ab-tests", "Made With ML")
                    ]),
                    (0, exports.topic)("AI Agent for Business Workflow Automation", [
                        (0, exports.vid)("Build AI Agents", "https://www.youtube.com/watch?v=Eug2clsLtFs", "AI Jason"),
                        (0, exports.vid)("LangGraph Agent Tutorial", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        (0, exports.doc)("LangGraph Docs", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    (0, exports.topic)("GitHub README & Documentation", [
                        (0, exports.vid)("GitHub Profile README", "https://www.youtube.com/watch?v=KhGWbt1dAKQ", "codeSTACKr"),
                        (0, exports.art)("Awesome README Guide", "https://github.com/matiassingers/awesome-readme", "GitHub Community")
                    ]),
                    (0, exports.topic)("Quantifying Project Impact", [
                        (0, exports.vid)("How to Write a Technical Resume", "https://www.youtube.com/watch?v=aKjsy-b00QM", "TechLead"),
                        (0, exports.art)("STAR Method for Engineers", "https://www.levels.fyi/blog/applying-star-framework.html", "levels.fyi")
                    ])
                ],
                project: {
                    title: "3 Polished Portfolio Projects",
                    description: ["End-to-end RAG system with Streamlit UI", "ML model serving platform with A/B testing", "AI agent for real business workflow", "Quantify: latency, accuracy, throughput metrics"],
                    outcomes: ["Interview-ready portfolio", "Demonstrated business impact"]
                }
            },
            {
                id: "air-m5.2",
                title: "Resume, Blog & Job Applications",
                weeks: "Month 6 (Week 3ΓÇô4)",
                topics: [
                    (0, exports.topic)("ATS-Friendly Resume Optimization", [
                        (0, exports.vid)("Tech Resume Tips", "https://www.youtube.com/watch?v=J-4Fv8nq1iA", "Jeff Su"),
                        (0, exports.art)("ATS Resume Guide", "https://www.jobscan.co/blog/ats-resume-guide/", "Jobscan")
                    ]),
                    (0, exports.topic)("Technical Blog Writing (Dev.to/Hashnode)", [
                        (0, exports.vid)("Start a Dev Blog", "https://www.youtube.com/watch?v=qjsPHGMfzaA", "Traversy Media"),
                        (0, exports.art)("Technical Writing Guide", "https://developers.google.com/tech-writing", "Google")
                    ]),
                    (0, exports.topic)("Portfolio Website", [
                        (0, exports.vid)("Portfolio Website Tutorial", "https://www.youtube.com/watch?v=0YFrGy_mzjY", "Traversy Media"),
                        (0, exports.art)("Portfolio Best Practices", "https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/", "freeCodeCamp")
                    ]),
                    (0, exports.topic)("LinkedIn Optimization for AI Roles", [
                        (0, exports.vid)("LinkedIn for Developers", "https://www.youtube.com/watch?v=SG5Sb5WTV_g", "Joshua Fluke"),
                        (0, exports.art)("LinkedIn Tips for Engineers", "https://www.linkedin.com/pulse/optimize-linkedin-profile-2024-jeff-su/", "Jeff Su")
                    ]),
                    (0, exports.topic)("Job Search Strategy (20+ apps/week)", [
                        (0, exports.vid)("Job Search Strategy 2026", "https://www.youtube.com/watch?v=rEaS8nkJbOA", "Josh Talks"),
                        (0, exports.channel)("AI Engineer Job Boards", "https://www.youtube.com/@AIEngineerJobs")
                    ])
                ],
                project: {
                    title: "Complete Job Application Package",
                    description: ["Optimized ATS resume with metrics", "Portfolio website with 3 projects", "2+ technical blog posts published", "Apply to 20+ AI engineer roles per week"],
                    outcomes: ["Job-ready package", "Professional presence"]
                }
            }
        ]
    },
    {
        id: "air-p6",
        title: "Phase 6: Elite FAANG & Interview Prep",
        weeks: "Month 7ΓÇô12",
        modules: [
            {
                id: "air-m6.1",
                title: "ML System Design Interviews",
                weeks: "Month 7ΓÇô8",
                topics: [
                    (0, exports.topic)("ML System Design Framework", [
                        (0, exports.vid)("ML System Design Interview", "https://www.youtube.com/watch?v=pYs1lNd-XbI", "Stanford MLSys"),
                        (0, exports.vid)("Designing ML Systems", "https://www.youtube.com/watch?v=C9ABKzpwCHA", "ByteByteGo"),
                        (0, exports.art)("ML System Design Primer", "https://github.com/chiphuyen/machine-learning-systems-design", "Chip Huyen")
                    ]),
                    (0, exports.topic)("Design a Recommendation System", [
                        (0, exports.vid)("Recommendation System Design", "https://www.youtube.com/watch?v=BXcQUgCyplQ", "ByteByteGo"),
                        (0, exports.art)("Netflix Recommendations", "https://netflixtechblog.com/", "Netflix Tech Blog")
                    ]),
                    (0, exports.topic)("Design a Search Engine", [
                        (0, exports.vid)("How Google Search Works", "https://www.youtube.com/watch?v=0eKVizvYSUQ", "Google"),
                        (0, exports.vid)("Semantic Search System Design", "https://www.youtube.com/watch?v=dRUIGgNBvVk", "James Briggs")
                    ]),
                    (0, exports.topic)("Design an LLM-based Chatbot System", [
                        (0, exports.vid)("ChatGPT System Design", "https://www.youtube.com/watch?v=DjuXACWYkkU", "ByteByteGo"),
                        (0, exports.art)("LLM System Design", "https://huyenchip.com/2024/03/14/ai-oss.html", "Chip Huyen")
                    ]),
                    (0, exports.topic)("Design an AI Content Moderation System", [
                        (0, exports.vid)("Content Moderation ML", "https://www.youtube.com/watch?v=VClXOFVGmIQ", "Google"),
                        (0, exports.art)("AI Safety Systems", "https://openai.com/research/", "OpenAI")
                    ]),
                    (0, exports.topic)("Design a Real-time Fraud Detection System", [
                        (0, exports.vid)("Fraud Detection with ML", "https://www.youtube.com/watch?v=olfaBgJrUBI", "ByteByteGo"),
                        (0, exports.art)("Real-time ML Inference", "https://aws.amazon.com/blogs/machine-learning/", "AWS ML Blog")
                    ])
                ],
                project: {
                    title: "ML System Design Portfolio",
                    description: ["10+ ML system design documents", "Trade-off analysis for each system", "Architecture diagrams with data flow", "Practice mock interviews"],
                    outcomes: ["FAANG-level system design", "Interview mastery"]
                }
            },
            {
                id: "air-m6.2",
                title: "Advanced LLM Fine-Tuning & AI Agents",
                weeks: "Month 9ΓÇô10",
                topics: [
                    (0, exports.topic)("LoRA & QLoRA Fine-Tuning", [
                        (0, exports.vid)("LoRA Explained", "https://www.youtube.com/watch?v=YVU5wAA6Txo", "Weights & Biases"),
                        (0, exports.vid)("QLoRA Tutorial", "https://www.youtube.com/watch?v=XpoKB3usmKc", "Trelis Research"),
                        (0, exports.doc)("PEFT Library", "https://huggingface.co/docs/peft/index")
                    ]),
                    (0, exports.topic)("Dataset Preparation for Fine-Tuning", [
                        (0, exports.vid)("Create Fine-Tuning Datasets", "https://www.youtube.com/watch?v=hRm9gU7Mz_M", "Trelis Research"),
                        (0, exports.art)("Data Quality for LLMs", "https://huggingface.co/docs/datasets/", "Hugging Face")
                    ]),
                    (0, exports.topic)("RLHF & DPO Training", [
                        (0, exports.vid)("RLHF Explained", "https://www.youtube.com/watch?v=2MBJOuVq380", "Hugging Face"),
                        (0, exports.vid)("DPO Training Tutorial", "https://www.youtube.com/watch?v=NRVaNfAmb1Q", "Trelis Research"),
                        (0, exports.doc)("TRL Library", "https://huggingface.co/docs/trl/index")
                    ]),
                    (0, exports.topic)("AI Agents with LangGraph", [
                        (0, exports.vid)("LangGraph Full Course", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        (0, exports.vid)("Multi-Agent Systems", "https://www.youtube.com/watch?v=MxRn2N2DXvs", "AI Jason"),
                        (0, exports.doc)("LangGraph Documentation", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    (0, exports.topic)("CrewAI & AutoGen Frameworks", [
                        (0, exports.vid)("CrewAI Tutorial", "https://www.youtube.com/watch?v=sPzc6hMg7So", "Matt Williams"),
                        (0, exports.vid)("AutoGen Multi-Agent", "https://www.youtube.com/watch?v=vU2S6dVf79M", "Microsoft"),
                        (0, exports.doc)("CrewAI Docs", "https://docs.crewai.com/"),
                        (0, exports.doc)("AutoGen Docs", "https://microsoft.github.io/autogen/")
                    ]),
                    (0, exports.topic)("Model Quantization & Inference Optimization", [
                        (0, exports.vid)("Quantization Explained", "https://www.youtube.com/watch?v=ZKgCppMstSA", "Trelis Research"),
                        (0, exports.vid)("vLLM for Fast Inference", "https://www.youtube.com/watch?v=K4A0v1DpRiE", "AI Anytime"),
                        (0, exports.doc)("vLLM Docs", "https://docs.vllm.ai/en/latest/")
                    ])
                ],
                project: {
                    title: "Custom Fine-Tuned AI Agent",
                    description: ["Fine-tune LLM with LoRA/QLoRA", "Build multi-agent system with LangGraph", "Implement A/B testing between models", "Deploy optimized model with vLLM"],
                    outcomes: ["Advanced AI engineering", "Model optimization expertise"]
                }
            },
            {
                id: "air-m6.3",
                title: "FAANG Coding & Behavioral Prep",
                weeks: "Month 11ΓÇô12",
                topics: [
                    (0, exports.topic)("LeetCode: Arrays, Strings & HashMap", [
                        (0, exports.playlist)("NeetCode 150", "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf", "NeetCode"),
                        (0, exports.vid)("LeetCode Patterns Explained", "https://www.youtube.com/watch?v=DjYZk8nrXVY", "NeetCode"),
                        (0, exports.doc)("LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/")
                    ]),
                    (0, exports.topic)("LeetCode: Trees, Graphs & DP", [
                        (0, exports.playlist)("Dynamic Programming Playlist", "https://www.youtube.com/playlist?list=PLot-Xpze53lcvx_yhUmAgcehydjFTBIv3", "NeetCode"),
                        (0, exports.vid)("DP for Beginners", "https://www.youtube.com/watch?v=oBt53YbR9Kk", "freeCodeCamp")
                    ]),
                    (0, exports.topic)("ML-Specific Coding Problems", [
                        (0, exports.vid)("ML Coding Interview", "https://www.youtube.com/watch?v=bGDe0_xfD0I", "Weights & Biases"),
                        (0, exports.art)("ML Interview Questions", "https://github.com/alirezadir/Machine-Learning-Interviews", "GitHub Community")
                    ]),
                    (0, exports.topic)("Behavioral Interview (STAR Method)", [
                        (0, exports.vid)("FAANG Behavioral Interview", "https://www.youtube.com/watch?v=PJKYqLP6MRE", "Jeff Su"),
                        (0, exports.vid)("Amazon Leadership Principles", "https://www.youtube.com/watch?v=CpcxVE5JIX4", "Dan Croitor"),
                        (0, exports.art)("Behavioral Interview Guide", "https://www.levels.fyi/blog/applying-star-framework.html", "levels.fyi")
                    ]),
                    (0, exports.topic)("System Design Mock Interviews", [
                        (0, exports.channel)("ByteByteGo", "https://www.youtube.com/@ByteByteGo"),
                        (0, exports.channel)("NeetCode", "https://www.youtube.com/@NeetCode"),
                        (0, exports.vid)("System Design Interview Tips", "https://www.youtube.com/watch?v=F-4yyjhkn7s", "Exponent"),
                        (0, exports.art)("System Design Primer", "https://github.com/donnemartin/system-design-primer", "GitHub Community")
                    ]),
                    (0, exports.topic)("Salary Negotiation & Offer Comparison", [
                        (0, exports.vid)("How to Negotiate Salary", "https://www.youtube.com/watch?v=u9BoG1n1948", "Josh Fluke"),
                        (0, exports.vid)("Negotiating Tech Offers", "https://www.youtube.com/watch?v=fyn0CKPuPlA", "Rahul Pandey"),
                        (0, exports.art)("Salary Negotiation Guide", "https://www.levels.fyi/blog/salary-negotiation-tips.html", "levels.fyi")
                    ])
                ],
                project: {
                    title: "FAANG Interview Readiness",
                    description: ["Solve 200+ LeetCode problems (NeetCode 150 + ML-specific)", "Complete 10 mock system design interviews", "Practice 20+ behavioral scenarios (STAR)", "Negotiate and compare $200K+ offers"],
                    outcomes: ["FAANG interview ready", "Land $200K+ AI Engineer role"]
                }
            }
        ]
    }
];
// ===== PLAN 7: ULTIMATE 5D PARALLELISM LEARNING PLAN =====
const parallelism5DPlan = [
    {
        id: "5dp-p1",
        title: "Phase 1: GPU & Memory Mastery",
        weeks: "Month 1",
        modules: [
            {
                id: "5dp-m1.1",
                title: "Anatomy of a GPU & Low-Level Foundations",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("CPU vs. GPU Architecture", [
                        (0, exports.doc)("Volta Architecture Whitepaper", "https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf"),
                        (0, exports.art)("The CUDA Programming Model", "https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/"),
                        (0, exports.vid)("Anatomy of a GPU", "https://www.youtube.com/watch?v=7Mre8H91bBA", "Vizuara AI")
                    ]),
                    (0, exports.topic)("The CUDA Execution Model", [
                        (0, exports.vid)("CUDA C/C++ Basics", "https://www.youtube.com/playlist?list=PLxNPSjHT5qvtYRVdIE1yETCGcqJQncYGL", "CoffeeBeforeArch"),
                        (0, exports.art)("Warp Divergence & Scheduling", "https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html"),
                        (0, exports.course)("CUDA Programming Masterclass", "https://www.udemy.com/course/cuda-programming-masterclass/")
                    ]),
                    (0, exports.topic)("GPU Memory Hierarchy", [
                        (0, exports.art)("Memory Coalescing Explained", "https://developer.nvidia.com/blog/how-access-global-memory-efficiently-cuda-c-kernels/"),
                        (0, exports.vid)("Shared Memory in CUDA", "https://www.youtube.com/watch?v=0wV3pGvNlO0", "Tech With Tim")
                    ]),
                    (0, exports.topic)("Writing the First Kernel", [
                        (0, exports.art)("OpenAI Triton Language", "https://triton-lang.org/main/index.html"),
                        (0, exports.vid)("Custom GEMM in CUDA", "https://www.youtube.com/watch?v=2T9pPInUuM4", "CoffeeBeforeArch")
                    ])
                ],
                project: {
                    title: "Hardware-Aware GEMM Kernel",
                    description: ["Write a raw Matrix Multiplication kernel", "Optimize using Shared Memory and L1 cache", "Bypass PyTorch abstractions"],
                    outcomes: ["Understand SMs & Tensor Cores", "Eliminate memory bottlenecks"]
                }
            },
            {
                id: "5dp-m1.2",
                title: "PyTorch Internals & The Memory Wall",
                weeks: "Week 3-4",
                topics: [
                    (0, exports.topic)("The Training Loop Deconstructed", [
                        (0, exports.vid)("PyTorch Autograd (Micrograd)", "https://www.youtube.com/watch?v=MswxTl-EQcs", "Andrej Karpathy"),
                        (0, exports.art)("Autograd Reverse-mode BP", "https://pytorch.org/docs/stable/notes/autograd.html")
                    ]),
                    (0, exports.topic)("Anatomy of GPU Memory", [
                        (0, exports.art)("Deep Learning Go Brrrr", "https://horace.io/brrr_intro.html", "Horace He"),
                        (0, exports.doc)("Sublinear Memory Cost Paper", "https://arxiv.org/abs/1604.06174")
                    ]),
                    (0, exports.topic)("Memory Optimization: Checkpointing & Precision", [
                        (0, exports.vid)("Mixed Precision Training", "https://www.youtube.com/watch?v=6id88qHh-u0", "Patrick Loeber"),
                        (0, exports.course)("PyTorch for Deep Learning", "https://www.udemy.com/course/pytorch-for-deep-learning/")
                    ])
                ],
                project: {
                    title: "Memory Profiler & Checkpointer",
                    description: ["Calculate byte-size of Params vs Gradients vs Activations", "Implement manual Activation Checkpointing", "Train OOM-sized model on 1 GPU"],
                    outcomes: ["Predict OOM before training", "Master trade-offs (compute for memory)"]
                }
            }
        ]
    },
    {
        id: "5dp-p2",
        title: "Phase 2: 1D & 2D Parallelism (Data & Tensor)",
        weeks: "Month 2",
        modules: [
            {
                id: "5dp-m2.1",
                title: "Network Topology & 1D (Data) Parallelism",
                weeks: "Week 5-6",
                topics: [
                    (0, exports.topic)("GPU Communication (NCCL)", [
                        (0, exports.art)("Ring All-Reduce Visualization", "https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/"),
                        (0, exports.doc)("PyTorch Distributed Paper", "https://arxiv.org/abs/2006.15704")
                    ]),
                    (0, exports.topic)("DDP: Multi-Process Training", [
                        (0, exports.vid)("PyTorch DDP Tutorial", "https://www.youtube.com/watch?v=KaAJA7XJpsE", "PyTorch"),
                        (0, exports.doc)("DistributedDataParallel Design", "https://pytorch.org/docs/stable/notes/ddp.html")
                    ]),
                    (0, exports.topic)("NCCL Primitives & Overlap", [
                        (0, exports.vid)("Collective Communication Basics", "https://www.youtube.com/watch?v=KaAJA7XJpsE", "PyTorch"),
                        (0, exports.course)("Distributed DL with PyTorch", "https://www.coursera.org/learn/advanced-deployment-scenarios-pytorch")
                    ])
                ],
                project: {
                    title: "Multi-Process Distributed Trainer",
                    description: ["Write a DDP script handling 8 GPUs", "Diagram NVLink vs PCIe data flow", "Measure scaling efficiency"],
                    outcomes: ["Spawn independent card processes", "Discard DataParallel indefinitely"]
                }
            },
            {
                id: "5dp-m2.2",
                title: "Tensor/Model Parallelism (2D)",
                weeks: "Week 7-8",
                topics: [
                    (0, exports.topic)("Megatron-LM & Vertical Slicing", [
                        (0, exports.doc)("Megatron-LM Architecture Paper", "https://arxiv.org/abs/1909.08053"),
                        (0, exports.vid)("Megatron-LM Explained", "https://www.youtube.com/watch?v=R_7iPZfQ1Lw", "Yannic Kilcher")
                    ]),
                    (0, exports.topic)("Row & Column Parallelism", [
                        (0, exports.art)("HuggingFace Tensor Parallelism", "https://huggingface.co/docs/transformers/v4.15.0/en/parallel_computations"),
                        (0, exports.vid)("Slicing Attention Matrices", "https://www.youtube.com/watch?v=DWUdGhRrv2c", "Vizuara AI")
                    ]),
                    (0, exports.topic)("Parallelizing Transformers", [
                        (0, exports.doc)("NCCL Backend Config", "https://pytorch.org/docs/stable/distributed.html"),
                        (0, exports.course)("NVIDIA DLI: Multi-GPU Training", "https://courses.nvidia.com/courses/course-v1:DLI+S-FX-04+V1/")
                    ])
                ],
                project: {
                    title: "Megatron-Style Attention Writer",
                    description: ["Rewrite nn.Linear for Column Parallelism", "Implement Row Parallelism sum-reduction", "Shard a massive 7B transformer manually"],
                    outcomes: ["Shard individual matrices mathematically", "Eliminate idle GPU time"]
                }
            }
        ]
    },
    {
        id: "5dp-p3",
        title: "Phase 3: Deep Optimization (3D & 4D)",
        weeks: "Month 3",
        modules: [
            {
                id: "5dp-m3.1",
                title: "Pipeline Parallelism (3D)",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.topic)("Inter-NodeRDMA & Infiniband", [
                        (0, exports.doc)("GPipe Staging Paper", "https://arxiv.org/abs/1811.06965"),
                        (0, exports.art)("Remote Direct Memory Access (RDMA)", "https://www.ibm.com/docs/en/aix/7.2?topic=protocol-remote-direct-memory-access")
                    ]),
                    (0, exports.topic)("GPipe vs 1F1B Scheduling", [
                        (0, exports.art)("DeepSpeed Pipeline Schedules", "https://www.deepspeed.ai/tutorials/pipeline/"),
                        (0, exports.vid)("Stanford Pipeline Lecture", "https://www.youtube.com/watch?v=b0E-xG1t-p4", "Stanford CS25")
                    ]),
                    (0, exports.topic)("Managing the Pipeline Bubble", [
                        (0, exports.art)("Stochastic Rounding & Gradients", "https://arxiv.org/abs/1412.7024"),
                        (0, exports.course)("Advanced DL with DeepSpeed", "https://www.udemy.com/topic/deep-learning/")
                    ])
                ],
                project: {
                    title: "Pipeline Scheduler Implementation",
                    description: ["Design a 1F1B micro-batch schedule", "Calculate bubble % overhead", "Tune batch size to minimize idle time"],
                    outcomes: ["Shard layer-by-layer across nodes", "Maximize inter-node throughput"]
                }
            },
            {
                id: "5dp-m3.2",
                title: "ZeRO / FSDP (4D Parallelism)",
                weeks: "Week 11-12",
                topics: [
                    (0, exports.topic)("ZeRO Optimization Stages", [
                        (0, exports.doc)("ZeRO Trillion Param Paper", "https://arxiv.org/abs/1910.02054"),
                        (0, exports.vid)("Visualizing ZeRO Framework", "https://www.youtube.com/watch?v=AWe8_t_H2i8", "Explain AI")
                    ]),
                    (0, exports.topic)("Fully Sharded Data Parallel (FSDP)", [
                        (0, exports.art)("PyTorch FSDP Blog", "https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/"),
                        (0, exports.playlist)("ZeRO & FSDP Deep Dive", "https://www.youtube.com/playlist?list=PL_X9T8S_A6Wv8Y3k_X75mS-dY94Vp8d6m", "Vizuara AI")
                    ]),
                    (0, exports.topic)("Overlapping All-Gather/Reduce-Scatter", [
                        (0, exports.art)("DeepSpeed Communication Optimization", "https://www.deepspeed.ai/tutorials/zero/"),
                        (0, exports.course)("LLM Engineering & Deployment", "https://www.udemy.com/course/large-language-models/")
                    ])
                ],
                project: {
                    title: "Native PyTorch FSDP Wrapper",
                    description: ["Implement Stage 1, 2, and 3 sharding", "Monitor memory savings with FSDP", "Overlap fetch-weights with compute"],
                    outcomes: ["Zero memory redundancy", "Train trillion-param models economically"]
                }
            }
        ]
    },
    {
        id: "5dp-p4",
        title: "Phase 4: Advanced Dimensions & Mastery",
        weeks: "Month 4-6",
        modules: [
            {
                id: "5dp-m4.1",
                title: "Sequence, Context & Expert Parallelism",
                weeks: "4 Weeks",
                topics: [
                    (0, exports.topic)("Sequence Parallelism (SP)", [
                        (0, exports.doc)("Reducing Activation Recomputation", "https://arxiv.org/abs/2205.05198"),
                        (0, exports.art)("Token-Dimension Sharding", "https://github.com/NVIDIA/Megatron-LM")
                    ]),
                    (0, exports.topic)("Context Parallelism & Ring Attention", [
                        (0, exports.doc)("Ring Attention Paper", "https://arxiv.org/abs/2310.01889"),
                        (0, exports.vid)("FlashAttention How it Works", "https://www.youtube.com/watch?v=FthNMHAet3E", "Yannic Kilcher")
                    ]),
                    (0, exports.topic)("Expert Parallelism & MoE", [
                        (0, exports.art)("Mixture of Experts Explained", "https://huggingface.co/blog/moe"),
                        (0, exports.doc)("All-to-All Communication Primitive", "https://pytorch.org/docs/stable/distributed.html")
                    ])
                ],
                project: {
                    title: "MoE Router Logic & Ring Attention",
                    description: ["Define sparse MoE token-routing logic", "Simulate Ring Attention communication", "Implement sequence-length sharding"],
                    outcomes: ["Handle infinite context windows", "Manage sparse scaling natively"]
                }
            },
            {
                id: "5dp-m4.2",
                title: "Capstone: GPT-2 Distributed From Scratch",
                weeks: "4-8 Weeks",
                topics: [
                    (0, exports.topic)("GPT-2 Architecture (Karpathy style)", [
                        (0, exports.vid)("Build GPT from Scratch", "https://www.youtube.com/watch?v=kCc8FmEb1nY", "Andrej Karpathy"),
                        (0, exports.doc)("Original GPT-2 Paper", "https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf")
                    ]),
                    (0, exports.topic)("Applying the 5 Dimensions", [
                        (0, exports.art)("The Annotated Transformer", "https://nlp.seas.harvard.edu/2018/04/03/attention.html"),
                        (0, exports.vid)("Distributed GPT Training", "https://www.youtube.com/watch?v=KaAJA7XJpsE", "PyTorch")
                    ]),
                    (0, exports.topic)("Measuring Scaling Efficiency", [
                        (0, exports.art)("Model FLOPs Utilization (MFU)", "https://arxiv.org/abs/2211.05102"),
                        (0, exports.course)("Vizuara: 5D Parallelism Bootcamp", "https://5d-parallelism.vizuara.ai/")
                    ])
                ],
                project: {
                    title: "Ultimate 5D Parallel Training Script",
                    description: ["Build GPT-2 with RoPE and Self-Attention", "Parallelize across 8 GPUs using 5D dimensions", "Log MFU and tokens/sec on Rank 0"],
                    outcomes: ["Industrial-grade LLM engineer", "Linear scaling verification"]
                }
            }
        ]
    },
    {
        id: "fde-p5",
        title: "Phase 5: Forward Deployed ML Ops & Infra",
        weeks: "2-4 Weeks",
        modules: [
            {
                id: "fde-m5.1",
                title: "Model Serving & Optimization",
                weeks: "2 Weeks",
                topics: [
                    (0, exports.topic)("High-Throughput Serving (vLLM, TensorRT-LLM)", [
                        (0, exports.vid)("vLLM Deep Dive", "https://www.youtube.com/watch?v=110", "Vizuara AI"),
                        (0, exports.doc)("TensorRT-LLM Quickstart", "https://github.com/NVIDIA/TensorRT-LLM")
                    ]),
                    (0, exports.topic)("Docker & K8s for AI Models", [
                        (0, exports.vid)("Kubernetes for MLOps", "https://www.youtube.com/watch?v=220", "TechWorld with Nana")
                    ])
                ],
                project: {
                    title: "K8s High-Performance LLM Endpoint",
                    description: ["Containerize a 7B model using vLLM", "Deploy to Minikube with autoscaling on GPU utilization"],
                    outcomes: ["Enterprise Model Deployment", "High-throughput engineering"]
                }
            }
        ]
    },
    {
        id: "fde-p6",
        title: "Phase 6: Enterprise Data Engineering",
        weeks: "2-3 Weeks",
        modules: [
            {
                id: "fde-m6.1",
                title: "Data Pipelines & AI Integration",
                weeks: "1.5 Weeks",
                topics: [
                    (0, exports.topic)("Streaming Architectures (Kafka)", [
                        (0, exports.vid)("Apache Kafka Crash Course", "https://www.youtube.com/watch?v=330")
                    ]),
                    (0, exports.topic)("Data Lakes & Processing (PySpark, Databricks)", [
                        (0, exports.vid)("PySpark Full Course", "https://www.youtube.com/watch?v=440")
                    ]),
                    (0, exports.topic)("Security, RBAC & API Gateways", [
                        (0, exports.doc)("OWASP API Security", "https://owasp.org/API-Security/")
                    ])
                ],
                project: {
                    title: "Real-time AI Processing Pipeline",
                    description: ["Ingest live data via Kafka", "Process with PySpark and route to Vector DB securely"],
                    outcomes: ["Bridge Data Eng & AI", "Secure enterprise deployments"]
                }
            }
        ]
    },
    {
        id: "fde-p7",
        title: "Phase 7: Applied AI Solutions & FDE Delivery",
        weeks: "3-4 Weeks",
        modules: [
            {
                id: "fde-m7.1",
                title: "Advanced RAG & Agentic Delivery",
                weeks: "2 Weeks",
                topics: [
                    (0, exports.topic)("Production RAG (Hybrid, GraphRAG, Query Routing)", [
                        (0, exports.vid)("Advanced RAG Patterns", "https://www.youtube.com/watch?v=550", "LangChain")
                    ]),
                    (0, exports.topic)("Client-Facing Engineering & Stakeholder Mgmt", [
                        (0, exports.art)("The Forward Deployed Engineer Role", "https://medium.com/@FDE")
                    ])
                ],
                project: {
                    title: "Enterprise Agentic Solution",
                    description: ["Build a multi-agent system scoped to a mock client's messy enterprise data", "Deploy end-to-end with SLA metrics and trace observability"],
                    outcomes: ["Full-stack FDE capability", "Consulting & execution mastery"]
                }
            }
        ]
    }
];
// ===== PLAN 8: MICROSOFT AI AGENT ARCHITECT (.NET) =====
const microsoftAgentPlan = [
    {
        id: "ms-agent-p1",
        title: "1-Week Build: UI Explorer AI Agent",
        weeks: "Week 1",
        modules: [
            {
                id: "ms-agent-m1.1",
                title: "Day 1-2: .NET 9 & SDK Foundation",
                weeks: "Day 1-2",
                topics: [
                    (0, exports.topic)(".NET 9 & Agent SDK Setup", [
                        (0, exports.doc)("Microsoft Agent Framework SDK", "https://github.com/microsoft/agent-framework"),
                        (0, exports.doc)("Microsoft.Extensions.AI Docs", "https://learn.microsoft.com/en-us/dotnet/ai/extensions"),
                        (0, exports.vid)("Microsoft Agent Framework Intro", "https://www.youtube.com/watch?v=R-SjL6m-S-M", "Microsoft")
                    ]),
                    (0, exports.topic)("Multimodal Vision Integration", [
                        (0, exports.doc)("GPT-4V with .NET AI", "https://learn.microsoft.com/en-us/dotnet/ai/get-started-multimodal"),
                        (0, exports.vid)("Vision Agents in .NET", "https://www.youtube.com/watch?v=DWUdGhRrv2c", "Vizuara AI")
                    ])
                ],
                project: {
                    title: "Vision-First UI Describer",
                    description: ["Initialize .NET 9 console app with Agent SDK", "Integrate Playwright for live browser screenshotting", "Build an agent that describes UI layout from pixels"],
                    outcomes: ["Master .NET AI Hub patterns", "Perceive UI without DOM reliance"]
                }
            },
            {
                id: "ms-agent-m1.2",
                title: "Day 3-4: A11y Parsing & Action Tools",
                weeks: "Day 3-4",
                topics: [
                    (0, exports.topic)("Semantic DOM: Accessibility Tree", [
                        (0, exports.art)("Perceiving the Web via A11y", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility"),
                        (0, exports.doc)("Playwright A11y Snapshot API", "https://playwright.dev/docs/api/class-accessibility")
                    ]),
                    (0, exports.topic)("Defining Agentic Web Tools", [
                        (0, exports.doc)("Agent Tool Calling in .NET", "https://learn.microsoft.com/en-us/dotnet/ai/agents/tools"),
                        (0, exports.art)("Reliable Web Interaction Logic", "https://playwright.dev/docs/actionability")
                    ])
                ],
                project: {
                    title: "Semantic UI Interaction Hub",
                    description: ["Extract Accessibility Tree to reduce token noise", "Map DOM elements to semantic roles (Button, Search, Nav)", "Implement 'Safe-Click' and 'Intelligent-Type' tools"],
                    outcomes: ["Drastically reduce LLM context costs", "Build robust action handlers"]
                }
            },
            {
                id: "ms-agent-m1.3",
                title: "Day 5-6: Planning & Observability",
                weeks: "Day 5-6",
                topics: [
                    (0, exports.topic)("Graph-Based Planning Orchestration", [
                        (0, exports.doc)("AgentGroupChat in .NET", "https://learn.microsoft.com/en-us/dotnet/ai/agents/orchestration"),
                        (0, exports.vid)("Multi-Agent Planning Loops", "https://www.youtube.com/watch?v=FthNMHAet3E", "Yannic Kilcher")
                    ]),
                    (0, exports.topic)("Telemetry & Azure AI Foundry", [
                        (0, exports.doc)("Azure AI Foundry Agents", "https://azure.microsoft.com/en-us/products/ai-foundry"),
                        (0, exports.doc)("OpenTelemetry for AI Agents", "https://learn.microsoft.com/en-us/dotnet/ai/observability")
                    ])
                ],
                project: {
                    title: "Self-Correcting Explorer",
                    description: ["Implement a Plan-Act-Verify loop", "Handle 'Auth Redirects' and 'Popups' as edge cases", "Integrate OpenTelemetry for reasoning traces"],
                    outcomes: ["Handle complex state changes", "Debug agent reasoning in production"]
                }
            },
            {
                id: "ms-agent-m1.4",
                title: "Day 7: Capstone - The Autonomous Shopper",
                weeks: "Day 7",
                topics: [
                    (0, exports.topic)("Complex Multi-Step Workflows", [
                        (0, exports.art)("Automating E-commerce with Agents", "https://github.com/microsoft/agent-framework/tree/main/examples"),
                        (0, exports.vid)("Agentic Workflow Patterns", "https://www.youtube.com/watch?v=kCc8FmEb1nY", "Andrej Karpathy")
                    ]),
                    (0, exports.topic)("Edge Case: Human-in-the-Loop", [
                        (0, exports.doc)("Agent Collaboration Patterns", "https://learn.microsoft.com/en-us/dotnet/ai/agents/patterns")
                    ])
                ],
                project: {
                    title: "Autonomous Checkout Agent",
                    description: ["Automate a full multi-step checkout flow on a demo site", "Handle CAPTCHAs via Human-in-the-loop triggers", "Generate a detailed session report with screenshots"],
                    outcomes: ["Industrial-grade UI Agent Architect", "Master complex enterprise workflows"]
                }
            }
        ]
    }
];
// ===== PLAN 9: PYTHON FULL STACK + AI (HINDI) ΓÇö JOB-READY =====
const pythonHindiPlan = [
    {
        id: "py-hindi-p1",
        title: "Phase 1: Zero to Coder ΓÇö CS Foundations & Python",
        weeks: "Months 1-2 (8 Weeks)",
        modules: [
            {
                id: "py-hindi-m1.1",
                title: "Computer Science & OS Foundations",
                weeks: "Week 1",
                topics: [
                    (0, exports.topic)("How Computers Work (Hardware ΓåÆ Software)", [
                        (0, exports.vid)("How Computers Work (Hindi)", "https://www.youtube.com/watch?v=RoXJVebh--Y", "Apna College"),
                        (0, exports.art)("CS50 Binary & Hardware Notes", "https://cs50.harvard.edu/x/2024/notes/0/")
                    ]),
                    (0, exports.topic)("Operating System Fundamentals", [
                        (0, exports.vid)("OS Concepts: Process, Threads, Memory", "https://www.youtube.com/watch?v=26QPDBe-NB8", "Apna College"),
                        (0, exports.art)("Operating System Concepts (GeeksForGeeks)", "https://www.geeksforgeeks.org/operating-systems/")
                    ]),
                    (0, exports.topic)("CLI & Terminal Mastery", [
                        (0, exports.vid)("Linux Command Line (Hindi)", "https://www.youtube.com/watch?v=Wbz_r2t7xtg", "CodeWithHarry"),
                        (0, exports.doc)("Linux Command Line Cheatsheet", "https://cheatography.com/davechild/cheat-sheets/linux-command-line/")
                    ]),
                    (0, exports.topic)("Computer Networking Basics (HTTP, DNS, IPs)", [
                        (0, exports.vid)("Computer Networks Crash Course (Hindi)", "https://www.youtube.com/watch?v=IPvYjXCsTg8", "Apna College"),
                        (0, exports.art)("How the Web Works (MDN)", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works")
                    ])
                ],
                project: {
                    title: "Dev Environment Setup",
                    description: ["Install Ubuntu/WSL on Windows", "Learn 30 essential terminal commands", "Configure .bashrc with custom aliases"],
                    outcomes: ["Comfortable with CLI", "Understand how OS schedules programs"]
                }
            },
            {
                id: "py-hindi-m1.2",
                title: "Git & GitHub for Developers",
                weeks: "Week 2",
                topics: [
                    (0, exports.topic)("Git Basics: init, add, commit, log, diff", [
                        (0, exports.vid)("Git & GitHub Full Course (Hindi)", "https://www.youtube.com/watch?v=gwWKnnCMQ5c", "CodeWithHarry"),
                        (0, exports.doc)("Git Official Docs", "https://git-scm.com/doc")
                    ]),
                    (0, exports.topic)("Branching Strategies: merge, rebase, conflict resolution", [
                        (0, exports.vid)("Git Branching (Hindi)", "https://www.youtube.com/watch?v=vwj89i2FmG0", "Thapa Technical"),
                        (0, exports.art)("Atlassian Git Branching Guide", "https://www.atlassian.com/git/tutorials/using-branches")
                    ]),
                    (0, exports.topic)("GitHub: PRs, Issues, GitHub Actions CI/CD", [
                        (0, exports.vid)("GitHub Workflow Tutorial (Hindi)", "https://www.youtube.com/watch?v=RGOj5yH7evk", "freeCodeCamp"),
                        (0, exports.doc)("GitHub Actions Docs", "https://docs.github.com/en/actions")
                    ]),
                    (0, exports.topic)("Open Source: Fork, Clone, Contributing via PRs", [
                        (0, exports.art)("How to Contribute to Open Source", "https://opensource.guide/how-to-contribute/")
                    ])
                ],
                project: {
                    title: "My First Open Source Contribution",
                    description: ["Fork any beginner-friendly repo on GitHub", "Fix a bug or add a feature", "Submit a Pull Request following the contribution guide"],
                    outcomes: ["Industry-standard Git workflow", "GitHub profile building begins"]
                }
            },
            {
                id: "py-hindi-m1.3",
                title: "Python Programming: Core Fundamentals",
                weeks: "Week 3-5",
                topics: [
                    (0, exports.topic)("Variables, Data Types, Type Casting", [
                        (0, exports.playlist)("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        (0, exports.doc)("Python Official Docs", "https://docs.python.org/3/")
                    ]),
                    (0, exports.topic)("Control Flow: if/elif/else, match-case", [
                        (0, exports.playlist)("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry")
                    ]),
                    (0, exports.topic)("Loops: for, while, break, continue, enumerate", [
                        (0, exports.playlist)("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry")
                    ]),
                    (0, exports.topic)("Functions: args, kwargs, default args, lambda, closures", [
                        (0, exports.playlist)("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        (0, exports.art)("Python Functions Deep Dive", "https://realpython.com/defining-your-own-python-function/")
                    ]),
                    (0, exports.topic)("Data Structures: List, Tuple, Set, Dict, Comprehensions", [
                        (0, exports.playlist)("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        (0, exports.art)("Python Data Structures (Real Python)", "https://realpython.com/python-data-structures/")
                    ]),
                    (0, exports.topic)("File I/O: read, write, with statement, CSV, JSON", [
                        (0, exports.vid)("File Handling in Python (Hindi)", "https://www.youtube.com/watch?v=E_Tz8X1oiM4", "CodeWithHarry")
                    ]),
                    (0, exports.topic)("Error Handling: try/except/finally, custom exceptions", [
                        (0, exports.art)("Python Exception Handling", "https://realpython.com/python-exceptions/")
                    ]),
                    (0, exports.topic)("Modules, Packages, pip, virtual environments (venv)", [
                        (0, exports.vid)("Python Modules & venv (Hindi)", "https://www.youtube.com/watch?v=cY56C2aS3h4", "CodeWithHarry")
                    ])
                ],
                project: {
                    title: "CLI Expense Tracker",
                    description: ["Track income/expenses with categories", "Save/load data to a JSON file", "Show weekly summary reports in the terminal"],
                    outcomes: ["Solid Python fundamentals", "Build logic for real-world automation"]
                }
            },
            {
                id: "py-hindi-m1.4",
                title: "Object Oriented Programming (OOP)",
                weeks: "Week 6-8",
                topics: [
                    (0, exports.topic)("Classes & Objects: __init__, self, instance vs class vars", [
                        (0, exports.playlist)("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        (0, exports.art)("Python OOP (Real Python)", "https://realpython.com/python3-object-oriented-programming/")
                    ]),
                    (0, exports.topic)("Inheritance, Polymorphism, Encapsulation, Abstraction", [
                        (0, exports.vid)("OOP in Python (Hindi)", "https://www.youtube.com/watch?v=qiSCMNBIP2g", "Apna College"),
                        (0, exports.art)("4 Pillars of OOP", "https://www.geeksforgeeks.org/object-oriented-programming-in-python-set-1-class-and-its-members/")
                    ]),
                    (0, exports.topic)("Magic/Dunder Methods: __str__, __repr__, __len__, __eq__", [
                        (0, exports.art)("Python Dunder Methods Guide", "https://realpython.com/python-magic-methods/")
                    ]),
                    (0, exports.topic)("Decorators & Property: @staticmethod, @classmethod, @property", [
                        (0, exports.art)("Python Decorators Explained", "https://realpython.com/primer-on-python-decorators/")
                    ]),
                    (0, exports.topic)("Advanced Python: Generators, Iterators, Context Managers", [
                        (0, exports.art)("Python Generators & Iterators", "https://realpython.com/introduction-to-python-generators/")
                    ])
                ],
                project: {
                    title: "Library Management System (OOP)",
                    description: ["Model Book, Member, Library classes with full OOP principles", "Add borrow/return logic with inheritance", "Persist data to JSON file"],
                    outcomes: ["Job-interview-ready OOP skills", "Understand class design patterns"]
                }
            }
        ]
    },
    {
        id: "py-hindi-p2",
        title: "Phase 2: Web Foundations & Databases",
        weeks: "Month 3 (4 Weeks)",
        modules: [
            {
                id: "py-hindi-m2.1",
                title: "Web Front-End: HTML5 & CSS3",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("HTML5: Semantic Elements, Forms, Tables, Media", [
                        (0, exports.playlist)("Web Development Course (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzj2Mdn", "CodeWithHarry"),
                        (0, exports.doc)("HTML MDN Reference", "https://developer.mozilla.org/en-US/docs/Web/HTML")
                    ]),
                    (0, exports.topic)("CSS3: Box Model, Flexbox, CSS Grid", [
                        (0, exports.playlist)("Web Development Course (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzj2Mdn", "CodeWithHarry"),
                        (0, exports.art)("CSS Flexbox Complete Guide (CSS-Tricks)", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/")
                    ]),
                    (0, exports.topic)("Responsive Design: Media Queries, Mobile-First", [
                        (0, exports.art)("Responsive Web Design (MDN)", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"),
                        (0, exports.vid)("Responsive Design Tutorial (Hindi)", "https://www.youtube.com/watch?v=VsNAuGkCpQU", "CodeWithHarry")
                    ]),
                    (0, exports.topic)("JavaScript Basics for Backend Devs (DOM, Events, Fetch API)", [
                        (0, exports.vid)("JavaScript Crash Course (Hindi)", "https://www.youtube.com/watch?v=hKB-YGF14SY", "CodeWithHarry"),
                        (0, exports.doc)("JavaScript MDN", "https://developer.mozilla.org/en-US/docs/Web/JavaScript")
                    ]),
                    (0, exports.topic)("Bootstrap 5: Grid, Components, Utilities", [
                        (0, exports.vid)("Bootstrap 5 Tutorial (Hindi)", "https://www.youtube.com/watch?v=vpAJ0s5S2t0", "CodeWithHarry"),
                        (0, exports.doc)("Bootstrap 5 Official Docs", "https://getbootstrap.com/docs/5.3/")
                    ])
                ],
                project: {
                    title: "Developer Portfolio Website",
                    description: ["Build a fully responsive portfolio page with HTML/CSS", "Include About, Skills, Projects, and Contact sections", "Host live on GitHub Pages"],
                    outcomes: ["Understand web layout systems", "Live online portfolio for job applications"]
                }
            },
            {
                id: "py-hindi-m2.2",
                title: "Relational Databases & SQL (PostgreSQL)",
                weeks: "Week 3",
                topics: [
                    (0, exports.topic)("RDBMS Concepts: Tables, Keys, Relationships, Normalization", [
                        (0, exports.vid)("Complete SQL Tutorial (Hindi)", "https://www.youtube.com/watch?v=BpHX1tWFIGI", "Apna College"),
                        (0, exports.doc)("PostgreSQL Tutorial", "https://www.postgresql.org/docs/current/tutorial.html")
                    ]),
                    (0, exports.topic)("CRUD Operations: SELECT, INSERT, UPDATE, DELETE", [
                        (0, exports.vid)("SQL CRUD Queries (Hindi)", "https://www.youtube.com/watch?v=B4sda0gPoqw", "Apna College")
                    ]),
                    (0, exports.topic)("Advanced SQL: JOINs, Subqueries, Aggregates, Window Functions", [
                        (0, exports.art)("SQL Advanced Concepts (Mode Analytics)", "https://mode.com/sql-tutorial/sql-window-functions/")
                    ]),
                    (0, exports.topic)("Indexing, Query Optimization, EXPLAIN ANALYZE", [
                        (0, exports.art)("PostgreSQL Indexing Best Practices", "https://use-the-index-luke.com/")
                    ]),
                    (0, exports.topic)("Transactions, ACID Properties, Isolation Levels", [
                        (0, exports.art)("Understanding ACID Transactions", "https://www.postgresql.org/docs/current/tutorial-transactions.html")
                    ])
                ],
                project: {
                    title: "Student Result Database",
                    description: ["Design a normalized schema with Students, Courses, Marks tables", "Write complex JOINs and aggregate queries", "Create indexes and measure query performance"],
                    outcomes: ["Solid SQL for backend interviews", "Database design skills"]
                }
            },
            {
                id: "py-hindi-m2.3",
                title: "NoSQL with MongoDB & Redis",
                weeks: "Week 4",
                topics: [
                    (0, exports.topic)("MongoDB: Documents, Collections, BSON, CRUD", [
                        (0, exports.vid)("MongoDB Tutorial (Hindi)", "https://www.youtube.com/watch?v=J6mD5TZI3Es", "CodeWithHarry"),
                        (0, exports.doc)("MongoDB Official Docs", "https://www.mongodb.com/docs/manual/")
                    ]),
                    (0, exports.topic)("Aggregation Pipeline: $match, $group, $lookup, $project", [
                        (0, exports.art)("MongoDB Aggregation Guide", "https://www.mongodb.com/docs/manual/aggregation/")
                    ]),
                    (0, exports.topic)("Redis Basics: Key-Value Store, Caching, TTL, Pub/Sub", [
                        (0, exports.vid)("Redis Tutorial (Hindi)", "https://www.youtube.com/watch?v=Vx2zPMPvmug", "CodeWithHarry"),
                        (0, exports.doc)("Redis Official Docs", "https://redis.io/docs/")
                    ]),
                    (0, exports.topic)("SQL vs NoSQL: When to use which?", [
                        (0, exports.art)("SQL vs NoSQL Explained", "https://www.mongodb.com/nosql-explained/nosql-vs-sql")
                    ])
                ],
                project: {
                    title: "Blog Aggregator with MongoDB + Redis Cache",
                    description: ["Store blog posts and user data in MongoDB", "Cache frequently-read posts in Redis with TTL", "Compare performance with and without cache"],
                    outcomes: ["Flexible NoSQL schema design", "Caching patterns for production apps"]
                }
            }
        ]
    },
    {
        id: "py-hindi-p3",
        title: "Phase 3: Full Stack Backend Engineering",
        weeks: "Months 4-5 (8 Weeks)",
        modules: [
            {
                id: "py-hindi-m3.1",
                title: "Modern APIs with FastAPI & Python Async",
                weeks: "Week 1-4",
                topics: [
                    (0, exports.topic)("Python Async/Await: asyncio, event loop, coroutines", [
                        (0, exports.art)("Python asyncio Guide", "https://realpython.com/async-io-python/"),
                        (0, exports.vid)("AsyncIO in Python (Hindi)", "https://www.youtube.com/watch?v=6RbJYN7SoRs", "Krish Naik")
                    ]),
                    (0, exports.topic)("FastAPI Fundamentals: Path params, Query params, Request body, Pydantic", [
                        (0, exports.playlist)("FastAPI Tutorial (Hindi)", "https://www.youtube.com/playlist?list=PLwGdqUZWnOp2Z3eFOg4hwxaMAZqcPXYXm", "Thapa Technical"),
                        (0, exports.doc)("FastAPI Official Docs", "https://fastapi.tiangolo.com/")
                    ]),
                    (0, exports.topic)("Database Integration: SQLAlchemy ORM with PostgreSQL", [
                        (0, exports.art)("FastAPI + SQLAlchemy Guide", "https://fastapi.tiangolo.com/tutorial/sql-databases/")
                    ]),
                    (0, exports.topic)("Authentication & Security: JWT, OAuth2, Password Hashing", [
                        (0, exports.art)("FastAPI Security Tutorial (JWT)", "https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/")
                    ]),
                    (0, exports.topic)("API Versioning, Middleware, CORS, Error Handling", [
                        (0, exports.doc)("FastAPI Middleware Docs", "https://fastapi.tiangolo.com/tutorial/middleware/")
                    ]),
                    (0, exports.topic)("API Testing with Pytest and TestClient", [
                        (0, exports.art)("Testing FastAPI Apps", "https://fastapi.tiangolo.com/tutorial/testing/"),
                        (0, exports.art)("Pytest Tutorial", "https://realpython.com/pytest-python-testing/")
                    ]),
                    (0, exports.topic)("Containerization: Docker + Docker Compose basics", [
                        (0, exports.vid)("Docker Tutorial (Hindi)", "https://www.youtube.com/watch?v=17Bl31rlnRM", "TechWorld with Nana"),
                        (0, exports.doc)("Docker Official Docs", "https://docs.docker.com/")
                    ])
                ],
                project: {
                    title: "E-commerce REST API",
                    description: ["Build a full product catalog and cart API with FastAPI", "Implement JWT auth with role-based access (user vs admin)", "Write unit tests with Pytest", "Containerize with Docker"],
                    outcomes: ["Industry-grade async API development", "Portfolio-worthy backend project"]
                }
            },
            {
                id: "py-hindi-m3.2",
                title: "Full Stack Web with Django",
                weeks: "Week 5-8",
                topics: [
                    (0, exports.topic)("Django Project Structure: MVT Architecture, urls.py, views.py, models.py", [
                        (0, exports.playlist)("Django Tutorials (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9", "CodeWithHarry"),
                        (0, exports.doc)("Django Official Docs", "https://docs.djangoproject.com/en/4.2/")
                    ]),
                    (0, exports.topic)("Django ORM: QuerySets, Migrations, Model relationships", [
                        (0, exports.art)("Django ORM Deep Dive", "https://docs.djangoproject.com/en/4.2/topics/db/queries/")
                    ]),
                    (0, exports.topic)("Django Forms, Templates, Jinja2, Template Tags", [
                        (0, exports.art)("Django Template Language", "https://docs.djangoproject.com/en/4.2/topics/templates/")
                    ]),
                    (0, exports.topic)("Django Auth: User model, Login/Logout, Permissions", [
                        (0, exports.art)("Django Authentication System", "https://docs.djangoproject.com/en/4.2/topics/auth/")
                    ]),
                    (0, exports.topic)("Django REST Framework (DRF): Serializers, ViewSets, Routers", [
                        (0, exports.vid)("Django REST Framework (Hindi)", "https://www.youtube.com/watch?v=TmsD8QOptUM", "Krish Naik"),
                        (0, exports.doc)("DRF Official Docs", "https://www.django-rest-framework.org/")
                    ]),
                    (0, exports.topic)("Deployment: Gunicorn + Nginx on DigitalOcean/Railway", [
                        (0, exports.art)("Deploy Django on DigitalOcean", "https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-gunicorn-and-nginx")
                    ])
                ],
                project: {
                    title: "Full Stack Blog + Job Board",
                    description: ["Build a full job listing site using Django", "Add user registration/login and profiles", "Build an admin panel to manage listings", "Deploy to Railway.app with PostgreSQL"],
                    outcomes: ["Production-deployed full stack Python app", "Deployable job application portfolio project"]
                }
            }
        ]
    },
    {
        id: "py-hindi-p4",
        title: "Phase 4: AI, Data Science & Machine Learning",
        weeks: "Months 6-7 (8 Weeks)",
        modules: [
            {
                id: "py-hindi-m4.1",
                title: "Data Science: NumPy, Pandas & Visualization",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("NumPy: Arrays, Broadcasting, Vectorized Operations", [
                        (0, exports.vid)("NumPy Full Tutorial (Hindi)", "https://www.youtube.com/watch?v=x9iEwvNOH_0", "CampusX"),
                        (0, exports.doc)("NumPy Docs", "https://numpy.org/doc/stable/")
                    ]),
                    (0, exports.topic)("Pandas: Series, DataFrame, Groupby, Merge, Pivot Tables", [
                        (0, exports.vid)("Pandas Tutorial (Hindi)", "https://www.youtube.com/watch?v=e60ItwlZTKM", "CampusX"),
                        (0, exports.art)("Pandas Cheatsheet", "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf")
                    ]),
                    (0, exports.topic)("Data Cleaning: handling nulls, outliers, duplicates, encoding", [
                        (0, exports.art)("Data Cleaning Guide (Kaggle)", "https://www.kaggle.com/learn/data-cleaning")
                    ]),
                    (0, exports.topic)("Visualization: Matplotlib, Seaborn, Plotly for EDA", [
                        (0, exports.vid)("Data Visualization (Hindi)", "https://www.youtube.com/watch?v=6GUZXDef2U0", "CampusX"),
                        (0, exports.doc)("Seaborn Docs", "https://seaborn.pydata.org/tutorial.html")
                    ]),
                    (0, exports.topic)("Feature Engineering: encoding, scaling, feature selection", [
                        (0, exports.art)("Feature Engineering for ML", "https://www.kaggle.com/learn/feature-engineering")
                    ])
                ],
                project: {
                    title: "IPL Dataset EDA Dashboard",
                    description: ["Analyze 10+ years of IPL data using Pandas", "Build beautiful plots with Seaborn/Plotly", "Identify top performers, team stats, win patterns"],
                    outcomes: ["Real-world data analysis skills", "Kaggle-ready EDA notebook"]
                }
            },
            {
                id: "py-hindi-m4.2",
                title: "Machine Learning with Scikit-Learn",
                weeks: "Week 3-5",
                topics: [
                    (0, exports.topic)("ML Fundamentals: Supervised vs Unsupervised, Bias-Variance Tradeoff", [
                        (0, exports.playlist)("Machine Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", "Krish Naik"),
                        (0, exports.art)("ML Concepts Glossary", "https://developers.google.com/machine-learning/glossary")
                    ]),
                    (0, exports.topic)("Regression: Linear, Polynomial, Ridge, Lasso", [
                        (0, exports.playlist)("Machine Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", "Krish Naik")
                    ]),
                    (0, exports.topic)("Classification: Logistic Regression, SVM, Decision Trees, Random Forest", [
                        (0, exports.playlist)("Machine Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", "Krish Naik")
                    ]),
                    (0, exports.topic)("Model Evaluation: confusion matrix, precision, recall, F1, ROC-AUC", [
                        (0, exports.art)("ML Metrics Explained", "https://scikit-learn.org/stable/modules/model_evaluation.html")
                    ]),
                    (0, exports.topic)("Cross-Validation, Hyperparameter Tuning: GridSearchCV, RandomSearchCV", [
                        (0, exports.art)("Scikit-Learn Cross Validation Guide", "https://scikit-learn.org/stable/modules/cross_validation.html")
                    ]),
                    (0, exports.topic)("Clustering: K-Means, DBSCAN, PCA Dimensionality Reduction", [
                        (0, exports.art)("Unsupervised Learning Guide (Scikit-Learn)", "https://scikit-learn.org/stable/unsupervised_learning.html")
                    ])
                ],
                project: {
                    title: "Credit Card Fraud Detection",
                    description: ["Use a real Kaggle fraud dataset", "Train multiple classifiers and compare metrics", "Handle class imbalance with SMOTE", "Expose model as FastAPI endpoint"],
                    outcomes: ["Real production ML pipeline", "Demonstrates ML + API integration"]
                }
            },
            {
                id: "py-hindi-m4.3",
                title: "Deep Learning with PyTorch",
                weeks: "Week 6-8",
                topics: [
                    (0, exports.topic)("Neural Network Fundamentals: neurons, layers, activation functions", [
                        (0, exports.playlist)("Deep Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU70ZGsckrMdr0FteeRui", "Krish Naik"),
                        (0, exports.art)("Neural Networks from Scratch", "https://nnfs.io/")
                    ]),
                    (0, exports.topic)("Backpropagation & Gradient Descent: chain rule, optimizers (SGD, Adam)", [
                        (0, exports.vid)("Backprop Visually Explained", "https://www.youtube.com/watch?v=Ilg3gGewQ5U", "3Blue1Brown")
                    ]),
                    (0, exports.topic)("PyTorch: Tensors, Autograd, Datasets, DataLoaders, Custom Models", [
                        (0, exports.doc)("PyTorch Docs", "https://pytorch.org/tutorials/beginner/basics/intro.html"),
                        (0, exports.vid)("PyTorch Full Crash Course", "https://www.youtube.com/watch?v=c36lUUr864M", "Patrick Loeber")
                    ]),
                    (0, exports.topic)("CNNs for Image Classification: Conv2D, MaxPool, BatchNorm, Dropout", [
                        (0, exports.art)("CNN Architecture Explained", "https://cs231n.github.io/convolutional-networks/")
                    ]),
                    (0, exports.topic)("Transfer Learning: ResNet, EfficientNet, fine-tuning pre-trained models", [
                        (0, exports.art)("Transfer Learning with PyTorch", "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html")
                    ]),
                    (0, exports.topic)("Model Saving, ONNX Export, TorchScript for Deployment", [
                        (0, exports.doc)("PyTorch Model Save/Load", "https://pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html")
                    ])
                ],
                project: {
                    title: "AI Plant Disease Detector",
                    description: ["Train a CNN on the PlantVillage dataset", "Achieve >95% accuracy with transfer learning", "Deploy as a FastAPI endpoint with image upload"],
                    outcomes: ["Deep learning project for resume", "Full cycle: Data ΓåÆ Train ΓåÆ Deploy"]
                }
            }
        ]
    },
    {
        id: "py-hindi-p5",
        title: "Phase 5: Generative AI & Job Readiness",
        weeks: "Month 8 (4 Weeks)",
        modules: [
            {
                id: "py-hindi-m5.1",
                title: "Generative AI, LLMs & LangChain",
                weeks: "Week 1-3",
                topics: [
                    (0, exports.topic)("How LLMs Work: Transformers, Attention, Tokenization", [
                        (0, exports.vid)("Transformers Explained Visually", "https://www.youtube.com/watch?v=4Bdc55j80l8", "Andrej Karpathy"),
                        (0, exports.art)("Illustrated Transformer (Jay Alammar)", "https://jalammar.github.io/illustrated-transformer/")
                    ]),
                    (0, exports.topic)("Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought, ReAct", [
                        (0, exports.playlist)("Generative AI (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVNxBw-H6q192jX8D-lSxyF0", "Krish Naik"),
                        (0, exports.art)("OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering")
                    ]),
                    (0, exports.topic)("LangChain: Chains, Memory, Tools, Agents", [
                        (0, exports.playlist)("Generative AI (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVNxBw-H6q192jX8D-lSxyF0", "Krish Naik"),
                        (0, exports.doc)("LangChain Python Docs", "https://python.langchain.com/docs/")
                    ]),
                    (0, exports.topic)("RAG: Vector DBs (ChromaDB, FAISS), Embeddings, Semantic Search", [
                        (0, exports.art)("Build a RAG System (LangChain)", "https://python.langchain.com/docs/how_to/"),
                        (0, exports.vid)("RAG from Scratch (Hindi)", "https://www.youtube.com/watch?v=fuMKrKRqluA", "Krish Naik")
                    ]),
                    (0, exports.topic)("Fine-Tuning: LoRA, QLoRA with HuggingFace + Transformers", [
                        (0, exports.doc)("HuggingFace PEFT Library", "https://huggingface.co/docs/peft"),
                        (0, exports.art)("Fine-Tuning LLMs with LoRA", "https://huggingface.co/blog/lora")
                    ]),
                    (0, exports.topic)("Deployment: Hugging Face Spaces, Streamlit, Gradio for demos", [
                        (0, exports.art)("Deploy ML Apps with Gradio", "https://www.gradio.app/guides/quickstart"),
                        (0, exports.art)("Streamlit Tutorial", "https://docs.streamlit.io/")
                    ])
                ],
                project: {
                    title: "Full Stack PDF Chatbot (GenAI Capstone)",
                    description: ["Build a full-stack chatbot that answers questions about uploaded PDFs", "Backend: FastAPI + LangChain + ChromaDB for RAG", "Frontend: Streamlit or simple HTML/JS chat UI", "Deploy on Hugging Face Spaces or Railway"],
                    outcomes: ["End-to-end GenAI application", "Production-ready AI portfolio piece"]
                }
            },
            {
                id: "py-hindi-m5.2",
                title: "Job Readiness & Interview Preparation",
                weeks: "Week 4",
                topics: [
                    (0, exports.topic)("DSA for Interviews: Arrays, Strings, Linked Lists, Trees, Graphs", [
                        (0, exports.vid)("DSA in Python (Hindi)", "https://www.youtube.com/watch?v=mpBXmAfmW0E", "Apna College"),
                        (0, exports.art)("LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/")
                    ]),
                    (0, exports.topic)("System Design Basics: scalability, load balancing, caching, DB sharding", [
                        (0, exports.vid)("System Design (Hindi)", "https://www.youtube.com/watch?v=SqcXvc3ZmRU", "Gaurav Sen"),
                        (0, exports.art)("System Design Primer", "https://github.com/donnemartin/system-design-primer")
                    ]),
                    (0, exports.topic)("Resume & LinkedIn: ATS optimization, projects highlight, action verbs", [
                        (0, exports.art)("Google Resume Tips", "https://careersonair.withgoogle.com/events/resume-tips")
                    ]),
                    (0, exports.topic)("Behavioral Interviews: STAR method, common questions", [
                        (0, exports.art)("STAR Method Guide", "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique")
                    ])
                ],
                project: {
                    title: "Job Application Master Bundle",
                    description: ["Polish GitHub profile with README banners and pinned repos", "Write ATS-optimized resume with all projects", "Do 50 LeetCode easy + 20 medium problems", "Apply to 30 companies with tailored cover letters"],
                    outcomes: ["Ready to crack 3-12 LPA software developer job interviews", "Fully prepared portfolio"]
                }
            }
        ]
    }
];
// ===== PLAN 10: DSA ZERO TO PRO ΓÇö ALL BIG TECH / HFT / CP =====
const dsaProPlan = [
    {
        id: "dsa-p1",
        title: "Phase 1: Foundations ΓÇö Math, Complexity & Core Structures",
        weeks: "Weeks 1-3",
        modules: [
            {
                id: "dsa-m1.1",
                title: "Complexity Analysis & Problem-Solving Mindset",
                weeks: "Week 1",
                topics: [
                    (0, exports.topic)("Big-O, Big-Theta, Big-Omega: Time & Space Complexity", [
                        (0, exports.vid)("Big O Notation Deep Dive", "https://www.youtube.com/watch?v=v4cd1O4zkGw", "CS Dojo"),
                        (0, exports.art)("Big-O Cheat Sheet", "https://www.bigocheatsheet.com/"),
                        (0, exports.art)("MIT 6.006: Intro to Algorithms (Recitation Notes)", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/")
                    ]),
                    (0, exports.topic)("Amortized Analysis: dynamic arrays, hash tables", [
                        (0, exports.art)("Amortized Analysis Explained", "https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/")
                    ]),
                    (0, exports.topic)("Recursion & Recurrence Relations: T(n) = aT(n/b) + f(n), Master Theorem", [
                        (0, exports.vid)("Recursion Masterclass", "https://www.youtube.com/watch?v=IJDJ0kBx2LM", "Abdul Bari"),
                        (0, exports.art)("Master Theorem Explained", "https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)")
                    ]),
                    (0, exports.topic)("Problem Decomposition Framework: Brute ΓåÆ Optimize ΓåÆ Code", [
                        (0, exports.art)("How to Approach Any Coding Problem", "https://leetcode.com/discuss/general-discussion/64609/tips-for-interview-preparation")
                    ]),
                    (0, exports.topic)("Essential Math: Modular Arithmetic, GCD/LCM, Primes, Combinatorics, Probability", [
                        (0, exports.vid)("Math for Competitive Programming", "https://www.youtube.com/watch?v=XR4zGKszfH8", "Errichto"),
                        (0, exports.art)("Number Theory for Competitive Programming", "https://cp-algorithms.com/algebra/euclid-algorithm.html")
                    ])
                ],
                project: {
                    title: "Complexity Audit Repository",
                    description: ["Analyze and document Big-O for 20 code snippets", "Implement 5 recursive functions with recurrence analysis", "Solve 10 LeetCode problems with explicit complexity write-ups"],
                    outcomes: ["Strong analytical foundation", "Interview-ready complexity communication"]
                }
            },
            {
                id: "dsa-m1.2",
                title: "Core Data Structures: Arrays, Strings, Linked Lists, Stacks, Queues",
                weeks: "Week 2-3",
                topics: [
                    (0, exports.topic)("Arrays: static/dynamic, prefix sums, difference arrays, sliding window foundation", [
                        (0, exports.vid)("Arrays Must-Know Tricks", "https://www.youtube.com/watch?v=RBSGKlAvoiM", "NeetCode"),
                        (0, exports.art)("Prefix Sum Patterns", "https://leetcode.com/discuss/study-guide/563022/prefix-sum-problems")
                    ]),
                    (0, exports.topic)("Strings: ASCII, Unicode, anagram detection, KMP, Rabin-Karp, Z-algorithm", [
                        (0, exports.vid)("String Matching Algorithms", "https://www.youtube.com/watch?v=V5-7GzOfADQ", "Abdul Bari"),
                        (0, exports.art)("KMP Algorithm Explained", "https://cp-algorithms.com/string/kmp.html")
                    ]),
                    (0, exports.topic)("Linked Lists: singly/doubly, cycle detection (Floyd's), reverse, merge sort on LL", [
                        (0, exports.vid)("Linked List Interview Questions", "https://www.youtube.com/watch?v=Hj_rA0dhr2I", "TechLead"),
                        (0, exports.art)("Floyd's Cycle Detection", "https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/")
                    ]),
                    (0, exports.topic)("Stacks: monotonic stack, next greater element, histogram patterns", [
                        (0, exports.vid)("Monotonic Stack Patterns", "https://www.youtube.com/watch?v=zx5Sw9130L0", "NeetCode"),
                        (0, exports.art)("Leetcode Monotonic Stack Problems", "https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems")
                    ]),
                    (0, exports.topic)("Queues & Deques: BFS foundation, sliding window maximum, priority queues", [
                        (0, exports.vid)("Deque & Sliding Window Max", "https://www.youtube.com/watch?v=DfljaUwZsOk", "NeetCode"),
                        (0, exports.art)("Priority Queue Patterns", "https://leetcode.com/discuss/general-discussion/1113630/")
                    ]),
                    (0, exports.topic)("Hashing: HashMap, HashSet, collision resolution, frequency maps, two-sum family", [
                        (0, exports.vid)("Hashing Interview Patterns", "https://www.youtube.com/watch?v=KyUTuwz_b7Q", "NeetCode"),
                        (0, exports.art)("Hashing Techniques Guide", "https://www.geeksforgeeks.org/hashing-data-structure/")
                    ])
                ],
                project: {
                    title: "Core DS Implementation in Python/C++",
                    description: ["Implement LinkedList, Stack, Queue, HashMap from scratch", "Solve 30 LeetCode Easy/Medium using only core structures", "Solve: Two Sum, Best Time to Buy Stock, Valid Parentheses, LRU Cache"],
                    outcomes: ["Deep understanding of DS internals", "HFT-relevant memory-efficient implementations"]
                }
            }
        ]
    },
    {
        id: "dsa-p2",
        title: "Phase 2: Essential Patterns ΓÇö Searching, Sorting & Two Pointers",
        weeks: "Weeks 4-6",
        modules: [
            {
                id: "dsa-m2.1",
                title: "Sorting Algorithms ΓÇö From Theory to Custom Comparators",
                weeks: "Week 4",
                topics: [
                    (0, exports.topic)("Comparison Sorts: Merge Sort, Quick Sort (3-way, Dutch flag), Heap Sort", [
                        (0, exports.vid)("Sorting Algorithms Masterclass", "https://www.youtube.com/watch?v=RfXt_qHDEPw", "Abdul Bari"),
                        (0, exports.art)("Sorting Algorithms Visualized", "https://visualgo.net/en/sorting")
                    ]),
                    (0, exports.topic)("Non-Comparison Sorts: Counting Sort, Radix Sort, Bucket Sort", [
                        (0, exports.art)("Counting Sort & Radix Sort (GeeksForGeeks)", "https://www.geeksforgeeks.org/counting-sort/")
                    ]),
                    (0, exports.topic)("Custom Comparators & Sorting by Multiple Keys", [
                        (0, exports.art)("Python Custom Sort Guide", "https://docs.python.org/3/howto/sorting.html")
                    ]),
                    (0, exports.topic)("Interview Sorting Problems: Sort Colors, Merge Intervals, Largest Number", [
                        (0, exports.vid)("Sorting Interview Questions", "https://www.youtube.com/watch?v=aw_08iTRl5k", "NeetCode"),
                        (0, exports.topic)("Whitepaper: TimSort Algorithm", [(0, exports.doc)("Python TimSort spec", "https://hg.python.org/cpython/file/tip/Objects/listsort.txt")])
                    ])
                ],
                project: {
                    title: "Sort Everything Challenge",
                    description: ["Implement 6 sorting algorithms from scratch", "Benchmark: Insertion Sort vs Merge Sort vs Quick Sort on 10K elements", "Solve 15 LeetCode sorting problems including Sort Colors and Merge Intervals"],
                    outcomes: ["Deep algorithmic thinking", "HFT-relevant performance benchmarking"]
                }
            },
            {
                id: "dsa-m2.2",
                title: "Binary Search ΓÇö All Variants & Patterns",
                weeks: "Week 5",
                topics: [
                    (0, exports.topic)("Classical Binary Search: left/right boundary, overflow prevention", [
                        (0, exports.vid)("Binary Search Patterns", "https://www.youtube.com/watch?v=jf1baieXkSQ", "NeetCode"),
                        (0, exports.art)("Binary Search Templates (LeetCode Guide)", "https://leetcode.com/discuss/general-discussion/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems")
                    ]),
                    (0, exports.topic)("Binary Search on Answer: find minimum in rotated array, sqrt(x), ship packages", [
                        (0, exports.vid)("Binary Search on Answer", "https://www.youtube.com/watch?v=GU7DpgHINWQ", "Errichto"),
                        (0, exports.art)("Search on Answer Pattern", "https://cp-algorithms.com/num_methods/binary_search.html")
                    ]),
                    (0, exports.topic)("Rotated Sorted Arrays, Peak Finding, 2D Matrix Search", [
                        (0, exports.vid)("Rotated Array Problems", "https://www.youtube.com/watch?v=U8XENwh8Oy8", "NeetCode")
                    ]),
                    (0, exports.topic)("Advanced BS: Kth Smallest in Sorted Matrix, Median of Two Sorted Arrays", [
                        (0, exports.vid)("Median of Two Sorted Arrays", "https://www.youtube.com/watch?v=q6IEA26hvXc", "NeetCode")
                    ])
                ],
                project: {
                    title: "Binary Search Problem Set (25 Problems)",
                    description: ["Solve 25 Binary Search tagged LeetCode problems", "Implement all 3 templates (exact match, left boundary, right boundary)", "Implement binary search in 2D matrix"],
                    outcomes: ["Master all binary search variants used in FAANG", "Pattern recognition for 'minimize the maximum' problems"]
                }
            },
            {
                id: "dsa-m2.3",
                title: "Two Pointers, Sliding Window & Prefix Sums",
                weeks: "Week 6",
                topics: [
                    (0, exports.topic)("Two Pointers: opposite ends, same direction, fast-slow (Floyd's)", [
                        (0, exports.vid)("Two Pointer Masterclass", "https://www.youtube.com/watch?v=On3r4I1p4f0", "NeetCode"),
                        (0, exports.art)("Two Pointer Problems Guide", "https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days")
                    ]),
                    (0, exports.topic)("Sliding Window: fixed size, variable size, minimum/maximum window substring", [
                        (0, exports.vid)("Sliding Window Patterns", "https://www.youtube.com/watch?v=MK-NZ4hN7rs", "NeetCode"),
                        (0, exports.art)("Sliding Window Template", "https://leetcode.com/discuss/general-discussion/657507/Sliding-Window-for-Beginners-Problems-Template-and-Code")
                    ]),
                    (0, exports.topic)("Prefix Sums: subarray sum equals K, range queries, 2D prefix sums", [
                        (0, exports.art)("Prefix Sum Problems (LeetCode)", "https://leetcode.com/tag/prefix-sum/")
                    ]),
                    (0, exports.topic)("Kadane's Algorithm: Maximum Subarray, Maximum Circular Subarray", [
                        (0, exports.vid)("Kadane Algorithm Deep Dive", "https://www.youtube.com/watch?v=5WZl3MMT0Eg", "NeetCode")
                    ])
                ],
                project: {
                    title: "Window & Pointer Pattern Drills",
                    description: ["Solve 20 Sliding Window problems", "Implement 2D prefix sum matrix", "Solve: Minimum Window Substring, Trapping Rain Water, Container with Most Water"],
                    outcomes: ["Master O(n) solutions for O(n┬▓) naive approaches", "Critical for HFT latency-sensitive code"]
                }
            }
        ]
    },
    {
        id: "dsa-p3",
        title: "Phase 3: Tree & Graph Algorithms",
        weeks: "Weeks 7-10",
        modules: [
            {
                id: "dsa-m3.1",
                title: "Binary Trees & BSTs ΓÇö All Traversals & Classic Problems",
                weeks: "Week 7",
                topics: [
                    (0, exports.topic)("Tree Traversals: DFS (pre/in/post), BFS (level order), Morris Traversal", [
                        (0, exports.vid)("Tree Traversal Patterns", "https://www.youtube.com/watch?v=WLvU5EQVZqY", "NeetCode"),
                        (0, exports.art)("Morris Traversal Explained", "https://www.geeksforgeeks.org/morris-traversal-for-preorder/")
                    ]),
                    (0, exports.topic)("BST: search, insert, delete, validation, kth smallest/largest", [
                        (0, exports.vid)("BST Operations", "https://www.youtube.com/watch?v=BvHiGFEemgs", "NeetCode")
                    ]),
                    (0, exports.topic)("Tree Properties: height, diameter, balanced check, lowest common ancestor", [
                        (0, exports.vid)("LCA Algorithm Deep Dive", "https://www.youtube.com/watch?v=yi0FhRqDJfo", "NeetCode")
                    ]),
                    (0, exports.topic)("Tree DP: max path sum, binary tree cameras, house robber on tree", [
                        (0, exports.vid)("Tree Dynamic Programming", "https://www.youtube.com/watch?v=T5B4ADI-7vw", "NeetCode")
                    ]),
                    (0, exports.topic)("Balanced BSTs: AVL rotations, Red-Black trees (concepts for interviews)", [
                        (0, exports.art)("AVL Tree Rotations", "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/")
                    ])
                ],
                project: {
                    title: "Tree Problem Sprint (30 Problems)",
                    description: ["Solve LeetCode Top 30 binary tree problems", "Implement iterative DFS with stack for all 3 traversals", "Solve: Serialize/Deserialize BTree, Max Path Sum, Binary Tree Cameras"],
                    outcomes: ["Core FAANG tree interview pattern mastery"]
                }
            },
            {
                id: "dsa-m3.2",
                title: "Heaps, Priority Queues & Top-K Problems",
                weeks: "Week 8",
                topics: [
                    (0, exports.topic)("Min/Max Heap: insert, delete, heapify, heap sort", [
                        (0, exports.vid)("Heap Data Structure", "https://www.youtube.com/watch?v=HqPJF2L5h9U", "NeetCode"),
                        (0, exports.art)("Binary Heap (GeeksForGeeks)", "https://www.geeksforgeeks.org/binary-heap/")
                    ]),
                    (0, exports.topic)("Top-K Patterns: Kth Largest, K Closest Points, Top K Frequent Words", [
                        (0, exports.vid)("Top K Elements Pattern", "https://www.youtube.com/watch?v=YjAvf-UbZr0", "NeetCode"),
                        (0, exports.art)("Heap Problems Pattern", "https://leetcode.com/discuss/general-discussion/1127340/")
                    ]),
                    (0, exports.topic)("Two Heaps Pattern: Median from Data Stream, Sliding Window Median", [
                        (0, exports.vid)("Two Heaps Pattern", "https://www.youtube.com/watch?v=itmhHWaHupI", "NeetCode")
                    ]),
                    (0, exports.topic)("Merge K Sorted Lists/Arrays: heap-based O(N log K) approach", [
                        (0, exports.vid)("Merge K Sorted Lists", "https://www.youtube.com/watch?v=q5a5OiGbT6Q", "NeetCode")
                    ])
                ],
                project: {
                    title: "Heap & Priority Queue Drills",
                    description: ["Implement MinHeap from scratch in Python and C++", "Solve: Kth Largest in Stream, Median from Data Stream, Task Scheduler", "Build a real-time leaderboard using heaps"],
                    outcomes: ["HFT-critical: efficient priority queue operations", "O(N log K) pattern for large dataset problems"]
                }
            },
            {
                id: "dsa-m3.3",
                title: "Graph Algorithms ΓÇö BFS/DFS to Advanced",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.topic)("Graph Representations: adjacency list, matrix, edge list", [
                        (0, exports.vid)("Graph Representations", "https://www.youtube.com/watch?v=EgI5nU9etnU", "NeetCode")
                    ]),
                    (0, exports.topic)("BFS: shortest path in unweighted, Multi-source BFS, 0-1 BFS", [
                        (0, exports.vid)("BFS Graph Patterns", "https://www.youtube.com/watch?v=oDqjPvD1e6A", "NeetCode"),
                        (0, exports.art)("BFS vs DFS When to Use", "https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/")
                    ]),
                    (0, exports.topic)("DFS: connected components, cycle detection, flood fill, islands problems", [
                        (0, exports.vid)("DFS Graph Masterclass", "https://www.youtube.com/watch?v=Ope7BxTvFRg", "NeetCode")
                    ]),
                    (0, exports.topic)("Topological Sort: Kahn's Algorithm (BFS), DFS-based for DAGs, Course Schedule", [
                        (0, exports.vid)("Topological Sort Explained", "https://www.youtube.com/watch?v=eL-KzMXSXXI", "NeetCode"),
                        (0, exports.art)("Kahn's Algorithm", "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/")
                    ]),
                    (0, exports.topic)("Union-Find / Disjoint Set (DSU): path compression, union by rank, dynamic connectivity", [
                        (0, exports.vid)("Union Find Deep Dive", "https://www.youtube.com/watch?v=ayW5B2W9hfo", "NeetCode"),
                        (0, exports.art)("DSU Tutorial (CP Algorithms)", "https://cp-algorithms.com/data_structures/disjoint_set_union.html")
                    ]),
                    (0, exports.topic)("Shortest Paths: Dijkstra (heap-optimized), Bellman-Ford, SPFA, Floyd-Warshall", [
                        (0, exports.vid)("Dijkstra's Algorithm", "https://www.youtube.com/watch?v=XB4MIexjvY0", "NeetCode"),
                        (0, exports.art)("Dijkstra vs Bellman-Ford vs Floyd-Warshall", "https://cp-algorithms.com/graph/dijkstra.html")
                    ]),
                    (0, exports.topic)("Minimum Spanning Tree: Kruskal's (DSU), Prim's Algorithm", [
                        (0, exports.art)("MST Algorithms (CP Algorithms)", "https://cp-algorithms.com/graph/mst_kruskal.html")
                    ]),
                    (0, exports.topic)("Advanced: Bridges, Articulation Points, SCC (Tarjan's/Kosaraju's)", [
                        (0, exports.art)("Tarjan's Algorithm (CP Algorithms)", "https://cp-algorithms.com/graph/bridge-searching.html")
                    ])
                ],
                project: {
                    title: "Graph Problem Intensive (40 Problems)",
                    description: ["Solve LeetCode Top 40 graph problems", "Implement Dijkstra, Union-Find, Topological Sort from scratch", "Solve: Word Ladder, Network Delay Time, Number of Islands, Alien Dictionary"],
                    outcomes: ["Graph mastery for SDE, DevOps (network topology), and AI (knowledge graphs)"]
                }
            }
        ]
    },
    {
        id: "dsa-p4",
        title: "Phase 4: Dynamic Programming ΓÇö All Patterns",
        weeks: "Weeks 11-14",
        modules: [
            {
                id: "dsa-m4.1",
                title: "DP Foundations: Memoization to Tabulation",
                weeks: "Week 11",
                topics: [
                    (0, exports.topic)("DP Thinking: identify overlapping subproblems, optimal substructure", [
                        (0, exports.vid)("How to Think in DP", "https://www.youtube.com/watch?v=oBt53YbR9Kk", "NeetCode"),
                        (0, exports.art)("DP Patterns Guide (LeetCode)", "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns")
                    ]),
                    (0, exports.topic)("Fibonacci Family: Climbing Stairs, House Robber, Jump Game variants", [
                        (0, exports.vid)("1D DP Patterns", "https://www.youtube.com/watch?v=Y0lT9Fck7qI", "NeetCode")
                    ]),
                    (0, exports.topic)("Grid DP: Unique Paths, Min Path Sum, Dungeon Game", [
                        (0, exports.vid)("Grid DP Problems", "https://www.youtube.com/watch?v=IlEsdxuD4lY", "NeetCode")
                    ]),
                    (0, exports.topic)("Space Optimization: O(n) ΓåÆ O(1) DP with rolling array technique", [
                        (0, exports.art)("DP Space Optimization Techniques", "https://www.geeksforgeeks.org/space-optimization-using-dp/")
                    ])
                ],
                project: {
                    title: "DP Foundations Sprint (25 Problems)",
                    description: ["Solve all classic 1D and 2D DP problems on LeetCode", "Implement both top-down and bottom-up for each", "Optimize space for each solution"],
                    outcomes: ["Solid DP fundamentals for all tech interviews"]
                }
            },
            {
                id: "dsa-m4.2",
                title: "Sequence & String DP",
                weeks: "Week 12",
                topics: [
                    (0, exports.topic)("LCS Family: Longest Common Subsequence, Longest Common Substring, Edit Distance", [
                        (0, exports.vid)("LCS & Edit Distance", "https://www.youtube.com/watch?v=Ua0GhsJSlWM", "NeetCode"),
                        (0, exports.art)("Edit Distance Explained", "https://www.geeksforgeeks.org/edit-distance-dp-5/")
                    ]),
                    (0, exports.topic)("LIS Family: Longest Increasing Subsequence (O(n log n) with patience sort)", [
                        (0, exports.vid)("LIS O(n log n) Technique", "https://www.youtube.com/watch?v=cjWnW0hdF1Y", "NeetCode"),
                        (0, exports.art)("LIS with Binary Search (CP Algorithms)", "https://cp-algorithms.com/sequences/longest_increasing_subsequence.html")
                    ]),
                    (0, exports.topic)("Palindrome DP: Longest Palindromic Subsequence, Minimum Cuts", [
                        (0, exports.vid)("Palindrome DP Problems", "https://www.youtube.com/watch?v=ZnzvU03HtYk", "NeetCode")
                    ]),
                    (0, exports.topic)("String DP: Regular Expression Matching, Wildcard Matching, Word Break", [
                        (0, exports.vid)("Regex DP Problems", "https://www.youtube.com/watch?v=HAA8mgxlov8", "NeetCode")
                    ])
                ],
                project: {
                    title: "String DP Deep Dive (20 Problems)",
                    description: ["Solve all LCS/LIS/Palindrome family problems", "Implement LIS in O(n log n)", "Solve: Edit Distance, Regular Expression Matching, Distinct Subsequences"],
                    outcomes: ["Essential for NLP/AI (string alignment), FAANG interviews"]
                }
            },
            {
                id: "dsa-m4.3",
                title: "Knapsack, Partition & Interval DP",
                weeks: "Week 13",
                topics: [
                    (0, exports.topic)("0/1 Knapsack & Variants: subset sum, partition equal subset", [
                        (0, exports.vid)("Knapsack DP Patterns", "https://www.youtube.com/watch?v=nLmhmB6NzcM", "NeetCode"),
                        (0, exports.art)("Knapsack Variants Guide", "https://leetcode.com/discuss/general-discussion/1000004/0-1-Knapsack-template-problems")
                    ]),
                    (0, exports.topic)("Unbounded Knapsack: Coin Change, Rod Cutting, Perfect Squares", [
                        (0, exports.vid)("Unbounded Knapsack Problems", "https://www.youtube.com/watch?v=H9bfqozjoqs", "NeetCode")
                    ]),
                    (0, exports.topic)("Interval DP: Matrix Chain Multiplication, Burst Balloons, Merge Stones", [
                        (0, exports.vid)("Interval DP Deep Dive", "https://www.youtube.com/watch?v=Uz1M7fQJbQs", "Errichto"),
                        (0, exports.art)("Interval DP Pattern", "https://leetcode.com/discuss/general-discussion/907993/interval-dp-one-framework-to-solve-them-all/")
                    ]),
                    (0, exports.topic)("Tree DP: Binary Tree Maximum Path Sum, House Robber III", [
                        (0, exports.vid)("Tree DP Patterns", "https://www.youtube.com/watch?v=nHR8ytpzz7c", "NeetCode")
                    ])
                ],
                project: {
                    title: "Knapsack & Interval DP Problems (20)",
                    description: ["Solve all Knapsack variants on LeetCode", "Implement Matrix Chain Multiplication", "Solve: Burst Balloons, Strange Printer, Minimum Cost to Cut Stick"],
                    outcomes: ["Advanced DP patterns for FAANG hard problems"]
                }
            },
            {
                id: "dsa-m4.4",
                title: "Bitmask DP, Game Theory & State Machine DP",
                weeks: "Week 14",
                topics: [
                    (0, exports.topic)("Bitmask DP: Travelling Salesman Problem, Shortest Path Visiting All Nodes", [
                        (0, exports.vid)("Bitmask DP Explained", "https://www.youtube.com/watch?v=cY4HiiFHO1o", "Errichto"),
                        (0, exports.art)("Bitmask DP Tutorial (CP Algorithms)", "https://cp-algorithms.com/algebra/all-submasks.html")
                    ]),
                    (0, exports.topic)("Game Theory DP: Nim, Stone Game, Predict the Winner", [
                        (0, exports.vid)("Game Theory DP", "https://www.youtube.com/watch?v=WfdCBb_E9RM", "NeetCode")
                    ]),
                    (0, exports.topic)("State Machine DP: Buy/Sell Stock (all 6 variants), Best Time with Cooldown", [
                        (0, exports.vid)("Stock Problem State Machine", "https://www.youtube.com/watch?v=oDhu5uGq_ic", "NeetCode")
                    ]),
                    (0, exports.topic)("Digit DP: count numbers with specific digit constraints", [
                        (0, exports.art)("Digit DP Tutorial (CP Algorithms)", "https://codeforces.com/blog/entry/53960")
                    ])
                ],
                project: {
                    title: "Advanced DP Mastery Set",
                    description: ["Implement TSP with bitmask DP", "Solve all 6 Buy/Sell Stock variants", "Solve: Shortest Path Visiting All Nodes, Predict the Winner"],
                    outcomes: ["Top 1% DP problem-solving ability", "Required for competitive programming and FAANG hard rounds"]
                }
            }
        ]
    },
    {
        id: "dsa-p5",
        title: "Phase 5: Advanced Patterns ΓÇö Tries, Segment Trees & Advanced Graphs",
        weeks: "Weeks 15-17",
        modules: [
            {
                id: "dsa-m5.1",
                title: "Tries & Advanced String Algorithms",
                weeks: "Week 15",
                topics: [
                    (0, exports.topic)("Trie (Prefix Tree): insert, search, startsWith, delete, compressed trie", [
                        (0, exports.vid)("Trie Data Structure", "https://www.youtube.com/watch?v=oobqoCJlHA0", "NeetCode"),
                        (0, exports.art)("Trie Problems (CP Algorithms)", "https://cp-algorithms.com/string/aho_corasick.html")
                    ]),
                    (0, exports.topic)("Aho-Corasick Automaton: multi-pattern matching", [
                        (0, exports.art)("Aho-Corasick Algorithm", "https://cp-algorithms.com/string/aho_corasick.html")
                    ]),
                    (0, exports.topic)("Suffix Arrays & Suffix Trees: LCP array, longest repeated substring", [
                        (0, exports.art)("Suffix Array (CP Algorithms)", "https://cp-algorithms.com/string/suffix-array.html"),
                        (0, exports.vid)("Suffix Array Explained", "https://www.youtube.com/watch?v=zqKlL3ZpTqs", "William Fiset")
                    ]),
                    (0, exports.topic)("Rolling Hash: Rabin-Karp, polynomial hashing for string comparison", [
                        (0, exports.art)("Rabin-Karp Hashing", "https://cp-algorithms.com/string/rabin-karp.html")
                    ])
                ],
                project: {
                    title: "Search Autocomplete & Plagiarism Detector",
                    description: ["Implement full-feature Trie with delete", "Build autocomplete system using Trie (Design Search Autocomplete)", "Solve: Word Search II, Maximum XOR, Concatenated Words"],
                    outcomes: ["Trie mastery for SDE/AI (search engines, NLP tokenization)"]
                }
            },
            {
                id: "dsa-m5.2",
                title: "Segment Trees, BITs & Range Query Structures",
                weeks: "Week 16",
                topics: [
                    (0, exports.topic)("Binary Indexed Tree (Fenwick Tree): point update, prefix query, 2D BIT", [
                        (0, exports.vid)("Fenwick Tree Tutorial", "https://www.youtube.com/watch?v=uSFzHCZ4E-8", "William Fiset"),
                        (0, exports.art)("BIT Explained (CP Algorithms)", "https://cp-algorithms.com/data_structures/fenwick.html")
                    ]),
                    (0, exports.topic)("Segment Tree: range sum, range min/max, lazy propagation for range updates", [
                        (0, exports.vid)("Segment Tree Deep Dive", "https://www.youtube.com/watch?v=ZBHKZF5w4YU", "William Fiset"),
                        (0, exports.art)("Segment Tree (CP Algorithms)", "https://cp-algorithms.com/data_structures/segment_tree.html")
                    ]),
                    (0, exports.topic)("Sparse Table: O(1) range minimum query (static arrays)", [
                        (0, exports.art)("Sparse Table (CP Algorithms)", "https://cp-algorithms.com/data_structures/sparse-table.html")
                    ]),
                    (0, exports.topic)("Order Statistics Tree / Policy-Based DS in C++", [
                        (0, exports.art)("Order Statistics Tree in C++", "https://codeforces.com/blog/entry/11080")
                    ])
                ],
                project: {
                    title: "Range Query System",
                    description: ["Implement Segment Tree with lazy propagation", "Implement Fenwick Tree for point update & range sum", "Solve: Count of Range Sum, Range Sum Query 2D Mutable"],
                    outcomes: ["HFT-critical: O(log n) range queries for financial data processing"]
                }
            },
            {
                id: "dsa-m5.3",
                title: "Advanced Graph: Network Flow, SCC & Heavy-Light Decomposition",
                weeks: "Week 17",
                topics: [
                    (0, exports.topic)("Network Flow: Ford-Fulkerson, Edmonds-Karp, Max Bipartite Matching", [
                        (0, exports.vid)("Network Flow Tutorial", "https://www.youtube.com/watch?v=LdOnanfc5TM", "William Fiset"),
                        (0, exports.art)("Max Flow (CP Algorithms)", "https://cp-algorithms.com/graph/edmonds_karp.html")
                    ]),
                    (0, exports.topic)("Strongly Connected Components: Tarjan's & Kosaraju's Algorithms", [
                        (0, exports.art)("SCC Algorithms (CP Algorithms)", "https://cp-algorithms.com/graph/strongly-connected-components.html")
                    ]),
                    (0, exports.topic)("Heavy-Light Decomposition: path queries on trees", [
                        (0, exports.art)("HLD Tutorial (CP Algorithms)", "https://cp-algorithms.com/graph/hld.html")
                    ]),
                    (0, exports.topic)("Centroid Decomposition: tree problems with divide & conquer", [
                        (0, exports.art)("Centroid Decomposition (Codeforces)", "https://codeforces.com/blog/entry/81707")
                    ])
                ],
                project: {
                    title: "Advanced Graph Problems (15)",
                    description: ["Implement Max Bipartite Matching", "Solve: Critical Connections in a Network, Find Eventual Safe States", "Build a network flow solution for task assignment problem"],
                    outcomes: ["Advanced graph mastery for competitive programming, DevOps (network optimization)"]
                }
            }
        ]
    },
    {
        id: "dsa-p6",
        title: "Phase 6: Profile-Specific Tracks",
        weeks: "Weeks 18-20",
        modules: [
            {
                id: "dsa-m6.1",
                title: "≡ƒÅª HFT / Quant Developer Track",
                weeks: "Week 18",
                topics: [
                    (0, exports.topic)("Low-Latency DS: Lock-free queues, ring buffers, cache-line friendly layouts", [
                        (0, exports.art)("Lock-Free Ring Buffer", "https://www.dpdk.org/blog/2016/09/06/packet-capture-buffering/"),
                        (0, exports.art)("Cache Oblivious Algorithms", "https://en.wikipedia.org/wiki/Cache-oblivious_algorithm")
                    ]),
                    (0, exports.topic)("C++ STL Internals: deque vs vector vs list, custom allocators, move semantics", [
                        (0, exports.art)("C++ STL Complexity Guide", "https://en.cppreference.com/w/cpp/container")
                    ]),
                    (0, exports.topic)("Order Book Implementation: Red-Black Tree / Sorted Map for bid/ask sides", [
                        (0, exports.art)("Order Book Algorithms", "https://web.archive.org/web/20110219163448/http://howtohft.wordpress.com/2011/02/15/how-to-build-a-fast-limit-order-book/")
                    ]),
                    (0, exports.topic)("Mathematical Algorithms: FFT, Convolution, Matrix Exponentiation for quantitative problems", [
                        (0, exports.art)("FFT (CP Algorithms)", "https://cp-algorithms.com/algebra/fft.html"),
                        (0, exports.art)("Matrix Exponentiation", "https://cp-algorithms.com/algebra/matrix-exp.html")
                    ]),
                    (0, exports.topic)("Competitive Math: Number Theory (Sieve, Euler's Totient, CRT), Modular Inverse", [
                        (0, exports.art)("Number Theory (CP Algorithms)", "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html")
                    ])
                ],
                project: {
                    title: "Limit Order Book Simulator",
                    description: ["Implement a simplified limit order book in C++", "Use a sorted map (Red-Black Tree backed) for O(log n) order add/cancel", "Process 1 million orders and benchmark latency percentiles"],
                    outcomes: ["HFT-job-ready: demonstrate low-latency DS knowledge", "Quantitative coding proficiency"]
                }
            },
            {
                id: "dsa-m6.2",
                title: "≡ƒñû AI / ML Engineer Track",
                weeks: "Week 19",
                topics: [
                    (0, exports.topic)("Graph Algorithms for AI: PageRank, Personalized Recommendations (GraphSage)", [
                        (0, exports.art)("PageRank Algorithm", "https://en.wikipedia.org/wiki/PageRank"),
                        (0, exports.art)("Graph Neural Networks Overview", "https://distill.pub/2021/gnn-intro/")
                    ]),
                    (0, exports.topic)("Numerical Algorithms: Gradient Descent (vectorized), Newton's Method", [
                        (0, exports.art)("Numerical Methods for ML", "https://www.deeplearningbook.org/contents/numerical.html")
                    ]),
                    (0, exports.topic)("Geometric Algorithms: KD-Trees for nearest neighbor search, Ball Trees", [
                        (0, exports.art)("KD-Tree Explained", "https://en.wikipedia.org/wiki/K-d_tree")
                    ]),
                    (0, exports.topic)("Randomized Algorithms & Approximation: Bloom Filters, Count-Min Sketch, HyperLogLog", [
                        (0, exports.art)("Probabilistic DS (Real Python)", "https://realpython.com/bloom-filters/"),
                        (0, exports.art)("Count-Min Sketch", "https://florian.github.io/count-min-sketch/")
                    ]),
                    (0, exports.topic)("Parallel CS: parallel prefix sums, parallel sorting (CUDA-relevant)", [
                        (0, exports.art)("Parallel Algorithms for GPU", "https://developer.nvidia.com/blog/faster-parallel-reductions-kepler/")
                    ])
                ],
                project: {
                    title: "Approximate Nearest Neighbor Search Engine",
                    description: ["Implement a KD-Tree for nearest neighbor search", "Compare vs brute force on 100K embeddings", "Implement a Bloom Filter for deduplication of training data"],
                    outcomes: ["AI interview-ready", "Foundation for vector DB internals (Pinecone, FAISS)"]
                }
            },
            {
                id: "dsa-m6.3",
                title: "≡ƒÅù∩╕Å DevOps / Platform Engineer Track",
                weeks: "Week 19",
                topics: [
                    (0, exports.topic)("DS for Systems: Skip Lists (Redis), LSM Trees (RocksDB), B+Trees (PostgreSQL)", [
                        (0, exports.art)("Skip Lists (Redis Internals)", "https://en.wikipedia.org/wiki/Skip_list"),
                        (0, exports.art)("LSM Tree Explained", "https://www.scylladb.com/glossary/log-structured-merge-tree/")
                    ]),
                    (0, exports.topic)("Consistent Hashing for distributed caches and load balancers", [
                        (0, exports.art)("Consistent Hashing (Tom White)", "https://www.toptal.com/big-data/consistent-hashing")
                    ]),
                    (0, exports.topic)("Bloom Filters for cache invalidation, Count-Min Sketch for rate limiting", [
                        (0, exports.art)("Bloom Filters in Production", "https://llimllib.github.io/bloomfilter-tutorial/")
                    ]),
                    (0, exports.topic)("Graph-based scheduling: Workflow DAGs (like Airflow scheduling algorithms)", [
                        (0, exports.art)("Topological Sort in Job Scheduling", "https://www.geeksforgeeks.org/topological-sorting/")
                    ])
                ],
                project: {
                    title: "Distributed Rate Limiter",
                    description: ["Implement token bucket + sliding window rate limiter", "Use Count-Min Sketch for approximate rate tracking at scale", "Implement consistent hashing for distributing requests across nodes"],
                    outcomes: ["Platform engineering fundamentals", "DevOps-relevant DS for infrastructure work"]
                }
            },
            {
                id: "dsa-m6.4",
                title: "≡ƒÅå Competitive Programming Track",
                weeks: "Week 20",
                topics: [
                    (0, exports.topic)("CP Mindset: virtual contests, upsolving, reading editorials", [
                        (0, exports.vid)("How to Get Better at Competitive Programming", "https://www.youtube.com/watch?v=bVKHRtafgPc", "Errichto"),
                        (0, exports.art)("Codeforces Problem Rating System", "https://codeforces.com/blog/entry/62389")
                    ]),
                    (0, exports.topic)("Greedy Algorithms & Exchange Arguments: Activity Selection, Huffman Coding", [
                        (0, exports.vid)("Greedy Algorithm Proofs", "https://www.youtube.com/watch?v=HzeK7g8cD0Y", "Errichto"),
                        (0, exports.art)("Greedy Algorithms (CP Algorithms)", "https://cp-algorithms.com/")
                    ]),
                    (0, exports.topic)("Divide & Conquer: Closest Pair of Points, Karatsuba Multiplication", [
                        (0, exports.art)("Closest Pair of Points", "https://cp-algorithms.com/geometry/nearest_points.html")
                    ]),
                    (0, exports.topic)("Geometry Algorithms: Convex Hull (Graham Scan/Jarvis March), Line Intersection", [
                        (0, exports.art)("Computational Geometry (CP Algorithms)", "https://cp-algorithms.com/geometry/")
                    ]),
                    (0, exports.topic)("Math: Inclusion-Exclusion Principle, Catalan Numbers, Burnside's Lemma", [
                        (0, exports.art)("Combinatorics (CP Algorithms)", "https://cp-algorithms.com/combinatorics/")
                    ])
                ],
                project: {
                    title: "Codeforces Rating Push (Div. 2 to Div. 1)",
                    description: ["Complete 30 Codeforces Div. 2 contests virtually", "Reach Codeforces Expert rating (1600+)", "Solve at least 200 problems from Codeforces problem set"],
                    outcomes: ["Competitive programming credentials", "Algorithmic thinking for hardest tech interviews"]
                }
            }
        ]
    },
    {
        id: "dsa-p7",
        title: "Phase 7: Big Tech Interview Final Prep",
        weeks: "Weeks 21-24",
        modules: [
            {
                id: "dsa-m7.1",
                title: "FAANG-Specific Problem Patterns",
                weeks: "Week 21-22",
                topics: [
                    (0, exports.topic)("Meta Facebook Patterns: BFS shortest path, Graph DFS, 2-pointer, DP on strings", [
                        (0, exports.art)("Meta Coding Interview Prep", "https://leetcode.com/company/facebook/")
                    ]),
                    (0, exports.topic)("Google Patterns: Combinatorial search + pruning, graph algorithms, DP on trees", [
                        (0, exports.art)("Google Interview Prep Guide", "https://leetcode.com/company/google/"),
                        (0, exports.art)("Google SWE Interview Handbook", "https://google.github.io/eng-practices/")
                    ]),
                    (0, exports.topic)("Amazon Patterns: DP, heap, sorting, OOP leadership principles alignment", [
                        (0, exports.art)("Amazon Coding Interview Prep", "https://leetcode.com/company/amazon/")
                    ]),
                    (0, exports.topic)("Microsoft Patterns: Tree traversals, string manipulation, graph BFS", [
                        (0, exports.art)("Microsoft Interview Questions", "https://leetcode.com/company/microsoft/")
                    ]),
                    (0, exports.topic)("Apple / Netflix Patterns: System design + DS combined questions", [
                        (0, exports.art)("Apple Interview Questions", "https://leetcode.com/company/apple/")
                    ]),
                    (0, exports.topic)("NeetCode 150 ΓÇö The Gold Standard Interview Problem Set", [
                        (0, exports.art)("NeetCode 150 Roadmap", "https://neetcode.io/roadmap"),
                        (0, exports.vid)("NeetCode 150 Full Playlist", "https://www.youtube.com/watch?v=jgQjes7MgTM", "NeetCode")
                    ])
                ],
                project: {
                    title: "Company-Specific Mock Interviews",
                    description: ["Complete all NeetCode 150 problems", "Do 5 mock interviews (Pramp, Interviewing.io)", "Solve the top 30 problems for Meta, Google, Amazon each"],
                    outcomes: ["FAANG interview-ready", "100+ hours of deliberate practice"]
                }
            },
            {
                id: "dsa-m7.2",
                title: "System Design for Coding Interviews",
                weeks: "Week 23",
                topics: [
                    (0, exports.topic)("DS + System Design Combo: design Twitter, YouTube, Uber with DS focus", [
                        (0, exports.art)("System Design Primer", "https://github.com/donnemartin/system-design-primer"),
                        (0, exports.vid)("System Design Interview Course", "https://www.youtube.com/watch?v=i53Gi_K3o7I", "ByteByteGo")
                    ]),
                    (0, exports.topic)("DS for Scale: consistent hashing, bloom filters, skip lists, LSM trees", [
                        (0, exports.vid)("DS Used in Real Systems", "https://www.youtube.com/watch?v=H5JiIPilxIo", "ByteByteGo")
                    ]),
                    (0, exports.topic)("Concurrency & Locking: mutex, semaphore, lock-free DS (CAS)", [
                        (0, exports.art)("Concurrency Patterns", "https://jopdev.com/posts/concurrency-patterns/")
                    ])
                ],
                project: {
                    title: "Design a Rate Limiter & In-Memory Cache",
                    description: ["Design and implement an LRU Cache from scratch", "Design a rate limiter supporting 5 algorithms (token bucket, fixed window, etc.)", "Write a technical blog post explaining your design decisions"],
                    outcomes: ["Demonstrates depth expected at senior SDE level"]
                }
            },
            {
                id: "dsa-m7.3",
                title: "Interview Execution & Final Mile",
                weeks: "Week 24",
                topics: [
                    (0, exports.topic)("Mock Interview Etiquette: think aloud, clarify constraints, test edge cases", [
                        (0, exports.art)("How to Communicate in a Coding Interview", "https://www.techinterviewhandbook.org/coding-interview-techniques/")
                    ]),
                    (0, exports.topic)("Time Management in Interviews: 5-min plan, 20-min code, 5-min test strategy", [
                        (0, exports.art)("Tech Interview Handbook", "https://www.techinterviewhandbook.org/")
                    ]),
                    (0, exports.topic)("Edge Cases: empty inputs, single element, overflow, negative numbers", [
                        (0, exports.art)("Edge Cases to Always Check", "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/")
                    ]),
                    (0, exports.topic)("Negotiation & Offer Evaluation: BATNA, competing offers, stock vs salary", [
                        (0, exports.art)("Levels.fyi Offer Comparison", "https://www.levels.fyi/")
                    ])
                ],
                project: {
                    title: "Final Interview Simulation Week",
                    description: ["5 full mock interviews on Pramp / Interviewing.io", "Solve 10 new unseen problems under timed conditions", "Record yourself coding and review for communication gaps"],
                    outcomes: ["Peak interview readiness", "Prepared for all 30+ min coding rounds at FAANG/HFT/Startups"]
                }
            }
        ]
    }
];
// ===== EXPORT ALL PLANS =====
const campusxAiPlan = [
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
                    (0, exports.topic)("Python Advanced & OOPs", [
                        (0, exports.playlist)("CampusX Python Playlist", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvb1REQSmERk4-Tq1iFjInT-", "CampusX"),
                        (0, exports.vid)("Decorators & Generators", "https://www.youtube.com/watch?v=FsAPt_9Bf3U", "Corey Schafer")
                    ]),
                    (0, exports.topic)("Math: Linear Algebra & Calculus", [
                        (0, exports.playlist)("CampusX Math for ML", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbTfJ_M1L1R7QxW7P0xY2a4", "CampusX"),
                        (0, exports.art)("Essence of Linear Algebra", "https://www.3blue1brown.com/topics/linear-algebra", "3Blue1Brown")
                    ]),
                    (0, exports.topic)("Probability & Statistics for ML", [
                        (0, exports.playlist)("CampusX Statistics for ML", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbTfJ_M1L1R7QxW7P0xY2a4", "CampusX"),
                        (0, exports.vid)("Descriptive vs Inferential Stats", "https://www.youtube.com/watch?v=wXWz9BwTta8", "StatQuest")
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
                    (0, exports.topic)("Pandas & Numpy Masterclass", [
                        (0, exports.playlist)("100 Days of ML (Pandas)", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcUaPtE", "CampusX"),
                        (0, exports.doc)("Pandas Official Docs", "https://pandas.pydata.org/docs/")
                    ]),
                    (0, exports.topic)("Data Visualization (Matplotlib/Seaborn)", [
                        (0, exports.vid)("Matplotlib Crash Course", "https://www.youtube.com/watch?v=3Xc3CA655Ls", "Traversy Media"),
                        (0, exports.vid)("Seaborn Tutorial", "https://www.youtube.com/watch?v=6GUO8qrZEXQ", "Derek Banas")
                    ]),
                    (0, exports.topic)("Feature Selection & Engineering", [
                        (0, exports.playlist)("CampusX Feature Engineering", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcUaPtE", "CampusX"),
                        (0, exports.art)("Feature Engineering Best Practices", "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/", "Machine Learning Mastery")
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
                    (0, exports.topic)("Supervised: Linear & Logistic Regression", [
                        (0, exports.vid)("Linear Regression Intuition", "https://www.youtube.com/watch?v=nk2CQITm_eo", "StatQuest"),
                        (0, exports.vid)("CampusX Linear Regression", "https://www.youtube.com/watch?v=VxzjcJ54XQc", "CampusX")
                    ]),
                    (0, exports.topic)("Tree-Based Models: Decision Trees to XGBoost", [
                        (0, exports.vid)("Decision Trees", "https://www.youtube.com/watch?v=7VeUPuVNHT8", "StatQuest"),
                        (0, exports.vid)("Random Forests", "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ", "StatQuest"),
                        (0, exports.vid)("CampusX XGBoost", "https://www.youtube.com/watch?v=0hX0C2d4-sU", "CampusX")
                    ]),
                    (0, exports.topic)("Unsupervised: KMeans & PCA", [
                        (0, exports.vid)("K-Means Clustering", "https://www.youtube.com/watch?v=4b5d3muPQmA", "StatQuest"),
                        (0, exports.vid)("Principal Component Analysis (PCA)", "https://www.youtube.com/watch?v=FgakZw6K1QQ", "StatQuest")
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
                    (0, exports.topic)("Perceptrons & Backpropagation", [
                        (0, exports.playlist)("100 Days of DL", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYu1zOANL8vAEZgZhQ3KjTz", "CampusX"),
                        (0, exports.vid)("Neural Networks from Scratch", "https://www.youtube.com/watch?v=VMj-3S1tku0", "Andrej Karpathy")
                    ]),
                    (0, exports.topic)("PyTorch Fundamentals", [
                        (0, exports.playlist)("PyTorch for Deep Learning", "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4", "Patrick Loeber"),
                        (0, exports.doc)("PyTorch Official Tutorials", "https://pytorch.org/tutorials/")
                    ]),
                    (0, exports.topic)("Optimizers & Loss Functions", [
                        (0, exports.vid)("Optimizers Explained", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "StatQuest"),
                        (0, exports.vid)("CampusX SGD/Adam", "https://www.youtube.com/watch?v=1b1fW_RIT2s", "CampusX")
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
                    (0, exports.topic)("CNNs, ResNets & Transfer Learning", [
                        (0, exports.vid)("CNNs Explained", "https://www.youtube.com/watch?v=YRhxdVk_sIs", "StatQuest"),
                        (0, exports.vid)("CampusX CNN Tutorial", "https://www.youtube.com/watch?v=QzzRGGhP9P8", "CampusX"),
                        (0, exports.art)("Transfer Learning Guide", "https://cs231n.github.io/transfer-learning/", "Stanford CS231n")
                    ]),
                    (0, exports.topic)("RNNs, LSTMs & GRUs", [
                        (0, exports.vid)("RNNs Explained", "https://www.youtube.com/watch?v=AsNTP8Kwu80", "StatQuest"),
                        (0, exports.vid)("LSTMs Explained", "https://www.youtube.com/watch?v=YCzL96nL7j0", "StatQuest"),
                        (0, exports.vid)("CampusX LSTMs", "https://www.youtube.com/watch?v=x-j2O_z2598", "CampusX")
                    ]),
                    (0, exports.topic)("Word Embeddings (Word2Vec, GloVe)", [
                        (0, exports.vid)("Word Embeddings", "https://www.youtube.com/watch?v=5MaWmXwxFNQ", "StatQuest"),
                        (0, exports.vid)("CampusX Word2Vec", "https://www.youtube.com/watch?v=ZMTzG1Yw_nI", "CampusX")
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
                    (0, exports.topic)("Self-Attention Mechanism", [
                        (0, exports.vid)("Attention is All You Need", "https://www.youtube.com/watch?v=iDulhoQ2pro", "StatQuest"),
                        (0, exports.vid)("CampusX Transformers", "https://www.youtube.com/watch?v=5zCGnIfBmlM", "CampusX")
                    ]),
                    (0, exports.topic)("Hugging Face Transformers Library", [
                        (0, exports.playlist)("Complete NLP Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1AsG_S9ySjO2P8370uGv_L7", "Vizuara AI"),
                        (0, exports.playlist)("Hugging Face Course", "https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o", "Hugging Face")
                    ]),
                    (0, exports.topic)("Fine-Tuning BERT / InstructGPT", [
                        (0, exports.vid)("Fine-Tune BERT", "https://www.youtube.com/watch?v=GSt00_-0ncQ", "Venelin Valkov"),
                        (0, exports.doc)("HuggingFace Fine-Tuning", "https://huggingface.co/docs/transformers/training")
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
                    (0, exports.topic)("LangChain Core Concepts", [
                        (0, exports.playlist)("LangChain Full Course", "https://www.youtube.com/playlist?list=PLqAmigZvYxILVLf4e6r2dcq-S3WJ1mUfY", "Krish Naik"),
                        (0, exports.doc)("LangChain Docs", "https://python.langchain.com/docs/get_started/introduction")
                    ]),
                    (0, exports.topic)("Vector DBs (Chroma/Pinecone)", [
                        (0, exports.vid)("Vector Databases Explained", "https://www.youtube.com/watch?v=klTvEwg3oJ4", "Fireship"),
                        (0, exports.vid)("ChromaDB Tutorial", "https://www.youtube.com/watch?v=3yPBVii7lzI", "pixegami")
                    ]),
                    (0, exports.topic)("Building RAG Pipelines", [
                        (0, exports.vid)("CampusX Complete RAG", "https://www.youtube.com/watch?v=wd7TZ4e1mN0", "CampusX"),
                        (0, exports.vid)("Advanced RAG", "https://www.youtube.com/watch?v=T-D1OfcDW1M", "LangChain")
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
                    (0, exports.topic)("LoRA & QLoRA Fine-Tuning", [
                        (0, exports.vid)("LoRA Explained", "https://www.youtube.com/watch?v=YVU5wAA6Txo", "Weights & Biases"),
                        (0, exports.vid)("QLoRA Llama-3 Fine-tuning", "https://www.youtube.com/watch?v=XpoKB3usmKc", "Trelis Research")
                    ]),
                    (0, exports.topic)("Building AI Agents with LangGraph", [
                        (0, exports.vid)("LangGraph Full Course", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        (0, exports.doc)("LangGraph Documentation", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    (0, exports.topic)("Multi-Agent Frameworks (CrewAI)", [
                        (0, exports.vid)("CrewAI Tutorial", "https://www.youtube.com/watch?v=sPzc6hMg7So", "Matt Williams"),
                        (0, exports.doc)("CrewAI Docs", "https://docs.crewai.com/")
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
                    (0, exports.topic)("Docker Compose for ML Services", [
                        (0, exports.vid)("Docker in 100 Seconds", "https://www.youtube.com/watch?v=Gjnup-PuquQ", "Fireship"),
                        (0, exports.vid)("Deploy ML Models Docker", "https://www.youtube.com/watch?v=h5wLuVDr0oc", "Patrick Loeber")
                    ]),
                    (0, exports.topic)("MLflow Experiment Tracking", [
                        (0, exports.vid)("MLflow Tutorial", "https://www.youtube.com/watch?v=ksYIVDue8ak", "Krish Naik"),
                        (0, exports.doc)("MLflow Docs", "https://mlflow.org/docs/latest/index.html")
                    ]),
                    (0, exports.topic)("AWS Deployment & GitHub Actions", [
                        (0, exports.vid)("AWS EC2 Deploy CI/CD", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        (0, exports.doc)("GitHub Actions Docs", "https://docs.github.com/en/actions")
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
                    (0, exports.topic)("LeetCode & ML System Design", [
                        (0, exports.playlist)("NeetCode 150", "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf", "NeetCode"),
                        (0, exports.vid)("ML System Design Interview", "https://www.youtube.com/watch?v=pYs1lNd-XbI", "Stanford MLSys")
                    ]),
                    (0, exports.topic)("ATS Resume Optimization", [
                        (0, exports.vid)("Tech Resume Tips", "https://www.youtube.com/watch?v=J-4Fv8nq1iA", "Jeff Su"),
                        (0, exports.art)("ATS Resume Guide", "https://www.jobscan.co/blog/ats-resume-guide/", "Jobscan")
                    ]),
                    (0, exports.topic)("STAR Behavioral Prep", [
                        (0, exports.vid)("FAANG Behavioral Interview", "https://www.youtube.com/watch?v=PJKYqLP6MRE", "Jeff Su"),
                        (0, exports.art)("STAR Method for Engineers", "https://www.levels.fyi/blog/applying-star-framework.html", "levels.fyi")
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
const vizuaraPlan = [
    {
        id: "vz-p1",
        title: "Phase 1: Math & Stats for ML Mastery",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "vz-m1.1",
                title: "Mathematical Foundations",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("Calculus & Linear Algebra", [
                        (0, exports.vid)("Calculus for ML (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbW-0X9IeR4pGgU2T8Zsc2Q"),
                        (0, exports.vid)("Linear Algebra (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYhp0_L3f_J4U4NfEtoV0Mh"),
                        (0, exports.vid)("Math for AI (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    (0, exports.topic)("Probability & Optimization", [
                        (0, exports.vid)("Stats & Prob (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QzC67Y_S_TaqCOuuvY97"),
                        (0, exports.vid)("Optimization Theory (CampusX)", "https://www.youtube.com/watch?v=A6FiCD0796E"),
                        (0, exports.doc)("Math for ML Book", "https://mml-book.github.io/")
                    ])
                ],
                project: {
                    title: "Gradient Descent from Scratch",
                    description: ["Implement SGD, Adam from scratch", "Visualize loss landscapes"],
                    outcomes: ["Mathematical AI Intuition"]
                }
            }
        ]
    },
    {
        id: "vz-p2",
        title: "Phase 2: Advanced Machine Learning",
        weeks: "Weeks 5-8",
        modules: [
            {
                id: "vz-m2.1",
                title: "Supervised Learning Mastery",
                weeks: "Week 5-6",
                topics: [
                    (0, exports.topic)("Regression & Classification", [
                        (0, exports.vid)("ML Full Course (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wKukhTA9MSwU"),
                        (0, exports.vid)("100 Days of ML (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvb15A7VfX7pXUoP6tJ4vR0k"),
                        (0, exports.vid)("Advanced ML (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    (0, exports.topic)("SVM & Decision Trees", [
                        (0, exports.vid)("SVM Explained (CampusX)", "https://www.youtube.com/watch?v=T9UcK-Jnhi0"),
                        (0, exports.doc)("Elements of Statistical Learning", "https://hastie.su.domains/ElemStatLearn/"),
                        (0, exports.art)("Decision Tree Guide", "https://towardsdatascience.com/decision-trees-in-machine-learning-641b9c4e8052")
                    ])
                ],
                project: {
                    title: "End-to-End Prediction Pipeline",
                    description: ["Cross-validation strategies", "Hyperparameter tuning using Optuna"],
                    outcomes: ["Industrial ML Skills"]
                }
            }
        ]
    },
    {
        id: "vz-p3",
        title: "Phase 3: Deep Learning Foundations",
        weeks: "Weeks 9-12",
        modules: [
            {
                id: "vz-m3.1",
                title: "Neural Networks from Scratch",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.topic)("ANN Architectures", [
                        (0, exports.vid)("Deep Learning (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauAoOxyczvOAnAnT4Yx"),
                        (0, exports.vid)("DL Masterclass (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU7TKgz8SAInSno_Y6G0z"),
                        (0, exports.vid)("NN Basics (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    (0, exports.topic)("Backpropagation Mechanics", [
                        (0, exports.vid)("Calculus of Backprop (CampusX)", "https://www.youtube.com/watch?v=IHZwWFHWa-w"),
                        (0, exports.doc)("Deep Learning Book (Goodfellow)", "https://www.deeplearningbook.org/")
                    ])
                ],
                project: {
                    title: "Multi-Layer Perceptron Engine",
                    description: ["Build MLP using pure NumPy", "Implement MNIST classifier"],
                    outcomes: ["Neural Architecture Mastery"]
                }
            }
        ]
    },
    {
        id: "vz-p4",
        title: "Phase 4: CV & NLP Architectures",
        weeks: "Weeks 13-16",
        modules: [
            {
                id: "vz-m4.1",
                title: "Computer Vision & CNNs",
                weeks: "Week 13-14",
                topics: [
                    (0, exports.topic)("CNN Fundamentals", [
                        (0, exports.vid)("Computer Vision (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVNn7G-Gsh386Vd_5E2-i0G0"),
                        (0, exports.vid)("Object Detection (CampusX)", "https://www.youtube.com/watch?v=Z7nQ2y-bI_k"),
                        (0, exports.vid)("ViT Deep Dive (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    (0, exports.topic)("NLP: RNNs to LSTMs", [
                        (0, exports.vid)("NLP with DL (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B"),
                        (0, exports.doc)("Paper: Attention is All You Need", "https://arxiv.org/abs/1706.03762")
                    ])
                ],
                project: {
                    title: "Advanced Vision App",
                    description: ["Real-time segmentation", "Transfer learning with ResNet"],
                    outcomes: ["Specialized DL Engineer"]
                }
            }
        ]
    },
    {
        id: "vz-p5",
        title: "Phase 5: LLM Architecture & Build",
        weeks: "Weeks 17-20",
        modules: [
            {
                id: "vz-m5.1",
                title: "Transformers & LLMs",
                weeks: "Week 17-18",
                topics: [
                    (0, exports.topic)("Transformer Internals", [
                        (0, exports.vid)("Build LLM from Scratch (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        (0, exports.vid)("Generative AI (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B"),
                        (0, exports.vid)("Transformers (CampusX)", "https://www.youtube.com/watch?v=zduSFxRajkE")
                    ]),
                    (0, exports.topic)("Pre-training Pipelines", [
                        (0, exports.vid)("LLM Pipelines (CampusX)", "https://www.youtube.com/watch?v=uRQH2CFvedY"),
                        (0, exports.doc)("Llama-3 Tech Report", "https://arxiv.org/abs/2407.21783")
                    ])
                ],
                project: {
                    title: "Custom LLM Pre-trainer",
                    description: ["Tokenization flow", "Decoder-only block implementation"],
                    outcomes: ["LLM Internal Mastery"]
                }
            }
        ]
    },
    {
        id: "vz-p6",
        title: "Phase 6: RAG, Agents & Fine-tuning",
        weeks: "Weeks 21-24",
        modules: [
            {
                id: "vz-m6.1",
                title: "RAG & Agent Workflows",
                weeks: "Week 21-22",
                topics: [
                    (0, exports.topic)("Advanced RAG & Vector DBs", [
                        (0, exports.vid)("RAG Playlist (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B"),
                        (0, exports.vid)("AI Agents (CampusX)", "https://www.youtube.com/watch?v=v2gD8BHOaX4"),
                        (0, exports.vid)("Agent Planning (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    (0, exports.topic)("Fine-tuning: LoRA/QLoRA", [
                        (0, exports.vid)("PEFT (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        (0, exports.doc)("Paper: LoRA", "https://arxiv.org/abs/2106.09685")
                    ])
                ],
                project: {
                    title: "Multi-Agent Support System",
                    description: ["Agent self-correction", "Cross-tool orchestration"],
                    outcomes: ["Production Agentic AI"]
                }
            }
        ]
    }
];
// ===== PLAN: GPU PROGRAMMING (CUDA) =====
const gpuProgrammingPlan = [
    {
        id: "gpu-p1",
        title: "Phase 1: GPU Architecture & CUDA C Basics",
        weeks: "Weeks 1-2",
        modules: [
            {
                id: "gpu-m1.1",
                title: "CUDA Programming Model",
                weeks: "Week 1",
                topics: [
                    (0, exports.topic)("GPU Architecture: SMs, Warps, Threads", [
                        (0, exports.vid)("GPU Computing Architecture", "https://www.youtube.com/watch?v=kUkv3P_XByc"),
                        (0, exports.doc)("CUDA C Programming Guide", "https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html")
                    ]),
                    (0, exports.topic)("CUDA Kernels & Thread Indexing", [
                        (0, exports.vid)("CUDA Threading Model", "https://www.youtube.com/watch?v=2NgSpg3QkS0"),
                        (0, exports.art)("An Even Easier Introduction to CUDA", "https://developer.nvidia.com/blog/even-easier-introduction-cuda/")
                    ])
                ],
                project: {
                    title: "Vector Addition on GPU",
                    description: ["Write a CUDA kernel for mass vector addition", "Compare CPU vs GPU latency", "Error handling in CUDA"],
                    outcomes: ["Understand SIMT execution", "Master grid/block dimensions"]
                }
            }
        ]
    },
    {
        id: "gpu-p2",
        title: "Phase 2: Memory Optimization & Throughput",
        weeks: "Weeks 3-4",
        modules: [
            {
                id: "gpu-m2.1",
                title: "Tiled Matrix Multiplication",
                weeks: "Week 1",
                topics: [
                    (0, exports.topic)("Shared Memory & Tiling", [
                        (0, exports.vid)("CUDA Shared Memory", "https://www.youtube.com/watch?v=330"),
                        (0, exports.art)("Using Shared Memory in CUDA", "https://developer.nvidia.com/blog/using-shared-memory-cuda-cc/")
                    ]),
                    (0, exports.topic)("Memory Coalescing & Bank Conflicts", [
                        (0, exports.vid)("Memory Access Patterns", "https://www.youtube.com/watch?v=440")
                    ])
                ],
                project: {
                    title: "Optimized GEMM Kernel",
                    description: ["Implement matrix multiplication with tiling", "Profile memory throughput using NSight Compute"],
                    outcomes: ["Maximize memory bandwidth", "Avoid bank conflicts"]
                }
            }
        ]
    }
];
// ===== PLAN: RESUME SKILLS MASTERY =====
const resumeSkillsPlan = [
    {
        id: "rs-p1",
        title: "Phase 1: Backend Core",
        weeks: "Weeks 1-3",
        modules: [
            {
                id: "rs-m1.1",
                title: "Node.js Deep Internals",
                weeks: "Week 1",
                topics: [
                    (0, exports.topic)("Event Loop Phases & Internals", [
                        (0, exports.vid)("Event Loop Visualized — Philip Roberts", "https://www.youtube.com/watch?v=8aGhZQkoFbQ", "Philip Roberts"),
                        (0, exports.vid)("Node.js Complete Course", "https://www.youtube.com/watch?v=f2EqECiTBL8", "Dave Gray"),
                        (0, exports.doc)("Official Node.js Docs", "https://nodejs.org/en/docs")
                    ]),
                    (0, exports.topic)("Streams & Buffers", [
                        (0, exports.vid)("Node.js Streams Crash Course", "https://www.youtube.com/watch?v=GlybFFMXXmQ"),
                        (0, exports.doc)("Node.js Stream API", "https://nodejs.org/api/stream.html")
                    ]),
                    (0, exports.topic)("Worker Threads & Clustering", [
                        (0, exports.vid)("Worker Threads in Node.js", "https://www.youtube.com/watch?v=_Im4_3Z1NxQ"),
                        (0, exports.vid)("Clustering in Node.js", "https://www.youtube.com/watch?v=9RLeLngtQ3A"),
                        (0, exports.doc)("Worker Threads API", "https://nodejs.org/api/worker_threads.html")
                    ]),
                    (0, exports.topic)("process.nextTick vs setImmediate vs setTimeout", [
                        (0, exports.doc)("Event Loop Timers & nextTick", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/")
                    ])
                ],
                project: {
                    title: "High-Performance File Processing Service",
                    description: ["Build streaming file processor", "Worker threads for CPU tasks", "PM2 production deployment"],
                    outcomes: ["Master async patterns & Node.js internals", "Understand V8 engine semantics", "Confidently explain event loop in interviews"]
                }
            },
            {
                id: "rs-m1.2",
                title: "Express.js Production Patterns",
                weeks: "Week 1-2",
                topics: [
                    (0, exports.topic)("Express Middleware Chain", [
                        (0, exports.vid)("Express.js Full Course", "https://www.youtube.com/watch?v=CnH3kAXSrmU", "Traversy Media"),
                        (0, exports.vid)("Express Middleware Deep Dive", "https://www.youtube.com/watch?v=lY6icfhap2o"),
                        (0, exports.doc)("Express Best Practices", "https://expressjs.com/en/advanced/best-practice-performance.html")
                    ]),
                    (0, exports.topic)("Request Validation (Zod/Joi)", [
                        (0, exports.doc)("Zod Documentation", "https://zod.dev/")
                    ]),
                    (0, exports.topic)("Rate Limiting & Security Headers", [
                        (0, exports.doc)("Helmet.js", "https://helmetjs.github.io/"),
                        (0, exports.doc)("Error Handling Guide", "https://expressjs.com/en/guide/error-handling.html")
                    ])
                ],
                project: {
                    title: "Production REST API with Auth",
                    description: ["JWT authentication", "RBAC middleware", "Rate limiting & Helmet"],
                    outcomes: ["Build secure production APIs", "Master middleware patterns"]
                }
            },
            {
                id: "rs-m1.3",
                title: "FastAPI — Python Backend",
                weeks: "Week 2-3",
                topics: [
                    (0, exports.topic)("FastAPI Fundamentals & Pydantic", [
                        (0, exports.vid)("FastAPI Full Course", "https://www.youtube.com/watch?v=tLKKmouUams", "FreeCodeCamp"),
                        (0, exports.doc)("FastAPI Official Tutorial", "https://fastapi.tiangolo.com/tutorial/"),
                        (0, exports.doc)("Pydantic V2 Docs", "https://docs.pydantic.dev/latest/")
                    ]),
                    (0, exports.topic)("Async/Await & Dependency Injection", [
                        (0, exports.vid)("FastAPI Async Deep Dive", "https://www.youtube.com/watch?v=0sOvCWFmrtA")
                    ]),
                    (0, exports.topic)("StreamingResponse & Background Tasks", [
                        (0, exports.doc)("FastAPI Streaming", "https://fastapi.tiangolo.com/advanced/custom-response/#streamingresponse")
                    ])
                ],
                project: {
                    title: "Audio Streaming Microservice",
                    description: ["FastAPI with StreamingResponse", "Background task processing", "OpenAPI auto-docs"],
                    outcomes: ["Build FastAPI microservices", "Token/audio streaming", "Explain Pydantic validation in interviews"]
                }
            },
            {
                id: "rs-m1.4",
                title: "REST API Design & GraphQL",
                weeks: "Week 3",
                topics: [
                    (0, exports.topic)("REST API Best Practices", [
                        (0, exports.vid)("RESTful API Design", "https://www.youtube.com/watch?v=DcQg-SnJl88"),
                        (0, exports.doc)("HTTP Status Codes", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"),
                        (0, exports.art)("API Versioning Strategies", "https://restfulapi.net/versioning/")
                    ]),
                    (0, exports.topic)("GraphQL — Queries, Mutations, Subscriptions", [
                        (0, exports.vid)("GraphQL Full Course", "https://www.youtube.com/watch?v=ed8SzALpx1Q", "FreeCodeCamp"),
                        (0, exports.vid)("GraphQL Subscriptions", "https://www.youtube.com/watch?v=x-usi-mwJKM"),
                        (0, exports.doc)("Apollo Server Docs", "https://www.apollographql.com/docs/apollo-server/"),
                        (0, exports.doc)("GraphQL Official", "https://graphql.org/learn/")
                    ]),
                    (0, exports.topic)("N+1 Problem & DataLoader", [
                        (0, exports.art)("Solving N+1 in GraphQL", "https://graphql.org/learn/best-practices/")
                    ])
                ],
                project: {
                    title: "GraphQL Chat API",
                    description: ["Queries + Mutations + Subscriptions", "DataLoader for N+1", "Apollo Server setup"],
                    outcomes: ["Design clean REST APIs", "Build GraphQL schemas", "Explain GraphQL vs REST trade-offs"]
                }
            }
        ]
    },
    {
        id: "rs-p2",
        title: "Phase 2: Databases",
        weeks: "Weeks 3-5",
        modules: [
            {
                id: "rs-m2.1",
                title: "MongoDB Advanced",
                weeks: "Week 3-4",
                topics: [
                    (0, exports.topic)("Aggregation Pipeline ($match, $group, $lookup)", [
                        (0, exports.vid)("MongoDB Complete Course", "https://www.youtube.com/watch?v=ExcRbA7fy_A", "Net Ninja"),
                        (0, exports.vid)("Aggregation Pipeline Deep Dive", "https://www.youtube.com/watch?v=A3jvoE0jGdE"),
                        (0, exports.doc)("MongoDB Data Modeling", "https://www.mongodb.com/docs/manual/data-modeling/")
                    ]),
                    (0, exports.topic)("Schema Design (Embed vs Reference)", [
                        (0, exports.vid)("Mongoose Advanced Patterns", "https://www.youtube.com/watch?v=DZBGEVgL2eE"),
                        (0, exports.doc)("Indexing Strategies", "https://www.mongodb.com/docs/manual/indexes/")
                    ]),
                    (0, exports.topic)("Indexing, Transactions & Change Streams", [
                        (0, exports.doc)("MongoDB Transactions", "https://www.mongodb.com/docs/manual/core/transactions/")
                    ])
                ],
                project: {
                    title: "Agent Configuration Database",
                    description: ["Design schemas for AI agents & execution traces", "Aggregation pipelines for analytics", "TTL indexes for auto-cleanup"],
                    outcomes: ["Advanced MongoDB patterns", "Explain embed vs reference decisions", "Query optimization"]
                }
            },
            {
                id: "rs-m2.2",
                title: "PostgreSQL & Redis",
                weeks: "Week 4-5",
                topics: [
                    (0, exports.topic)("PostgreSQL — JOINs, Window Functions, CTEs", [
                        (0, exports.vid)("PostgreSQL Full Course", "https://www.youtube.com/watch?v=qw--VYLpxG4", "FreeCodeCamp"),
                        (0, exports.doc)("PostgreSQL Docs", "https://www.postgresql.org/docs/current/")
                    ]),
                    (0, exports.topic)("EXPLAIN ANALYZE & Indexing (B-tree, GIN)", [
                        (0, exports.vid)("PostgreSQL Advanced Queries", "https://www.youtube.com/watch?v=sEgMhR46EVk")
                    ]),
                    (0, exports.topic)("Redis — Data Structures & Caching Strategies", [
                        (0, exports.vid)("Redis Crash Course", "https://www.youtube.com/watch?v=jgpVdJB2sKQ", "Traversy Media"),
                        (0, exports.vid)("Redis Deep Dive", "https://www.youtube.com/watch?v=sVCZo5B8ghE", "Hussein Nasser"),
                        (0, exports.doc)("Redis Official Docs", "https://redis.io/docs/")
                    ]),
                    (0, exports.topic)("Redis Pub/Sub & Streams", [
                        (0, exports.vid)("Redis Pub/Sub Tutorial", "https://www.youtube.com/watch?v=NLe1yvvHbAI"),
                        (0, exports.vid)("Node.js + Redis", "https://www.youtube.com/watch?v=oaJq1mQ3dFI")
                    ]),
                    (0, exports.topic)("Cache-aside, Write-through, TTL & Eviction (LRU/LFU)", [
                        (0, exports.art)("Caching Strategies Guide", "https://redis.io/docs/manual/eviction/")
                    ])
                ],
                project: {
                    title: "Redis-Cached API with PostgreSQL",
                    description: ["PostgreSQL for relational data", "Redis cache layer with invalidation", "Pub/Sub for real-time events"],
                    outcomes: ["Master SQL + NoSQL together", "Implement caching strategies", "Explain cache invalidation in interviews"]
                }
            },
            {
                id: "rs-m2.3",
                title: "DynamoDB Basics",
                weeks: "Week 5",
                topics: [
                    (0, exports.topic)("Partition Key, Sort Key & Single Table Design", [
                        (0, exports.vid)("DynamoDB Crash Course", "https://www.youtube.com/watch?v=2k2GINpO308", "Be A Better Dev"),
                        (0, exports.vid)("Single Table Design", "https://www.youtube.com/watch?v=BnDKD_Zv0og"),
                        (0, exports.doc)("AWS DynamoDB Docs", "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/")
                    ]),
                    (0, exports.topic)("GSI, LSI, Query vs Scan", [
                        (0, exports.art)("DynamoDB Best Practices", "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/best-practices.html")
                    ])
                ],
                project: {
                    title: "Learning Tracker DynamoDB Backend",
                    description: ["Single table design for schedules", "GSI for user queries", "DynamoDB Streams for events"],
                    outcomes: ["Understand DynamoDB data modeling", "Explain partition key choices"]
                }
            }
        ]
    },
    {
        id: "rs-p3",
        title: "Phase 3: Real-Time & Communication",
        weeks: "Weeks 5-6",
        modules: [
            {
                id: "rs-m3.1",
                title: "WebSockets & Socket.IO",
                weeks: "Week 5-6",
                topics: [
                    (0, exports.topic)("WebSocket Handshake & Connection Lifecycle", [
                        (0, exports.vid)("WebSockets Crash Course", "https://www.youtube.com/watch?v=2Nt-ZrNP22A"),
                        (0, exports.vid)("WebSocket Deep Dive", "https://www.youtube.com/watch?v=XgFzHXOk8IQ", "Hussein Nasser"),
                        (0, exports.doc)("WebSocket API — MDN", "https://developer.mozilla.org/en-US/docs/Web/API/WebSocket")
                    ]),
                    (0, exports.topic)("Socket.IO — Events, Rooms, Namespaces", [
                        (0, exports.vid)("Socket.IO Complete Tutorial", "https://www.youtube.com/watch?v=ZKEqqIO7n-k"),
                        (0, exports.vid)("Socket.IO + React Chat App", "https://www.youtube.com/watch?v=djMy4QsPWiI"),
                        (0, exports.doc)("Socket.IO Docs", "https://socket.io/docs/v4/")
                    ]),
                    (0, exports.topic)("Scaling WebSockets with Redis Adapter", [
                        (0, exports.art)("Socket.IO Redis Adapter", "https://socket.io/docs/v4/redis-adapter/")
                    ]),
                    (0, exports.topic)("Heartbeat/Ping-Pong & Reconnection", [
                        (0, exports.doc)("ws Library Docs", "https://github.com/websockets/ws")
                    ])
                ],
                project: {
                    title: "Real-Time Chat with Streaming",
                    description: ["WebSocket broadcasting", "Socket.IO rooms", "Redis adapter for scaling"],
                    outcomes: ["Build real-time features confidently", "Explain WebSocket vs HTTP", "Scale real-time apps"]
                }
            }
        ]
    },
    {
        id: "rs-p4",
        title: "Phase 4: Frontend",
        weeks: "Weeks 6-8",
        modules: [
            {
                id: "rs-m4.1",
                title: "React.js Advanced Patterns",
                weeks: "Week 6-7",
                topics: [
                    (0, exports.topic)("Hooks Deep Dive (useState, useEffect, useRef, useMemo, useCallback)", [
                        (0, exports.vid)("React Full Course 2024", "https://www.youtube.com/watch?v=RVFAyFWO4go", "Dave Gray"),
                        (0, exports.vid)("React Hooks Deep Dive", "https://www.youtube.com/watch?v=TNhaISOUy6Q"),
                        (0, exports.doc)("React Official Docs", "https://react.dev/")
                    ]),
                    (0, exports.topic)("Custom Hooks & Context API", [
                        (0, exports.art)("React Design Patterns", "https://www.patterns.dev/react")
                    ]),
                    (0, exports.topic)("Performance — React.memo, Code Splitting, Suspense", [
                        (0, exports.vid)("React Performance Optimization", "https://www.youtube.com/watch?v=CaShN6mCJB0")
                    ]),
                    (0, exports.topic)("Error Boundaries & Controlled Components", [
                        (0, exports.doc)("Error Boundaries", "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary")
                    ])
                ],
                project: {
                    title: "Dashboard with Real-Time Updates",
                    description: ["Custom hooks for data fetching", "WebSocket integration", "Code splitting & lazy loading"],
                    outcomes: ["Advanced React patterns", "Performance optimization", "Explain React rendering in interviews"]
                }
            },
            {
                id: "rs-m4.2",
                title: "Next.js & Redux Toolkit",
                weeks: "Week 7-8",
                topics: [
                    (0, exports.topic)("Next.js App Router & Server Components", [
                        (0, exports.vid)("Next.js Full Course", "https://www.youtube.com/watch?v=wm5gMKuwSYk", "JavaScript Mastery"),
                        (0, exports.vid)("Next.js App Router Deep Dive", "https://www.youtube.com/watch?v=gSSsZReIFRk"),
                        (0, exports.doc)("Next.js Official Tutorial", "https://nextjs.org/learn"),
                        (0, exports.doc)("Next.js Docs", "https://nextjs.org/docs")
                    ]),
                    (0, exports.topic)("SSR, SSG, ISR & API Routes", [
                        (0, exports.art)("Rendering Strategies", "https://nextjs.org/docs/app/building-your-application/rendering")
                    ]),
                    (0, exports.topic)("Redux Toolkit — createSlice, RTK Query, createAsyncThunk", [
                        (0, exports.vid)("Redux Toolkit Full Course", "https://www.youtube.com/watch?v=NqzdVN2tyvQ", "Dave Gray"),
                        (0, exports.vid)("RTK Query Tutorial", "https://www.youtube.com/watch?v=HyZzCHgG3AY"),
                        (0, exports.doc)("Redux Toolkit Docs", "https://redux-toolkit.js.org/")
                    ])
                ],
                project: {
                    title: "Micro-Frontend Dashboard",
                    description: ["Next.js with App Router", "Redux Toolkit state management", "RTK Query for API calls"],
                    outcomes: ["Build production Next.js apps", "Explain SSR vs SSG", "Master state management"]
                }
            },
            {
                id: "rs-m4.3",
                title: "React Native & TailwindCSS",
                weeks: "Week 8",
                topics: [
                    (0, exports.topic)("React Native — Core Components & Navigation", [
                        (0, exports.vid)("React Native Full Course", "https://www.youtube.com/watch?v=ANdSdIlgsEw", "Hitesh Choudhary"),
                        (0, exports.doc)("React Native Docs", "https://reactnative.dev/docs/environment-setup")
                    ]),
                    (0, exports.topic)("FlatList, AsyncStorage & Native Modules", [
                        (0, exports.vid)("React Navigation Tutorial", "https://www.youtube.com/watch?v=npe3Wf4t0SQ")
                    ]),
                    (0, exports.topic)("TailwindCSS Utility-First Approach", [
                        (0, exports.vid)("TailwindCSS Crash Course", "https://www.youtube.com/watch?v=UBOj6rqRUME", "Traversy Media"),
                        (0, exports.doc)("TailwindCSS Docs", "https://tailwindcss.com/docs")
                    ])
                ],
                project: {
                    title: "Mobile App with React Native",
                    description: ["Stack + Tab navigation", "AsyncStorage persistence", "TailwindCSS (NativeWind) styling"],
                    outcomes: ["Build cross-platform mobile apps", "Explain React Native architecture"]
                }
            }
        ]
    },
    {
        id: "rs-p5",
        title: "Phase 5: Cloud & DevOps",
        weeks: "Weeks 8-10",
        modules: [
            {
                id: "rs-m5.1",
                title: "AWS Core Services",
                weeks: "Week 8-9",
                topics: [
                    (0, exports.topic)("AWS Lambda — Cold Starts, Layers, Triggers", [
                        (0, exports.vid)("AWS Full Course", "https://www.youtube.com/watch?v=ulprqHHWlng", "FreeCodeCamp"),
                        (0, exports.vid)("AWS Lambda Deep Dive", "https://www.youtube.com/watch?v=eOBq__h4OJ4"),
                        (0, exports.doc)("AWS Lambda Docs", "https://docs.aws.amazon.com/lambda/")
                    ]),
                    (0, exports.topic)("EC2 — Instance Types, Security Groups, AMIs", [
                        (0, exports.vid)("AWS EC2 Tutorial", "https://www.youtube.com/watch?v=iHX-jtKIVNA"),
                        (0, exports.doc)("AWS EC2 Docs", "https://docs.aws.amazon.com/ec2/")
                    ]),
                    (0, exports.topic)("S3 — Presigned URLs, Lifecycle, Static Hosting", [
                        (0, exports.doc)("AWS S3 Docs", "https://docs.aws.amazon.com/s3/")
                    ]),
                    (0, exports.topic)("API Gateway — REST vs HTTP APIs, Authorizers", [
                        (0, exports.doc)("API Gateway Docs", "https://docs.aws.amazon.com/apigateway/")
                    ]),
                    (0, exports.topic)("GCP Cloud Run & Pub/Sub", [
                        (0, exports.vid)("GCP Cloud Run Tutorial", "https://www.youtube.com/watch?v=nhwYc4StHIc"),
                        (0, exports.vid)("GCP Pub/Sub Explained", "https://www.youtube.com/watch?v=cvu53CnZmGI"),
                        (0, exports.doc)("Cloud Run Docs", "https://cloud.google.com/run/docs")
                    ])
                ],
                project: {
                    title: "Serverless API on AWS",
                    description: ["Lambda + API Gateway", "S3 file uploads", "DynamoDB backend"],
                    outcomes: ["Deploy serverless apps", "Explain Lambda cold starts", "AWS architecture decisions"]
                }
            },
            {
                id: "rs-m5.2",
                title: "Docker, CI/CD & Nginx",
                weeks: "Week 9-10",
                topics: [
                    (0, exports.topic)("Docker — Dockerfile, Multi-stage Builds, Compose", [
                        (0, exports.vid)("Docker Full Course", "https://www.youtube.com/watch?v=3c-iBn73dDE", "TechWorld with Nana"),
                        (0, exports.vid)("Docker Multi-Stage Builds", "https://www.youtube.com/watch?v=zpkqNPwEzac"),
                        (0, exports.doc)("Docker Official Docs", "https://docs.docker.com/"),
                        (0, exports.doc)("Dockerfile Best Practices", "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/")
                    ]),
                    (0, exports.topic)("GitHub Actions — Workflows, Secrets, Matrix Builds", [
                        (0, exports.vid)("GitHub Actions Full Course", "https://www.youtube.com/watch?v=R8_veQiYBjI"),
                        (0, exports.doc)("GitHub Actions Docs", "https://docs.github.com/en/actions")
                    ]),
                    (0, exports.topic)("Nginx — Reverse Proxy, Load Balancing, SSL", [
                        (0, exports.vid)("Nginx Crash Course", "https://www.youtube.com/watch?v=7VAI73roXaY", "Traversy Media"),
                        (0, exports.vid)("Nginx as Reverse Proxy", "https://www.youtube.com/watch?v=WC2-hNNBWII"),
                        (0, exports.doc)("Nginx Docs", "https://nginx.org/en/docs/")
                    ]),
                    (0, exports.topic)("Serverless Framework", [
                        (0, exports.vid)("Serverless Framework Full Course", "https://www.youtube.com/watch?v=71cd5XerKss"),
                        (0, exports.doc)("Serverless Framework Docs", "https://www.serverless.com/framework/docs")
                    ])
                ],
                project: {
                    title: "Dockerized App with CI/CD",
                    description: ["Multi-stage Dockerfile", "GitHub Actions pipeline", "Nginx reverse proxy"],
                    outcomes: ["Containerize any app", "Automate deployments", "Configure Nginx for production"]
                }
            }
        ]
    },
    {
        id: "rs-p6",
        title: "Phase 6: AI, LLMs & Agentic AI",
        weeks: "Weeks 10-14",
        modules: [
            {
                id: "rs-m6.1",
                title: "LLM Integration & Prompt Engineering",
                weeks: "Week 10-11",
                topics: [
                    (0, exports.topic)("Prompt Engineering — Zero-shot, Few-shot, CoT", [
                        (0, exports.vid)("Prompt Engineering Course — Andrew Ng", "https://www.youtube.com/watch?v=_ZvnD96BbKI", "Andrew Ng"),
                        (0, exports.doc)("Anthropic Prompt Engineering Guide", "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering")
                    ]),
                    (0, exports.topic)("OpenAI API — Chat Completions & Function Calling", [
                        (0, exports.vid)("OpenAI API Full Tutorial", "https://www.youtube.com/watch?v=c-g6epk3fFE"),
                        (0, exports.vid)("OpenAI Function Calling", "https://www.youtube.com/watch?v=0lOSvOoF2to"),
                        (0, exports.doc)("OpenAI Docs", "https://platform.openai.com/docs/")
                    ]),
                    (0, exports.topic)("Token Streaming (SSE / StreamingResponse)", [
                        (0, exports.art)("OpenAI Streaming Guide", "https://platform.openai.com/docs/guides/text-generation")
                    ]),
                    (0, exports.topic)("LangChain Basics", [
                        (0, exports.vid)("LangChain Crash Course", "https://www.youtube.com/watch?v=LbT1yp6quS8")
                    ])
                ],
                project: {
                    title: "AI Content Assistant with Streaming",
                    description: ["Multi-model LLM integration", "Token streaming via SSE", "Function calling for tools"],
                    outcomes: ["Integrate LLMs into apps", "Explain prompt techniques", "Build streaming AI responses"]
                }
            },
            {
                id: "rs-m6.2",
                title: "Multi-Agent Systems & Agentic Workflows",
                weeks: "Week 11-13",
                topics: [
                    (0, exports.topic)("Agent Architecture — ReAct, Plan-and-Execute, Tool-Use", [
                        (0, exports.vid)("AI Agents Explained", "https://www.youtube.com/watch?v=F8NKVhkZZWI"),
                        (0, exports.vid)("LangGraph Full Course", "https://www.youtube.com/watch?v=R8KB-Zcynxc"),
                        (0, exports.doc)("LangGraph Docs", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    (0, exports.topic)("Multi-Agent Communication & Orchestration", [
                        (0, exports.vid)("CrewAI Full Tutorial", "https://www.youtube.com/watch?v=tnejrr-0a94"),
                        (0, exports.vid)("AutoGen Multi-Agent", "https://www.youtube.com/watch?v=vU2S6dVf79M"),
                        (0, exports.doc)("CrewAI Docs", "https://docs.crewai.com/")
                    ]),
                    (0, exports.topic)("Memory Management — Short-term, Long-term, Episodic", [
                        (0, exports.art)("Agent Memory Patterns", "https://langchain-ai.github.io/langgraph/concepts/memory/")
                    ]),
                    (0, exports.topic)("Human-in-the-Loop & Error Recovery", [
                        (0, exports.art)("HITL in LangGraph", "https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/")
                    ])
                ],
                project: {
                    title: "4-Agent Test Automation System",
                    description: ["UI Explorer Agent", "Code Generator Agent", "Code Analysis Agent", "Orchestrator Agent"],
                    outcomes: ["Design multi-agent systems", "Explain agent communication patterns", "Build agentic workflows"]
                }
            },
            {
                id: "rs-m6.3",
                title: "Rovo & Microsoft Agent Frameworks",
                weeks: "Week 13-14",
                topics: [
                    (0, exports.topic)("Rovo Agent Framework — Architecture & JIRA Integration", [
                        (0, exports.doc)("Atlassian Rovo Overview", "https://www.atlassian.com/software/rovo"),
                        (0, exports.doc)("Rovo Agents Docs", "https://developer.atlassian.com/platform/forge/manifest-reference/modules/rovo-agent/"),
                        (0, exports.art)("Build a Rovo Agent", "https://developer.atlassian.com/platform/forge/build-a-rovo-agent/")
                    ]),
                    (0, exports.topic)("Microsoft Semantic Kernel & AutoGen", [
                        (0, exports.vid)("Semantic Kernel Full Course", "https://www.youtube.com/watch?v=mIINbfp1Czw"),
                        (0, exports.doc)("Semantic Kernel Docs", "https://learn.microsoft.com/en-us/semantic-kernel/"),
                        (0, exports.doc)("Microsoft AI Agent Framework", "https://learn.microsoft.com/en-us/dotnet/ai/")
                    ]),
                    (0, exports.topic)("Agent Orchestration in .NET", [
                        (0, exports.vid)("AutoGen Tutorial", "https://www.youtube.com/watch?v=vU2S6dVf79M")
                    ])
                ],
                project: {
                    title: "Enterprise Rovo Agents Suite",
                    description: ["8 Rovo agents for JIRA automation", "Agent Orchestrator", "Microsoft Agent workflow"],
                    outcomes: ["Build enterprise AI agents", "Explain Rovo vs LangGraph", "Demonstrate agent orchestration"]
                }
            }
        ]
    },
    {
        id: "rs-p7",
        title: "Phase 7: Architecture & Design Patterns",
        weeks: "Weeks 14-16",
        modules: [
            {
                id: "rs-m7.1",
                title: "Microservices & Event-Driven Architecture",
                weeks: "Week 14-15",
                topics: [
                    (0, exports.topic)("Microservices Patterns — API Gateway, Service Discovery, Circuit Breaker", [
                        (0, exports.vid)("Microservices Explained", "https://www.youtube.com/watch?v=rv4LlmLmVWk", "TechWorld with Nana"),
                        (0, exports.vid)("Microservices Full Course", "https://www.youtube.com/watch?v=Cw2RzaKFiow", "FreeCodeCamp"),
                        (0, exports.art)("Martin Fowler: Microservices", "https://martinfowler.com/articles/microservices.html")
                    ]),
                    (0, exports.topic)("Saga Pattern & Distributed Transactions", [
                        (0, exports.art)("Saga Pattern Explained", "https://microservices.io/patterns/data/saga.html")
                    ]),
                    (0, exports.topic)("Event-Driven Architecture — Event Sourcing & CQRS", [
                        (0, exports.vid)("Event-Driven Architecture Guide", "https://www.youtube.com/watch?v=STKCRSUsyP0"),
                        (0, exports.vid)("Event Sourcing Explained", "https://www.youtube.com/watch?v=AUj4M-st3ic")
                    ])
                ],
                project: {
                    title: "Event-Driven Microservices Platform",
                    description: ["3+ microservices with API Gateway", "Event sourcing for audit", "Circuit breaker for resilience"],
                    outcomes: ["Design distributed systems", "Explain microservices trade-offs", "Event-driven thinking"]
                }
            },
            {
                id: "rs-m7.2",
                title: "Design Patterns, SOLID & Observability",
                weeks: "Week 15-16",
                topics: [
                    (0, exports.topic)("SOLID Principles (S-O-L-I-D)", [
                        (0, exports.vid)("SOLID Principles Explained", "https://www.youtube.com/watch?v=_jDNAf3CzeY", "FreeCodeCamp"),
                        (0, exports.doc)("Refactoring Guru — All Patterns", "https://refactoring.guru/design-patterns")
                    ]),
                    (0, exports.topic)("Decorator Pattern (Logging/Caching/Auth)", [
                        (0, exports.vid)("Decorator Pattern Explained", "https://www.youtube.com/watch?v=GCraGHx6gso"),
                        (0, exports.vid)("Design Patterns in JavaScript", "https://www.youtube.com/watch?v=kuirGzhGhR8")
                    ]),
                    (0, exports.topic)("Canonical Logging & Structured JSON Logging", [
                        (0, exports.art)("Canonical Log Lines — Stripe", "https://stripe.com/blog/canonical-log-lines"),
                        (0, exports.vid)("Winston Logger in Node.js", "https://www.youtube.com/watch?v=A5YiqaQbsyI")
                    ]),
                    (0, exports.topic)("API Security — JWT, OAuth 2.0, RBAC, OWASP", [
                        (0, exports.vid)("JWT Authentication Tutorial", "https://www.youtube.com/watch?v=mbsmsi7l3r4"),
                        (0, exports.vid)("OAuth 2.0 Explained", "https://www.youtube.com/watch?v=ZV5yTm4pT8g"),
                        (0, exports.doc)("OWASP API Security Top 10", "https://owasp.org/API-Security/")
                    ])
                ],
                project: {
                    title: "Observable Backend with Decorator Logging",
                    description: ["Decorator pattern for logging", "Structured JSON logs", "JWT + RBAC security layer"],
                    outcomes: ["Apply SOLID in real code", "Explain Decorator pattern in interviews", "Build observable systems"]
                }
            }
        ]
    },
    {
        id: "rs-p8",
        title: "Phase 8: Tools & Production Skills",
        weeks: "Weeks 16-17",
        modules: [
            {
                id: "rs-m8.1",
                title: "NPM Libraries & Production Tooling",
                weeks: "Week 16-17",
                topics: [
                    (0, exports.topic)("Building & Publishing NPM Packages", [
                        (0, exports.vid)("Build & Publish NPM Package", "https://www.youtube.com/watch?v=J4b_T-qH3BY"),
                        (0, exports.doc)("NPM Creating Packages", "https://docs.npmjs.com/creating-and-publishing-scoped-public-packages")
                    ]),
                    (0, exports.topic)("Semantic Versioning & Scoped Packages", [
                        (0, exports.art)("Semver Explained", "https://semver.org/")
                    ]),
                    (0, exports.topic)("Monorepos with npm Workspaces", [
                        (0, exports.doc)("npm Workspaces", "https://docs.npmjs.com/cli/using-npm/workspaces")
                    ]),
                    (0, exports.topic)("TypeScript Support in Packages", [
                        (0, exports.doc)("TypeScript Handbook", "https://www.typescriptlang.org/docs/handbook/")
                    ])
                ],
                project: {
                    title: "Internal NPM Utility Library",
                    description: ["Scoped NPM package", "TypeScript + types", "Unit tests + CI publish"],
                    outcomes: ["Build reusable libraries", "Explain how you accelerated dev velocity by 40%"]
                }
            }
        ]
    },
    {
        id: "rs-p9",
        title: "Phase 9: GPU Programming (FDE Specialization)",
        weeks: "Weeks 17-18",
        modules: gpuProgrammingPlan[0].modules.concat(gpuProgrammingPlan[1].modules)
    },
    {
        id: "fde-p5",
        title: "Phase 5: Forward Deployed ML Ops & Infra",
        weeks: "2-4 Weeks",
        modules: [
            {
                id: "fde-m5.1",
                title: "Model Serving & Optimization",
                weeks: "2 Weeks",
                topics: [
                    (0, exports.topic)("High-Throughput Serving (vLLM, TensorRT-LLM)", [
                        (0, exports.vid)("vLLM Deep Dive", "https://www.youtube.com/watch?v=110", "Vizuara AI"),
                        (0, exports.doc)("TensorRT-LLM Quickstart", "https://github.com/NVIDIA/TensorRT-LLM")
                    ]),
                    (0, exports.topic)("Docker & K8s for AI Models", [
                        (0, exports.vid)("Kubernetes for MLOps", "https://www.youtube.com/watch?v=220", "TechWorld with Nana")
                    ])
                ],
                project: {
                    title: "K8s High-Performance LLM Endpoint",
                    description: ["Containerize a 7B model using vLLM", "Deploy to Minikube with autoscaling on GPU utilization"],
                    outcomes: ["Enterprise Model Deployment", "High-throughput engineering"]
                }
            }
        ]
    },
    {
        id: "fde-p6",
        title: "Phase 6: Enterprise Data Engineering",
        weeks: "2-3 Weeks",
        modules: [
            {
                id: "fde-m6.1",
                title: "Data Pipelines & AI Integration",
                weeks: "1.5 Weeks",
                topics: [
                    (0, exports.topic)("Streaming Architectures (Kafka)", [
                        (0, exports.vid)("Apache Kafka Crash Course", "https://www.youtube.com/watch?v=330")
                    ]),
                    (0, exports.topic)("Data Lakes & Processing (PySpark, Databricks)", [
                        (0, exports.vid)("PySpark Full Course", "https://www.youtube.com/watch?v=440")
                    ]),
                    (0, exports.topic)("Security, RBAC & API Gateways", [
                        (0, exports.doc)("OWASP API Security", "https://owasp.org/API-Security/")
                    ])
                ],
                project: {
                    title: "Real-time AI Processing Pipeline",
                    description: ["Ingest live data via Kafka", "Process with PySpark and route to Vector DB securely"],
                    outcomes: ["Bridge Data Eng & AI", "Secure enterprise deployments"]
                }
            }
        ]
    },
    {
        id: "fde-p7",
        title: "Phase 7: Applied AI Solutions & FDE Delivery",
        weeks: "3-4 Weeks",
        modules: [
            {
                id: "fde-m7.1",
                title: "Advanced RAG & Agentic Delivery",
                weeks: "2 Weeks",
                topics: [
                    (0, exports.topic)("Production RAG (Hybrid, GraphRAG, Query Routing)", [
                        (0, exports.vid)("Advanced RAG Patterns", "https://www.youtube.com/watch?v=550", "LangChain")
                    ]),
                    (0, exports.topic)("Client-Facing Engineering & Stakeholder Mgmt", [
                        (0, exports.art)("The Forward Deployed Engineer Role", "https://medium.com/@FDE")
                    ])
                ],
                project: {
                    title: "Enterprise Agentic Solution",
                    description: ["Build a multi-agent system scoped to a mock client's messy enterprise data", "Deploy end-to-end with SLA metrics and trace observability"],
                    outcomes: ["Full-stack FDE capability", "Consulting & execution mastery"]
                }
            }
        ]
    }
];
exports.allLearningPlans = [
    {
        id: "vizuara-ai",
        name: "Vizuara AI Masterclass",
        description: "ML ΓÇö DL ΓÇö GenAI: Complete Industrial AI Pathway",
        icon: "sparkles",
        color: "blue",
        phases: vizuaraPlan
    },
    {
        id: "genai",
        name: "GenAI Engineer",
        description: "Full-stack Generative AI engineering from backend to AI agents",
        icon: "brain",
        color: "purple",
        phases: genaiPlan
    },
    {
        id: "backend",
        name: "Backend Developer (SD3/SD4)",
        description: "From fundamentals to senior-level system design & scalability",
        icon: "server",
        color: "blue",
        phases: backendPlan
    },
    {
        id: "agentic",
        name: "Agentic AI Architect",
        description: "Building production AI agents, workflows & multi-agent systems",
        icon: "bot",
        color: "emerald",
        phases: agenticAIPlan
    },
    {
        id: "apigateway",
        name: "API Gateway Engineer",
        description: "Zero to Senior: Build production-grade API gateways from scratch",
        icon: "gateway",
        color: "amber",
        phases: apiGatewayPlan
    },
    {
        id: "systemdesign",
        name: "7-Layer System Design Stack",
        description: "Master the 7 layers that differentiate interview success: Infrastructure ΓåÆ AI Optimization",
        icon: "layers",
        color: "rose",
        phases: systemDesignStackPlan
    },
    {
        id: "ai-roadmap",
        name: "AI Engineer $200K Roadmap",
        description: "12-month elite path: Python ΓåÆ Deep Learning ΓåÆ RAG ΓåÆ MLOps ΓåÆ FAANG",
        icon: "rocket",
        color: "cyan",
        phases: aiEngineerRoadmapPlan
    },
    {
        id: "parallelism-5d",
        name: "Ultimate 5D Parallelism + FDE",
        description: "Distributed LLM training + Forward Deployed Engineering: GPU Hardware → 5D Parallelism → MLOps → Enterprise Data → Applied AI Solutions",
        icon: "cpu",
        color: "orange",
        phases: parallelism5DPlan
    },
    {
        id: "ms-agent",
        name: "Microsoft AI Agent Architect",
        description: "Build UI Explorer Agents using the new Microsoft Agent Framework (.NET 9)",
        icon: "sparkles",
        color: "lime",
        phases: microsoftAgentPlan
    },
    {
        id: "python-hindi",
        name: "Python Full Stack + AI",
        description: "Zero to Pro: Complete Python, Web Backend, and AI path for beginners (Hindi Focus)",
        icon: "code",
        color: "yellow",
        phases: pythonHindiPlan
    },
    {
        id: "dsa-pro",
        name: "DSA Zero to Pro",
        description: "Zero to Expert: All patterns, all Big Tech profiles ΓÇö SDE, HFT, AI, DevOps & Competitive Programming",
        icon: "trophy",
        color: "indigo",
        phases: dsaProPlan
    },
    {
        id: "campusx-ai",
        name: "CampusX 2026 AI Roadmap",
        description: "Official CampusX ML, DL, & GenAI pathways with top playlists (100 Days of ML/DL)",
        icon: "brain",
        color: "teal",
        phases: campusxAiPlan
    },
    {
        id: "resume-skills",
        name: "Resume Skills Mastery + FDE",
        description: "Master every technology on your resume — Backend, Frontend, Cloud, AI & Agentic with a final Forward Deployed Engineering specialization",
        icon: "target",
        color: "rose",
        phases: resumeSkillsPlan
    },
    {
        id: "gpu-cuda",
        name: "NVIDIA GPU Programming (CUDA)",
        description: "Master CUDA kernels, memory optimization, and NVIDIA NSight profiling for high-performance AI compute.",
        icon: "cpu",
        color: "green",
        phases: gpuProgrammingPlan
    },
    antern_sprint_plan_1.anternSprintPlan
];
// Keep backward compatibility
// Keep backward compatibility
exports.learningPlan = genaiPlan;

export interface Project {
    title: string;
    description: string[];
    outcomes: string[];
}

export interface TopicResource {
    type: 'video' | 'doc' | 'article' | 'playlist' | 'channel' | 'course';
    title: string;
    url: string;
    duration?: string;
    author?: string;
}

export interface Topic {
    name: string;
    resources: TopicResource[];
}

export interface Module {
    id: string;
    title: string;
    weeks: string;
    topics: Topic[];
    project: Project;
}

export interface Phase {
    id: string;
    title: string;
    weeks: string;
    modules: Module[];
}

export interface LearningPlan {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    phases: Phase[];
}

// Enhanced helper - supports video, doc, article, playlist, channel
const topic = (name: string, resources: TopicResource[]): Topic => ({ name, resources });

// Quick helpers
const vid = (title: string, url: string, author?: string): TopicResource => ({ type: 'video', title, url, author });
const doc = (title: string, url: string): TopicResource => ({ type: 'doc', title, url });
const art = (title: string, url: string, author?: string): TopicResource => ({ type: 'article', title, url, author });
const playlist = (title: string, url: string, author: string): TopicResource => ({ type: 'playlist', title, url, author });
const channel = (name: string, url: string): TopicResource => ({ type: 'channel', title: name, url });
const course = (title: string, url: string, author?: string): TopicResource => ({ type: 'course', title, url, author });

// Backward compatible helper
const t = (name: string, videoUrl?: string, docUrl?: string): Topic => ({
    name,
    resources: [
        ...(videoUrl ? [{ type: 'video' as const, title: 'Watch Tutorial', url: videoUrl, duration: '20min' }] : []),
        ...(docUrl ? [{ type: 'doc' as const, title: 'Documentation', url: docUrl }] : []),
    ]
});

// ===== PLAN 1: GENAI ENGINEER PATH =====
const genaiPlan: Phase[] = [
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
                    topic("Calculus & Optimization", [
                        vid("Calculus for ML (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbW-0X9IeR4pGgU2T8Zsc2Q", "CampusX"),
                        vid("Optimization for Deep Learning (Krish Naik)", "https://www.youtube.com/watch?v=A6FiCD0796E", "Krish Naik"),
                        vid("Math for ML Foundations (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        doc("Whitepaper: Matrix Calculus for DL", "https://arxiv.org/abs/1802.01528"),
                        art("Mathematics for Machine Learning", "https://mml-book.github.io/")
                    ]),
                    topic("Linear Algebra & Probability", [
                        vid("Linear Algebra for DS (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYhp0_L3f_J4U4NfEtoV0Mh", "CampusX"),
                        vid("Probability & Statistics (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QzC67Y_S_TaqCOuuvY97", "Krish Naik"),
                        vid("Linear Algebra Foundations (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        art("Probability Theory for AI", "https://towardsdatascience.com/probability-theory-for-ai-and-ml-9c2b8c9c9c9c")
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
                    topic("Neuron Architecture & Forward Prop", [
                        vid("Neural Networks from Scratch (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauAoOxyczvOAnAnT4Yx", "CampusX"),
                        vid("Deep Learning Full Course (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU7TKgz8SAInSno_Y6G0z", "Krish Naik"),
                        vid("Build NN from Scratch (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        doc("Paper: Perceptrons", "https://archive.org/details/perceptronsintrostem00minsky"),
                        art("Visualizing Neural Networks", "https://distill.pub/2016/misread-tsne/")
                    ]),
                    topic("Backpropagation & Training Loops", [
                        vid("Backpropagation Calculus (CampusX)", "https://www.youtube.com/watch?v=I67WInp6k-s", "CampusX"),
                        vid("Optimizers in Deep Learning (Krish Naik)", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "Krish Naik"),
                        art("The Bitter Lesson (Rich Sutton)", "http://www.incompleteideas.net/IncIdeas/BitterLesson.html")
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
                    t("Event Loop Phases & Internals", "https://www.youtube.com/watch?v=8aGhZQkoFbQ", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"),
                    t("Macrotasks vs Microtasks", "https://www.youtube.com/watch?v=8zKuNo4ay8E", "https://javascript.info/event-loop"),
                    t("Node.js Clustering Module", "https://www.youtube.com/watch?v=9Sw_OUc_RY0", "https://nodejs.org/api/cluster.html"),
                    t("Worker Threads for CPU tasks", "https://www.youtube.com/watch?v=mYP1ioHZDZ4", "https://nodejs.org/api/worker_threads.html"),
                    t("Streams: Readable, Writable, Transform", "https://www.youtube.com/watch?v=GlybFFMXXmQ", "https://nodejs.org/api/stream.html"),
                    t("Security: Helmet & Rate Limiting", "https://www.youtube.com/watch?v=0Hu27PoloYw", "https://helmetjs.github.io/"),
                    t("Input Validation (Zod/Joi)", "https://www.youtube.com/watch?v=L6BE-U3oy80", "https://zod.dev/"),
                    topic("DSA: Event Loop queues (Queues/Heaps)", [doc("Node.js Event Loop", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/")])
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
                    t("API Gateway Pattern", "https://www.youtube.com/watch?v=6ULyxuHKxg8"),
                    t("Service Discovery (Eureka/Consul)", "https://www.youtube.com/watch?v=OKsi6wsZTQ8"),
                    t("Circuit Breaker (Resilience4j)", "https://www.youtube.com/watch?v=uRYe5zSfnkk"),
                    t("Inter-service Communication: gRPC", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "https://grpc.io/docs/"),
                    t("Distributed Tracing (Jaeger)", "https://www.youtube.com/watch?v=idDu_jXqf4E"),
                    t("Saga Pattern for Transactions", "https://www.youtube.com/watch?v=xDuwrtwYHu8"),
                    topic("DSA: Consistent Hashing for Service Discovery", [doc("Wikipedia: Consistent Hashing", "https://en.wikipedia.org/wiki/Consistent_hashing")])
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
                    t("Vector Embeddings 101", "https://www.youtube.com/watch?v=5MaWmXwxFNQ"),
                    t("PgVector Extension Setup", "https://www.youtube.com/watch?v=d0KYv65geeY", "https://github.com/pgvector/pgvector"),
                    t("HNSW & IVFFlat Indexes", "https://www.youtube.com/watch?v=QvKMwLjdK-s"),
                    t("Hybrid Search Implementation", "https://www.youtube.com/watch?v=dRUIGgNBvVk"),
                    t("Chunking Strategies", "https://www.youtube.com/watch?v=8OJC21T2SL4"),
                    topic("DSA: K-D Trees & HNSW for Vector Search", [doc("Pinecone: HNSW", "https://www.pinecone.io/learn/series/faiss/hnsw/")])
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
                    t("Transformer Architecture", "https://www.youtube.com/watch?v=SZorAJ4I-sA"),
                    t("OpenAI/Anthropic APIs", "https://www.youtube.com/watch?v=uRQH2CFvedY", "https://platform.openai.com/docs/"),
                    t("Zero-shot vs Few-shot", "https://www.youtube.com/watch?v=v2gD8BHOaX4"),
                    t("Chain-of-Thought Prompting", "https://www.youtube.com/watch?v=Coj72EzmX20"),
                    t("Function Calling / Tools", "https://www.youtube.com/watch?v=0-zlUy7VUjg"),
                    topic("Whitepaper: Attention Is All You Need", [doc("Arxiv: Attention", "https://arxiv.org/abs/1706.03762")])
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
                    t("RAG Architecture Workflow", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                    t("Advanced RAG Patterns", "https://www.youtube.com/watch?v=sVcwVQRHIc8"),
                    t("Reranking Models", "https://www.youtube.com/watch?v=9VgLi3wHNM0"),
                    t("RAG Evaluation (Ragas)", "https://www.youtube.com/watch?v=ahnGLM-RC1Y", "https://docs.ragas.io/")
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
                    topic("Tokenization & Vocabulary", [
                        vid("BPE & Tokenization Masterclass (CampusX)", "https://www.youtube.com/watch?v=zduSFxRajkE", "CampusX"),
                        vid("Tokenization (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        art("HuggingFace: Summary of the Tokenizers", "https://huggingface.co/docs/transformers/tokenizer_summary")
                    ]),
                    topic("Architecture & Pre-training", [
                        vid("Build GPT from Scratch (Andrej Karpathy)", "https://www.youtube.com/watch?v=kCc8FmEb1nY"),
                        vid("LLM Architecture Deep Dive (Krish Naik)", "https://www.youtube.com/watch?v=uRQH2CFvedY", "Krish Naik"),
                        vid("Build LLM from Scratch (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        doc("Whitepaper: LLaMA - Open & Efficient Foundation Models", "https://arxiv.org/abs/2302.13971")
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
                    topic("Instruction Fine-tuning & PEFT", [
                        vid("Finetuning LLMs (Krish Naik)", "https://www.youtube.com/watch?v=idDu_jXqf4E", "Krish Naik"),
                        vid("LoRA & QLoRA Explained (CampusX)", "https://www.youtube.com/watch?v=Vf8p_d086E4", "CampusX"),
                        vid("PEFT Techniques (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        doc("Whitepaper: LoRA - Low-Rank Adaptation", "https://arxiv.org/abs/2106.09685")
                    ]),
                    topic("Model Evaluation & Weights & Biases", [
                        vid("Evaluate LLM Quality (Krish Naik)", "https://www.youtube.com/watch?v=9VgLi3wHNM0"),
                        art("DeepLearning.ai: Fine-tuning LLMs", "https://www.deeplearning.ai/short-courses/finetuning-large-language-models/")
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
                    t("ReAct Pattern", "https://www.youtube.com/watch?v=Eug2clsLtFs"),
                    t("LangGraph State Management", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "https://langchain-ai.github.io/langgraph/"),
                    t("Tool Definition & Schemas", "https://www.youtube.com/watch?v=TLf90ipMzfE"),
                    t("Multi-Agent Collaboration", "https://www.youtube.com/watch?v=MxRn2N2DXvs"),
                    t("Human-in-the-loop", "https://www.youtube.com/watch?v=9BPCV5TYWnk"),
                    topic("Whitepaper: ReAct Framework", [doc("Arxiv: ReAct", "https://arxiv.org/abs/2210.03629")])
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
                    topic("CNN Fundamentals to ViT", [
                        vid("CNN Full Course (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauAoOxyczvOAnAnT4Yx", "CampusX"),
                        vid("Computer Vision (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B", "Krish Naik"),
                        vid("Vision Transformers (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        doc("Whitepaper: Vision Transformer (ViT)", "https://arxiv.org/abs/2010.11929")
                    ]),
                    topic("Multi-modal Understanding", [
                        vid("Multimodal LLMs Explained (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        art("CLIP: Connecting Text and Images", "https://openai.com/research/clip")
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
                    topic("Reinforcement Learning Fundamentals", [
                        vid("RL Full Course (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QzC67Y_S_TaqCOuuvY97", "Krish Naik"),
                        vid("Policy Optimization (CampusX)", "https://www.youtube.com/@campusx-official", "CampusX"),
                        vid("Reasoning in LLMs (Vizuara)", "https://www.youtube.com/@VizuaraAI", "Vizuara"),
                        doc("Paper: RLHF - Training language models to follow instructions", "https://arxiv.org/abs/2203.02155")
                    ]),
                    topic("Small Language Models (SLM) Optimization", [
                        vid("Mobile AI & SLMs (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        doc("Microsoft: Phi-3 Technical Report", "https://arxiv.org/abs/2404.14219"),
                        art("Knowledge Distillation for LLMs", "https://towardsdatascience.com/knowledge-distillation-for-llms-d0e513511eb3")
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
const backendPlan: Phase[] = [
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
                    t("Big O Notation & Complexity", "https://www.youtube.com/watch?v=D6xkbGLQesk", "https://www.bigocheatsheet.com/"),
                    t("Arrays, Strings, HashMaps", "https://www.youtube.com/watch?v=8hly31xKli0"),
                    t("Linked Lists & Trees", "https://www.youtube.com/watch?v=oSWTXtMglKE"),
                    t("Graphs & BFS/DFS", "https://www.youtube.com/watch?v=pcKY4hjDrxk"),
                    t("Dynamic Programming", "https://www.youtube.com/watch?v=oBt53YbR9Kk"),
                    t("Sorting & Searching", "https://www.youtube.com/watch?v=pkkFqlG0Hds")
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
                    t("Closures & Scope", "https://www.youtube.com/watch?v=qikxEIxsXco"),
                    t("Prototypes & Classes", "https://www.youtube.com/watch?v=1UTqFnCoCWw"),
                    t("Async/Await & Promises", "https://www.youtube.com/watch?v=V_Kr9OSfDeU"),
                    t("TypeScript Generics", "https://www.youtube.com/watch?v=nViEqpgwxHE", "https://www.typescriptlang.org/docs/"),
                    t("TypeScript Utility Types", "https://www.youtube.com/watch?v=EU0TB_8KHpY"),
                    t("Error Handling Patterns", "https://www.youtube.com/watch?v=Pfiht1blqZQ")
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
                    t("Event Loop Internals", "https://www.youtube.com/watch?v=8aGhZQkoFbQ", "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/"),
                    t("Clustering & Worker Threads", "https://www.youtube.com/watch?v=9Sw_OUc_RY0", "https://nodejs.org/api/cluster.html"),
                    t("Streams & Buffers", "https://www.youtube.com/watch?v=GlybFFMXXmQ", "https://nodejs.org/api/stream.html"),
                    t("Express Middleware Pattern", "https://www.youtube.com/watch?v=lY6icfhap2o"),
                    t("Authentication (JWT/Sessions)", "https://www.youtube.com/watch?v=7Q17ubqLfaM"),
                    t("Rate Limiting & Security", "https://www.youtube.com/watch?v=0Hu27PoloYw", "https://helmetjs.github.io/")
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
                    t("PostgreSQL Advanced Queries", "https://www.youtube.com/watch?v=qw--VYLpxG4", "https://www.postgresql.org/docs/"),
                    t("Indexing Strategies (B-Tree, GIN)", "https://www.youtube.com/watch?v=clrtT_4WBAw"),
                    t("Query Optimization & EXPLAIN", "https://www.youtube.com/watch?v=NI9wYuVIYcA"),
                    t("Transactions & ACID", "https://www.youtube.com/watch?v=4EajrPgJAk0"),
                    t("Database Sharding", "https://www.youtube.com/watch?v=5faMjKuq9Js"),
                    t("Replication & Failover", "https://www.youtube.com/watch?v=bI8Ry6GhMSE"),
                    t("Redis Caching Patterns", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "https://redis.io/docs/"),
                    t("MongoDB Aggregation", "https://www.youtube.com/watch?v=A3jvoE0jGdE", "https://www.mongodb.com/docs/"),
                    topic("DSA: B-Trees & GIN Indexes", [doc("Use The Index Luke", "https://use-the-index-luke.com/")])
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
                    t("CAP Theorem", "https://www.youtube.com/watch?v=k-Yaq8AHlFA"),
                    t("Consistency Patterns", "https://www.youtube.com/watch?v=m4q7VkgDWRM"),
                    t("Distributed Consensus (Raft/Paxos)", "https://www.youtube.com/watch?v=vYp4LYbnnW8"),
                    t("Distributed Transactions", "https://www.youtube.com/watch?v=S4FnmSeRpAY"),
                    t("Two-Phase Commit", "https://www.youtube.com/watch?v=-_rdWB9hN1c"),
                    t("Saga Pattern", "https://www.youtube.com/watch?v=xDuwrtwYHu8"),
                    topic("Whitepaper: Amazon Dynamo", [doc("AllThingsDistributed", "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf")]),
                    topic("Whitepaper: Raft Consensus", [doc("Raft Github", "https://raft.github.io/raft.pdf")])
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
                    t("Load Balancer Types (L4/L7)", "https://www.youtube.com/watch?v=sCR3SAVdyCc"),
                    t("NGINX Configuration", "https://www.youtube.com/watch?v=7VAI73roXaY", "https://nginx.org/en/docs/"),
                    t("HAProxy Deep Dive", "https://www.youtube.com/watch?v=aKMLgFVxZYk", "https://www.haproxy.org/"),
                    t("Horizontal vs Vertical Scaling", "https://www.youtube.com/watch?v=sCR3SAVdyCc"),
                    t("Auto-scaling Strategies", "https://www.youtube.com/watch?v=a4SicVoqKRU"),
                    t("Connection Pooling", "https://www.youtube.com/watch?v=GTeCtIoV2Tw"),
                    t("CDN & Edge Caching", "https://www.youtube.com/watch?v=RI9np1LWzqw")
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
                    t("Message Queue Patterns", "https://www.youtube.com/watch?v=O1PgqUqZKTA"),
                    t("RabbitMQ Deep Dive", "https://www.youtube.com/watch?v=deG25y_r6OY", "https://www.rabbitmq.com/docs"),
                    t("Apache Kafka Architecture", "https://www.youtube.com/watch?v=Ch5VhJzaoaI", "https://kafka.apache.org/documentation/"),
                    t("Kafka Partitions & Consumer Groups", "https://www.youtube.com/watch?v=SqVfCyfCJqw"),
                    t("Event Sourcing", "https://www.youtube.com/watch?v=STKCRSUsyP0"),
                    t("CQRS Pattern", "https://www.youtube.com/watch?v=DQ3D_mplIgY"),
                    t("Dead Letter Queues", "https://www.youtube.com/watch?v=nK-hfzr_X98")
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
                    t("API Gateway Pattern", "https://www.youtube.com/watch?v=6ULyxuHKxg8"),
                    t("Service Mesh (Istio)", "https://www.youtube.com/watch?v=16fgzklcF7Y", "https://istio.io/latest/docs/"),
                    t("Circuit Breaker Pattern", "https://www.youtube.com/watch?v=uRYe5zSfnkk"),
                    t("Distributed Tracing (Jaeger)", "https://www.youtube.com/watch?v=idDu_jXqf4E", "https://www.jaegertracing.io/docs/"),
                    t("Service Discovery", "https://www.youtube.com/watch?v=OKsi6wsZTQ8"),
                    t("gRPC for Microservices", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "https://grpc.io/docs/"),
                    t("API Versioning Strategies", "https://www.youtube.com/watch?v=fWTRzUJG-5A")
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
                    t("Docker Best Practices", "https://www.youtube.com/watch?v=8vmKtS8W7IQ", "https://docs.docker.com/"),
                    t("Multi-stage Builds", "https://www.youtube.com/watch?v=zpkqNPwEzac"),
                    t("Kubernetes Architecture", "https://www.youtube.com/watch?v=X48VuDVv0do", "https://kubernetes.io/docs/"),
                    t("Pods, Services, Deployments", "https://www.youtube.com/watch?v=NPFbYpb0I7w"),
                    t("ConfigMaps & Secrets", "https://www.youtube.com/watch?v=FAnQTgr04mU"),
                    t("Helm Charts", "https://www.youtube.com/watch?v=-ykwb1d0DXU", "https://helm.sh/docs/"),
                    t("Horizontal Pod Autoscaling", "https://www.youtube.com/watch?v=uxuyPru3_Lc"),
                    t("K8s Networking & Ingress", "https://www.youtube.com/watch?v=NPFbYpb0I7w")
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
                    t("AWS VPC & Networking", "https://www.youtube.com/watch?v=2doSoMN2xvI", "https://docs.aws.amazon.com/vpc/"),
                    t("EC2 & Auto Scaling Groups", "https://www.youtube.com/watch?v=8TlukLu11Yo", "https://docs.aws.amazon.com/ec2/"),
                    t("ECS vs EKS", "https://www.youtube.com/watch?v=AYAh6YDXuho"),
                    t("RDS & Aurora", "https://www.youtube.com/watch?v=OfZgHXsKqNE", "https://docs.aws.amazon.com/rds/"),
                    t("ElastiCache (Redis)", "https://www.youtube.com/watch?v=m5JpPNsXsHI"),
                    t("AWS Lambda & Serverless", "https://www.youtube.com/watch?v=eOBq__h4OJ4", "https://docs.aws.amazon.com/lambda/"),
                    t("CloudWatch & X-Ray", "https://www.youtube.com/watch?v=vAnIhIwE5hY"),
                    t("IAM Best Practices", "https://www.youtube.com/watch?v=iF9fs8Rw4Uo")
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
                    t("Design URL Shortener", "https://www.youtube.com/watch?v=fMZMm_0ZhK4"),
                    t("Design Twitter/X Timeline", "https://www.youtube.com/watch?v=wYk0xPP_P_8"),
                    t("Design WhatsApp/Messenger", "https://www.youtube.com/watch?v=vvhC64hQZMk"),
                    t("Design YouTube/Netflix", "https://www.youtube.com/watch?v=psQzyFfsUGU"),
                    t("Design Uber/Lyft", "https://www.youtube.com/watch?v=umWABit-wbk"),
                    t("Design Payment System", "https://www.youtube.com/watch?v=olfaBgJrUBI"),
                    t("Rate Limiter Design", "https://www.youtube.com/watch?v=FU4WlwfS3G0")
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
                    t("SRE Principles", "https://www.youtube.com/watch?v=uTEL8Ff1Zvk", "https://sre.google/sre-book/table-of-contents/"),
                    t("SLOs, SLIs, SLAs", "https://www.youtube.com/watch?v=tEylFyxbDLE"),
                    t("Chaos Engineering", "https://www.youtube.com/watch?v=MhdW_EGycmw"),
                    t("Production Debugging", "https://www.youtube.com/watch?v=jA_F94FPEv8"),
                    t("Performance Profiling", "https://www.youtube.com/watch?v=LaxbdIyBkL0"),
                    t("Incident Management", "https://www.youtube.com/watch?v=r1yNZ_BrHfY"),
                    t("Technical Leadership", "https://www.youtube.com/watch?v=1K7BdaAsjTQ")
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
const agenticAIPlan: Phase[] = [
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
                    t("Transformer Architecture", "https://www.youtube.com/watch?v=SZorAJ4I-sA"),
                    t("Attention Mechanism Deep Dive", "https://www.youtube.com/watch?v=eMlx5fFNoYc"),
                    t("Tokenization Strategies", "https://www.youtube.com/watch?v=zduSFxRajkE"),
                    t("Zero-shot vs Few-shot Learning", "https://www.youtube.com/watch?v=v2gD8BHOaX4"),
                    t("Chain-of-Thought Prompting", "https://www.youtube.com/watch?v=Coj72EzmX20"),
                    t("Self-Consistency Prompting", "https://www.youtube.com/watch?v=0XHkWxPAeHw"),
                    t("Tree-of-Thoughts", "https://www.youtube.com/watch?v=ut5kp56wW_4"),
                    t("Prompt Injection & Safety", "https://www.youtube.com/watch?v=P2ElwzQMR-c")
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
                    t("OpenAI Function Calling", "https://www.youtube.com/watch?v=0-zlUy7VUjg", "https://platform.openai.com/docs/guides/function-calling"),
                    t("Tool Schema Definition", "https://www.youtube.com/watch?v=TLf90ipMzfE"),
                    t("Parallel Tool Execution", "https://www.youtube.com/watch?v=JdVwXZxYqs8"),
                    t("Error Handling in Tools", "https://www.youtube.com/watch?v=6etT4oH-3oM"),
                    t("Custom Tool Development", "https://www.youtube.com/watch?v=mrjq3lFz23k")
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
                    t("ReAct Pattern (Reasoning + Acting)", "https://www.youtube.com/watch?v=Eug2clsLtFs", "https://arxiv.org/abs/2210.03629"),
                    t("Plan-and-Execute Pattern", "https://www.youtube.com/watch?v=QLC5ij_8Cek"),
                    t("Reflexion Pattern", "https://www.youtube.com/watch?v=5SxFx5P6DEs"),
                    t("LATS (Language Agent Tree Search)", "https://www.youtube.com/watch?v=xQBNnWmA4-U"),
                    t("Self-Ask Pattern", "https://www.youtube.com/watch?v=Tx_kV3Yv7Lg"),
                    t("Agent Loop Architecture", "https://www.youtube.com/watch?v=DjuXACWYkkU")
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
                    t("Short-term Memory (Context)", "https://www.youtube.com/watch?v=6D-W16J_KYk"),
                    t("Long-term Memory (Vector DB)", "https://www.youtube.com/watch?v=d0KYv65geeY"),
                    t("Episodic Memory", "https://www.youtube.com/watch?v=TRjq7t2Ms5I"),
                    t("Semantic Memory", "https://www.youtube.com/watch?v=5MaWmXwxFNQ"),
                    t("Memory Retrieval Strategies", "https://www.youtube.com/watch?v=9VgLi3wHNM0"),
                    t("Memory Summarization", "https://www.youtube.com/watch?v=2YCZpJ4aXdk"),
                    t("Conversation Buffer Management", "https://www.youtube.com/watch?v=kn7Yg3Ohsuw")
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
                    t("LangGraph Fundamentals", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "https://langchain-ai.github.io/langgraph/"),
                    t("State Graph Design", "https://www.youtube.com/watch?v=HqGY8H8SXjo"),
                    t("Conditional Edges", "https://www.youtube.com/watch?v=bq1_jWb3j5g"),
                    t("Checkpointing & Persistence", "https://www.youtube.com/watch?v=9FOeTmLKPzY"),
                    t("Human-in-the-Loop", "https://www.youtube.com/watch?v=9BPCV5TYWnk"),
                    t("Parallel Node Execution", "https://www.youtube.com/watch?v=sJ5lK8mH8dM"),
                    t("Subgraphs & Composition", "https://www.youtube.com/watch?v=v8V3P8Xl0R8"),
                    t("Error Handling & Retries", "https://www.youtube.com/watch?v=9T4sxjNJCqo")
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
                    t("Multi-Agent Collaboration", "https://www.youtube.com/watch?v=MxRn2N2DXvs"),
                    t("CrewAI Framework", "https://www.youtube.com/watch?v=sPzc6hMg7So", "https://docs.crewai.com/"),
                    t("AutoGen Multi-Agent", "https://www.youtube.com/watch?v=vU2S6dVf79M", "https://microsoft.github.io/autogen/"),
                    t("Agent Communication Protocols", "https://www.youtube.com/watch?v=RwGXj-DQMUI"),
                    t("Task Delegation Patterns", "https://www.youtube.com/watch?v=F7LnXw3Wzjs"),
                    t("Supervisor Agent Pattern", "https://www.youtube.com/watch?v=hvAPnpSfSGo"),
                    t("Debate & Consensus", "https://www.youtube.com/watch?v=Xf_lDMvZT-w")
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
                    t("Agentic RAG Patterns", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                    t("Self-RAG (Self-Reflective)", "https://www.youtube.com/watch?v=B9GOzWz0VZw"),
                    t("Corrective RAG", "https://www.youtube.com/watch?v=E2shqsYwxck"),
                    t("Adaptive RAG", "https://www.youtube.com/watch?v=gRm8p2cMwJg"),
                    t("Query Decomposition", "https://www.youtube.com/watch?v=TRjq7t2Ms5I"),
                    t("Multi-hop Retrieval", "https://www.youtube.com/watch?v=FLn8f8PaLwA"),
                    t("Source Grounding", "https://www.youtube.com/watch?v=Eo8dR5qMsUI")
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
                    t("Agent Evaluation Metrics", "https://www.youtube.com/watch?v=2CIIQ5KZWUM"),
                    t("LangSmith Tracing", "https://www.youtube.com/watch?v=tFXm5ijih98", "https://smith.langchain.com/"),
                    t("Ragas for RAG Eval", "https://www.youtube.com/watch?v=ahnGLM-RC1Y", "https://docs.ragas.io/"),
                    t("DeepEval Framework", "https://www.youtube.com/watch?v=Op3P_Xy-YIg", "https://docs.confident-ai.com/"),
                    t("A/B Testing Agents", "https://www.youtube.com/watch?v=Jl0gBNn4U7w"),
                    t("Cost Optimization", "https://www.youtube.com/watch?v=2xOVFezBmIY"),
                    t("Latency Optimization", "https://www.youtube.com/watch?v=rvBSPRQ4F6Y")
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
                    t("Agent API Design", "https://www.youtube.com/watch?v=1K7BdaAsjTQ"),
                    t("Streaming Responses", "https://www.youtube.com/watch?v=rvBSPRQ4F6Y"),
                    t("WebSocket for Real-time", "https://www.youtube.com/watch?v=1BfCnjr_Vjg"),
                    t("Queue-based Architecture", "https://www.youtube.com/watch?v=O1PgqUqZKTA"),
                    t("Observability Setup", "https://www.youtube.com/watch?v=tFXm5ijih98"),
                    t("Error Recovery Patterns", "https://www.youtube.com/watch?v=uRYe5zSfnkk"),
                    t("Rate Limiting & Quotas", "https://www.youtube.com/watch?v=FU4WlwfS3G0")
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
                    t("Customer Support Agent", "https://www.youtube.com/watch?v=Eug2clsLtFs"),
                    t("Research Assistant Agent", "https://www.youtube.com/watch?v=MxRn2N2DXvs"),
                    t("Code Generation Agent", "https://www.youtube.com/watch?v=QLC5ij_8Cek"),
                    t("Data Analysis Agent", "https://www.youtube.com/watch?v=TRjq7t2Ms5I"),
                    t("Document Processing Agent", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                    t("Workflow Automation Agent", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g"),
                    t("Sales & CRM Agent", "https://www.youtube.com/watch?v=hvAPnpSfSGo")
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
const apiGatewayPlan: Phase[] = [
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
                    topic("What is an API Gateway?", [
                        vid("API Gateway Explained", "https://www.youtube.com/watch?v=6ULyxuHKxg8", "Hussein Nasser"),
                        doc("AWS API Gateway Concepts", "https://docs.aws.amazon.com/apigateway/"),
                        art("API Gateway Pattern", "https://microservices.io/patterns/apigateway.html", "Chris Richardson")
                    ]),
                    topic("HTTP/HTTPS Protocols Deep Dive", [
                        playlist("HTTP Crash Course", "https://www.youtube.com/watch?v=iYM2zFP3Zn0", "Traversy Media"),
                        doc("MDN HTTP Guide", "https://developer.mozilla.org/en-US/docs/Web/HTTP"),
                        art("HTTP/2 vs HTTP/3", "https://blog.cloudflare.com/http3-the-past-present-and-future/", "Cloudflare")
                    ]),
                    topic("RESTful API Principles", [
                        vid("REST API Tutorial", "https://www.youtube.com/watch?v=SLwpqD8n3d0", "Programming with Mosh"),
                        doc("REST API Design Guide", "https://restfulapi.net/"),
                        art("Best Practices for REST API Design", "https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/", "Stack Overflow")
                    ]),
                    topic("Request/Response Lifecycle", [
                        vid("How the Internet Works", "https://www.youtube.com/watch?v=7_LPdttKXPc", "Aaron Jack"),
                        art("Journey of a Request", "https://aws.amazon.com/blogs/architecture/", "AWS Architecture Blog")
                    ]),
                    topic("HTTP Status Codes (2xx, 3xx, 4xx, 5xx)", [
                        vid("HTTP Status Codes Explained", "https://www.youtube.com/watch?v=VLH3FMQ5BIg", "Web Dev Simplified"),
                        doc("HTTP Status Codes", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status")
                    ]),
                    topic("Headers: Authorization, CORS, Content-Type", [
                        vid("CORS in 100 Seconds", "https://www.youtube.com/watch?v=4KHiSt0oLJ0", "Fireship"),
                        doc("HTTP Headers", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers")
                    ]),
                    topic("DNS and Domain Resolution", [
                        vid("DNS Explained", "https://www.youtube.com/watch?v=72snZctFFtA", "Fireship"),
                        art("How DNS Works", "https://howdns.works/", "DNSimple")
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
                    topic("Reverse Proxy Pattern", [
                        vid("Reverse Proxy vs Forward Proxy", "https://www.youtube.com/watch?v=ozhe__GdWC8", "Hussein Nasser"),
                        doc("NGINX Reverse Proxy", "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/")
                    ]),
                    topic("Load Balancing Strategies", [
                        vid("Load Balancing Algorithms", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        art("Load Balancing", "https://www.nginx.com/resources/glossary/load-balancing/", "NGINX")
                    ]),
                    topic("Request Router & Pattern Matching", [
                        vid("URL Routing Explained", "https://www.youtube.com/watch?v=SLwpqD8n3d0", "Traversy Media"),
                        doc("Express Routing", "https://expressjs.com/en/guide/routing.html"),
                        topic("DSA: Tries for Fast Route Matching", [doc("Wikipedia: Trie", "https://en.wikipedia.org/wiki/Trie")]) as any
                    ]),
                    topic("Middleware Pipeline (Chain of Responsibility)", [
                        vid("Middleware Explained", "https://www.youtube.com/watch?v=lY6icfhap2o", "Web Dev Simplified"),
                        art("Middleware Pattern", "https://www.patterns.dev/posts/middleware-pattern", "patterns.dev")
                    ]),
                    topic("Connection Pooling", [
                        vid("Connection Pooling", "https://www.youtube.com/watch?v=GTeCtIoV2Tw", "Hussein Nasser"),
                        art("Database Connection Pools", "https://www.cockroachlabs.com/blog/what-is-connection-pooling/", "CockroachDB")
                    ]),
                    topic("Circuit Breaker Pattern", [
                        vid("Circuit Breaker Explained", "https://www.youtube.com/watch?v=uRYe5zSfnkk", "Hussein Nasser"),
                        art("Circuit Breaker", "https://martinfowler.com/bliki/CircuitBreaker.html", "Martin Fowler")
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
                    topic("HTTP Server with Node.js http module", [
                        vid("Node.js HTTP Module", "https://www.youtube.com/watch?v=VShtPwEkDD0", "The Net Ninja"),
                        doc("Node.js HTTP", "https://nodejs.org/api/http.html")
                    ]),
                    topic("Basic Routing Implementation", [
                        vid("Build Express from Scratch", "https://www.youtube.com/watch?v=L72fhGm1tfE", "Web Dev Simplified"),
                        art("Building a Router", "https://blog.logrocket.com/build-your-own-express-router/", "LogRocket")
                    ]),
                    topic("Proxy Pattern with http-proxy", [
                        vid("Node.js Proxy", "https://www.youtube.com/watch?v=wVnimcQsNtM", "Hussein Nasser"),
                        doc("http-proxy library", "https://github.com/http-party/node-http-proxy")
                    ]),
                    topic("Request Logging Middleware", [
                        vid("Morgan Logging", "https://www.youtube.com/watch?v=FM-FTauz8ho", "Traversy Media"),
                        doc("Winston Logger", "https://github.com/winstonjs/winston")
                    ]),
                    topic("JWT Authentication Middleware", [
                        vid("JWT Authentication", "https://www.youtube.com/watch?v=7Q17ubqLfaM", "Web Dev Simplified"),
                        doc("jsonwebtoken", "https://github.com/auth0/node-jsonwebtoken")
                    ]),
                    topic("Rate Limiter (In-memory ΓåÆ Redis)", [
                        vid("Rate Limiting Algorithms", "https://www.youtube.com/watch?v=FU4WlwfS3G0", "ByteByteGo"),
                        art("Rate Limiting Strategies", "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/", "Cloudflare")
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
                    topic("Caching Layer (node-cache ΓåÆ Redis)", [
                        vid("Redis Caching", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "Traversy Media"),
                        doc("Redis Docs", "https://redis.io/docs/"),
                        topic("DSA: LRU & LFU Cache Eviction", [doc("Wikipedia: Cache Replacement", "https://en.wikipedia.org/wiki/Cache_replacement_policies")]) as any
                    ]),
                    topic("Circuit Breaker with Opossum", [
                        vid("Implementing Circuit Breaker", "https://www.youtube.com/watch?v=ADHcBxEXvFA", "DevOps Directive"),
                        doc("Opossum", "https://nodeshift.dev/opossum/")
                    ]),
                    topic("Request/Response Validation (Joi/Zod)", [
                        vid("Zod Validation", "https://www.youtube.com/watch?v=L6BE-U3oy80", "Matt Pocock"),
                        doc("Zod Docs", "https://zod.dev/")
                    ]),
                    topic("API Key Management", [
                        vid("API Key Auth", "https://www.youtube.com/watch?v=eFxT-VCLxXA", "Traversy Media"),
                        art("API Key Best Practices", "https://cloud.google.com/docs/authentication/api-keys", "Google Cloud")
                    ]),
                    topic("Metrics Collection (Response times, Error rates)", [
                        vid("Prometheus Metrics", "https://www.youtube.com/watch?v=h4Sl21AKiDg", "TechWorld with Nana"),
                        doc("prom-client", "https://github.com/siimon/prom-client")
                    ]),
                    topic("Health Check Endpoints", [
                        vid("Health Checks Best Practices", "https://www.youtube.com/watch?v=mxlJqrSG4vQ", "IBM Technology"),
                        art("Health Check Patterns", "https://microservices.io/patterns/health-check-api.html")
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
                    topic("Service Registry (Consul/etcd)", [
                        vid("Consul Service Discovery", "https://www.youtube.com/watch?v=OKsi6wsZTQ8", "HashiCorp"),
                        doc("Consul Docs", "https://developer.hashicorp.com/consul/docs")
                    ]),
                    topic("Dynamic Route Registration", [
                        vid("Dynamic Routing", "https://www.youtube.com/watch?v=lZndBxJ0VR4", "Kong"),
                        doc("Kong Routing", "https://docs.konghq.com/gateway/latest/key-concepts/routes/")
                    ]),
                    topic("Path-based vs Header-based Routing", [
                        vid("API Versioning Strategies", "https://www.youtube.com/watch?v=fWTRzUJG-5A", "AmigosCode"),
                        art("Routing Strategies", "https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-routes.html", "AWS")
                    ]),
                    topic("Canary Deployments (Traffic Splitting)", [
                        vid("Canary Deployments", "https://www.youtube.com/watch?v=3IJ5ko1FGHI", "TechWorld with Nana"),
                        art("Traffic Splitting", "https://cloud.google.com/run/docs/rollouts-rollbacks-traffic-migration", "Google Cloud")
                    ]),
                    topic("A/B Testing Support", [
                        vid("A/B Testing Architecture", "https://www.youtube.com/watch?v=1fYw8eCNW-A", "InfoQ"),
                        art("Feature Flags", "https://martinfowler.com/articles/feature-toggles.html", "Martin Fowler")
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
                    topic("OAuth 2.0 Integration (Google, GitHub)", [
                        vid("OAuth 2.0 Explained", "https://www.youtube.com/watch?v=996OiexHze0", "Hussein Nasser"),
                        doc("OAuth 2.0", "https://oauth.net/2/")
                    ]),
                    topic("JWT Token Generation & Verification", [
                        vid("JWT Deep Dive", "https://www.youtube.com/watch?v=7Q17ubqLfaM", "Web Dev Simplified"),
                        art("JWT Best Practices", "https://curity.io/resources/learn/jwt-best-practices/", "Curity")
                    ]),
                    topic("Role-Based Access Control (RBAC)", [
                        vid("RBAC Implementation", "https://www.youtube.com/watch?v=4P6M2kEkPJk", "Hussein Nasser"),
                        art("RBAC Patterns", "https://auth0.com/docs/manage-users/access-control/rbac", "Auth0")
                    ]),
                    topic("API Composition (BFF Pattern)", [
                        vid("Backend for Frontend", "https://www.youtube.com/watch?v=SSo-z16wEnE", "Sam Newman"),
                        art("BFF Pattern", "https://samnewman.io/patterns/architectural/bff/", "Sam Newman")
                    ]),
                    topic("Parallel Request Execution", [
                        vid("Promise.all vs Promise.allSettled", "https://www.youtube.com/watch?v=W1Z7EAf8o4w", "Web Dev Simplified"),
                        doc("Promise APIs", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise")
                    ]),
                    topic("Rate Limiting Algorithms (Token/Leaky Bucket, Sliding Window)", [
                        vid("Rate Limiting Deep Dive", "https://www.youtube.com/watch?v=FU4WlwfS3G0", "ByteByteGo"),
                        art("Rate Limiting Algorithms", "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/", "Cloudflare")
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
                    topic("Multi-Tenant Architecture", [
                        vid("Multi-Tenancy Patterns", "https://www.youtube.com/watch?v=6ULyxuHKxg8", "AWS"),
                        art("SaaS Tenancy Models", "https://docs.aws.amazon.com/wellarchitected/latest/saas-lens/tenant-isolation.html", "AWS")
                    ]),
                    topic("Tenant Identification (Subdomain, Header, Path)", [
                        vid("Subdomain Routing", "https://www.youtube.com/watch?v=lZndBxJ0VR4", "Traversy Media"),
                        art("Multi-tenant Patterns", "https://www.microsoft.com/en-us/research/publication/multi-tenant-cloud-architecture/", "Microsoft Research")
                    ]),
                    topic("GraphQL Gateway (Apollo Federation)", [
                        vid("Apollo Federation", "https://www.youtube.com/watch?v=v_1bn2sHdk4", "Apollo GraphQL"),
                        doc("Apollo Gateway", "https://www.apollographql.com/docs/federation/")
                    ]),
                    topic("Query Cost Analysis & Depth Limiting", [
                        vid("GraphQL Security", "https://www.youtube.com/watch?v=GLP_pBlz9g4", "GraphQL Conf"),
                        art("GraphQL Rate Limiting", "https://www.apollographql.com/blog/graphql/security/securing-your-graphql-api-from-malicious-queries/", "Apollo")
                    ]),
                    topic("N+1 Query Prevention (DataLoader)", [
                        vid("DataLoader Explained", "https://www.youtube.com/watch?v=OQTnXNCDywA", "Ben Awad"),
                        doc("DataLoader", "https://github.com/graphql/dataloader")
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
                    topic("WebSocket Proxy Implementation", [
                        vid("WebSocket Deep Dive", "https://www.youtube.com/watch?v=1BfCnjr_Vjg", "Hussein Nasser"),
                        doc("Socket.io Docs", "https://socket.io/docs/v4/")
                    ]),
                    topic("gRPC to REST Transcoding", [
                        vid("gRPC Gateway", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "Hussein Nasser"),
                        doc("gRPC-Gateway", "https://grpc-ecosystem.github.io/grpc-gateway/")
                    ]),
                    topic("Protocol Buffers", [
                        vid("Protobuf Crash Course", "https://www.youtube.com/watch?v=46O73On0gyI", "Traversy Media"),
                        doc("Protocol Buffers", "https://protobuf.dev/")
                    ]),
                    topic("Streaming (Server, Client, Bidirectional)", [
                        vid("gRPC Streaming", "https://www.youtube.com/watch?v=BqrGOoMxPaY", "Hussein Nasser"),
                        doc("gRPC Streaming", "https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc")
                    ]),
                    topic("Kubernetes Deployment (Ingress, HPA)", [
                        vid("Kubernetes Ingress", "https://www.youtube.com/watch?v=NPFbYpb0I7w", "TechWorld with Nana"),
                        doc("K8s Ingress", "https://kubernetes.io/docs/concepts/services-networking/ingress/")
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
                    topic("Cascading Failures & Bulkhead Pattern", [
                        vid("Bulkhead Pattern", "https://www.youtube.com/watch?v=K6sxY0YPgqU", "Microsoft Azure"),
                        art("Stability Patterns", "https://www.oreilly.com/library/view/release-it-2nd/9781680504552/", "Michael Nygard")
                    ]),
                    topic("DDoS Mitigation Strategies", [
                        vid("DDoS Protection", "https://www.youtube.com/watch?v=fQ4Y-dCVoR8", "Cloudflare"),
                        art("DDoS Mitigation", "https://www.cloudflare.com/learning/ddos/ddos-mitigation/", "Cloudflare")
                    ]),
                    topic("Memory Leak Detection & Profiling", [
                        vid("Node.js Memory Profiling", "https://www.youtube.com/watch?v=LaxbdIyBkL0", "Fireship"),
                        art("Memory Leaks in Node", "https://blog.risingstack.com/finding-a-memory-leak-in-node-js/", "RisingStack")
                    ]),
                    topic("Zero-Downtime Deployment", [
                        vid("Blue-Green Deployment", "https://www.youtube.com/watch?v=AWVTKBUnoIg", "TechWorld with Nana"),
                        art("Rolling Updates", "https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/", "Kubernetes")
                    ]),
                    topic("Graceful Shutdown & Connection Draining", [
                        vid("Graceful Shutdown", "https://www.youtube.com/watch?v=Z3fBWQ2K3wg", "Hussein Nasser"),
                        art("K8s Graceful Shutdown", "https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/", "RisingStack")
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
                    topic("Distributed Tracing (Jaeger/Zipkin)", [
                        vid("Distributed Tracing", "https://www.youtube.com/watch?v=idDu_jXqf4E", "IBM Technology"),
                        doc("Jaeger Docs", "https://www.jaegertracing.io/docs/")
                    ]),
                    topic("Prometheus Metrics", [
                        vid("Prometheus Tutorial", "https://www.youtube.com/watch?v=h4Sl21AKiDg", "TechWorld with Nana"),
                        doc("Prometheus Docs", "https://prometheus.io/docs/")
                    ]),
                    topic("Grafana Dashboards", [
                        vid("Grafana Tutorial", "https://www.youtube.com/watch?v=9TJx7QTrTyo", "TechWorld with Nana"),
                        doc("Grafana Docs", "https://grafana.com/docs/")
                    ]),
                    topic("Alerting (PagerDuty/OpsGenie)", [
                        vid("On-Call Best Practices", "https://www.youtube.com/watch?v=r1yNZ_BrHfY", "PagerDuty"),
                        art("Alerting Strategy", "https://sre.google/sre-book/practical-alerting/", "Google SRE")
                    ]),
                    topic("Log Aggregation (ELK Stack)", [
                        vid("ELK Stack Tutorial", "https://www.youtube.com/watch?v=4X0WLg05ASw", "TechWorld with Nana"),
                        doc("Elasticsearch Guide", "https://www.elastic.co/guide/index.html")
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
                    topic("API Gateway vs Service Mesh", [
                        vid("Service Mesh Explained", "https://www.youtube.com/watch?v=16fgzklcF7Y", "IBM Technology"),
                        art("Gateway vs Mesh", "https://konghq.com/blog/api-gateway-vs-service-mesh", "Kong")
                    ]),
                    topic("Istio Basics", [
                        vid("Istio Tutorial", "https://www.youtube.com/watch?v=voAyroDb6xk", "TechWorld with Nana"),
                        doc("Istio Docs", "https://istio.io/latest/docs/")
                    ]),
                    topic("Envoy Proxy Internals", [
                        vid("Envoy Proxy", "https://www.youtube.com/watch?v=bhp3I0XKSYU", "CNCF"),
                        doc("Envoy Docs", "https://www.envoyproxy.io/docs/envoy/latest/")
                    ]),
                    topic("API Analytics & Monetization", [
                        vid("API Monetization", "https://www.youtube.com/watch?v=Xf34Tm0Q-ZA", "Postman"),
                        art("API Economy", "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-seven-make-or-break-api-challenges-cios-need-to-address", "McKinsey")
                    ]),
                    topic("API Documentation (OpenAPI/Swagger)", [
                        vid("OpenAPI Tutorial", "https://www.youtube.com/watch?v=x52fxBQ5R8I", "Swagger"),
                        doc("OpenAPI Spec", "https://swagger.io/specification/")
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
                    topic("Performance: Sub-5ms latency, 10K RPS", [
                        vid("High Performance Node.js", "https://www.youtube.com/watch?v=joNQuZcBkjY", "Matteo Collina"),
                        art("Performance Best Practices", "https://nodejs.org/en/docs/guides/dont-block-the-event-loop/", "Node.js")
                    ]),
                    topic("Security Hardening (OWASP Top 10)", [
                        vid("OWASP Top 10", "https://www.youtube.com/watch?v=rWHvp7rUka8", "OWASP"),
                        doc("OWASP Guide", "https://owasp.org/www-project-api-security/")
                    ]),
                    topic("Infrastructure as Code (Terraform)", [
                        vid("Terraform Tutorial", "https://www.youtube.com/watch?v=l5k1ai_GBDE", "TechWorld with Nana"),
                        doc("Terraform Docs", "https://developer.hashicorp.com/terraform/docs")
                    ]),
                    topic("CI/CD Pipeline for Gateway", [
                        vid("GitHub Actions", "https://www.youtube.com/watch?v=R8_veQiYBjI", "TechWorld with Nana"),
                        doc("GitHub Actions", "https://docs.github.com/en/actions")
                    ]),
                    topic("System Design Interview: 1M RPS Gateway", [
                        vid("Design API Gateway", "https://www.youtube.com/watch?v=RqfaTIWc3LQ", "Exponent"),
                        channel("ByteByteGo", "https://www.youtube.com/@ByteByteGo")
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
                    topic("Multi-Protocol Support (REST, GraphQL, gRPC, WebSocket)", [
                        art("Protocol Comparison", "https://www.redhat.com/architect/apis-rest-grpc-graphql", "Red Hat")
                    ]),
                    topic("Plugin Architecture", [
                        vid("Plugin Systems", "https://www.youtube.com/watch?v=iB6Rb-6DE6g", "uidotdev"),
                        art("Building Plugin Systems", "https://css-tricks.com/designing-a-javascript-plugin-system/", "CSS-Tricks")
                    ]),
                    topic("Admin Dashboard (React)", [
                        playlist("React Dashboard", "https://www.youtube.com/playlist?list=PL6QREj8te1P6wX9m5KnicnDVEucbOPsqR", "Lama Dev")
                    ]),
                    topic("Complete Observability", [
                        doc("Observability Guide", "https://opentelemetry.io/docs/")
                    ]),
                    topic("Cloud Deployment (AWS/GCP/Azure)", [
                        vid("AWS Deployment", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        doc("AWS Well-Architected", "https://aws.amazon.com/architecture/well-architected/")
                    ]),
                    topic("Video Walkthrough & Documentation", [
                        art("Technical Writing", "https://developers.google.com/tech-writing", "Google")
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
const systemDesignStackPlan: Phase[] = [
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
                    topic("DNS Routing & Request Resolution", [
                        vid("DNS Explained in 100 Seconds", "https://www.youtube.com/watch?v=72snZctFFtA", "Fireship"),
                        vid("How DNS Works - Complete Guide", "https://www.youtube.com/watch?v=mpQZVYPuDGU", "Hussein Nasser"),
                        doc("AWS Route 53 Guide", "https://docs.aws.amazon.com/Route53/"),
                        art("How DNS Works", "https://howdns.works/", "DNSimple")
                    ]),
                    topic("CDN for Global Distribution", [
                        vid("CDN Explained", "https://www.youtube.com/watch?v=RI9np1LWzqw", "Hussein Nasser"),
                        vid("CloudFront Deep Dive", "https://www.youtube.com/watch?v=AT-nHW3_SVI", "Be A Better Dev"),
                        doc("Cloudflare CDN", "https://developers.cloudflare.com/cache/"),
                        art("CDN Best Practices", "https://web.dev/articles/content-delivery-networks", "web.dev")
                    ]),
                    topic("Load Balancers & Traffic Direction", [
                        vid("Load Balancing Algorithms", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        vid("Layer 4 vs Layer 7 Load Balancers", "https://www.youtube.com/watch?v=aKMLgFVxZYk", "Hussein Nasser"),
                        doc("NGINX Load Balancing", "https://docs.nginx.com/nginx/admin-guide/load-balancer/"),
                        art("Load Balancing Concepts", "https://www.nginx.com/resources/glossary/load-balancing/", "NGINX")
                    ]),
                    topic("Cloud Provider Choices (AWS, GCP, Azure)", [
                        vid("AWS vs Azure vs GCP", "https://www.youtube.com/watch?v=n24OBVGHufQ", "Fireship"),
                        vid("AWS Fundamentals", "https://www.youtube.com/watch?v=ulprqHHWlng", "freeCodeCamp"),
                        doc("AWS Well-Architected Framework", "https://aws.amazon.com/architecture/well-architected/"),
                        art("Choosing a Cloud Provider", "https://cloud.google.com/docs/compare", "Google Cloud")
                    ]),
                    topic("VPC & Network Security", [
                        vid("AWS VPC Tutorial", "https://www.youtube.com/watch?v=2doSoMN2xvI", "TechWorld with Nana"),
                        doc("AWS VPC Documentation", "https://docs.aws.amazon.com/vpc/"),
                        art("VPC Best Practices", "https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html", "AWS")
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
                    topic("Redis for Caching", [
                        vid("Redis Crash Course", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "Hussein Nasser"),
                        vid("Redis Caching Patterns", "https://www.youtube.com/watch?v=oaJq1mQ3dFI", "Be A Better Dev"),
                        doc("Redis Documentation", "https://redis.io/docs/"),
                        art("Caching Strategies", "https://aws.amazon.com/caching/best-practices/", "AWS")
                    ]),
                    topic("NoSQL for Flexibility", [
                        vid("MongoDB in 100 Seconds", "https://www.youtube.com/watch?v=-bt_y4Loofg", "Fireship"),
                        vid("DynamoDB Deep Dive", "https://www.youtube.com/watch?v=2k2GINpO308", "Be A Better Dev"),
                        doc("MongoDB Documentation", "https://www.mongodb.com/docs/"),
                        art("When to Use NoSQL", "https://www.mongodb.com/nosql-explained", "MongoDB")
                    ]),
                    topic("Blob Storage for Files", [
                        vid("S3 Deep Dive", "https://www.youtube.com/watch?v=tfU0JEZjcsg", "Be A Better Dev"),
                        vid("Object Storage Explained", "https://www.youtube.com/watch?v=5Vt0GHRfS-8", "IBM Technology"),
                        doc("AWS S3 Documentation", "https://docs.aws.amazon.com/s3/"),
                        art("Blob Storage Best Practices", "https://cloud.google.com/storage/docs/best-practices", "Google Cloud")
                    ]),
                    topic("Data Lakes for Analytics", [
                        vid("Data Lake Explained", "https://www.youtube.com/watch?v=zlBZrG8dDMM", "IBM Technology"),
                        vid("AWS Data Lake Architecture", "https://www.youtube.com/watch?v=V_WcXs-TMDs", "AWS"),
                        doc("Data Lake on AWS", "https://aws.amazon.com/solutions/implementations/data-lake-solution/"),
                        art("Data Lake vs Data Warehouse", "https://www.databricks.com/glossary/data-lake", "Databricks")
                    ]),
                    topic("SQL Databases for Transactions", [
                        vid("PostgreSQL Tutorial", "https://www.youtube.com/watch?v=qw--VYLpxG4", "freeCodeCamp"),
                        vid("SQL Indexing Deep Dive", "https://www.youtube.com/watch?v=clrtT_4WBAw", "Hussein Nasser"),
                        doc("PostgreSQL Documentation", "https://www.postgresql.org/docs/"),
                        art("ACID Properties", "https://www.postgresql.org/docs/current/transaction-iso.html", "PostgreSQL"),
                        topic("Whitepaper: Google Spanner", [doc("Google Research", "https://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf")]) as any,
                        topic("DSA: LSM Trees & SSTables", [doc("TowardsDataScience", "https://towardsdatascience.com/log-structured-merge-trees-9c8e2bea89e8")]) as any
                    ]),
                    topic("Database Sharding & Replication", [
                        vid("Database Sharding", "https://www.youtube.com/watch?v=5faMjKuq9Js", "Hussein Nasser"),
                        vid("Database Replication", "https://www.youtube.com/watch?v=bI8Ry6GhMSE", "Hussein Nasser"),
                        art("Sharding Strategies", "https://www.digitalocean.com/community/tutorials/understanding-database-sharding", "DigitalOcean")
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
                    topic("Microservices for Modularity", [
                        vid("Microservices Explained", "https://www.youtube.com/watch?v=j3XufmvEMiM", "IBM Technology"),
                        vid("Microservices Architecture", "https://www.youtube.com/watch?v=CdBtNQZH8a4", "TechWorld with Nana"),
                        doc("Microservices.io", "https://microservices.io/"),
                        art("Microservices Best Practices", "https://martinfowler.com/articles/microservices.html", "Martin Fowler")
                    ]),
                    topic("Auto-scaling for Demand Spikes", [
                        vid("Auto Scaling Deep Dive", "https://www.youtube.com/watch?v=a4SicVoqKRU", "Be A Better Dev"),
                        vid("AWS Auto Scaling", "https://www.youtube.com/watch?v=4EOaAkY4pNE", "AWS"),
                        doc("AWS Auto Scaling", "https://docs.aws.amazon.com/autoscaling/"),
                        art("Scaling Strategies", "https://aws.amazon.com/blogs/architecture/scaling-up-to-your-first-10-million-users/", "AWS")
                    ]),
                    topic("Containers with Docker", [
                        vid("Docker in 100 Seconds", "https://www.youtube.com/watch?v=Gjnup-PuquQ", "Fireship"),
                        vid("Docker Deep Dive", "https://www.youtube.com/watch?v=8vmKtS8W7IQ", "TechWorld with Nana"),
                        doc("Docker Documentation", "https://docs.docker.com/"),
                        art("Docker Best Practices", "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/", "Docker")
                    ]),
                    topic("Kubernetes Orchestration", [
                        vid("Kubernetes in 100 Seconds", "https://www.youtube.com/watch?v=PziYflu8cB8", "Fireship"),
                        vid("Kubernetes Course", "https://www.youtube.com/watch?v=X48VuDVv0do", "TechWorld with Nana"),
                        doc("Kubernetes Documentation", "https://kubernetes.io/docs/"),
                        art("K8s Best Practices", "https://kubernetes.io/docs/concepts/configuration/overview/", "Kubernetes")
                    ]),
                    topic("Serverless Functions for Event-Driven Work", [
                        vid("Serverless in 100 Seconds", "https://www.youtube.com/watch?v=W_VV2Fx32_Y", "Fireship"),
                        vid("AWS Lambda Deep Dive", "https://www.youtube.com/watch?v=eOBq__h4OJ4", "Be A Better Dev"),
                        doc("AWS Lambda", "https://docs.aws.amazon.com/lambda/"),
                        art("When to Use Serverless", "https://aws.amazon.com/lambda/faqs/", "AWS")
                    ]),
                    topic("Horizontal vs Vertical Scaling", [
                        vid("Scaling Explained", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        art("Scaling Strategies", "https://www.digitalocean.com/community/tutorials/understanding-the-differences-between-vertical-and-horizontal-scaling", "DigitalOcean")
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
                    topic("gRPC for Performance", [
                        vid("gRPC Crash Course", "https://www.youtube.com/watch?v=Yw4rkaTc0f8", "Hussein Nasser"),
                        vid("gRPC vs REST", "https://www.youtube.com/watch?v=gnchfOojMk4", "IBM Technology"),
                        doc("gRPC Documentation", "https://grpc.io/docs/"),
                        art("When to Use gRPC", "https://grpc.io/docs/what-is-grpc/introduction/", "gRPC")
                    ]),
                    topic("REST APIs for Simplicity", [
                        vid("REST API Best Practices", "https://www.youtube.com/watch?v=SLwpqD8n3d0", "Traversy Media"),
                        doc("RESTful API Design", "https://restfulapi.net/"),
                        art("REST API Guidelines", "https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design", "Microsoft")
                    ]),
                    topic("Message Queues for Async Work", [
                        vid("Message Queues Explained", "https://www.youtube.com/watch?v=O1PgqUqZKTA", "Hussein Nasser"),
                        vid("RabbitMQ Tutorial", "https://www.youtube.com/watch?v=deG25y_r6OY", "Hussein Nasser"),
                        vid("Kafka Architecture", "https://www.youtube.com/watch?v=Ch5VhJzaoaI", "Hussein Nasser"),
                        doc("RabbitMQ Documentation", "https://www.rabbitmq.com/docs"),
                        doc("Kafka Documentation", "https://kafka.apache.org/documentation/")
                    ]),
                    topic("Service Meshes for Complex Orchestration", [
                        vid("Istio Explained", "https://www.youtube.com/watch?v=16fgzklcF7Y", "TechWorld with Nana"),
                        vid("Service Mesh 101", "https://www.youtube.com/watch?v=vh1YtWjfcyk", "IBM Technology"),
                        doc("Istio Documentation", "https://istio.io/latest/docs/"),
                        art("Service Mesh Benefits", "https://www.redhat.com/en/topics/microservices/what-is-a-service-mesh", "Red Hat")
                    ]),
                    topic("WebSockets for Real-time", [
                        vid("WebSockets Explained", "https://www.youtube.com/watch?v=1BfCnjr_Vjg", "Fireship"),
                        vid("WebSockets vs HTTP", "https://www.youtube.com/watch?v=xTR5OflgwgU", "Hussein Nasser"),
                        doc("WebSocket API", "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API")
                    ]),
                    topic("GraphQL for Flexible Queries", [
                        vid("GraphQL in 100 Seconds", "https://www.youtube.com/watch?v=eIQh02xuVw4", "Fireship"),
                        doc("GraphQL Documentation", "https://graphql.org/learn/"),
                        art("When to Use GraphQL", "https://www.apollographql.com/blog/graphql/basics/graphql-vs-rest/", "Apollo")
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
                    topic("Microservices for Scale", [
                        vid("Decomposing Monolith", "https://www.youtube.com/watch?v=UzEW0X8a010", "GOTO Conferences"),
                        art("Microservices Patterns", "https://microservices.io/patterns/index.html", "Chris Richardson")
                    ]),
                    topic("API Gateways for Management", [
                        vid("API Gateway Pattern", "https://www.youtube.com/watch?v=6ULyxuHKxg8", "Hussein Nasser"),
                        doc("Kong Gateway", "https://docs.konghq.com/"),
                        art("API Gateway Benefits", "https://aws.amazon.com/api-gateway/", "AWS")
                    ]),
                    topic("Domain-Driven Design for Clarity", [
                        vid("DDD Explained", "https://www.youtube.com/watch?v=pMuiVlnGqjk", "Amithabh Shah"),
                        vid("Bounded Contexts", "https://www.youtube.com/watch?v=am-HkyENxeI", "CodeOpinion"),
                        art("DDD Reference", "https://martinfowler.com/bliki/DomainDrivenDesign.html", "Martin Fowler")
                    ]),
                    topic("Middleware for Cross-Cutting Concerns", [
                        vid("Middleware Pattern", "https://www.youtube.com/watch?v=lY6icfhap2o", "Web Dev Simplified"),
                        art("Cross-Cutting Concerns", "https://www.patterns.dev/posts/middleware-pattern", "patterns.dev")
                    ]),
                    topic("Event Sourcing & CQRS", [
                        vid("Event Sourcing Explained", "https://www.youtube.com/watch?v=STKCRSUsyP0", "CodeOpinion"),
                        vid("CQRS Pattern", "https://www.youtube.com/watch?v=DQ3D_mplIgY", "CodeOpinion"),
                        art("Event Sourcing", "https://martinfowler.com/eaaDev/EventSourcing.html", "Martin Fowler")
                    ]),
                    topic("Saga Pattern for Distributed Transactions", [
                        vid("Saga Pattern Explained", "https://www.youtube.com/watch?v=xDuwrtwYHu8", "Hussein Nasser"),
                        art("Saga Pattern", "https://microservices.io/patterns/data/saga.html", "Chris Richardson")
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
                    topic("Logging with ELK Stack", [
                        vid("ELK Stack Tutorial", "https://www.youtube.com/watch?v=ZP0NmfyfsoM", "TechWorld with Nana"),
                        vid("Elasticsearch Explained", "https://www.youtube.com/watch?v=1EnvkPf7t6Y", "IBM Technology"),
                        doc("Elasticsearch Guide", "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"),
                        art("Logging Best Practices", "https://www.datadoghq.com/blog/log-management-best-practices/", "Datadog")
                    ]),
                    topic("Tracing for Request Flows", [
                        vid("Distributed Tracing", "https://www.youtube.com/watch?v=idDu_jXqf4E", "Hussein Nasser"),
                        vid("Jaeger Explained", "https://www.youtube.com/watch?v=UNqilb9_zwY", "CNCF"),
                        doc("Jaeger Documentation", "https://www.jaegertracing.io/docs/"),
                        doc("OpenTelemetry", "https://opentelemetry.io/docs/")
                    ]),
                    topic("Chaos Testing for Resilience", [
                        vid("Chaos Engineering", "https://www.youtube.com/watch?v=MhdW_EGycmw", "Fireship"),
                        vid("Chaos Monkey", "https://www.youtube.com/watch?v=7sQiIR9qCdA", "Netflix"),
                        art("Chaos Engineering Principles", "https://principlesofchaos.org/", "Chaos Community")
                    ]),
                    topic("Monitoring with Prometheus", [
                        vid("Prometheus Tutorial", "https://www.youtube.com/watch?v=h4Sl21AKiDg", "TechWorld with Nana"),
                        vid("Grafana Dashboards", "https://www.youtube.com/watch?v=lILY8eSspEo", "TechWorld with Nana"),
                        doc("Prometheus Documentation", "https://prometheus.io/docs/"),
                        doc("Grafana Documentation", "https://grafana.com/docs/")
                    ]),
                    topic("SLOs, SLIs, SLAs", [
                        vid("SLOs Explained", "https://www.youtube.com/watch?v=tEylFyxbDLE", "Google Cloud"),
                        doc("Google SRE Book", "https://sre.google/sre-book/table-of-contents/"),
                        art("Defining SLOs", "https://cloud.google.com/blog/products/gcp/sre-fundamentals-slis-slas-and-slos", "Google Cloud")
                    ]),
                    topic("Incident Management", [
                        vid("Incident Response", "https://www.youtube.com/watch?v=r1yNZ_BrHfY", "Google Cloud"),
                        art("On-Call Best Practices", "https://increment.com/on-call/", "Increment")
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
                    topic("Anomaly Detection", [
                        vid("ML for Anomaly Detection", "https://www.youtube.com/watch?v=VClXOFVGmIQ", "StatQuest"),
                        art("AWS Anomaly Detection", "https://aws.amazon.com/blogs/aws/amazon-cloudwatch-anomaly-detection/", "AWS"),
                        doc("Datadog Anomaly Detection", "https://docs.datadoghq.com/monitors/types/anomaly/")
                    ]),
                    topic("Intelligent Routing Optimization", [
                        vid("Traffic Management with AI", "https://www.youtube.com/watch?v=QLC5ij_8Cek", "Google Cloud"),
                        art("AI-Driven Load Balancing", "https://cloud.google.com/load-balancing/docs/backend-services", "Google Cloud")
                    ]),
                    topic("Intelligent Autoscaling", [
                        vid("Predictive Scaling", "https://www.youtube.com/watch?v=uxuyPru3_Lc", "AWS"),
                        doc("AWS Predictive Scaling", "https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-predictive-scaling.html"),
                        art("ML-Based Scaling", "https://cloud.google.com/blog/products/ai-machine-learning/using-ml-to-better-predict-scaling-needs", "Google Cloud")
                    ]),
                    topic("Predictive Load Balancing", [
                        vid("Predictive Infrastructure", "https://www.youtube.com/watch?v=a4SicVoqKRU", "AWS"),
                        art("ML in Load Balancing", "https://www.nginx.com/blog/", "NGINX")
                    ]),
                    topic("AIOps for Self-Healing Systems", [
                        vid("AIOps Explained", "https://www.youtube.com/watch?v=e4VB17ot-D0", "IBM Technology"),
                        vid("Self-Healing Infrastructure", "https://www.youtube.com/watch?v=5lTTVGIZ-HE", "CNCF"),
                        art("AIOps Guide", "https://www.ibm.com/topics/aiops", "IBM"),
                        doc("Kubernetes Self-Healing", "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/")
                    ]),
                    topic("Cost Optimization with ML", [
                        vid("AWS Cost Optimization", "https://www.youtube.com/watch?v=8TlukLu11Yo", "AWS"),
                        art("FinOps with AI", "https://www.finops.org/", "FinOps Foundation")
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
const aiEngineerRoadmapPlan: Phase[] = [
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
                    topic("Async/Await & Asyncio", [
                        playlist("Python Async Full Course", "https://www.youtube.com/playlist?list=PLhTjy8cBISEqkN-5Ku_kXG4QW33sxQo0t", "Tech With Tim"),
                        vid("Async/Await in Python", "https://www.youtube.com/watch?v=2IW-ZEui4h4", "Tech With Tim"),
                        doc("Python asyncio Docs", "https://docs.python.org/3/library/asyncio.html"),
                        art("Real Python - Async IO", "https://realpython.com/async-io-python/", "Real Python")
                    ]),
                    topic("Decorators & Metaclasses", [
                        vid("Python Decorators in 15 Minutes", "https://www.youtube.com/watch?v=r7Dtus7N4pI", "Tech With Tim"),
                        vid("Decorators - Full Tutorial", "https://www.youtube.com/watch?v=FsAPt_9Bf3U", "Corey Schafer"),
                        doc("Python Decorator Guide", "https://docs.python.org/3/glossary.html#term-decorator"),
                        art("Primer on Decorators", "https://realpython.com/primer-on-python-decorators/", "Real Python")
                    ]),
                    topic("Generators & Iterators", [
                        vid("Python Generators Explained", "https://www.youtube.com/watch?v=bD05uGo_sVI", "Corey Schafer"),
                        vid("Generators & Iterators", "https://www.youtube.com/watch?v=u3T7hmLthUU", "Tech With Tim"),
                        doc("Python Generators", "https://docs.python.org/3/howto/functional.html#generators")
                    ]),
                    topic("Type Hints & Pydantic", [
                        vid("Python Type Hints Full Course", "https://www.youtube.com/watch?v=dgBCEB2jVU0", "ArjanCodes"),
                        vid("Pydantic V2 Tutorial", "https://www.youtube.com/watch?v=502XOB0u8OY", "ArjanCodes"),
                        doc("Pydantic Documentation", "https://docs.pydantic.dev/latest/")
                    ]),
                    topic("Python Package Management (Poetry/uv)", [
                        vid("Poetry Tutorial", "https://www.youtube.com/watch?v=0f3moPe_bhk", "ArjanCodes"),
                        doc("Poetry Docs", "https://python-poetry.org/docs/"),
                        art("Python Packaging Guide", "https://packaging.python.org/en/latest/", "PyPA")
                    ]),
                    topic("Testing with Pytest", [
                        vid("Pytest Full Course", "https://www.youtube.com/watch?v=cHYq1MRoyI0", "freeCodeCamp"),
                        doc("Pytest Documentation", "https://docs.pytest.org/en/stable/")
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
                    topic("Pandas Core Operations", [
                        playlist("Pandas Complete Tutorial", "https://www.youtube.com/playlist?list=PL-osiE80TeTsWmV9i9c58mdDCSskIFdDS", "Corey Schafer"),
                        playlist("Pandas for Data Science", "https://www.youtube.com/watch?v=vmEHCJofslg", "CampusX"),
                        vid("Pandas Crash Course", "https://www.youtube.com/watch?v=x9JiIFvlUjc", "Krish Naik"),
                        vid("Pandas in 1 Hour", "https://www.youtube.com/watch?v=vmEHCJofslg", "Programming with Mosh"),
                        doc("Pandas User Guide", "https://pandas.pydata.org/docs/user_guide/index.html")
                    ]),
                    topic("Data Cleaning & Transformation", [
                        vid("Data Cleaning with Pandas", "https://www.youtube.com/watch?v=bDhvCp3_lYw", "Alex The Analyst"),
                        art("Pandas Data Cleaning", "https://realpython.com/python-data-cleaning-numpy-pandas/", "Real Python")
                    ]),
                    topic("Advanced Groupby & Merging", [
                        vid("Pandas GroupBy Explained", "https://www.youtube.com/watch?v=qy0fDqoMJx8", "Corey Schafer"),
                        doc("Pandas Merging Guide", "https://pandas.pydata.org/docs/user_guide/merging.html")
                    ]),
                    topic("NumPy Fundamentals", [
                        vid("NumPy Full Course", "https://www.youtube.com/watch?v=QUT1VHiLmmI", "freeCodeCamp"),
                        doc("NumPy User Guide", "https://numpy.org/doc/stable/user/index.html")
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
                    topic("FastAPI Fundamentals", [
                        playlist("FastAPI Full Course 2024", "https://www.youtube.com/playlist?list=PLqAmigZvYxIL9dnYeZEhMoHcoP4zop8-p", "Bitfumes"),
                        vid("FastAPI crash course in Hindi", "https://www.youtube.com/watch?v=7t2alSnE2-I", "Chai aur Code"),
                        vid("FastAPI Complete Tutorial", "https://www.youtube.com/watch?v=7t2alSnE2-I", "Akamai Developer"),
                        doc("FastAPI Official Tutorial", "https://fastapi.tiangolo.com/tutorial/")
                    ]),
                    topic("Pydantic Models & Validation", [
                        vid("Pydantic V2 for FastAPI", "https://www.youtube.com/watch?v=502XOB0u8OY", "ArjanCodes"),
                        doc("FastAPI Request Body", "https://fastapi.tiangolo.com/tutorial/body/")
                    ]),
                    topic("Authentication with JWT", [
                        vid("FastAPI JWT Auth", "https://www.youtube.com/watch?v=5GxQ1rLTwaU", "Ssali Jonathan"),
                        doc("FastAPI Security", "https://fastapi.tiangolo.com/tutorial/security/")
                    ]),
                    topic("SQLAlchemy ORM & Alembic Migrations", [
                        vid("SQLAlchemy Full Course", "https://www.youtube.com/watch?v=AKQ3XEDI9Mw", "freeCodeCamp"),
                        doc("SQLAlchemy ORM Tutorial", "https://docs.sqlalchemy.org/en/20/orm/quickstart.html")
                    ]),
                    topic("PostgreSQL Integration", [
                        vid("PostgreSQL Full Course", "https://www.youtube.com/watch?v=qw--VYLpxG4", "freeCodeCamp"),
                        doc("PostgreSQL Docs", "https://www.postgresql.org/docs/")
                    ]),
                    topic("API Documentation (OpenAPI/Swagger)", [
                        vid("FastAPI Auto Docs", "https://www.youtube.com/watch?v=tLKKmouUams", "Patrick Loeber"),
                        doc("FastAPI OpenAPI Docs", "https://fastapi.tiangolo.com/tutorial/metadata/")
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
                    topic("Tensors & Autograd", [
                        playlist("Complete ML Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1B5_5eWd7yv28K6K0z0_U5x", "Vizuara AI"),
                        playlist("PyTorch for Deep Learning", "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4", "Patrick Loeber"),
                        vid("PyTorch for Beginners", "https://www.youtube.com/watch?v=ORMx45xqWkA", "CampusX"),
                        vid("PyTorch in 100 Seconds", "https://www.youtube.com/watch?v=ORMx45xqWkA", "Fireship"),
                        doc("PyTorch Tutorials", "https://pytorch.org/tutorials/")
                    ]),
                    topic("Building Neural Networks", [
                        vid("Neural Networks from Scratch", "https://www.youtube.com/watch?v=VMj-3S1tku0", "Andrej Karpathy"),
                        vid("PyTorch Neural Network Tutorial", "https://www.youtube.com/watch?v=c36lUUr864M", "Patrick Loeber"),
                        doc("PyTorch nn Module", "https://pytorch.org/docs/stable/nn.html")
                    ]),
                    topic("Training Loops & Optimization", [
                        vid("Training Loop Explained", "https://www.youtube.com/watch?v=WvoLTXIjBYU", "Andrej Karpathy"),
                        vid("Optimizers Explained", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "StatQuest"),
                        doc("PyTorch Optimizers", "https://pytorch.org/docs/stable/optim.html")
                    ]),
                    topic("Data Loading & Preprocessing", [
                        vid("PyTorch DataLoader", "https://www.youtube.com/watch?v=PXOzkkB5eH0", "Patrick Loeber"),
                        doc("PyTorch Data Utils", "https://pytorch.org/docs/stable/data.html")
                    ]),
                    topic("GPU Acceleration & Mixed Precision", [
                        vid("PyTorch GPU Training", "https://www.youtube.com/watch?v=V_xro1bcAuA", "Aladdin Persson"),
                        doc("CUDA Semantics", "https://pytorch.org/docs/stable/notes/cuda.html")
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
                    topic("Hugging Face Transformers Library", [
                        playlist("Complete NLP Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1AsG_S9ySjO2P8370uGv_L7", "Vizuara AI"),
                        playlist("Hugging Face Course", "https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o", "Hugging Face"),
                        vid("Hugging Face in 15 Minutes", "https://www.youtube.com/watch?v=QEaBAZQCtwE", "AssemblyAI"),
                        doc("HuggingFace Course", "https://huggingface.co/learn/nlp-course/chapter1/1")
                    ]),
                    topic("Transfer Learning Concepts", [
                        vid("Transfer Learning Explained", "https://www.youtube.com/watch?v=yofjFQddwHE", "StatQuest"),
                        art("Transfer Learning Guide", "https://huggingface.co/docs/transformers/training", "Hugging Face")
                    ]),
                    topic("Fine-Tuning BERT / DistilBERT", [
                        vid("Fine-Tune BERT for Sentiment Analysis", "https://www.youtube.com/watch?v=GSt00_-0ncQ", "Venelin Valkov"),
                        vid("Hugging Face Fine-Tuning Tutorial", "https://www.youtube.com/watch?v=iY2AZYdZAr0", "James Briggs"),
                        doc("HuggingFace Trainer", "https://huggingface.co/docs/transformers/main_classes/trainer")
                    ]),
                    topic("Model Evaluation Metrics", [
                        vid("Precision, Recall, F1 Explained", "https://www.youtube.com/watch?v=jJ7ff7Gcq34", "StatQuest"),
                        vid("Confusion Matrix", "https://www.youtube.com/watch?v=Kdsp6soqA7o", "StatQuest"),
                        doc("HuggingFace Evaluate", "https://huggingface.co/docs/evaluate/index")
                    ]),
                    topic("Model Hub & Sharing", [
                        vid("Push Model to Hub", "https://www.youtube.com/watch?v=Z1-XMy-GNLQ", "Hugging Face"),
                        doc("Model Hub Guide", "https://huggingface.co/docs/hub/models")
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
                    topic("LangChain Core Concepts", [
                        playlist("Complete Langchain Course", "https://www.youtube.com/watch?v=tcqEUSNCn8I", "Krish Naik"),
                        playlist("LangChain Full Course", "https://www.youtube.com/playlist?list=PLqAmigZvYxILVLf4e6r2dcq-S3WJ1mUfY", "Krish Naik"),
                        vid("LangChain Crash Course", "https://www.youtube.com/watch?v=lG7Uxts9SXs", "Tech With Tim"),
                        doc("LangChain Docs", "https://python.langchain.com/docs/get_started/introduction")
                    ]),
                    topic("LlamaIndex for Data Frameworks", [
                        vid("LlamaIndex Full Tutorial", "https://www.youtube.com/watch?v=cNMYeW2mpBs", "freeCodeCamp"),
                        doc("LlamaIndex Docs", "https://docs.llamaindex.ai/en/stable/")
                    ]),
                    topic("Chains, Agents & Tools", [
                        vid("LangChain Agents Explained", "https://www.youtube.com/watch?v=jSP-gSEyVeI", "James Briggs"),
                        vid("Building Agents with LangChain", "https://www.youtube.com/watch?v=DWUdGhRrv2c", "Sam Witteveen"),
                        doc("LangChain Agents", "https://python.langchain.com/docs/modules/agents/")
                    ]),
                    topic("Prompt Templates & Output Parsers", [
                        vid("Prompt Engineering with LangChain", "https://www.youtube.com/watch?v=RflBcK0oDH0", "Patrick Loeber"),
                        doc("LangChain Prompt Templates", "https://python.langchain.com/docs/modules/model_io/prompts/")
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
                    topic("Embedding Models & Semantic Search", [
                        vid("Word Embeddings Explained", "https://www.youtube.com/watch?v=5MaWmXwxFNQ", "StatQuest"),
                        vid("OpenAI Embeddings Tutorial", "https://www.youtube.com/watch?v=ySus5ZS0b94", "James Briggs"),
                        doc("OpenAI Embeddings", "https://platform.openai.com/docs/guides/embeddings")
                    ]),
                    topic("Vector DBs: Pinecone, ChromaDB, FAISS", [
                        vid("ChromaDB Tutorial", "https://www.youtube.com/watch?v=3yPBVii7lzI", "pixegami"),
                        vid("Pinecone + LangChain", "https://www.youtube.com/watch?v=LhnCsygAvzY", "James Briggs"),
                        doc("Pinecone Learning Center", "https://www.pinecone.io/learn/"),
                        doc("ChromaDB Docs", "https://docs.trychroma.com/")
                    ]),
                    topic("Document Chunking Strategies", [
                        vid("RAG Chunking Strategies", "https://www.youtube.com/watch?v=8OJC21T2SL4", "Greg Kamradt"),
                        art("Chunking Best Practices", "https://www.pinecone.io/learn/chunking-strategies/", "Pinecone")
                    ]),
                    topic("RAG Pipeline: End-to-End", [
                        playlist("RAG - GenAI Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1D_3Y4uXk3O6y0PjS6j1o5I", "Vizuara AI"),
                        vid("Complete RAG Tutorial 2026", "https://www.youtube.com/watch?v=tcqEUSNCn8I", "freeCodeCamp"),
                        vid("RAG from Scratch", "https://www.youtube.com/watch?v=sVcwVQRHIc8", "LangChain"),
                        doc("LangChain RAG Guide", "https://python.langchain.com/docs/use_cases/question_answering/")
                    ]),
                    topic("Advanced RAG: Reranking & Hybrid Search", [
                        channel("Vizuara AI (Vijayraja)", "https://www.youtube.com/@VizuaraAI"),
                        vid("Advanced RAG Techniques", "https://www.youtube.com/watch?v=T-D1OfcDW1M", "LangChain"),
                        vid("Reranking for Better RAG", "https://www.youtube.com/watch?v=9VgLi3wHNM0", "James Briggs"),
                        art("Hybrid Search Guide", "https://www.pinecone.io/learn/hybrid-search-intro/", "Pinecone")
                    ]),
                    topic("Conversation Memory & Source Citations", [
                        vid("Memory in LangChain", "https://www.youtube.com/watch?v=kn7Yg3Ohsuw", "Sam Witteveen"),
                        doc("LangChain Memory", "https://python.langchain.com/docs/modules/memory/")
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
                    topic("Docker Fundamentals", [
                        vid("Docker in 100 Seconds", "https://www.youtube.com/watch?v=Gjnup-PuquQ", "Fireship"),
                        playlist("Docker Full Course", "https://www.youtube.com/playlist?list=PLy7NrYWoggjzfAHlUusx2wuDwfCrmJYcs", "TechWorld with Nana"),
                        doc("Docker Official Docs", "https://docs.docker.com/get-started/")
                    ]),
                    topic("Multi-stage Builds & Optimization", [
                        vid("Docker Best Practices", "https://www.youtube.com/watch?v=8vmKtS8W7IQ", "TechWorld with Nana"),
                        vid("Multi-stage Docker Builds", "https://www.youtube.com/watch?v=zpkqNPwEzac", "DevOps Directive"),
                        art("Dockerfile Best Practices", "https://docs.docker.com/develop/develop-images/dockerfile_best-practices/", "Docker")
                    ]),
                    topic("Docker Compose for ML Services", [
                        vid("Docker Compose Tutorial", "https://www.youtube.com/watch?v=HG6yIjZapSA", "TechWorld with Nana"),
                        doc("Docker Compose Docs", "https://docs.docker.com/compose/")
                    ]),
                    topic("Deploying ML Models with Docker", [
                        vid("Deploy ML Models with FastAPI & Docker", "https://www.youtube.com/watch?v=h5wLuVDr0oc", "Patrick Loeber"),
                        art("ML Docker Guide", "https://aws.amazon.com/blogs/machine-learning/deploy-deep-learning-models-on-amazon-ecs/", "AWS")
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
                    topic("GitHub Actions for CI/CD", [
                        playlist("GitHub Actions Full Course", "https://www.youtube.com/playlist?list=PLArH6NjfKsUhvGHrpag7SuPumMzQRhUKY", "TechWorld with Nana"),
                        vid("GitHub Actions Tutorial", "https://www.youtube.com/watch?v=R8_veQiYBjI", "TechWorld with Nana"),
                        doc("GitHub Actions Docs", "https://docs.github.com/en/actions")
                    ]),
                    topic("Automated Testing in CI", [
                        vid("CI/CD for ML Projects", "https://www.youtube.com/watch?v=9BgIDqAzfuA", "MLOps Community"),
                        art("Testing ML Pipelines", "https://madewithml.com/courses/mlops/testing/", "Made With ML")
                    ]),
                    topic("MLflow Experiment Tracking", [
                        vid("MLflow Tutorial", "https://www.youtube.com/watch?v=ksYIVDue8ak", "Krish Naik"),
                        vid("MLOps Zero to Hero", "https://www.youtube.com/watch?v=x3cxvsUFVZA", "Krish Naik"),
                        vid("MLflow Complete Guide", "https://www.youtube.com/watch?v=x3cxvsUFVZA", "freeCodeCamp"),
                        doc("MLflow Documentation", "https://mlflow.org/docs/latest/index.html")
                    ]),
                    topic("Model Registry & Versioning", [
                        vid("MLflow Model Registry", "https://www.youtube.com/watch?v=E6J86PlYBHk", "Databricks"),
                        doc("MLflow Model Registry", "https://mlflow.org/docs/latest/model-registry.html")
                    ]),
                    topic("Model Monitoring & Observability", [
                        vid("ML Monitoring Explained", "https://www.youtube.com/watch?v=fZj6UOb1lXE", "Evidently AI"),
                        doc("Evidently AI Docs", "https://docs.evidentlyai.com/")
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
                    topic("AWS EC2 & ECS Deployment", [
                        vid("Deploy to AWS EC2", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        vid("AWS ECS Tutorial", "https://www.youtube.com/watch?v=AYAh6YDXuho", "Be A Better Dev"),
                        doc("AWS ECS Docs", "https://docs.aws.amazon.com/ecs/")
                    ]),
                    topic("AWS Lambda for Serverless ML", [
                        vid("AWS Lambda Tutorial", "https://www.youtube.com/watch?v=eOBq__h4OJ4", "Be A Better Dev"),
                        doc("Lambda Docs", "https://docs.aws.amazon.com/lambda/")
                    ]),
                    topic("Load Balancing & Auto-scaling", [
                        vid("AWS ALB Tutorial", "https://www.youtube.com/watch?v=sCR3SAVdyCc", "Hussein Nasser"),
                        doc("AWS ELB Docs", "https://docs.aws.amazon.com/elasticloadbalancing/")
                    ]),
                    topic("GCP Vertex AI (Alternative)", [
                        vid("Google Cloud AI Platform", "https://www.youtube.com/watch?v=6s9YbGcoYV4", "Google Cloud"),
                        doc("Vertex AI Docs", "https://cloud.google.com/vertex-ai/docs")
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
                    topic("End-to-End RAG with Custom UI (Streamlit/Gradio)", [
                        vid("Streamlit Full Course", "https://www.youtube.com/watch?v=JoFGrSRj4X4", "freeCodeCamp"),
                        vid("Gradio Tutorial", "https://www.youtube.com/watch?v=44vi31hehw4", "1littlecoder"),
                        doc("Streamlit Docs", "https://docs.streamlit.io/"),
                        doc("Gradio Docs", "https://www.gradio.app/docs/")
                    ]),
                    topic("ML Model Serving with A/B Testing", [
                        vid("A/B Testing for ML Models", "https://www.youtube.com/watch?v=Jl0gBNn4U7w", "MLOps Community"),
                        art("ML A/B Testing Guide", "https://madewithml.com/courses/mlops/testing/#ab-tests", "Made With ML")
                    ]),
                    topic("AI Agent for Business Workflow Automation", [
                        vid("Build AI Agents", "https://www.youtube.com/watch?v=Eug2clsLtFs", "AI Jason"),
                        vid("LangGraph Agent Tutorial", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        doc("LangGraph Docs", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    topic("GitHub README & Documentation", [
                        vid("GitHub Profile README", "https://www.youtube.com/watch?v=KhGWbt1dAKQ", "codeSTACKr"),
                        art("Awesome README Guide", "https://github.com/matiassingers/awesome-readme", "GitHub Community")
                    ]),
                    topic("Quantifying Project Impact", [
                        vid("How to Write a Technical Resume", "https://www.youtube.com/watch?v=aKjsy-b00QM", "TechLead"),
                        art("STAR Method for Engineers", "https://www.levels.fyi/blog/applying-star-framework.html", "levels.fyi")
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
                    topic("ATS-Friendly Resume Optimization", [
                        vid("Tech Resume Tips", "https://www.youtube.com/watch?v=J-4Fv8nq1iA", "Jeff Su"),
                        art("ATS Resume Guide", "https://www.jobscan.co/blog/ats-resume-guide/", "Jobscan")
                    ]),
                    topic("Technical Blog Writing (Dev.to/Hashnode)", [
                        vid("Start a Dev Blog", "https://www.youtube.com/watch?v=qjsPHGMfzaA", "Traversy Media"),
                        art("Technical Writing Guide", "https://developers.google.com/tech-writing", "Google")
                    ]),
                    topic("Portfolio Website", [
                        vid("Portfolio Website Tutorial", "https://www.youtube.com/watch?v=0YFrGy_mzjY", "Traversy Media"),
                        art("Portfolio Best Practices", "https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/", "freeCodeCamp")
                    ]),
                    topic("LinkedIn Optimization for AI Roles", [
                        vid("LinkedIn for Developers", "https://www.youtube.com/watch?v=SG5Sb5WTV_g", "Joshua Fluke"),
                        art("LinkedIn Tips for Engineers", "https://www.linkedin.com/pulse/optimize-linkedin-profile-2024-jeff-su/", "Jeff Su")
                    ]),
                    topic("Job Search Strategy (20+ apps/week)", [
                        vid("Job Search Strategy 2026", "https://www.youtube.com/watch?v=rEaS8nkJbOA", "Josh Talks"),
                        channel("AI Engineer Job Boards", "https://www.youtube.com/@AIEngineerJobs")
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
                    topic("ML System Design Framework", [
                        vid("ML System Design Interview", "https://www.youtube.com/watch?v=pYs1lNd-XbI", "Stanford MLSys"),
                        vid("Designing ML Systems", "https://www.youtube.com/watch?v=C9ABKzpwCHA", "ByteByteGo"),
                        art("ML System Design Primer", "https://github.com/chiphuyen/machine-learning-systems-design", "Chip Huyen")
                    ]),
                    topic("Design a Recommendation System", [
                        vid("Recommendation System Design", "https://www.youtube.com/watch?v=BXcQUgCyplQ", "ByteByteGo"),
                        art("Netflix Recommendations", "https://netflixtechblog.com/", "Netflix Tech Blog")
                    ]),
                    topic("Design a Search Engine", [
                        vid("How Google Search Works", "https://www.youtube.com/watch?v=0eKVizvYSUQ", "Google"),
                        vid("Semantic Search System Design", "https://www.youtube.com/watch?v=dRUIGgNBvVk", "James Briggs")
                    ]),
                    topic("Design an LLM-based Chatbot System", [
                        vid("ChatGPT System Design", "https://www.youtube.com/watch?v=DjuXACWYkkU", "ByteByteGo"),
                        art("LLM System Design", "https://huyenchip.com/2024/03/14/ai-oss.html", "Chip Huyen")
                    ]),
                    topic("Design an AI Content Moderation System", [
                        vid("Content Moderation ML", "https://www.youtube.com/watch?v=VClXOFVGmIQ", "Google"),
                        art("AI Safety Systems", "https://openai.com/research/", "OpenAI")
                    ]),
                    topic("Design a Real-time Fraud Detection System", [
                        vid("Fraud Detection with ML", "https://www.youtube.com/watch?v=olfaBgJrUBI", "ByteByteGo"),
                        art("Real-time ML Inference", "https://aws.amazon.com/blogs/machine-learning/", "AWS ML Blog")
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
                    topic("LoRA & QLoRA Fine-Tuning", [
                        vid("LoRA Explained", "https://www.youtube.com/watch?v=YVU5wAA6Txo", "Weights & Biases"),
                        vid("QLoRA Tutorial", "https://www.youtube.com/watch?v=XpoKB3usmKc", "Trelis Research"),
                        doc("PEFT Library", "https://huggingface.co/docs/peft/index")
                    ]),
                    topic("Dataset Preparation for Fine-Tuning", [
                        vid("Create Fine-Tuning Datasets", "https://www.youtube.com/watch?v=hRm9gU7Mz_M", "Trelis Research"),
                        art("Data Quality for LLMs", "https://huggingface.co/docs/datasets/", "Hugging Face")
                    ]),
                    topic("RLHF & DPO Training", [
                        vid("RLHF Explained", "https://www.youtube.com/watch?v=2MBJOuVq380", "Hugging Face"),
                        vid("DPO Training Tutorial", "https://www.youtube.com/watch?v=NRVaNfAmb1Q", "Trelis Research"),
                        doc("TRL Library", "https://huggingface.co/docs/trl/index")
                    ]),
                    topic("AI Agents with LangGraph", [
                        vid("LangGraph Full Course", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        vid("Multi-Agent Systems", "https://www.youtube.com/watch?v=MxRn2N2DXvs", "AI Jason"),
                        doc("LangGraph Documentation", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    topic("CrewAI & AutoGen Frameworks", [
                        vid("CrewAI Tutorial", "https://www.youtube.com/watch?v=sPzc6hMg7So", "Matt Williams"),
                        vid("AutoGen Multi-Agent", "https://www.youtube.com/watch?v=vU2S6dVf79M", "Microsoft"),
                        doc("CrewAI Docs", "https://docs.crewai.com/"),
                        doc("AutoGen Docs", "https://microsoft.github.io/autogen/")
                    ]),
                    topic("Model Quantization & Inference Optimization", [
                        vid("Quantization Explained", "https://www.youtube.com/watch?v=ZKgCppMstSA", "Trelis Research"),
                        vid("vLLM for Fast Inference", "https://www.youtube.com/watch?v=K4A0v1DpRiE", "AI Anytime"),
                        doc("vLLM Docs", "https://docs.vllm.ai/en/latest/")
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
                    topic("LeetCode: Arrays, Strings & HashMap", [
                        playlist("NeetCode 150", "https://www.youtube.com/playlist?list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf", "NeetCode"),
                        vid("LeetCode Patterns Explained", "https://www.youtube.com/watch?v=DjYZk8nrXVY", "NeetCode"),
                        doc("LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/")
                    ]),
                    topic("LeetCode: Trees, Graphs & DP", [
                        playlist("Dynamic Programming Playlist", "https://www.youtube.com/playlist?list=PLot-Xpze53lcvx_yhUmAgcehydjFTBIv3", "NeetCode"),
                        vid("DP for Beginners", "https://www.youtube.com/watch?v=oBt53YbR9Kk", "freeCodeCamp")
                    ]),
                    topic("ML-Specific Coding Problems", [
                        vid("ML Coding Interview", "https://www.youtube.com/watch?v=bGDe0_xfD0I", "Weights & Biases"),
                        art("ML Interview Questions", "https://github.com/alirezadir/Machine-Learning-Interviews", "GitHub Community")
                    ]),
                    topic("Behavioral Interview (STAR Method)", [
                        vid("FAANG Behavioral Interview", "https://www.youtube.com/watch?v=PJKYqLP6MRE", "Jeff Su"),
                        vid("Amazon Leadership Principles", "https://www.youtube.com/watch?v=CpcxVE5JIX4", "Dan Croitor"),
                        art("Behavioral Interview Guide", "https://www.levels.fyi/blog/applying-star-framework.html", "levels.fyi")
                    ]),
                    topic("System Design Mock Interviews", [
                        channel("ByteByteGo", "https://www.youtube.com/@ByteByteGo"),
                        channel("NeetCode", "https://www.youtube.com/@NeetCode"),
                        vid("System Design Interview Tips", "https://www.youtube.com/watch?v=F-4yyjhkn7s", "Exponent"),
                        art("System Design Primer", "https://github.com/donnemartin/system-design-primer", "GitHub Community")
                    ]),
                    topic("Salary Negotiation & Offer Comparison", [
                        vid("How to Negotiate Salary", "https://www.youtube.com/watch?v=u9BoG1n1948", "Josh Fluke"),
                        vid("Negotiating Tech Offers", "https://www.youtube.com/watch?v=fyn0CKPuPlA", "Rahul Pandey"),
                        art("Salary Negotiation Guide", "https://www.levels.fyi/blog/salary-negotiation-tips.html", "levels.fyi")
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
const parallelism5DPlan: Phase[] = [
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
                    topic("CPU vs. GPU Architecture", [
                        doc("Volta Architecture Whitepaper", "https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf"),
                        art("The CUDA Programming Model", "https://developer.nvidia.com/blog/cuda-refresher-cuda-programming-model/"),
                        vid("Anatomy of a GPU", "https://www.youtube.com/watch?v=7Mre8H91bBA", "Vizuara AI")
                    ]),
                    topic("The CUDA Execution Model", [
                        vid("CUDA C/C++ Basics", "https://www.youtube.com/playlist?list=PLxNPSjHT5qvtYRVdIE1yETCGcqJQncYGL", "CoffeeBeforeArch"),
                        art("Warp Divergence & Scheduling", "https://docs.nvidia.com/cuda/cuda-c-programming-guide/index.html"),
                        course("CUDA Programming Masterclass", "https://www.udemy.com/course/cuda-programming-masterclass/")
                    ]),
                    topic("GPU Memory Hierarchy", [
                        art("Memory Coalescing Explained", "https://developer.nvidia.com/blog/how-access-global-memory-efficiently-cuda-c-kernels/"),
                        vid("Shared Memory in CUDA", "https://www.youtube.com/watch?v=0wV3pGvNlO0", "Tech With Tim")
                    ]),
                    topic("Writing the First Kernel", [
                        art("OpenAI Triton Language", "https://triton-lang.org/main/index.html"),
                        vid("Custom GEMM in CUDA", "https://www.youtube.com/watch?v=2T9pPInUuM4", "CoffeeBeforeArch")
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
                    topic("The Training Loop Deconstructed", [
                        vid("PyTorch Autograd (Micrograd)", "https://www.youtube.com/watch?v=MswxTl-EQcs", "Andrej Karpathy"),
                        art("Autograd Reverse-mode BP", "https://pytorch.org/docs/stable/notes/autograd.html")
                    ]),
                    topic("Anatomy of GPU Memory", [
                        art("Deep Learning Go Brrrr", "https://horace.io/brrr_intro.html", "Horace He"),
                        doc("Sublinear Memory Cost Paper", "https://arxiv.org/abs/1604.06174")
                    ]),
                    topic("Memory Optimization: Checkpointing & Precision", [
                        vid("Mixed Precision Training", "https://www.youtube.com/watch?v=6id88qHh-u0", "Patrick Loeber"),
                        course("PyTorch for Deep Learning", "https://www.udemy.com/course/pytorch-for-deep-learning/")
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
                    topic("GPU Communication (NCCL)", [
                        art("Ring All-Reduce Visualization", "https://andrew.gibiansky.com/blog/machine-learning/baidu-allreduce/"),
                        doc("PyTorch Distributed Paper", "https://arxiv.org/abs/2006.15704")
                    ]),
                    topic("DDP: Multi-Process Training", [
                        vid("PyTorch DDP Tutorial", "https://www.youtube.com/watch?v=KaAJA7XJpsE", "PyTorch"),
                        doc("DistributedDataParallel Design", "https://pytorch.org/docs/stable/notes/ddp.html")
                    ]),
                    topic("NCCL Primitives & Overlap", [
                        vid("Collective Communication Basics", "https://www.youtube.com/watch?v=KaAJA7XJpsE", "PyTorch"),
                        course("Distributed DL with PyTorch", "https://www.coursera.org/learn/advanced-deployment-scenarios-pytorch")
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
                    topic("Megatron-LM & Vertical Slicing", [
                        doc("Megatron-LM Architecture Paper", "https://arxiv.org/abs/1909.08053"),
                        vid("Megatron-LM Explained", "https://www.youtube.com/watch?v=R_7iPZfQ1Lw", "Yannic Kilcher")
                    ]),
                    topic("Row & Column Parallelism", [
                        art("HuggingFace Tensor Parallelism", "https://huggingface.co/docs/transformers/v4.15.0/en/parallel_computations"),
                        vid("Slicing Attention Matrices", "https://www.youtube.com/watch?v=DWUdGhRrv2c", "Vizuara AI")
                    ]),
                    topic("Parallelizing Transformers", [
                        doc("NCCL Backend Config", "https://pytorch.org/docs/stable/distributed.html"),
                        course("NVIDIA DLI: Multi-GPU Training", "https://courses.nvidia.com/courses/course-v1:DLI+S-FX-04+V1/")
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
                    topic("Inter-NodeRDMA & Infiniband", [
                        doc("GPipe Staging Paper", "https://arxiv.org/abs/1811.06965"),
                        art("Remote Direct Memory Access (RDMA)", "https://www.ibm.com/docs/en/aix/7.2?topic=protocol-remote-direct-memory-access")
                    ]),
                    topic("GPipe vs 1F1B Scheduling", [
                        art("DeepSpeed Pipeline Schedules", "https://www.deepspeed.ai/tutorials/pipeline/"),
                        vid("Stanford Pipeline Lecture", "https://www.youtube.com/watch?v=b0E-xG1t-p4", "Stanford CS25")
                    ]),
                    topic("Managing the Pipeline Bubble", [
                        art("Stochastic Rounding & Gradients", "https://arxiv.org/abs/1412.7024"),
                        course("Advanced DL with DeepSpeed", "https://www.udemy.com/topic/deep-learning/")
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
                    topic("ZeRO Optimization Stages", [
                        doc("ZeRO Trillion Param Paper", "https://arxiv.org/abs/1910.02054"),
                        vid("Visualizing ZeRO Framework", "https://www.youtube.com/watch?v=AWe8_t_H2i8", "Explain AI")
                    ]),
                    topic("Fully Sharded Data Parallel (FSDP)", [
                        art("PyTorch FSDP Blog", "https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/"),
                        playlist("ZeRO & FSDP Deep Dive", "https://www.youtube.com/playlist?list=PL_X9T8S_A6Wv8Y3k_X75mS-dY94Vp8d6m", "Vizuara AI")
                    ]),
                    topic("Overlapping All-Gather/Reduce-Scatter", [
                        art("DeepSpeed Communication Optimization", "https://www.deepspeed.ai/tutorials/zero/"),
                        course("LLM Engineering & Deployment", "https://www.udemy.com/course/large-language-models/")
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
                    topic("Sequence Parallelism (SP)", [
                        doc("Reducing Activation Recomputation", "https://arxiv.org/abs/2205.05198"),
                        art("Token-Dimension Sharding", "https://github.com/NVIDIA/Megatron-LM")
                    ]),
                    topic("Context Parallelism & Ring Attention", [
                        doc("Ring Attention Paper", "https://arxiv.org/abs/2310.01889"),
                        vid("FlashAttention How it Works", "https://www.youtube.com/watch?v=FthNMHAet3E", "Yannic Kilcher")
                    ]),
                    topic("Expert Parallelism & MoE", [
                        art("Mixture of Experts Explained", "https://huggingface.co/blog/moe"),
                        doc("All-to-All Communication Primitive", "https://pytorch.org/docs/stable/distributed.html")
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
                    topic("GPT-2 Architecture (Karpathy style)", [
                        vid("Build GPT from Scratch", "https://www.youtube.com/watch?v=kCc8FmEb1nY", "Andrej Karpathy"),
                        doc("Original GPT-2 Paper", "https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf")
                    ]),
                    topic("Applying the 5 Dimensions", [
                        art("The Annotated Transformer", "https://nlp.seas.harvard.edu/2018/04/03/attention.html"),
                        vid("Distributed GPT Training", "https://www.youtube.com/watch?v=KaAJA7XJpsE", "PyTorch")
                    ]),
                    topic("Measuring Scaling Efficiency", [
                        art("Model FLOPs Utilization (MFU)", "https://arxiv.org/abs/2211.05102"),
                        course("Vizuara: 5D Parallelism Bootcamp", "https://5d-parallelism.vizuara.ai/")
                    ])
                ],
                project: {
                    title: "Ultimate 5D Parallel Training Script",
                    description: ["Build GPT-2 with RoPE and Self-Attention", "Parallelize across 8 GPUs using 5D dimensions", "Log MFU and tokens/sec on Rank 0"],
                    outcomes: ["Industrial-grade LLM engineer", "Linear scaling verification"]
                }
            }
        ]
    }
];

// ===== PLAN 8: MICROSOFT AI AGENT ARCHITECT (.NET) =====
const microsoftAgentPlan: Phase[] = [
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
                    topic(".NET 9 & Agent SDK Setup", [
                        doc("Microsoft Agent Framework SDK", "https://github.com/microsoft/agent-framework"),
                        doc("Microsoft.Extensions.AI Docs", "https://learn.microsoft.com/en-us/dotnet/ai/extensions"),
                        vid("Microsoft Agent Framework Intro", "https://www.youtube.com/watch?v=R-SjL6m-S-M", "Microsoft")
                    ]),
                    topic("Multimodal Vision Integration", [
                        doc("GPT-4V with .NET AI", "https://learn.microsoft.com/en-us/dotnet/ai/get-started-multimodal"),
                        vid("Vision Agents in .NET", "https://www.youtube.com/watch?v=DWUdGhRrv2c", "Vizuara AI")
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
                    topic("Semantic DOM: Accessibility Tree", [
                        art("Perceiving the Web via A11y", "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility"),
                        doc("Playwright A11y Snapshot API", "https://playwright.dev/docs/api/class-accessibility")
                    ]),
                    topic("Defining Agentic Web Tools", [
                        doc("Agent Tool Calling in .NET", "https://learn.microsoft.com/en-us/dotnet/ai/agents/tools"),
                        art("Reliable Web Interaction Logic", "https://playwright.dev/docs/actionability")
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
                    topic("Graph-Based Planning Orchestration", [
                        doc("AgentGroupChat in .NET", "https://learn.microsoft.com/en-us/dotnet/ai/agents/orchestration"),
                        vid("Multi-Agent Planning Loops", "https://www.youtube.com/watch?v=FthNMHAet3E", "Yannic Kilcher")
                    ]),
                    topic("Telemetry & Azure AI Foundry", [
                        doc("Azure AI Foundry Agents", "https://azure.microsoft.com/en-us/products/ai-foundry"),
                        doc("OpenTelemetry for AI Agents", "https://learn.microsoft.com/en-us/dotnet/ai/observability")
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
                    topic("Complex Multi-Step Workflows", [
                        art("Automating E-commerce with Agents", "https://github.com/microsoft/agent-framework/tree/main/examples"),
                        vid("Agentic Workflow Patterns", "https://www.youtube.com/watch?v=kCc8FmEb1nY", "Andrej Karpathy")
                    ]),
                    topic("Edge Case: Human-in-the-Loop", [
                        doc("Agent Collaboration Patterns", "https://learn.microsoft.com/en-us/dotnet/ai/agents/patterns")
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
const pythonHindiPlan: Phase[] = [
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
                    topic("How Computers Work (Hardware ΓåÆ Software)", [
                        vid("How Computers Work (Hindi)", "https://www.youtube.com/watch?v=RoXJVebh--Y", "Apna College"),
                        art("CS50 Binary & Hardware Notes", "https://cs50.harvard.edu/x/2024/notes/0/")
                    ]),
                    topic("Operating System Fundamentals", [
                        vid("OS Concepts: Process, Threads, Memory", "https://www.youtube.com/watch?v=26QPDBe-NB8", "Apna College"),
                        art("Operating System Concepts (GeeksForGeeks)", "https://www.geeksforgeeks.org/operating-systems/")
                    ]),
                    topic("CLI & Terminal Mastery", [
                        vid("Linux Command Line (Hindi)", "https://www.youtube.com/watch?v=Wbz_r2t7xtg", "CodeWithHarry"),
                        doc("Linux Command Line Cheatsheet", "https://cheatography.com/davechild/cheat-sheets/linux-command-line/")
                    ]),
                    topic("Computer Networking Basics (HTTP, DNS, IPs)", [
                        vid("Computer Networks Crash Course (Hindi)", "https://www.youtube.com/watch?v=IPvYjXCsTg8", "Apna College"),
                        art("How the Web Works (MDN)", "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works")
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
                    topic("Git Basics: init, add, commit, log, diff", [
                        vid("Git & GitHub Full Course (Hindi)", "https://www.youtube.com/watch?v=gwWKnnCMQ5c", "CodeWithHarry"),
                        doc("Git Official Docs", "https://git-scm.com/doc")
                    ]),
                    topic("Branching Strategies: merge, rebase, conflict resolution", [
                        vid("Git Branching (Hindi)", "https://www.youtube.com/watch?v=vwj89i2FmG0", "Thapa Technical"),
                        art("Atlassian Git Branching Guide", "https://www.atlassian.com/git/tutorials/using-branches")
                    ]),
                    topic("GitHub: PRs, Issues, GitHub Actions CI/CD", [
                        vid("GitHub Workflow Tutorial (Hindi)", "https://www.youtube.com/watch?v=RGOj5yH7evk", "freeCodeCamp"),
                        doc("GitHub Actions Docs", "https://docs.github.com/en/actions")
                    ]),
                    topic("Open Source: Fork, Clone, Contributing via PRs", [
                        art("How to Contribute to Open Source", "https://opensource.guide/how-to-contribute/")
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
                    topic("Variables, Data Types, Type Casting", [
                        playlist("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        doc("Python Official Docs", "https://docs.python.org/3/")
                    ]),
                    topic("Control Flow: if/elif/else, match-case", [
                        playlist("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry")
                    ]),
                    topic("Loops: for, while, break, continue, enumerate", [
                        playlist("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry")
                    ]),
                    topic("Functions: args, kwargs, default args, lambda, closures", [
                        playlist("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        art("Python Functions Deep Dive", "https://realpython.com/defining-your-own-python-function/")
                    ]),
                    topic("Data Structures: List, Tuple, Set, Dict, Comprehensions", [
                        playlist("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        art("Python Data Structures (Real Python)", "https://realpython.com/python-data-structures/")
                    ]),
                    topic("File I/O: read, write, with statement, CSV, JSON", [
                        vid("File Handling in Python (Hindi)", "https://www.youtube.com/watch?v=E_Tz8X1oiM4", "CodeWithHarry")
                    ]),
                    topic("Error Handling: try/except/finally, custom exceptions", [
                        art("Python Exception Handling", "https://realpython.com/python-exceptions/")
                    ]),
                    topic("Modules, Packages, pip, virtual environments (venv)", [
                        vid("Python Modules & venv (Hindi)", "https://www.youtube.com/watch?v=cY56C2aS3h4", "CodeWithHarry")
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
                    topic("Classes & Objects: __init__, self, instance vs class vars", [
                        playlist("100 Days of Code: Python (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", "CodeWithHarry"),
                        art("Python OOP (Real Python)", "https://realpython.com/python3-object-oriented-programming/")
                    ]),
                    topic("Inheritance, Polymorphism, Encapsulation, Abstraction", [
                        vid("OOP in Python (Hindi)", "https://www.youtube.com/watch?v=qiSCMNBIP2g", "Apna College"),
                        art("4 Pillars of OOP", "https://www.geeksforgeeks.org/object-oriented-programming-in-python-set-1-class-and-its-members/")
                    ]),
                    topic("Magic/Dunder Methods: __str__, __repr__, __len__, __eq__", [
                        art("Python Dunder Methods Guide", "https://realpython.com/python-magic-methods/")
                    ]),
                    topic("Decorators & Property: @staticmethod, @classmethod, @property", [
                        art("Python Decorators Explained", "https://realpython.com/primer-on-python-decorators/")
                    ]),
                    topic("Advanced Python: Generators, Iterators, Context Managers", [
                        art("Python Generators & Iterators", "https://realpython.com/introduction-to-python-generators/")
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
                    topic("HTML5: Semantic Elements, Forms, Tables, Media", [
                        playlist("Web Development Course (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzj2Mdn", "CodeWithHarry"),
                        doc("HTML MDN Reference", "https://developer.mozilla.org/en-US/docs/Web/HTML")
                    ]),
                    topic("CSS3: Box Model, Flexbox, CSS Grid", [
                        playlist("Web Development Course (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzj2Mdn", "CodeWithHarry"),
                        art("CSS Flexbox Complete Guide (CSS-Tricks)", "https://css-tricks.com/snippets/css/a-guide-to-flexbox/")
                    ]),
                    topic("Responsive Design: Media Queries, Mobile-First", [
                        art("Responsive Web Design (MDN)", "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"),
                        vid("Responsive Design Tutorial (Hindi)", "https://www.youtube.com/watch?v=VsNAuGkCpQU", "CodeWithHarry")
                    ]),
                    topic("JavaScript Basics for Backend Devs (DOM, Events, Fetch API)", [
                        vid("JavaScript Crash Course (Hindi)", "https://www.youtube.com/watch?v=hKB-YGF14SY", "CodeWithHarry"),
                        doc("JavaScript MDN", "https://developer.mozilla.org/en-US/docs/Web/JavaScript")
                    ]),
                    topic("Bootstrap 5: Grid, Components, Utilities", [
                        vid("Bootstrap 5 Tutorial (Hindi)", "https://www.youtube.com/watch?v=vpAJ0s5S2t0", "CodeWithHarry"),
                        doc("Bootstrap 5 Official Docs", "https://getbootstrap.com/docs/5.3/")
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
                    topic("RDBMS Concepts: Tables, Keys, Relationships, Normalization", [
                        vid("Complete SQL Tutorial (Hindi)", "https://www.youtube.com/watch?v=BpHX1tWFIGI", "Apna College"),
                        doc("PostgreSQL Tutorial", "https://www.postgresql.org/docs/current/tutorial.html")
                    ]),
                    topic("CRUD Operations: SELECT, INSERT, UPDATE, DELETE", [
                        vid("SQL CRUD Queries (Hindi)", "https://www.youtube.com/watch?v=B4sda0gPoqw", "Apna College")
                    ]),
                    topic("Advanced SQL: JOINs, Subqueries, Aggregates, Window Functions", [
                        art("SQL Advanced Concepts (Mode Analytics)", "https://mode.com/sql-tutorial/sql-window-functions/")
                    ]),
                    topic("Indexing, Query Optimization, EXPLAIN ANALYZE", [
                        art("PostgreSQL Indexing Best Practices", "https://use-the-index-luke.com/")
                    ]),
                    topic("Transactions, ACID Properties, Isolation Levels", [
                        art("Understanding ACID Transactions", "https://www.postgresql.org/docs/current/tutorial-transactions.html")
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
                    topic("MongoDB: Documents, Collections, BSON, CRUD", [
                        vid("MongoDB Tutorial (Hindi)", "https://www.youtube.com/watch?v=J6mD5TZI3Es", "CodeWithHarry"),
                        doc("MongoDB Official Docs", "https://www.mongodb.com/docs/manual/")
                    ]),
                    topic("Aggregation Pipeline: $match, $group, $lookup, $project", [
                        art("MongoDB Aggregation Guide", "https://www.mongodb.com/docs/manual/aggregation/")
                    ]),
                    topic("Redis Basics: Key-Value Store, Caching, TTL, Pub/Sub", [
                        vid("Redis Tutorial (Hindi)", "https://www.youtube.com/watch?v=Vx2zPMPvmug", "CodeWithHarry"),
                        doc("Redis Official Docs", "https://redis.io/docs/")
                    ]),
                    topic("SQL vs NoSQL: When to use which?", [
                        art("SQL vs NoSQL Explained", "https://www.mongodb.com/nosql-explained/nosql-vs-sql")
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
                    topic("Python Async/Await: asyncio, event loop, coroutines", [
                        art("Python asyncio Guide", "https://realpython.com/async-io-python/"),
                        vid("AsyncIO in Python (Hindi)", "https://www.youtube.com/watch?v=6RbJYN7SoRs", "Krish Naik")
                    ]),
                    topic("FastAPI Fundamentals: Path params, Query params, Request body, Pydantic", [
                        playlist("FastAPI Tutorial (Hindi)", "https://www.youtube.com/playlist?list=PLwGdqUZWnOp2Z3eFOg4hwxaMAZqcPXYXm", "Thapa Technical"),
                        doc("FastAPI Official Docs", "https://fastapi.tiangolo.com/")
                    ]),
                    topic("Database Integration: SQLAlchemy ORM with PostgreSQL", [
                        art("FastAPI + SQLAlchemy Guide", "https://fastapi.tiangolo.com/tutorial/sql-databases/")
                    ]),
                    topic("Authentication & Security: JWT, OAuth2, Password Hashing", [
                        art("FastAPI Security Tutorial (JWT)", "https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/")
                    ]),
                    topic("API Versioning, Middleware, CORS, Error Handling", [
                        doc("FastAPI Middleware Docs", "https://fastapi.tiangolo.com/tutorial/middleware/")
                    ]),
                    topic("API Testing with Pytest and TestClient", [
                        art("Testing FastAPI Apps", "https://fastapi.tiangolo.com/tutorial/testing/"),
                        art("Pytest Tutorial", "https://realpython.com/pytest-python-testing/")
                    ]),
                    topic("Containerization: Docker + Docker Compose basics", [
                        vid("Docker Tutorial (Hindi)", "https://www.youtube.com/watch?v=17Bl31rlnRM", "TechWorld with Nana"),
                        doc("Docker Official Docs", "https://docs.docker.com/")
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
                    topic("Django Project Structure: MVT Architecture, urls.py, views.py, models.py", [
                        playlist("Django Tutorials (Hindi)", "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9", "CodeWithHarry"),
                        doc("Django Official Docs", "https://docs.djangoproject.com/en/4.2/")
                    ]),
                    topic("Django ORM: QuerySets, Migrations, Model relationships", [
                        art("Django ORM Deep Dive", "https://docs.djangoproject.com/en/4.2/topics/db/queries/")
                    ]),
                    topic("Django Forms, Templates, Jinja2, Template Tags", [
                        art("Django Template Language", "https://docs.djangoproject.com/en/4.2/topics/templates/")
                    ]),
                    topic("Django Auth: User model, Login/Logout, Permissions", [
                        art("Django Authentication System", "https://docs.djangoproject.com/en/4.2/topics/auth/")
                    ]),
                    topic("Django REST Framework (DRF): Serializers, ViewSets, Routers", [
                        vid("Django REST Framework (Hindi)", "https://www.youtube.com/watch?v=TmsD8QOptUM", "Krish Naik"),
                        doc("DRF Official Docs", "https://www.django-rest-framework.org/")
                    ]),
                    topic("Deployment: Gunicorn + Nginx on DigitalOcean/Railway", [
                        art("Deploy Django on DigitalOcean", "https://www.digitalocean.com/community/tutorials/how-to-serve-django-applications-with-gunicorn-and-nginx")
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
                    topic("NumPy: Arrays, Broadcasting, Vectorized Operations", [
                        vid("NumPy Full Tutorial (Hindi)", "https://www.youtube.com/watch?v=x9iEwvNOH_0", "CampusX"),
                        doc("NumPy Docs", "https://numpy.org/doc/stable/")
                    ]),
                    topic("Pandas: Series, DataFrame, Groupby, Merge, Pivot Tables", [
                        vid("Pandas Tutorial (Hindi)", "https://www.youtube.com/watch?v=e60ItwlZTKM", "CampusX"),
                        art("Pandas Cheatsheet", "https://pandas.pydata.org/Pandas_Cheat_Sheet.pdf")
                    ]),
                    topic("Data Cleaning: handling nulls, outliers, duplicates, encoding", [
                        art("Data Cleaning Guide (Kaggle)", "https://www.kaggle.com/learn/data-cleaning")
                    ]),
                    topic("Visualization: Matplotlib, Seaborn, Plotly for EDA", [
                        vid("Data Visualization (Hindi)", "https://www.youtube.com/watch?v=6GUZXDef2U0", "CampusX"),
                        doc("Seaborn Docs", "https://seaborn.pydata.org/tutorial.html")
                    ]),
                    topic("Feature Engineering: encoding, scaling, feature selection", [
                        art("Feature Engineering for ML", "https://www.kaggle.com/learn/feature-engineering")
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
                    topic("ML Fundamentals: Supervised vs Unsupervised, Bias-Variance Tradeoff", [
                        playlist("Machine Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", "Krish Naik"),
                        art("ML Concepts Glossary", "https://developers.google.com/machine-learning/glossary")
                    ]),
                    topic("Regression: Linear, Polynomial, Ridge, Lasso", [
                        playlist("Machine Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", "Krish Naik")
                    ]),
                    topic("Classification: Logistic Regression, SVM, Decision Trees, Random Forest", [
                        playlist("Machine Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", "Krish Naik")
                    ]),
                    topic("Model Evaluation: confusion matrix, precision, recall, F1, ROC-AUC", [
                        art("ML Metrics Explained", "https://scikit-learn.org/stable/modules/model_evaluation.html")
                    ]),
                    topic("Cross-Validation, Hyperparameter Tuning: GridSearchCV, RandomSearchCV", [
                        art("Scikit-Learn Cross Validation Guide", "https://scikit-learn.org/stable/modules/cross_validation.html")
                    ]),
                    topic("Clustering: K-Means, DBSCAN, PCA Dimensionality Reduction", [
                        art("Unsupervised Learning Guide (Scikit-Learn)", "https://scikit-learn.org/stable/unsupervised_learning.html")
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
                    topic("Neural Network Fundamentals: neurons, layers, activation functions", [
                        playlist("Deep Learning (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU70ZGsckrMdr0FteeRui", "Krish Naik"),
                        art("Neural Networks from Scratch", "https://nnfs.io/")
                    ]),
                    topic("Backpropagation & Gradient Descent: chain rule, optimizers (SGD, Adam)", [
                        vid("Backprop Visually Explained", "https://www.youtube.com/watch?v=Ilg3gGewQ5U", "3Blue1Brown")
                    ]),
                    topic("PyTorch: Tensors, Autograd, Datasets, DataLoaders, Custom Models", [
                        doc("PyTorch Docs", "https://pytorch.org/tutorials/beginner/basics/intro.html"),
                        vid("PyTorch Full Crash Course", "https://www.youtube.com/watch?v=c36lUUr864M", "Patrick Loeber")
                    ]),
                    topic("CNNs for Image Classification: Conv2D, MaxPool, BatchNorm, Dropout", [
                        art("CNN Architecture Explained", "https://cs231n.github.io/convolutional-networks/")
                    ]),
                    topic("Transfer Learning: ResNet, EfficientNet, fine-tuning pre-trained models", [
                        art("Transfer Learning with PyTorch", "https://pytorch.org/tutorials/beginner/transfer_learning_tutorial.html")
                    ]),
                    topic("Model Saving, ONNX Export, TorchScript for Deployment", [
                        doc("PyTorch Model Save/Load", "https://pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html")
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
                    topic("How LLMs Work: Transformers, Attention, Tokenization", [
                        vid("Transformers Explained Visually", "https://www.youtube.com/watch?v=4Bdc55j80l8", "Andrej Karpathy"),
                        art("Illustrated Transformer (Jay Alammar)", "https://jalammar.github.io/illustrated-transformer/")
                    ]),
                    topic("Prompt Engineering: Zero-shot, Few-shot, Chain-of-Thought, ReAct", [
                        playlist("Generative AI (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVNxBw-H6q192jX8D-lSxyF0", "Krish Naik"),
                        art("OpenAI Prompt Engineering Guide", "https://platform.openai.com/docs/guides/prompt-engineering")
                    ]),
                    topic("LangChain: Chains, Memory, Tools, Agents", [
                        playlist("Generative AI (Hindi)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVNxBw-H6q192jX8D-lSxyF0", "Krish Naik"),
                        doc("LangChain Python Docs", "https://python.langchain.com/docs/")
                    ]),
                    topic("RAG: Vector DBs (ChromaDB, FAISS), Embeddings, Semantic Search", [
                        art("Build a RAG System (LangChain)", "https://python.langchain.com/docs/how_to/"),
                        vid("RAG from Scratch (Hindi)", "https://www.youtube.com/watch?v=fuMKrKRqluA", "Krish Naik")
                    ]),
                    topic("Fine-Tuning: LoRA, QLoRA with HuggingFace + Transformers", [
                        doc("HuggingFace PEFT Library", "https://huggingface.co/docs/peft"),
                        art("Fine-Tuning LLMs with LoRA", "https://huggingface.co/blog/lora")
                    ]),
                    topic("Deployment: Hugging Face Spaces, Streamlit, Gradio for demos", [
                        art("Deploy ML Apps with Gradio", "https://www.gradio.app/guides/quickstart"),
                        art("Streamlit Tutorial", "https://docs.streamlit.io/")
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
                    topic("DSA for Interviews: Arrays, Strings, Linked Lists, Trees, Graphs", [
                        vid("DSA in Python (Hindi)", "https://www.youtube.com/watch?v=mpBXmAfmW0E", "Apna College"),
                        art("LeetCode Patterns", "https://seanprashad.com/leetcode-patterns/")
                    ]),
                    topic("System Design Basics: scalability, load balancing, caching, DB sharding", [
                        vid("System Design (Hindi)", "https://www.youtube.com/watch?v=SqcXvc3ZmRU", "Gaurav Sen"),
                        art("System Design Primer", "https://github.com/donnemartin/system-design-primer")
                    ]),
                    topic("Resume & LinkedIn: ATS optimization, projects highlight, action verbs", [
                        art("Google Resume Tips", "https://careersonair.withgoogle.com/events/resume-tips")
                    ]),
                    topic("Behavioral Interviews: STAR method, common questions", [
                        art("STAR Method Guide", "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique")
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
const dsaProPlan: Phase[] = [
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
                    topic("Big-O, Big-Theta, Big-Omega: Time & Space Complexity", [
                        vid("Big O Notation Deep Dive", "https://www.youtube.com/watch?v=v4cd1O4zkGw", "CS Dojo"),
                        art("Big-O Cheat Sheet", "https://www.bigocheatsheet.com/"),
                        art("MIT 6.006: Intro to Algorithms (Recitation Notes)", "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/")
                    ]),
                    topic("Amortized Analysis: dynamic arrays, hash tables", [
                        art("Amortized Analysis Explained", "https://www.geeksforgeeks.org/analysis-algorithm-set-5-amortized-analysis-introduction/")
                    ]),
                    topic("Recursion & Recurrence Relations: T(n) = aT(n/b) + f(n), Master Theorem", [
                        vid("Recursion Masterclass", "https://www.youtube.com/watch?v=IJDJ0kBx2LM", "Abdul Bari"),
                        art("Master Theorem Explained", "https://en.wikipedia.org/wiki/Master_theorem_(analysis_of_algorithms)")
                    ]),
                    topic("Problem Decomposition Framework: Brute ΓåÆ Optimize ΓåÆ Code", [
                        art("How to Approach Any Coding Problem", "https://leetcode.com/discuss/general-discussion/64609/tips-for-interview-preparation")
                    ]),
                    topic("Essential Math: Modular Arithmetic, GCD/LCM, Primes, Combinatorics, Probability", [
                        vid("Math for Competitive Programming", "https://www.youtube.com/watch?v=XR4zGKszfH8", "Errichto"),
                        art("Number Theory for Competitive Programming", "https://cp-algorithms.com/algebra/euclid-algorithm.html")
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
                    topic("Arrays: static/dynamic, prefix sums, difference arrays, sliding window foundation", [
                        vid("Arrays Must-Know Tricks", "https://www.youtube.com/watch?v=RBSGKlAvoiM", "NeetCode"),
                        art("Prefix Sum Patterns", "https://leetcode.com/discuss/study-guide/563022/prefix-sum-problems")
                    ]),
                    topic("Strings: ASCII, Unicode, anagram detection, KMP, Rabin-Karp, Z-algorithm", [
                        vid("String Matching Algorithms", "https://www.youtube.com/watch?v=V5-7GzOfADQ", "Abdul Bari"),
                        art("KMP Algorithm Explained", "https://cp-algorithms.com/string/kmp.html")
                    ]),
                    topic("Linked Lists: singly/doubly, cycle detection (Floyd's), reverse, merge sort on LL", [
                        vid("Linked List Interview Questions", "https://www.youtube.com/watch?v=Hj_rA0dhr2I", "TechLead"),
                        art("Floyd's Cycle Detection", "https://www.geeksforgeeks.org/floyds-cycle-finding-algorithm/")
                    ]),
                    topic("Stacks: monotonic stack, next greater element, histogram patterns", [
                        vid("Monotonic Stack Patterns", "https://www.youtube.com/watch?v=zx5Sw9130L0", "NeetCode"),
                        art("Leetcode Monotonic Stack Problems", "https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems")
                    ]),
                    topic("Queues & Deques: BFS foundation, sliding window maximum, priority queues", [
                        vid("Deque & Sliding Window Max", "https://www.youtube.com/watch?v=DfljaUwZsOk", "NeetCode"),
                        art("Priority Queue Patterns", "https://leetcode.com/discuss/general-discussion/1113630/")
                    ]),
                    topic("Hashing: HashMap, HashSet, collision resolution, frequency maps, two-sum family", [
                        vid("Hashing Interview Patterns", "https://www.youtube.com/watch?v=KyUTuwz_b7Q", "NeetCode"),
                        art("Hashing Techniques Guide", "https://www.geeksforgeeks.org/hashing-data-structure/")
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
                    topic("Comparison Sorts: Merge Sort, Quick Sort (3-way, Dutch flag), Heap Sort", [
                        vid("Sorting Algorithms Masterclass", "https://www.youtube.com/watch?v=RfXt_qHDEPw", "Abdul Bari"),
                        art("Sorting Algorithms Visualized", "https://visualgo.net/en/sorting")
                    ]),
                    topic("Non-Comparison Sorts: Counting Sort, Radix Sort, Bucket Sort", [
                        art("Counting Sort & Radix Sort (GeeksForGeeks)", "https://www.geeksforgeeks.org/counting-sort/")
                    ]),
                    topic("Custom Comparators & Sorting by Multiple Keys", [
                        art("Python Custom Sort Guide", "https://docs.python.org/3/howto/sorting.html")
                    ]),
                    topic("Interview Sorting Problems: Sort Colors, Merge Intervals, Largest Number", [
                        vid("Sorting Interview Questions", "https://www.youtube.com/watch?v=aw_08iTRl5k", "NeetCode"),
                        topic("Whitepaper: TimSort Algorithm", [doc("Python TimSort spec", "https://hg.python.org/cpython/file/tip/Objects/listsort.txt")]) as any
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
                    topic("Classical Binary Search: left/right boundary, overflow prevention", [
                        vid("Binary Search Patterns", "https://www.youtube.com/watch?v=jf1baieXkSQ", "NeetCode"),
                        art("Binary Search Templates (LeetCode Guide)", "https://leetcode.com/discuss/general-discussion/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems")
                    ]),
                    topic("Binary Search on Answer: find minimum in rotated array, sqrt(x), ship packages", [
                        vid("Binary Search on Answer", "https://www.youtube.com/watch?v=GU7DpgHINWQ", "Errichto"),
                        art("Search on Answer Pattern", "https://cp-algorithms.com/num_methods/binary_search.html")
                    ]),
                    topic("Rotated Sorted Arrays, Peak Finding, 2D Matrix Search", [
                        vid("Rotated Array Problems", "https://www.youtube.com/watch?v=U8XENwh8Oy8", "NeetCode")
                    ]),
                    topic("Advanced BS: Kth Smallest in Sorted Matrix, Median of Two Sorted Arrays", [
                        vid("Median of Two Sorted Arrays", "https://www.youtube.com/watch?v=q6IEA26hvXc", "NeetCode")
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
                    topic("Two Pointers: opposite ends, same direction, fast-slow (Floyd's)", [
                        vid("Two Pointer Masterclass", "https://www.youtube.com/watch?v=On3r4I1p4f0", "NeetCode"),
                        art("Two Pointer Problems Guide", "https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days")
                    ]),
                    topic("Sliding Window: fixed size, variable size, minimum/maximum window substring", [
                        vid("Sliding Window Patterns", "https://www.youtube.com/watch?v=MK-NZ4hN7rs", "NeetCode"),
                        art("Sliding Window Template", "https://leetcode.com/discuss/general-discussion/657507/Sliding-Window-for-Beginners-Problems-Template-and-Code")
                    ]),
                    topic("Prefix Sums: subarray sum equals K, range queries, 2D prefix sums", [
                        art("Prefix Sum Problems (LeetCode)", "https://leetcode.com/tag/prefix-sum/")
                    ]),
                    topic("Kadane's Algorithm: Maximum Subarray, Maximum Circular Subarray", [
                        vid("Kadane Algorithm Deep Dive", "https://www.youtube.com/watch?v=5WZl3MMT0Eg", "NeetCode")
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
                    topic("Tree Traversals: DFS (pre/in/post), BFS (level order), Morris Traversal", [
                        vid("Tree Traversal Patterns", "https://www.youtube.com/watch?v=WLvU5EQVZqY", "NeetCode"),
                        art("Morris Traversal Explained", "https://www.geeksforgeeks.org/morris-traversal-for-preorder/")
                    ]),
                    topic("BST: search, insert, delete, validation, kth smallest/largest", [
                        vid("BST Operations", "https://www.youtube.com/watch?v=BvHiGFEemgs", "NeetCode")
                    ]),
                    topic("Tree Properties: height, diameter, balanced check, lowest common ancestor", [
                        vid("LCA Algorithm Deep Dive", "https://www.youtube.com/watch?v=yi0FhRqDJfo", "NeetCode")
                    ]),
                    topic("Tree DP: max path sum, binary tree cameras, house robber on tree", [
                        vid("Tree Dynamic Programming", "https://www.youtube.com/watch?v=T5B4ADI-7vw", "NeetCode")
                    ]),
                    topic("Balanced BSTs: AVL rotations, Red-Black trees (concepts for interviews)", [
                        art("AVL Tree Rotations", "https://www.geeksforgeeks.org/avl-tree-set-1-insertion/")
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
                    topic("Min/Max Heap: insert, delete, heapify, heap sort", [
                        vid("Heap Data Structure", "https://www.youtube.com/watch?v=HqPJF2L5h9U", "NeetCode"),
                        art("Binary Heap (GeeksForGeeks)", "https://www.geeksforgeeks.org/binary-heap/")
                    ]),
                    topic("Top-K Patterns: Kth Largest, K Closest Points, Top K Frequent Words", [
                        vid("Top K Elements Pattern", "https://www.youtube.com/watch?v=YjAvf-UbZr0", "NeetCode"),
                        art("Heap Problems Pattern", "https://leetcode.com/discuss/general-discussion/1127340/")
                    ]),
                    topic("Two Heaps Pattern: Median from Data Stream, Sliding Window Median", [
                        vid("Two Heaps Pattern", "https://www.youtube.com/watch?v=itmhHWaHupI", "NeetCode")
                    ]),
                    topic("Merge K Sorted Lists/Arrays: heap-based O(N log K) approach", [
                        vid("Merge K Sorted Lists", "https://www.youtube.com/watch?v=q5a5OiGbT6Q", "NeetCode")
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
                    topic("Graph Representations: adjacency list, matrix, edge list", [
                        vid("Graph Representations", "https://www.youtube.com/watch?v=EgI5nU9etnU", "NeetCode")
                    ]),
                    topic("BFS: shortest path in unweighted, Multi-source BFS, 0-1 BFS", [
                        vid("BFS Graph Patterns", "https://www.youtube.com/watch?v=oDqjPvD1e6A", "NeetCode"),
                        art("BFS vs DFS When to Use", "https://www.geeksforgeeks.org/difference-between-bfs-and-dfs/")
                    ]),
                    topic("DFS: connected components, cycle detection, flood fill, islands problems", [
                        vid("DFS Graph Masterclass", "https://www.youtube.com/watch?v=Ope7BxTvFRg", "NeetCode")
                    ]),
                    topic("Topological Sort: Kahn's Algorithm (BFS), DFS-based for DAGs, Course Schedule", [
                        vid("Topological Sort Explained", "https://www.youtube.com/watch?v=eL-KzMXSXXI", "NeetCode"),
                        art("Kahn's Algorithm", "https://www.geeksforgeeks.org/topological-sorting-indegree-based-solution/")
                    ]),
                    topic("Union-Find / Disjoint Set (DSU): path compression, union by rank, dynamic connectivity", [
                        vid("Union Find Deep Dive", "https://www.youtube.com/watch?v=ayW5B2W9hfo", "NeetCode"),
                        art("DSU Tutorial (CP Algorithms)", "https://cp-algorithms.com/data_structures/disjoint_set_union.html")
                    ]),
                    topic("Shortest Paths: Dijkstra (heap-optimized), Bellman-Ford, SPFA, Floyd-Warshall", [
                        vid("Dijkstra's Algorithm", "https://www.youtube.com/watch?v=XB4MIexjvY0", "NeetCode"),
                        art("Dijkstra vs Bellman-Ford vs Floyd-Warshall", "https://cp-algorithms.com/graph/dijkstra.html")
                    ]),
                    topic("Minimum Spanning Tree: Kruskal's (DSU), Prim's Algorithm", [
                        art("MST Algorithms (CP Algorithms)", "https://cp-algorithms.com/graph/mst_kruskal.html")
                    ]),
                    topic("Advanced: Bridges, Articulation Points, SCC (Tarjan's/Kosaraju's)", [
                        art("Tarjan's Algorithm (CP Algorithms)", "https://cp-algorithms.com/graph/bridge-searching.html")
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
                    topic("DP Thinking: identify overlapping subproblems, optimal substructure", [
                        vid("How to Think in DP", "https://www.youtube.com/watch?v=oBt53YbR9Kk", "NeetCode"),
                        art("DP Patterns Guide (LeetCode)", "https://leetcode.com/discuss/general-discussion/458695/Dynamic-Programming-Patterns")
                    ]),
                    topic("Fibonacci Family: Climbing Stairs, House Robber, Jump Game variants", [
                        vid("1D DP Patterns", "https://www.youtube.com/watch?v=Y0lT9Fck7qI", "NeetCode")
                    ]),
                    topic("Grid DP: Unique Paths, Min Path Sum, Dungeon Game", [
                        vid("Grid DP Problems", "https://www.youtube.com/watch?v=IlEsdxuD4lY", "NeetCode")
                    ]),
                    topic("Space Optimization: O(n) ΓåÆ O(1) DP with rolling array technique", [
                        art("DP Space Optimization Techniques", "https://www.geeksforgeeks.org/space-optimization-using-dp/")
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
                    topic("LCS Family: Longest Common Subsequence, Longest Common Substring, Edit Distance", [
                        vid("LCS & Edit Distance", "https://www.youtube.com/watch?v=Ua0GhsJSlWM", "NeetCode"),
                        art("Edit Distance Explained", "https://www.geeksforgeeks.org/edit-distance-dp-5/")
                    ]),
                    topic("LIS Family: Longest Increasing Subsequence (O(n log n) with patience sort)", [
                        vid("LIS O(n log n) Technique", "https://www.youtube.com/watch?v=cjWnW0hdF1Y", "NeetCode"),
                        art("LIS with Binary Search (CP Algorithms)", "https://cp-algorithms.com/sequences/longest_increasing_subsequence.html")
                    ]),
                    topic("Palindrome DP: Longest Palindromic Subsequence, Minimum Cuts", [
                        vid("Palindrome DP Problems", "https://www.youtube.com/watch?v=ZnzvU03HtYk", "NeetCode")
                    ]),
                    topic("String DP: Regular Expression Matching, Wildcard Matching, Word Break", [
                        vid("Regex DP Problems", "https://www.youtube.com/watch?v=HAA8mgxlov8", "NeetCode")
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
                    topic("0/1 Knapsack & Variants: subset sum, partition equal subset", [
                        vid("Knapsack DP Patterns", "https://www.youtube.com/watch?v=nLmhmB6NzcM", "NeetCode"),
                        art("Knapsack Variants Guide", "https://leetcode.com/discuss/general-discussion/1000004/0-1-Knapsack-template-problems")
                    ]),
                    topic("Unbounded Knapsack: Coin Change, Rod Cutting, Perfect Squares", [
                        vid("Unbounded Knapsack Problems", "https://www.youtube.com/watch?v=H9bfqozjoqs", "NeetCode")
                    ]),
                    topic("Interval DP: Matrix Chain Multiplication, Burst Balloons, Merge Stones", [
                        vid("Interval DP Deep Dive", "https://www.youtube.com/watch?v=Uz1M7fQJbQs", "Errichto"),
                        art("Interval DP Pattern", "https://leetcode.com/discuss/general-discussion/907993/interval-dp-one-framework-to-solve-them-all/")
                    ]),
                    topic("Tree DP: Binary Tree Maximum Path Sum, House Robber III", [
                        vid("Tree DP Patterns", "https://www.youtube.com/watch?v=nHR8ytpzz7c", "NeetCode")
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
                    topic("Bitmask DP: Travelling Salesman Problem, Shortest Path Visiting All Nodes", [
                        vid("Bitmask DP Explained", "https://www.youtube.com/watch?v=cY4HiiFHO1o", "Errichto"),
                        art("Bitmask DP Tutorial (CP Algorithms)", "https://cp-algorithms.com/algebra/all-submasks.html")
                    ]),
                    topic("Game Theory DP: Nim, Stone Game, Predict the Winner", [
                        vid("Game Theory DP", "https://www.youtube.com/watch?v=WfdCBb_E9RM", "NeetCode")
                    ]),
                    topic("State Machine DP: Buy/Sell Stock (all 6 variants), Best Time with Cooldown", [
                        vid("Stock Problem State Machine", "https://www.youtube.com/watch?v=oDhu5uGq_ic", "NeetCode")
                    ]),
                    topic("Digit DP: count numbers with specific digit constraints", [
                        art("Digit DP Tutorial (CP Algorithms)", "https://codeforces.com/blog/entry/53960")
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
                    topic("Trie (Prefix Tree): insert, search, startsWith, delete, compressed trie", [
                        vid("Trie Data Structure", "https://www.youtube.com/watch?v=oobqoCJlHA0", "NeetCode"),
                        art("Trie Problems (CP Algorithms)", "https://cp-algorithms.com/string/aho_corasick.html")
                    ]),
                    topic("Aho-Corasick Automaton: multi-pattern matching", [
                        art("Aho-Corasick Algorithm", "https://cp-algorithms.com/string/aho_corasick.html")
                    ]),
                    topic("Suffix Arrays & Suffix Trees: LCP array, longest repeated substring", [
                        art("Suffix Array (CP Algorithms)", "https://cp-algorithms.com/string/suffix-array.html"),
                        vid("Suffix Array Explained", "https://www.youtube.com/watch?v=zqKlL3ZpTqs", "William Fiset")
                    ]),
                    topic("Rolling Hash: Rabin-Karp, polynomial hashing for string comparison", [
                        art("Rabin-Karp Hashing", "https://cp-algorithms.com/string/rabin-karp.html")
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
                    topic("Binary Indexed Tree (Fenwick Tree): point update, prefix query, 2D BIT", [
                        vid("Fenwick Tree Tutorial", "https://www.youtube.com/watch?v=uSFzHCZ4E-8", "William Fiset"),
                        art("BIT Explained (CP Algorithms)", "https://cp-algorithms.com/data_structures/fenwick.html")
                    ]),
                    topic("Segment Tree: range sum, range min/max, lazy propagation for range updates", [
                        vid("Segment Tree Deep Dive", "https://www.youtube.com/watch?v=ZBHKZF5w4YU", "William Fiset"),
                        art("Segment Tree (CP Algorithms)", "https://cp-algorithms.com/data_structures/segment_tree.html")
                    ]),
                    topic("Sparse Table: O(1) range minimum query (static arrays)", [
                        art("Sparse Table (CP Algorithms)", "https://cp-algorithms.com/data_structures/sparse-table.html")
                    ]),
                    topic("Order Statistics Tree / Policy-Based DS in C++", [
                        art("Order Statistics Tree in C++", "https://codeforces.com/blog/entry/11080")
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
                    topic("Network Flow: Ford-Fulkerson, Edmonds-Karp, Max Bipartite Matching", [
                        vid("Network Flow Tutorial", "https://www.youtube.com/watch?v=LdOnanfc5TM", "William Fiset"),
                        art("Max Flow (CP Algorithms)", "https://cp-algorithms.com/graph/edmonds_karp.html")
                    ]),
                    topic("Strongly Connected Components: Tarjan's & Kosaraju's Algorithms", [
                        art("SCC Algorithms (CP Algorithms)", "https://cp-algorithms.com/graph/strongly-connected-components.html")
                    ]),
                    topic("Heavy-Light Decomposition: path queries on trees", [
                        art("HLD Tutorial (CP Algorithms)", "https://cp-algorithms.com/graph/hld.html")
                    ]),
                    topic("Centroid Decomposition: tree problems with divide & conquer", [
                        art("Centroid Decomposition (Codeforces)", "https://codeforces.com/blog/entry/81707")
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
                    topic("Low-Latency DS: Lock-free queues, ring buffers, cache-line friendly layouts", [
                        art("Lock-Free Ring Buffer", "https://www.dpdk.org/blog/2016/09/06/packet-capture-buffering/"),
                        art("Cache Oblivious Algorithms", "https://en.wikipedia.org/wiki/Cache-oblivious_algorithm")
                    ]),
                    topic("C++ STL Internals: deque vs vector vs list, custom allocators, move semantics", [
                        art("C++ STL Complexity Guide", "https://en.cppreference.com/w/cpp/container")
                    ]),
                    topic("Order Book Implementation: Red-Black Tree / Sorted Map for bid/ask sides", [
                        art("Order Book Algorithms", "https://web.archive.org/web/20110219163448/http://howtohft.wordpress.com/2011/02/15/how-to-build-a-fast-limit-order-book/")
                    ]),
                    topic("Mathematical Algorithms: FFT, Convolution, Matrix Exponentiation for quantitative problems", [
                        art("FFT (CP Algorithms)", "https://cp-algorithms.com/algebra/fft.html"),
                        art("Matrix Exponentiation", "https://cp-algorithms.com/algebra/matrix-exp.html")
                    ]),
                    topic("Competitive Math: Number Theory (Sieve, Euler's Totient, CRT), Modular Inverse", [
                        art("Number Theory (CP Algorithms)", "https://cp-algorithms.com/algebra/sieve-of-eratosthenes.html")
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
                    topic("Graph Algorithms for AI: PageRank, Personalized Recommendations (GraphSage)", [
                        art("PageRank Algorithm", "https://en.wikipedia.org/wiki/PageRank"),
                        art("Graph Neural Networks Overview", "https://distill.pub/2021/gnn-intro/")
                    ]),
                    topic("Numerical Algorithms: Gradient Descent (vectorized), Newton's Method", [
                        art("Numerical Methods for ML", "https://www.deeplearningbook.org/contents/numerical.html")
                    ]),
                    topic("Geometric Algorithms: KD-Trees for nearest neighbor search, Ball Trees", [
                        art("KD-Tree Explained", "https://en.wikipedia.org/wiki/K-d_tree")
                    ]),
                    topic("Randomized Algorithms & Approximation: Bloom Filters, Count-Min Sketch, HyperLogLog", [
                        art("Probabilistic DS (Real Python)", "https://realpython.com/bloom-filters/"),
                        art("Count-Min Sketch", "https://florian.github.io/count-min-sketch/")
                    ]),
                    topic("Parallel CS: parallel prefix sums, parallel sorting (CUDA-relevant)", [
                        art("Parallel Algorithms for GPU", "https://developer.nvidia.com/blog/faster-parallel-reductions-kepler/")
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
                    topic("DS for Systems: Skip Lists (Redis), LSM Trees (RocksDB), B+Trees (PostgreSQL)", [
                        art("Skip Lists (Redis Internals)", "https://en.wikipedia.org/wiki/Skip_list"),
                        art("LSM Tree Explained", "https://www.scylladb.com/glossary/log-structured-merge-tree/")
                    ]),
                    topic("Consistent Hashing for distributed caches and load balancers", [
                        art("Consistent Hashing (Tom White)", "https://www.toptal.com/big-data/consistent-hashing")
                    ]),
                    topic("Bloom Filters for cache invalidation, Count-Min Sketch for rate limiting", [
                        art("Bloom Filters in Production", "https://llimllib.github.io/bloomfilter-tutorial/")
                    ]),
                    topic("Graph-based scheduling: Workflow DAGs (like Airflow scheduling algorithms)", [
                        art("Topological Sort in Job Scheduling", "https://www.geeksforgeeks.org/topological-sorting/")
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
                    topic("CP Mindset: virtual contests, upsolving, reading editorials", [
                        vid("How to Get Better at Competitive Programming", "https://www.youtube.com/watch?v=bVKHRtafgPc", "Errichto"),
                        art("Codeforces Problem Rating System", "https://codeforces.com/blog/entry/62389")
                    ]),
                    topic("Greedy Algorithms & Exchange Arguments: Activity Selection, Huffman Coding", [
                        vid("Greedy Algorithm Proofs", "https://www.youtube.com/watch?v=HzeK7g8cD0Y", "Errichto"),
                        art("Greedy Algorithms (CP Algorithms)", "https://cp-algorithms.com/")
                    ]),
                    topic("Divide & Conquer: Closest Pair of Points, Karatsuba Multiplication", [
                        art("Closest Pair of Points", "https://cp-algorithms.com/geometry/nearest_points.html")
                    ]),
                    topic("Geometry Algorithms: Convex Hull (Graham Scan/Jarvis March), Line Intersection", [
                        art("Computational Geometry (CP Algorithms)", "https://cp-algorithms.com/geometry/")
                    ]),
                    topic("Math: Inclusion-Exclusion Principle, Catalan Numbers, Burnside's Lemma", [
                        art("Combinatorics (CP Algorithms)", "https://cp-algorithms.com/combinatorics/")
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
                    topic("Meta Facebook Patterns: BFS shortest path, Graph DFS, 2-pointer, DP on strings", [
                        art("Meta Coding Interview Prep", "https://leetcode.com/company/facebook/")
                    ]),
                    topic("Google Patterns: Combinatorial search + pruning, graph algorithms, DP on trees", [
                        art("Google Interview Prep Guide", "https://leetcode.com/company/google/"),
                        art("Google SWE Interview Handbook", "https://google.github.io/eng-practices/")
                    ]),
                    topic("Amazon Patterns: DP, heap, sorting, OOP leadership principles alignment", [
                        art("Amazon Coding Interview Prep", "https://leetcode.com/company/amazon/")
                    ]),
                    topic("Microsoft Patterns: Tree traversals, string manipulation, graph BFS", [
                        art("Microsoft Interview Questions", "https://leetcode.com/company/microsoft/")
                    ]),
                    topic("Apple / Netflix Patterns: System design + DS combined questions", [
                        art("Apple Interview Questions", "https://leetcode.com/company/apple/")
                    ]),
                    topic("NeetCode 150 ΓÇö The Gold Standard Interview Problem Set", [
                        art("NeetCode 150 Roadmap", "https://neetcode.io/roadmap"),
                        vid("NeetCode 150 Full Playlist", "https://www.youtube.com/watch?v=jgQjes7MgTM", "NeetCode")
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
                    topic("DS + System Design Combo: design Twitter, YouTube, Uber with DS focus", [
                        art("System Design Primer", "https://github.com/donnemartin/system-design-primer"),
                        vid("System Design Interview Course", "https://www.youtube.com/watch?v=i53Gi_K3o7I", "ByteByteGo")
                    ]),
                    topic("DS for Scale: consistent hashing, bloom filters, skip lists, LSM trees", [
                        vid("DS Used in Real Systems", "https://www.youtube.com/watch?v=H5JiIPilxIo", "ByteByteGo")
                    ]),
                    topic("Concurrency & Locking: mutex, semaphore, lock-free DS (CAS)", [
                        art("Concurrency Patterns", "https://jopdev.com/posts/concurrency-patterns/")
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
                    topic("Mock Interview Etiquette: think aloud, clarify constraints, test edge cases", [
                        art("How to Communicate in a Coding Interview", "https://www.techinterviewhandbook.org/coding-interview-techniques/")
                    ]),
                    topic("Time Management in Interviews: 5-min plan, 20-min code, 5-min test strategy", [
                        art("Tech Interview Handbook", "https://www.techinterviewhandbook.org/")
                    ]),
                    topic("Edge Cases: empty inputs, single element, overflow, negative numbers", [
                        art("Edge Cases to Always Check", "https://www.techinterviewhandbook.org/coding-interview-cheatsheet/")
                    ]),
                    topic("Negotiation & Offer Evaluation: BATNA, competing offers, stock vs salary", [
                        art("Levels.fyi Offer Comparison", "https://www.levels.fyi/")
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
const campusxAiPlan: Phase[] = [
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
                        vid("Decorators & Generators", "https://www.youtube.com/watch?v=FsAPt_9Bf3U", "Corey Schafer")
                    ]),
                    topic("Math: Linear Algebra & Calculus", [
                        playlist("CampusX Math for ML", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbTfJ_M1L1R7QxW7P0xY2a4", "CampusX"),
                        art("Essence of Linear Algebra", "https://www.3blue1brown.com/topics/linear-algebra", "3Blue1Brown")
                    ]),
                    topic("Probability & Statistics for ML", [
                        playlist("CampusX Statistics for ML", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbTfJ_M1L1R7QxW7P0xY2a4", "CampusX"),
                        vid("Descriptive vs Inferential Stats", "https://www.youtube.com/watch?v=wXWz9BwTta8", "StatQuest")
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
                        doc("Pandas Official Docs", "https://pandas.pydata.org/docs/")
                    ]),
                    topic("Data Visualization (Matplotlib/Seaborn)", [
                        vid("Matplotlib Crash Course", "https://www.youtube.com/watch?v=3Xc3CA655Ls", "Traversy Media"),
                        vid("Seaborn Tutorial", "https://www.youtube.com/watch?v=6GUO8qrZEXQ", "Derek Banas")
                    ]),
                    topic("Feature Selection & Engineering", [
                        playlist("CampusX Feature Engineering", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvbr7zKYQuBfsVkjoLcUaPtE", "CampusX"),
                        art("Feature Engineering Best Practices", "https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/", "Machine Learning Mastery")
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
                        vid("CampusX Linear Regression", "https://www.youtube.com/watch?v=VxzjcJ54XQc", "CampusX")
                    ]),
                    topic("Tree-Based Models: Decision Trees to XGBoost", [
                        vid("Decision Trees", "https://www.youtube.com/watch?v=7VeUPuVNHT8", "StatQuest"),
                        vid("Random Forests", "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ", "StatQuest"),
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
                        vid("Neural Networks from Scratch", "https://www.youtube.com/watch?v=VMj-3S1tku0", "Andrej Karpathy")
                    ]),
                    topic("PyTorch Fundamentals", [
                        playlist("PyTorch for Deep Learning", "https://www.youtube.com/playlist?list=PLqnslRFeH2UrcDBWF5mfPGpqQDSta6VK4", "Patrick Loeber"),
                        doc("PyTorch Official Tutorials", "https://pytorch.org/tutorials/")
                    ]),
                    topic("Optimizers & Loss Functions", [
                        vid("Optimizers Explained", "https://www.youtube.com/watch?v=mdKjMPmcWjY", "StatQuest"),
                        vid("CampusX SGD/Adam", "https://www.youtube.com/watch?v=1b1fW_RIT2s", "CampusX")
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
                        art("Transfer Learning Guide", "https://cs231n.github.io/transfer-learning/", "Stanford CS231n")
                    ]),
                    topic("RNNs, LSTMs & GRUs", [
                        vid("RNNs Explained", "https://www.youtube.com/watch?v=AsNTP8Kwu80", "StatQuest"),
                        vid("LSTMs Explained", "https://www.youtube.com/watch?v=YCzL96nL7j0", "StatQuest"),
                        vid("CampusX LSTMs", "https://www.youtube.com/watch?v=x-j2O_z2598", "CampusX")
                    ]),
                    topic("Word Embeddings (Word2Vec, GloVe)", [
                        vid("Word Embeddings", "https://www.youtube.com/watch?v=5MaWmXwxFNQ", "StatQuest"),
                        vid("CampusX Word2Vec", "https://www.youtube.com/watch?v=ZMTzG1Yw_nI", "CampusX")
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
                        vid("CampusX Transformers", "https://www.youtube.com/watch?v=5zCGnIfBmlM", "CampusX")
                    ]),
                    topic("Hugging Face Transformers Library", [
                        playlist("Complete NLP Playlist (Vijayraja)", "https://www.youtube.com/playlist?list=PLZru3N79Wp1AsG_S9ySjO2P8370uGv_L7", "Vizuara AI"),
                        playlist("Hugging Face Course", "https://www.youtube.com/playlist?list=PLo2EIpI_JMQvWfQndUesu0nPBAtZ9gP1o", "Hugging Face")
                    ]),
                    topic("Fine-Tuning BERT / InstructGPT", [
                        vid("Fine-Tune BERT", "https://www.youtube.com/watch?v=GSt00_-0ncQ", "Venelin Valkov"),
                        doc("HuggingFace Fine-Tuning", "https://huggingface.co/docs/transformers/training")
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
                        doc("LangChain Docs", "https://python.langchain.com/docs/get_started/introduction")
                    ]),
                    topic("Vector DBs (Chroma/Pinecone)", [
                        vid("Vector Databases Explained", "https://www.youtube.com/watch?v=klTvEwg3oJ4", "Fireship"),
                        vid("ChromaDB Tutorial", "https://www.youtube.com/watch?v=3yPBVii7lzI", "pixegami")
                    ]),
                    topic("Building RAG Pipelines", [
                        vid("CampusX Complete RAG", "https://www.youtube.com/watch?v=wd7TZ4e1mN0", "CampusX"),
                        vid("Advanced RAG", "https://www.youtube.com/watch?v=T-D1OfcDW1M", "LangChain")
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
                        vid("QLoRA Llama-3 Fine-tuning", "https://www.youtube.com/watch?v=XpoKB3usmKc", "Trelis Research")
                    ]),
                    topic("Building AI Agents with LangGraph", [
                        vid("LangGraph Full Course", "https://www.youtube.com/watch?v=Tdn9GZ4yF6g", "LangChain"),
                        doc("LangGraph Documentation", "https://langchain-ai.github.io/langgraph/")
                    ]),
                    topic("Multi-Agent Frameworks (CrewAI)", [
                        vid("CrewAI Tutorial", "https://www.youtube.com/watch?v=sPzc6hMg7So", "Matt Williams"),
                        doc("CrewAI Docs", "https://docs.crewai.com/")
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
                        vid("Deploy ML Models Docker", "https://www.youtube.com/watch?v=h5wLuVDr0oc", "Patrick Loeber")
                    ]),
                    topic("MLflow Experiment Tracking", [
                        vid("MLflow Tutorial", "https://www.youtube.com/watch?v=ksYIVDue8ak", "Krish Naik"),
                        doc("MLflow Docs", "https://mlflow.org/docs/latest/index.html")
                    ]),
                    topic("AWS Deployment & GitHub Actions", [
                        vid("AWS EC2 Deploy CI/CD", "https://www.youtube.com/watch?v=8TlukLu11Yo", "TechWorld with Nana"),
                        doc("GitHub Actions Docs", "https://docs.github.com/en/actions")
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
                        vid("ML System Design Interview", "https://www.youtube.com/watch?v=pYs1lNd-XbI", "Stanford MLSys")
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


const vizuaraMLPlan: Phase[] = [
    {
        id: "vzml-p1",
        title: "Phase 1: Math & Stats for ML Mastery",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "vzml-m1.1",
                title: "Mathematical Foundations",
                weeks: "Week 1-2",
                topics: [
                    topic("Calculus & Linear Algebra", [
                        vid("Calculus for ML (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbW-0X9IeR4pGgU2T8Zsc2Q"),
                        vid("Linear Algebra (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYhp0_L3f_J4U4NfEtoV0Mh"),
                        vid("Math for AI (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    topic("Probability & Optimization", [
                        vid("Stats & Prob (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QzC67Y_S_TaqCOuuvY97"),
                        vid("Optimization Theory (CampusX)", "https://www.youtube.com/watch?v=A6FiCD0796E"),
                        doc("Math for ML Book", "https://mml-book.github.io/")
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
        id: "vzml-p2",
        title: "Phase 2: Advanced Machine Learning",
        weeks: "Weeks 5-8",
        modules: [
            {
                id: "vzml-m2.1",
                title: "Supervised Learning Mastery",
                weeks: "Week 5-6",
                topics: [
                    topic("Regression & Classification", [
                        vid("ML Full Course (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPBTrWtJkn3wKukhTA9MSwU"),
                        vid("100 Days of ML (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_Rmvb15A7VfX7pXUoP6tJ4vR0k"),
                        vid("Advanced ML (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    topic("SVM & Decision Trees", [
                        vid("SVM Explained (CampusX)", "https://www.youtube.com/watch?v=T9UcK-Jnhi0"),
                        doc("Elements of Statistical Learning", "https://hastie.su.domains/ElemStatLearn/"),
                        art("Decision Tree Guide", "https://towardsdatascience.com/decision-trees-in-machine-learning-641b9c4e8052")
                    ])
                ],
                project: {
                    title: "End-to-End Prediction Pipeline",
                    description: ["Cross-validation strategies", "Hyperparameter tuning using Optuna"],
                    outcomes: ["Industrial ML Skills"]
                }
            }
        ]
    }
];

const vizuaraDLPlan: Phase[] = [
    {
        id: "vzdl-p1",
        title: "Phase 1: Deep Learning Foundations",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "vzdl-m1.1",
                title: "Neural Networks from Scratch",
                weeks: "Week 1-2",
                topics: [
                    topic("ANN Architectures", [
                        vid("Deep Learning (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvYuZauAoOxyczvOAnAnT4Yx"),
                        vid("DL Masterclass (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU7TKgz8SAInSno_Y6G0z"),
                        vid("NN Basics (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    topic("Backpropagation Mechanics", [
                        vid("Calculus of Backprop (CampusX)", "https://www.youtube.com/watch?v=IHZwWFHWa-w"),
                        doc("Deep Learning Book (Goodfellow)", "https://www.deeplearningbook.org/")
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
        id: "vzdl-p2",
        title: "Phase 2: CV & NLP Architectures",
        weeks: "Weeks 5-8",
        modules: [
            {
                id: "vzdl-m2.1",
                title: "Computer Vision & CNNs",
                weeks: "Week 5-6",
                topics: [
                    topic("CNN Fundamentals", [
                        vid("Computer Vision (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVNn7G-Gsh386Vd_5E2-i0G0"),
                        vid("Object Detection (CampusX)", "https://www.youtube.com/watch?v=Z7nQ2y-bI_k"),
                        vid("ViT Deep Dive (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    topic("NLP: RNNs to LSTMs", [
                        vid("NLP with DL (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B"),
                        doc("Paper: Attention is All You Need", "https://arxiv.org/abs/1706.03762")
                    ])
                ],
                project: {
                    title: "Advanced Vision App",
                    description: ["Real-time segmentation", "Transfer learning with ResNet"],
                    outcomes: ["Specialized DL Engineer"]
                }
            }
        ]
    }
];

const vizuaraGenAIPlan: Phase[] = [
    {
        id: "vzgen-p1",
        title: "Phase 1: LLM Architecture & Build",
        weeks: "Weeks 1-4",
        modules: [
            {
                id: "vzgen-m1.1",
                title: "Transformers & LLMs",
                weeks: "Week 1-2",
                topics: [
                    topic("Transformer Internals", [
                        vid("Build LLM from Scratch (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        vid("Generative AI (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B"),
                        vid("Transformers (CampusX)", "https://www.youtube.com/watch?v=zduSFxRajkE")
                    ]),
                    topic("Pre-training Pipelines", [
                        vid("LLM Pipelines (CampusX)", "https://www.youtube.com/watch?v=uRQH2CFvedY"),
                        doc("Llama-3 Tech Report", "https://arxiv.org/abs/2407.21783")
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
        id: "vzgen-p2",
        title: "Phase 2: RAG, Agents & Fine-tuning",
        weeks: "Weeks 5-8",
        modules: [
            {
                id: "vzgen-m2.1",
                title: "RAG & Agent Workflows",
                weeks: "Week 5-6",
                topics: [
                    topic("Advanced RAG & Vector DBs", [
                        vid("RAG Playlist (Krish Naik)", "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfB2tYdCOm9GInX8uCST1B"),
                        vid("AI Agents (CampusX)", "https://www.youtube.com/watch?v=v2gD8BHOaX4"),
                        vid("Agent Planning (Vizuara)", "https://www.youtube.com/@VizuaraAI")
                    ]),
                    topic("Fine-tuning: LoRA/QLoRA", [
                        vid("PEFT (Vizuara)", "https://www.youtube.com/@VizuaraAI"),
                        doc("Paper: LoRA", "https://arxiv.org/abs/2106.09685")
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

export const allLearningPlans: LearningPlan[] = [
    {
        id: "vizuara-ml",
        name: "Vizuara ML Masterclass",
        description: "Math Foundations ΓÇö Classical ML ΓÇö Industrial Data Science",
        icon: "brain",
        color: "blue",
        phases: vizuaraMLPlan
    },
    {
        id: "vizuara-dl",
        name: "Vizuara Deep Learning",
        description: "Neural Networks from Scratch ΓÇö CNNs ΓÇö RNNs ΓÇö CV mastery",
        icon: "cpu",
        color: "emerald",
        phases: vizuaraDLPlan
    },
    {
        id: "vizuara-genai",
        name: "Vizuara Generative AI",
        description: "Transformers ΓÇö LLM from Scratch ΓÇö RAG ΓÇö Agentic Workflows",
        icon: "sparkles",
        color: "rose",
        phases: vizuaraGenAIPlan
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
        name: "Ultimate 5D Parallelism",
        description: "Distributed LLM training from scratch: GPU Hardware ΓåÆ Data ΓåÆ Tensor ΓåÆ Pipeline ΓåÆ ZeRO ΓåÆ 5D",
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
    }
];

// Keep backward compatibility
export const learningPlan = genaiPlan;

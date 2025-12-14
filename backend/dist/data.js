"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.learningPlan = exports.allLearningPlans = void 0;
// Enhanced helper - supports video, doc, article, playlist, channel
const topic = (name, resources) => ({ name, resources });
// Quick helpers
const vid = (title, url, author) => ({ type: 'video', title, url, author });
const doc = (title, url) => ({ type: 'doc', title, url });
const art = (title, url, author) => ({ type: 'article', title, url, author });
const playlist = (title, url, author) => ({ type: 'playlist', title, url, author });
const channel = (name, url) => ({ type: 'channel', title: name, url });
// Backward compatible helper
const t = (name, videoUrl, docUrl) => ({
    name,
    resources: [
        ...(videoUrl ? [{ type: 'video', title: 'Watch Tutorial', url: videoUrl, duration: '20min' }] : []),
        ...(docUrl ? [{ type: 'doc', title: 'Documentation', url: docUrl }] : []),
    ]
});
// ===== PLAN 1: GENAI ENGINEER PATH =====
const genaiPlan = [
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
                    t("Input Validation (Zod/Joi)", "https://www.youtube.com/watch?v=L6BE-U3oy80", "https://zod.dev/")
                ],
                project: {
                    title: "High-Performance File Processing Service",
                    description: ["Build a service that processes large files", "Implement streaming for memory efficiency", "Add worker threads for CPU-intensive operations"],
                    outcomes: ["Master async patterns", "Understand Node.js internals"]
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
                    t("Saga Pattern for Transactions", "https://www.youtube.com/watch?v=xDuwrtwYHu8")
                ],
                project: {
                    title: "Multi-Service Authentication System",
                    description: ["Auth Service with JWT", "API Gateway with rate limiting", "Distributed tracing"],
                    outcomes: ["Microservices architecture", "Distributed systems"]
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
                    t("Chunking Strategies", "https://www.youtube.com/watch?v=8OJC21T2SL4")
                ],
                project: {
                    title: "Semantic Search Engine",
                    description: ["Document ingestion pipeline", "Embeddings with OpenAI", "Hybrid search"],
                    outcomes: ["Vector embeddings mastery", "Production RAG systems"]
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
                    t("Function Calling / Tools", "https://www.youtube.com/watch?v=0-zlUy7VUjg")
                ],
                project: {
                    title: "AI Content Assistant",
                    description: ["Multi-model LLM layer", "Streaming responses", "Function calling"],
                    outcomes: ["Prompt engineering mastery"]
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
                    t("Human-in-the-loop", "https://www.youtube.com/watch?v=9BPCV5TYWnk")
                ],
                project: {
                    title: "AI Helpdesk Agent",
                    description: ["Multi-step ticket resolution", "Tool calling", "Workflow orchestration"],
                    outcomes: ["Autonomous AI agents"]
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
                    t("MongoDB Aggregation", "https://www.youtube.com/watch?v=A3jvoE0jGdE", "https://www.mongodb.com/docs/")
                ],
                project: {
                    title: "E-Commerce Database Design",
                    description: ["Complex schema design", "Optimized queries", "Caching layer with Redis"],
                    outcomes: ["Database optimization", "Scalable data layer"]
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
                    t("Saga Pattern", "https://www.youtube.com/watch?v=xDuwrtwYHu8")
                ],
                project: {
                    title: "Distributed Key-Value Store",
                    description: ["Simple distributed storage", "Replication", "Consistency guarantees"],
                    outcomes: ["Distributed systems understanding"]
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
                        doc("Express Routing", "https://expressjs.com/en/guide/routing.html")
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
                    outcomes: ["System design skills", "Architecture documentation"]
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
                    topic("Rate Limiter (In-memory → Redis)", [
                        vid("Rate Limiting Algorithms", "https://www.youtube.com/watch?v=FU4WlwfS3G0", "ByteByteGo"),
                        art("Rate Limiting Strategies", "https://blog.cloudflare.com/counting-things-a-lot-of-different-things/", "Cloudflare")
                    ])
                ],
                project: {
                    title: "Simple API Gateway v1",
                    description: ["HTTP server with routing", "Proxy to backend services", "Logging and auth middleware", "Basic rate limiting"],
                    outcomes: ["Core gateway mechanics", "Middleware patterns"]
                }
            },
            {
                id: "gw-m2.2",
                title: "Advanced Gateway Features",
                weeks: "Week 4",
                topics: [
                    topic("Caching Layer (node-cache → Redis)", [
                        vid("Redis Caching", "https://www.youtube.com/watch?v=ONSD-tOpnp0", "Traversy Media"),
                        doc("Redis Docs", "https://redis.io/docs/")
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
// ===== EXPORT ALL PLANS =====
exports.allLearningPlans = [
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
    }
];
// Keep backward compatibility
exports.learningPlan = genaiPlan;

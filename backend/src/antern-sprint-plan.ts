import { LearningPlan, Phase, TopicResource, Project } from './data';
import { topic, doc, vid } from './data';

export const anternSprintPlan: LearningPlan = {
    id: "antern-sprint",
    name: "Antern AI Placement Sprint",
    description: "An 18-week implementation program designed to transform ML practitioners into hired professionals.",
    icon: "rocket",
    color: "violet",
    phases: [
        {
            id: "as-p0",
            title: "Phase 0: Foundations",
            weeks: "Weeks 1-2",
            modules: [
                {
                    id: "as-m0.1",
                    title: "Week 1: Machine Learning Foundations",
                    weeks: "Week 1",
                    topics: [
                        topic("Saturday Session: Regression & Supervised Learning", [
                            vid("Linear regression from scratch, cost function, gradient descent, Scikit-learn pipeline", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: K-Means & Unsupervised Learning", [
                            vid("K-Means from scratch, elbow method, customer segmentation mini-exercise", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Linear regression notebook",
                            "K-Means notebook",
                            "Customer segmentation mini-project",
                            "LinkedIn + SBL setup"
                        ],
                        outcomes: ["Machine Learning Basics", "Supervised and Unsupervised Models"]
                    }
                },
                {
                    id: "as-m0.2",
                    title: "Week 2: GenAI Foundations + EDA",
                    weeks: "Week 2",
                    topics: [
                        topic("Saturday Session: GenAI Foundations & Local LLMs", [
                            vid("Prompt engineering, LlamaIndex basics, Streamlit for ML apps", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: EDA, Business Thinking & Sprint Readiness", [
                            vid("Hypothesis-driven EDA, data cleaning pipelines, sprint mindset", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "LlamaIndex basic implementation",
                            "Streamlit app for EDA",
                            "Business case for chosen niche"
                        ],
                        outcomes: ["Local LLM Setup", "Exploratory Data Analysis"]
                    }
                }
            ]
        },
        {
            id: "as-p1",
            title: "Phase 1: Build The Offer",
            weeks: "Weeks 3-5",
            modules: [
                {
                    id: "as-m1.1",
                    title: "Week 3: Position Yourself as an Irresistible Offer",
                    weeks: "Week 3",
                    topics: [
                        topic("Saturday Session: Build Yourself as an Irresistible Offer", [
                            vid("Niche selection, authority building, offer stack", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: ML System Design Masterclass", [
                            vid("Scalable ML architectures, production bottlenecks, latency vs. accuracy", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Niche selection document",
                            "Authority bridge (LinkedIn/Resume)",
                            "3 posts published"
                        ],
                        outcomes: ["Niche Identification", "ML System Design Basics"]
                    }
                },
                {
                    id: "as-m1.2",
                    title: "Week 4: Package Your Offer",
                    weeks: "Week 4",
                    topics: [
                        topic("Saturday Session: Package Your Offer", [
                            vid("Service vs. Productized service, pricing your skills, outreach scripts", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: MLOps Fundamentals", [
                            vid("Experiment tracking (Weights & Biases), model versioning, deployment basics", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Offer document (The 'Big Domino')",
                            "Outreach script draft",
                            "7 posts published"
                        ],
                        outcomes: ["Offer Packaging", "MLOps Introduction"]
                    }
                },
                {
                    id: "as-m1.3",
                    title: "Week 5: Name Your Offer & Build Guarantee",
                    weeks: "Week 5",
                    topics: [
                        topic("Saturday Session: Name Your Offer & Build Guarantee", [
                            vid("Risk reversal, naming frameworks, conversion-focused landing pages", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Project 1 — OpenClaw AI Agent", [
                            vid("Autonomous agents, tool-use in LLMs, OpenClaw architecture", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 1: OpenClaw AI Agent",
                        description: [
                            "Autonomous system for LinkedIn automation",
                            "High-converting offer name",
                            "Guarantee structure",
                            "11 posts published"
                        ],
                        outcomes: ["Agentic AI Implementation", "Offer Guarantee"]
                    }
                }
            ]
        },
        {
            id: "as-p2",
            title: "Phase 2: Generate Leads",
            weeks: "Weeks 6-8",
            modules: [
                {
                    id: "as-m2.1",
                    title: "Week 6: LinkedIn Authority & Lead Gen System",
                    weeks: "Week 6",
                    topics: [
                        topic("Saturday Session: LinkedIn Authority & Lead Gen System", [
                            vid("Profile SEO, content flywheels, inbound lead generation", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Project 2 — Supervised Learning", [
                            vid("Churn prediction or demand forecasting for real-world business data", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 2: Predictive Model",
                        description: [
                            "Supervised learning (Churn/Demand forecasting)",
                            "LinkedIn Profile 2.0",
                            "Content calendar (30 days)",
                            "Project 2 notebook & report",
                            "13 posts published"
                        ],
                        outcomes: ["Inbound Lead Gen", "Supervised ML Application"]
                    }
                },
                {
                    id: "as-m2.2",
                    title: "Week 7: Outreach Mastery",
                    weeks: "Week 7",
                    topics: [
                        topic("Saturday Session: Outreach: 30% Reply Rates", [
                            vid("Personalized DMs, Loom videos, follow-up sequences", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Project 3 — Unsupervised Learning", [
                            vid("Advanced customer segmentation clustering pipeline", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 3: Customer Segmentation",
                        description: [
                            "Unsupervised learning clustering pipeline",
                            "Outreach tracker (50+ leads)",
                            "3 Loom videos sent",
                            "Project 3 dashboard",
                            "15 posts published"
                        ],
                        outcomes: ["Outreach Techniques", "Unsupervised ML Pipeline"]
                    }
                },
                {
                    id: "as-m2.3",
                    title: "Week 8: Multi-Channel Outreach",
                    weeks: "Week 8",
                    topics: [
                        topic("Saturday Session: Cold Email & Multi-Channel Outreach", [
                            vid("Instantly.ai, Apollo.io, email deliverability, multi-touch sequences", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Project 4 — EDA Mastery", [
                            vid("Hypothesis-driven analysis on high-dimensional datasets", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 4: EDA Mastery",
                        description: [
                            "Hypothesis-driven analysis on complex datasets",
                            "Cold email campaign live",
                            "Apollo list (200+ leads)",
                            "Project 4 technical blog post",
                            "17 posts published"
                        ],
                        outcomes: ["Multi-Channel Campaigns", "Advanced EDA"]
                    }
                }
            ]
        },
        {
            id: "as-p3",
            title: "Phase 3: Close Deals",
            weeks: "Weeks 9-10",
            modules: [
                {
                    id: "as-m3.1",
                    title: "Week 9: The Sales Process for Technical Folks",
                    weeks: "Week 9",
                    topics: [
                        topic("Saturday Session: Sales Conversations & Closing", [
                            vid("Discovery calls, handling objections, pricing negotiation", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Project 5 — GenAI Hybrid System", [
                            vid("3-tier classifier using LLMs + classical ML", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 5: GenAI Hybrid System",
                        description: [
                            "LLMs + Classical ML 3-tier classifier",
                            "Sales script customized",
                            "2 discovery calls booked",
                            "Project 5 code & documentation",
                            "19 posts published"
                        ],
                        outcomes: ["Sales Conversion", "Hybrid GenAI Architectures"]
                    }
                },
                {
                    id: "as-m3.2",
                    title: "Week 10: Proposal & Contract Mastery",
                    weeks: "Week 10",
                    topics: [
                        topic("Saturday Session: High-Ticket Proposals", [
                            vid("Pitch decks, contract law for freelancers, SOW (Statement of Work)", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Project 6 — RAG System", [
                            vid("Vector databases (Pinecone/Weaviate), document parsing, RAG evaluation", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 6: RAG System",
                        description: [
                            "Vector DB integration and document Q&A",
                            "Pitch deck ready",
                            "SOW template",
                            "Project 6 live demo",
                            "21 posts published"
                        ],
                        outcomes: ["Proposal Creation", "RAG Systems"]
                    }
                }
            ]
        },
        {
            id: "as-p4",
            title: "Phase 4: Job + Income Sprint",
            weeks: "Weeks 11-18",
            modules: [
                {
                    id: "as-m4.1",
                    title: "Week 11: MLOps & Self-Improving Systems",
                    weeks: "Week 11",
                    topics: [
                        topic("Saturday Session: Project 7 — MLOps: Kaggle to Production", [
                            vid("Docker, CI/CD for ML, cloud deployment (AWS/GCP)", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Self-Improving Content Engine (OpenClaw)", [
                            vid("Automating LinkedIn content with OpenClaw", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Project 7: MLOps System",
                        description: [
                            "Kaggle to Production (Docker/CI/CD/Cloud)",
                            "Project 7 deployed on cloud",
                            "OpenClaw content bot active",
                            "23 posts published"
                        ],
                        outcomes: ["End-to-End MLOps", "Content Automation"]
                    }
                },
                {
                    id: "as-m4.2",
                    title: "Week 12: Advanced GenAI — Fine-Tuning",
                    weeks: "Week 12",
                    topics: [
                        topic("Saturday Session: Fine-tuning Llama-3", [
                            vid("LoRA, QLoRA, dataset preparation, evaluation metrics", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Sprint Review & Pivot", [
                            vid("Performance tracking, doubling down on what works", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Fine-tuned model weights",
                            "Evaluation report",
                            "25 posts published"
                        ],
                        outcomes: ["Model Fine-Tuning", "Sprint Analytics"]
                    }
                },
                {
                    id: "as-m4.3",
                    title: "Week 13: Multi-Agent Systems",
                    weeks: "Week 13",
                    topics: [
                        topic("Saturday Session: Multi-Agent Systems", [
                            vid("CrewAI/AutoGPT, Agent orchestration, task decomposition, memory management", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Technical Interview Blitz", [
                            vid("Live coding rounds, take-home assignments, system design", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Multi-agent workflow demo",
                            "Take-home assignment completed",
                            "27 posts published"
                        ],
                        outcomes: ["Multi-Agent Architecture", "Technical Interviews"]
                    }
                },
                {
                    id: "as-m4.4",
                    title: "Week 14: Productionizing Models",
                    weeks: "Week 14",
                    topics: [
                        topic("Saturday Session: Productionizing Models with Docker & AWS", [
                            vid("ECS, Lambda, API Gateway, monitoring (Prometheus/Grafana)", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Behavioral Interview Mastery", [
                            vid("STAR method, culture fit, founder-level conversations", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Production API live",
                            "Behavioral interview stories",
                            "29 posts published"
                        ],
                        outcomes: ["Cloud Production", "Behavioral Preparation"]
                    }
                },
                {
                    id: "as-m4.5",
                    title: "Week 15: Offer Strategy & Negotiation",
                    weeks: "Week 15",
                    topics: [
                        topic("Saturday Session: Offer Strategy + Negotiation Prep", [
                            vid("Salary benchmarking, counter-offer scripts, multi-offer strategy", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Scaling Your Service", [
                            vid("From freelancer to agency, hiring your first VA", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Salary research doc",
                            "Negotiation script",
                            "31 posts published"
                        ],
                        outcomes: ["Offer Negotiation", "Service Scaling"]
                    }
                },
                {
                    id: "as-m4.6",
                    title: "Week 16: Rapid Prototyping for Contracts",
                    weeks: "Week 16",
                    topics: [
                        topic("Saturday Session: 3 Income Paths Active", [
                            vid("Job, Freelance, and Productized Service management", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Rapid Prototyping for Contract Bids", [
                            vid("Building 90-min demos to win contracts", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "90-min demo for client",
                            "Contract template live",
                            "33 posts published"
                        ],
                        outcomes: ["Income Path Management", "Rapid Demos"]
                    }
                },
                {
                    id: "as-m4.7",
                    title: "Week 17: Warm Network Activation",
                    weeks: "Week 17",
                    topics: [
                        topic("Saturday Session: Warm Network Activation + Final Technical Prep", [
                            vid("Referral requests, alumni intros, Ayush's direct network", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: Final Portfolio Handoff", [
                            vid("All 7 projects walkthrough-ready, GitHub cleanup", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "10+ referral requests sent",
                            "All 7 projects polished",
                            "35 posts published"
                        ],
                        outcomes: ["Network Activation", "Portfolio Completion"]
                    }
                },
                {
                    id: "as-m4.8",
                    title: "Week 18: Graduation",
                    weeks: "Week 18",
                    topics: [
                        topic("Saturday Session: Graduation & Multi-Income Strategy", [
                            vid("90-day plan for new role, content engine autonomy", "https://sprint.antern.co/")
                        ]),
                        topic("Sunday Session: The Journey Ahead", [
                            vid("Alumni network, recurring revenue targets", "https://sprint.antern.co/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Offer accepted OR 5+ active conversations",
                            "90-day plan document",
                            "Final portfolio live",
                            "37+ posts published"
                        ],
                        outcomes: ["Graduation", "Career Placement"]
                    }
                }
            ]
        }
    ]
};

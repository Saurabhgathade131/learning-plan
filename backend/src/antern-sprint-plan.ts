import { LearningPlan, Phase, TopicResource, Project } from './data';
import { topic, doc, vid, art, course } from './data';

export const anternSprintPlan: LearningPlan = {
    id: "antern-sprint",
    name: "Antern AI Placement Sprint",
    description: "An 18-week immersive placement sprint combining high-end technical ML/GenAI skills with elite freelance/career progression strategies.",
    icon: "rocket",
    color: "violet",
    phases: [
        {
            id: "as-week1",
            title: "Week 1: Machine Learning Foundations",
            weeks: "Week 1",
            modules: [
                {
                    id: "m-w1",
                    title: "Regression & Clustering",
                    weeks: "Week 1",
                    topics: [
                        topic("Linear Regression & Supervised Learning", [
                            vid("StatQuest: Linear Regression Models", "https://www.youtube.com/watch?v=nk2CQITm_eo", "StatQuest"),
                            vid("Gradient Descent Step-by-Step", "https://www.youtube.com/watch?v=sDv4f4s2SB8", "StatQuest"),
                            vid("Linear Regression from Scratch (CampusX)", "https://www.youtube.com/playlist?list=PLKnIA16_RmvbW-0X9IeR4pGgU2T8Zsc2Q", "CampusX"),
                            doc("Scikit-Learn: Generalized Linear Models", "https://scikit-learn.org/stable/modules/linear_model.html")
                        ]),
                        topic("K-Means & Unsupervised Learning", [
                            vid("StatQuest: K-means Clustering", "https://www.youtube.com/watch?v=4b5d3muPQmA", "StatQuest"),
                            vid("K-Means Mathematical Intuition", "https://www.youtube.com/watch?v=iNlZ3NdWMxc", "CampusX"),
                            art("Comprehensive Guide to K-Means Clustering", "https://towardsdatascience.com/understanding-k-means-clustering-in-machine-learning-6a6e67336aa1", "Towards Data Science")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Linear regression from-scratch notebook",
                            "Supervised ML pipeline notebook",
                            "Evaluation metrics cheat sheet",
                            "K-Means from-scratch notebook",
                            "Customer segmentation mini-project",
                            "Clustering evaluation guide"
                        ],
                        outcomes: ["Machine Learning Basics", "Supervised and Unsupervised Models"]
                    },
                    metrics: {
                        outreachActions: [
                            "Set up LinkedIn Premium",
                            "Install SBL automation tool",
                            "Import first lead list (200 leads)",
                            "Begin 25 manual connection requests/day",
                            "Start commenting on 10 posts/day"
                        ],
                        cumulativeMessages: 0,
                        hireProbability: 2,
                        keyDriver: "Foundations start — building fundamentals, no outreach traction yet"
                    }
                }
            ]
        },
        {
            id: "as-week2",
            title: "Week 2: GenAI Foundations + EDA",
            weeks: "Week 2",
            modules: [
                {
                    id: "m-w2",
                    title: "Local LLMs & Data Analysis",
                    weeks: "Week 2",
                    topics: [
                        topic("GenAI Foundations & Local LLMs", [
                            vid("Let's build GPT: from scratch", "https://www.youtube.com/watch?v=kCc8FmEb1nY", "Andrej Karpathy"),
                            doc("LlamaIndex Documentation", "https://docs.llamaindex.ai/en/stable/"),
                            doc("Streamlit API Reference", "https://docs.streamlit.io/"),
                            art("Running LLMs Locally with Ollama", "https://ollama.com/blog")
                        ]),
                        topic("Exploratory Data Analysis (EDA)", [
                            vid("Complete EDA Process", "https://www.youtube.com/watch?v=kLwNGMAKNwU", "Krish Naik"),
                            art("Hypothesis-Driven Data Analysis", "https://hbr.org/2021/04/how-to-make-better-decisions-with-data"),
                            doc("Pandas Profiling Guide", "https://pandas-profiling.ydata.ai/docs/master/index.html")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "GenAI concepts cheat sheet",
                            "API calling notebook (working examples)",
                            "GenAI vs ML decision framework",
                            "Simple GenAI tool built",
                            "EDA mini-report with recommendations",
                            "GitHub repo set up",
                            "All sprint tools installed"
                        ],
                        outcomes: ["Local LLM Setup", "Exploratory Data Analysis"]
                    },
                    metrics: {
                        outreachActions: [
                            "SBL automation running (40/day)",
                            "New lead list loaded (200)",
                            "25 manual messages sent",
                            "Comment on 10 posts daily",
                            "Sprint orientation: Week 3–18 plan clear"
                        ],
                        cumulativeMessages: 200,
                        hireProbability: 5,
                        keyDriver: "Foundations complete. GenAI vocab, EDA skills, all tools installed. Outreach pipeline warming."
                    }
                }
            ]
        },
        {
            id: "as-week3",
            title: "Week 3: Position Yourself as an Irresistible Offer",
            weeks: "Week 3",
            modules: [
                {
                    id: "m-w3",
                    title: "Offer Creation & ML Systems",
                    weeks: "Week 3",
                    topics: [
                        topic("Build an Irresistible Offer & Authority", [
                            vid("How to create a Grand Slam Offer", "https://www.youtube.com/watch?v=tIe-yQz7B-4", "Alex Hormozi"),
                            art("Niche Selection Framework", "https://www.indiehackers.com/post/how-to-choose-your-niche-in-5-simple-steps-a-framework-54a7c36d2c"),
                            art("Building Authority on LinkedIn", "https://blog.hubspot.com/marketing/linkedin-profile-tips")
                        ]),
                        topic("ML System Design Masterclass", [
                            vid("Machine Learning System Design Interview", "https://www.youtube.com/watch?v=xjcCqE5-hH4", "ByteByteGo"),
                            art("Designing Machine Learning Systems", "https://huyenchip.com/machine-learning-systems-design"),
                            doc("Google: Rules of Machine Learning", "https://developers.google.com/machine-learning/guides/rules-of-ml")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "LinkedIn profile \"Creator Mode\" on",
                            "Banner + Headline updated (V1)",
                            "5 \"Proof of Work\" posts scheduled",
                            "3 outreach scripts drafted",
                            "3 system designs practiced"
                        ],
                        outcomes: ["Niche Identification", "ML System Design Basics"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "SBL automation continues",
                            "25 manual messages/week",
                            "Comment on 10 posts daily",
                            "Weekly reflection on \"Offer Strength\""
                        ],
                        cumulativeMessages: 480,
                        hireProbability: 8,
                        keyDriver: "Positioning clear (jobs + consulting). System design vocabulary. Target markets identified."
                    }
                }
            ]
        },
        {
            id: "as-week4",
            title: "Week 4: Package Your Offer",
            weeks: "Week 4",
            modules: [
                {
                    id: "m-w4",
                    title: "Productization & MLOps",
                    weeks: "Week 4",
                    topics: [
                        topic("Packaging & Pricing Your Skills", [
                            vid("Productized Services vs Consulting", "https://www.youtube.com/watch?v=F0O5B8x9YjI"),
                            art("Value-Based Pricing Strategies", "https://stripe.com/resources/more/value-based-pricing"),
                            doc("Cold Outreach Scripts Repository", "https://woodpecker.co/blog/cold-email-templates/")
                        ]),
                        topic("MLOps Fundamentals", [
                            vid("Weights & Biases Crash Course", "https://www.youtube.com/watch?v=Y4zE-WzBfG4", "W&B"),
                            course("MLOps Specialization", "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops", "DeepLearning.AI"),
                            art("The MLOps Lifecycle Explained", "https://ml-ops.org/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Complete value stack (employment + consulting)",
                            "Bonuses list & scarcity plan",
                            "MLOps checklist completed",
                            "Deployment runbook template"
                        ],
                        outcomes: ["Offer Packaging", "MLOps Introduction"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "SBL automation continues",
                            "25 manual messages/week",
                            "Comment on 10 posts daily",
                            "First outreach to potential consulting clients"
                        ],
                        cumulativeMessages: 760,
                        hireProbability: 10,
                        keyDriver: "Value stack built. MLOps vocabulary = speak production. Dual offer (employer + client)."
                    }
                }
            ]
        },
        {
            id: "as-week5",
            title: "Week 5: Name Your Offer & Build Guarantee",
            weeks: "Week 5",
            modules: [
                {
                    id: "m-w5",
                    title: "Agentic AI & Guarantees",
                    weeks: "Week 5",
                    topics: [
                        topic("Risk Reversal & Naming Frameworks", [
                            vid("How To Write Landing Page Copy", "https://www.youtube.com/watch?v=1b-3R1_3B74"),
                            art("Risk Reversal: The Ultimate Sales Technique", "https://www.copyblogger.com/risk-reversal/"),
                            art("Naming your Product/Service", "https://firstround.com/review/the-framework-that-helps-you-name-your-startup-or-product-faster/")
                        ]),
                        topic("Autonomous Agents (OpenClaw Architecture)", [
                            vid("Building Multi-Agent Systems with CrewAI", "https://www.youtube.com/watch?v=sPzc6hMg7So"),
                            doc("LangGraph Official Documentation", "https://langchain-ai.github.io/langgraph/"),
                            art("The Anatomy of Autonomous Agents", "https://lilianweng.github.io/posts/2023-06-23-agent/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "LinkedIn profile fully optimized",
                            "Notion CRM tracking active",
                            "Content calendar created",
                            "Project 1 deployed (FastAPI + monitoring)",
                            "Rapid prototype demo ready"
                        ],
                        outcomes: ["Agentic AI Implementation", "Offer Guarantee Setup"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "LinkedIn profile now optimized (higher reply rates)",
                            "40 automated/day + 25 manual/week",
                            "First LinkedIn post published",
                            "First 3 consulting prospects identified"
                        ],
                        cumulativeMessages: 1040,
                        hireProbability: 15,
                        keyDriver: "Pitch sharp. OpenClaw agent running = unfair advantage. Consulting niches identified."
                    }
                }
            ]
        },
        {
            id: "as-week6",
            title: "Week 6: LinkedIn Authority & Lead Gen System",
            weeks: "Week 6",
            modules: [
                {
                    id: "m-w6",
                    title: "Inbound Leads & Predictive Modeling",
                    weeks: "Week 6",
                    topics: [
                        topic("LinkedIn Profile SEO & Content Flywheels", [
                            vid("Optimize LinkedIn Profile for SEO", "https://www.youtube.com/watch?v=wA5hXUeNq2Y"),
                            art("Building a Content Flywheel", "https://ahrefs.com/blog/content-flywheel/"),
                            art("Inbound Lead Generation Playbook", "https://blog.hubspot.com/marketing/inbound-lead-generation")
                        ]),
                        topic("Supervised Learning: Churn Prediction", [
                            vid("Customer Churn Prediction using Machine Learning", "https://www.youtube.com/watch?v=ocMd2loRfWE", "Krish Naik"),
                            doc("Kaggle: Telco Customer Churn Notebooks", "https://www.kaggle.com/datasets/blastchar/telco-customer-churn/code"),
                            art("A Guide to Time Series Demand Forecasting", "https://towardsdatascience.com/demand-forecasting-using-machine-learning-methods-8086208be140")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "LinkedIn profile fully optimized",
                            "Notion CRM tracking active",
                            "Content calendar created",
                            "Project 2 notebook & report deployed",
                            "Rapid prototype demo ready"
                        ],
                        outcomes: ["Inbound Lead Gen Mastery", "Supervised ML Application"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "LinkedIn profile now optimized (higher reply rates)",
                            "40 automated/day + 25 manual/week",
                            "First LinkedIn post published",
                            "First 3 consulting prospects identified"
                        ],
                        cumulativeMessages: 1400,
                        hireProbability: 20,
                        keyDriver: "LinkedIn optimized -> 2–3x reply rates. First deployed project. Content started."
                    }
                }
            ]
        },
        {
            id: "as-week7",
            title: "Week 7: Outreach Mastery",
            weeks: "Week 7",
            modules: [
                {
                    id: "m-w7",
                    title: "Advanced Outreach & Clustering",
                    weeks: "Week 7",
                    topics: [
                        topic("Personalized Outreach & Follow-ups", [
                            vid("How to write Cold DMs that get 30% replies", "https://www.youtube.com/watch?v=t5JvDqF1bZc"),
                            art("Using Loom for Asynchronous Sales", "https://www.loom.com/blog/video-prospecting"),
                            art("The Ultimate Follow-Up Strategy", "https://close.com/resources/follow-up-email/")
                        ]),
                        topic("Advanced Unsupervised Learning (Clustering)", [
                            vid("DBSCAN Clustering Clearly Explained", "https://www.youtube.com/watch?v=RDZUdRSDOok", "StatQuest"),
                            vid("Hierarchical Clustering Algorithm", "https://www.youtube.com/watch?v=7xHsRkOdVCE", "StatQuest"),
                            art("Customer Segmentation using RFM Analysis", "https://towardsdatascience.com/customer-segmentation-using-rfm-analysis-and-k-means-clustering-3e91d6c81045")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "SBL automation upgraded (30% formula)",
                            "800+ leads imported to date",
                            "Message sequences A/B tested",
                            "Project 3 deployed + dashboard live",
                            "Separate outreach for consulting running"
                        ],
                        outcomes: ["Outreach Execution", "Unsupervised ML Pipelines"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "SBL sequences upgraded (30% formula)",
                            "A/B testing message variants",
                            "Outreach now includes consulting prospects",
                            "2 LinkedIn posts published"
                        ],
                        cumulativeMessages: 1800,
                        hireProbability: 27,
                        keyDriver: "SBL formula = quality messages. 2 projects. Consulting outreach started."
                    }
                }
            ]
        },
        {
            id: "as-week8",
            title: "Week 8: Multi-Channel Outreach",
            weeks: "Week 8",
            modules: [
                {
                    id: "m-w8",
                    title: "Cold Email Systems & Advanced EDA",
                    weeks: "Week 8",
                    topics: [
                        topic("Cold Email Infrastructure (Apollo/Instantly)", [
                            vid("Complete Apollo.io Tutorial", "https://www.youtube.com/watch?v=x7wHn_R6gEY"),
                            vid("Instantly.ai Cold Email Setup Guide", "https://www.youtube.com/watch?v=_eP9J-2r2D4"),
                            doc("Cold Email Deliverability Checklist", "https://help.instantly.ai/en/articles/6078711-deliverability-guide")
                        ]),
                        topic("High-Dimensional EDA Mastery", [
                            vid("PCA Clearly Explained", "https://www.youtube.com/watch?v=FgakZw6K1QQ", "StatQuest"),
                            vid("t-SNE Clearly Explained", "https://www.youtube.com/watch?v=NEaUSP4YerM", "StatQuest"),
                            art("Advanced Visualization techniques with Seaborn/Plotly", "https://towardsdatascience.com/the-next-level-of-data-visualization-in-python-dd6e99039d5e")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "LinkedIn posts (3/week) consistent",
                            "1,000+ leads in CRM",
                            "Lead magnet V1 ready (PDF/Cheatsheet)",
                            "First 2 \"Coffee Chats\" or discovery calls",
                            "Project 4 technical blog post"
                        ],
                        outcomes: ["Multi-Channel Campaigns Setup", "Advanced Data Analysis"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "LinkedIn posts (3/week) consistent",
                            "1,000+ leads in CRM",
                            "Lead magnet V1 ready (PDF/Cheatsheet)",
                            "First 2 \"Coffee Chats\" or discovery calls"
                        ],
                        cumulativeMessages: 2200,
                        hireProbability: 33,
                        keyDriver: "3 channels active. 3 projects incl. EDA report. Consulting pipeline warming."
                    }
                }
            ]
        },
        {
            id: "as-week9",
            title: "Week 9: The Sales Process for Technical Folks",
            weeks: "Week 9",
            modules: [
                {
                    id: "m-w9",
                    title: "Closing Calls & Hybrid Models",
                    weeks: "Week 9",
                    topics: [
                        topic("Sales Conversations & Discovery Calls", [
                            vid("How to Run a Discovery Call", "https://www.youtube.com/watch?v=ZfR6h9pYwF0"),
                            art("Objection Handling Frameworks", "https://blog.hubspot.com/sales/handling-common-sales-objections"),
                            art("Pricing Negotiation Tactics", "https://hbr.org/2015/04/how-to-negotiate-with-a-hard-bargainer")
                        ]),
                        topic("GenAI Hybrid Systems (Classical ML + LLMs)", [
                            vid("Using LLMs as Evaluators and Classifiers", "https://www.youtube.com/watch?v=o0C_kR_1oE4"),
                            doc("LangChain: Extraction and Classification", "https://python.langchain.com/docs/use_cases/extraction/"),
                            art("Combining Machine Learning Models with LLMs", "https://towardsdatascience.com/how-to-combine-llms-with-traditional-machine-learning-8c8f0f0f5b1b")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "STAR answers for 10 questions",
                            "1 system design solved (video)",
                            "Objection scripts (jobs + consulting)",
                            "Project 4 deployed: GenAI hybrid system",
                            "Cost analysis document"
                        ],
                        outcomes: ["Sales Conversion Ability", "Hybrid GenAI Architectures"]
                    },
                    metrics: {
                        outreachActions: [
                            "New lead list loaded (200)",
                            "All channels running at full capacity",
                            "Follow-up sequences on all prior contacts",
                            "Consulting discovery calls scheduled",
                            "6 LinkedIn posts published"
                        ],
                        cumulativeMessages: 2600,
                        hireProbability: 40,
                        keyDriver: "Outreach volume hits 2,500. Interview skills sharp. Consulting discovery calls starting."
                    }
                }
            ]
        },
        {
            id: "as-week10",
            title: "Week 10: Proposal & Contract Mastery",
            weeks: "Week 10",
            modules: [
                {
                    id: "m-w10",
                    title: "Contracts & RAG Systems",
                    weeks: "Week 10",
                    topics: [
                        topic("High-Ticket Proposals & Contracts", [
                            vid("How to Create a Pitch Deck", "https://www.youtube.com/watch?v=8I4K_M5xGEk", "Y Combinator"),
                            art("How to Write a Statement of Work (SOW)", "https://www.smartsheet.com/statement-of-work"),
                            doc("Freelance Contract Templates", "https://www.freelancersunion.org/resources/contract-creator/")
                        ]),
                        topic("Advanced RAG Systems", [
                            vid("Retrieval Augmented Generation (RAG) Explained", "https://www.youtube.com/watch?v=T-D1OfcDW1M"),
                            doc("Pinecone Vector Database Guides", "https://docs.pinecone.io/guides/get-started/overview"),
                            doc("Ragas: RAG Evaluation Framework", "https://docs.ragas.io/en/stable/")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Mock interview recorded & reviewed",
                            "Persuasion scripts written",
                            "Consulting pricing sheet created",
                            "Discovery call script ready",
                            "Project 5 deployed: RAG system",
                            "8 LinkedIn posts published"
                        ],
                        outcomes: ["Proposal & Contract Creation", "Production RAG Implementation"]
                    },
                    metrics: {
                        outreachActions: [
                            "Final lead list loaded (200)",
                            "1,600 total leads contacted via lists",
                            "All automation sequences completing",
                            "First consulting proposals sent",
                            "Interview requests coming in"
                        ],
                        cumulativeMessages: 3000,
                        hireProbability: 50,
                        keyDriver: "First consulting proposals. Interview volume increasing. Outreach at peak efficiency."
                    }
                }
            ]
        },
        {
            id: "as-week11",
            title: "Week 11: MLOps & Self-Improving Systems",
            weeks: "Week 11",
            modules: [
                {
                    id: "m-w11",
                    title: "Production MLOps & Automation",
                    weeks: "Week 11",
                    topics: [
                        topic("MLOps: Kaggle to Production", [
                            vid("Docker for Data Science", "https://www.youtube.com/watch?v=RqTEHSBrYFw"),
                            art("CI/CD for Machine Learning Pipelines", "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning"),
                            doc("GitHub Actions for Machine Learning", "https://github.com/features/actions")
                        ]),
                        topic("Self-Improving Content Engines", [
                            vid("Automating Workflows with Make.com & OpenAI", "https://www.youtube.com/watch?v=3M3OZZJ5-k0"),
                            art("Building a LinkedIn Content Automation Bot", "https://towardsdatascience.com/automate-your-linkedin-content-creation-using-chatgpt-api-4b6d4b5b7c6b"),
                            doc("Zapier AI Integrations", "https://zapier.com/apps/openai/integrations")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Project 6 deployed: Full CI/CD system",
                            "ALL 7 projects complete",
                            "Content engine running on OpenClaw",
                            "Connected to LinkedIn, Analytics dashboard live",
                            "Weekly auto-reports configured",
                            "10 LinkedIn posts published"
                        ],
                        outcomes: ["End-to-End MLOps", "Workflow Automation Mastery"]
                    },
                    metrics: {
                        outreachActions: [
                            "SBL automation continues",
                            "Ayush's 10K/month outreach begins",
                            "Follow-up all warm leads",
                            "First consulting clients being pitched",
                            "OpenClaw content engine live",
                            "Portfolio fully complete"
                        ],
                        cumulativeMessages: 3200,
                        hireProbability: 58,
                        keyDriver: "OpenClaw content engine live. 7 projects complete. Outreach now hyper-targeted."
                    }
                }
            ]
        },
        {
            id: "as-week12",
            title: "Week 12: Advanced GenAI — Fine-Tuning",
            weeks: "Week 12",
            modules: [
                {
                    id: "m-w12",
                    title: "Model Fine-Tuning & Review",
                    weeks: "Week 12",
                    topics: [
                        topic("Fine-Tuning Llama-3 (LoRA/QLoRA)", [
                            vid("Fine-tune Llama 3 with Unsloth (2x Faster)", "https://www.youtube.com/watch?v=Q9zv369Ggfk"),
                            doc("HuggingFace PEFT Documentation", "https://huggingface.co/docs/peft/index"),
                            art("A Beginner's Guide to LoRA and QLoRA", "https://towardsdatascience.com/qlora-fine-tune-a-large-language-model-on-your-gpu-27bed5a03e2b")
                        ]),
                        topic("Sprint Review & Pivot Metrics", [
                            art("How to run a personal retrospective", "https://slab.com/blog/personal-retrospective/"),
                            vid("Tracking KPIs for Freelance/Consulting", "https://www.youtube.com/watch?v=8mH4H5Z7R0M")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "3 case studies written",
                            "All GitHub repos polished",
                            "Architecture diagrams complete",
                            "2 mock interviews completed",
                            "12 LinkedIn posts (content engine assisting)",
                            "First consulting proposal responses"
                        ],
                        outcomes: ["Model Fine-Tuning Capability", "Sprint Analytics & Pivoting"]
                    },
                    metrics: {
                        outreachActions: [
                            "SBL automation + Ayush's outreach",
                            "Follow-up all warm leads",
                            "Schedule pending interviews",
                            "Send consulting proposals",
                            "Content engine auto-posting (with approval)"
                        ],
                        cumulativeMessages: 3400,
                        hireProbability: 65,
                        keyDriver: "Content compounding. Follow-up sequences closing leads. First consulting wins."
                    }
                }
            ]
        },
        {
            id: "as-week13",
            title: "Week 13: Multi-Agent Systems",
            weeks: "Week 13",
            modules: [
                {
                    id: "m-w13",
                    title: "Agent Orchestration & Interviews",
                    weeks: "Week 13",
                    topics: [
                        topic("Multi-Agent Systems (CrewAI/AutoGPT)", [
                            vid("Advanced CrewAI: Multi-Agent Orchestration", "https://www.youtube.com/watch?v=gT1-J2K8A3U"),
                            doc("Microsoft AutoGen Framework", "https://microsoft.github.io/autogen/"),
                            art("Task Decomposition in Autonomous Agents", "https://arxiv.org/abs/2310.00160")
                        ]),
                        topic("Technical Interview Blitz", [
                            vid("System Design Interview: AI Components", "https://www.youtube.com/watch?v=psQzyFfsUGU"),
                            doc("NeetCode: Top Interview Questions", "https://neetcode.io/practice"),
                            art("How to Ace the Take-Home ML Assignment", "https://towardsdatascience.com/how-to-ace-the-take-home-machine-learning-assignment-4e0050819198")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "1 central LinkedIn post pinned",
                            "2 more mock interviews done",
                            "Negotiation scripts refined",
                            "15 LinkedIn posts total",
                            "First consulting income or freelance win"
                        ],
                        outcomes: ["Multi-Agent Architecture Skills", "Technical Interview Readiness"]
                    },
                    metrics: {
                        outreachActions: [
                            "Ayush's warm intros/outreach ongoing",
                            "Re-engage all 'viewed but no reply'",
                            "Convert warm leads to calls",
                            "Consulting: follow up proposals"
                        ],
                        cumulativeMessages: 3600,
                        hireProbability: 72,
                        keyDriver: "Ayush's intros hit. Referrals from network. Momentum in both tracks."
                    }
                }
            ]
        },
        {
            id: "as-week14",
            title: "Week 14: Productionizing Models",
            weeks: "Week 14",
            modules: [
                {
                    id: "m-w14",
                    title: "Cloud Deployments & Behavioral Interviews",
                    weeks: "Week 14",
                    topics: [
                        topic("Productionizing Models with Docker & AWS", [
                            vid("Deploy ML Models to AWS SageMaker", "https://www.youtube.com/watch?v=Jb1Xg1H_J_0"),
                            vid("AWS ECS & ECR Crash Course", "https://www.youtube.com/watch?v=qsjEAOgG2TM"),
                            doc("Prometheus & Grafana ML Monitoring", "https://prometheus.io/docs/introduction/overview/")
                        ]),
                        topic("Behavioral Interview Mastery", [
                            vid("The STAR Method Interview Guide", "https://www.youtube.com/watch?v=Wrl-q0Mb1qc"),
                            art("Answering 'Tell Me About Yourself'", "https://hbr.org/2019/08/how-to-answer-tell-me-about-yourself-in-a-job-interview"),
                            doc("Culture Fit & Founder Conversations Guide", "https://www.ycombinator.com/library/8l-how-to-talk-to-startup-founders")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "2–4 interviews completed",
                            "Interview debrief notes",
                            "3 new system designs practiced",
                            "Company-specific prep docs",
                            "17 LinkedIn posts total",
                            "Consulting discovery calls completed"
                        ],
                        outcomes: ["Cloud Production Deployment", "Behavioral Preparation"]
                    },
                    metrics: {
                        outreachActions: [
                            "Pause cold outreach on companies in loops",
                            "Double down on warm leads",
                            "Ayush warm intros for targets",
                            "Consulting: demo OpenClaw wrappers",
                            "Content engine running on autopilot"
                        ],
                        cumulativeMessages: 3750,
                        hireProbability: 78,
                        keyDriver: "Active interviews + consulting calls. Multiple income paths converging. Ayush's intros."
                    }
                }
            ]
        },
        {
            id: "as-week15",
            title: "Week 15: Offer Strategy & Negotiation",
            weeks: "Week 15",
            modules: [
                {
                    id: "m-w15",
                    title: "Negotiation & Scaling",
                    weeks: "Week 15",
                    topics: [
                        topic("Offer Strategy + Negotiation Prep", [
                            vid("Salary Negotiation Strategies", "https://www.youtube.com/watch?v=XY5SeOdju0c"),
                            art("Levels.fyi: Tech Compensation Benchmarks", "https://www.levels.fyi/"),
                            art("How to handle competing offers", "https://fearlesssalarynegotiation.com/competing-job-offers/")
                        ]),
                        topic("Scaling Your Service", [
                            vid("From Freelancer to Agency Owner", "https://www.youtube.com/watch?v=8lJm2fPz8Zk"),
                            doc("Guide to Hiring Your First VA", "https://www.upwork.com/resources/how-to-hire-a-virtual-assistant"),
                            art("Standard Operating Procedures (SOPs) for Agencies", "https://trainual.com/manual/standard-operating-procedures")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Salary research document",
                            "Negotiation strategy per company",
                            "Thank-you messages sent",
                            "Mini-demo for top company",
                            "19 LinkedIn posts total",
                            "OpenClaw service packaged for clients"
                        ],
                        outcomes: ["Offer Negotiation Expertise", "Service Scaling Foundations"]
                    },
                    metrics: {
                        outreachActions: [
                            "Focus shifts to conversion",
                            "Ayush personal outreach for top 3 targets",
                            "SBL automation maintaining pipeline",
                            "Consulting: close first client",
                            "Content engine self-improving weekly"
                        ],
                        cumulativeMessages: 3850,
                        hireProbability: 83,
                        keyDriver: "Multiple offers/loops. OpenClaw service packaged. Content engine autonomous."
                    }
                }
            ]
        },
        {
            id: "as-week16",
            title: "Week 16: Rapid Prototyping for Contracts",
            weeks: "Week 16",
            modules: [
                {
                    id: "m-w16",
                    title: "Demos & Multiple Income Streams",
                    weeks: "Week 16",
                    topics: [
                        topic("Managing 3 Active Income Paths", [
                            vid("How to Balance a 9-5 with Consulting", "https://www.youtube.com/watch?v=f_E6yTf_yT8"),
                            art("The Productized Service Playbook", "https://productized.com/")
                        ]),
                        topic("Rapid Prototyping for Contract Bids", [
                            vid("Build full stack apps instantly with Vercel v0", "https://www.youtube.com/watch?v=4JtY02XgQ_8"),
                            vid("Gradio UI for ML Models in 10 Minutes", "https://www.youtube.com/watch?v=e-E7k_F7f6I"),
                            doc("Streamlit Session State & Advanced Routing", "https://docs.streamlit.io/library/advanced-features")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "2–3 final interviews",
                            "Offer negotiation prep",
                            "20 LinkedIn posts total",
                            "Consulting: upsell/retainer calls",
                            "First full-time offer potentially"
                        ],
                        outcomes: ["Income Path Management", "Rapid Interactive Demos"]
                    },
                    metrics: {
                        outreachActions: [
                            "Pause cold outreach",
                            "Focus entirely on 'In Loops' companies",
                            "Network referral acceleration",
                            "Consulting: deliver first results",
                            "Content engine at peak output"
                        ],
                        cumulativeMessages: 3950,
                        hireProbability: 87,
                        keyDriver: "Full-time + contracts + freelance + productized service all running."
                    }
                }
            ]
        },
        {
            id: "as-week17",
            title: "Week 17: Warm Network Activation",
            weeks: "Week 17",
            modules: [
                {
                    id: "m-w17",
                    title: "Networking & Portfolio Finishing",
                    weeks: "Week 17",
                    topics: [
                        topic("Warm Network Activation + Final Technical Prep", [
                            vid("How to Network on LinkedIn to get Referrals", "https://www.youtube.com/watch?v=d_kXQzBf2pQ"),
                            art("Cold Email Templates for Alumni Referrals", "https://www.themuse.com/advice/cold-email-alumni-templates")
                        ]),
                        topic("Final Portfolio Handoff & Github Cleanup", [
                            vid("How to write an amazing GitHub README", "https://www.youtube.com/watch?v=pSdEBwqTQGo"),
                            doc("GitHub Best Practices for Portfolios", "https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile"),
                            art("Showcasing ML Projects effectively", "https://towardsdatascience.com/how-to-build-a-machine-learning-portfolio-583ebbbdf0c4")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "10+ referral requests sent",
                            "Ayush warm intros received",
                            "All 7 projects walkthrough-ready",
                            "Final round prep complete",
                            "25 LinkedIn posts total",
                            "Income from consulting/freelance tracked"
                        ],
                        outcomes: ["Network Activation", "Portfolio Completion"]
                    },
                    metrics: {
                        outreachActions: [
                            "Ayush activates personal network (10 companies)",
                            "SBL client warm introductions",
                            "All automation at peak",
                            "Referrals from alumni network",
                            "Consulting revenue being generated"
                        ],
                        cumulativeMessages: 4050,
                        hireProbability: 92,
                        keyDriver: "Ayush's personal intros + full network + 7 projects + AI agent + consulting income."
                    }
                }
            ]
        },
        {
            id: "as-week18",
            title: "Week 18: Graduation",
            weeks: "Week 18",
            modules: [
                {
                    id: "m-w18",
                    title: "Graduation & The Journey Ahead",
                    weeks: "Week 18",
                    topics: [
                        topic("Graduation & Multi-Income Strategy", [
                            vid("Creating a 30-60-90 Day Plan for a New Job", "https://www.youtube.com/watch?v=wXoH1a5L5Ww"),
                            art("Automating Your Content Engine Completely", "https://zapier.com/blog/automate-social-media/")
                        ]),
                        topic("The Journey Ahead", [
                            vid("How to Grow Senior Technical Skills", "https://www.youtube.com/watch?v=H7ZkK_0a-qA"),
                            art("Setting Recurring Revenue Targets", "https://baremetrics.com/blog/mrr")
                        ])
                    ],
                    project: {
                        title: "Weekly Deliverables",
                        description: [
                            "Final \"Antern Approved\" status",
                            "Sprint completion certificate",
                            "28 LinkedIn posts total",
                            "7 projects live & public",
                            "Personal CRM with 4,000+ leads",
                            "Career-long networking system"
                        ],
                        outcomes: ["Graduation", "Career Placement"]
                    },
                    metrics: {
                        outreachActions: [
                            "Final offer negotiation/signing",
                            "SBL alumni network referral loop",
                            "Content engine on full autopilot",
                            "Freelance/consulting leads on inbound",
                            "Maintenance mode: 3 posts/week"
                        ],
                        cumulativeMessages: 4200,
                        hireProbability: 98,
                        keyDriver: "4,200 msgs + 7 projects + AI agent + 28 posts + network + income streams."
                    }
                }
            ]
        }
    ]
};

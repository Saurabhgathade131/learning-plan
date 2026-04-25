export const anternSprintPlan = {
  id: 'antern-sprint',
  title: 'AI Placement Sprint (Antern)',
  description: '18-week intensive placement curriculum focused on Foundations, Portfolio Building, MLOps, and Career Launch.',
  color: 'fuchsia',
  icon: 'target',
  phases: [
    {
      id: 'phase-10',
      title: 'Phase 10: Foundational Refresh',
      modules: [
        {
          id: 'module-10.1',
          title: 'Module 10.1: Python + ML Fundamentals',
          topics: [
            { id: 't10.1.1', title: 'Advanced Python (Decorators, Generators, Concurrency)', status: 'not-started' },
            { id: 't10.1.2', title: 'NumPy & Pandas for Production ML', status: 'not-started' },
            { id: 't10.1.3', title: 'Scikit-Learn Pipelines & ColumnTransformers', status: 'not-started' },
            { id: 't10.1.4', title: 'Evaluation Metrics: Precision, Recall, F1, ROC-AUC', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 1 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2010%20-%20AI%20Placement%20Sprint%20Foundations/Module%2010.1%20-%20Python%20%2B%20ML%20Fundamentals/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-10.2',
          title: 'Module 10.2: Deep Learning + NLP Foundations',
          topics: [
            { id: 't10.2.1', title: 'Neural Network Architectures (CNN, RNN, LSTM)', status: 'not-started' },
            { id: 't10.2.2', title: 'Transformers from Scratch (Attention, Positional Encoding)', status: 'not-started' },
            { id: 't10.2.3', title: 'PyTorch for Deep Learning Projects', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 2 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2010%20-%20AI%20Placement%20Sprint%20Foundations/Module%2010.2%20-%20Deep%20Learning%20%2B%20NLP%20Foundations/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-10.3',
          title: 'Module 10.3: GenAI Stack + First RAG',
          topics: [
            { id: 't10.3.1', title: 'LLM APIs (OpenAI, Anthropic, Gemini)', status: 'not-started' },
            { id: 't10.3.2', title: 'Vector DBs (Pinecone, Chroma) & Embeddings', status: 'not-started' },
            { id: 't10.3.3', title: 'LangChain & LlamaIndex Architecture', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 3 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2010%20-%20AI%20Placement%20Sprint%20Foundations/Module%2010.3%20-%20GenAI%20Stack%20%2B%20First%20RAG/GUIDE.md', type: 'article' }
          ]
        }
      ]
    },
    {
      id: 'phase-11',
      title: 'Phase 11: Project Portfolio Build',
      modules: [
        {
          id: 'module-11.1',
          title: 'Module 11.1: End-to-End ML Pipeline',
          topics: [
            { id: 't11.1.1', title: 'Data Ingestion & Versioning (DVC)', status: 'not-started' },
            { id: 't11.1.2', title: 'Experiment Tracking with MLflow', status: 'not-started' },
            { id: 't11.1.3', title: 'Model Serving with FastAPI & Docker', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 4 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2011%20-%20AI%20Placement%20Sprint%20Portfolio/Module%2011.1%20-%20End-to-End%20ML%20Pipeline/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-11.2',
          title: 'Module 11.2: Customer Intelligence Dashboard',
          topics: [
            { id: 't11.2.1', title: 'Clustering & Segmentation Algorithms', status: 'not-started' },
            { id: 't11.2.2', title: 'Interactive Analytics with Streamlit', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 5 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2011%20-%20AI%20Placement%20Sprint%20Portfolio/Module%2011.2%20-%20Customer%20Intelligence%20Dashboard/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-11.3',
          title: 'Module 11.3: EDA Framework',
          topics: [
            { id: 't11.3.1', title: 'Statistical Testing (T-test, ANOVA, Chi-square)', status: 'not-started' },
            { id: 't11.3.2', title: 'Automated Insight Generation', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 6 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2011%20-%20AI%20Placement%20Sprint%20Portfolio/Module%2011.3%20-%20EDA%20Framework/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-11.4',
          title: 'Module 11.4: GenAI Hybrid System',
          topics: [
            { id: 't11.4.1', title: 'Tiered Classification (Rules -> BERT -> LLM)', status: 'not-started' },
            { id: 't11.4.2', title: 'Cost Optimization & Routing', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 7 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2011%20-%20AI%20Placement%20Sprint%20Portfolio/Module%2011.4%20-%20GenAI%20Hybrid%20System/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-11.5',
          title: 'Module 11.5: Production RAG System',
          topics: [
            { id: 't11.5.1', title: 'Hybrid Search (Semantic + BM25)', status: 'not-started' },
            { id: 't11.5.2', title: 'Reranking with Cross-Encoders', status: 'not-started' },
            { id: 't11.5.3', title: 'RAG Evaluation (Ragas, TruLens)', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 8 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2011%20-%20AI%20Placement%20Sprint%20Portfolio/Module%2011.5%20-%20Production%20RAG%20System/GUIDE.md', type: 'article' }
          ]
        }
      ]
    },
    {
      id: 'phase-12',
      title: 'Phase 12: MLOps & AI Agents',
      modules: [
        {
          id: 'module-12.1',
          title: 'Module 12.1: MLOps — Kaggle to Production',
          topics: [
            { id: 't12.1.1', title: 'Refactoring Notebooks to Production Code', status: 'not-started' },
            { id: 't12.1.2', title: 'CI/CD Pipelines for ML (GitHub Actions)', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 9 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2012%20-%20AI%20Placement%20Sprint%20MLOps%20%2B%20Agents/Module%2012.1%20-%20MLOps%20%E2%80%94%20Kaggle%20to%20Production/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-12.2',
          title: 'Module 12.2: AI Agent Orchestration',
          topics: [
            { id: 't12.2.1', title: 'Agentic Patterns (ReAct, Planning)', status: 'not-started' },
            { id: 't12.2.2', title: 'Multi-Agent Systems with LangGraph', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 10 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2012%20-%20AI%20Placement%20Sprint%20MLOps%20%2B%20Agents/Module%2012.2%20-%20AI%20Agent%20with%20Tool%20Use/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-12.3',
          title: 'Module 12.3: Technical Interview Prep',
          topics: [
            { id: 't12.3.1', title: 'ML System Design Framework', status: 'not-started' },
            { id: 't12.3.2', title: 'Coding for ML Interviews', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 11 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2012%20-%20AI%20Placement%20Sprint%20MLOps%20%2B%20Agents/Module%2012.3%20-%20Technical%20Interview%20Prep/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-12.4',
          title: 'Module 12.4: LinkedIn & Outreach',
          topics: [
            { id: 't12.4.1', title: 'Personal Branding for AI Engineers', status: 'not-started' },
            { id: 't12.4.2', title: 'Strategic Networking & Referrals', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 12 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2012%20-%20AI%20Placement%20Sprint%20MLOps%20%2B%20Agents/Module%2012.4%20-%20LinkedIn%20%26%20Outreach%20Strategy/GUIDE.md', type: 'article' }
          ]
        }
      ]
    },
    {
      id: 'phase-13',
      title: 'Phase 13: Job Launch & Negotiation',
      modules: [
        {
          id: 'module-13.1',
          title: 'Module 13.1: Job Search Execution',
          topics: [
            { id: 't13.1.1', title: 'High-Volume Application Strategy', status: 'not-started' },
            { id: 't13.1.2', title: 'Interview Performance Optimization', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 13 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2013%20-%20AI%20Placement%20Sprint%20Job%20Launch/Module%2013.1%20-%20Job%20Search%20Execution/GUIDE.md', type: 'article' }
          ]
        },
        {
          id: 'module-13.2',
          title: 'Module 13.2: Offer Negotiation',
          topics: [
            { id: 't13.2.1', title: 'Salary Negotiation Scripts & Tactics', status: 'not-started' },
            { id: 't13.2.2', title: 'Long-term Career Growth Planning', status: 'not-started' }
          ],
          resources: [
            { title: 'Antern Module 14 Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning%20plan/learning-modules/Phase%2013%20-%20AI%20Placement%20Sprint%20Job%20Launch/Module%2013.2%20-%20Offer%20Negotiation%20%26%20Strategy/GUIDE.md', type: 'article' }
          ]
        }
      ]
    }
  ]
};

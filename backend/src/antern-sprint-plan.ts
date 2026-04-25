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
      weeks: 'Weeks 1-4',
      modules: [
        {
          id: 'module-10.1',
          title: 'Module 10.1: Python + ML Fundamentals',
          weeks: 'Week 1',
          topics: [
            { name: 'Advanced Python (Decorators, Generators, Concurrency)', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 10 - AI Placement Sprint Foundations/Module 10.1 - Python + ML Fundamentals/GUIDE.md' }] },
            { name: 'NumPy & Pandas for Production ML', resources: [] },
            { name: 'Scikit-Learn Pipelines & ColumnTransformers', resources: [] },
            { name: 'Evaluation Metrics: Precision, Recall, F1, ROC-AUC', resources: [] }
          ],
          project: { title: 'ML Pipeline Assessment', description: ['Build a complete sklearn pipeline'], outcomes: ['Production Python patterns'] }
        },
        {
          id: 'module-10.2',
          title: 'Module 10.2: Deep Learning + NLP Foundations',
          weeks: 'Week 2',
          topics: [
            { name: 'Neural Network Architectures (CNN, RNN, LSTM)', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 10 - AI Placement Sprint Foundations/Module 10.2 - Deep Learning + NLP Foundations/GUIDE.md' }] },
            { name: 'Transformers from Scratch (Attention, Positional Encoding)', resources: [] },
            { name: 'PyTorch for Deep Learning Projects', resources: [] }
          ],
          project: { title: 'Transformer Implementation', description: ['Build a mini-GPT'], outcomes: ['Transformer internals'] }
        },
        {
          id: 'module-10.3',
          title: 'Module 10.3: GenAI Stack + First RAG',
          weeks: 'Weeks 3-4',
          topics: [
            { name: 'LLM APIs (OpenAI, Anthropic, Gemini)', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 10 - AI Placement Sprint Foundations/Module 10.3 - GenAI Stack + First RAG/GUIDE.md' }] },
            { name: 'Vector DBs (Pinecone, Chroma) & Embeddings', resources: [] },
            { name: 'LangChain & LlamaIndex Architecture', resources: [] }
          ],
          project: { title: 'First RAG Prototype', description: ['End-to-end document Q&A'], outcomes: ['LLM API integration'] }
        }
      ]
    },
    {
      id: 'phase-11',
      title: 'Phase 11: Project Portfolio Build',
      weeks: 'Weeks 5-10',
      modules: [
        {
          id: 'module-11.1',
          title: 'Module 11.1: End-to-End ML Pipeline',
          weeks: 'Week 5',
          topics: [
            { name: 'Data Ingestion & Versioning (DVC)', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 11 - AI Placement Sprint Portfolio/Module 11.1 - End-to-End ML Pipeline/GUIDE.md' }] },
            { name: 'Experiment Tracking with MLflow', resources: [] },
            { name: 'Model Serving with FastAPI & Docker', resources: [] }
          ],
          project: { title: 'Production ML Pipeline', description: ['Full pipeline with MLflow'], outcomes: ['MLOps fundamentals'] }
        },
        {
          id: 'module-11.2',
          title: 'Module 11.2: Customer Intelligence Dashboard',
          weeks: 'Week 6',
          topics: [
            { name: 'Clustering & Segmentation Algorithms', resources: [] },
            { name: 'Interactive Analytics with Streamlit', resources: [] }
          ],
          project: { title: 'Customer Intelligence Dashboard', description: ['Clustering dashboard'], outcomes: ['Unsupervised learning'] }
        }
      ]
    },
    {
      id: 'phase-12',
      title: 'Phase 12: MLOps & AI Agents',
      weeks: 'Weeks 11-14',
      modules: [
        {
          id: 'module-12.1',
          title: 'Module 12.1: MLOps — Kaggle to Production',
          weeks: 'Week 11',
          topics: [
            { name: 'Refactoring Notebooks to Production Code', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 12 - AI Placement Sprint MLOps & Agents/Module 12.1 - MLOps — Kaggle to Production/GUIDE.md' }] },
            { name: 'CI/CD Pipelines for ML (GitHub Actions)', resources: [] }
          ],
          project: { title: 'MLOps Pipeline', description: ['Refactor Kaggle to Prod'], outcomes: ['CI/CD for ML'] }
        },
        {
          id: 'module-12.3',
          title: 'Module 12.3: Technical Interview Prep',
          weeks: 'Week 13',
          topics: [
            { name: 'ML System Design Framework', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 12 - AI Placement Sprint MLOps & Agents/Module 12.3 - Technical Interview Prep/GUIDE.md' }] },
            { name: 'Coding for ML Interviews', resources: [] }
          ],
          project: { title: 'Interview Preparation Kit', description: ['Theory & Coding'], outcomes: ['Interview readiness'] }
        }
      ]
    },
    {
      id: 'phase-13',
      title: 'Phase 13: Job Launch & Negotiation',
      weeks: 'Weeks 15-18',
      modules: [
        {
          id: 'module-13.1',
          title: 'Module 13.1: Job Search Execution',
          weeks: 'Weeks 15-17',
          topics: [
            { name: 'High-Volume Application Strategy', resources: [{ type: 'article' as const, title: 'Antern Guide', url: 'file:///c:/Users/prach/OneDrive/Desktop/Learning plan/learning-modules/Phase 13 - AI Placement Sprint Job Launch/Module 13.1 - Job Search Execution/GUIDE.md' }] },
            { name: 'Interview Performance Optimization', resources: [] }
          ],
          project: { title: 'Job Search Campaign', description: ['Daily applications'], outcomes: ['Offer acquisition'] }
        }
      ]
    }
  ]
};

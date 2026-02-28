// Curated Learning Resources - YouTube Channels, Playlists, Docs, Articles

export const YOUTUBE_CHANNELS = {
    // Indian Creators
    akshaySaini: { name: "Akshay Saini", url: "https://www.youtube.com/@aksaborycodes" },
    hiteshChoudhary: { name: "Hitesh Choudhary", url: "https://www.youtube.com/@HiteshChoudharydotcom" },
    piyushGarg: { name: "Piyush Garg", url: "https://www.youtube.com/@paborusyushgargteach" },
    codeWithHarry: { name: "CodeWithHarry", url: "https://www.youtube.com/@CodeWithHarry" },
    telusko: { name: "Telusko", url: "https://www.youtube.com/@Telusko" },
    shraddhaDidi: { name: "Shraddha Didi (Apna College)", url: "https://www.youtube.com/@ApnaCollegeOfficial" },
    krishNaik: { name: "Krish Naik (Hindi)", url: "https://www.youtube.com/@krishnaik06" },
    campusX: { name: "CampusX", url: "https://www.youtube.com/@campusx-official" },
    thapaTechnical: { name: "Thapa Technical", url: "https://www.youtube.com/@ThapaTechnical" },

    // International Creators
    traversyMedia: { name: "Traversy Media", url: "https://www.youtube.com/@TraversyMedia" },
    fireship: { name: "Fireship", url: "https://www.youtube.com/@Fireship" },
    theNetNinja: { name: "The Net Ninja", url: "https://www.youtube.com/@NetNinja" },
    webDevSimplified: { name: "Web Dev Simplified", url: "https://www.youtube.com/@WebDevSimplified" },
    techWithTim: { name: "Tech With Tim", url: "https://www.youtube.com/@TechWithTim" },

    // System Design
    husseinNasser: { name: "Hussein Nasser", url: "https://www.youtube.com/@haborusyseinnasser-software-eng" },
    systemDesignInterview: { name: "System Design Interview", url: "https://www.youtube.com/@SystemDesignInterview" },
    byteBytego: { name: "ByteByteGo", url: "https://www.youtube.com/@ByteByteGo" },

    // AI/ML
    sentdex: { name: "Sentdex", url: "https://www.youtube.com/@sentdex" },
    twoMinutePapers: { name: "Two Minute Papers", url: "https://www.youtube.com/@TwoMinutePapers" },
    yannicKilcher: { name: "Yannic Kilcher", url: "https://www.youtube.com/@YannicKilcher" },
    samWitteveen: { name: "Sam Witteveen", url: "https://www.youtube.com/@samwitteveenai" },
    vizuaraAI: { name: "Vizuara AI (Vijayraja)", url: "https://www.youtube.com/@VizuaraAI" },
};

export const PLAYLISTS = {
    // JavaScript/Node.js
    namasteJS: { title: "Namaste JavaScript", url: "https://www.youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP", author: "Akshay Saini" },
    namasteNodeJS: { title: "Namaste Node.js", url: "https://www.youtube.com/playlist?list=PLlasXEaborsocopyorusy4cQ32gLCvAvr9vNaUccPVNP", author: "Akshay Saini" },

    // System Design
    systemDesignPrimer: { title: "System Design Primer", url: "https://www.youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX", author: "Gaurav Sen" },

    // Python/ML
    pythonForEverybody: { title: "Python for Everybody", url: "https://www.youtube.com/playlist?list=PLlRFEj9H3Oj7Bp8-DfGpfAfDBiblRfl5p", author: "FreeCodeCamp" },
    completeML: { title: "Complete Machine Learning", url: "https://www.youtube.com/playlist?list=PLZru3N79Wp1B5_5eWd7yv28K6K0z0_U5x", author: "Vizuara AI" },

    // NLP/RAG
    completeNLP: { title: "Complete NLP", url: "https://www.youtube.com/playlist?list=PLZru3N79Wp1AsG_S9ySjO2P8370uGv_L7", author: "Vizuara AI" },
    ragPlaylist: { title: "RAG - GenAI", url: "https://www.youtube.com/playlist?list=PLZru3N79Wp1D_3Y4uXk3O6y0PjS6j1o5I", author: "Vizuara AI" },

    // LangChain/AI
    langchainTutorials: { title: "LangChain Tutorials", url: "https://www.youtube.com/playlist?list=PLqZXAkvF1bPNQER9mLmDbntNfSpzdDIU5", author: "Sam Witteveen" },

    // Python & Full Stack (Hindi)
    pythonHarry: { title: "100 Days of Code: Python (Hindi)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg", author: "CodeWithHarry" },
    webDevHarry: { title: "Web Development Course (Hindi)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzj2Mdn", author: "CodeWithHarry" },
    fastapiThapa: { title: "FastAPI Tutorial (Hindi)", url: "https://www.youtube.com/playlist?list=PLwGdqUZWnOp2Z3eFOg4hwxaMAZqcPXYXm", author: "Thapa Technical" },
    djangoHarry: { title: "Django Tutorials (Hindi)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9ah7DDtYtflgwMwpT3xmjXY9", author: "CodeWithHarry" },
    mlKrishNaik: { title: "Machine Learning (Hindi)", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVOfVYEziXDEB-xW0-6X2s-K", author: "Krish Naik" },
    dlKrishNaik: { title: "Deep Learning (Hindi)", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVPGU70ZGsckrMdr0FteeRui", author: "Krish Naik" },
    genaiKrishNaik: { title: "Generative AI (Hindi)", url: "https://www.youtube.com/playlist?list=PLZoTAELRMXVNxBw-H6q192jX8D-lSxyF0", author: "Krish Naik" },
};

export const DOCS = {
    nodejs: { title: "Node.js Docs", url: "https://nodejs.org/docs/" },
    express: { title: "Express.js", url: "https://expressjs.com/" },
    postgresql: { title: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/" },
    mongodb: { title: "MongoDB Docs", url: "https://www.mongodb.com/docs/" },
    redis: { title: "Redis Docs", url: "https://redis.io/docs/" },
    kubernetes: { title: "Kubernetes Docs", url: "https://kubernetes.io/docs/" },
    docker: { title: "Docker Docs", url: "https://docs.docker.com/" },
    aws: { title: "AWS Docs", url: "https://docs.aws.amazon.com/" },
    openai: { title: "OpenAI API", url: "https://platform.openai.com/docs/" },
    langchain: { title: "LangChain Docs", url: "https://python.langchain.com/docs/" },
    langgraph: { title: "LangGraph Docs", url: "https://langchain-ai.github.io/langgraph/" },
    react: { title: "React Docs", url: "https://react.dev/" },
    nextjs: { title: "Next.js Docs", url: "https://nextjs.org/docs" },
    typescript: { title: "TypeScript Docs", url: "https://www.typescriptlang.org/docs/" },
    grpc: { title: "gRPC Docs", url: "https://grpc.io/docs/" },
    kafka: { title: "Kafka Docs", url: "https://kafka.apache.org/documentation/" },
    rabbitmq: { title: "RabbitMQ Docs", url: "https://www.rabbitmq.com/docs" },
    pytorch: { title: "PyTorch Docs", url: "https://pytorch.org/docs/" },
    huggingface: { title: "HuggingFace Docs", url: "https://huggingface.co/docs" },
    voltaWhitepaper: { title: "Volta Architecture Whitepaper", url: "https://images.nvidia.com/content/volta-architecture/pdf/volta-architecture-whitepaper.pdf" },
    megatronLM: { title: "Megatron-LM Paper", url: "https://arxiv.org/abs/1909.08053" },
    gPipePaper: { title: "GPipe Paper", url: "https://arxiv.org/abs/1811.06965" },
    zeROPaper: { title: "ZeRO Paper", url: "https://arxiv.org/abs/1910.02054" },
    fsdpBlog: { title: "PyTorch FSDP Blog", url: "https://pytorch.org/blog/introducing-pytorch-fully-sharded-data-parallel-api/" },
    msAgentFramework: { title: "Microsoft Agent Framework SDK", url: "https://github.com/microsoft/agent-framework" },
    msExtensionsAI: { title: "Microsoft.Extensions.AI Docs", url: "https://learn.microsoft.com/en-us/dotnet/ai/extensions" },
    azureAIFoundry: { title: "Azure AI Foundry Agents", url: "https://azure.microsoft.com/en-us/products/ai-foundry" },
};

export const BLOGS = {
    martinfowler: { title: "Martin Fowler", url: "https://martinfowler.com/" },
    highscalability: { title: "High Scalability", url: "http://highscalability.com/" },
    netflixtechblog: { title: "Netflix Tech Blog", url: "https://netflixtechblog.com/" },
    ubereng: { title: "Uber Engineering", url: "https://www.uber.com/blog/engineering/" },
    airbnbeng: { title: "Airbnb Engineering", url: "https://medium.com/airbnb-engineering" },
    stripeblog: { title: "Stripe Blog", url: "https://stripe.com/blog/engineering" },
    awsarchitecture: { title: "AWS Architecture", url: "https://aws.amazon.com/architecture/" },
    openai: { title: "OpenAI Blog", url: "https://openai.com/blog" },
    anthropic: { title: "Anthropic Research", url: "https://www.anthropic.com/research" },
    googleai: { title: "Google AI Blog", url: "https://ai.googleblog.com/" },
};

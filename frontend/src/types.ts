export interface Project {
    title: string;
    description: string[];
    outcomes: string[];
}

export interface TopicResource {
    type: 'video' | 'doc' | 'article' | 'playlist' | 'channel';
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

export interface Progress {
    [key: string]: {
        status: string;
        type: 'module' | 'project' | 'topic';
        timestamp: string;
    };
}

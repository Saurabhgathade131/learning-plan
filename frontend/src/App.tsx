import { useState, useEffect } from 'react';
import type { LearningPlan, Phase, Progress, Topic, TopicResource } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, BookOpen, Code, Check, ExternalLink, Youtube, FileText, BookMarked, Brain, Server, Bot, NotebookPen, Play, Clock, Save, X, Network } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_URL = import.meta.env.DEV ? 'http://localhost:5000/api' : '/api';

interface NoteData {
  note: string;
  currentVideo: string;
  videoTimestamp: string;
  updatedAt: string;
}

interface Notes {
  [topicId: string]: NoteData;
}

const planIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  server: <Server className="w-5 h-5" />,
  bot: <Bot className="w-5 h-5" />,
  gateway: <Network className="w-5 h-5" />
};

const colorClasses: Record<string, { bg: string; border: string; text: string; ring: string }> = {
  purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-500', ring: 'ring-purple-500/30' },
  blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-500', ring: 'ring-blue-500/30' },
  emerald: { bg: 'bg-emerald-500', border: 'border-emerald-500', text: 'text-emerald-500', ring: 'ring-emerald-500/30' },
  amber: { bg: 'bg-amber-500', border: 'border-amber-500', text: 'text-amber-500', ring: 'ring-amber-500/30' }
};

const ResourceBadge = ({ resource }: { resource: TopicResource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'video': return <Youtube className="w-3 h-3" />;
      case 'doc': return <FileText className="w-3 h-3" />;
      case 'article': return <BookMarked className="w-3 h-3" />;
      case 'playlist': return <Youtube className="w-3 h-3" />;
      case 'channel': return <Youtube className="w-3 h-3" />;
      default: return <ExternalLink className="w-3 h-3" />;
    }
  };

  const getStyles = () => {
    switch (resource.type) {
      case 'video': return "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/30 text-red-700 dark:text-red-400";
      case 'doc': return "bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900/30 text-blue-700 dark:text-blue-400";
      case 'article': return "bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-900/30 text-purple-700 dark:text-purple-400";
      case 'playlist': return "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-900/30 text-orange-700 dark:text-orange-400";
      case 'channel': return "bg-pink-50 dark:bg-pink-950/20 border-pink-200 dark:border-pink-900/30 text-pink-700 dark:text-pink-400";
      default: return "bg-slate-50 dark:bg-slate-950/20 border-slate-200 dark:border-slate-900/30 text-slate-700 dark:text-slate-400";
    }
  };

  return (
    <a href={resource.url} target="_blank" rel="noopener noreferrer"
      className={cn("group/resource flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-all hover:shadow-sm", getStyles())}>
      {getIcon()}
      <span className="flex-1 truncate">{resource.title}</span>
      {resource.author && <span className="opacity-60 text-[10px]">by {resource.author}</span>}
      {resource.duration && <span className="opacity-60 text-[10px]">{resource.duration}</span>}
      <ExternalLink className="w-3 h-3 opacity-0 group-hover/resource:opacity-100 transition-opacity" />
    </a>
  );
};

// Notes Component
const TopicNotes = ({ topicId, notes, onSave }: { topicId: string; notes: Notes; onSave: (topicId: string, data: Partial<NoteData>) => void }) => {
  const existingNote = notes[topicId];
  const [note, setNote] = useState(existingNote?.note || '');
  const [currentVideo, setCurrentVideo] = useState(existingNote?.currentVideo || '');
  const [videoTimestamp, setVideoTimestamp] = useState(existingNote?.videoTimestamp || '');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    await onSave(topicId, { note, currentVideo, videoTimestamp });
    setIsSaving(false);
    setIsEditing(false);
  };

  const hasContent = note || currentVideo || videoTimestamp;

  return (
    <div className="mt-3 border-t border-slate-100 dark:border-slate-800 pt-3">
      {!isEditing && !hasContent && (
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 text-xs text-slate-400 hover:text-indigo-500 transition-colors"
        >
          <NotebookPen className="w-3.5 h-3.5" />
          <span>Add learning notes...</span>
        </button>
      )}

      {!isEditing && hasContent && (
        <div className="space-y-2">
          {currentVideo && (
            <div className="flex items-center gap-2 text-xs">
              <Play className="w-3.5 h-3.5 text-red-500" />
              <span className="text-slate-600 dark:text-slate-400">Watching: <span className="font-medium text-slate-800 dark:text-slate-200">{currentVideo}</span></span>
              {videoTimestamp && (
                <span className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3 h-3" /> {videoTimestamp}
                </span>
              )}
            </div>
          )}
          {note && (
            <p className="text-xs text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg leading-relaxed">
              {note}
            </p>
          )}
          <button
            onClick={() => setIsEditing(true)}
            className="text-xs text-indigo-500 hover:text-indigo-600 font-medium"
          >
            Edit notes
          </button>
        </div>
      )}

      {isEditing && (
        <div className="space-y-3 bg-slate-50 dark:bg-slate-800/30 p-3 rounded-lg">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 block">Current Video/Resource</label>
              <input
                type="text"
                value={currentVideo}
                onChange={(e) => setCurrentVideo(e.target.value)}
                placeholder="e.g., Akshay Saini - Namaste JS"
                className="w-full text-xs px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
              />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 block">Timestamp / Progress</label>
              <input
                type="text"
                value={videoTimestamp}
                onChange={(e) => setVideoTimestamp(e.target.value)}
                placeholder="e.g., 12:35 or Episode 5"
                className="w-full text-xs px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
              />
            </div>
          </div>
          <div>
            <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wide mb-1 block">Learning Notes</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="What did you learn? Any key takeaways? Things to revisit?"
              rows={3}
              className="w-full text-xs px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 resize-none"
            />
          </div>
          <div className="flex justify-end gap-2">
            <button
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors"
            >
              <X className="w-3.5 h-3.5" /> Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-medium bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors disabled:opacity-50"
            >
              <Save className="w-3.5 h-3.5" /> {isSaving ? 'Saving...' : 'Save'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const StatusSelect = ({ status, onChange, type }: { status: string; onChange: (val: string) => void; type?: 'small' | 'default' }) => {
  const variants = {
    pending: "bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700",
    "in-progress": "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 dark:bg-blue-900/40 dark:text-blue-300 dark:border-blue-700",
    completed: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-300 dark:border-emerald-700",
  };

  return (
    <div className="relative group/select">
      <select
        value={status}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "appearance-none pl-3 pr-8 rounded-full font-bold border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40 shadow-sm",
          variants[status as keyof typeof variants],
          type === 'small' ? "text-[10px] py-1 pl-2 pr-6" : "text-xs py-1.5"
        )}
      >
        <option value="pending">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Done</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-current opacity-70">
        <ChevronDown className={cn(type === 'small' ? "w-3 h-3" : "w-3.5 h-3.5")} />
      </div>
    </div>
  );
};

function App() {
  const [plans, setPlans] = useState<LearningPlan[]>([]);
  const [activePlanId, setActivePlanId] = useState<string>('');
  const [progress, setProgress] = useState<Progress>({});
  const [notes, setNotes] = useState<Notes>({});
  const [loading, setLoading] = useState(true);
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set());
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/plans`).then(res => res.json()),
      fetch(`${API_URL}/progress`).then(res => res.json()),
      fetch(`${API_URL}/notes`).then(res => res.json())
    ]).then(([plansData, progressData, notesData]) => {
      setPlans(plansData);
      if (plansData.length > 0) {
        setActivePlanId(plansData[0].id);
        setExpandedPhases(new Set([plansData[0].phases[0]?.id]));
      }
      setProgress(progressData);
      setNotes(notesData);
      setLoading(false);
    });
  }, []);

  const activePlan = plans.find(p => p.id === activePlanId);

  const updateStatus = async (id: string, status: string, type: 'module' | 'project' | 'topic') => {
    const newProgress = { ...progress, [id]: { status, type, timestamp: new Date().toISOString() } } as Progress;
    setProgress(newProgress);
    await fetch(`${API_URL}/progress`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status, type })
    });
  };

  const saveNote = async (topicId: string, data: Partial<NoteData>) => {
    const newNotes = {
      ...notes,
      [topicId]: { ...notes[topicId], ...data, updatedAt: new Date().toISOString() }
    } as Notes;
    setNotes(newNotes);
    await fetch(`${API_URL}/notes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topicId, ...data })
    });
  };

  const toggleTopic = (id: string) => {
    const currentStatus = progress[id]?.status;
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';
    updateStatus(id, newStatus, 'topic');
  }

  const toggleTopicExpand = (id: string) => {
    const newSet = new Set(expandedTopics);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setExpandedTopics(newSet);
  };

  const togglePhase = (id: string) => {
    const newSet = new Set(expandedPhases);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setExpandedPhases(newSet);
  };

  const calculatePhaseProgress = (phase: Phase) => {
    let totalItems = 0;
    let completedItems = 0;
    phase.modules.forEach(m => {
      m.topics.forEach((_, idx) => {
        totalItems++;
        if (progress[`${m.id}-topic-${idx}`]?.status === 'completed') completedItems++;
      });
      totalItems++;
      if (progress[m.id + '_project']?.status === 'completed') completedItems++;
    });
    if (totalItems === 0) return 0;
    return Math.round((completedItems / totalItems) * 100);
  };

  if (loading) return <div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">Loading...</div>;

  const activeColor = activePlan ? colorClasses[activePlan.color] : colorClasses.purple;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">

        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Learning Command Center
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Choose your path. Track your progress. Take notes. Master your craft.
          </p>
        </motion.header>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {plans.map((plan) => {
            const isActive = plan.id === activePlanId;
            const colors = colorClasses[plan.color];
            return (
              <button
                key={plan.id}
                onClick={() => {
                  setActivePlanId(plan.id);
                  setExpandedPhases(new Set([plan.phases[0]?.id]));
                }}
                className={cn(
                  "flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all border-2",
                  isActive
                    ? `${colors.bg} text-white border-transparent shadow-lg`
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                )}
              >
                <span className={cn(isActive ? "text-white" : colors.text)}>{planIcons[plan.icon]}</span>
                <div className="text-left">
                  <div className="text-sm">{plan.name}</div>
                  <div className={cn("text-[10px] font-normal", isActive ? "text-white/80" : "text-slate-500")}>{plan.description.slice(0, 40)}...</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Plan Content */}
        {activePlan && (
          <div className="grid gap-6">
            {activePlan.phases.map((phase, i) => {
              const percent = calculatePhaseProgress(phase);
              const isOpen = expandedPhases.has(phase.id);

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={cn(
                    "group relative bg-white dark:bg-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg",
                    isOpen ? `${activeColor.border}/30 ring-1 ${activeColor.ring}` : "border-slate-200 dark:border-slate-800"
                  )}
                >
                  <div onClick={() => togglePhase(phase.id)} className="p-5 md:p-6 cursor-pointer flex items-center justify-between select-none">
                    <div className="flex items-center gap-5">
                      <div className="relative w-14 h-14 flex items-center justify-center bg-slate-50 dark:bg-slate-800 rounded-full shadow-inner ring-1 ring-slate-200 dark:ring-slate-700">
                        <svg className="absolute w-full h-full -rotate-90 p-1" viewBox="0 0 36 36">
                          <path className="text-slate-200 dark:text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" />
                          <path className={activeColor.text} strokeDasharray={`${percent}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <span className="text-xs font-extrabold text-slate-700 dark:text-white">{percent}%</span>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">{phase.title}</h3>
                        <p className="text-sm font-medium text-slate-400 mt-0.5">{phase.weeks}</p>
                      </div>
                    </div>
                    <div className={cn("w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300", isOpen ? `${activeColor.bg}/10 ${activeColor.text} rotate-180` : "bg-slate-100 dark:bg-slate-800 text-slate-400")}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="bg-slate-50/80 dark:bg-slate-950/30 border-t border-slate-200 dark:border-slate-800">
                        <div className="p-5 md:p-6 grid gap-5">
                          {phase.modules.map(module => (
                            <div key={module.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm p-5 md:p-6 flex flex-col xl:flex-row gap-6">

                              <div className="flex-1 space-y-5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1.5">
                                      <BookOpen className={cn("w-4 h-4", activeColor.text)} />
                                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{module.id}</span>
                                      <span className="text-slate-300 dark:text-slate-700">|</span>
                                      <span className="text-xs font-medium text-slate-400">{module.weeks}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100">{module.title}</h4>
                                  </div>
                                  <StatusSelect status={progress[module.id]?.status || 'pending'} onChange={(val) => updateStatus(module.id, val, 'module')} />
                                </div>

                                <div className="space-y-2">
                                  {module.topics.map((topic: Topic, i: number) => {
                                    const topicId = `${module.id}-topic-${i}`;
                                    const isCompleted = progress[topicId]?.status === 'completed';
                                    const isExpanded = expandedTopics.has(topicId);

                                    return (
                                      <div key={i} className={cn("border rounded-lg transition-all overflow-hidden", isCompleted ? "bg-emerald-50/30 dark:bg-emerald-900/5 border-emerald-100 dark:border-emerald-900/20" : "bg-white dark:bg-slate-800/20 border-slate-200 dark:border-slate-800")}>
                                        <div className="p-3">
                                          <div className="flex items-start gap-3">
                                            <div onClick={() => toggleTopic(topicId)} className={cn("mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-all cursor-pointer flex-shrink-0", isCompleted ? "bg-emerald-500 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-400")}>
                                              {isCompleted && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <div className="flex items-center justify-between gap-2">
                                                <h5 className={cn("text-sm font-semibold select-none", isCompleted ? "text-emerald-800 dark:text-emerald-400 line-through opacity-70" : "text-slate-700 dark:text-slate-200")}>
                                                  {topic.name}
                                                </h5>
                                                {topic.resources.length > 0 && (
                                                  <button onClick={() => toggleTopicExpand(topicId)} className={cn("p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-transform", isExpanded && "rotate-180")}>
                                                    <ChevronDown className="w-4 h-4 text-slate-400" />
                                                  </button>
                                                )}
                                              </div>

                                              <AnimatePresence>
                                                {isExpanded && (
                                                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-3 space-y-2">
                                                    {topic.resources.map((resource, rIdx) => (
                                                      <ResourceBadge key={rIdx} resource={resource} />
                                                    ))}

                                                    {/* Notes Section */}
                                                    <TopicNotes topicId={topicId} notes={notes} onSave={saveNote} />
                                                  </motion.div>
                                                )}
                                              </AnimatePresence>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </div>

                              {/* Project Card */}
                              <div className="xl:w-72 flex-shrink-0">
                                <div className="h-full bg-slate-50/50 dark:bg-slate-800/20 border border-slate-200 dark:border-slate-800 rounded-xl p-5 flex flex-col">
                                  <div className="flex items-center gap-2 mb-3">
                                    <Code className={cn("w-4 h-4", activeColor.text)} />
                                    <span className={cn("text-xs font-extrabold uppercase tracking-widest", activeColor.text)}>Project</span>
                                  </div>
                                  <h5 className="text-base font-bold text-slate-800 dark:text-slate-100 mb-3 leading-snug">{module.project.title}</h5>
                                  <ul className="space-y-2 mb-5 flex-1">
                                    {module.project.description.map((d, i) => (
                                      <li key={i} className="flex gap-2 items-start text-xs text-slate-500 dark:text-slate-400">
                                        <span className={cn("mt-1.5 w-1 h-1 rounded-full flex-shrink-0", activeColor.bg)}></span>
                                        <span className="leading-relaxed">{d}</span>
                                      </li>
                                    ))}
                                  </ul>
                                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700/50">
                                    <StatusSelect type="small" status={progress[module.id + '_project']?.status || 'pending'} onChange={(val) => updateStatus(module.id + '_project', val, 'project')} />
                                  </div>
                                </div>
                              </div>

                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

export default App;

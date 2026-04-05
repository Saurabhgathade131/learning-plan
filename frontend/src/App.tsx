import { useState, useEffect, useLayoutEffect, useRef, Suspense } from 'react';
import type { LearningPlan, Phase, Progress, Topic, TopicResource, User } from './types';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { ChevronDown, BookOpen, Code, Check, ExternalLink, Youtube, FileText, BookMarked, Brain, Server, Bot, Network, Layers, Rocket, Cpu, Sparkles, Trophy, BarChart3, NotebookPen, Play, Clock, Save, X } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const API_URL = import.meta.env.DEV
  ? 'http://localhost:5000/api'
  : 'https://fhlu3kouw5.execute-api.ap-south-1.amazonaws.com/dev/api';

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
  gateway: <Network className="w-5 h-5" />,
  layers: <Layers className="w-5 h-5" />,
  rocket: <Rocket className="w-5 h-5" />,
  cpu: <Cpu className="w-5 h-5" />,
  sparkles: <Sparkles className="w-5 h-5" />,
  code: <Code className="w-5 h-5" />,
  trophy: <Trophy className="w-5 h-5" />
};

const colorClasses: Record<string, { bg: string; border: string; text: string; ring: string }> = {
  purple: { bg: 'bg-purple-500', border: 'border-purple-500', text: 'text-purple-500', ring: 'ring-purple-500/30' },
  blue: { bg: 'bg-blue-500', border: 'border-blue-500', text: 'text-blue-500', ring: 'ring-blue-500/30' },
  emerald: { bg: 'bg-emerald-500', border: 'border-emerald-500', text: 'text-emerald-500', ring: 'ring-emerald-500/30' },
  amber: { bg: 'bg-amber-500', border: 'border-amber-500', text: 'text-amber-500', ring: 'ring-amber-500/30' },
  rose: { bg: 'bg-rose-500', border: 'border-rose-500', text: 'text-rose-500', ring: 'ring-rose-500/30' },
  cyan: { bg: 'bg-cyan-500', border: 'border-cyan-500', text: 'text-cyan-500', ring: 'ring-cyan-500/30' },
  orange: { bg: 'bg-orange-500', border: 'border-orange-500', text: 'text-orange-500', ring: 'ring-orange-500/30' },
  lime: { bg: 'bg-lime-500', border: 'border-lime-500', text: 'text-lime-500', ring: 'ring-lime-500/30' },
  yellow: { bg: 'bg-yellow-500', border: 'border-yellow-500', text: 'text-yellow-600 dark:text-yellow-500', ring: 'ring-yellow-500/30' },
  indigo: { bg: 'bg-indigo-500', border: 'border-indigo-500', text: 'text-indigo-500', ring: 'ring-indigo-500/30' },
  teal: { bg: 'bg-teal-500', border: 'border-teal-500', text: 'text-teal-500', ring: 'ring-teal-500/30' }
};

const AnimatedSphere = () => {
  const meshRef = useRef<any>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-40">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Suspense fallback={null}>
          <AnimatedSphere />
        </Suspense>
      </Canvas>
    </div>
  );
};

const ResourceBadge = ({ resource }: { resource: TopicResource }) => {
  const getIcon = () => {
    switch (resource.type) {
      case 'video': return <Youtube className="w-3 h-3" />;
      case 'doc': return <FileText className="w-3 h-3" />;
      case 'article': return <BookMarked className="w-3 h-3" />;
      case 'playlist': return <Youtube className="w-3 h-3" />;
      case 'channel': return <Youtube className="w-3 h-3" />;
      case 'course': return <BookOpen className="w-3 h-3" />;
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
      case 'course': return "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 text-amber-700 dark:text-amber-400";
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

// Deep Dive Validator Modal
const DeepDiveModal = ({ topic, onValidate, onCancel }: { topic: string, onValidate: () => void, onCancel: () => void }) => {
  const questions = [
    "What is the single most important concept here?",
    "How would you explain this to a 5-year-old?",
    "What is the primary trade-off of using this approach?"
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6 max-w-md w-full">
        <div className="flex items-center gap-3 mb-4 text-indigo-500">
          <Brain className="w-6 h-6" />
          <h3 className="text-xl font-bold">Validate Mastery</h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Before marking <strong>{topic}</strong> as complete, answer these questions out loud to guarantee retention:
        </p>
        <ul className="space-y-3 mb-8">
          {questions.map((q, i) => (
            <li key={i} className="text-sm font-medium bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-800">
              {q}
            </li>
          ))}
        </ul>
        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Not Ready</button>
          <button onClick={onValidate} className="px-4 py-2 text-sm font-medium bg-indigo-500 text-white hover:bg-indigo-600 shadow-md rounded-lg transition-colors">I Conquered It</button>
        </div>
      </motion.div>
    </div>
  );
};


// Nightly Standup Modal
const NightlyStandupModal = ({ onSave, onCancel }: { onSave: (data: any) => void; onCancel: () => void }) => {
  const [accomplished, setAccomplished] = useState('');
  const [focusLost, setFocusLost] = useState('');
  const [planTomorrow, setPlanTomorrow] = useState('');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-6 max-w-lg w-full">
        <div className="flex items-center gap-3 mb-4 text-emerald-500">
          <BookMarked className="w-6 h-6" />
          <h3 className="text-xl font-bold">Nightly Accountability Standup</h3>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          Reflect on today to win tomorrow. Be honest. What did you get done?
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">What did I accomplish today?</label>
            <textarea value={accomplished} onChange={e => setAccomplished(e.target.value)} className="w-full mt-1 p-2 text-sm border bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Completed Python API chapter..."></textarea>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Where did I lose focus?</label>
            <textarea value={focusLost} onChange={e => setFocusLost(e.target.value)} className="w-full mt-1 p-2 text-sm border bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Scrolled Twitter for 45 mins..."></textarea>
          </div>
          <div>
            <label className="text-xs font-bold text-slate-500 uppercase">Exact plan for tomorrow:</label>
            <textarea value={planTomorrow} onChange={e => setPlanTomorrow(e.target.value)} className="w-full mt-1 p-2 text-sm border bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="1. Watch PyTorch video. 2. Build model..."></textarea>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button onClick={onCancel} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Skip</button>
          <button onClick={() => onSave({ accomplished, focusLost, planTomorrow })} className="px-4 py-2 text-sm font-medium bg-emerald-500 text-white hover:bg-emerald-600 shadow-md rounded-lg transition-colors">Save Standup</button>
        </div>
      </motion.div>
    </div>
  );
};


// Portfolio Dashboard
const PortfolioDashboard = () => {
  const [skills, setSkills] = useState<{ skillName: string, acquiredAt: string }[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/skills/user-1`)
      .then(res => res.json())
      .then(data => setSkills(data || []));
  }, []);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 text-indigo-500">
        <Trophy className="w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">My Portfolio & Skills</h2>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        A chronologically tracked list of your mastered skills. Ready to be copied straight into your resume.
      </p>

      {skills.length === 0 ? (
        <div className="text-center p-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
          <p className="text-slate-500 font-medium">No skills acquired yet. Start completing topics to build your portfolio!</p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800 rounded-xl shadow-sm transition-all hover:scale-105">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-bold text-indigo-700 dark:text-indigo-400">{skill.skillName}</span>
              <span className="text-[10px] text-indigo-400 dark:text-indigo-500 font-medium tracking-wide">
                {new Date(skill.acquiredAt).toLocaleDateString()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Goals Dashboard
const GoalsDashboard = () => {
  const [goals, setGoals] = useState<any[]>([]);
  const [newGoal, setNewGoal] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/goals/user-1`)
      .then(res => res.json())
      .then(data => setGoals(data || []));
  }, []);

  const handleAddGoal = async () => {
    if (!newGoal) return;
    const goalId = Date.now().toString();
    const payload = { userId: 'user-1', goalId, title: newGoal, deadline: '', microSteps: [] };
    await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    setGoals([...goals, payload]);
    setNewGoal('');
  };

  const toggleMicroStep = async (goalId: string, stepIndex: number) => {
    const goal = goals.find(g => g.goalId === goalId);
    if (!goal) return;
    const microSteps = [...(goal.microSteps || [])];
    microSteps[stepIndex] = { ...microSteps[stepIndex], completed: !microSteps[stepIndex].completed };

    const updatedGoal = { ...goal, microSteps };
    await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal)
    });
    setGoals(goals.map(g => g.goalId === goalId ? updatedGoal : g));
  };

  const addMicroStep = async (goalId: string, text: string) => {
    const goal = goals.find(g => g.goalId === goalId);
    if (!goal) return;
    const microSteps = [...(goal.microSteps || []), { text, completed: false }];

    const updatedGoal = { ...goal, microSteps };
    await fetch(`${API_URL}/goals`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedGoal)
    });
    setGoals(goals.map(g => g.goalId === goalId ? updatedGoal : g));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
      <div className="flex items-center gap-3 mb-6 text-rose-500">
        <Rocket className="w-8 h-8" />
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Goals & Manifestation</h2>
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
        The ultimate Raj Shamani "All-In" dashboard. Set a massive goal, break it into micro-steps, and execute relentlessly.
      </p>

      <div className="flex gap-3 mb-8">
        <input
          type="text"
          value={newGoal}
          onChange={e => setNewGoal(e.target.value)}
          placeholder="I will become a $200k AI Engineer..."
          className="flex-1 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
        <button onClick={handleAddGoal} className="px-6 py-3 font-bold bg-rose-500 text-white rounded-xl shadow-md hover:bg-rose-600 transition-colors">Manifest Goal</button>
      </div>

      <div className="grid gap-6">
        {goals.map((g) => (
          <div key={g.goalId} className="p-6 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50/50 dark:bg-slate-800/30 transition-all hover:shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white">{g.title}</h4>
                <div className="flex gap-4 mt-1">
                  <span className="text-[10px] uppercase font-bold text-rose-500">Target: $200K Goal</span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Created: {new Date(g.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
              <div className="bg-rose-500/10 text-rose-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Active</div>
            </div>

            <div className="space-y-2 mt-4">
              {g.microSteps?.map((step: any, idx: number) => (
                <div key={idx} onClick={() => toggleMicroStep(g.goalId, idx)} className="flex items-center gap-3 p-2 hover:bg-white dark:hover:bg-slate-800 rounded-lg cursor-pointer group transition-colors">
                  <div className={cn("w-4 h-4 rounded border-2 transition-all flex items-center justify-center", step.completed ? "bg-emerald-500 border-emerald-500" : "border-slate-300 dark:border-slate-600")}>
                    {step.completed && <Check className="w-3 h-3 text-white stroke-[4]" />}
                  </div>
                  <span className={cn("text-sm", step.completed ? "text-slate-400 line-through" : "text-slate-700 dark:text-slate-200")}>{step.text}</span>
                </div>
              ))}

              <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700/50">
                <input
                  type="text"
                  placeholder="Add small step..."
                  className="flex-1 bg-transparent text-xs outline-none text-slate-600 dark:text-slate-400"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      addMicroStep(g.goalId, (e.target as HTMLInputElement).value);
                      (e.target as HTMLInputElement).value = '';
                    }
                  }}
                />
                <span className="text-[10px] text-slate-400 italic">Press Enter to add</span>
              </div>
            </div>
          </div>
        ))}
        {goals.length === 0 && (
          <div className="text-center p-12 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
            <p className="text-slate-500 font-medium">No active goals. Time to dream big.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Reports Dashboard
const ReportsDashboard = () => {
  const [standups, setStandups] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    Promise.all([
      fetch(`${API_URL}/standups/user-1`).then(res => res.json()),
      fetch(`${API_URL}/skills/user-1`).then(res => res.json())
    ]).then(([sData, skData]) => {
      setStandups(sData || []);
      setSkills(skData || []);
    });
  }, []);

  const consistencyScore = Math.min(100, Math.round((standups.length / 30) * 100)); // Monthly focus

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6 text-emerald-500">
          <Clock className="w-6 h-6" />
          <h3 className="text-xl font-bold">Consistency Score</h3>
        </div>
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
            <path className="text-slate-100 dark:text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            <path className="text-emerald-500" strokeDasharray={`${consistencyScore}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-slate-800 dark:text-white">{consistencyScore}%</span>
            <span className="text-[10px] text-slate-500 uppercase font-bold">Reliability</span>
          </div>
        </div>
        <p className="text-center text-sm text-slate-500">Based on your last 30 days of accountability standups.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-6 text-indigo-500">
          <Sparkles className="w-6 h-6" />
          <h3 className="text-xl font-bold">Velocity Metrics</h3>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Total Skills Mastery</span>
            <span className="text-lg font-bold text-indigo-500">{skills.length}</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Standups Logged</span>
            <span className="text-lg font-bold text-emerald-500">{standups.length}</span>
          </div>
        </div>
      </div>

      <div className="md:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-bold mb-4">Focus Friction Log</h3>
        <div className="space-y-3">
          {standups.slice(-5).reverse().map((s, i) => (
            <div key={i} className="text-sm p-3 border-l-4 border-rose-500 bg-rose-50/30 dark:bg-rose-950/10">
              <div className="font-bold text-rose-800 dark:text-rose-400 mb-1">{s.date} - Lost Focus on:</div>
              <div className="italic text-slate-600 dark:text-slate-400">"{s.focusLost || 'Stayed focused all day!'}"</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Schedule Manager
const ScheduleManager = () => {
  const [scheduleData, setScheduleData] = useState<any>({ tasks: {} });
  const [loading, setLoading] = useState(true);
  const date = new Date().toISOString().split('T')[0];
  const userId = 'user-1';

  const defaultSchedule = [
    { id: 'wake', time: '05:00 AM', activity: 'Wake up & Manifestation' },
    { id: 'deep1', time: '06:00 AM', activity: 'Deep Work (Slot 1)' },
    { id: 'breakfast', time: '09:00 AM', activity: 'Breakfast' },
    { id: 'deep2', time: '10:00 AM', activity: 'Deep Work (Slot 2)' },
    { id: 'learning', time: '02:00 PM', activity: 'Learning / Project Build' },
    { id: 'exercise', time: '06:00 PM', activity: 'Exercise & Networking' },
    { id: 'standup', time: '08:00 PM', activity: 'Daily Standup & Tomorrow Plan' },
  ];

  useEffect(() => {
    fetch(`${API_URL}/schedule/${userId}/${date}`)
      .then(res => res.json())
      .then(data => {
        setScheduleData(data || { tasks: {} });
        setLoading(false);
      });
  }, [date]);

  const toggleTask = async (taskId: string) => {
    const updatedTasks = {
      ...scheduleData.tasks,
      [taskId]: {
        ...scheduleData.tasks[taskId],
        completed: !scheduleData.tasks[taskId]?.completed
      }
    };
    const newData = { ...scheduleData, userId, date, tasks: updatedTasks };
    setScheduleData(newData);

    await fetch(`${API_URL}/schedule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
  };

  const updateComment = async (taskId: string, comment: string) => {
    const updatedTasks = {
      ...scheduleData.tasks,
      [taskId]: {
        ...scheduleData.tasks[taskId],
        comment
      }
    };
    const newData = { ...scheduleData, userId, date, tasks: updatedTasks };
    setScheduleData(newData);

    await fetch(`${API_URL}/schedule`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newData)
    });
  };

  if (loading) return <div className="p-8 text-center text-slate-500 font-medium">Loading Routine...</div>;

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Clock className="w-32 h-32 text-orange-500" />
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-orange-500/10 rounded-2xl">
            <Layers className="w-8 h-8 text-orange-500" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">Relentless Schedule</h2>
            <p className="text-sm text-slate-500 font-medium">Today's Protocol: {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-black text-orange-500 italic">"Go Hard."</div>
        </div>
      </div>

      <div className="space-y-4">
        {defaultSchedule.map((item) => {
          const taskState = scheduleData.tasks[item.id] || { completed: false, comment: '' };
          return (
            <div key={item.id} className={cn(
              "group relative flex flex-col gap-3 p-5 rounded-2xl border transition-all duration-300",
              taskState.completed
                ? "bg-emerald-50/50 dark:bg-emerald-950/10 border-emerald-200/50 dark:border-emerald-800/30"
                : "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 hover:border-orange-200 dark:hover:border-orange-900/30"
            )}>
              <div className="flex items-center gap-5">
                <button
                  onClick={() => toggleTask(item.id)}
                  className={cn(
                    "flex-shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500",
                    taskState.completed
                      ? "bg-emerald-500 border-emerald-500 scale-110 shadow-lg shadow-emerald-500/20"
                      : "border-slate-300 dark:border-slate-600 group-hover:border-orange-400"
                  )}
                >
                  {taskState.completed && <Check className="w-5 h-5 text-white stroke-[4]" />}
                </button>

                <div className="w-24 text-[10px] font-black text-orange-500 uppercase tracking-widest leading-none">
                  {item.time}
                </div>

                <div className="flex-1">
                  <h3 className={cn(
                    "font-bold text-lg transition-all",
                    taskState.completed ? "text-slate-400 line-through decoration-emerald-500/50" : "text-slate-800 dark:text-slate-100"
                  )}>
                    {item.activity}
                  </h3>
                </div>
              </div>

              <div className="ml-13 flex flex-col gap-2">
                <div className="flex items-center gap-2 group/input">
                  <NotebookPen className="w-3.5 h-3.5 text-slate-400 group-focus-within/input:text-orange-500 transition-colors" />
                  <input
                    type="text"
                    value={taskState.comment || ''}
                    onChange={(e) => updateComment(item.id, e.target.value)}
                    placeholder="Briefly, what did you achieve?"
                    className="flex-1 bg-transparent border-none text-sm text-slate-600 dark:text-slate-400 focus:ring-0 placeholder:text-slate-300 dark:placeholder:text-slate-600 font-medium"
                  />
                </div>
              </div>

              {taskState.completed && (
                <div className="absolute top-4 right-4 animate-pulse">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-slate-900 dark:bg-black rounded-2xl border border-slate-800 relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-all duration-700"></div>
        <p className="text-sm text-slate-400 font-medium italic relative z-10">
          <span className="text-orange-500 font-black mr-2">PROTOCOL:</span>
          "Discipline is doing what needs to be done, even when you don't want to do it. Execution is the only thing that matters."
        </p>
      </div>
    </div>
  );
};

// User Onboarding Component
const UserOnboarding = ({ plans, onComplete }: { plans: LearningPlan[], onComplete: (user: User, planId: string) => void }) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && id && selectedPlanId) {
      onComplete({ name, id }, selectedPlanId);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-950 p-4 md:p-10 overflow-y-auto">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-6 md:p-10 my-auto"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Rocket className="w-8 h-8 text-indigo-500" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Getting Started</h2>
          <p className="text-slate-500 font-medium mt-2">Identify yourself to start your journey.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name</label>
              <input
                required
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., John Doe"
                className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Access ID</label>
              <input
                required
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="e.g., user-123"
                className="w-full px-4 py-2.5 md:py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500/40 outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Select Your Course Path</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={cn(
                    "group flex items-start gap-4 p-4 rounded-2xl border-2 transition-all text-left relative overflow-hidden",
                    selectedPlanId === plan.id
                      ? "border-indigo-500 bg-indigo-500/5 ring-1 ring-indigo-500"
                      : "border-slate-100 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30"
                  )}
                >
                  <div className={cn(
                    "flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                    selectedPlanId === plan.id ? "bg-indigo-500 text-white" : "bg-white dark:bg-slate-800 text-slate-400 group-hover:text-indigo-500 shadow-sm"
                  )}>
                    {planIcons[plan.icon]}
                  </div>
                  <div className="flex-1 pr-6">
                    <div className="text-base font-bold text-slate-800 dark:text-white mb-1">{plan.name}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">{plan.description}</div>
                  </div>
                  {selectedPlanId === plan.id && (
                    <div className="absolute top-3 right-3">
                      <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center shadow-md">
                        <Check className="w-3 h-3 text-white stroke-[3px]" />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!name || !id || !selectedPlanId}
              className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-50 text-white text-lg font-black rounded-2xl shadow-xl shadow-indigo-500/20 active:scale-[0.98] transition-all"
            >
              Initialize My Plan
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

function App() {
  const [plans, setPlans] = useState<LearningPlan[]>([]);
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('learning_user');
    return saved ? JSON.parse(saved) : null;
  });
  const [activePlanId, setActivePlanId] = useState<string>(() => {
    return localStorage.getItem('active_plan_id') || '';
  });
  const [progress, setProgress] = useState<Progress>({});
  const [notes, setNotes] = useState<Notes>({});
  const [loading, setLoading] = useState(true);
  const [expandedPhases, setExpandedPhases] = useState<Set<string>>(new Set());
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set());
  const [validatingTopic, setValidatingTopic] = useState<{ id: string, name: string } | null>(null);

  const [showStandup, setShowStandup] = useState(false);

  useEffect(() => {
    // Check if we should pop up the nightly standup
    const hour = new Date().getHours();
    const lastStandup = localStorage.getItem('lastStandup');
    const todayStr = new Date().toDateString();

    if (hour >= 20 && lastStandup !== todayStr) {
      setShowStandup(true);
    }

    const fetchData = async () => {
      try {
        const plansResponse = await fetch(`${API_URL}/plans`);
        if (!plansResponse.ok) throw new Error('Plans not found');
        const plansData = await plansResponse.json();
        setPlans(plansData);

        if (plansData.length > 0 && !activePlanId) {
          setActivePlanId(plansData[0].id);
          setExpandedPhases(new Set([plansData[0].phases[0]?.id]));
        }

        if (!user) {
          setLoading(false);
          return;
        }

        const [progressRes, notesRes] = await Promise.all([
          fetch(`${API_URL}/progress/${user.id}`),
          fetch(`${API_URL}/notes/${user.id}`)
        ]);

        const progressData = progressRes.ok ? await progressRes.json() : {};
        const notesData = notesRes.ok ? await notesRes.json() : {};

        setProgress(progressData || {});
        setNotes(notesData || {});
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch initial data:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [user, activePlanId]);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    if (!loading && activePlan) {
      gsap.from(".phase-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".phases-container",
          start: "top 80%",
        }
      });
    }
  }, [loading, activePlanId]);

  const activePlan = plans.find(p => p.id === activePlanId);

  const updateStatus = async (id: string, status: string, type: 'module' | 'project' | 'topic') => {
    const newProgress = { ...progress, [id]: { status, type, timestamp: new Date().toISOString() } } as Progress;
    setProgress(newProgress);
    await fetch(`${API_URL}/progress`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user?.id, id, status, type })
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
      body: JSON.stringify({ userId: user?.id, topicId, ...data })
    });
  };

  const toggleTopic = (id: string, name: string) => {
    const currentStatus = progress[id]?.status;
    const newStatus = currentStatus === 'completed' ? 'pending' : 'completed';

    if (newStatus === 'completed') {
      setValidatingTopic({ id, name });
    } else {
      updateStatus(id, newStatus, 'topic');
    }
  }

  const confirmTopicMastery = async () => {
    if (validatingTopic && user) {
      await updateStatus(validatingTopic.id, 'completed', 'topic');

      // Post skill to API
      await fetch(`${API_URL}/skills`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, skillName: validatingTopic.name })
      });

      setValidatingTopic(null);
    }
  };

  const handleSaveStandup = async (data: any) => {
    if (!user) return;
    const date = new Date().toISOString().split('T')[0];
    await fetch(`${API_URL}/standups`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id, date, ...data })
    });
    localStorage.setItem('lastStandup', new Date().toDateString());
    setShowStandup(false);
  };

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

  const activeColor = (activePlan && colorClasses[activePlan.color]) ? colorClasses[activePlan.color] : colorClasses.purple;


  const handleOnboardingComplete = (newUser: User, planId: string) => {
    setUser(newUser);
    setActivePlanId(planId);
    localStorage.setItem('learning_user', JSON.stringify(newUser));
    localStorage.setItem('active_plan_id', planId);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('learning_user');
    localStorage.removeItem('active_plan_id');
  };

  if (!user) {
    return <UserOnboarding plans={plans} onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100">

      {/* Logout Overlay (Simple) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-400 hover:text-rose-500 transition-colors shadow-lg"
          title="Exit current user session"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
        <Scene3D />
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
            const colors = colorClasses[plan.color] || colorClasses.indigo;
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
                <span className={cn(isActive ? "text-white" : colors.text)}>{planIcons[plan.icon] || <BookOpen className="w-5 h-5" />}</span>
                <div className="text-left">
                  <div className="text-sm">{plan.name}</div>
                  <div className={cn("text-[10px] font-normal", isActive ? "text-white/80" : "text-slate-500")}>{plan.description.slice(0, 40)}...</div>
                </div>
              </button>
            );
          })}

          {/* Portfolio Tab */}
          <button
            onClick={() => setActivePlanId('portfolio')}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all border-2",
              activePlanId === 'portfolio'
                ? "bg-indigo-500 text-white border-transparent shadow-lg"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            <span className={cn(activePlanId === 'portfolio' ? "text-white" : "text-indigo-500")}><Trophy className="w-5 h-5" /></span>
            <div className="text-left">
              <div className="text-sm">My Portfolio</div>
              <div className={cn("text-[10px] font-normal", activePlanId === 'portfolio' ? "text-white/80" : "text-slate-500")}>Verified acquired skills</div>
            </div>
          </button>

          {/* Goals Tab */}
          <button
            onClick={() => setActivePlanId('goals')}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all border-2",
              activePlanId === 'goals'
                ? "bg-rose-500 text-white border-transparent shadow-lg"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            <span className={cn(activePlanId === 'goals' ? "text-white" : "text-rose-500")}><Rocket className="w-5 h-5" /></span>
            <div className="text-left">
              <div className="text-sm">Goals Engine</div>
              <div className={cn("text-[10px] font-normal", activePlanId === 'goals' ? "text-white/80" : "text-slate-500")}>Manifest plan & tracking</div>
            </div>
          </button>

          {/* Reports Tab */}
          <button
            onClick={() => setActivePlanId('reports')}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all border-2",
              activePlanId === 'reports'
                ? "bg-emerald-500 text-white border-transparent shadow-lg"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            <span className={cn(activePlanId === 'reports' ? "text-white" : "text-emerald-500")}><BarChart3 className="w-5 h-5" /></span>
            <div className="text-left">
              <div className="text-sm">Reports</div>
              <div className={cn("text-[10px] font-normal", activePlanId === 'reports' ? "text-white/80" : "text-slate-500")}>Consistency analytics</div>
            </div>
          </button>

          {/* Relentless Schedule Tab */}
          <button
            onClick={() => setActivePlanId('relentless-schedule')}
            className={cn(
              "flex items-center gap-3 px-5 py-3 rounded-xl font-semibold transition-all border-2",
              activePlanId === 'relentless-schedule'
                ? "bg-orange-500 text-white border-transparent shadow-lg"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
            )}
          >
            <span className={cn(activePlanId === 'relentless-schedule' ? "text-white" : "text-orange-500")}><Layers className="w-5 h-5" /></span>
            <div className="text-left">
              <div className="text-sm">Relentless Schedule</div>
              <div className={cn("text-[10px] font-normal", activePlanId === 'relentless-schedule' ? "text-white/80" : "text-slate-500")}>Daily routine & execution</div>
            </div>
          </button>
        </div>

        {/* Dynamic Content */}
        {activePlanId === 'portfolio' && <PortfolioDashboard />}
        {activePlanId === 'goals' && <GoalsDashboard />}
        {activePlanId === 'reports' && <ReportsDashboard />}
        {activePlanId === 'relentless-schedule' && <ScheduleManager />}

        {activePlan && activePlanId !== 'portfolio' && activePlanId !== 'goals' && activePlanId !== 'reports' && activePlanId !== 'relentless-schedule' && (
          <div className="grid gap-6 phases-container">
            {activePlan.phases.map((phase) => {
              const percent = calculatePhaseProgress(phase);
              const isOpen = expandedPhases.has(phase.id);

              return (
                <motion.div
                  key={phase.id}
                  className={cn(
                    "phase-card group relative bg-white dark:bg-slate-900/50 backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg",
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
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white">{phase.title}</h3>
                          {phase.id?.includes('fde') && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                              FDE Integration
                            </span>
                          )}
                          {phase.id?.includes('gpu') && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                              Advanced CUDA
                            </span>
                          )}
                        </div>
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
                            <div key={module.id} className={cn("bg-white dark:bg-slate-900 border rounded-xl shadow-sm p-5 md:p-6 flex flex-col xl:flex-row gap-6 relative overflow-hidden transition-all",
                              module.id?.includes('fde') ? "border-indigo-500 shadow-indigo-500/20 dark:shadow-indigo-500/20 shadow-lg ring-1 ring-indigo-500/50" :
                                module.id?.includes('gpu') ? "border-emerald-500 shadow-emerald-500/20 dark:shadow-emerald-500/20 shadow-lg ring-1 ring-emerald-500/50" :
                                  "border-slate-200 dark:border-slate-800")}>
                              {module.id?.includes('fde') && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-indigo-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-bl-xl z-0 shadow-sm">
                                  Forward Deployed Specialization
                                </div>
                              )}
                              {module.id?.includes('gpu') && (
                                <div className="absolute top-0 right-0 px-3 py-1 bg-emerald-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-bl-xl z-0 shadow-sm">
                                  GPU Computing Specialization
                                </div>
                              )}

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
                                            <div onClick={() => toggleTopic(topicId, topic.name)} className={cn("mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-all cursor-pointer flex-shrink-0", isCompleted ? "bg-emerald-500 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-600 hover:border-emerald-400")}>
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

        <AnimatePresence>
          {validatingTopic && (
            <DeepDiveModal
              topic={validatingTopic.name}
              onValidate={confirmTopicMastery}
              onCancel={() => setValidatingTopic(null)}
            />
          )}

          {showStandup && (
            <NightlyStandupModal
              onSave={handleSaveStandup}
              onCancel={() => {
                localStorage.setItem('lastStandup', new Date().toDateString());
                setShowStandup(false);
              }}
            />
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

export default App;

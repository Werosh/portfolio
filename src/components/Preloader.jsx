import React, { useState, useEffect } from 'react';
import { 
  Code2, Terminal, Database, Cpu, Binary, Cloud,
  GitBranch, Blocks, Wifi, Shield, Lock,
  Hash, FileCode, Box
} from 'lucide-react';

const Preloader = ({ onLoadingComplete }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('Initializing');
  const [exitAnimation, setExitAnimation] = useState(false);
  
  const tasks = [
    'Loading Components',
    'Building Interface',
    'Optimizing Assets',
    'Finalizing Setup'
  ];

  useEffect(() => {
    // Check if preloader has been shown before
    const hasShownPreloader = localStorage.getItem('hasShownPreloader');
    
    // If preloader has been shown before, skip it
    if (hasShownPreloader === 'true') {
      setLoading(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
      return;
    }

    const taskInterval = setInterval(() => {
      const taskIndex = Math.floor((progress / 100) * tasks.length);
      setCurrentTask(tasks[taskIndex] || tasks[tasks.length - 1]);
    }, 150);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const exitTimer = setTimeout(() => {
      setExitAnimation(true);
    }, 2700);

    const completeTimer = setTimeout(() => {
      setLoading(false);
      // Set flag in localStorage to indicate preloader has been shown
      localStorage.setItem('hasShownPreloader', 'true');
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3000);
    
    return () => {
      clearInterval(progressInterval);
      clearInterval(taskInterval);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete, progress]);

  if (!loading) return null;

  const icons = [Code2, Terminal, Database, Cpu, Binary, Cloud, GitBranch];

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[100] 
      transition-opacity duration-300 ${exitAnimation ? 'opacity-0' : 'opacity-100'}`}>
      <div className={`transition-all duration-300 ${exitAnimation ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Animated Background Grid */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 grid grid-cols-8 gap-4">
            {Array(64).fill(0).map((_, i) => (
              <div 
                key={i}
                className="w-full h-full rounded-full bg-cyan-500 blur-xl"
                style={{
                  animation: `pulse 2s infinite`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0.1
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative flex flex-col items-center">
          {/* Logo/Name Section */}
          <div className={`mb-12 transition-all duration-300 ${exitAnimation ? 'opacity-0 -translate-y-8' : 'opacity-100'}`}>
            <div className="relative">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-clip-text">
                Werosh Kriyanjala
              </div>
              <div className="mt-2 font-mono text-sm text-center text-cyan-400">{currentTask}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className={`w-96 transition-all duration-300 ${exitAnimation ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="relative h-1 overflow-hidden rounded-full bg-slate-800">
              <div 
                className="h-full transition-all duration-150 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-white animate-pulse opacity-30" />
              </div>
            </div>
            
            {/* Progress Stats */}
            <div className="flex justify-between mt-4 font-mono text-sm text-cyan-400">
              <span>{progress}% Complete</span>
              <span>{currentTask}</span>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="flex justify-center gap-6 mt-12">
            {icons.map((Icon, index) => (
              <div 
                key={index} 
                className={`transition-all duration-300 ${
                  exitAnimation ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
                }`}
                style={{
                  transitionDelay: `${index * 0.02}s`
                }}
              >
                <Icon 
                  className="text-cyan-400" 
                  size={24}
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(34, 211, 238, 0.5))',
                    animation: `float ${1 + index * 0.1}s infinite alternate ease-in-out`,
                    animationDelay: `${index * 0.1}s`
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
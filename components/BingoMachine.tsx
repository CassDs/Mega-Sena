import React, { useEffect, useState } from 'react';

interface BingoMachineProps {
  active: boolean;
  onNumberDraw: (num: number) => void;
  currentNumbers: number[];
  onFinish: () => void;
}

export const BingoMachine: React.FC<BingoMachineProps> = ({ active, onNumberDraw, currentNumbers, onFinish }) => {
  const [displayNumber, setDisplayNumber] = useState<number | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(() => {
    if (!active) return;

    if (currentNumbers.length >= 6) {
      onFinish();
      return;
    }

    setIsShuffling(true);
    let shuffleCount = 0;
    
    // Fast shuffle animation before picking a number
    const shuffleInterval = setInterval(() => {
      setDisplayNumber(Math.floor(Math.random() * 60) + 1);
      shuffleCount++;

      if (shuffleCount > 10) { // How many "flickers" before locking
        clearInterval(shuffleInterval);
        
        // Pick a real unique number
        let nextNum;
        do {
          nextNum = Math.floor(Math.random() * 60) + 1;
        } while (currentNumbers.includes(nextNum));

        setDisplayNumber(nextNum);
        setIsShuffling(false);
        onNumberDraw(nextNum);
      }
    }, 100); // Speed of shuffle

    return () => clearInterval(shuffleInterval);
  }, [active, currentNumbers.length]); // Dependency on length triggers next loop

  if (!active && currentNumbers.length === 0) return null;

  return (
    <div className="flex flex-col items-center justify-center py-6 bg-emerald-900 rounded-2xl shadow-inner mb-6 text-white border-4 border-emerald-700">
      <h3 className="text-emerald-200 font-bold uppercase tracking-widest text-sm mb-2">Sorteio Automático</h3>
      <div className="relative w-24 h-24 flex items-center justify-center bg-white rounded-full text-emerald-800 text-5xl font-black shadow-[0_0_20px_rgba(255,255,255,0.3)]">
        {displayNumber || '?'}
        {isShuffling && (
          <div className="absolute inset-0 rounded-full border-4 border-emerald-400 border-t-transparent animate-spin" />
        )}
      </div>
      <div className="mt-4 flex gap-2">
        {currentNumbers.map((n, idx) => (
          <div key={idx} className="w-8 h-8 rounded-full bg-emerald-800 flex items-center justify-center font-bold text-sm border border-emerald-600">
            {n}
          </div>
        ))}
        {Array.from({length: 6 - currentNumbers.length}).map((_, idx) => (
           <div key={`empty-${idx}`} className="w-8 h-8 rounded-full bg-emerald-950/50 border border-emerald-900" />
        ))}
      </div>
    </div>
  );
};
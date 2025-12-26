import React, { useMemo } from 'react';
import { TicketData, MatchResult } from '../types';
import { Trophy, Star, Medal, Building2, BrainCircuit } from 'lucide-react';

interface TicketCardProps {
  ticket: TicketData;
  drawnNumbers: number[];
  highlight: boolean;
}

export const TicketCard: React.FC<TicketCardProps> = ({ ticket, drawnNumbers, highlight }) => {
  const result: MatchResult = useMemo(() => {
    const matches = ticket.numbers.filter(n => drawnNumbers.includes(n)).length;
    return {
      matches,
      isQuadra: matches === 4,
      isQuina: matches === 5,
      isSena: matches === 6
    };
  }, [ticket.numbers, drawnNumbers]);

  const isSquad = ticket.group.toLowerCase().includes('squad');
  
  // Theme Configuration
  const theme = {
    // Container Styles
    card: isSquad
      ? 'bg-gradient-to-br from-white via-slate-50 to-slate-100 border-amber-200/60 text-slate-700'
      : 'bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 border-cyan-500/30 text-slate-300',
    
    // Highlight/Border Effects
    borderEffect: highlight 
      ? (isSquad ? 'ring-2 ring-amber-400 shadow-xl shadow-amber-500/20 scale-[1.02] z-10' : 'ring-2 ring-cyan-400 shadow-xl shadow-cyan-500/20 scale-[1.02] z-10')
      : 'hover:border-opacity-100 hover:shadow-lg',
    
    // Shadow Depth
    shadow: isSquad
      ? 'shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
      : 'shadow-[0_8px_30px_rgb(0,0,0,0.4)]',
      
    // Badge Styles
    badge: isSquad
      ? 'bg-amber-50 text-amber-900 border border-amber-200'
      : 'bg-slate-800/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm',
      
    // Icon
    icon: isSquad ? <Building2 size={14} className="text-amber-700" /> : <BrainCircuit size={14} className="text-cyan-400" />,
    
    // Numbers
    numberBase: isSquad
      ? 'bg-white border border-slate-200 text-slate-500'
      : 'bg-slate-800/50 border border-slate-700 text-slate-400',
      
    numberHit: isSquad
      ? 'bg-gradient-to-tr from-amber-500 to-yellow-400 text-amber-950 border-amber-500 shadow-lg shadow-amber-200'
      : 'bg-gradient-to-tr from-cyan-600 to-indigo-500 text-white border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)]',
      
    // Progress Bar
    progressBg: isSquad ? 'bg-slate-200' : 'bg-slate-800',
    progressFill: isSquad ? 'bg-gradient-to-r from-amber-400 to-yellow-500' : 'bg-gradient-to-r from-cyan-500 to-indigo-500'
  };

  // Winning Overrides
  const getWinningStyles = () => {
    if (result.isSena) return isSquad 
      ? 'ring-4 ring-green-500 bg-green-50 shadow-green-200' 
      : 'ring-4 ring-green-500 bg-slate-900 shadow-[0_0_50px_rgba(34,197,94,0.3)]';
    if (result.isQuina) return isSquad 
      ? 'ring-4 ring-blue-500 bg-blue-50 shadow-blue-200' 
      : 'ring-4 ring-blue-500 bg-slate-900 shadow-[0_0_50px_rgba(59,130,246,0.3)]';
    if (result.isQuadra) return isSquad 
      ? 'ring-4 ring-amber-500 bg-amber-50 shadow-amber-200' 
      : 'ring-4 ring-yellow-500 bg-slate-900 shadow-[0_0_50px_rgba(234,179,8,0.3)]';
    return '';
  };

  const winningClass = getWinningStyles();

  return (
    <div 
      className={`
        relative p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-4 
        ${theme.card} 
        ${theme.shadow}
        ${winningClass || theme.borderEffect}
      `}
    >
      {/* Header */}
      <div className={`flex justify-between items-start pb-3 border-b ${isSquad ? 'border-slate-100' : 'border-slate-800'}`}>
        <div>
           <div className="flex items-center gap-2 mb-2">
             <span className={`text-[10px] font-black uppercase tracking-widest ${isSquad ? 'text-slate-400' : 'text-slate-500'}`}>
              JOGO #{ticket.id.toString().padStart(2, '0')}
             </span>
             <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold ${isSquad ? 'bg-slate-100 text-slate-500' : 'bg-slate-800 text-slate-400'}`}>
              {ticket.type} Nº
             </span>
           </div>
           
           <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg w-fit font-bold text-xs uppercase tracking-tight ${theme.badge}`}>
             {theme.icon}
             {ticket.group}
           </div>
        </div>

        {/* Win Status Badges */}
        <div className="flex flex-col items-end gap-1.5">
          {result.isSena && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500 text-white font-black text-xs shadow-lg animate-pulse border-2 border-green-400">
              <Trophy size={14} /> MEGA SENA
            </div>
          )}
          {result.isQuina && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500 text-white font-black text-xs shadow-lg border-2 border-blue-400">
              <Star size={14} /> QUINA
            </div>
          )}
          {result.isQuadra && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500 text-white font-black text-xs shadow-lg border-2 border-yellow-400">
              <Medal size={14} /> QUADRA
            </div>
          )}
        </div>
      </div>

      {/* Numbers Grid */}
      <div className="flex flex-wrap gap-2 justify-center py-2">
        {ticket.numbers.map((num) => {
          const isHit = drawnNumbers.includes(num);
          return (
            <div
              key={num}
              className={`
                w-10 h-10 flex items-center justify-center rounded-full text-base font-bold transition-all duration-500 shadow-sm
                ${isHit ? `${theme.numberHit} scale-110 z-10` : theme.numberBase}
              `}
            >
              {num.toString().padStart(2, '0')}
            </div>
          );
        })}
      </div>
      
      {/* Progress Bar */}
      <div className={`w-full h-2 rounded-full mt-auto overflow-hidden ${theme.progressBg}`}>
        <div 
          className={`h-full transition-all duration-500 ${
             result.isSena ? 'bg-green-500' : 
             result.isQuina ? 'bg-blue-500' : 
             result.isQuadra ? 'bg-yellow-500' : theme.progressFill
          }`}
          style={{ width: `${(result.matches / 6) * 100}%` }}
        />
      </div>
    </div>
  );
};
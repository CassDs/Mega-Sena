import React from 'react';
import { X, Trophy, PartyPopper, CalendarDays, Frown } from 'lucide-react';
import { MatchResult } from '../types';

interface CelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  results: MatchResult[];
}

export const CelebrationModal: React.FC<CelebrationModalProps> = ({ isOpen, onClose, results }) => {
  if (!isOpen) return null;

  // Determine best result
  const sena = results.find(r => r.isSena);
  const quina = results.find(r => r.isQuina);
  const quadra = results.find(r => r.isQuadra);

  let content;

  if (sena) {
    content = (
      <div className="text-center animate-bounce-in">
        <div className="inline-flex p-4 rounded-full bg-green-100 text-green-600 mb-4 shadow-lg ring-4 ring-green-50">
          <Trophy size={64} className="animate-pulse" />
        </div>
        <h2 className="text-4xl font-extrabold text-green-700 mb-2">MEGA SENA!</h2>
        <p className="text-xl text-green-800 font-medium">Parabéns, você ganhou na Mega Sena!</p>
        <p className="mt-4 text-green-600">Sua vida acabou de mudar!</p>
      </div>
    );
  } else if (quina) {
    content = (
      <div className="text-center">
        <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4 shadow-lg ring-4 ring-blue-50">
          <PartyPopper size={64} className="animate-bounce" />
        </div>
        <h2 className="text-4xl font-extrabold text-blue-700 mb-2">QUINA!</h2>
        <p className="text-xl text-blue-800 font-medium">Parabéns, você ganhou na quinta!</p>
      </div>
    );
  } else if (quadra) {
    content = (
      <div className="text-center">
        <div className="inline-flex p-4 rounded-full bg-yellow-100 text-yellow-600 mb-4 shadow-lg ring-4 ring-yellow-50">
          <PartyPopper size={64} />
        </div>
        <h2 className="text-4xl font-extrabold text-yellow-700 mb-2">QUADRA!</h2>
        <p className="text-xl text-yellow-800 font-medium">Parabéns, você ganhou na quadra!</p>
      </div>
    );
  } else {
    content = (
      <div className="text-center">
        <div className="inline-flex p-4 rounded-full bg-red-100 text-red-500 mb-4 shadow-lg ring-4 ring-red-50">
          <CalendarDays size={64} />
        </div>
        <h2 className="text-3xl font-bold text-gray-700 mb-2">Não foi dessa vez...</h2>
        <p className="text-xl text-gray-600 font-medium mb-4">Mas lhe desejo um Feliz Ano Novo!</p>
        <div className="flex justify-center gap-2">
             <span className="animate-spin">✨</span> 
             <span className="font-bold text-emerald-600">2026</span>
             <span className="animate-spin">✨</span> 
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform transition-all scale-100 border border-gray-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
        {content}
        <button
          onClick={onClose}
          className="mt-8 w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
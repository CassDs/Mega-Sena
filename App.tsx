import React, { useState, useEffect, useMemo } from 'react';
import { TICKETS, MAX_SELECTION } from './constants';
import { GameMode } from './types';
import { TicketCard } from './components/TicketCard';
import { NumberSelector } from './components/NumberSelector';
import { CelebrationModal } from './components/CelebrationModal';
import { BingoMachine } from './components/BingoMachine';
import { RefreshCw, Play, CheckCircle2, RotateCcw, MonitorPlay, Keyboard, Dices } from 'lucide-react';

export default function App() {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [mode, setMode] = useState<GameMode>(GameMode.LIVE);
  const [showResultModal, setShowResultModal] = useState(false);
  const [bingoActive, setBingoActive] = useState(false);

  // Handle number toggling
  const handleToggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(prev => prev.filter(n => n !== num));
    } else {
      if (selectedNumbers.length < MAX_SELECTION) {
        setSelectedNumbers(prev => [...prev, num]);
      }
    }
  };

  // Reset logic
  const handleReset = () => {
    setSelectedNumbers([]);
    setShowResultModal(false);
    setBingoActive(false);
  };

  // Switch modes
  const handleModeChange = (newMode: GameMode) => {
    handleReset();
    setMode(newMode);
  };

  // Calculate matches for specific interactions
  const checkMatches = () => {
    if (selectedNumbers.length !== 6) return; // Should allow checking earlier? Prompt implies 6 numbers for the final check animation.
    setShowResultModal(true);
  };

  // Automated logic for Live Mode: Whenever numbers change, check for winners automatically?
  // The prompt says "Live... as he types... ticket focus".
  // So we don't need a modal popup for Live mode until the end maybe, or just visual feedback.
  // But the prompt says "Se os seis numeros... estiverem em alguns... colocar o bilhete em tela".
  // "Caso nenhuma... aparecer uma animação".
  // This implies a final state check is needed for the "Sad/Happy New Year" message.

  useEffect(() => {
    if (mode === GameMode.LIVE && selectedNumbers.length === 6) {
      // Small delay to allow user to see the last number selected
      const timer = setTimeout(() => {
        checkMatches();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [selectedNumbers, mode]);


  // Sort tickets: Winning ones first
  const sortedTickets = useMemo(() => {
    return [...TICKETS].sort((a, b) => {
      const matchesA = a.numbers.filter(n => selectedNumbers.includes(n)).length;
      const matchesB = b.numbers.filter(n => selectedNumbers.includes(n)).length;
      return matchesB - matchesA;
    });
  }, [selectedNumbers]);

  // Derived results for modal
  const results = useMemo(() => {
    return TICKETS.map(ticket => {
        const matches = ticket.numbers.filter(n => selectedNumbers.includes(n)).length;
        return {
            matches,
            isQuadra: matches === 4,
            isQuina: matches === 5,
            isSena: matches === 6
        };
    });
  }, [selectedNumbers]);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Header */}
      <header className="bg-emerald-900 text-white shadow-lg sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-500 p-2 rounded-lg">
                <Dices className="text-white w-6 h-6" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">Mega Conferência</h1>
            </div>
            
            <div className="flex bg-emerald-800/50 p-1 rounded-xl">
              <button 
                onClick={() => handleModeChange(GameMode.LIVE)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === GameMode.LIVE ? 'bg-white text-emerald-900 shadow-sm' : 'text-emerald-100 hover:bg-emerald-800'}`}
              >
                <MonitorPlay size={16} /> Ao Vivo
              </button>
              <button 
                onClick={() => handleModeChange(GameMode.MANUAL)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === GameMode.MANUAL ? 'bg-white text-emerald-900 shadow-sm' : 'text-emerald-100 hover:bg-emerald-800'}`}
              >
                <Keyboard size={16} /> Completo
              </button>
              <button 
                onClick={() => handleModeChange(GameMode.BINGO)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${mode === GameMode.BINGO ? 'bg-white text-emerald-900 shadow-sm' : 'text-emerald-100 hover:bg-emerald-800'}`}
              >
                <RefreshCw size={16} /> Bingo
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Left Column: Input / Controls */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Bingo Special Component */}
            {mode === GameMode.BINGO && (
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                <BingoMachine 
                    active={bingoActive}
                    currentNumbers={selectedNumbers}
                    onNumberDraw={(num) => handleToggleNumber(num)}
                    onFinish={() => {
                        setBingoActive(false);
                        setTimeout(() => checkMatches(), 1000);
                    }}
                />
                {!bingoActive && selectedNumbers.length === 0 && (
                    <button 
                        onClick={() => setBingoActive(true)}
                        className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 transition-all active:scale-95"
                    >
                        <Play fill="currentColor" /> INICIAR SORTEIO
                    </button>
                )}
                 {!bingoActive && selectedNumbers.length > 0 && (
                     <button 
                        onClick={handleReset}
                        className="w-full py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 flex items-center justify-center gap-2"
                     >
                        <RotateCcw size={18} /> Reiniciar Bingo
                     </button>
                 )}
              </div>
            )}

            {/* Standard Number Selector (Hidden in Bingo mode if active) */}
            {mode !== GameMode.BINGO && (
                <NumberSelector 
                    selectedNumbers={selectedNumbers}
                    onToggle={handleToggleNumber}
                    disabled={mode === GameMode.BINGO} // Disabled manual input during bingo
                />
            )}

            {/* Actions for Manual Mode */}
            {mode === GameMode.MANUAL && (
              <div className="flex gap-3">
                 <button 
                  onClick={handleReset}
                  className="flex-1 py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Limpar
                </button>
                <button 
                  onClick={checkMatches}
                  disabled={selectedNumbers.length !== 6}
                  className="flex-[2] py-3 bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 disabled:opacity-50 disabled:shadow-none transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle2 /> CONFERIR
                </button>
              </div>
            )}
             
             {mode === GameMode.LIVE && (
                  <button 
                  onClick={handleReset}
                  className="w-full py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <RotateCcw size={16} /> Limpar Seleção
                </button>
             )}

            {/* Stats Summary */}
            <div className="bg-slate-800 text-slate-300 p-6 rounded-2xl">
                <h4 className="font-semibold text-white mb-4">Resumo da Aposta</h4>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>Jogos Cadastrados:</span>
                        <span className="text-white font-mono">{TICKETS.length}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Números Sorteados:</span>
                        <span className="text-white font-mono">{selectedNumbers.length}/6</span>
                    </div>
                    {mode === GameMode.LIVE && selectedNumbers.length > 0 && (
                         <div className="mt-4 pt-4 border-t border-slate-700">
                             <p className="text-xs text-slate-400">Modo Ao Vivo: Os jogos com mais acertos sobem automaticamente para o topo.</p>
                         </div>
                    )}
                </div>
            </div>
          </div>

          {/* Right Column: Tickets Display */}
          <div className="lg:col-span-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              Seus Bilhetes
              <span className="text-sm font-normal text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                {selectedNumbers.length > 0 ? 'Ordenados por acertos' : 'Lista original'}
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sortedTickets.map((ticket) => {
                 const matchCount = ticket.numbers.filter(n => selectedNumbers.includes(n)).length;
                 // In live mode, highlight tickets that have the LAST drawn number to show "Focus"
                 const hasLastDrawn = selectedNumbers.length > 0 && ticket.numbers.includes(selectedNumbers[selectedNumbers.length - 1]);
                 
                 // Also highlight if it has significant matches
                 const isWinning = matchCount >= 4;
                 
                 return (
                    <TicketCard 
                        key={ticket.id} 
                        ticket={ticket} 
                        drawnNumbers={selectedNumbers}
                        highlight={mode === GameMode.LIVE && (hasLastDrawn || isWinning)}
                    />
                 );
              })}
            </div>
          </div>
        </div>
      </main>

      <CelebrationModal 
        isOpen={showResultModal} 
        onClose={() => setShowResultModal(false)}
        results={results}
      />
    </div>
  );
}
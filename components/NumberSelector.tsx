import React from 'react';
import { TOTAL_NUMBERS, MAX_SELECTION } from '../constants';

interface NumberSelectorProps {
  selectedNumbers: number[];
  onToggle: (num: number) => void;
  disabled: boolean;
}

export const NumberSelector: React.FC<NumberSelectorProps> = ({ selectedNumbers, onToggle, disabled }) => {
  const numbers = Array.from({ length: TOTAL_NUMBERS }, (_, i) => i + 1);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold text-gray-700 mb-4 flex items-center justify-between">
        <span>Selecione os Números</span>
        <span className={`text-sm px-3 py-1 rounded-full ${selectedNumbers.length === MAX_SELECTION ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'}`}>
          {selectedNumbers.length} / {MAX_SELECTION}
        </span>
      </h3>
      
      <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
        {numbers.map((num) => {
          const isSelected = selectedNumbers.includes(num);
          const isMaxReached = selectedNumbers.length >= MAX_SELECTION;
          const isClickable = isSelected || (!isMaxReached && !disabled);

          return (
            <button
              key={num}
              onClick={() => isClickable && onToggle(num)}
              disabled={!isClickable}
              className={`
                aspect-square rounded-lg flex items-center justify-center font-semibold text-sm transition-all duration-200
                ${isSelected 
                  ? 'bg-emerald-600 text-white shadow-md scale-95 ring-2 ring-emerald-300 ring-offset-1' 
                  : 'bg-slate-50 text-slate-600 hover:bg-emerald-50 hover:text-emerald-600'
                }
                ${!isClickable && !isSelected ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
              `}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};
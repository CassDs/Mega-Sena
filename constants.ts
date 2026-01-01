import { TicketData } from './types';

export const TICKETS: TicketData[] = [
  // Bilhetes da Squad Seguros
  { id: 1, numbers: [6, 12, 31, 34, 44, 51, 55], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 2, numbers: [1, 6, 17, 22, 24, 35, 52], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 3, numbers: [3, 15, 21, 27, 36, 42, 56], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 4, numbers: [7, 13, 28, 29, 41, 47, 50], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 5, numbers: [9, 12, 16, 25, 32, 48, 60], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 6, numbers: [10, 15, 21, 28, 33, 37, 56], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 7, numbers: [3, 14, 23, 25, 40, 42, 53], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 8, numbers: [8, 11, 13, 20, 28, 31, 58], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 9, numbers: [2, 7, 14, 23, 39, 44, 55], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 10, numbers: [1, 10, 19, 26, 30, 38, 52], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 11, numbers: [9, 17, 25, 32, 44, 50, 59], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 12, numbers: [6, 14, 33, 46, 49, 54, 57], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 13, numbers: [4, 18, 23, 26, 34, 41, 51], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 14, numbers: [2, 5, 9, 18, 21, 24, 43, 45, 58], type: 9, group: 'Bilhetes da Squad Seguros' },
  
  // Novos Bilhetes da Squad Seguros
  { id: 21, numbers: [1, 10, 11, 13, 14, 20, 25, 48], type: 8, group: 'Bilhetes da Squad Seguros' },
  { id: 22, numbers: [4, 13, 16, 23, 48, 51, 56], type: 7, group: 'Bilhetes da Squad Seguros' },
  { id: 23, numbers: [8, 9, 21, 25, 40, 52, 60], type: 7, group: 'Bilhetes da Squad Seguros' },

  // Bilhetes Neurotech
  { id: 15, numbers: [3, 4, 7, 10, 12, 17, 22, 42, 56], type: 9, group: 'Bilhetes Neurotech' },
  { id: 16, numbers: [11, 15, 19, 24, 37, 51, 58], type: 7, group: 'Bilhetes Neurotech' },
  { id: 17, numbers: [2, 9, 13, 21, 25, 55, 60], type: 7, group: 'Bilhetes Neurotech' },
  { id: 18, numbers: [2, 5, 16, 25, 26, 27, 33, 36, 55], type: 9, group: 'Bilhetes Neurotech' },
  { id: 19, numbers: [3, 4, 12, 15, 19, 22, 24, 37, 56, 58], type: 10, group: 'Bilhetes Neurotech' },
  { id: 20, numbers: [5, 7, 9, 10, 11, 13, 17, 21, 33, 42, 51, 57, 60], type: 13, group: 'Bilhetes Neurotech' },
];

export const TOTAL_NUMBERS = 60;
export const MAX_SELECTION = 6;
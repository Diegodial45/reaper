import React, { useState } from 'react';
import { Search } from 'lucide-react';

type PlaylistItem = {
  id?: string;
  name: string;
  time?: string;
  color?: string;
  type?: 'block';
};

const mockData: PlaylistItem[] = [
  { type: 'block', name: 'BLOCO 01' },
  { id: '01', name: 'ABERTURA - AO UNICO - SOU DE JESUS', time: '06:54', color: 'text-yellow-400' },
  { id: '02', name: 'ABERTURA-ESCUDO-SOU DE JESUS==== COLADAS', time: '08:58', color: 'text-yellow-400' },
  { id: '03', name: 'ALIVIO', time: '04:21', color: 'text-yellow-400' },
  { id: '04', name: 'AO UNICO', time: '02:33', color: 'text-yellow-400' },
  { id: '05', name: 'BENÇÃOS SEM FIM', time: '03:20', color: 'text-yellow-400' },
  { id: '06', name: 'BONDADE DE DEUS', time: '04:50', color: 'text-yellow-400' },
  { id: '07', name: 'AMOR E GRAÇA', time: '03:10', color: 'text-yellow-400' },
  { id: '08', name: 'CAMINHADA', time: '04:11', color: 'text-yellow-400' },
  { id: '09', name: 'DE QUEM É', time: '05:23', color: 'text-yellow-400' },
  { type: 'block', name: 'BLOCO 02' },
  { id: '10', name: 'DESERTO', time: '04:47', color: 'text-emerald-400' },
  { id: '11', name: 'DEUS DE PROMESSAS', time: '04:07', color: 'text-emerald-400' },
  { id: '12', name: 'ESCUDO', time: '04:39', color: 'text-emerald-400' },
  { id: '13', name: 'DEUS É BOM', time: '03:25', color: 'text-emerald-400' },
  { id: '14', name: 'DEUS PROVERA', time: '04:55', color: 'text-emerald-400' },
  { id: '15', name: 'É HOJE', time: '03:50', color: 'text-emerald-400' },
  { id: '16', name: 'EU SO QUERO ADORAR', time: '04:39', color: 'text-emerald-400' },
  { type: 'block', name: 'BLOCO 03' },
  { id: '17', name: 'EU SOU DE JESUS', time: '02:58', color: 'text-blue-400' },
  { id: '18', name: 'EU TE AMO TANTO', time: '03:39', color: 'text-blue-400' },
  { id: '19', name: 'EU TENHO UM DEUS', time: '03:00', color: 'text-blue-400' },
  { id: '20', name: 'ABERTURA 2026/(G)MENOR', time: '01:30', color: 'text-blue-400' },
  { id: '21', name: 'FELIZ COM JESUS', time: '02:24', color: 'text-blue-400' },
  { id: '22', name: 'FOI DEUS', time: '03:37', color: 'text-blue-400' },
  { id: '23', name: 'HEY PAI', time: '03:27', color: 'text-blue-400' },
];

export default function App() {
  const [selectedId, setSelectedId] = useState<string | null>('01');

  // Função para enviar comandos para o REAPER (REAPER Web Interface API)
  const sendReaperCommand = (cmd: string) => {
    // Em produção (rodando dentro do REAPER), isso chama a API local dele
    fetch(`/_/${cmd}`).catch(err => console.log("Comando REAPER simulado:", cmd));
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 font-sans select-none gap-6">
      
      {/* Neon Title Header */}
      <div className="text-center font-bold">
        <h2 className="text-pink-500 tracking-widest text-lg uppercase drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]">ATUALIZAÇÃO</h2>
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-yellow-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.6)]" style={{ WebkitTextStroke: '1px #22c55e' }}>
          VS HOOK 2.0
        </h1>
        <div className="flex items-center justify-center gap-4 mt-2">
          <div className="h-[2px] w-16 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
          <h2 className="text-green-400 tracking-[0.3em] text-2xl drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]">DISPONÍVEL</h2>
          <div className="h-[2px] w-16 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,1)]"></div>
        </div>
      </div>

      {/* Outer glow container */}
      <div className="relative w-full max-w-3xl rounded-xl p-1 bg-gradient-to-br from-green-500 via-emerald-600 to-purple-600 shadow-[0_0_30px_rgba(34,197,94,0.4)]">
        
        {/* Main App Container */}
        <div className="bg-[#1e1e2f] rounded-lg p-2 border-[4px] border-[#252538] flex flex-col gap-2 shadow-inner">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center text-xs px-1 text-white border-b border-gray-600 pb-1">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 font-bold border border-yellow-400 px-2 py-0.5 rounded-sm">TODAS</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-yellow-400 font-mono tracking-wider border border-yellow-400 px-2 py-0.5 rounded-sm">Total: 03:03:17</span>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar musica..." 
                  className="bg-gray-800 text-gray-300 px-2 py-0.5 text-xs outline-none border border-gray-600 rounded-sm w-48 focus:border-yellow-400"
                />
              </div>
            </div>
          </div>

          {/* Controls Grid */}
          <div className="grid grid-cols-6 gap-1 mt-1">
            <button className="bg-[#1a8545] hover:bg-green-600 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors">Repertórios</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors">Músicas</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors">Mixer</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors">Premix</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors">Tuner</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors">Config</button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            <button onClick={() => sendReaperCommand('1007')} className="bg-[#1a8545] hover:bg-green-600 text-white font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">Play</button>
            <button className="bg-[#0b5c46] hover:bg-emerald-700 text-white font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">Auto</button>
            <button className="bg-[#2a3c73] hover:bg-blue-800 text-white font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">Loop</button>
            <button className="bg-[#2a3c73] hover:bg-blue-800 text-white font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">AT/BL</button>
            <button className="bg-[#993434] hover:bg-red-700 text-white font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">Parts</button>
            <button className="bg-[#993434] hover:bg-red-700 text-white font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">Blocos</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-sm py-1 rounded-sm shadow-sm transition-colors cursor-pointer">Timer</button>
          </div>

          <div className="flex justify-between items-center text-xs text-white">
            <span className="font-bold tracking-wide">Repertórios</span>
            <div className="flex gap-1">
              <button className="bg-[#1a8545] hover:bg-green-600 px-4 py-1 rounded-sm font-bold shadow-sm transition-colors">Atualizar</button>
              <button className="bg-[#993434] hover:bg-red-700 px-4 py-1 rounded-sm font-bold shadow-sm transition-colors">View</button>
            </div>
          </div>

          {/* Playlist Area */}
          <div className="bg-[#0d1424] border-2 border-blue-900/50 rounded-sm mt-1 h-[450px] overflow-y-auto font-mono text-sm relative custom-scrollbar shadow-inner">
             {mockData.map((item, idx) => {
               if (item.type === 'block') {
                 return (
                   <div key={idx} className="flex items-center text-[#55869c] text-xs py-1 px-2 border-b border-dashed border-[#55869c]/30">
                     <span className="mr-2">--</span>
                     <span className="flex-1 overflow-hidden whitespace-nowrap">................................................................</span>
                     <span className="mx-2 whitespace-nowrap bg-[#0d1424] px-2">{item.name}</span>
                     <span className="flex-1 overflow-hidden whitespace-nowrap">................................................................</span>
                   </div>
                 );
               }

               const isSelected = selectedId === item.id;

               return (
                 <div 
                   key={idx} 
                   onClick={() => setSelectedId(item.id || null)}
                   className={`flex justify-between items-center px-3 py-1 cursor-pointer transition-colors border-l-2
                     ${isSelected ? 'bg-blue-900/40 border-blue-400' : 'hover:bg-white/5 border-transparent'}
                   `}
                 >
                   <div className="flex gap-3">
                     <span className="text-gray-400 w-5">{item.id}</span>
                     <span className={`${item.color} font-medium tracking-tight drop-shadow-md truncate max-w-[400px]`}>
                       {item.name}
                     </span>
                   </div>
                   <span className="text-yellow-200/80 text-xs tracking-wider">
                     {item.time}
                   </span>
                 </div>
               );
             })}
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-end gap-1 mt-2">
            <button className="bg-[#2a5b9e] hover:bg-blue-600 text-white font-bold text-xs px-6 py-1.5 rounded-sm shadow-sm transition-colors cursor-pointer">Export</button>
            <button className="bg-[#993434] hover:bg-red-700 text-white font-bold text-xs px-6 py-1.5 rounded-sm shadow-sm transition-colors cursor-pointer">Live</button>
            <button onClick={() => sendReaperCommand('1016')} className="bg-[#1a8545] hover:bg-green-600 text-white font-bold text-xs px-6 py-1.5 rounded-sm shadow-sm transition-colors cursor-pointer">Stop</button>
            <button className="bg-[#20b85a] hover:bg-green-500 text-black font-bold text-xs px-6 py-1.5 rounded-sm shadow-sm transition-colors cursor-pointer">TP/1</button>
            <button className="bg-[#20b85a] hover:bg-green-500 text-black font-bold text-xs px-6 py-1.5 rounded-sm shadow-sm transition-colors cursor-pointer">TP/2</button>
            <button className="bg-[#bda12c] hover:bg-yellow-500 text-black font-bold text-xs px-6 py-1.5 rounded-sm shadow-sm transition-colors cursor-pointer">Ajuda</button>
          </div>

        </div>
      </div>
      
      {/* Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0d1424;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #2a3c73;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #3b5096;
        }
      `}</style>
    </div>
  );
}


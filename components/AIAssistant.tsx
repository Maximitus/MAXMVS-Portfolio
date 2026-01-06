import React, { useState, useRef, useEffect } from 'react';
import { askMaxAssistant } from '../services/geminiService';
import { Send, X, Loader2, Cpu } from 'lucide-react';
import { ChatMessage } from '../types';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'MAXMVS Intelligence Unit active. How can I assist you with Max\'s engineering, craft, or development protocols?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const history = messages.slice(-6);
      const response = await askMaxAssistant(userMsg, history);
      setMessages(prev => [...prev, { role: 'model', text: response || 'Data retrieval failure. Please rephrase.' }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Error connecting to the neural link. Retry suggested.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-orange text-brand-slate rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-40 orange-glow border-2 border-brand-slate"
      >
        <Cpu className="animate-pulse" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] glass rounded-2xl flex flex-col z-50 shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 border border-brand-orange/30">
          <div className="p-4 bg-brand-slate border-b border-brand-orange/20 text-brand-orange flex justify-between items-center">
            <div className="flex items-center gap-3 font-bold brand-font tracking-widest text-xs uppercase">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></div>
              <span>MAXMVS INTEL UNIT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-brand-orange text-brand-slate font-semibold rounded-tr-none' 
                    : 'bg-brand-dark/80 border border-brand-orange/10 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-brand-dark/80 border border-brand-orange/10 p-4 rounded-xl flex items-center gap-3">
                  <Loader2 className="w-4 h-4 animate-spin text-brand-orange" />
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Processing Data...</span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-brand-dark/50 border-t border-brand-orange/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query the Intel Unit..."
              className="flex-1 bg-brand-slate/50 border border-brand-orange/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors text-white placeholder-gray-600"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="p-3 bg-brand-orange text-brand-slate rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
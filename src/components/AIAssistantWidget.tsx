import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  Mic,
  MicOff,
  Bot,
  ExternalLink,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  options?: {
    label: string;
    action?: string;
    url?: string;
  }[];
}

const initialMessage: ChatMessage = {
  id: 'msg_1',
  sender: 'ai',
  text: "Hi 👋 I'm RESH AI. How can I help you automate your business workflows today?",
  options: [
    { label: 'Autonomous Voice Agents', action: 'voice' },
    { label: 'Sales & CRM Automation', action: 'sales' },
    { label: 'Book a Strategy Call', action: 'pricing', url: '/book' },
  ],
};

interface AIAssistantWidgetProps {
  onOpenBooking?: (topic?: string) => void;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsRecording(true);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputValue(transcript);
        handleSend(transcript);
      };
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setIsRecording(false);
      };
      recognition.onend = () => setIsRecording(false);
      recognitionRef.current = recognition;
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const toggleRecording = () => {
    if (!recognitionRef.current) return;
    if (isRecording) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
  };

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const lower = text.toLowerCase();
      let aiResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: 'RESH AI designs custom autonomous agent infrastructure tailored to your exact business operations.',
      };

      if (lower.includes('voice') || lower.includes('call') || lower.includes('phone')) {
        aiResponse.text =
          'Our autonomous voice agents operate with sub-800ms latency. They handle natural interruptions, qualify inbound inquiries, and sync appointments directly to your calendar.';
        aiResponse.options = [
          { label: 'Explore Voice Solutions', action: 'link', url: '#infrastructure' },
          { label: 'Book a Strategy Call', action: 'link', url: '#pricing' },
        ];
      } else if (lower.includes('crm') || lower.includes('sales') || lower.includes('lead')) {
        aiResponse.text =
          'We engineer custom pipelines that ingest leads, enrich CRM data, score intent, and orchestrate automated multi-channel follow-ups.';
        aiResponse.options = [
          { label: 'View Core Capabilities', action: 'link', url: '#services' },
          { label: 'Calculate Automation ROI', action: 'link', url: '#demos' },
        ];
      } else if (lower.includes('pricing') || lower.includes('cost') || lower.includes('quote') || lower.includes('call')) {
        aiResponse.text =
          'We offer flexible engagement models from focused pilot automations to custom enterprise multi-agent architectures. Which model best fits your timeline?';
        aiResponse.options = [
          { label: 'View Pricing Tiers', action: 'link', url: '#pricing' },
          { label: 'Schedule Consultation', action: 'link', url: '#pricing' },
        ];
      } else {
        aiResponse.text =
          'We partner with ambitious companies to deploy reliable AI agents, voice telephonics, and automated business workflows. Would you like to review our technical framework?';
        aiResponse.options = [
          { label: 'Explore Solutions', action: 'link', url: '#services' },
          { label: 'Deployment Methodology', action: 'link', url: '#process' },
        ];
      }

      setIsTyping(false);
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleOptionClick = (option: { label: string; action?: string; url?: string }) => {
    if (
      option.action === 'pricing' ||
      option.url === '/book' ||
      option.label.toLowerCase().includes('book') ||
      option.label.toLowerCase().includes('schedule')
    ) {
      if (onOpenBooking) {
        onOpenBooking(option.label);
        setIsOpen(false);
        return;
      } else {
        window.location.assign('/book');
        return;
      }
    }

    if (option.action === 'link' && option.url) {
      if (option.url.startsWith('#')) {
        window.location.assign('/' + option.url);
      } else {
        window.location.assign(option.url);
      }
      setIsOpen(false);
      return;
    }
    handleSend(option.label);
  };

  return (
    <>
      {/* Floating Bottom-Right Launcher */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-tr from-[#6D28D9] via-[#7C3AED] to-[#9333EA] text-white shadow-[0_6px_25px_rgba(109,40,217,0.45)] flex items-center justify-center transition-all group cursor-pointer border border-[#D8C7FA]"
        aria-label="Toggle RESH AI Assistant"
      >
        <div className="absolute inset-0 rounded-full bg-[#7C3AED] animate-ping opacity-25 pointer-events-none" />
        {isOpen ? <X size={24} /> : <Bot size={26} className="group-hover:rotate-12 transition-transform" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-36px)] h-[560px] max-h-[calc(100vh-120px)] bg-white/95 border border-[#E9E5F2] rounded-3xl shadow-[0_20px_50px_rgba(109,40,217,0.16)] flex flex-col overflow-hidden backdrop-blur-2xl"
          >
            {/* Header */}
            <div className="p-4 px-5 border-b border-[#E9E5F2] flex items-center justify-between bg-[#F8F7FC]">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white border border-[#D8C7FA] flex items-center justify-center p-1.5 shadow-sm">
                    <img src="/resh-logo.png" alt="RESH AI" className="w-full h-full object-contain" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
                </div>
                <div>
                  <h4 className="text-[#111018] font-bold text-sm leading-tight flex items-center gap-1.5">
                    <span>RESH AI</span>
                    <span className="text-[10px] text-[#6D28D9] font-mono px-1.5 py-0.2 bg-[#F2EDFF] border border-[#D8C7FA] rounded-full font-semibold">Assistant</span>
                  </h4>
                  <p className="text-[#777185] text-[11px]">Sub-800ms Autonomous Systems</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center text-[#777185] hover:text-[#111018] hover:bg-[#F2EDFF] transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white font-medium rounded-br-none shadow-sm'
                        : 'bg-[#F8F7FC] border border-[#E9E5F2] text-[#111018] rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* AI Quick Options */}
                  {msg.options && msg.options.length > 0 && (
                    <div className="mt-2.5 flex flex-wrap gap-1.5 max-w-[85%]">
                      {msg.options.map((opt) => (
                        <button
                          key={opt.label}
                          onClick={() => handleOptionClick(opt)}
                          className="text-xs px-3 py-1.5 rounded-full bg-white border border-[#D8C7FA] text-[#6D28D9] hover:bg-[#6D28D9] hover:text-white transition-all flex items-center gap-1 font-semibold cursor-pointer shadow-xs"
                        >
                          <span>{opt.label}</span>
                          {opt.url && <ExternalLink size={10} className="text-[#7C3AED]" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 px-4 bg-[#F8F7FC] border border-[#E9E5F2] rounded-2xl rounded-bl-none w-max">
                  <div className="w-2 h-2 rounded-full bg-[#6D28D9] animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-[#7C3AED] animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-[#9333EA] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <div className="p-3 border-t border-[#E9E5F2] bg-[#F8F7FC] flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isRecording ? 'Listening...' : 'Ask about AI agents & workflows...'}
                className="flex-1 bg-white border border-[#E9E5F2] rounded-full px-4 py-2.5 text-sm text-[#111018] placeholder-[#777185] focus:outline-none focus:border-[#6D28D9] transition-colors"
              />

              {/* Mic / Speech Button */}
              <button
                onClick={toggleRecording}
                className={`p-2.5 rounded-full transition-all cursor-pointer ${
                  isRecording
                    ? 'bg-rose-500 text-white animate-pulse'
                    : 'bg-white text-[#777185] hover:text-[#111018] hover:bg-[#F2EDFF] border border-[#E9E5F2]'
                }`}
                title="Voice input"
              >
                {isRecording ? <MicOff size={16} /> : <Mic size={16} />}
              </button>

              {/* Send Button */}
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-full bg-gradient-to-r from-[#6D28D9] to-[#9333EA] text-white hover:shadow-[0_4px_16px_rgba(109,40,217,0.4)] transition-all disabled:opacity-30 cursor-pointer"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistantWidget;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  MessageCircle,
  Copy,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { sendMessage } from '@/services/gemini';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Halo! Saya Idin Code AI Assistant. Saya siap membantu Anda dengan pertanyaan seputar programming dan teknologi. Apa yang ingin Anda tanyakan hari ini?',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // --- FITUR BARU: Fungsi untuk menyalin teks ---
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Berhasil disalin!",
      description: "Pesan AI telah disalin ke clipboard.",
    });
  };
  
  // --- FITUR BARU: Fungsi placeholder untuk feedback ---
  const handleFeedback = () => {
    toast({
      title: "Terima kasih!",
      description: "Feedback Anda telah kami terima.",
    });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const aiResponse = await sendMessage(inputMessage);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Gagal mengirim pesan ke AI. Silakan coba lagi.",
        variant: "destructive"
      });
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Maaf, saya mengalami kesulitan teknis. Silakan coba lagi dalam beberapa saat.",
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "Bagaimana cara belajar JavaScript untuk pemula?",
    "Apa perbedaan antara React dan Vue.js?",
    "Bagaimana cara membuat API dengan Node.js?",
    "Apa itu algoritma dan struktur data?",
    "Bagaimana cara deploy aplikasi web?"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-12 bg-gradient-hero relative overflow-hidden">
          {/* ... (Tidak ada perubahan di sini) ... */}
        </section>

        {/* Chat Container */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Suggested Questions */}
              <div className="lg:col-span-1">
                 {/* ... (Tidak ada perubahan di sini) ... */}
              </div>

              {/* Chat Area */}
              <div className="lg:col-span-3">
                <Card className="h-[600px] flex flex-col bg-gradient-to-b from-background to-muted/20">
                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-6">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex space-x-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <Avatar className="flex-shrink-0 w-8 h-8">
                            {/* ... (Tidak ada perubahan di sini) ... */}
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className={`relative inline-block p-4 rounded-xl shadow-md ${
                              message.sender === 'user'
                                ? 'bg-gradient-primary text-white'
                                : 'bg-muted border border-border text-foreground' // PERUBAHAN GAYA BUBBLE AI
                            }`}>
                              {/* --- PERUBAHAN DIMULAI DI SINI: Struktur bubble AI diubah total --- */}
                              {message.sender === 'ai' && (
                                <>
                                  <div className="flex items-center space-x-2 mb-3 text-xs text-muted-foreground">
                                    <Bot className="w-4 h-4 text-primary" />
                                    <span className="font-semibold">AI Assistant</span>
                                  </div>
                                  
                                  <p className="whitespace-pre-wrap leading-relaxed text-sm">{message.content}</p>

                                  <div className="flex items-center space-x-1 mt-4 pt-3 border-t border-border/50">
                                    <Button variant="ghost" size="sm" onClick={() => copyToClipboard(message.content)} className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground">
                                      <Copy className="w-3 h-3 mr-1.5" />
                                      Copy
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={handleFeedback} className="h-7 px-2 text-muted-foreground hover:text-foreground">
                                      <ThumbsUp className="w-3.5 h-3.5" />
                                    </Button>
                                    <Button variant="ghost" size="sm" onClick={handleFeedback} className="h-7 px-2 text-muted-foreground hover:text-foreground">
                                      <ThumbsDown className="w-3.5 h-3.5" />
                                    </Button>
                                  </div>
                                </>
                              )}
                              {/* --- PERUBAHAN SELESAI DI SINI --- */}

                              {message.sender === 'user' && (
                                <p className="whitespace-pre-wrap leading-relaxed text-sm">{message.content}</p>
                              )}
                            </div>
                            <p className={`text-xs text-muted-foreground mt-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                              {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {/* Loading Animation */}
                    {isLoading && (
                      // ... (Tidak ada perubahan di sini) ...
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="border-t border-border p-4 bg-card/50 backdrop-blur-sm">
                    {/* ... (Tidak ada perubahan di sini) ... */}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-12 bg-card/50">
          {/* ... (Tidak ada perubahan di sini) ... */}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;

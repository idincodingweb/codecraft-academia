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

  // PERUBAHAN 2: Logika untuk mendeteksi pesan user
  const showSuggestedQuestions = !messages.some(msg => msg.sender === 'user');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Berhasil disalin!",
      description: "Pesan AI telah disalin ke clipboard.",
    });
  };
  
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
        <section className="py-12 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="p-3 bg-white/20 rounded-full">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  AI Assistant
                </h1>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Tanyakan apa saja tentang programming dan teknologi kepada Idin Code AI
              </p>
              <Badge variant="secondary" className="mt-4 bg-white/20 text-white border-white/30">
                Powered by Gemini AI
              </Badge>
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* PERUBAHAN 2: Bagian ini akan hilang setelah pesan pertama dikirim */}
              {showSuggestedQuestions && (
                <div className="lg:col-span-1">
                  <Card className="sticky top-24">
                    <CardHeader>
                      <CardTitle className="text-lg">Contoh Pertanyaan</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {suggestedQuestions.map((question, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          className="w-full text-left justify-start h-auto p-3 text-sm"
                          onClick={() => setInputMessage(question)}
                        >
                          {question}
                        </Button>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* PERUBAHAN 2: Area chat akan melebar jika "Contoh Pertanyaan" hilang */}
              <div className={`transition-all duration-500 ${showSuggestedQuestions ? 'lg:col-span-3' : 'lg:col-span-4'}`}>
                <Card className="h-[600px] flex flex-col bg-gradient-to-b from-background to-muted/20">
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
                            <AvatarFallback className={`${
                              message.sender === 'user' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-gradient-primary text-white'
                            }`}>
                              {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className={`relative inline-block p-4 rounded-xl shadow-md ${
                              message.sender === 'user'
                                ? 'bg-gradient-primary text-white'
                                : 'bg-muted border border-border text-foreground'
                            }`}>
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
                    
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="flex space-x-3 max-w-[85%]">
                          <Avatar className="flex-shrink-0 w-8 h-8">
                            <AvatarFallback className="bg-gradient-primary text-white">
                              <Bot className="h-4 w-4" />
                            </AvatarFallback>
                          </Avatar>
                          {/* PERUBAHAN 1: Latar belakang diubah dari bg-white menjadi bg-muted */}
                          <div className="bg-muted p-4 rounded-2xl shadow-md border border-border/20">
                            <div className="flex items-center space-x-3">
                              <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                Idin Code AI sedang berpikir...
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="border-t border-border p-4 bg-card/50 backdrop-blur-sm">
                    <div className="flex space-x-3">
                      <div className="flex-1">
                        <Textarea
                          placeholder="Tanyakan sesuatu tentang programming..."
                          value={inputMessage}
                          onChange={(e) => setInputMessage(e.target.value)}
                          onKeyPress={handleKeyPress}
                          className="min-h-[60px] resize-none pr-12 bg-background border-border focus:border-primary"
                          disabled={isLoading}
                        />
                      </div>
                      <Button
                        onClick={handleSendMessage}
                        disabled={!inputMessage.trim() || isLoading}
                        className="self-end px-5 bg-gradient-primary hover:opacity-90 h-[60px]"
                      >
                        {isLoading ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Send className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                    
                    <p className="text-xs text-muted-foreground text-center mt-2">
                        Tekan Enter untuk mengirim, Shift+Enter untuk baris baru. AI dapat membuat kesalahan.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Tips Menggunakan AI Assistant
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Jadilah Spesifik</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Semakin spesifik pertanyaan Anda, semakin akurat jawaban yang akan diberikan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Bot className="h-5 w-5 text-primary" />
                    <h4 className="font-semibold">Gunakan Bahasa Indonesia</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    AI Assistant ini dioptimalkan untuk menjawab dalam bahasa Indonesia.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Chat;

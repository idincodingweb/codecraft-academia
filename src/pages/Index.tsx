import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Code2, 
  BookOpen, 
  Users, 
  Star, 
  ArrowRight, 
  Zap,
  Brain,
  Target,
  Globe,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { articles, categories } from '@/data/articles';
import heroImage from '@/assets/hero-programming-logos.jpg';

const Index = () => {
  const featuredArticles = articles.slice(0, 6);
  const stats = [
    { icon: BookOpen, label: 'Artikel', value: '50+', color: 'text-blue-500' },
    { icon: Users, label: 'Pengguna', value: '1000+', color: 'text-green-500' },
    { icon: Code2, label: 'Tutorial', value: '100+', color: 'text-purple-500' },
    { icon: Star, label: 'Rating', value: '4.9', color: 'text-yellow-500' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Assistant',
      description: 'Dapatkan bantuan dari AI untuk memecahkan masalah coding Anda',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      title: 'Tutorial Terarah',
      description: 'Pembelajaran terstruktur dari dasar hingga mahir',
      color: 'text-blue-500'
    },
    {
      icon: Globe,
      title: 'Bahasa Indonesia',
      description: 'Semua konten dalam bahasa Indonesia yang mudah dipahami',
      color: 'text-green-500'
    },
    {
      icon: Rocket,
      title: 'Update Berkala',
      description: 'Konten selalu update dengan teknologi terbaru',
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Programming Languages" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-sm border-white/20"
              >
                🚀 Platform Pembelajaran Programming Terdepan
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                <span className="block">CodeCraft</span>
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Academia
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Belajar programming dengan mudah melalui artikel berkualitas, 
                tutorial interaktif, dan bantuan AI assistant dalam bahasa Indonesia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/articles">
                <Button size="lg" className="btn-hero px-8 py-4 text-lg">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Mulai Belajar
                </Button>
              </Link>
              <Link to="/chat">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="btn-outline-hero px-8 py-4 text-lg"
                >
                  <Brain className="mr-2 h-5 w-5" />
                  Chat dengan AI
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex p-3 rounded-full bg-muted mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Mengapa Pilih CodeCraft Academia?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Platform pembelajaran programming yang dirancang khusus untuk developer Indonesia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className={`inline-flex p-3 rounded-full bg-muted mb-4`}>
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kategori Pembelajaran
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pilih topik yang ingin Anda pelajari
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/categories/${category.toLowerCase().replace(' ', '-')}`}>
                  <Card className="hover:shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <h3 className="font-semibold text-foreground">
                        {category}
                      </h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Artikel Terbaru
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Pelajari topik-topik menarik dari artikel terbaru kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <Badge 
                        variant={
                          article.difficulty === 'Pemula' ? 'default' :
                          article.difficulty === 'Menengah' ? 'secondary' : 'destructive'
                        }
                      >
                        {article.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{article.readTime} min read</span>
                      <span>{article.publishDate}</span>
                    </div>
                    <Link to={`/articles/${article.id}`}>
                      <Button className="w-full">
                        Baca Artikel
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/articles">
              <Button size="lg" variant="outline">
                Lihat Semua Artikel
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Siap Memulai Perjalanan Coding Anda?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Bergabunglah dengan ribuan developer Indonesia yang sudah memulai perjalanan mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                  <Users className="mr-2 h-5 w-5" />
                  Daftar Sekarang
                </Button>
              </Link>
              <Link to="/chat">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-primary"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Coba AI Assistant
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

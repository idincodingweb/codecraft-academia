import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getArticlesByCategory } from '@/data/articles';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category?.replace('-', ' ') || '';
  const articles = getArticlesByCategory(categoryName);

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Kategori tidak ditemukan</h1>
          <Link to="/categories">
            <Button>Kembali ke Kategori</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/categories" 
                className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Kategori
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 capitalize">
                {categoryName}
              </h1>
              <p className="text-xl text-white/90 max-w-3xl">
                Jelajahi {articles.length} artikel tentang {categoryName}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {articles.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Belum ada artikel
                </h3>
                <p className="text-muted-foreground mb-6">
                  Artikel untuk kategori ini sedang dalam pengembangan
                </p>
                <Link to="/categories">
                  <Button>Lihat Kategori Lain</Button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <motion.div
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card className="h-full hover:shadow-glow transition-all duration-300 hover:scale-105 group">
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
                        <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="mb-4 line-clamp-3 flex-1">
                          {article.excerpt}
                        </CardDescription>
                        
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-1">
                            {article.tags.slice(0, 3).map(tag => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{article.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{article.readTime} min</span>
                            </div>
                          </div>
                          
                          <div className="text-xs text-muted-foreground">
                            {new Date(article.publishDate).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          
                          <Link to={`/articles/${article.id}`}>
                            <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                              Baca Artikel
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
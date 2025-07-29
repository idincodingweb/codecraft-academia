import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2, BookOpen, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { categories, getArticlesByCategory } from '@/data/articles';

const Categories = () => {
  const categoryData = categories.map(category => ({
    name: category,
    articles: getArticlesByCategory(category),
    description: getCategoryDescription(category),
    icon: getCategoryIcon(category)
  }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Header */}
        <section className="py-16 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Kategori Pembelajaran
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Pilih topik yang ingin Anda pelajari dan mulai perjalanan programming Anda
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/categories/${category.name.toLowerCase().replace(' ', '-')}`}>
                    <Card className="h-full hover:shadow-glow transition-all duration-300 hover:scale-105 group cursor-pointer">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                            {category.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl group-hover:text-primary transition-colors">
                              {category.name}
                            </CardTitle>
                            <Badge variant="secondary" className="mt-1">
                              {category.articles.length} artikel
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1 flex flex-col">
                        <CardDescription className="mb-4 flex-1">
                          {category.description}
                        </CardDescription>
                        
                        <div className="space-y-3">
                          <div className="text-sm text-muted-foreground">
                            <strong>Artikel terbaru:</strong>
                          </div>
                          <div className="space-y-2">
                            {category.articles.slice(0, 3).map(article => (
                              <div key={article.id} className="flex items-center space-x-2 text-sm">
                                <BookOpen className="h-3 w-3 text-primary flex-shrink-0" />
                                <span className="line-clamp-1 text-muted-foreground">
                                  {article.title}
                                </span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                            <span>Lihat semua artikel</span>
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

function getCategoryDescription(category: string): string {
  const descriptions: Record<string, string> = {
    'JavaScript': 'Pelajari bahasa pemrograman paling populer untuk web development modern dengan tutorial lengkap dan praktis.',
    'React': 'Kuasai library JavaScript terpopuler untuk membangun user interface yang interaktif dan responsive.',
    'Python': 'Belajar Python dari dasar hingga advanced untuk web development, data science, dan automation.',
    'Web Development': 'Pelajari fundamental web development meliputi HTML, CSS, dan best practices modern.',
    'Database': 'Memahami konsep database, SQL, dan manajemen data untuk aplikasi web yang robust.',
    'Backend': 'Pelajari server-side development dengan Node.js, Express, dan arsitektur backend modern.',
    'Frontend': 'Kuasai teknologi frontend terbaru untuk membuat interface yang menarik dan user-friendly.',
    'Mobile Development': 'Belajar pengembangan aplikasi mobile dengan React Native dan teknologi cross-platform.',
    'DevOps': 'Pelajari praktik DevOps, deployment, dan manajemen infrastruktur untuk development modern.',
    'Data Science': 'Eksplorasi dunia data science dengan Python, machine learning, dan analisis data.'
  };
  
  return descriptions[category] || 'Eksplorasi topik menarik dalam dunia programming dan teknologi.';
}

function getCategoryIcon(category: string) {
  const iconClass = "h-6 w-6 text-white";
  
  switch (category) {
    case 'JavaScript':
      return <Code2 className={iconClass} />;
    case 'React':
      return <Code2 className={iconClass} />;
    case 'Python':
      return <Code2 className={iconClass} />;
    case 'Web Development':
      return <Code2 className={iconClass} />;
    case 'Database':
      return <Code2 className={iconClass} />;
    case 'Backend':
      return <Code2 className={iconClass} />;
    case 'Frontend':
      return <Code2 className={iconClass} />;
    case 'Mobile Development':
      return <Code2 className={iconClass} />;
    case 'DevOps':
      return <Code2 className={iconClass} />;
    case 'Data Science':
      return <Code2 className={iconClass} />;
    default:
      return <BookOpen className={iconClass} />;
  }
}

export default Categories;
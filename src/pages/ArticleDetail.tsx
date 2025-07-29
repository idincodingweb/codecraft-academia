import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, Share2, Star, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { toast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getArticleById } from '@/data/articles';

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  rating?: number;
}

interface Rating {
  id: string;
  author: string;
  rating: number;
  comment: string;
  timestamp: string;
}

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(0);
  const [newRatingComment, setNewRatingComment] = useState('');
  const [authorName, setAuthorName] = useState('');

  useEffect(() => {
    if (id) {
      // Load comments from localStorage
      const savedComments = localStorage.getItem(`comments_${id}`);
      if (savedComments) {
        setComments(JSON.parse(savedComments));
      }

      // Load ratings from localStorage
      const savedRatings = localStorage.getItem(`ratings_${id}`);
      if (savedRatings) {
        setRatings(JSON.parse(savedRatings));
      }
    }
  }, [id]);

  const saveComments = (newComments: Comment[]) => {
    if (id) {
      localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
      setComments(newComments);
    }
  };

  const saveRatings = (newRatings: Rating[]) => {
    if (id) {
      localStorage.setItem(`ratings_${id}`, JSON.stringify(newRatings));
      setRatings(newRatings);
    }
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !authorName.trim()) {
      toast({
        title: "Error",
        description: "Nama dan komentar harus diisi",
        variant: "destructive"
      });
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      content: newComment,
      timestamp: new Date().toISOString()
    };

    const updatedComments = [comment, ...comments];
    saveComments(updatedComments);
    setNewComment('');
    
    toast({
      title: "Berhasil",
      description: "Komentar berhasil ditambahkan"
    });
  };

  const handleAddRating = () => {
    if (!newRatingComment.trim() || !authorName.trim() || newRating === 0) {
      toast({
        title: "Error",
        description: "Nama, rating, dan komentar harus diisi",
        variant: "destructive"
      });
      return;
    }

    const rating: Rating = {
      id: Date.now().toString(),
      author: authorName,
      rating: newRating,
      comment: newRatingComment,
      timestamp: new Date().toISOString()
    };

    const updatedRatings = [rating, ...ratings];
    saveRatings(updatedRatings);
    setNewRating(0);
    setNewRatingComment('');
    
    toast({
      title: "Berhasil",
      description: "Rating berhasil ditambahkan"
    });
  };

  const averageRating = ratings.length > 0 
    ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length 
    : 0;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Artikel tidak ditemukan</h1>
            <Link to="/articles">
              <Button>Kembali ke Artikel</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Article Header */}
        <section className="py-12 bg-card/50 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link 
                to="/articles" 
                className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Kembali ke Artikel
              </Link>
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
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
                
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {article.title}
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  {article.excerpt}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.publishDate).toLocaleDateString('id-ID')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime} min read</span>
                  </div>
                  {ratings.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{averageRating.toFixed(1)} ({ratings.length} rating)</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br>').replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>') }}
            />
          </div>
        </section>

        {/* Tags */}
        <section className="py-8 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className="py-12 bg-card/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Komentar ({comments.length})
            </h3>
            
            {/* Add Comment */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tambah Komentar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Nama Anda"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>
                <Textarea
                  placeholder="Tulis komentar Anda..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                />
                <Button onClick={handleAddComment}>
                  <Send className="h-4 w-4 mr-2" />
                  Kirim Komentar
                </Button>
              </CardContent>
            </Card>
            
            {/* Comments List */}
            <div className="space-y-4">
              {comments.map(comment => (
                <Card key={comment.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarFallback>
                          {comment.author.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-foreground">
                            {comment.author}
                          </h4>
                          <span className="text-sm text-muted-foreground">
                            {new Date(comment.timestamp).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {comments.length === 0 && (
                <div className="text-center py-8">
                  <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Belum ada komentar. Jadilah yang pertama berkomentar!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Rating Section */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Rating & Review ({ratings.length})
            </h3>
            
            {/* Add Rating */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Berikan Rating</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Nama Anda"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Rating
                  </label>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1"
                      >
                        <Star 
                          className={`h-6 w-6 ${
                            star <= newRating 
                              ? 'fill-yellow-400 text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <Textarea
                  placeholder="Tulis review Anda..."
                  value={newRatingComment}
                  onChange={(e) => setNewRatingComment(e.target.value)}
                  rows={3}
                />
                <Button onClick={handleAddRating}>
                  <Star className="h-4 w-4 mr-2" />
                  Kirim Rating
                </Button>
              </CardContent>
            </Card>
            
            {/* Ratings List */}
            <div className="space-y-4">
              {ratings.map(rating => (
                <Card key={rating.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-3">
                      <Avatar>
                        <AvatarFallback>
                          {rating.author.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="font-semibold text-foreground">
                            {rating.author}
                          </h4>
                          <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map(star => (
                              <Star 
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= rating.rating 
                                    ? 'fill-yellow-400 text-yellow-400' 
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(rating.timestamp).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                        <p className="text-muted-foreground">
                          {rating.comment}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {ratings.length === 0 && (
                <div className="text-center py-8">
                  <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Belum ada rating. Berikan rating pertama!
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ArticleDetail;
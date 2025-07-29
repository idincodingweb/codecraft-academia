import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart, Target, Users, Award, Coffee } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const achievements = [
    { icon: Users, label: 'Pengguna Aktif', value: '1000+' },
    { icon: Code2, label: 'Artikel', value: '50+' },
    { icon: Award, label: 'Rating', value: '4.9/5' },
    { icon: Coffee, label: 'Kopi Diminum', value: '∞' }
  ];

  const technologies = [
    'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 
    'Framer Motion', 'Gemini AI', 'Node.js', 'Python'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Tentang CodeCraft Academia
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Platform pembelajaran programming yang dibuat dengan cinta untuk developer Indonesia
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Cerita di Balik Platform
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    CodeCraft Academia lahir dari passion untuk berbagi ilmu programming 
                    kepada developer Indonesia. Kami percaya bahwa setiap orang berhak 
                    mendapatkan akses pembelajaran berkualitas dalam bahasa Indonesia.
                  </p>
                  <p>
                    Platform ini dirancang khusus untuk memudahkan pembelajaran dengan 
                    artikel-artikel berkualitas, tutorial interaktif, dan bantuan AI 
                    assistant yang siap membantu 24/7.
                  </p>
                  <p>
                    Dengan menggabungkan teknologi modern dan pendekatan pembelajaran yang 
                    efektif, kami berkomitmen untuk menjadi tempat terbaik bagi developer 
                    Indonesia untuk berkembang.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <Card className="shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-primary rounded-lg">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Misi Kami</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Memberdayakan developer Indonesia dengan knowledge dan tools 
                      terbaik untuk membangun masa depan teknologi yang lebih cerah.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="shadow-glow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-accent rounded-lg">
                        <Heart className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Visi Kami</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>
                      Menjadi platform pembelajaran programming #1 di Indonesia yang 
                      accessible, comprehensive, dan selalu up-to-date.
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Developer Section */}
        <section className="py-20 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the Developer
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Berkenalan dengan orang di balik CodeCraft Academia
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="shadow-glow overflow-hidden">
                <div className="bg-gradient-primary p-8 text-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Code2 className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Idin Iskandar</h3>
                  <p className="text-white/90 text-lg">Full Stack Developer & Educator</p>
                </div>
                
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <p className="text-muted-foreground text-center">
                      "Saya percaya bahwa programming adalah skill yang dapat mengubah hidup. 
                      Melalui CodeCraft Academia, saya ingin berbagi passion ini kepada 
                      seluruh developer Indonesia."
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Expertise</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Full Stack Web Development</li>
                          <li>• React & Node.js Specialist</li>
                          <li>• Python & Data Science</li>
                          <li>• AI Integration & Automation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Experience</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• 5+ years in Web Development</li>
                          <li>• Founder of Multiple Tech Startups</li>
                          <li>• Mentor for 100+ Developers</li>
                          <li>• Open Source Contributor</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Platform dalam Angka
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dampak yang telah kami ciptakan bersama komunitas
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-4">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-muted-foreground">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Mari Berkolaborasi!
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Punya ide untuk konten atau ingin berkolaborasi? 
                Jangan ragu untuk menghubungi kami!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:idin@codecraft.id"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Hubungi Kami
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CodeCraft Academia
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Platform pembelajaran programming terbaik di Indonesia. 
              Belajar coding dengan mudah melalui artikel berkualitas, 
              tutorial interaktif, dan bantuan AI assistant.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@codecraft.id" 
                className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                  Kategori
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-muted-foreground hover:text-foreground transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Kategori Populer</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categories/javascript" className="text-muted-foreground hover:text-foreground transition-colors">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link to="/categories/react" className="text-muted-foreground hover:text-foreground transition-colors">
                  React
                </Link>
              </li>
              <li>
                <Link to="/categories/python" className="text-muted-foreground hover:text-foreground transition-colors">
                  Python
                </Link>
              </li>
              <li>
                <Link to="/categories/web-development" className="text-muted-foreground hover:text-foreground transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/categories/database" className="text-muted-foreground hover:text-foreground transition-colors">
                  Database
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 CodeCraft Academia. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center space-x-1 mt-2 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="font-semibold text-primary">Idin Iskandar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
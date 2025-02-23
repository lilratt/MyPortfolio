import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, X, Mail, Menu, X as XIcon } from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialIcons = [
    { icon: Github, href: 'https://github.com/lilratt', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yussef-ahmed-3bb294343/', label: 'LinkedIn' },
    { icon: X, href: 'https://x.com/YussefHilmey', label: 'X' },
    { icon: Mail, href: 'yussefhilmey@outlook.com', label: 'Email' }
  ];

  const navItems = ['About', 'Projects', 'Skills', 'Contact'];

  return (
    <div className="min-h-screen text-white relative" style={{ backgroundColor: '#212121' }}>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#212121]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20 max-w-5xl mx-auto">
            <motion.div 
              className="flex-1 flex justify-start"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent px-4 py-2 rounded-lg border border-gray-700/50">
                YA
              </span>
            </motion.div>

            {/* Desktop Navigation - Centered */}
            <div className="hidden md:flex space-x-8 flex-1 justify-center">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white relative px-4 py-2 rounded-lg hover:bg-white/5"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{item}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button - Right aligned */}
            <div className="flex-1 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#2a2a2a] mx-4 my-2 rounded-xl overflow-hidden"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block py-2 px-4 text-gray-300 hover:text-white rounded-lg hover:bg-white/5"
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Yussef Ahmed
            </motion.h1>
            
            <motion.h2 
              className="text-2xl text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Front-End Developer & Bug Hunter
            </motion.h2>
            
            <motion.p 
              className="text-gray-400 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              I'm a passionate developer with 5 years of experience in building modern web applications. 
              Specializing in React, Node.js, and cloud technologies, I create scalable solutions 
              that make a difference.
            </motion.p>
            
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="text-gray-400 hover:text-purple-400 transition-colors relative group p-2 rounded-lg hover:bg-white/5"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={24} />
                  <motion.span
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#2a2a2a] text-white text-sm py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none"
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                  >
                    {label}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-md mx-auto"
          >
            <div className="aspect-square rounded-full overflow-hidden relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <img
                src="https://i.imgur.com/oMUbpIZ.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
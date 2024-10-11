import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

function Home() {
  return (
    <motion.section 
      className="home"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Bem-vindo ao Meu Site</h1>
      <p>Este é um site pessoal feito com React!</p>
    </motion.section>
  );
}

export default Home;

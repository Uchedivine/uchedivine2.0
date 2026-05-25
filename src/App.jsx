import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import LoadingAnimation from './components/LoadingAnimation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import WorkPage from './components/WorkPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: -8 },
};

const pageTransition = { duration: 0.3, ease: 'easeOut' };

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading]     = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="orb orb-purple" aria-hidden="true" />
      <div className="orb orb-cyan"   aria-hidden="true" />

      {isLoading && <LoadingAnimation />}

      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main style={{ paddingTop: 'var(--nav-height)', position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
          >
            {currentPage === 'home'     && <HomePage     setCurrentPage={setCurrentPage} />}
            {currentPage === 'about'    && <AboutPage    />}
            {currentPage === 'work'     && <WorkPage     />}
            {currentPage === 'projects' && <ProjectsPage />}
            {currentPage === 'contact'  && <ContactPage  />}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
};

export default App;
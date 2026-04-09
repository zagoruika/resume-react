import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    const isNightTime = hours < 7 || hours >= 21;
    if (isNightTime) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };



  return (
    <>
      <div className="fixed top-5 right-5 z-[1000]">
        <button onClick={handleThemeToggle} className={`
          w-[140px] h-[40px] cursor-pointer rounded-[4px] border uppercase tracking-[1px]
          font-['Space_Grotesk'] text-[14px] font-500 flex items-center justify-center
          transition-all duration-400 ease-in-out hover:opacity-80
          ${theme === 'dark' 
          ? 'bg-[#262626] text-white border-white' 
          : 'bg-[#FDF7E9] text-[#D03B00] border-[#D03B00]'}
          `}
          >
          {theme === 'dark' ? 'Light mode' : 'Dark mode'}
        </button>
      </div>
      
      <div className={`flex flex-wrap w-[1200px] mx-auto align-content-start shadow-[0_10px_30px_rgba(0,0,0,0.05)] box-border transition-all duration-400
        bg-[var(--wrapper-bg)] text-[var(--main-color)]`}>
        
        <Sidebar />

        <main className="pt-[80px] pr-[40px] pb-0 pl-[40px] box-border flex-grow max-w-[830px]">
          
          <Header />

          <div className="flex gap-[80px]">
            
            <div className="flex-[1.5]">

              <Experience />

            </div>

            <div className="flex-1">

              <Education />

              <Skills />

              <Languages />

            </div>

          </div>

          <Reviews />

        </main>

        <Footer />

      </div>

      <ContactForm />
    </>
  );
}

export default App;
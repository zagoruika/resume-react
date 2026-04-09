import React, { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target.id === 'contact-modal') {
      setIsOpen(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div id="contact-modal" onClick={handleBackdropClick} className="fixed inset-0 bg-black/70 z-[2000] flex items-center justify-center backdrop-blur-[4px] transition-all duration-300">
      <div className="bg-[var(--wrapper-bg)] text-[var(--main-color)] p-10 rounded-[4px] w-full max-w-[500px] relative border border-[var(--main-color)] shadow-[0_20px_40px_rgba(0,0,0,0.2)] box-border">
        <span id="close-modal" onClick={() => setIsOpen(false)} className="absolute top-[15px] right-[20px] cursor-pointer text-[28px] leading-none transition-opacity hover:opacity-70">
          &times;
        </span>

        <h3 className="text-[26px] font-normal mt-0 mb-[15px] leading-tight text-[var(--main-color)] transition-colors duration-400">Get in Touch</h3>

        <form action="https://formspree.io/f/mzdkqzjz" method="POST" className="flex flex-col gap-[15px] mt-5">
          <input type="text" name="name" placeholder="Name" required minLength="2" className="bg-transparent border border-[var(--line-color)] p-3 font-['Space_Grotesk'] text-[var(--main-color)] text-[14px] focus:outline-none focus:border-[var(--main-color)] transition-colors invalid:not-placeholder-shown:border-[#ff4d4d] valid:not-placeholder-shown:border-[#4CAF50]"/>
          <input type="email" name="email" placeholder="Email" required className="bg-transparent border border-[var(--line-color)] p-3 font-['Space_Grotesk'] text-[var(--main-color)] text-[14px] focus:outline-none focus:border-[var(--main-color)] transition-colors invalid:not-placeholder-shown:border-[#ff4d4d] valid:not-placeholder-shown:border-[#4CAF50]"/>
          <input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9]{10,13}" title="Please enter 10 to 13 digits" className="bg-transparent border border-[var(--line-color)] p-3 font-['Space_Grotesk'] text-[var(--main-color)] text-[14px] focus:outline-none focus:border-[var(--main-color)] transition-colors invalid:not-placeholder-shown:border-[#ff4d4d] valid:not-placeholder-shown:border-[#4CAF50]"/>
          <textarea name="message" placeholder="Your Message" required minLength="10" rows="3" className="bg-transparent border border-[var(--line-color)] p-3 font-['Space_Grotesk'] text-[var(--main-color)] text-[14px] focus:outline-none focus:border-[var(--main-color)] transition-colors resize-none"></textarea>
          
          <button type="submit" className="bg-[var(--main-color)] text-[var(--wrapper-bg)] border-none rounded-[4px] p-3 font-['Space_Grotesk'] font-normal uppercase cursor-pointer mt-[25px] w-full transition-opacity hover:opacity-90">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
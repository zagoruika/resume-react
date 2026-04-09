import React, { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    const info = {
        os: navigator.platform,
        browser: navigator.userAgent
    };

    localStorage.setItem('systemConfig', JSON.stringify(info));

    const savedData = JSON.parse(localStorage.getItem('systemConfig'));
    
    if (savedData) {
        setSystemInfo(`OS: ${savedData.os} | Browser: ${savedData.browser}`);
    }
  }, []);

  return (
    <footer className="w-[calc(100%-80px)] mx-auto mt-[40px] py-[40px] border-t border-[var(--line-color)] box-border text-center text-[var(--main-color)] transition-all duration-400">
      <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">© 2026 Viktoriia Zahoruiko</p>
      <div id="system-info" className="opacity-80 text-[13px] mt-[10px] break-all leading-relaxed">
        {systemInfo}
      </div>
    </footer>
  );
}

export default Footer;
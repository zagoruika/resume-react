function Education() {
  return (
    <section className="mb-[50px]">
      <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[var(--line-color)] pb-[10px] flex justify-between tracking-[2px] uppercase text-[var(--main-color)] transition-all duration-400 ease-in-out">
        EDUCATION
        <span className="opacity-60 transition-all duration-400">03</span>
      </h2>

      <div className="mb-[40px]">
        <span className="text-[13px] mb-[8px] block font-normal uppercase transition-colors duration-400">2023 - 2027</span>
        
        <h3 className="text-[26px] font-normal mt-0 mb-[15px] leading-tight text-[var(--main-color)] transition-colors duration-400">
          Lviv Polytechnic National University
        </h3>
        
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Bachelor's degree, Cybersecurity
        </p>
      </div>
    </section>
  );
}

export default Education;
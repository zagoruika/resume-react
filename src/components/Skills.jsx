function Skills() {
  return (
    <section className="mb-[50px]">
      <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[var(--line-color)] pb-[10px] flex justify-between tracking-[2px] uppercase text-[var(--main-color)] transition-all duration-400 ease-in-out">
        SKILLS 
        <span className="opacity-60 transition-all duration-400">04</span>
      </h2>

      <div className="grid grid-cols-2 gap-[15px]">
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">Python</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">Pandas/NumPy</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">SQL</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">Git</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">ML</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">Scikit-learn</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">Data Visualization</span>
        <span className="text-[15px] text-[var(--main-color)] transition-all duration-400">Statistical Analysis</span>
      </div>
    </section>
  );
}

export default Skills;
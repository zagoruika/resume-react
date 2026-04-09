function Languages() {
  return (
    <section className="mb-[50px]">
      <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[var(--line-color)] pb-[10px] flex justify-between tracking-[2px] uppercase text-[var(--main-color)] transition-all duration-400 ease-in-out">
        LANGUAGES 
        <span className="opacity-60 transition-all duration-400">05</span>
      </h2>

      <ul className="list-none m-0 p-0 uppercase">
        <li className="flex justify-between text-[15px] leading-[2.2] text-[var(--main-color)] transition-colors duration-400">
          Ukrainian 
          <span className="transition-opacity duration-400">Native</span>
        </li>
        <li className="flex justify-between text-[15px] leading-[2.2] text-[var(--main-color)] transition-colors duration-400">
          English 
          <span className="transition-opacity duration-400">B2</span>
        </li>
        <li className="flex justify-between text-[15px] leading-[2.2] text-[var(--main-color)] transition-colors duration-400">
          Polish 
          <span className="transition-opacity duration-400">B1</span>
        </li>
      </ul>
    </section>
  );
}

export default Languages;
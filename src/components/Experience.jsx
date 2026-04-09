function Experience() {
  return (
    <section className="mb-[50px]">
      <h2 className="text-[14px] font-normal mt-0 mb-[30px] border-b border-[var(--line-color)] pb-[10px] flex justify-between tracking-[2px] uppercase text-[var(--main-color)] transition-all duration-400 ease-in-out">
        EXPERIENCE 
        <span className="opacity-60 transition-all duration-400">02</span>
      </h2>

      <div className="mb-[40px]">
        <span className="text-[13px] mb-[8px] block font-normal uppercase transition-colors duration-400">2025.05 - Present</span>
        <h3 className="text-[26px] font-normal mt-0 mb-[15px] leading-tight text-[var(--main-color)] transition-colors duration-400">
          DataWiz, Junior Data Analyst
        </h3>
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Cleaning and preprocessing retail data for automated business intelligence reports.
        </p>
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Assisting in building SQL queries to extract meaningful insights from customer databases.
        </p>
      </div>

      <div className="mb-[40px]">
        <span className="text-[13px] mb-[8px] block font-normal uppercase transition-colors duration-400">2024.10 - 2025.04</span>
        <h3 className="text-[26px] font-normal mt-0 mb-[15px] leading-tight text-[var(--main-color)] transition-colors duration-400">
          Lviv IT Cluster, Data Science Trainee
        </h3>
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Participated in a "Smart City" project analyzing public transport GPS data.
        </p>
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Used Python to visualize data trends and identify peak hours for passenger traffic.
        </p>
      </div>

      <div className="mb-[40px]">
        <span className="text-[13px] mb-[8px] block font-normal uppercase transition-colors duration-400">2024.02 - 2024.09</span>
        <h3 className="text-[26px] font-normal mt-0 mb-[15px] leading-tight text-[var(--main-color)] transition-colors duration-400">
          Netpeak, Marketing Data Analyst Intern
        </h3>
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Setting up data tracking for websites and analyzing the effectiveness of advertising campaigns.
        </p>
        <p className="text-[16px] leading-[1.5] mb-[15px] font-light transition-opacity duration-400">
          Working with Google Analytics API and building simple predictive models for marketing ROI.
        </p>
      </div>
    </section>
  );
}

export default Experience;
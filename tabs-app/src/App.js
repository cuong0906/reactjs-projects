import { useEffect, useState } from "react";
import Company from "./components/Company";
import JobDesc from "./components/JobDesc";

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const res = await fetch(url);
    const newJobs = await res.json();

    setJobs(newJobs);
    setLoading(false);
  };

  const handleOnclickComp = (index) => {
    setValue(index);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if(loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((item, index) => (
              <Company 
                key={item.id} 
                item={item} 
                value={value}
                index={index}
                handleOnclickComp={() => handleOnclickComp(index)}
              />
            ))
          }
        </div>
        {/* job info. */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty, index) =>(
              <JobDesc key={index} duty={duty}/>
            ))
          }
        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  );
}

export default App;

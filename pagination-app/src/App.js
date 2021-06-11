import { useEffect, useState } from "react";
import Follower from "./components/Follower";
import useFetch from "./useFetch";

function App() {
  const { loading, data } = useFetch();
  const [follower, setFollower] = useState([]);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if(nextPage > data.length - 1){
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if(prevPage < 0){
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    if(loading){
      return ;
    }
    setFollower(data[page]);
  }, [loading, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "Pagination app"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {
            follower.map((item) => {
              return (
                <Follower key={item.id} {...item}/>
              );
            })
          }
        </div>
        {!loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>prev</button>
            {
              data.map((item, index) => {
                return (
                  <button 
                    className={`page-btn ${index === page ? 'active-btn' : null}`}
                    key={index}
                    onClick={() => handlePage(index)}
                  >
                    {index + 1}
                  </button>
                );
              })
            }
            <button className="next-btn" onClick={nextPage}>next</button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;

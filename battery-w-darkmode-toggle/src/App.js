import { useState, useEffect } from "react";

const getStorageTheme = () => {
  let theme = "light-theme";
  if(localStorage.getItem("theme")){
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }
  };

  const getBatteryStatus = () => {
    let percentage = document.querySelector(".percentage");
    let percent = document.querySelector(".percent");
    navigator.getBattery().then((battery) =>{
      percentage.style.width = battery.level * 100 + "%";
      percent.innerHTML = battery.level * 100 + "%";
      battery.onlevelchange = () => {
        percentage.style.width = battery.level * 100 + "%";
        percent.innerHTML = battery.level * 100 + "%";
      }
    });
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() =>{
    getBatteryStatus();
  }, []);

  return (
    <section className="sec">
      <div className="toggle" onClick={toggleTheme}></div>
      <div className="box">
        <div className="content">
          <h3>Battery</h3>
          <div className="battery-shape">
            <div className="level">
              <div className="percentage"></div>
            </div>
          </div>
          <div className="percent">50%</div>
        </div>
      </div>
    </section>
  );
}

export default App;

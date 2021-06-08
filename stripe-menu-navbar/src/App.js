import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SidebarLinks/Sidebar";
import Submenu from "./components/Submenu";

function App() {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Hero/>
      <Submenu/>
    </>
  );
}

export default App;

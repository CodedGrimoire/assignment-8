import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* This is where child routes (Home, Alltheapps) render */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

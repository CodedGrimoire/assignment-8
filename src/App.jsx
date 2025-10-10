import './App.css';
import Navbar from './components/navbar/navbar';
import Spinner from './components/Spinner';
import Footer from './components/footer/footer';
import { Outlet, useNavigation } from "react-router-dom";

function App() {
  const navigation = useNavigation(); // ✅ initialize

  return (
    <>
      <Navbar />

      <main className="min-h-[300px] flex flex-col items-center justify-center gap-4">
        

       
        {navigation.state === "loading" ? <Spinner /> : <Outlet />}
      </main>

      <Footer />
    </>
  );
}

export default App;

// let deepColor = '#76568A' ;
// let lightColor = '#DBC1ED  bg-[#DBC1ED]' ;

import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <main className=" bg-[#EFEEFF] min-h-[100vh] " >
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;


// let deepColor = '#76568A' ;
// let lightColor = '#DBC1ED  bg-[#DBC1ED]' ;

import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <main className=" bg-[#f2edf7] min-h-[100vh] " >
      <Header />
      <Outlet />
    </main>
  );
}

export default App;

import Header from "./Header";
import {Route ,Routes} from 'react-router-dom'
import MainContent from "./MainContent";
import CreactContainer from "./CreactContainer";
import HomeContainer from "./HomeContainer" ;
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <AnimatePresence mode='wait'>  
    <div className="w-screen h-screen flex flex-col" >
     <Header/>
     <HomeContainer/>
    <main className="mt-6 md:mt-24 p-8 w-full">
    <Routes>
    <Route path="" element={<MainContent/>} />
    <Route path="/createItem" element={<CreactContainer/>} />
    <Route path="/homeContainer" element={<HomeContainer/>} />
  </Routes>
          
    </main>
    
    </div>
    </AnimatePresence>
  );
}

export default App;

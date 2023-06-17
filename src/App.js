import Navbar from './Components/NavBar/Navbar';
import { URLS } from './Components/constants';

import './App.css';
import Banner from './Components/Banner/banner';
import Rowpost from './Components/RowPost/Rowpost';


const App=()=> {
  return (
    <>
    <div className="App">
    < Navbar />
     < Banner/>
     <Rowpost url={URLS.Originals} title='Netflix Originals' />
     <Rowpost url={URLS.Action} title= 'Action' isSmall />
     <Rowpost url={URLS.HorrorMovies} title= 'Horror Movies'  />
     <Rowpost url={URLS.ComedyMovies} title='Comedy Movies' isSmall/>
     <Rowpost url={URLS.RomanceMovies} title='Romance Movies' isSmall />
     <Rowpost url={URLS.Documentaries} title= 'Documentaries' isSmall />
    </div>
    </>
  );
}

export default App;
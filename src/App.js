import logo from './logo.svg';
import './App.css';
import { Gps } from './shared/widgets/Gps';
import { Map } from './shared/widgets/Map';
import { Menu } from './shared/widgets/Menu';
import { Header } from './shared/widgets/Header';

function App() {
  return <>
    <Header/>
    <Menu/>
    {/* <Header/>
    <Gps/> */}
  </>
    

}

export default App;

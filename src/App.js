import logo from './logo.svg';
import './App.css';
import { Gps } from './shared/widgets/Gps';
import { Map } from './shared/widgets/Map';
import { Menu } from './shared/widgets/Menu';
import { Header } from './shared/widgets/Header';
import { MediaCard } from './shared/widgets/Card';
import { Register } from './modules/user/registration';
import { Login } from './modules/user/login';

function App() {
  return <>
    {/* <Header/>
    <Menu/>
    {/* <Header/>
    <Gps/> */}
    {/* <MediaCard/>  */}
    {/* <Login/> */}
    <Register/>

  </>
    

}

export default App;

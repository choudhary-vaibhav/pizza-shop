import logo from './logo.svg';
import './App.css';
import { Gps } from './shared/widgets/Gps';
import { Map } from './shared/widgets/Map';
import { Menu } from './shared/widgets/Menu';
import { Header } from './shared/widgets/Header';
import { MediaCard } from './shared/widgets/Card';
import { Register } from './modules/user/registration';
import { Login } from './modules/user/login';
import { Update } from './modules/user/update';
import { Delete } from './modules/user/delete';
import { ChangePassword } from './modules/user/change_password';

function App() {
  return <>
    {/* <Header/>
    <Menu/>
    {/* <Header/>
    <Gps/> */}
    {/* <MediaCard/>  */}
    {/* <Login/><br/>
    <Register/> */}
    {/* <Update/> */}
    {/* <Delete/> */}
    <ChangePassword/>
  </>
    

}

export default App;

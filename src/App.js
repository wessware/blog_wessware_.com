// eslint-disable-next-line
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
// eslint-disable-next-line
import Single from "./pages/single/Single";
// eslint-disable-next-line
import Write from "./pages/write/Write";
// eslint-disable-next-line
import Settings from "./pages/settings/Settings";
// eslint-disable-next-line
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom'
function App() {
  return (
    <>
     <TopBar />
      {/*<Write /> */}
      {/*<Single /> */}
      {/*<Settings />*/}
      {/*<Login />*/}
      <Register />
    
    
    </>
   
  );
}

export default App;

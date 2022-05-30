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
// eslint-disable-next-line
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
function App() {
  return (
    <Router>
        <TopBar />
          {/*<Write /> */}
          {/*<Single /> */}
          {/*<Settings />*/}
          {/*<Login />*/}
          {/*<Register />*/}
          <Routes>
            <Route path="/">
              <Home/>
            </Route>
          </Routes>
    
    
    </Router>
   
  );
}

export default App;

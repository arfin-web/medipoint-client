import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Addappoinments from './Pages/Addappointments/Addappointments';
import Allappointments from './Pages/Allappointments/Allappointments';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Authprovider from './Context/Authprovider';
import Purchase from './Pages/Purchase/Purchase';
import Orders from './Pages/Orders/Orders';
import Myorders from './Pages/Myorders/Myorders';
import Makeadmin from './Pages/Makeadmin/Makeadmin';
import Privateroute from './Privateroute/Privateroute';
import Adminroute from './Adminroute/Adminroute';
import Makereview from './Pages/Makereview/Makereview';
import Footer from './Pages/Footer/Footer';
import Manageappointments from './Pages/Manageappointments/Manageappointments';
import Notfound from './Pages/Notfound/Notfound';
import Pay from './Pages/Pay/Pay';
import Allappointments2 from './Pages/Allappointments2/Allappointments2';
import Updateslot from './Pages/Updateslot/Updateslot'

function App() {
  return (
    <>
      <Authprovider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signin">
              <Signin></Signin>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route exact path="/slots2">
              <Allappointments2></Allappointments2>
            </Route>
            <Route exact path="/slots">
              <Allappointments></Allappointments>
            </Route>
            <Privateroute path="/slots/:id">
              <Purchase></Purchase>
            </Privateroute>
            <Privateroute path="/appointment/:id">
              <Updateslot></Updateslot>
            </Privateroute>
            <Privateroute path="/myorders">
              <Myorders></Myorders>
            </Privateroute>
            <Privateroute path="/makereviews">
              <Makereview></Makereview>
            </Privateroute>
            <Privateroute path="/pay">
              <Pay></Pay>
            </Privateroute>
            <Adminroute path="/makeadmin">
              <Makeadmin></Makeadmin>
            </Adminroute>
            <Adminroute path="/addappoinments">
              <Addappoinments></Addappoinments>
            </Adminroute>
            <Adminroute path="/Manageappointments">
              <Manageappointments></Manageappointments>
            </Adminroute>
            <Adminroute path="/orders">
              <Orders></Orders>
            </Adminroute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </Authprovider>
    </>
  );
}

export default App;

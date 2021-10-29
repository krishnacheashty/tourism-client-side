import AuthProvider from './pages/context/AuthProvider';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import MyOrder from './pages/Home/MyOrder/MyOrder';
import ManageAllSerVice from './pages/Home/Manageallservice/ManageAllSerVice';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import AddANewService from './pages/Home/AddNewService/AddANewService';
import UpComingEvents from './pages/Home/Upcoming/UpComingEvents';
import PageNotFound from './pages/Home/Home/PageNotFound/PageNotFound';
import { Container } from 'react-bootstrap';
import BannerTop from './pages/Home/Banner/BannerTop';
import PrivateRoute from './pages/privateRoute/PrivateRoute';
import Login from './pages/Home/login/Login';




function App() {
  return (
    <Container>
      <AuthProvider>

        <Router>
          <BannerTop></BannerTop>
          <Switch>
            <Route exact path ='/'>
              <Home></Home>
            </Route>
            <Route exact path ='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/myOrder'>
              <MyOrder></MyOrder>
            </Route>
            <PrivateRoute path='/manageAllOrder'>
              <ManageAllSerVice></ManageAllSerVice>
            </PrivateRoute>

            <PrivateRoute path='/aboutUs'>
              <AboutUs></AboutUs>
            </PrivateRoute>
            
            <PrivateRoute path='/AddANewService'>
              <AddANewService></AddANewService>
            </PrivateRoute>
            <PrivateRoute path='/UpComingEvents'>
              <UpComingEvents></UpComingEvents>
            </PrivateRoute>
            <Route path='*'>
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
        </Router>

      </AuthProvider>
    </Container>
  );
}

export default App;

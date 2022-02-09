import React from 'react';
import { useContext,useState,useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './pages/Login/login';
import Home from './pages/home/Home';
import Dev from './pages/Dev/Dev';
import Createconstruct from './pages/createConstruct/createConstruct';
import AuthApi from './Auth/Auth';
import S3 from './pages/s3/S3';
import S3Assets from './pages/s3assets/S3Assets';
import S3Notification from './pages/s3notification/s3notification';
import S3deployment from './pages/s3deployment/s3deployment';
import S3lambda from './pages/s3lambda/s3lambda';
import Cookies from 'js-cookie';

function App() {

  const [auth,setAuth] = useState(false);
  const readCookie = () =>{
    const user = Cookies.get("user");
    if(user){
      setAuth(true);
    }
  }

  useEffect(() => {
    readCookie();
  }, [])

  return (
    <>
    <div>
      <AuthApi.Provider value={{auth,setAuth}}>
        <Router>
          <Routes />
        </Router>
      </AuthApi.Provider>
    </div>
    </>
  )
}


const Routes = () =>{
  const Auth = useContext(AuthApi)
  return(
    <Switch>
      <ProtectedLogin  path='/login' auth={Auth.auth} component={Login} />
      <ProtectedRoute  path='/home' auth={Auth.auth} component={Home} />    
      <Route  path='/dev' auth={Auth.auth} component={Dev} />
      <Route  path='/create' auth={Auth.auth} component={Createconstruct} />
      <Route exact path='/aws-s3' auth={Auth.auth}  component={S3} />
      <Route exact path='/aws-s3-assets' auth={Auth.auth}  component={S3Assets} />
      <Route exact path='/aws-s3-notification' auth={Auth.auth}  component={S3Notification} />
      <Route exact path='/aws-s3-deployment' auth={Auth.auth}  component={S3deployment} />
      <Route exact path='/aws-s3-lambda' auth={Auth.auth}  component={S3lambda} />
    </Switch>
  )
  
}

const ProtectedRoute = ({auth,component:Component,...rest})=>{
  return(
    <Route {...rest}
    render={()=>auth?(
      <Component />
    ):
      (
        <Redirect to="/login" />
      )
    }
    />
  )
}


const ProtectedLogin = ({auth,component:Component,...rest})=>{
  return(
    <Route {...rest}
    render={()=>!auth?(
      <Component />
    ):
      (
        <Redirect to="/home" />
      )
    }
    />
  )
}



export default App;

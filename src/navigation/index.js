import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  import App from '../App';
  import HomePage from "../container/homePage";

  const navigation = () => {
      return(
          <BrowserRouter>
          <Routes>
              {/* <Route path = '/' element = {<App/>}/> */}
              <Route path = '/home' element = {<App/>}/>
              <Route path = '/' element = {<HomePage/>}/>
          </Routes>
          </BrowserRouter>
      )
  }

  export default navigation;
  
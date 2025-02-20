import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import UsersComponent from "./users";
import UserDetails from "./userDetails";
//import HomeComponent from "./home";
import AboutComponent from "./about";
import PageNotFound from "./pageNotFound";
import Shimmer from "./shimmer";
import AccordionComponent from './accordion'
import CartComponent from "./cart";

const Home = lazy(() => import('./home'))
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Suspense fallback={<Shimmer/>}> <Home/>   </Suspense> }/>
      <Route path='/users' element={<UsersComponent/>}/>
      <Route path='/userDetails/:id' element={<UserDetails/>}/>
      <Route path='/about' element={<AboutComponent/>}/>
      <Route path='/accordion' element={<AccordionComponent/>}/>
      <Route path='/cart' element={<CartComponent/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    </div>

  );
}

export default App;

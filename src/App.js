import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyHeader from "./components/header/MyHeader";
import MySlider from "./components/slider/MySlider";
import SuccessStories from "./components/success-stories/SuccessStories";
import About from "./components/about/About";
import Main from "./components/main/Main";
import ItemDetail from "./components/Item/ItemDetail";
import Footer from "./components/footer/Footer";
import BlogsCollection from "./components/blogs/BlogsCollection";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import SProfile from "./components/SProfile/SProfile";
import Logout from "./components/Logout/Logout";
import PG from "./components/AddPG/PG";
import PrivacyPolicy from "./common/components/PrivacyPolicy";
import TermsConditons from './common/components/TermsConditions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyHeader />
        <Switch>
          <Route exact path="/">
            <MySlider />
            <SuccessStories />
            <Main />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/item/:id">
            <ItemDetail />
            <Footer />
          </Route>
          <Route exact path="/blogs">
            <BlogsCollection />
            <Footer />
          </Route>
          <Route exact path="/in/seller/:id">
            <SProfile />
          </Route>
          <Route exact path="/in/seller/add/pg">
            <PG />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route exact path="/terms-conditions">
            <TermsConditons />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Projects from "./pages/Projects";


function App() {
  return (
    <div className="container-fluid" style={{height: "100%"}}>
      <Router>
        <div>
          <Nav />
          <Wrapper>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    </div>
  );
}


export default App;

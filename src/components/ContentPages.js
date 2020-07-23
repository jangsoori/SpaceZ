import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import "./ContentPages.scss";
import { Route, useLocation, Switch } from "react-router-dom";
import { useTransition, animated } from "react-spring";

function ContentPages(props) {
  //Animation on route change
  let location = useLocation();
  const transitions = useTransition(location, (location) => location.pathname, {
    //Position absolute fixes jerky transition end
    from: { position: "absolute", transform: "translateX(-200%)", opacity: 0 },
    enter: { transform: "translateX(0)", opacity: 1 },
    leave: { transform: "translateX(-200%)", opacity: 0 },
  });
  return (
    <div className="content-pages">
      {transitions.map(({ item, props, key }) => {
        return (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/contact" component={Contact}></Route>
            </Switch>
          </animated.div>
        );
      })}
    </div>
  );
}

export default ContentPages;

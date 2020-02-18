import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Animation.css";
import top from "./components/top";
import about from "./components/about";
import skills from "./components/skills";
import works from "./components/works";
import others from "./components/others";

type Props = {
  children: any;
  style: any;
};

type Prop = {
  location: any;
};

const notFound = () => (
  <div>
    <h1>404</h1>存在しないページです
  </div>
);

const MenuBar: React.FC<Props> = ({ children }) => (
  <div>
    <ul style={{ display: "flex" }}>
      <li>
        <Link to="/">top</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
      <li>
        <Link to="/works">works</Link>
      </li>
      <li>
        <Link to="/skills">skills</Link>
      </li>
      <li>
        <Link to="/others">others</Link>
      </li>
    </ul>
    {children}
  </div>
);

const Menu: React.FC<Prop> = ({ location }) => {
  const currentkey = location.pathname.split("/")[1] || "";

  return (
    <MenuBar style={{ width: "500px", textAlign: "left" }}>
      <TransitionGroup>
        <CSSTransition key={currentkey} classNames="fade" timeout={800}>
          <div style={{ marginLeft: "50px", position: "absolute" }}>
            <Switch location={location}>
              <Route path="/" exact component={top} />
              <Route path="/about" exact component={about} />
              <Route path="/works" exact component={works} />
              <Route path="/skills" exact component={skills} />
              <Route path="/others" exact component={others} />
              <Route exact component={notFound} />
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </MenuBar>
  );
};

export default withRouter(Menu);

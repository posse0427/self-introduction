import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./Animation.css";
import top from "./components/top";
import about from "./components/about";
import skills from "./components/skills";
import works from "./components/works";
import others from "./components/others";
import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Grid } from "@material-ui/core";

// Material-UI をカッコで囲んで、styled の引数にしてやる
const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #303f9f 30%, #03a9f4 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
`;

type Props = {
  children: any;
  style: any;
};

type Prop = {
  location: any;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

const notFound = () => (
  <div>
    <h1>404</h1>存在しないページです
  </div>
);

const MenuBar: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Grid container alignItems="center" justify="center">
              <Link to="/">
                <StyledButton>top</StyledButton>
              </Link>
              <Link to="/about">
                <StyledButton>about</StyledButton>
              </Link>
              <Link to="/works">
                <StyledButton>works</StyledButton>
              </Link>
              <Link to="/skills">
                <StyledButton>skills</StyledButton>
              </Link>
              <Link to="/others">
                <StyledButton>others</StyledButton>
              </Link>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      {children}
    </div>
  );
};

const Menu: React.FC<Prop> = ({ location }) => {
  const currentkey = location.pathname.split("/")[1] || "";

  return (
    <MenuBar style={{ width: "500px", textAlign: "left" }}>
      <Grid container alignItems="center" justify="center">
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
      </Grid>
    </MenuBar>
  );
};

export default withRouter(Menu);

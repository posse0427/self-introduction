import React from "react";
import { Link, Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../../Animation.css";
import top from "../top/top";
import about from "../about/about";
import skills from "../skill/skills";
import works from "../work/works";
import others from "../other/others";
import styled from "styled-components";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core";

const StyledButton = styled(Button)`
  color: white;
  height: 60px;
  outline: none;
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
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <Grid item xs={12} md={1}>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <StyledButton>top</StyledButton>
                </Link>
              </Grid>
              <Grid item xs={12} md={1}>
                <Link to="/about" style={{ textDecoration: "none" }}>
                  <StyledButton>about</StyledButton>
                </Link>
              </Grid>
              <Grid item xs={12} md={1}>
                <Link to="/works" style={{ textDecoration: "none" }}>
                  <StyledButton>works</StyledButton>
                </Link>
              </Grid>
              <Grid item xs={12} md={1}>
                <Link to="/skills" style={{ textDecoration: "none" }}>
                  <StyledButton>skills</StyledButton>
                </Link>
              </Grid>
              <Grid item xs={12} md={1}>
                <Link to="/others" style={{ textDecoration: "none" }}>
                  <StyledButton>others</StyledButton>
                </Link>
              </Grid>
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
            <div>
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

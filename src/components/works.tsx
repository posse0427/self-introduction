import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  Button,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const title: string = "Works";
  const description: string = "2枚目のページです";

  return (
    <div>
      <h1>{title}</h1>
      {description}
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h2" component="h2">
            be
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <a href="https://posseblog.herokuapp.com/">URL</a>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

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
  const title: string = "Skills";
  const description: string = "3枚目のページです";

  return (
    <div>
      <h1>{title}</h1>
      {description}
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h2" component="h2">
            html
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            well meaning and kindly.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

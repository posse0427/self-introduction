import React from "react";
import {
  Card,
  Button,
  CardContent,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
import contents from "./WorksContents.json";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  cardGrid: {
    padding: "0 16px"
  },
  card: {
    height: "230px",
    marginBottom: "10px"
  },
  container: {
    maxWidth: "1200px",
    margin: "45px auto"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const title: string = "Works";
  const description: string = "活動実績です";

  return (
    <div style={{ whiteSpace: "pre-line" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={12}>
          <h1>{title}</h1>
        </Grid>
      </Grid>
      {description}
      <Grid
        container
        spacing={4}
        justify="center"
        className={classes.container}
      >
        {contents.map((item, key) => (
          <Grid item key={key} xs={12} sm={5} className={classes.cardGrid}>
            <Card className={classes.card}>
              <CardContent>
                <h1>{item.title}</h1>
                <Typography variant="body2" component="p">
                  {item.text}
                </Typography>
                <Button size="small">
                  <a href={item.url}>URL</a>
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

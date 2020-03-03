import React from "react";
import { Grid } from "@material-ui/core";

const top: React.FC = () => {
  const title: string = "Welcome To Posse's Room";
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "450px" }}
      >
        <Grid item xs={8}>
          <h1>{title}</h1>
        </Grid>
      </Grid>
    </div>
  );
};

export default top;

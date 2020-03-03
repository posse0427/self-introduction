import React from "react";
import { Timeline, Follow } from "react-twitter-widgets";
import { Grid } from "@material-ui/core";

const others: React.FC = () => {
  const title: string = "Others";
  const description: string = "私に関することです";
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={8}>
          <h1>{title}</h1>
        </Grid>
      </Grid>
      {description}
      <br />
      <h2>Twitter</h2>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "posse0427"
        }}
        options={{
          username: "posse0427",
          height: "600",
          width: "500"
        }}
      />
      <Follow username="posse0427" />
    </div>
  );
};

export default others;

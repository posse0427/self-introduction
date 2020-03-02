import React from "react";
import { Timeline, Follow } from "react-twitter-widgets";
import { Grid } from "@material-ui/core";

const others: React.FC = () => {
  const title: string = "Others";
  const description: string = "4枚目のページです";
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ marginTop: "15vh" }}
      >
        <Grid item xs={8}>
          <h1>{title}</h1>
        </Grid>
      </Grid>
      {description}
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "posse0427"
        }}
        options={{
          username: "posse0427",
          height: "600"
        }}
      />
      <Follow username="posse0427" />
    </div>
  );
};

export default others;

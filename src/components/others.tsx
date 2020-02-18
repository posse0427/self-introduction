import React from "react";
import { Timeline, Follow } from "react-twitter-widgets";

const others: React.FC = () => {
  const title: string = "Others";
  const description: string = "4枚目のページです";
  return (
    <div>
      <h1>{title}</h1>
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

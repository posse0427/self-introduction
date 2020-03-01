import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const title: string = "自己紹介";

  return (
    <div>
      <h1>{title}</h1>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="/src/自己紹介.jpeg"
              title="Contemplative Reptile"
            />
          </CardContent>
        </CardActionArea>
        <table>
          <tr>
            <th>nickname</th>
            <td>暗号名ポセイドン</td>
          </tr>
          <tr>
            <th>GitHub</th>
            <td>
              <a href="https://github.com/posse0427">posse0427</a>
            </td>
          </tr>
          <tr>
            <th>Twitter</th>
            <td>
              <a href="https://twitter.com/posse0427">@posse0427</a>
            </td>
          </tr>
          <tr>
            <th>Youtube</th>
            <td>
              <a href="https://www.youtube.com/channel/UCtPnwsb-6cbcW93ac5AlMHg">
                暗号名ポセイドン
              </a>
            </td>
          </tr>
        </table>
      </Card>
    </div>
  );
}

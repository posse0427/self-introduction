import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from "@material-ui/core";
import styled from "styled-components";

const StyledPadding = styled.div`
  padding-bottom: 100px;
`;

const StyledTable = styled.table`
  padding: 15px;
`;

const StyledCard = styled(Card)`
  background: linear-gradient(45deg, #03a9f4 30%, #303f9f 90%);
  padding: 50px;
  margin-top: 30px;
`;

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
});

export default function MediaCard() {
  const classes = useStyles();
  const title: string = "自己紹介";
  const description: string = "私についてです";

  return (
    <div>
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
      <StyledCard className={classes.root}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/myPicture.jpeg"
              title="Contemplative Reptile"
            />
          </CardContent>
        </CardActionArea>
        <StyledTable>
          <tr>
            <th>nickname</th>
            <td>
              <Typography>暗号名ポセイドン</Typography>
            </td>
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
        </StyledTable>
      </StyledCard>
      <StyledPadding></StyledPadding>
    </div>
  );
}

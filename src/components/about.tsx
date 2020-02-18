import React from "react";

const about: React.FC = () => {
  const title: string = "自己紹介";
  return (
    <div>
      <h1>{title}</h1>
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
    </div>
  );
};

export default about;

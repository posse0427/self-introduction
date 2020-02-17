import React from "react";

const top: React.FC = () => {
  const title: string = "Top";
  const description: string = "ここがトップページです";
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
};

export default top;

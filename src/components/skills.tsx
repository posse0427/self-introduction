import React from "react";

const skills: React.FC = () => {
  const title: string = "Skills";
  const description: string = "3枚目のページです";
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
};

export default skills;

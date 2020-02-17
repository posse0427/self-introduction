import React from "react";

const about: React.FC = () => {
  const title: string = "About";
  const description: string = "1枚目のページです";
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
};

export default about;

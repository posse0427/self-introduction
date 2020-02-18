import React from "react";

const others: React.FC = () => {
  const title: string = "Others";
  const description: string = "4枚目のページです";
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
};

export default others;

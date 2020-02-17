import React from "react";

const works: React.FC = () => {
  const title: string = "Works";
  const description: string = "2枚目のページです";
  return (
    <div>
      <h1>{title}</h1>
      {description}
    </div>
  );
};

export default works;

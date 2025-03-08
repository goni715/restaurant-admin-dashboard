import React from "react";
import { Card, Image } from "antd";

const Cards = ({ bgColor, title, count, imageSrc }) => {
  return (
    <Card
      className={`!text-white text-center rounded-2xl shadow-lg w-1/3 p-5 border-none`}
      style={{ backgroundColor: bgColor }} 
    >
      <h3 className="text-lg font-medium">{title}</h3>
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto my-3 shadow-md">
        <Image
          src={imageSrc}
          alt="icon"
          preview={false}
          className="w-10"
        />
      </div>
      <h2 className="text-2xl font-bold">{count}</h2>
    </Card>
  );
};

export default Cards;

import React from "react";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

export const Card: React.FC<Props> = ({ companyName, price, ticker }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row">
      <h2 className="font-bold text-center text-veryDarkViolet md:text-left">
        {companyName}({ticker})
      </h2>
      <p>${price}</p>

      <p className="info">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quidem
        excepturi?
      </p>
    </div>
  );
};

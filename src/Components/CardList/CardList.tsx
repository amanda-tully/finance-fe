import React from "react";
import { Card } from "../Card/Card";

interface Props {}

export const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName="Apple" ticker="APPL" price={100} />
      <Card companyName="Google" ticker="GOOG" price={200} />

      <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
        No results!
      </p>
    </div>
  );
};

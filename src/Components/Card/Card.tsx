import React from "react";
import { Link } from "react-router-dom";
import { CompanySearch } from "../../company";
import { AddPortfolio } from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  searchResult: CompanySearch;
  id: string;
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Card: React.FC<Props> = ({
  searchResult,
  id,
  onPortfolioCreate,
}) => {
  return (
    <div
      key={id}
      id={id}
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
    >
      <Link
        to={`/company/${searchResult.symbol}/company-profile`}
        className="font-bold text-center text-veryDarkViolet md:text-left"
      >
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="text-veryDarkBlue">{searchResult.currency}</p>
      <p className="font-bold text-veryDarkBlue">
        {searchResult.exchangeShortName} - {searchResult.stockExchange}
      </p>

      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResult.symbol}
      />
    </div>
  );
};

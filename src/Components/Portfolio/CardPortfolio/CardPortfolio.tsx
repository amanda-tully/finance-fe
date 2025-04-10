import { SyntheticEvent } from "react";
import { PortfolioGet } from "../../../Models/Portfolio";
import { DeletePortfolio } from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

export const CardPortfolio: React.FC<Props> = ({
  portfolioValue,
  onPortfolioDelete,
}) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${portfolioValue.symbol}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {portfolioValue.symbol}
      </Link>

      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

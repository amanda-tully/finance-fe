import { SyntheticEvent } from "react";
import { PortfolioGet } from "../../../Models/Portfolio";
import { DeletePortfolio } from "../DeletePortfolio/DeletePortfolio";

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
      {portfolioValue as any}

      <DeletePortfolio
        portfolioValue={portfolioValue}
        onPortfolioDelete={onPortfolioDelete}
      />
    </div>
  );
};

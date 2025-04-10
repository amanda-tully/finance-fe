import { SyntheticEvent } from "react";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: PortfolioGet;
}

export const DeletePortfolio = ({
  onPortfolioDelete,
  portfolioValue,
}: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input hidden={true} value={portfolioValue as any} />
        <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
          X
        </button>
      </form>
    </div>
  );
};

import { Card } from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuid } from "uuid";
import React from "react";

interface Props {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CardListComponent = ({ searchResults, onPortfolioCreate }: Props) => {
  return (
    <div>
      {searchResults.length > 0 ? (
        searchResults.map((company) => (
          <Card
            searchResult={company}
            id={company.symbol}
            key={uuid()}
            onPortfolioCreate={onPortfolioCreate}
          />
        ))
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </div>
  );
};

export const CardList = React.memo(CardListComponent);

import { ChangeEvent, useCallback, useState } from "react";
import { PortfolioGet } from "../../Models/Portfolio";
import { CompanySearch } from "../../company";
import { searchCompanies } from "../../api";
import { ListPortfolio } from "../../Components/Portfolio/ListPortfolio/ListPortfolio";
import { Search } from "../../Components/Search/Search";
import { CardList } from "../../Components/CardList/CardList";

const SearchPage = () => {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[]>([]);
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await searchCompanies(search);

    if (typeof result === "string") {
      setServerError(result);
      setSearchResults([]);
    } else if (Array.isArray(result)) {
      setSearchResults(result);
      setServerError("");
    }

    setSearch("");
  };

  const onPortfolioCreate = useCallback(
    (e: any) => {
      e.preventDefault();
      const exists = portfolioValues.find(
        (value) => value === e.target[0].value
      );

      if (exists) {
        return;
      }

      const updatedPortfolioValues = [...portfolioValues, e.target[0].value];
      setPortfolioValues(updatedPortfolioValues);
    },
    [portfolioValues]
  );

  const onPortfolioDelete = useCallback(
    (e: any) => {
      e.preventDefault();

      const removed = portfolioValues.filter((value) => {
        return value !== e.target[0].value;
      });

      setPortfolioValues(removed);
    },
    [portfolioValues]
  );

  return (
    <div>
      <Search
        handleChange={handleChange}
        onSearchSubmit={onSearchSubmit}
        search={search}
      />
      {serverError && (
        <div className="text-red-500 text-center">
          <p>{serverError}</p>
        </div>
      )}

      <ListPortfolio
        onPortfolioDelete={onPortfolioDelete}
        portfolioValues={portfolioValues}
      />

      <CardList
        searchResults={searchResults}
        onPortfolioCreate={onPortfolioCreate}
      />
    </div>
  );
};

export default SearchPage;

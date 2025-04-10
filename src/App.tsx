import { ChangeEvent, useState } from "react";
import { CardList } from "./Components/CardList/CardList";
import { Hero } from "./Components/Hero/Hero";
import { Search } from "./Components/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <div className="App">
      <Hero />
      <Search
        handleChange={handleChange}
        onSearchSubmit={handleSearchSubmit}
        search={search}
      />
      {serverError && (
        <div className="text-red-500 text-center">
          <p>{serverError}</p>
        </div>
      )}

      <CardList />
    </div>
  );
}

export default App;

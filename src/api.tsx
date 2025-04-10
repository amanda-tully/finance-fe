import axios from "axios";
import {
  CompanyBalanceSheet,
  CompanyCashFlow,
  CompanyCompData,
  CompanyHistoricalDividend,
  CompanyIncomeStatement,
  CompanyKeyMetrics,
  CompanyProfile,
  CompanySearch,
  CompanyTenK,
} from "./company";

interface SearchResponse {
  data: CompanySearch[];
}

// set up a base URL for axios
axios.defaults.baseURL = "https://financialmodelingprep.com/stable";

export const searchCompanies = async (query: string) => {
  try {
    const response = await axios.get<SearchResponse>(
      `search-symbol?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};

export const getCompanyProfile = async (query: string) => {
  try {
    const data = await axios.get<CompanyProfile[]>(
      `profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`
    );
    return data;
  } catch (error: any) {
    console.log("error message: ", error.message);
  }
};

// export const getKeyMetrics = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyKeyMetrics[]>(
//       `https://financialmodelingprep.com/api/v3/key-metrics-ttm/${query}?limit=40&apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     if (axios.isAxiosError(error)) {
//       console.log("error message: ", error.message);
//     } else {
//       console.log("Unexpected error: ", error);
//       return "Unexpected error";
//     }
//   }
// };

// export const getIncomeStatement = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyIncomeStatement[]>(
//       `https://financialmodelingprep.com/api/v3/income-statement/${query}?limit=50&apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     console.log("error message: ", error.message);
//   }
// };

// export const getBalanceSheet = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyBalanceSheet[]>(
//       `https://financialmodelingprep.com/api/v3/balance-sheet-statement/${query}?limit=20&apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     console.log("error message: ", error.message);
//   }
// };

// export const getCashFlow = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyCashFlow[]>(
//       `https://financialmodelingprep.com/api/v3/cash-flow-statement/${query}?limit=100&apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     console.log("error message: ", error.message);
//   }
// };

// export const getCompData = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyCompData[]>(
//       `https://financialmodelingprep.com/api/v4/stock_peers?symbol=${query}&apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     console.log("error message: ", error.message);
//   }
// };

// export const getTenK = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyTenK[]>(
//       `https://financialmodelingprep.com/api/v3/sec_filings/${query}?type=10-K&page=0&apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     console.log("error message: ", error.message);
//   }
// };

// export const getHistoricalDividend = async (query: string) => {
//   try {
//     const data = await axios.get<CompanyHistoricalDividend>(
//       `https://financialmodelingprep.com/api/v3/historical-price-full/stock_dividend/${query}?apikey=${process.env.REACT_APP_API_KEY}`
//     );
//     return data;
//   } catch (error: any) {
//     console.log("error message: ", error.message);
//   }
// };

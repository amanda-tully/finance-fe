import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../api";
import { CompanyDashboard } from "../../Components/CompanyDashboard/CompanyDashboard";
import { Tile } from "../../Components/Tile/Tile";
import { Sidebar } from "../../Components/Sidebar/Sidebar";

const CompanyPage = () => {
  const [company, setCompany] = useState<CompanyProfile>();

  const { ticker } = useParams();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker as string);
      setCompany(result?.data[0]);
    };

    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" subTitle={company.companyName} />
            <Tile title="Price" subTitle={"$" + company.price?.toString()} />
            {/* <Tile title="DCF" subTitle={"$" + company.dcf.toString()} /> */}
            <Tile title="Sector" subTitle={company.sector} />
            <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
              {company.description}
            </p>
          </CompanyDashboard>
        </div>
      ) : (
        <p>no results</p>
      )}
    </>
  );
};

export default CompanyPage;

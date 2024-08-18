import React from "react";
import { useWorldData, useCountryData, useGraphData } from "api";
import { LineGraph, Map } from "components";


const Data = ({ worldData }: any) => {
  return (
    <>
      <h1 className="text-lg font-bold py-1">COVID-19 Dashboard</h1>

      <div className="flex flex-col font-bold items-center">
        <h1>Worldwide Data</h1>
      </div>

      <div className="relative overflow-x-auto shadow-xl sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="divide-y text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Total Cases:
              </th>
              <th scope="col" className="px-6 py-3">
                Total Active Cases:
              </th>
              <th scope="col" className="px-6 py-3 ">
                Total Recovered:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="px-6 py-4">
                {worldData.cases}
              </th>
              <td className="px-6 py-4">
                {worldData.active}
              </td>
              <td className="px-6 py-4">
                {worldData.recovered}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}


const Dashboard: React.FC = () => {
  const worldDataQuery = useWorldData();
  const countryDataQuery = useCountryData();
  const graphDataQuery = useGraphData();
  if (
    worldDataQuery.isLoading ||
    countryDataQuery.isLoading ||
    graphDataQuery.isLoading
  )
    return <div>Loading...</div>;

  if (
    worldDataQuery.isError ||
    countryDataQuery.isError ||
    graphDataQuery.isLoading
  )
    return <div>Error fetching data</div>;

  const worldData = worldDataQuery.data;
  return (
    <div className="flex flex-col gap-4 items-center w-full h-full">
      <Data worldData={worldData} />
      <div className="border-4 border-black rounded rounded-2 shadow-xl w-4/6 ">
        <Map countries={countryDataQuery.data} />
      </div>
      <div className="border-4 border-black rounded rounded-2 shadow-xl w-4/6">
        <LineGraph data={graphDataQuery.data} />
      </div>
    </div>
  );
};

export default Dashboard;

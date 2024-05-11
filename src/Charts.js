import React from "react";
// import { AreaChart } from "recharts";
import AreaChart from "./components/AreaChart";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

const ContainerWithCards = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="container mx-auto my-auto ">
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 max-w-[1400px]  ">
          {/* First Card */}
          <div>
            <CardLayout title="Area Chart">
              <AreaChart />
            </CardLayout>
          </div>
          {/* Second Card */}
          <div>
            <CardLayout title="Bar Chart">
              <BarChart />
            </CardLayout>
          </div>
          {/* Third Card */}
          <div>
            <CardLayout title="Line Chart">
              <LineChart />
            </CardLayout>
          </div>
        </div>
      </div>
    </div>
  );
};

function CardLayout({ title, children }) {
  return (
    <div className="flex flex-col items-center justify-between bg-slate-900 rounded overflow-hidden  shadow-xl m-4 h-[300px]">
      <h3 className="text-2xl font-semibold text-white mb-4 ">{title}</h3>
      {children}
    </div>
  );
}

export default ContainerWithCards;

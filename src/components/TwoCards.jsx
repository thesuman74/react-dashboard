import LineChart from "../components/LineChart";

export function TwoCards() {
  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto my-1 ">
        <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2  gap-2 max-w-[1400px]">
          {/* First Card */}
          <div className="col-span-2">
            <CardLayout title="Line Chart">
              <LineChart />
            </CardLayout>
          </div>
          {/* Second Card */}
          <div className="bg-slate-900 rounded overflow-hidden  shadow-xl m-4 h-[300px] ">
            <h3 className="text-2xl font-semibold text-white mb-4">
              <QuickLinks />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardLayout({ title, children }) {
  return (
    <div className="flex flex-col items-center  justify-between bg-slate-900 rounded overflow-hidden  shadow-xl m-4 h-[300px]">
      <h3 className="text-2xl font-semibold text-white mb-4 ">{title}</h3>
      {children}
    </div>
  );
}

export function QuickLinks() {
  return (
    <div className=" flex flex-col  justify-between">
      <div className="bg-violet-900  rounded hover:bg-violet-600 text-lg  font-medium text-white m-4 h-[40px] ">
        <a href="#" className="">
          Buy Coins
        </a>
      </div>
      <div className="bg-violet-900   hover:bg-violet-600  rounded text-lg font-medium text-white m-4 h-[40px] ">
        Send Coins
      </div>
      <div className="bg-violet-900   hover:bg-violet-600  rounded text-lg font-medium text-white  m-4 h-[40px] ">
        Buy Coupons
      </div>
      <div className="bg-violet-900   hover:bg-violet-600  rounded text-lg font-medium text-white m-4 h-[40px] ">
        Change Membership
      </div>
    </div>
  );
}

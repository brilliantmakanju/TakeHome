import Bchart from "../ui/dashboard/data/chart";
import DataCont from "../ui/dashboard/data/dataCont";
import NewestUser from "../ui/dashboard/data/newestUser";

const Dashboard = () => {
  return (
    <main className="flex flex-col gap-4 justify-start items-start">
      <section className="w-full flex justify-start items-start">
        <div className="flex flex-col gap-5 justify-start items-start flex-[3] py-3">
          <DataCont />
          <NewestUser />
          <Bchart />
        </div>
        {/* <div className="flex sticky flex-col  flex-1 ">
          <h3>Info</h3>
        </div> */}
      </section>
    </main>
  );
};

export default Dashboard;

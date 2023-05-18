import DataAdvance from "../../components/dataAdvance/DataAdvance";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./advance.scss";
import withAuth from "../../withAuth";
const AdvanceList = () => {
  return (
    <div className="advance">
      <Sidebar />
      <div className="advanceContainer">
        <Navbar />
        <DataAdvance />
      </div>
    </div>
  );
};

export default withAuth(AdvanceList);

import DataExpense from "../../components/dataExpense/DataExpense";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./expence.scss";

const ExpenceList = () => {
  return (
    <div className="expence">
      <Sidebar />
      <div className="expenceContainer">
        <Navbar />
        <DataExpense />
      </div>
    </div>
  );
};

export default ExpenceList;

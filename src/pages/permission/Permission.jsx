import DataAuthorisation from "../../components/dataAuthorisation/DataAuthorisation";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./permission.scss";

const Permission = () => {
  return (
    <div className="permission">
      <Sidebar />
      <div className="permissionContainer">
        <Navbar />
        <DataAuthorisation />
      </div>
    </div>
  );
};

export default Permission;

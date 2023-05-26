import "./datatable.scss";
import { managerColumns, managerRows } from "../../datatablesoruce";
import { DataGrid, GridColumnHeaderFilterIconButton } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import ManagerService from "../../service/ManagerService";
import WorkerService from "../../service/WorkerService";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import withAuth from "../../withAuth";

const Datatable = () => {
  const [id, setId] = useState("");
  const [managerid, setManagerid] = useState("");
  const [companyid, setCompanyid] = useState("");
  const token = Cookies.get("token");
  const [worker, setWorker] = useState([]);

  useEffect(() => {
    ManagerService.getInfoForAdmin(token).then((response) => {
      setCompanyid(response.data.companyid);
      setManagerid(response.data.id);
    });
  }, []);

  useEffect(() => {
    if (companyid) {
      WorkerService.getAllWorker(companyid).then((response) => {
        console.log(response);
        setWorker(response.data);
      });
    }
  }, [companyid]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div className="view">
              <Link
                className="links"
                to={"/employee/" + params.row.id}
                style={{ textDecoration: "none" }}
              >
                <span>View Profile</span>
              </Link>
            </div>
            {/* <div className="delete">
              <DeleteOutlineOutlinedIcon
                className="icon"
                onClick={() => handleDelete(params.row.id)}
              />
            </div> */}
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="dataTableTitle">
        <Link to="/employee/add" className="link">
          Add new employee
        </Link>
      </div>
      <DataGrid
        style={{ fontWeight: "600" }}
        className="datagrid"
        rows={worker}
        columns={managerColumns.concat(actionColumn)}
        rowHeight={100}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default Datatable;

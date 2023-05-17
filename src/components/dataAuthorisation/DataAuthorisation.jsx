import "./dataauth.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataPermission";
import { useState, useEffect } from "react";
import ManagerService from "../../service/ManagerService";
import Cookies from "js-cookie";
import PermissionService from "../../service/PermissionService";
import Select from "react-select";

const DataAuthorisation = () => {
  const [data, setData] = useState(userRows);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [manager, setManager] = useState({});
  const token = Cookies.get("token");
  const [myState, setMyState] = useState({
    id: "",
    status: "",
  });

  useEffect(() => {
    ManagerService.getInfoForAdmin(token).then((response) => {
      setManager({ ...manager, ...response.data });
    });
  }, []);

  useEffect(() => {
    PermissionService.getPermissionForWorker(manager.id).then((response) => {
      setData([...response.data]);
    });
  }, [manager]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="viewButton"
              onClick={() => {
                setSelectedItem(params.row);
                setShowDetails(true);
              }}
            >
              View
            </div>
          </div>
        );
      },
    },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    PermissionService.updatePermission(myState).then((response) => {
      console.log(response);
    });
  };
  const options = [
    { value: "APPROVED", label: "Approved" },
    { value: "REJECTED", label: "Rejected" },
  ];

  return (
    <div className="datatablee">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
      />
      {showDetails && (
        <div className="advanceDetail">
          <h4>Permission Details</h4>
          <form className="backAdvance" onSubmit={handleSubmit}>
            <div className="formInput">
              <label>Employee Name</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.name : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Expense Type</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.typeOfPermit : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Date of Request</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.dateOfRequest : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Reply Date</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.replyDate : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Status</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.approvalStatus : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Start Date</label>
              <input
                type="date"
                value={selectedItem ? selectedItem.startDate : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>End Date</label>
              <input
                type="date"
                value={selectedItem ? selectedItem.endDate : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Days</label>
              <input
                type="number"
                value={selectedItem ? selectedItem.numberOfDays : ""}
                disabled
              />
            </div>

            {selectedItem && (
              <div className="formInput">
                <label htmlFor="">
                  {selectedItem.approvalStatus === "passive"
                    ? "Date of Approval"
                    : "Approval Process"}
                </label>

                {selectedItem.approvalStatus === "APPROVED" ||
                selectedItem.approvalStatus === "REJECTED" ? (
                  <input
                    type="text"
                    value={selectedItem.approvalStatus}
                    disabled
                  />
                ) : (
                  <select
                    defaultValue={selectedItem.approvalStatus}
                    onChange={(e) =>
                      setMyState({
                        ...myState,
                        status: e.target.value,
                        id: selectedItem.id,
                      })
                    }
                  >
                    <option value="APPROVED" className="accept">
                      Approved
                    </option>
                    <option value="REJECTED">Rejected</option>
                  </select>
                )}
              </div>
            )}
            {selectedItem &&
              !["APPROVED", "REJECTED"].includes(
                selectedItem.approvalStatus
              ) && (
                <button type="submit" className="advanceButton">
                  Apply
                </button>
              )}
          </form>
        </div>
      )}
    </div>
  );
};

export default DataAuthorisation;

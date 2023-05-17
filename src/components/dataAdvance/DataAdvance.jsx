import "./data.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataAdvance";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import AdvanceService from "../../service/AdvanceService";
import { useState, useEffect } from "react";
import ManagerService from "../../service/ManagerService";
const DataAdvance = () => {
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
    AdvanceService.getAllAdvances(manager.id).then((response) => {
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
    console.log(myState);
    AdvanceService.updateAdvanceStatus(myState).then(
      () => {
        alert("başarılı");
      },
      () => {
        alert("başarısız");
      }
    );
  };

  return (
    <div className="datatablee">
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 7,
            },
          },
        }}
        pageSizeOptions={[7]}
        rowHeight={100}
      />
      {showDetails && (
        <div className="advanceDetail">
          <h4>Advance Details</h4>
          <form className="backAdvance" onSubmit={handleSubmit}>
            <div className="formInput">
              <label>Employee Name</label>
              <input
                type="text"
                value={
                  selectedItem
                    ? selectedItem.nameOfTheRequester +
                      " " +
                      selectedItem.surnameOfTheRequester
                    : ""
                }
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
              <label>Status</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.approvalStatus : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Amount</label>
              <input
                type="number"
                value={selectedItem ? selectedItem.advanceAmount : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Exchange</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.currency : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Request Type</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.advanceRequestType : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Description</label>
              <textarea
                type="text"
                value={selectedItem ? selectedItem.description : ""}
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

export default DataAdvance;

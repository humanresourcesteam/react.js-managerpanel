import "./dataauth.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataPermission";
import { Link } from "react-router-dom";
import { useState } from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const DataAuthorisation = () => {
  const [data, setData] = useState(userRows);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const [advance, setAdvance] = useState([
    {
      id: "",
      name: "",
      surname: "",
      employeeid: "",
      managerid: "",
      requestDate: "",
      status: "",
      amount: "",
      exchange: "",
      requestType: "",
      desc: "",
      replyDate: "",
      approval: "",
    },
  ]);
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
                setShowDetails(true); // Add this line
              }}
            >
              View
            </div>
          </div>
        );
      },
    },
  ];

  const options = [
    { value: "Accept", label: "Acceptance", color: "green" },
    { value: "Okey", label: "Red", color: "red" },
  ];

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
          <h4>Permission Details</h4>
          <form className="backAdvance">
            <div className="formInput">
              <label>Employee Name</label>
              <input
                type="text"
                value={selectedItem ? selectedItem.email : ""}
                disabled
              />
            </div>
            <div className="formInput">
              <label>Expense Type</label>
              <input type="text" value={"Travel"} disabled />
            </div>
            <div className="formInput">
              <label>Date of Request</label>
              <input type="text" value={"121"} disabled />
            </div>
            <div className="formInput">
              <label>Status</label>
              <input type="text" value={"121"} disabled />
            </div>
            <div className="formInput">
              <label>Start Date</label>
              <input type="date" value={121} disabled />
            </div>
            <div className="formInput">
              <label>End Date</label>
              <input type="date" value={"Dolar $"} disabled />
            </div>
            <div className="formInput">
              <label>Days</label>
              <input type="number" value={5} disabled />
            </div>

            {selectedItem && (
              <div className="formInput">
                <label htmlFor="">
                  {selectedItem.status === "passive"
                    ? "Date of Approval"
                    : "Approval Process"}
                </label>
                {selectedItem.status === "passive" ? (
                  <input type="text" value={selectedItem.status} disabled />
                ) : (
                  <select defaultValue={"Okey"}>
                    <option value="Accept" className="accept">
                      Acceptance
                    </option>
                    <option value="Okey">Red</option>
                  </select>
                )}
              </div>
            )}
            {selectedItem && selectedItem.status !== "passive" && (
              <button className="advanceButton">Apply</button>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default DataAuthorisation;

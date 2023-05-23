export const userColumns = [
  { field: "id", headerName: "ID", width: 200 },

  {
    field: "nameOfTheRequester",
    headerName: "Name",
    width: 180,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus`}>
          {params.row.name + " " + params.row.surname}
        </div>
      );
    },
  },
  {
    field: "expenditureType",
    headerName: "Expense Type",
    width: 200,
  },
  {
    field: "requestDate",
    headerName: "Expense Date",
    width: 200,
  },
  {
    field: "amountOfExpenditure",
    headerName: "Amount",
    width: 120,
  },
  {
    field: "currency",
    headerName: "Exchange",
    width: 120,
  },

  {
    field: "approvalStatus",
    headerName: "Status",
    width: 190,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.approvalStatus}`}>
          {params.row.approvalStatus}
        </div>
      );
    },
  },
];

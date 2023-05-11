export const managerColumns = [
  { field: "id", headerName: "ID", width: 250 },
  {
    field: "image",
    headerName: "Image",
    width: 150,
    renderCell: (param) => {
      return (
        <div className="cellWithImg">
          <img src={param.row.image} className="cell" />
        </div>
      );
    },
  },
  { field: "name", headerName: "Firstname", width: 200 },
  { field: "surname", headerName: "Surname", width: 200 },
  { field: "companyPhone", headerName: "Phone", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "activity", headerName: "Activity", width: 280 },
];

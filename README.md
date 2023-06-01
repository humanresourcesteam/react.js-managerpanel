# Human Resources Management Manager Panel

In our HRM project, we have a manager panel that allows the manager to add and list employees, view, approve or reject employees' expense, leave, and advance requests, as well as edit their own profile.

![Screenshot_8](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/ff6cdf7c-852e-4e3b-a463-c8c40ffc1dba)

## Features

- Inbox
- Mail service
- Notification
- Worker Add Pages Update
- Worker validation change

## Installation

Install project with npm

```bash
  git clone https://github.com/humanresourcesteam/react.js-managerpanel.git
  cd my-project
  npm install
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/humanresourcesteam/react.js-managerpanel.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Run Docker

Clone the project

```bash
  docker push aliogutcen/my-react-manager:20
```

Running on Docker

```bash
  docker build -t <my-react-manager> .
  docker run -p 3000:3000 <my-react-manager>
```

## Usage/Examples

```javascript
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
```

## Screenshot

![Screenshot_7](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/4132bbb3-7067-4453-9a5b-06319b9b0809)

![Screenshot_1](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/6cac9ad2-67ab-45dc-9d5d-4d6bb596fe74)

![Screenshot_2](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/d2e89cc2-c81b-44c7-9c36-01b44d07e8eb)

![Screenshot_3](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/8e94e9ad-584b-4137-804f-11079b28c265)

![Screenshot_4](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/c62fa4fd-992b-40b2-9a69-eb020fac5a0f)

![Screenshot_5](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/1c0fcd9f-8d86-475e-b713-874ca2f72543)

![Screenshot_6](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/d337c2c7-3613-4ab1-bde3-e1ebb200652b)

![Screenshot_9](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/f718c49a-7b13-4ce7-952c-f9b8341b10de)

![Screenshot_10](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/dcac02ef-4153-4a95-8546-4f7cff09af49)

![Screenshot_11](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/61c5e73e-8b21-4449-a53b-fa1a34391c4b)

![Screenshot_12](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/58422541-194d-4f29-982e-7026c91b7259)

![Screenshot_13](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/96de8fd0-3163-4754-98e4-4d6f7861e39b)

![Screenshot_14](https://github.com/humanresourcesteam/react.js-managerpanel/assets/85200452/9b6feb2d-7770-4a78-b690-78bbb1bc40cb)

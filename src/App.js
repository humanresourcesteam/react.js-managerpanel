import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import List from "./pages/list/List";
import Add from "./pages/add/Add";
import Single from "./pages/single/Single";
import AdvanceList from "./pages/advancelist/AdvanceList";
import ExpenceList from "./pages/expenselist/ExpenceList";
import Permission from "./pages/permission/Permission";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>
            <Route path="employee">
              <Route index element={<List />} />
              <Route path="add" element={<Add />} />
              <Route path=":employeeId" element={<Single />} />
              {/* <Route path=":employee" element={<Single />} />
              <Route path="new" element={<New />} /> */}
            </Route>
            <Route path="advance">
              <Route index element={<AdvanceList />} />
            </Route>
            <Route path="permi">
              <Route index element={<Permission />} />
            </Route>
            <Route path="expence">
              <Route index element={<ExpenceList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

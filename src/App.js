import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import List from "./pages/list/List";
import Add from "./pages/add/Add";
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
              {/* <Route path=":employee" element={<Single />} />
              <Route path="new" element={<New />} /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

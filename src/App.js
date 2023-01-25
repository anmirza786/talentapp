import Sidebar from "./components/Sidebar/Sidebar.component";
import { Routes, Route } from "react-router-dom";
import SearchTalent from "./components/SearchTalent/SearchTalent.component";
import Dashboard from "./components/Dashboard/Dashboard.component";
import CreateRequistion from "./components/CreateRequistion/CreateRequistion.component";
import RequistionLog from "./components/RequistionLog/RequistionLog.component";
import UpdateRequistion from "./components/RequistionUpdate/UpdateRequistion.component";
import LevelFilter from "./components/LevelFilter/LevelFilter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="SearchTalent" element={<SearchTalent />} />
        <Route path="CreateRequistion" element={<CreateRequistion />} />
        <Route path="RequistionLog" element={<RequistionLog />} />
        <Route path="UpdateRequistion" element={<UpdateRequistion />} />
        <Route path="SearchTalent/Resume" element={<LevelFilter />} />
      </Route>
    </Routes>
  );
}

export default App;

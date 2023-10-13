import Main from "./Main/Main";
import GroupHome from "./GroupHome/GroupHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <Main />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/GroupHome" element={<GroupHome />} />
      </Routes>
    </Router>
  );
}
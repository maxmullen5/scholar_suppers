import Main from "./Main/Main";
import GroupHome from "./GroupHome/GroupHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// routing for which links take to which pages 
// root will be changed in upcoming feature to sign in page
export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/GroupHome" element={<GroupHome />} />
      </Routes>
    </Router>
  );
}
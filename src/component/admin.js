import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Add from "./pages/Add";
import Check from "./pages/Check";
import Download from "./pages/Download";
import Myaccount from "./pages/Myaccount";
import Review from "./pages/Review";
import Start from "./pages/Start";
import View from "./pages/View";
import Sidebar from "./Sidebar";

export default function AdminPage() {
  return (
    <Route path="/admin" element={<Sidebar />}>
      <Route exat path="/" element={<Start />} />
      <Route exat path="/start" element={<Start />} />
      <Route exat path="/review" element={<Review />} />
      <Route exat path="/myaccount" element={<Myaccount />} />
      <Route exat path="/check" element={<Check />} />
      <Route exat path="/add" element={<Add />} />
      <Route exat path="/download" element={<Download />} />
      <Route exat path="/view" element={<View />} />
    </Route>
  );
}

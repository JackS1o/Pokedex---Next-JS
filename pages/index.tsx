import { Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import Login from "./login";

export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

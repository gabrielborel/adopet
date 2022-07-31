import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlobOne } from "./components/Blob-One";
import Home from "./pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<BlobOne />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

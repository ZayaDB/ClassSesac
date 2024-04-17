import { Routes, Route, Link } from "react-router-dom";
import Test from "./components/Test";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardDetail from "./pages/BoardDetail";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PhotoPage from "./pages/PhotoPage";

function App() {
  return (
    <div className="App">
      <h1>Routing!</h1>
      {/* <Routes>
        <Route path="/test" element={<Test />}></Route>
      </Routes> */}
      {/* 
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/board" element={<Board />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/board/1" element={<BoardDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes> */}

      <Routes>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<ProductPage />}></Route>
        <Route path="/productdetail" element={<ProductDetailPage />}></Route>
        <Route path="/photo" element={<PhotoPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

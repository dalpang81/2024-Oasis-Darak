import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/MainPage/Nav";
import Login from "./page/Login";
import Register from "./page/register";
import MainPage from "./page/MainPage";
import GoodsPage from "./page/Goods";

const Layout = () => {
  return (
    <div className="app">
      <Nav />
      {/* 다른 레이아웃 컴포넌트들 */}
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* 
          아래 라우트를 필요에 따라 추가하세요.
          
          <Route path='main' element={<MainPage />} />
          <Route path=':moviesId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} /> 
          */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

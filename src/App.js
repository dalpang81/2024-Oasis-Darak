import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/MainPage/Nav';
import SuccessNav from './components/MainPage/SuccessNav'
import Login from './page/Login';
import Register from './page/register';
import MainPage from './page/MainPage';
import ProductRegister from './page/ProductRegister';
import MyPage from './page/MyPage';
import GoodsPage from "./page/Goods";
import SignUp from './page/Login/SignUpSuccess';
const Layout = () => {
  return (
    <div className="app">
      <Nav />
      <Outlet />
    </div>
  );
};
const Login_Main = () =>{
    return <div className = "app">
        <SuccessNav/>
        <Outlet/>
    </div>
}
function App() {
  return (
    <div className="app">
      <Routes>
          <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
              <Route path='/success' element={<Login_Main/>}/>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/goodspage' element={<GoodsPage />} />
          {/* MyPage 관련 라우트 */}
          <Route path='/mypage' element={<MyPage />} />
            <Route path="/oauth" element={<SignUp />} />
          {/* ProductRegister 페이지는 Nav만 포함된 레이아웃을 사용 */}
          <Route path='/mypage/product-register' element={<ProductRegister />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;

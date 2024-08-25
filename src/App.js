import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/MainPage/Nav';
import Login from './page/Login';
import Register from './page/register';
import MainPage from './page/MainPage';
import ProductRegister from './page/ProductRegister';
import MyPage from './page/MyPage';

const Layout = () => {
  return (
    <div className='app'>
      <Nav />
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          
          {/* MyPage 관련 라우트 */}
          <Route path='/mypage' element={<MyPage />} />

          {/* ProductRegister 페이지는 Nav만 포함된 레이아웃을 사용 */}
          <Route path='/mypage/product-register' element={<ProductRegister />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;

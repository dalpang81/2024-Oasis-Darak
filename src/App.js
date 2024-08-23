
import { Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';

const Layout = () => {
  return (
    <div>
      <Nav />

    </div>
  )
}


function App() {
  return (
    <div className='app'>
      <Route>
        <Route path='/' element={<Layout />}>
          {/* <Route index element={<LoginPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path=':moviesId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} /> */}
        </Route>
      </Route>
    </div>
  );
}

export default App;

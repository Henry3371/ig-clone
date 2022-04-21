import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Form from './pages/form/Form.js';
import Detail from './pages/detail/Detail.js';
import List from './pages/list/List.js';

import './App.css';


function App() {
  return (
    <>
      <div className="App">
        <nav className='Nav'>
          <div className='logo'>
            <img className='headerImg' src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/30bf6c528078ba28d34bc3e37d124bdb.svg" />
          </div>

          <div className='menu'>
            <li className='menuItem'>
              <Link to='/'>Form</Link>
            </li>
            <li className='menuItem'>
              <Link to='/list'>List</Link>
            </li>
            <li className='menuItem'>
              <Link to='/detail'>Detail</Link>
            </li>
          </div>
        </nav>

        <div className='banner'>
          <div className='banner-items'>
            <img className='bannerItems-img' src="https://ik.imagekit.io/tvlk/image/imageResource/2022/04/05/1649154760228-b15e45139de233f171b03b8402facf3b.jpeg?tr=h-230,q-75,w-472" />
            <img className='bannerItems-img' src="https://ik.imagekit.io/tvlk/image/imageResource/2022/04/14/1649911162439-986662f1f353cd8fb1f394cd74d9c8bf.png?tr=h-230,q-75,w-472" />
            <img className='bannerItems-img' src="https://ik.imagekit.io/tvlk/image/imageResource/2022/04/02/1648898973948-5ddbdda5191398a24801af4e1eb8d393.png?tr=h-230,q-75,w-472" />
          </div>
        </div>

        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/list' element={<List />} />
          <Route path='/detail' element={<Detail />} />
        </Routes>

      </div>
    </>
  );
}

export default App;

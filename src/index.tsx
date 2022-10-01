import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals'
import { Home } from './Home'
import Navbar from './Navvar'
import NoMatch from './NoMatch'
import Products from './Products'
import { FeaturedProduct } from './FeaturedProduct'
import { NewProduct } from './NewProduct'
import Users from './Users'
import UserDetails from './UserDetails'
// import About from './About'
const LazyAbout = React.lazy(() => import('./About'))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div id='contents'>
        <Routes>
          <Route path='*' element={<NoMatch />} />
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProduct />} />
            <Route path='featured' element={<FeaturedProduct />} />
            <Route path='new' element={<NewProduct />} />
          </Route>
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
          </Route>
          {/* <Route path='about' element={<About />} /> */}
          <Route
            path='about'
            element={
              <React.Suspense fallback='Loading...'>
                <LazyAbout />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

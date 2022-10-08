import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../Context/Cart/CartContext';

const Header = () => {

  const { cartItems , showHideCart } = useContext(CartContext)

  return (
    <>
          <nav className="navbar navbar-expand-lg" style= {{backgroundColor: '#e3f2fd'}}>
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-5" href="#">SHOPPIFY</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Careers
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Javascript</a></li>
            <li><a className="dropdown-item" href="#">Typescript</a></li>
            <li> <hr/> <a className="dropdown-item">Boootstrap </a></li>
            <li> <a className="dropdown-item">Ionic </a></li>
            <li> <hr/> <a className="dropdown-item" href="#">React</a></li>
            <li> <a className="dropdown-item" href="#">Angular</a></li>
            <li> <a className="dropdown-item" href="#">Node</a></li>
            <li> <a className="dropdown-item" href="#">Mongo</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control mx-3" type="search" placeholder="Search" aria-label="Search" />

        <div className='px-1 mx-1 w-25'>
         <i
          className="bi bi-cart2 fs-5"
          style={{cursor:"pointer"}}
          onClick={showHideCart}
         >
          {
          cartItems.length > 0 &&
            <sup className='text-success fw-bold'>{cartItems.length}</sup>
          }
          </i>
        </div>
       

        <Link to= '/'><button className="btn btn-outline-dark" type="submit">LogOut</button> </Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import About from './About'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href= "/" style={{cursor:'pointer'}} >{props.home}</a>
        </li>
      </ul>
      <div class="form-check">
  <input class="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height: '30px' , width:'20px' ,cursor:'pointer'}}  />

  <input class="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height: '30px' ,width:'20px',cursor:'pointer'}}  />

  <input class="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height: '30px' ,width:'20px',cursor:'pointer'}}  />

  <input class="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height: '30px' ,width:'20px',cursor:'pointer'}}  />
</div>

      <div className={`form-check form-switch mx-3 text-${props.mode === 'light' ? 'dark' : 'light'} `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.btntext}</label>
</div>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, // isRequired shows error if we not assign value in component or in default . if title is undefined then it shows error  
                    home: PropTypes.string}


Navbar.defaultProps = {
    home: "you are a man",
    title: "set title here"  /// is we not set values in component then it takes default value set in this 
}

import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const styles = {
    navbar: { position: 'fixed', top: 0, display: 'flex', justifyContent: 'center', width: '100%', zIndex: 1000 },
    button: { display: 'inline-block', padding: '1.5rem', fontFamily: 'Open Sans, sans-serif', textDecoration: 'none', color: '#63a0d4', fontSize: '1.7rem' }
  }
  return (
    <div style={styles.navbar}>
      <NavLink style={styles.button} exact to="/">Home</NavLink>
      <NavLink style={styles.button} to="/about">About</NavLink>
      <NavLink style={styles.button} to="/projects">Projects</NavLink>
      <NavLink style={styles.button} to="/media">Media</NavLink>
    </div>
  );
}


// <div className="navbar-fixed-top" role="navigation" style={{backgroundColor: 'transparent', borderStyle: 'none'}}>
// <div className="container container-fixed" id="top-navbar-container-fixed" style={{backgroundColor: 'transparent', borderBottomRightRadius: '6px', borderBottomLeftRadius: '6px'}}>
//   <div className="navbar-header">
//     <button type="button" className="navbar-toggle navbar-color-toggle" data-toggle="collapse" data-target=".navbar-collapse">
//       <span className="sr-only">Toggle navigation</span>
//       <span className="icon-bar"></span>
//       <span className="icon-bar"></span>
//       <span className="icon-bar"></span>
//     </button>
//   </div>
//   <div className="collapse navbar-collapse" style={{textAlign: 'center'}}>
//       <ul className="nav navbar-nav" style={{textAlign: 'center', width: '100%'}}>
//           <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
//             <NavLink to="/" id="top-link" style={{color: '#63a0d4'}}>
//               <span className="glyphicon glyphicon-th-large" />
//             </NavLink>
//           </li>
//           <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
//             <NavLink to="/projects">Projects</NavLink>
//           </li>
//           <li className="btn-link-color" style={{float: 'none', display: 'inline-block'}}>
//             <NavLink to="/media">Media</NavLink>
//           </li>
//       </ul>
//   </div>
// </div>
// </div>

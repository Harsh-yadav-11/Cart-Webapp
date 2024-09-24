import React from 'react';
class Navbar extends React.Component {
    
    render() { 
        return (
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white" >
  <div className="container-fluid" >
  <a className="navbar-brand" href="#">
   <h3>My cart</h3>
  </a>
  </div>
</nav>
        )
    };
};
export default Navbar;
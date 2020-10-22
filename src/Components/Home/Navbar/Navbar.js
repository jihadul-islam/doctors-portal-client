import React from 'react';

const Navbar = () => {
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light ">
      
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ml-auto">
            <a class="nav-link mr-5 active" href="#">Home <span class="sr-only">(current)</span></a>
            <a class="nav-link mr-5" href="#">About</a>
            <a class="nav-link mr-5" href="#">Dental Services</a>
            <a class="nav-link mr-5 text-white" href="#">Reviews</a>
            <a class="nav-link mr-5 text-white" href="#">Blogs</a>
            <a class="nav-link mr-5 text-white" href="#">Contact Us</a>
           
          </div>
        </div>
      </nav>
            
        
    );
};

export default Navbar;
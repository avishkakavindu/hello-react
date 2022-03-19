import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

// I've used latest versions of react, reactstrap and bootstrap
// which jumbotron is not available. So, I used custom styles for a jumbotron


class Header extends Component {
    render(){
        return(
            <> 
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">
                            Ristorante Con Fusion
                        </NavbarBrand>
                    </div>
                </Navbar>
                
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>
                                    We take inspiration from the world's best cuisines, and create a unique fusion experience.
                                    Our lipsmacking creations will tickle your culinary senses!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
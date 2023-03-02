import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Cards from '../card/card';
import Cards2 from '../card/card2';
import Cards3 from '../card/card3';


const Home = () => {
    return (
        <body className='Home'>
            <header style={{ paddingLeft: 0 }}>
                <div className='Hero'>
                    <div className='heroText'>
                        <p className='pHome'>Welcome to my React Website!</p>
                        <h5 className='h5Home'>You can find many things</h5>
                        <br />
                        <a href='/forum'>
                            <Button>Find your passion</Button>
                        </a>
                    </div>
                    <br />

                    <div style={{ display: 'inline-flex' }}>
                        <div id='divC'>
                            <Cards />
                        </div>

                        <div style={{ marginTop: '14cm', marginLeft: '2cm' }} >
                            <Cards2 />
                        </div>

                        <div style={{ marginTop: '14cm', marginLeft: '2cm' }} >
                            <Cards3 />
                        </div>
                    </div>

                </div>
            </header>

            <footer className='homeFooter' style={{ height: '50px' }}>
                <p className='pFooter'>If you want to contact us:</p>
            </footer>
        </body>


    );
};

export default Home;
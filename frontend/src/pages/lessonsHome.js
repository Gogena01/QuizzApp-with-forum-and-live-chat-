import React from 'react';
import './homeTemplate.css'
import pic from './clouds.jpg';
import pic2 from './face.jpg';
import pic3 from './sea.jpg';
import pic4 from './tower.jpg'

const HomeTemplate = () => {
    return (
        <>
            <div className='divPics' >
                <h1 style={{fontSize:'50px'}}>Check out our lessons, we will teach you with style!</h1>
                <img src={pic} style={{
                    maxWidth: '350px',
                    height: 'auto'
                }}></img>

                <img src={pic2} style={{
                    maxWidth: '350px',
                    height: 'auto'
                }}></img>

                <img src={pic3} style={{
                    maxWidth: '350px',
                    height: 'auto'
                }}></img>

                <img src={pic4} style={{
                    maxWidth: '350px',
                    height: 'auto'
                }}></img>

            </div>
        </>
    )
}

export default HomeTemplate
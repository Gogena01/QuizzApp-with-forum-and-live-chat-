import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import './aboutPage.css'

const AboutPage = () => {
    return (
        <>
            <div class="about-section">
                <h1>About Us Page</h1>
                <hr />
                <h2 style={{ fontWeight: '700' }}>If you search for dedicated and passionate Front-End developer, this is the right person for you.</h2>
                <p style={{ fontSize: '22px', fontWeight: '600' }}>I have started my programming path at the Software University, there I found my passion.I have been working hard for 3 years now.I will show you what skills I developed in my journey.</p>
            </div>

            <h1 style={{ textAlign: 'center', color: 'black' }}>My knowledge so far</h1>
            <div class="rowTable" style={{justifyContent:'center'}}>
                <div class="column" >
                    <div class="card">
                        <img src="holder.js/400px/450" id='JS' />
                        <div class="container">
                            <h2>Javascript</h2>
                            <p class="title"></p>
                            <p>Javascript was the first thing that I started learning</p>
                            <ProgressBar now={80} label={`${80}%`} />
                            <br />
                            <a href='https://github.com/Gogena01'><p><button class="button">GitHub</button></p></a>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="holder.js/400px/450" id='React' />
                        <div class="container">
                            <h2>React.js</h2>
                            <p>I have learned React.js with my mentor and personal teacher, who has over 10 years of experience in creating sofwares.</p>
                            <ProgressBar now={70} label={`${70}%`} />
                            <br />
                            <a href='https://www.linkedin.com/in/georgi-angelov-a43993251/'><p><button class="button">LinkedIn</button></p></a>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="holder.js/400px/450" id='Vue' />
                        <div class="container">
                            <h2>Vue.js</h2>
                            <p>I have learned React.js with my mentor and personal teacher, who has over 10 years of experience in creating sofwares.</p>
                            <p>john@example.com</p>
                            <ProgressBar now={60} label={`${60}%`} />
                            <br/>
                            <a href='https://github.com/Gogena01'><p><button class="button">Vue.js projects</button></p></a>
                        </div>
                    </div>
                </div>
                <br/>
                
                <div class="column">
                    <div class="card">
                        <img src="holder.js/400px/450" id='Express' />
                        <div class="container">
                            <h2>Express.js</h2>
                            <p>I have project posted on GitHub only written with Express.js and Jade.Click the button to see the project</p>
                            <ProgressBar now={80} label={`${80}%`} />
                            <br/>
                            <a href='https://github.com/Gogena01/TeenProject'><p><button class="button">Express Project</button></p></a>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="holder.js/400px/450" id='Node' />
                        <div class="container">
                            <h2>Node.js</h2>
                            <p>I have really good experience working with Node.js and getting used to creating the BackEnd.</p>
                            <ProgressBar now={80} label={`${80}%`} />
                            <br/>
                            <a href='https://github.com/Gogena01/TeenProject'><p><button class="button">BackEnd project</button></p></a>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="holder.js/300px/400" id='Typescript' />
                        <div class="container">
                            <h2>Typescript</h2>
                            <p>Typescript is one of the most interesting things that I have been studying so far.</p>
                            <ProgressBar now={60} label={`${60}%`} />
                            <br/>
                            <p><button class="button">No pojects</button></p>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}


export default AboutPage
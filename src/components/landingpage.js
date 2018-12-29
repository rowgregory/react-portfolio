import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://res.cloudinary.com/doyd0ewgk/image/upload/v1546053575/images/avatar.jpg" 
                            alt ="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            
                        <hr/>

                        <p>HTML/CSS | JavaScript | React | MongoDB | Express | Node.js</p>

                        <div className="social-links">

                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin-square"  aria-hidden="true"/>
                            </a>
                            <a href="https://github.com/rowgregory" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github-square"  aria-hidden="true"/>
                            </a>
                        </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;
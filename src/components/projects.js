import React, { Component } from 'react';
import { Tabs,Tab, Grid, Cell, Card, CardTitle, CardText, CardActions,Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state= { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* // Project 1 */}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:
                        'url(https://res.cloudinary.com/doyd0ewgk/image/upload/v1546057379/images/React.png) center / cover'}}>
                        React Project #1</CardTitle>
                        <CardText>
                            This is a Mario themed memory game. Click all twelve pictures once. Clicking an image twice restarts the game.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* // Project 2  */}
                    <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background:
                        'url(https://res.cloudinary.com/doyd0ewgk/image/upload/v1546057379/images/React.png) center / cover'}}>
                        React Project #2</CardTitle>
                        <CardText>
                            This is coming soon
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div><h1>This is Express</h1></div>
            )
        }
    }

    

    

    render() {
        return (
            <div className="categories-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                    <Tab>React</Tab>
                    <Tab>Express</Tab>
                    <Tab>Node</Tab>
                    <Tab>Mongo</Tab>
                </Tabs>

                
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

                    
              
            </div>
        )
    }
}

export default Projects;
import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Header title="Gregory Row" scroll>
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                    <a href="/">Link</a>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />

                <Main></Main>
            </Content>
        </Layout>
    </div>
    );
  }
}

export default App;

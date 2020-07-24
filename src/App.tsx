import * as React from 'react'
import { Component} from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BackgroundImage } from './pw/components/pages/BackgroundImage';
import styled from 'styled-components';
import { Homepage } from './pw/components/pages/Homepage';
import { Resume } from './pw/components/pages/Resume';
import { GearGridTest } from './pw/components/pages/GearGridTest';
import { Topnav } from './pw/components/topnav/Topnav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <BackgroundImage imageUrl="https://i.imgur.com/P9gbnLf.jpg">
            <MainContentContainer id="mainContentContainer">
              <Topnav />
              <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/resume" component={Resume}></Route>
                <Route exact path="/dragTest" component={GearGridTest}></Route>
              </Switch>
            </MainContentContainer>
          </BackgroundImage>
        </BrowserRouter>
      </div>
    )
  }
}

//TODO: need to make this centered when fullscreen
const MainContentContainer = styled.div`
  max-width: 1200px;
`

export default App;
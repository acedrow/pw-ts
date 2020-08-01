import * as React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import { GlobalContextProvider } from './GlobalContext'
import { KdmTracker } from './pw/components/pages/KdmTracker'
import { Homepage } from './pw/components/pages/Homepage'
import { Resume } from './pw/components/pages/Resume'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalContextProvider>
          <BrowserRouter>
            <MainContentContainer id="mainContentContainer">
              <Switch>
                <Route exact path="/" component={Homepage}></Route>
                <Route exact path="/resume" component={Resume}></Route>
                <Route exact path="/kdm-test" component={KdmTracker}></Route>
              </Switch>
            </MainContentContainer>
          </BrowserRouter>
        </GlobalContextProvider>
      </div>
    )
  }
}

//TODO: need to make this centered when fullscreen
const MainContentContainer = styled.div`

  display: block;
  overflow: auto;
  height: 100%;
  min-height: 100%;
  width: 100%;
  text-align: center;
`

export default App

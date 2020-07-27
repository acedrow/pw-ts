import * as React from 'react'
import { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import './App.css'
import { GlobalContextProvider } from './GlobalContext'
import { GearGridTest } from './pw/components/pages/GearGridTest'
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
                <Route exact path="/kdm-test" component={GearGridTest}></Route>
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
  height: 100%;
  max-width: 1200px;
`

export default App

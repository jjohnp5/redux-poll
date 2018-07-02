import React, { Component } from 'react'
import {handleInitialData} from '../actions/shared'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './Dashboard'
import LoadingBar from 'react-redux-loading'
import Leaderboard from './Leaderboard'
import AddPoll from './AddPoll'
import Poll from './Poll'
import Nav from './Nav'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <React.Fragment>
        <LoadingBar />
        <div className="container">
        <Nav />
        {
          this.props.loading === true ? null : 
          <div>
            <Route path='/' exact component={Dashboard} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='/polls/:id' component={Poll} />
            <Route path='/add' component={AddPoll} />
          </div>
        }
        </div>
        </React.Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}){
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)


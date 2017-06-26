var React = require('react')
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch
var Nav = require('./Nav')
var Home = require('./Home')
var Battle = require('./Battle')
var Popular = require('./Popular')
var Results = require('./Results')

class App extends React.Component {
  render () {
    return (
      <Router basename='/react-training'>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Results} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App

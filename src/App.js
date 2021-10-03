import React from 'react'
import Layout from './component/Layout/Layout'
import { BrowserRouter as Router, Switch , Route  } from 'react-router-dom'
import Home from './pages/Home/Home'
import TweetByHashTag from './pages/TweetByHashTag/TweetByHashTag'
import TweetsByUser from './pages/TweetsByUser/TweetsByUser'
import auth from './pages/auth/Auth'

const App = () => {
  return (
    <div>
        <Router>
          <Switch>
          <Route path="/login" component={auth} />
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/hashtags/:hashtag" component={TweetByHashTag}/>
              <Route path="/users/:user" component={TweetsByUser} />
            </Switch>
          </Layout>
          </Switch>
        </Router>
      
    </div>
  )
}

export default App


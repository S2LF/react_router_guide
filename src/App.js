import React, { Fragment, useState } from "react"
import { Route, BrowserRouter as Router, Switch, Redirect, NavLink } from "react-router-dom"
import "./App.css"

export default function App() {
  // const name = "John Doe"
  const isAuthenticated = false
  const [name, setName] = useState(' ');
  const [test, setTest] = useState('test123');

  return (
    <>
    <Router>
      <main>
        <nav>
          <NavLink to="/" activeClassName="active" exact activeStyle={{ color:'red' }}>Home</NavLink>
          <NavLink to={`/about/${name}`} activeClassName="active" activeStyle={{ color:'red' }}>About {name}</NavLink>
          <NavLink to="/contact" activeStyle={{ color:'red' }}>Contact</NavLink>
          <NavLink to="/test" activeStyle={{ color:'red' }}>Route protégée</NavLink>
          <NavLink to="/123" activeStyle={{ color:'red' }}>404</NavLink>
        </nav>
        {/* <Route path='/' render={() => <h1>Welcome !</h1>}/> */}
        <Switch>  
          <Route path='/' exact component={Home}/>
          <Route path='/about/:name' exact component={About}/>
          <Route path='/contact' exact component={Contact}/>
          <Route path='/test' exact render={() => ( isAuthenticated ? <Test test={test} /> : <Redirect to='/'/>)}/>
          <Route render={() => <h1>404: page not found</h1>}/>
            {/* {isAuthenticated ? (
            <>
              <Route path='/test' render={() => <h1>NOP</h1>}/>
            </>
            ) : (
              <Redirect to='/'/>
            )} */}

        </Switch>
      </main>

    </Router>
        <input 
        placeholder="name"
        value={name}
        onChange={(e) => {setName(e.target.value)}}
      />
  </>    
  )
}

// Home Page
function Home() {

  return (
    <Fragment>
    <h1>Home</h1>
    <FakeText />
    </Fragment>
  )
}
// Test Page
function Test({test}) {

  return (
    <Fragment>
    <h1>{test}</h1>
    <FakeText />
    </Fragment>
  )
}
// About Page
const About = ({
  match: {params: {name}}
}) => (
  <Fragment>
    { name === "" ? <Redirect to="/"/> : null}
    <h1>About { name }</h1>
    <FakeText />
  </Fragment>
)
// Contact Page
const Contact = ({ history }) => (
  <Fragment>
    <h1>Contact</h1>
    <button onClick={ () => history.push("/")}>Go to home</button>
    <FakeText />
  </Fragment>
)

const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
)
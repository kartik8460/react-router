import React from 'react'
import './/main.css';
import Home from './../components/Home';
import About from './../components/About';
import Dashboard from './../components/Dashboard';
import Contact from './../components/Contact';
import RouteParameters from './../components/RouteParameters';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import NestedRouteParent from '../components/NestedRouteParent';

const Main = () => {
    return (
        <div>
            <header>
                <nav className="navigation">
                    <ul>
                        <li>
                            <NavLink exact to="/" >Home</NavLink>
                        </li>

                        <li>
                            <NavLink activeClassName="my-active" to='/about'>About</NavLink>
                        </li>

                        <li>
                            <NavLink activeStyle={{
                                color: 'wheat',
                                textDecoration: 'underline'
                            }} to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <Link to={{
                                pathname: "/contact-us",
                                hash: '#submit',
                                search: '?quick-sbumit=true'
                            }}>Contact Us</Link>
                        </li>

                        <li>
                            <Link to="/route-param/sample-parameter?search=kartik#heading-3">Route Parameter</Link>
                        </li>

                        <li>
                            <Link to="/nested-routes">Nested Routes</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/contact-us" component={Contact} />
                <Route path="/route-param/:parameter" component={RouteParameters} />
                <Route path="/nested-routes" component={NestedRouteParent} />
            </Switch>
        </div>
    )
}

export default Main

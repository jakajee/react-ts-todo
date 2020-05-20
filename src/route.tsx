import * as React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';
import TodoMain from './Todo/components/TodoMain';
import Home from './Home/Home';
import { createBrowserHistory } from 'history';

const MainRoute = () => {
    return (
        <Router history={createBrowserHistory()}>
            <Link to="/">
                <h3>Menu</h3>
            </Link>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Todo">Todo</Link>
                </li>
            </ul>

            <hr />

            <section>
                <Switch>                    
                    <Route exact path="/todo" component={TodoMain} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                    <Route component={Home} />
                </Switch>
            </section>
        </Router>
    )
}

export default MainRoute;
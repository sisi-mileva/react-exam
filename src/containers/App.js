import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import Login from '../components/Login/Login';
import Cinemas from '../components/Cinemas/Cinemas';
import CinemaDetails from '../components/CinemaDetails/CinemaDetails';

class App extends Component {
    state = {
        isLogged: false
    };
  render() {
    return (
        <BrowserRouter>
            <div className="App">
                <nav>
                    <ul>
                        <li> <NavLink exact to='/'> Home</NavLink> </li>
                        <li> <NavLink exact to={{ pathname: '/cinemas'}}> Кина </NavLink> </li>
                    </ul>
                </nav>


                <main>
                    <Switch>
                        <Route exact path='/' component={Login} />
                        {this.state.isLogged ?
                            <Route exact path='/cinemas' component={Cinemas} />
                            :
                            <Route exact path='/' component={Login} />
                        }
                        <Route exact path='/cinemas/:id' component={CinemaDetails} />
                        <Route render={() => <h2> Nqma takava stranica </h2>} />
                    </Switch>
                </main>

            </div>
        </BrowserRouter >
    );
  }
}

export default App;

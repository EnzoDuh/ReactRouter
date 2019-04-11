import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Contact from "./History";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <BrowserRouter>
                        <div>
                            <div>
                                <NavLink
                                    exact
                                    to="/"
                                    activeStyle={{
                                        color: "Yellow",
                                        fontWeight: "Bold"
                                    }}
                                >
                                    {" "}
                                    Home{" "}
                                </NavLink>
                            </div>
                            <div>
                                <NavLink to="/Contact" activeClassName="selected">
                                    {" "}
                                    History
                                </NavLink>
                            </div>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/Contact" component={Contact} />
                            </Switch>
                        </div>
                    </BrowserRouter>
                </header>
            </div>
        );
    }
}

export default App;

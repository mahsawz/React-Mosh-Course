import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Movies from './components/movies';
import Customer from "./components/customer";
import Rental from "./components/rental";
import NavBar from "./components/navbar";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";

class App extends Component {
    render() {
        return (<React.Fragment>
                <NavBar/>
                <Switch>
                    <Route path={"/movies/:id"} component={MovieForm}/>
                    <Route path={"/movies"} component={Movies}/>
                    <Route path={"/customers"} component={Customer}/>
                    <Route path={"/rentals"} component={Rental}/>
                    <Route path={"/not-found"} component={NotFound}/>
                    <Route path={"/"} exact component={Movies}/>
                    <Redirect to={"/not-found"}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default App;
import React from 'react';
import Covid from "./components/Covid";
import StateId from "./components/StateId";
import {BrowserRouter as Router ,Switch, Route} from 'react-router-dom';
const App = () => {
    return(
        <>
            <Router>
                <Switch>
                    <Route path ="/" component = {Covid}/>
                    <Route path ="/id" component = {StateId}/>
                </Switch>
            </Router>
        </> 
    );
}

export default App;
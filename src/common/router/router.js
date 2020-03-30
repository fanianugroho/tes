import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from '../../app/landing-page';
import GalleryPage from '../../app/gallery-page'
//cek
class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={LandingPage}/>
                <Route path="/gallery" component={GalleryPage}/>
            </Switch>
        );
    }
}

export default Router;
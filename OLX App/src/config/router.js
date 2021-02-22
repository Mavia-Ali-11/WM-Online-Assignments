import React from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom';
import home from '../containers/home.jsx'
import products from '../containers/products.jsx'

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={home} />
                <Route path="/products" exact component={products} />
            </Router>
        )
    }
}

export default AppRouter;
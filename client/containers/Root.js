import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import './main.css'

class Root extends Component {

    // Type Define
    static propTypes = {
        store: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
        routes: PropTypes.element.isRequired
    };

    render() {
        let { store, routes, history } = this.props

        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        )
    }
}

export default Root

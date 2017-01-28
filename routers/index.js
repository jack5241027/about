import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Index from '../client/containers/pages/index/index'

export default (
    <Route path='*'>
        <IndexRoute component={Index} />
    </Route>
)

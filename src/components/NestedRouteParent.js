import React from 'react';
import { Route } from 'react-router-dom';
import NestedRouteChild1 from './NestedRouteChild1';

const NestedRouteParent = () => {
    return (
        <div>
            <h3>Nested Route Parent Component</h3>
            <Route exact path="/nested-routes/nestedc1" component={NestedRouteChild1} />
        </div>
    )
}

export default NestedRouteParent

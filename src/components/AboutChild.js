import React from 'react'
import { withRouter } from 'react-router-dom';
// HOC - withRouter
const AboutChild = (props) => {
    console.log(props, 'from About Child');
    return (
        <div>
            <h2>About Component in Child</h2>
        </div>
    )
}

export default withRouter(AboutChild);

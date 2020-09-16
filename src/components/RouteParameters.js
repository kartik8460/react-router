import React from 'react'

const RouteParameters = (props) => {
    const { history } = props;
    const { parameter } = props.match.params;
    const { search } = props.location;
    const searchParam = new URLSearchParams(search).entries().next().value;
    console.log(searchParam, 'search Params');
    const { hash } = props.location;

    const goToAboutPage = () => {
        history.push({ pathname: '/about' });
    }
    const changeUrltoChangeParams = () => {
        history.push({ pathname: '/route-param/changed-parameter?search=Changed Key#ChangedHash' })
    }
    return (
        <div>+
            
            <h3>Route Parameter is "{parameter}"</h3>
            <br />
            <h3>Search Parameter is "{search}"</h3>
            <h3>Search Parameter value "{searchParam}"</h3>
            <br />
            <h3>Hash Parameter value "{hash}"</h3>
            <br />
            <button onClick={goToAboutPage}>Click to go to About Page</button>
            <button onClick={changeUrltoChangeParams}>Change Url to Change Params</button>
        </div>
    )
}

export default RouteParameters

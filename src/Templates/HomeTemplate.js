import React from 'react'
import Header from '../Components/Header'
import { Route} from 'react-router-dom';
export const HomeTemplate = (props) => {
    let { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Header />
            <Component {...propsRoute} />
        </>
    }} />
}
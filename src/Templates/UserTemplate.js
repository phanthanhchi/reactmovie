import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'

export const UserTemplate = (props) => {


    const [height, setHeight] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = function () {
            setHeight(window.innerHeight)
        }
    }, [])
    const { Component, ...restParam } = props

    return <Route {...restParam} render={(...propsRoute) => {
        return <div>
            <div className="row">
                <div className="col-6" style={{ height }}>
                    <img
                        src="https://picsum.photos/2000/1000"
                        style={{
                            width: '100%', height: '100%'
                        }} />
                </div>
            
                <div className="col-6">
                    <Component {...propsRoute} />
                </div>
            </div>
        </div>
    }} />
}
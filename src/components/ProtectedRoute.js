import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { UserContext } from '../providers/userProvider';
import Loading from './Loading';


const ProtectedRoute = ({ component: Component, ...rest }) => {

    const token = localStorage.getItem('token')

    return (
        <UserContext.Consumer>
            {context => {
                if (context.loading) {
                    return <Loading />
                } else if (context.isConnected && token) {
                    return (<Route {...rest} render={props => {
                        return <Component context={context} {...props} />
                    }} />)
                } else if (!context.isConnected && !token) {
                    return <Redirect to='/signin' />
                // } else if (!context.isConnected && token) {
                //     return <Redirect to='/signin' />
                } else {
                    return <Loading />;
                }
            }}
        </UserContext.Consumer>
    );

}

export default ProtectedRoute;
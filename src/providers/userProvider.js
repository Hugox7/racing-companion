import React, { createContext } from 'react';
import { connect } from 'react-redux';

import * as authTypes from '../store/types/auth';

export const UserContext = createContext({ user: null });

class UserProvider extends React.Component {

    componentDidMount() {
        const token = localStorage.getItem('token');
        this.props.getUser(token);
    }

    render() {
        return (
            <UserContext.Provider value={this.props.user}>
                {this.props.children}
            </UserContext.Provider>
        );
    }

}

const mapStateToProps = (state) => ({
    user: state.auth.login,
});

const mapDispatchToProps = (dispatch) => ({
    getUser: (data) => {
        dispatch({ type: authTypes.GETUSER, data })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProvider);
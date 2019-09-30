import React from 'react'

export default function PrivateRoute({ component: Component, currentUser, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                currentUser
                    ? <Component currentUser={currentUser} {...props} />
                    : <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: props.location }
                        }}
                    />}
        />
    )
}

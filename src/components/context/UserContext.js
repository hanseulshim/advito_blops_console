import React from 'react';
import { UserContext } from './UserProvider';
export function withUserContext(Component) {
    return function WrapperComponent(props) {
        return (
            <UserContext.Consumer>
                {state => <Component {...props} context={state} />}
            </UserContext.Consumer>
        );
    };
}
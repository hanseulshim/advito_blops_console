import React from 'react';
import { FilterContext } from './FilterProvider';
export function withFilterContext(Component) {
  return function WrapperComponent(props) {
    return (
      <FilterContext.Consumer>
        {state => <Component {...props} context={state} />}
      </FilterContext.Consumer>
    );
  };
}

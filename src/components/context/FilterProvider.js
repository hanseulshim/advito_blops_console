import React, { Component } from 'react';

export const FilterContext = React.createContext('filter');

class FilterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { filterObj: null, filterId: null };
  }
  updateFilter = filterObj => {
    this.setState({ filterObj, filterId: filterObj.value });
  };
  render() {
    const { filterId, filterObj } = this.state;
    return (
      <FilterContext.Provider value={{ filterId, filterObj, updateFilter: this.updateFilter }}>
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}
export default FilterProvider;

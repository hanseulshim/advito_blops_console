import React from 'react';

export const withSort = Component => {
  return class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        ascending: true,
      };
    }

    sortTable = (arr, key) => {
      const { ascending } = this.state;
      let sorted = [...arr];

      this.setState({
        ascending: !this.state.ascending,
      });

      if (ascending) {
        sorted = sorted.sort((a, b) => {
          if (a[key] < b[key]) {
            return -1;
          }
          if (a[key] > b[key]) {
            return 1;
          }
          return 0;
        });
      } else {
        sorted = sorted.sort((a, b) => {
          if (a[key] < b[key]) {
            return 1;
          }
          if (a[key] > b[key]) {
            return -1;
          }
          return 0;
        });
      }

      return sorted;
    };

    render() {
      return <Component {...this.props} sort={this.sortTable} />;
    }
  };
};

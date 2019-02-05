import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';

const Wrapper = styled.div`
  position: relative;
  flex: 1;
`;

const Label = styled.p`
  text-transform: uppercase;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #dfdfdf;
  cursor: default;
  position: relative;
  padding: 10px 20px;
`;

const Title = styled.div``;

const List = styled.ul`
  z-index: 10;
  position: absolute;
  width: 100%;
  border: 1px solid #dfdfdf;
  border-top: none;
  box-shadow: 0 2px 5px -1px #e8e8e8;
  max-height: 215px;
  padding: 15px 0;
  overflow-y: scroll;
  margin: 0;
`;

const Item = styled.li`
  width: 100%;
  font-size: 1em;
  padding: 8px 10px;
  display: inline-block;
  white-space: no-pre-wrap;
  text-overflow: ellipsis;
  :hover {
    color: #fff;
    background-color: ${props => props.theme.treePoppy};
  }
  .selected {
    color: #fff;
    background-color: ${props => props.theme.treePoppy};
  }
`;

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      header: this.props.title,
    };
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen,
    }));
  };

  render() {
    const { list, label, toggleItem } = this.props;
    const { listOpen, header } = this.state;
    return (
      <Wrapper>
        {label && <Label>{label}</Label>}
        <Header onClick={() => this.toggleList()}>
          <Title>{header}</Title>
          {listOpen ? <Icon className="fas fa-caret-up" /> : <Icon className="fas fa-caret-down" />}
        </Header>
        {listOpen && (
          <List>
            {list.map(item => (
              <Item key={item.id} onClick={() => toggleItem(item.id, item.key)}>
                {item.title} {item.selected && <Icon className="fas fa-check" />}
              </Item>
            ))}
          </List>
        )}
      </Wrapper>
    );
  }
}

export default Select;

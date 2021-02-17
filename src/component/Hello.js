import React, {Component} from 'react';

export default class Hello extends Component {
  static defaultProps = {
    name: 'DEFAULT'
  }

  render() {
    return (
      <div style={{ color: this.props.color }}>
        안녕하세요 {this.props.name}
      </div>
    )
  }
}

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const router = {
  push: jest.fn(),
  replace: jest.fn(),
  go: jest.fn(),
  goBack: jest.fn(),
  goForward: jest.fn(),
  createHref: jest.fn()
};

export default class RouterContext extends Component {
  static get childContextTypes() {
    return {router: React.PropTypes.object}
  }

  getChildContext() {
    return {router: router};
  }

  clearAll() {
    router.push.mockClear();
    router.replace.mockClear();
    router.go.mockClear();
    router.goBack.mockClear();
    router.goForward.mockClear();
    router.createHref.mockClear();
  }

  render() {
    return (
      <div>{this.props.children}</div>
    );
  }
}

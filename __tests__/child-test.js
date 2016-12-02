import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import RouterContext from 'RouterContext';

class Child extends Component {
  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.moveHandler = this.moveHandler.bind(this);
  }

  static get contextTypes() {
    return {router: React.PropTypes.object.isRequired};
  }

  clickHandler() {
    this.context.router.push('/api/hoge');
  }

  moveHandler() {
    this.context.router.push('/api/fuga');
  }

  render() {
    return (
      <div>
        <span onClick={this.clickHandler}>ここをクリック</span>
        <span onClick={this.moveHandler}>移動</span>
      </div>
    );
  }
}

describe('Childのテスト', () => {

  it('クリックハンドラのテスト', () => {
    const context = TestUtils.renderIntoDocument(
      <RouterContext>
        <Child />
      </RouterContext>
    );
    const clickNodes = TestUtils.scryRenderedDOMComponentsWithTag(context, 'span');
    TestUtils.Simulate.click(clickNodes[0]);
    expect(context.getChildContext().router.push).toBeCalledWith('/api/hoge');

    context.clearAll();

    TestUtils.Simulate.click(clickNodes[1]);
    expect(context.getChildContext().router.push).toBeCalledWith('/api/fuga');
  });

});

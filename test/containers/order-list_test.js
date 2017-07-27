import { renderComponent , expect } from '../test_helper';
import OrderList from '../../src/containers/order-list';

describe('OrderList', ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(OrderList);
  });

  it('renders a button', ()=>{
    expect(component.find('button')).to.exist;
  });

  it('renders a list of orders', ()=>{
    expect(component.find('ul')).to.exist;
  });

});

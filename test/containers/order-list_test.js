import { renderComponent , expect } from '../test_helper';
import OrderList from '../../src/containers/order-list';

describe('OrderList', ()=>{
  let component;
  beforeEach(()=>{
    component = renderComponent(OrderList);
  });

  it('renders a list of orders', ()=>{
    expect(component.find('.order-list')).to.exist;
  });

});

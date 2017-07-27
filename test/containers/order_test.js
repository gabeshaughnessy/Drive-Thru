import { renderComponent , expect } from '../test_helper';
import Order from '../../src/containers/order';

describe('Order', ()=>{
  let component;

  beforeEach(()=>{
    component = renderComponent(Order);
  });

  it('shows the order details', ()=>{
    expect(component.find('.order-details')).to.exist;
  });

  it('renders a list of orders', ()=>{
    expect(component.find('ul')).to.exist;
  });

});

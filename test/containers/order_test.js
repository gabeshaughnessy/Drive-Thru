import { renderComponent , expect } from '../test_helper';
import Order from '../../src/containers/order';

describe('Order', ()=>{
  let component;
  beforeEach(()=>{
    const props = {order:{"id":1,"items":{"Slow Roll":{"name":"Slow Roll","price":2.25,"qty":1}},"total":2.25,"status":"open","createdAt":"2:57:51 PM"}, menuItems: [{"name":"Slow Roll","price":2.25,"qty":1},{"name":"Slow Bowl","price":2.25},{"name":"Salad","price":2.5},{"name":"Chicharones","price":2.5},{"name":"Michelada","price":2.5},{"name":"Margarita","price":4}]}
    component = renderComponent(Order, props);
  });

  it('renders an order', ()=>{
    expect(component).to.have.class('order');
  });

  it('have an order number', () => {
    expect(component.find('.order-number')).to.contain(1);
  });
  it('shows a total', () => {
    expect(component.find('.total')).to.contain('$');
  });
  describe('Order Items', ()=>{
    it('shows a list of items', ()=>{
      expect(component.find('.order-items')).to.exist;
    });
  });


});

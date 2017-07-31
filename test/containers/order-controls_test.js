import { renderComponent , expect } from '../test_helper';
import OrderControls from '../../src/containers/order-controls';

describe('Order Controls', ()=>{
  let component;
  beforeEach(()=>{
    const props = {order:{"id":1,"items":{"Slow Roll":{"name":"Slow Roll","price":2.25,"qty":1}},"total":2.25,"status":"open","createdAt":"2:57:51 PM"}, menuItems: [{"name":"Slow Roll","price":2.25,"qty":1},{"name":"Slow Bowl","price":2.25},{"name":"Salad","price":2.5},{"name":"Chicharones","price":2.5},{"name":"Michelada","price":2.5},{"name":"Margarita","price":4}]}

    component = renderComponent(OrderControls, props);
  });

  it('renders controls', ()=>{
    expect(component).to.have.class('order-controls');
  });

  it('has buttons', ()=>{
    expect(component.find('.btn')).to.have.lengthOf(3);
  });

});

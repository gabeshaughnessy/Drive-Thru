import { renderComponent , expect } from '../test_helper';
import OrderItem from '../../src/containers/order-item';

describe('Order Item', ()=>{
  let component;
  beforeEach(()=>{
    const props = {order:{"id":1,"items":{"Slow Roll":{"name":"Slow Roll","price":2.25,"qty":1}},"total":2.25,"status":"open","createdAt":"2:57:51 PM"}, item:{"name":"Slow Roll","price":2.25,"qty":1}}

    component = renderComponent(OrderItem, props);
  });
  it('renders an order item', ()=>{
    expect(component).to.have.class('order-item');
  });
  it('has a name', ()=>{
    expect(component.find('.item-name')).to.contain('Slow Roll');
  });
  it('has a button', () =>{
    expect(component.find('.btn')).to.exist;
  });
  it('has a qty', ()=>{
    expect(component.find('.item-qty')).to.contain('1');
  });
});

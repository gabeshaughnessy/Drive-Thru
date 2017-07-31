import { renderComponent , expect } from '../test_helper';
import MenuItem from '../../src/containers/menu-item';

describe('Menu Item', ()=>{
  let component;
  beforeEach(()=>{
    const props = {item:{"name":"Slow Roll","price":2.25,"qty":1}};
    component = renderComponent(MenuItem, props);
  });
  it('renders a menu item', ()=>{
    expect(component).to.have.class('menu-item');
  });
  it('has a name', ()=>{
    expect(component.find('.item-name')).to.contain('Slow Roll');
  });
  it('has a button', () =>{
    expect(component.find('.btn')).to.exist;
  });
});

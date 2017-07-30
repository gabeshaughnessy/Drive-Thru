import { renderComponent, expect } from '../test_helper';
import Header from '../../src/containers/header';

describe('Header', () =>{
  let component;
  beforeEach(()=>{
    component = renderComponent(Header);
  });

  it('displays the title', () => {
    expect(component.find('.title')).to.exist;
  });
  it('displays the new order button', () => {
    expect(component.find('.btn')).to.exist;
  });

});

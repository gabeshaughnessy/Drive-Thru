import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header', () =>{
  let component;
  beforeEach(()=>{
    component = renderComponent(Header);
  });

  it('displays the h1', () => {
    expect(component.find('h3')).to.exist;
  });

});

import './Container.css';

class Container {
  constructor() {
    const container = document.createElement('div');
    container.id = 'container';
    this.container = container;
  }

  getContainer() {
    return this.container;
  }
}

export default Container;

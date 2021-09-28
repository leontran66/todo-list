import './Nav.css';

class Nav {
  constructor() {
    const nav = document.createElement('div');
    nav.id = 'nav';
    this.nav = nav;
  }

  getNav() {
    return this.nav;
  }

  addHeader(title) {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = title;
    this.nav.appendChild(header);
  }
}

export default Nav;

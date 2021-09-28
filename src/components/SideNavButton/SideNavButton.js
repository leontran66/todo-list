import './SideNavButton.css';

class SideNavButton {
  constructor(name) {
    const sideNavButton = document.createElement('button');
    sideNavButton.classList.add('side-nav-button');
    sideNavButton.textContent = name;
    this.sideNavButton = sideNavButton;
  }

  getSideNavButton() {
    return this.sideNavButton;
  }
}

export default SideNavButton;

import SideNavButton from '../SideNavButton/SideNavButton';
import './SideNav.css';

class SideNav {
  constructor() {
    const sideNav = document.createElement('div');
    sideNav.id = 'side-nav';
    this.sideNav = sideNav;
    this.projects = [];
    this.active = null;
  }

  getSideNav() {
    return this.sideNav;
  }

  addHeader(title) {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = title;
    this.sideNav.appendChild(header);
  }
  
  addNewButton() {
    const newButton = new SideNavButton('Create New Project');
    newButton.getSideNavButton().id = 'new';
    this.sideNav.appendChild(newButton.getSideNavButton());
    return newButton;
  }

  addProject(name) {
    const button = new SideNavButton(name);
    button.getSideNavButton().addEventListener('click', () => this.setProjectActive(name));
    this.projects.push(button);
    if (!this.active) {
      this.setProjectActive(name);
      this.active = name;
    }
    this.sideNav.appendChild(button.getSideNavButton());
  }

  setProjectActive(name) {
    this.projects.forEach((button) => {
      button.getSideNavButton().classList.remove('active');
    });
    const button = this.projects.find((project) => project.getSideNavButton().textContent === name);
    button.getSideNavButton().classList.add('active');
    this.active = name;
  }
}

export default SideNav;

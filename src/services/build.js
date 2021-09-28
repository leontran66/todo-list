import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import SideNav from '../components/SideNav/SideNav';
import createProject from './createProject';

const createContainer = () => {
  const container = new Container();
  document.body.appendChild(container.getContainer());
  return container.getContainer();
};

const createFooter = () => {
  const footer = new Footer();
  footer.addCopyright('Leon Tran 2021');
  document.body.appendChild(footer.getFooter());
};

const createNav = () => {
  const nav = new Nav();
  nav.addHeader('ToDo List');
  document.body.appendChild(nav.getNav());
};

const createSideNav = (container) => {
  const sideNav = new SideNav();
  sideNav.addHeader('Projects');
  const newButton = sideNav.addNewButton();
  newButton.getSideNavButton().addEventListener('click', () => createProject(sideNav, 'new'));
  container.appendChild(sideNav.getSideNav());
  return sideNav;
};

export default {
  createContainer,
  createFooter,
  createNav,
  createSideNav,
};

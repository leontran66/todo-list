import Project from './models/Project';
import build from './services/build';
import './index.css';

const project = new Project('Default');

build.createNav();
build.createFooter();
const container = build.createContainer();
const sideNav = build.createSideNav(container);
sideNav.addProject(project.getName());

import Project from '../models/Project';

export default (sideNav, name) => {
  // TODO: add project to local storage
  const project = new Project(name);
  sideNav.addProject(project.getName());
};

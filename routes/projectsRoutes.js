import projectsController from '../controllers/projectsController';

export default function projectsRoutes(app) {
  app.route('/projects')
    .get(projectsController.allProjects)
    .post(projectsController.createProject);

  app.route('/projects/:projectId')
    .get(projectsController.findProject)
    .put(projectsController.updateProject)
    .delete(projectsController.deleteProject);

  app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
  });
}

import projectsModel from '../models/projectsModel';

function allProjects(req, res) {
  projectsModel.allProjects((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(docs);
  });
}

function findProject(req, res) {
  projectsModel.findProject(req.params.projectId, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(doc);
  });
}

function createProject(req, res) {
  const project = { ...req.body };

  projectsModel.createProject(project, (err) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.send(project);
  });
}

function updateProject(req, res) {
  projectsModel.updateProject(req.params.id, { ...req.body }, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
}

function deleteProject(req, res) {
  projectsModel.deleteProject(req.params.id, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    return res.sendStatus(200);
  });
}

export default {
  allProjects,
  findProject,
  createProject,
  updateProject,
  deleteProject,
};


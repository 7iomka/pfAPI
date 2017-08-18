import { ObjectID } from 'mongodb';
import db from '../db';

function allProjects(cb) {
  db.get().collection('projects').find().toArray((err, docs) => {
    cb(err, docs);
  });
}

function findProject(id, cb) {
  db.get().collection('projects').findOne({ _id: ObjectID(id) }, (err, doc) => {
    cb(err, doc);
  });
}

function createProject(project, cb) {
  db.get().collection('projects').insertOne(project, (err, result) => {
    cb(err, result);
  });
}

function updateProject(id, newData, cb) {
  db.get().collection('projects').updateOne(
    { _id: ObjectID(id) },
    newData,
    (err, result) => {
      cb(err, result);
    },
  );
}

function deleteProject(id, cb) {
  db.get().collection('projects').deleteOne(
    { _id: ObjectID(id) },
    (err, result) => {
      cb(err, result);
    },
  );
}
/*
const expamplePROJECT = {
  date: '02/11/2017',
  title: 'Project 1',
  category: [
    'Full development',
  ],
  description: 'project 1 description ... ... ...',
  media: {
    thumbnail: '',
    gallery: [

    ],
    video: [],
  },
  site: {
    url: 'http://site.ru',
    type: 'корпоративный',
    cms: 'Wordpress',
    tehnologies: [
      'css',
      'html',
      'javascript',
    ],
  },
  customProps: [
    {
      country: 'Россия',
    },
    {
      company: 'VTS-consulting',
    },
  ],
};
*/

export default {
  allProjects,
  findProject,
  createProject,
  updateProject,
  deleteProject,
};

import express from 'express';
import bodyParser from 'body-parser';
import db from './db';
import projectRoutes from './routes/projectsRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

projectRoutes(app);

db.connect('mongodb://localhost:27017/portfolioAPI', (err) => {
  if (err) {
    return console.log(err);
  }
  return app.listen(3012, () => {
    console.log('API app started');
  });
});

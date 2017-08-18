import { MongoClient } from 'mongodb';

const state = {
  db: null,
};

function connect(url, done) {
  if (state.db) {
    return done();
  }

  return MongoClient.connect(url, (err, db) => {
    if (err) {
      return done(err);
    }
    state.db = db;
    return done();
  });
}

function get() {
  return state.db;
}

export default {
  connect,
  get,
};

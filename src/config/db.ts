const mongoose = require('mongoose');

const InitiateMongoServer = async () => {
  const { DATABASE_URL } = require('./index');
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(DATABASE_URL, {

      useNewUrlParser: true,
      useUnifiedTopology: true,
      // set database name to match the database name in the mongodb
      dbName: 'express_typescript_skeleton',
    });
    console.log('Connected to DB !!');
  } catch (ex:any) {
    console.error(ex);
  }
};

export default InitiateMongoServer;

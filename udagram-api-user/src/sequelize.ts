import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';



console.log('before init connection');
console.log('username' + config.username);
console.log('password' + config.password);
console.log('database' + config.database);
console.log('host' + config.host);
export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,

  'dialect': config.dialect,
  'dialectOptions': {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false // This line will fix new error
    }
  },
  'storage': ':memory:',
});

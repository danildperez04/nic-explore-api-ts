import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from './config';

const db = config.database;

export const dataSource = new DataSource({
  type: db.type,
  host: db.host,
  port: db.port,
  username: db.username,
  password: db.password,
  database: db.database,
  entities: [__dirname + '/../entities/*.{ts,js}'],
  logging: true,
  synchronize: true,
} as DataSourceOptions);


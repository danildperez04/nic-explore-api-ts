import { DatabaseType } from 'typeorm';

interface DatabaseConfig {
  type: DatabaseType;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

interface Config {
  database: DatabaseConfig;
  auth?: {
    jwtSecret?: string;
    jwtExpiresIn?: string;
  };
}

export const config: Config = {
  database: {
    type: (process.env.DB_TYPE as DatabaseType) || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || '',
    password: process.env.DB_PASSWORD || 'your_password',
    database: process.env.DB_NAME || 'your_database',
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'change-this-secret',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h'
  }
};
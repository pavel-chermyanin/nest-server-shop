import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize';
import { sqlConfig } from './sql.config';

export const databaseConfig = registerAs('database', () => ({
  sql: {
    ...sqlConfig()
  }
}));

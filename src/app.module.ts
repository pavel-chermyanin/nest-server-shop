import { databaseConfig } from './config/configuration';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService
    }),
    ConfigModule.forRoot({
      load: [databaseConfig]
    }),
    UsersModule,
    AuthModule],

})
export class AppModule {}

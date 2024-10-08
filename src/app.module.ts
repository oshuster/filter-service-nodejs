import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Type } from './db_entity/type.entity';
import { Katotg } from './db_entity/katotg.entity';
import { ConfigModule } from '@nestjs/config';
import { SchemaService } from './schema/schema.service';
import { SchemaModule } from './schema/schema.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SchemaModule, // Підключаємо модуль схеми
    TypeOrmModule.forRootAsync({
      imports: [SchemaModule], // Підключаємо модуль схеми
      inject: [SchemaService], // Інжектимо сервіс схеми
      useFactory: async (schemaService: SchemaService) => {
        // Спочатку створюємо схему перед ініціалізацією TypeORM
        await schemaService.createSchema();
        return {
          type: 'postgres',
          host: process.env.DB_HOST,
          port: parseInt(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          entities: [Type, Katotg],
          synchronize: true,
          logging: true,
        };
      },
    }),
    TypeOrmModule.forFeature([Type, Katotg]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

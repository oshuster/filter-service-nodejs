import { Injectable } from '@nestjs/common';
import { Pool } from 'pg'; // Імпортуємо клієнт PostgreSQL

@Injectable()
export class SchemaService {
  private pool: Pool;

  constructor() {
    // Створюємо інстанс клієнта PostgreSQL
    this.pool = new Pool({
      user: process.env.DB_USER,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
    });
  }

  async createSchema() {
    try {
      // Запит для створення схеми, якщо вона не існує
      await this.pool.query('CREATE SCHEMA IF NOT EXISTS "filter-service"');
      console.log('Схема "filter-service" успішно створена або вже існує.');
    } catch (error) {
      console.error('Помилка при створенні схеми:', error);
    } finally {
      // Закриваємо підключення до бази після виконання запиту
      await this.pool.end();
    }
  }
}

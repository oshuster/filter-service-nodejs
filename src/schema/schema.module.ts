import { Module } from '@nestjs/common';
import { SchemaService } from './schema.service';

@Module({
  providers: [SchemaService],
  exports: [SchemaService], // Експортуємо сервіс, щоб інші модулі могли його використовувати
})
export class SchemaModule {}

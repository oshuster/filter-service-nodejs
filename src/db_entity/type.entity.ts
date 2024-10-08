import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'filter-service' })
export class Type {
  @PrimaryColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;
}

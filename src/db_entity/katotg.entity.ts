import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ schema: 'filter-service' })
export class Katotg {
  @PrimaryColumn()
  id: number;

  @Column()
  katotg: string;

  @Column()
  dps_name: string;

  @Column()
  adress: string;

  @Column()
  dps_code: string;
}

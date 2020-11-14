import { Entity, Column, PrimaryGeneratedColumn ,BaseEntity} from "typeorm";

/**
 * User entity has been defined
 * You shouldn't need to alter any code here
 */
@Entity({name: "people" /* Relation name in database */})
export class People extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    length: 50,
  })
  public name: string;

  @Column()
  public height: number;

  @Column()
  public mass: number;

  @Column({
    length: 50,
  })
  public homeworld: string;

  @Column({ type: 'simple-array', nullable: true})
  public films: string[];

}

export default People;
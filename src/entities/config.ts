import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Configs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    jsonData: JSON[];

    @Column()
    version: number;
}

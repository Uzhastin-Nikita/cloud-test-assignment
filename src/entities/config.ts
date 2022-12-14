import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class configs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    service: string;
    
    @Column({type: "json", array: true})
    jsondata: JSON[];

    @Column()
    version: number;
}

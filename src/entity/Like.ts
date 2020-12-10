import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import { User } from "./User";
import { Pet } from "./Pet";

@Entity({ name: "like" })
export class Like {
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column()
    readonly userId: number;

    @Column()
    readonly petId: number;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;

    @ManyToOne(type => User, user => user.likes)
    @JoinColumn({ name: "userId" })
    readonly user?: User;

    @ManyToOne(type => Pet, pet => pet.likes)
    @JoinColumn({ name: "petId" })
    readonly pet?: Pet;

    constructor(userId: number, petId: number) {
        this.userId = userId;
        this.petId = petId;
    }
}

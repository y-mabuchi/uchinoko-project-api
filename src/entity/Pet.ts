import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

import { User } from "./User";
import { Like } from "./Like";

enum Sex {
    MALE = "male",
    FEMALE = "female",
}

@Entity({ name: "pet" })
export class Pet {
    @PrimaryGeneratedColumn()
    readonly id?: number;

    @Column()
    readonly name: string;

    @Column("enum", { enum: Sex })
    sex: Sex;

    @Column()
    readonly imagePath: string;

    @Column()
    readonly userId: number;

    @Column("datetime", { default: null })
    birthday: Date | null = null;

    @Column("datetime", { default: null })
    pickupDate: Date | null = null;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;

    @ManyToOne(type => User, user => user.pets)
    @JoinColumn({ name: "userId" })
    readonly user?: User;

    @OneToMany(type => Like, like => like.pet)
    likes?: Like[];

    constructor(
        name: string,
        userId: number,
        imagePath: string,
        sex: Sex,
        birthday: Date,
        pickupDate: Date
    ) {
        this.name = name;
        this.birthday = birthday;
        this.imagePath = imagePath;
        this.sex = sex;
        this.userId = userId;
        this.pickupDate = pickupDate;
    }
}

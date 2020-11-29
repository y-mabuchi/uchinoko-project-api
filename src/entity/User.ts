import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { Book } from "./Book";

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    private readonly id?: number;

    @Column()
    public name: string;

    // @Column()
    // public lastName: string;

    @Column()
    public age: number;

    @Column()
    public password: string;

    @Column()
    public email: string;

    @Column()
    public token: string;

    @Column("tinyint")
    private readonly auth = false;

    @CreateDateColumn()
    readonly createdAt?: Date;

    @UpdateDateColumn()
    readonly updatedAt?: Date;

    @OneToMany(type => Book, book => book.user)
    books?: Book[];

    constructor(
        name: string,
        password: string,
        email: string,
        token: string,
        age: number
    ) {
        this.name = name;
        // this.lastName = lastName;
        this.password = password;
        this.email = email;
        this.token = token;
        this.age = age;
    }
}

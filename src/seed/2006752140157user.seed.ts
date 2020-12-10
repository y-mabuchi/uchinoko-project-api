import { getRepository, MigrationInterface, QueryRunner } from "typeorm";
import { User } from "../entity/User";

interface IUser {
    name: string;
    password: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

let UserSeeds: IUser[] = [];
for (let index = 1; index <= 5; index++) {
    let user: IUser = {
        name: `hoge${index}`,
        password: `hoge00${index}`,
        email: `hoge00${index}@gmail.com`,
        createdAt: `${new Date()}`,
        updatedAt: `${new Date()}`,
    };
    UserSeeds.push(user);
}

export class SeedUsers1706752140157 implements MigrationInterface {
    public async up(_: QueryRunner): Promise<any> {
        await getRepository(User).save(UserSeeds);
    }

    public async down(_: QueryRunner): Promise<any> {
        // do nothing
    }
}

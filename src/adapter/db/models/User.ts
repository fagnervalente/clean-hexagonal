import { Entity } from "typeorm";

@Entity('user')
export class User {
    id?: number;
    name: string;
    email: string;

    constructor(id: number | undefined, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}


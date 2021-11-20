export class Wish {
    email: string;
    name: string;
    wish: string;
    constructor(name: string, email: string, wish: string) {
        this.name = name;
        this.email = email;
        this.wish = wish;
    }
}

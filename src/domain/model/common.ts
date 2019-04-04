
// Class only with getter assumed to be read only
export class Person {
    constructor(private _firstName: string, private _lastName: string) {}

    get firstName(): string {
        return this. _firstName;
    }

    get lastName(): string {
        return this._lastName
    }
}
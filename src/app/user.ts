export class User {
    email: String;
    gender: String;
    race: String;
    income: String;
    age: String;
    employment: String;
    education: String;
    children: String;
    interests: {
        housing: number;
        publicSpaces: number;
        healthAndWellness: number;
        transportation: number;
        education: number;
        environment: number;
        economicDevelopment: number;
    };
}
export class User {
    email: String;
    gender: String;
    race: String;
    householdIncomeRange: String;
    ageRange: String;
    employmentStatus: String;
    educationLevel: String;
    numberOfChildren: String;
    interests: {
        housing: number;
        publicSpaces: number;
        healthAndWellness: number;
        transportation: number;
        education: number;
        environment: number;
        economicDevelopment: number;
    };
    city: String;
    state: String;
    score: number;
}
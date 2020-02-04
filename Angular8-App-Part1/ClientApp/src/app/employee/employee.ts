export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    // department?: string;

    // computeMonthlySalary(annualSalary: number): number;
}

// implement interface example
// export class Employee implements IEmployee {
    
//     constructor(public code: string, public name: string, public gender: string,
//         public annualSalary: number, public dateOfBirth: string) {
//     }

//     computeMonthlySalary(annualSalary: number): number {
//         return annualSalary / 12;
//     }
// }

//"private" example
// export class TestClass {
//     constructor(private firstName: string, private lastName: string) {
//     }
// }

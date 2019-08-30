import faker from "faker";

export class Verify {
    public verifyUserDetails (details:{ firstName: string, lastName: string, phoneNumber: string, age:number}, res:any) {
        let {firstName, lastName, age, phoneNumber} = details;
        if (age < 18) {
            res.status(400).json({error: "User age is less than 18"})
            return
        }
        if(!firstName){
            firstName = faker.name.findName();
        }
        if(!lastName){
            lastName = faker.name.findName();
        } 
        console.log( 'firstName:', firstName,'LastName:' ,lastName, age)
        return { firstName, lastName, age, phoneNumber}      
    }
}
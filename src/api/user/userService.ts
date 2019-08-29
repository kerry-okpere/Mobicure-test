import { User } from "./userModel";

export class UserServices {

    public createNewUser = () => {
            return User.create({
              firstName: 'John',
              lastName: 'Hancock',
              phoneNumber: 09093096172,
              age: 32      
            });
    }
}

const user = new UserServices

user.createNewUser();
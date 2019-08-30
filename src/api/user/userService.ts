import { User } from "./userModel";

 class UserServices {

    public createNewUser = () => {
            return User.sync().then( () => {
                User.create({
                    firstName: 'John',
                    lastName: 'Hancock',
                    phoneNumber: '09093096172',
                    age: 32      
                  });
            })
    }
}

export const user = new UserServices

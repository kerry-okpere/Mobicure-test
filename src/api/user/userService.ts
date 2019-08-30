import { User } from "./userModel";

 class UserServices {
    public getUserDetails = (firstName: string) => {
       return User.findAll({ where: { firstName }}).then(user => {
            console.log(`your users: ${user}`);
            // , JSON.stringify(user, null, 4)
            return user;
          });
    }
    public createNewUser = (data: object) => {
        return User.sync().then( () => {
                    return User.create(data).then( details => {
                        console.log(`created a user with these ${details}`)
                        return details;
                });
            })
    }
    public updateUserDetails = (firstName: string, data: {firstName: string, lastName: string, phoneNumber: string, age: number}) => {
        return User.update(data, {
            where: {
             firstName
            }
          }).then((value) => {
           return value;
          });
    }
    public deleteUserRecord = (firstName: string) => {
        User.destroy({
            where: {
              firstName
            }
        }).then((deletedUser) => {
            console.log(`${deletedUser} has been deleted`);
          })
    }
}

export const user = new UserServices

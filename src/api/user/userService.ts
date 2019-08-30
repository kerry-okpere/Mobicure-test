import { User } from "./userModel";

 class UserServices {

    public createNewUser = (data: object) => {
        return User.sync().then( () => {
                    return User.create(data).then( details => {
                        console.log(`created a user with these ${details}`)
                        return details;
                });
            })
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

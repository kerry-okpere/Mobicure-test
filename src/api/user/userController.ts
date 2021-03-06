import { Verify } from './userValidator';
import { user } from "./userService";

const verify = new Verify();

export class UserController {
  public getUser = async ( firstName: string, res: any ) => {
    try{
      const findUser = await user.getUserDetails(firstName);
      res.status(200).json(findUser)
    }catch(err){
      res.status(500).json({ message: `we are having an issue ${err}`})
    }
     
  }
  public  createUser = async (data: {
              firstName: string, 
              lastName: string, 
              phoneNumber: string,
              age: number,
              }, res: any) => {
        const valid = verify.verifyUserDetails(data, res);
          if (valid) {
            try{
              const newUser = await user.createNewUser(valid);
              res.status(200).json(newUser);
            }
            catch(error){
              res.status(500).json({message: "something went wrong", error});
            }
        }
  }
  public updateUser = async (firstName: string, data: {
              firstName: string, lastName: string, phoneNumber: string, age: number}, res: any) => {
      const valid = verify.verifyUserDetails(data, res);
      if (valid) {
        try{
          const response = await user.updateUserDetails(firstName, valid);
          if (response[0]){
            res.status(200).json(valid);
          } else {
            res.status(400).json({
              message: `there is no user with the first name ${firstName}`
            });
          }
        }
        catch(error){
          res.status(500).json({message: "something went wrong", error});
        }
      }
  }
  public deleteUser = async (firstName: string, res: any) => {
    try{
      const deleted = await user.deleteUserRecord(firstName);
          res.status(200).json({name: firstName,
                                status: deleted});
      }
    catch(err) {
      res.status(400).json({message: err})
      console.error(err);
      }
  }
}

// class UserController {

//     createUser = async (Details: object res) =>{
//         try{
//           const creator = await  user.createUserDetails(Details)
//           res.status(200).json({...Details});
//         }catch(err) {
//             res.status(400).json({err})
//             console.error(err);
//         }
//     }
// }
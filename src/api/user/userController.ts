import { user } from "./userService";

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
export const caller = () => {
  user.createNewUser();
}
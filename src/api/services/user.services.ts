import { hashPassword, checkPassword } from '../../utils/password'
import UserModel from '../models/user.model'
import tokenizer from '../../utils/tokenizer'
import {  IUserPayload } from '../../interface/user'

export class userService {
  // pre registers a user with the given email or mobile
  async Register(resource:  IUserPayload) {
    try {
      const hashedPassword = await hashPassword(resource.password)
    const newUser = await UserModel.create({...resource, password: hashedPassword})

    return await getResponse(newUser)
    } catch (err: any) {
      throw ({ message: err.message || 'user not created', error: err, status: 404 })
    }
  }

  // login a user with the given email and password
  async Login(resource:  IUserPayload) {
    try {
      const user = await UserModel.findOne({ email: resource.email })
      
      if (!user) {
       throw ({ message: 'User not found', status: 404 })
      }
      const isPasswordValid = await checkPassword(resource.password, user.password)
      if (!isPasswordValid) {
        throw ({ message: 'Invalid password', status: 400 })
      }
      return await getResponse(user, true)
    } catch (err: any) {
      throw ({ message: 'User not logged in', error: err, status: 404 })
    }
  }

};

async function getResponse(user: { toObject: () => any }, isLogin?: boolean) {
  const userObj = user.toObject();
  userObj.userId = userObj._id
  delete userObj.password;
  delete userObj._id;
  // if the user is logging in, create a token using tokenizer.generateToken and using user.userId and unit as argument
  if (isLogin) {
    userObj.token = await tokenizer.signToken({ userId: userObj.userId, unit: userObj.unit,admin:userObj.admin });
  }
  return {
    user: userObj,
  };
}

export default new userService();
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

  // logout a user with the given email and password
  async Logout(resource:  IUserPayload) {
    try {
      const user = await UserModel.findOne({ email: resource.email })
      if (!user) {
        throw ({ message: 'User not found', status: 404 })
      }
      return await getResponse(user)
    } catch (err: any) {
      throw ({ message: 'User not logged out', error: err, status: 404 })
    }
  }

  // change password for a user with the given email
  async ChangePassword(resource:  IUserPayload, userId: string) {
    try {
      const hashedPassword = await hashPassword(resource.password)
      const user = await UserModel.findByIdAndUpdate(userId, { password: hashedPassword }, { new: true })
      if (!user) {
        throw ({ message: 'User not found', status: 404 })
      }
      const isPasswordValid = await checkPassword(resource.password, user.password)
      if (!isPasswordValid) {
        throw ({ message: 'Invalid password', status: 400 })
      }
      user.password = await hashPassword(resource.password)
      await user.save()
      return await getResponse(user)
    } catch (err: any) {
      throw ({ message: 'Password not changed', error: err, status: 404 })
    }
  }

  // get all users
  async GetAll() {
    try {
      const users = await UserModel.find()
      return users
    } catch (err: any) {
      throw ({ message: 'Users not found', error: err, status: 404 })
    }
  }

  // delete a user with the given email
  // only a user can delete their account
  async Delete(resource:  IUserPayload, userId: string) {
    try {
      const user = await UserModel.findById(userId)
      if (!user) {
        throw ({ message: 'User not found', status: 404 })
      }

      //check if password is valid
      const isPasswordValid = await checkPassword(resource.password, user.password)
      if (!isPasswordValid) {
        throw ({ message: 'User not authorized', status: 401 })
      }

      await user.remove()
      return await getResponse(user)
    } catch (err: any) {
      throw ({ message: 'User not deleted', error: err, status: 404 })
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
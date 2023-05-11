import { Schema, model, models } from 'mongoose'
const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists!'],
      required: [true, 'Email is required!'],
    },
    userName: {
      type: String,
      required: [true, 'Username is required!'],
    },
    password: {
      type: String,
      required: [true, 'Password is required!'],
    },
    dateBirth: {
      type: Date,
      required: [true, 'Date of birth is required!'],
    },
    gender: {
      type: String,
      required: [true, 'Gender is required!'],
    },
    avatar: {
      type: String,
    },
    background: {
      type: String,
    },
    postList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    friendsList: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
)
const User = models.User || model('User', userSchema)
export default User

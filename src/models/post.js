import { Schema, model, models } from 'mongoose'

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, ['Content is required!']],
    },
    images: [
      {
        type: String,
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    emoji: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
)
const Post = models.Post || model('Post', postSchema)
export default Post

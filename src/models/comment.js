import { Schema, model, models } from 'mongoose'
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      required: [true, 'Comment is required!'],
    },
    image: { type: String },
    location: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true }
)
const Comment = models.Comment || model('Comment', commentSchema)
export default Comment

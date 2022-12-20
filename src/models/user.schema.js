import { model, Schema } from 'mongoose';

const UserSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },

    blacklist: {
      type: Boolean,
      default: false,
    },
    ip: {
      type: String,
      required: true,
    },
    money: { type: Number, default: 0 },
    cooldown: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const UserModel = model('users', UserSchema);

export { UserModel };

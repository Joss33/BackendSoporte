import { Schema } from 'mongoose';

export const AuthUserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, requerid: true },
});

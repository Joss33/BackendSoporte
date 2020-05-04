import { Schema } from 'mongoose';

export const ClientSchema = new Schema({
  name: String,
  phone: String,
  company: String,
});

import { Schema } from 'mongoose';

export const SupportSchema = new Schema({
  date: Date,
  detail: String,
  priority: String,
  remoteProgram: String,
  solution: String,
  solutionDate: Date,
  state: String,
  clients: String,
  users: String,
});

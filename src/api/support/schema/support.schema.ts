import { Schema } from 'mongoose';

export const SupportSchema = new Schema({
  date: { type: Date, default: Date.now },
  detail: String,
  priority: String,
  remoteProgram: String,
  solution: String,
  solutionDate: { type: Date, default: Date.now },
  state: String,
  clients: String,
  users: String,
});

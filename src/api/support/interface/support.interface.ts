import { Document } from 'mongoose';

export interface Support extends Document {
  readonly date: Date;
  readonly detail: string;
  readonly priority: string;
  readonly remoteProgram: string;
  readonly solution: string;
  readonly solutionDate: Date;
  readonly state: string;
  clients: string;
  users: string;
}

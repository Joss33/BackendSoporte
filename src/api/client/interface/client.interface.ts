import { Document } from 'mongoose';

export interface Client extends Document {
  readonly name: string;
  readonly phone: string;
  readonly company: string;
  readonly support: string;
}

import { ObjectId } from 'mongoose';

export class PetDto {
  readonly _id: ObjectId;
  readonly name: string;
  readonly age: number;
  readonly ownerName: string;
}

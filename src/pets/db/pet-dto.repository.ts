import { Injectable } from "@nestjs/common";
import { PetSchema } from "./pet.schema";
import { Model } from "mongoose";
import { PetDto } from "../dto/query/pet.dto";
import { InjectModel } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";

@Injectable()
export class PetDtoRepository {
  constructor(
    @InjectModel(PetSchema.name)
    private readonly petModel: Model<PetSchema>,
  ) {}

  async findAll(): Promise<PetDto[]> {
    return this.petModel.find({}, {}, { lean: true })
  }

  async findOne(petId: string): Promise<PetDto> {
    const petData = await this.petModel.findById(new ObjectId(petId))

    return {
      _id: petData.id,
      name: petData.name,
      age: petData.age,
      ownerName: petData.ownerName,
    } as PetDto;
  }
}
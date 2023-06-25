import { CreatePetRequest } from "src/pets/dto/request/create-pet-request.dto";

export class CreatePetCommand {
  constructor(public readonly createPetRequest: CreatePetRequest) {}
}

import { UpdatePetAgeRequest } from 'src/pets/dto/request/update-pet-age-request.dto';

export class UpdatePetCommand {
  constructor(
    public readonly petId: string,
    public readonly age: number,
  ) {}
}

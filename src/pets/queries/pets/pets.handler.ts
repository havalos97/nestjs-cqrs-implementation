import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { PetsQuery } from "./pets.query";
import { PetDtoRepository } from "../../db/pet-dto.repository";
import { PetDto } from "../../dto/query/pet.dto";

@QueryHandler(PetsQuery)
export class PetsHandler implements IQueryHandler<PetsQuery> {
  constructor(
    private readonly petDtoRepository: PetDtoRepository,
  ) {}

  async execute(): Promise<PetDto[]> {
    return this.petDtoRepository.findAll();
  }
}
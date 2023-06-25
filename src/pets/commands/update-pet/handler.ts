import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { UpdatePetCommand } from './command';
import { PetEntityRepository } from 'src/pets/db/pet-entity.repository';
import { PetUpdatedEvent } from 'src/pets/events/updated/event';

@CommandHandler(UpdatePetCommand)
export class UpdatePetHandler
  implements ICommandHandler<UpdatePetCommand> {
  constructor(
    private readonly petEntityRepositoru: PetEntityRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ petId, age }: UpdatePetCommand): Promise<void> {
    const pet = this.eventPublisher.mergeObjectContext(
      await this.petEntityRepositoru.findOneById(petId),
    );
    pet.updateAge(age);
    await this.petEntityRepositoru.findOneAndReplaceById(petId, pet);
    pet.apply(new PetUpdatedEvent(pet.getId()));
    pet.commit();
  }
}

import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CreatePetCommand } from './command';
import { PetFactory } from 'src/pets/pet.factory';
import { PetCreatedEvent } from 'src/pets/events/created/event';

@CommandHandler(CreatePetCommand)
export class CreatePetHandler
  implements ICommandHandler<CreatePetCommand> {
  constructor(
    private readonly petFactory: PetFactory,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute({ createPetRequest }: CreatePetCommand): Promise<void> {
    const { name, age, ownerName } = createPetRequest;
    const pet = this.eventPublisher.mergeObjectContext(
      await this.petFactory.create(name, age, ownerName),
    );
    pet.apply(new PetCreatedEvent(pet.getId()));
    pet.commit();
  }
}

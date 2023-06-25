import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PetCreatedEvent } from './event';

@EventsHandler(PetCreatedEvent)
export class PetCreatedHandler implements IEventHandler<PetCreatedEvent> {
  async handle({ petId }: PetCreatedEvent): Promise<void> {
    console.log(`New pet created: ID = ${petId}`);
    console.log('TODO: Implement email notification system for PetCreatedEventHandler');
  }
}

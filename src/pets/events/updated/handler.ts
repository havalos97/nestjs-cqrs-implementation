import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PetUpdatedEvent } from './event';

@EventsHandler(PetUpdatedEvent)
export class PetUpdatedHandler implements IEventHandler<PetUpdatedEvent> {
  async handle({ petId }: PetUpdatedEvent): Promise<void> {
    console.log(`Pet updated: ID = ${petId}`);
    console.log('TODO: Implement email notification system for PetUpdatedEventHandler');
  }
}

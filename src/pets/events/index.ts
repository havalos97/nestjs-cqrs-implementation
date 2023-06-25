import { PetCreatedHandler } from './created/handler';
import { PetUpdatedHandler } from './updated/handler';

export const PetEventHandlers = [
  PetCreatedHandler,
  PetUpdatedHandler,
];

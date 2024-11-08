import { createAction, props } from '@ngrx/store';
import { Pet } from './pet.entity';

export const loadPet = createAction(
  '[Pet List] Load Pet',
  props<{ id: number }>()
);

export const loadPets = createAction('[Background] Load Pets');

export const loadPetsSuccess = createAction(
  '[Background] Load Pets Successful',
  props<{ pets: Pet[] }>()
);

export const loadPetsFail = createAction('[Background] Load Pets Fail');

export const unloadPets = createAction('[Logout] Unload Pets');

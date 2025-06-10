import { computed, Injectable, signal } from '@angular/core';
import { UserCreationState } from './user-creation-state.interface';

@Injectable({
  providedIn: 'root'
})
export class UserCreationStateService {

  constructor() { }

  // Signal that holds the state (initial state)
  private readonly initialState: UserCreationState = {
      username: '',
      password:  '',
      dateExpiration:  new Date(),
      repeatPassword:  '',
      enabled:  false,
  };
  private state = signal<UserCreationState>(this.initialState);

  // Selectors (slices of state)
  username = computed(() => this.state().username);

}

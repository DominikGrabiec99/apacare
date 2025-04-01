/** INTERFACES */
import type { IChoiceWithValue } from '@/ts/interfaces/ChoiceWithValue';

export interface IFiltersProducts {
  name: string;
  id: string;
  isInitialOpen: boolean;
  choices: IChoiceWithValue[];
}

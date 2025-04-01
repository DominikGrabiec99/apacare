/** SCHEMA */
import type { IChoice } from '@/schema';

export interface IChoiceWithValue extends IChoice {
  value: boolean;
}

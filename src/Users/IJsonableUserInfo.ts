import { IJsonableGrades } from './Grades';
import { IJsonableHighestRank } from './HighestRank';
import { IUserInfo } from './IUserInfo';

export type JsonableUserInfo = Omit<
// eslint-disable-next-line indent
  IUserInfo,
// eslint-disable-next-line indent
  'grades' | 'lastVisitAt' | 'joinedAt' | 'highestRank'
>;

export interface IJsonableUserInfo extends JsonableUserInfo {
  /**
   * Grades count of a user.
   */
  grades: IJsonableGrades;

  /**
   * Highest rank of the user.
   */
  highestRank: IJsonableHighestRank | null;

  /**
   * Timestamp of last visit of the user.
   */
  lastVisitAt: number | null;

  /**
   * Timestamp of join date of the user.
   */
  joinedAt: number;
}

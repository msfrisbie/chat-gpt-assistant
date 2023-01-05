import { IEmailState } from "./email/interfaces";
import { ISearchState } from "./search/interfaces";
import { ISharedState } from "./shared/interfaces";

export interface IRootState {
  search: ISearchState;
  shared: ISharedState;
  email: IEmailState;
}

import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  members?: UserListRelationFilter;
  scopes?: JsonFilter;
  syntheseActivites?: JsonFilter;
};

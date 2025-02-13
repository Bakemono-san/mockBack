import { User } from "../user/User";
import { JsonValue } from "type-fest";

export type Project = {
  createdAt: Date;
  id: string;
  members?: Array<User>;
  scopes: JsonValue;
  syntheseActivites: JsonValue;
  updatedAt: Date;
};

import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";

export type ProjectCreateInput = {
  members?: UserCreateNestedManyWithoutProjectsInput;
  scopes?: InputJsonValue;
  syntheseActivites?: InputJsonValue;
};

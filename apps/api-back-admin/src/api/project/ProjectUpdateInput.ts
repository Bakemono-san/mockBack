import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";
import { InputJsonValue } from "../../types";

export type ProjectUpdateInput = {
  members?: UserUpdateManyWithoutProjectsInput;
  scopes?: InputJsonValue;
  syntheseActivites?: InputJsonValue;
};

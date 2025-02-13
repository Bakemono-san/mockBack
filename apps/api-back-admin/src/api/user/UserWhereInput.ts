import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type UserWhereInput = {
  id?: StringFilter;
  profile?: StringNullableFilter;
  projects?: ProjectWhereUniqueInput;
  role?: StringNullableFilter;
  username?: StringNullableFilter;
};

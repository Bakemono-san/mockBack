import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type UserCreateInput = {
  password?: string | null;
  profile?: string | null;
  projects?: ProjectWhereUniqueInput | null;
  role?: string | null;
  username?: string | null;
};

import { Project } from "../project/Project";

export type User = {
  createdAt: Date;
  id: string;
  profile: string | null;
  projects?: Project | null;
  role: string | null;
  updatedAt: Date;
  username: string | null;
};

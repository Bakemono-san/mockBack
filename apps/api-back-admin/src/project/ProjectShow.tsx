import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PROJECT_TITLE_FIELD } from "./ProjectTitle";

export const ProjectShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="scopes" source="scopes" />
        <TextField label="syntheseActivites" source="syntheseActivites" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="projectsId" label="users">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="profile" source="profile" />
            <ReferenceField
              label="Projects"
              source="project.id"
              reference="Project"
            >
              <TextField source={PROJECT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="role" source="role" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

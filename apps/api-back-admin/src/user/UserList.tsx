import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"users"} perPage={50} pagination={<Pagination />}>
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
        <TextField label="username" source="username" />{" "}
      </Datagrid>
    </List>
  );
};

import { Dayjs } from "dayjs";

export interface INPostsManagementData {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export interface INTableColumn {
  field: string;
  headerName: string;
  width: number;
  align: string;
}

export interface INExtendModalPost {
  open: boolean;
  content: string;
}

export interface INSettingFormValues {
  title: string;
  email: string;
  backgroundColor: string;
  activeDate: Dayjs | null;
}

export interface INSettingFormErrors {
  title?: string;
  email?: string;
  backgroundColor?: string;
  activeDate?: string;
}

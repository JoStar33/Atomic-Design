interface FormModel {
  type: string;
  name: string;
  label: string;
}

interface FormValidateModel {
  type: string;
  name: string;
  label: string;
  validate: object;
}

interface SubmitValue {
  [key: string]: string;
}

export type { FormModel, FormValidateModel, SubmitValue };


interface FormData {
  type: string;
  name: string;
  label: string;
}

interface FormValidateData {
  type: string;
  name: string;
  label: string;
  validate: object;
}

interface FormSubmitValue {
  [key: string]: string;
}

export type { FormData, FormValidateData, FormSubmitValue };


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

export type { FormData, FormValidateData };

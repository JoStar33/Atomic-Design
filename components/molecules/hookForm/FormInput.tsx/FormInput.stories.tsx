import { Meta, StoryFn } from "@storybook/react";
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "컴포넌트/분자/훅폼/FormInput",
  component: FormInput,
} as Meta<typeof FormInput>;

const Template: StoryFn<typeof FormInput> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <FormInput name="title" />
    </FormProvider>
  );
};

export const FormInputTest = Template.bind({});
FormInputTest.args = {};

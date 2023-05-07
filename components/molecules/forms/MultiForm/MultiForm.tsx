import FormInput from "@/components/atoms/inputs/FormInput/FormInput";
import { FormData } from "@/types/form";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./multiform.module.scss";

interface Props {
  formModel: FormData[];
}

const MultiForm = ({ formModel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.multi_form_container}
      >
        {formModel.map((model) => (
          <FormInput
            key={model.name}
            label={model.label}
            id={model.name}
            type={model.type}
            placeholder={model.label}
            register={register}
          />
        ))}
        <button type="submit" disabled={isSubmitting}>
          등록
        </button>
      </form>
    </div>
  );
};

export default MultiForm;

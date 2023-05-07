import FormValidateInput from "@/components/atoms/inputs/FormValidateInput/FormValidateInput";
import { FormValidateData } from "@/types/form";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "../MultiForm/multiform.module.scss";

interface Props {
  formModel: FormValidateData[];
}

const MultiForm = ({ formModel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
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
          <>
            <FormValidateInput             
              key={model.name}
              label={model.label}
              id={model.name}
              type={model.type}
              placeholder={model.label}
              register={register}
              validate={model.validate}
            />
            {errors[model.name] ? <p className={styles.error_text}>{String(errors[model.name]?.message)}</p> : null}
          </>
        ))}
        <button type="submit" disabled={isSubmitting}>
          등록
        </button>
      </form>
    </div>
  );
};

export default MultiForm;

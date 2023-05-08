import FormValidateInput from "@/components/atoms/inputs/FormValidateInput/FormValidateInput";
import { FormSubmitValue, FormValidateData } from "@/types/form";
import { useForm } from "react-hook-form";
import styles from "./multi_validate_form.module.scss";

interface Props {
  formModel: FormValidateData[];
  actionSubmit: (data: FormSubmitValue) => void;
  buttonText: string;
}
const MultiForm = ({ formModel, actionSubmit, buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(actionSubmit)}
        className={styles.multi_validate_form_container}
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
            {errors[model.name] ? (
              <p className={styles.error_text}>
                {String(errors[model.name]?.message)}
              </p>
            ) : null}
          </>
        ))}
        <button type="submit" disabled={isSubmitting}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default MultiForm;

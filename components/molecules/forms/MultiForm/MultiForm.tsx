import FormInput from "@/components/atoms/inputs/FormInput/FormInput";
import { FormModel, SubmitValue } from "@/types/form";
import { useForm } from "react-hook-form";
import styles from "./multiform.module.scss";

interface Props {
  formModel: FormModel[];
  actionSubmit: (data: SubmitValue) => void;
  buttonText: string;
}

const MultiForm = ({ formModel, actionSubmit, buttonText }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(actionSubmit)}
        className={styles.multi_form_container}
      >
        {formModel.map((model) => (
          <FormInput
            key={model.name}
            model={model}
            register={register}
          />
        ))}
        <button type="submit" disabled={isSubmitting}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default MultiForm;

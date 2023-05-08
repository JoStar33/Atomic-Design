import FormValidateInput from "@/components/atoms/inputs/FormValidateInput/FormValidateInput";
import { FormValidateModel, SubmitValue } from "@/types/form";
import { useForm } from "react-hook-form";
import styles from "./multi_validate_form.module.scss";

interface Props {
  formModel: FormValidateModel[];
  actionSubmit: (data: SubmitValue) => void;
  buttonText: string;
}
/*
  required: '닉네임을 입력해주세요.',
  // required: true,
  // boolean값도 가능하지만 문자열 값을 주면, input의 value가 없을 때 해당 문자열이 errors 객체로 반환되어 에러 메세지로 표시할 수 있다.
  minLength: { // value의 최소 길이
    value: 3,
    message: '3글자 이상 입력해주세요.', // 에러 메세지
  },
  pattern: { // input의 정규식 패턴
    value: /^[A-za-z0-9가-힣]{3,10}$/,
    message: '가능한 문자: 영문 대소문자, 글자 단위 한글, 숫자', // 에러 메세지
  },
*/
const MultiValidateForm = ({ formModel, actionSubmit, buttonText }: Props) => {
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
              model={model}
              register={register}
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

export default MultiValidateForm;

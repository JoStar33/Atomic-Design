import { css, styled } from "styled-components";

export const S = {
  FormInputA: styled.div<{
    margin?: string;
    maxWidth?: string;
    disabled?: boolean;
    readOnly?: boolean;
    height?: string;
  }>`
    width: 100%;
    max-width: ${(props) => props.maxWidth};
    margin: ${(props) => (props.margin ? props.margin : "0")};
    .input-container {
      position: relative;
      width: 100%;
      &__content {
        width: 100%;
        font-size: 16px;
        background-color: #fff;
        height: ${(props) => (props.height ? props.height : "40px")};
        padding-left: 10px;
        border-radius: 4px;
        color: #333;
        border: ${(props) => (props.readOnly ? "none" : "1px solid #d0d0d0")};
        ${(props) =>
          props.disabled &&
          css`
            background-color: #f5f5f5;
            color: #999;
            border: 1px solid #e6e5e5;
          `};
        &::placeholder {
          color: #a6a6a6;
        }
        &:focus {
          border-color: #adc1d9;
          box-shadow: 0 0 5px -1px #adc1d9;
        }
      }
    }
  `,
};

export const StyledLabel = styled.label<{
  required?: boolean;
  fontSize?: string;
}>`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 5px;
  height: 25px;
  width: auto;
  cursor: default;
  color: ${(props) => props.theme.colors.black2};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  color: #333;
  ${(props) =>
    props.required &&
    css`
      &::after {
        content: "*";
        color: ${(props) => props.theme.colors.red1};
        margin-left: 2px;
        vertical-align: top;
      }
    `};
`;

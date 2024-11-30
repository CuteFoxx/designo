type FormInputProps = {
    name: string;
    type: string;
    required?: boolean;
    placeholder: string;
    pattern?: string;
    errorMessage: string;
};

const FormInput = ({errorMessage,...inputProps}: FormInputProps) => {
    return (
        <div className={'form-input'}>
            <input {...inputProps} type="text"/>
            <div className="form-input-error">{errorMessage}
                <img src="images/icons/error.svg" alt="error icon"/>
            </div>
        </div>
    );
};

export default FormInput;
import { useState } from "react"
import InputMask from "react-input-mask"
import { cpf } from "cpf-cnpj-validator"
import { convertLabel } from "../../util/convertLabel"

export function TaxID(props) {
    const [validate, setValidate] = useState(false)
    const [isBlur, setIsBlur] = useState(false)

    return (
        <div className="w-full flex flex-col gap-2">
            <label
                htmlFor={props.id}
                className="text-sm text-alternate"
            >
                {props.label}{props.required ? " *" : ""}
            </label>
            <InputMask
                mask={"999.999.999-99"}
                maskChar={""}
                type="text"
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onFocus={e =>  [
                    setValidate(cpf.isValid(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))),
                    setIsBlur(true)
                ]}
                onBlur={e => [
                    setValidate(cpf.isValid(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))),
                    setIsBlur(true)
                ]}
                disabled={props.disabled}
                required={props.required}
                className="flex items-center py-2 px-4 rounded-xl border-separator"
            />
            {props.value !== "" && !validate &&
                <p className="text-xs text-red-600 dark:text-red-400 input-feedback">
                    Adicione um CPF válido.
                </p>
            }
        </div>
    );
}
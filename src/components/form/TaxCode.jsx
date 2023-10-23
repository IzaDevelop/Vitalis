import InputMask from "react-input-mask"
import { cnpj } from "cpf-cnpj-validator"
import { useState, useEffect } from "react"
import { convertLabel } from "../../util/convertLabel"

export function TaxCode(props) {
    const [validate, setValidate] = useState(false)
    const [isBlur, setIsBlur] = useState(false)

     useEffect(() => {
        if (props.value !== '' && !isBlur) {
            setValidate(cnpj.isValid(props.value.replace(/[^a-zA-Z0-9 ]/g, "")))
        }
    }, [props.value])

    return (
        <div className="w-full flex flex-col gap-3">
            <label
                htmlFor={props.id}
                className="text-sm text-alternate"
            >
                {props.label}{props.required ? " *" : ""}
            </label>
            <InputMask
                mask={"99.999.999/9999-99"}
                type="text"
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onFocus={e => [
                    setValidate(cnpj.isValid(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))),
                    setIsBlur(true)
                ]}
                onBlur={e => [
                    setValidate(cnpj.isValid(e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""))),
                    setIsBlur(true)
                ]}
                disabled={props.disabled}
                required={props.required}
                className="w-full rounded-xl border-zinc-300 disabled:opacity-75 disabled:bg-neutral-200"
            />
            {props.value !== "" && !validate &&
                <p className="text-xs text-red-600 dark:text-red-400 input-feedback">
                    Adicione um CNPJ válido.
                </p>
            }
        </div>
    );
}
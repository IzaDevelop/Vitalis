import { useRef } from "react"
import { convertLabel } from "../../util/convertLabel"

export function Select(props) {
    const selectRef = useRef(null);

    return (
        <div className="w-full flex flex-col gap-3 relative">
            <label htmlFor={props.id} className="text-sm text-alternate">
                {props.label}{props.required ? " *" : ""}
            </label>
            {props.required && (
                <input
                    tabIndex={-1}
                    autoComplete="off"
                    className="opacity-0 w-full h-[1px] absolute right-0 bottom-0 z-0 "
                    value={props.value}
                    onChange={e => { }}
                    onFocus={() => selectRef.current.focus()}
                    required
                />
            )}
            <select
                ref={selectRef}
                id={props.id}
                name={convertLabel(props.label)}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                className="w-full relative rounded-xl border-zinc-300 disabled:opacity-75 disabled:bg-neutral-200"
            >
                <option hidden>{props.placeholder}</option>
                {props.options.map((item, key) => (
                    <option key={key} value={item.value} label={item.label}>{item.label}</option>
                ))}
            </select>
        </div>
    );
}

import { convertLabel } from "../../util/convertLabel"

export function Textarea(props) {
    return (
        <div className="flex flex-col gap-3">
            <label
                htmlFor={props.id}
                className="text-sm text-alternate"
            >
                {props.label}{props.required ? " *" : ""}
            </label>
            <textarea
                name={convertLabel(props.label)}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                required={props.required}
                rows={props.rows}
                className="w-full h-[150px] rounded-xl border-zinc-300 resize-none"
            ></textarea>
        </div>
    )
}
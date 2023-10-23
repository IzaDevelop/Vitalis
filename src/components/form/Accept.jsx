export function Accept(props) {
    return (
        <div className="flex items-start">
            <div className="flex items-center">
                <input
                    id={props.id}
                    type="checkbox"
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    required={props.required}
                    className="text-body focus:ring-body"
                />
            </div>
            <label
                htmlFor={props.id}
                className="ml-2 text-sm"
                dangerouslySetInnerHTML={{ __html: props.label }}
            ></label>
        </div>
    );
}
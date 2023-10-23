export function Button(props) {
    return (
        <div className="flex">
            <button
                type="submit"
                disabled={props.disabled}
                className="bg-dark text-white py-2 px-8 transition-colors rounded-lg font-semibold disabled:opacity-60"
            >
                {props.label}
            </button>
        </div>
    )
}
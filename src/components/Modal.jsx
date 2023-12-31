import classNames from "classnames"
import { useNavigate } from "react-router-dom"
import { useAppContext } from "../context/AppContext"

export function Modal() {
    const { modal, setModal } = useAppContext();

    const navigate = useNavigate();

    function handleCloseModal(row) {
        row.reload && window.location.reload();

        row.redirect && navigate(row.redirect);

        setModal({})
    }

    function extraFunction(row) {
        row.reload && window.location.reload();

        row.redirect && navigate(row.redirect);

        row.function()
    }

    const modalClass = classNames(
        "w-full h-screen fixed inset-0 flex items-center justify-center z-30 bg-body bg-opacity-60",
        {
            "hidden": !modal.state,
            "flex": modal.state
        }
    )

    const modalContent = classNames(
        "bg-zinc-100 mx-3 w-full max-w-lg h-auto min-h-[250px] flex flex-col p-7 rounded-2xl"
    )

    return (
        <div className={modalClass}>
            <div className={modalContent}>
                <div className="flex justify-center items-center pb-4">
                    <h5 className="font-titillium font-extrabold text-center text-2xl text-body" dangerouslySetInnerHTML={{ __html: modal.title }} />
                </div>
                <div className="flex-1 flex text-center items-center justify-center">
                    {modal.message !== "" ? (
                        <div dangerouslySetInnerHTML={{ __html: modal.message }}
                        ></div>
                    ) : (
                        <>{modal.children}</>
                    )}
                </div>
                <div className="pt-5 w-full flex justify-evenly">
                    {modal.buttons.map((row, index) => (
                        <button key={index}
                            onClick={!row.function ? () => handleCloseModal(row) : () => extraFunction}
                            className={`py-3 px-8 rounded-lg text-white font-semibold ${row.custom ? `bg-dark ${modal.terms && disable ? 'opacity-75' : ''}` : "bg-muted"}`}
                        >
                            {row.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
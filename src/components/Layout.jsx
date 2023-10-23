import { Modal } from "./Modal"
import { useAppContext } from "../context/AppContext"

export function Layout(props) {
    const { modal } = useAppContext();

    return (
        <>
            <main className="relative h-auto w-full">
                {props.children}
            </main>

            {modal.state && <Modal />}
        </>
    )
} 
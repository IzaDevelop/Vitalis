import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { CaretLeft } from "@phosphor-icons/react"
import { useAppContext } from "../../context/AppContext"
import { Email } from "../../components/form/Email"
import { Button } from "../../components/form/Button"
import { Modal } from "../../components/Modal"
import { Loading } from "../../components/Loading"

export function ForgotPassword() {
    const { handleForgotPassword, modal } = useAppContext()

    const [fields, setFields] = useState({
        email: "",
    });

    const [validation, setValidation] = useState(false)
    const [loading, setLoading] = useState(false)
    const [loadingValidation, setLoadingValidation] = useState(false)

    const onFieldChange = (event) => {
        let value = event.target.value

        if (event.target.dataset.tag) {
            setFields({ ...fields, [event.target.dataset.tag]: value })
            return null
        }

        if (event.target.type === "checkbox") {
            value = event.target.checked;
        }

        setFields({ ...fields, [event.target.id]: value });
        setValidation(false)
    };

    async function handleSubmit(props) {
        handleForgotPassword(props)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        setLoadingValidation(true)

        setTimeout(() => {
            event.target.reportValidity() ? setValidation(event.target.reportValidity()) : setValidation(false)
            setLoadingValidation(false)
        }, 1000)

        setValidation(false)
    };

    useEffect(() => {
        if (validation) {
            handleSubmit(fields)
        }
    }, [validation])

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <main className="relative w-full h-screen min-h-[825px] ">
                    <article className="max-w-5xl h-full mx-auto py-8 px-10 md:px-12 bg-white text-body flex flex-col gap-8">
                        <header className="h-16 pb-4 border-b">
                            <div className="w-full flex justify-center">
                                <img src={''} alt="" />
                            </div>
                        </header>

                        <section className="flex-1 flex flex-col items-center">
                            <div className="text-center py-7">
                                <h1 className="uppercase font-extrabold text-3xl text-center text-body font-titillium">Esqueceu sua senha?</h1>
                                <p className="text-base pt-3">Digite o E-mail cadastrado para redefinir sua senha.</p>
                            </div>

                            <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 lg:w-1/2">
                                <Email
                                    label={"E-mail"}
                                    id={"email"}
                                    onChange={onFieldChange}
                                    value={fields.email}
                                    required
                                />

                                <div className="flex justify-between items-center">
                                    <Link to={"/login"} className="text-body text-lg font-semibold"><CaretLeft size={24} weight="bold" className="inline" /> Voltar</Link>

                                    <Button label={"Enviar"} />
                                </div>
                            </form>
                        </section>
                    </article>
                </main>
            )}
            {modal.state && <Modal />}
        </>
    );
}
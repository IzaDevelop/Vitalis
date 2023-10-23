import { useState, useEffect } from "react"
import { CaretLeft } from "@phosphor-icons/react"
import { useAppContext } from "../../context/AppContext"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Password } from "../../components/form/Password"
import { Button } from "../../components/form/Button"
import { Modal } from "../../components/Modal"
import { Loading } from "../../components/Loading"

export function ResetPassword() {
    const navigate = useNavigate();
    const location = useLocation();

    const { handleResetPassword, modal } = useAppContext()

    const [fields, setFields] = useState({
        password: "",
        confirmPassword: "",
        token: "",
    });

    const [loading, setLoading] = useState(false)
    const [validation, setValidation] = useState(false)
    const [loadingValidation, setLoadingValidation] = useState(false)
    const [extraValidation, setExtraValidation] = useState(true)
    const [conditionsPassword, setConditionsPassword] = useState({
        lowerCase: false,
        upperCase: false,
        digit: false,
        specialChar: false,
        minLength: false,
    });
    const [totalValidated, setTotalValidated] = useState(0);

    function handleValidationPassword() {
        const lowerCase = new RegExp("(?=.*[a-z])");
        const upperCase = new RegExp("(?=.*[A-Z])");
        const digit = new RegExp("(?=.*[0-9])");
        const specialChar = new RegExp("(?=.*[(!@#$%&*()-+.,;?{}^><:)])");
        const minLength = new RegExp("(?=.{8,})");

        if (lowerCase.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, lowerCase: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, lowerCase: false }))
        }

        if (upperCase.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, upperCase: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, upperCase: false }))
        }

        if (digit.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, digit: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, digit: false }))
        }

        if (specialChar.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, specialChar: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, specialChar: false }))
        }

        if (minLength.test(fields.password)) {
            setConditionsPassword((prevState) => ({ ...prevState, minLength: true }))
        } else {
            setConditionsPassword((prevState) => ({ ...prevState, minLength: false }))
        }
    }

    function checkValidations(data) {
        var value = 0;

        for (const key in data)
            value += data[key]

        setTotalValidated(value)
    }

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
        handleResetPassword(props)
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

    function disabledButton() {
        if (totalValidated == 5 && fields.password === fields.confirmPassword) {
            setExtraValidation(false)
        } else {
            setExtraValidation(true)
        }
    }

    useEffect(() => {
        handleValidationPassword()
    }, [fields.password, fields.confirmPassword])

    useEffect(() => {
        disabledButton()
        checkValidations(conditionsPassword)
    }, [fields.password, fields.confirmPassword, conditionsPassword])

    useEffect(() => {
        if (validation) {
            handleSubmit(fields)
        }
    }, [validation])


    useEffect(() => {
        setFields({
            ...fields,
            token: location.search.replace("?token=", "")
        })
    }, [location])

    useEffect(() => {
        handleValidationPassword()
    }, [fields.password, fields.confirmPassword])

    useEffect(() => {
        disabledButton()
        checkValidations(conditionsPassword)
    }, [fields.password, fields.confirmPassword, conditionsPassword])

    useEffect(() => {
        location.search === "" ? navigate("/") : null
    }, [location])

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
                                <h1 className="uppercase font-extrabold text-3xl text-center text-body font-titillium">Redefina sua senha</h1>
                                <p className="text-base pt-3">Preencha os campos abaixo com a sua nova senha.</p>
                            </div>

                            <form onSubmit={onSubmit} className="w-full flex flex-col gap-8 lg:w-1/2">
                                <Password
                                    label={"Digite sua nova senha"}
                                    id={"password"}
                                    onChange={onFieldChange}
                                    value={fields.password}
                                    extraValidation={setExtraValidation}
                                    totalValidated={totalValidated}
                                    compare={fields.confirmPassword}
                                    required
                                />

                                <Password
                                    label={"Confirme a nova senha"}
                                    id={"confirmPassword"}
                                    onChange={onFieldChange}
                                    value={fields.confirmPassword}
                                    extraValidation={setExtraValidation}
                                    compare={fields.password}
                                    required
                                />

                                <div className="flex justify-between items-center">
                                    <Link to={"/login"} className="text-body text-lg font-semibold"><CaretLeft size={24} weight="bold" className="inline" /> Voltar</Link>

                                    <Button label={"Redefinir"} disabled={extraValidation} />
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
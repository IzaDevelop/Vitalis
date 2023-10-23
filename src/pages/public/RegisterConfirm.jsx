import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import api from "../../services/api"

import {Loading} from "../../components/Loading"

export function RegisterConfirm() {
    const navigate = useNavigate();
    const location = useLocation();

    const [message, setMessage] = useState("...");
    const [loading, setLoading] = useState("")

    const confirmRegister = async (token) => {
        try {
            const response = await api.get("/api/v1/registers/confirm/" + token + "/" + import.meta.env.VITE_CAMPAIGN_ID_ISTAMBUL, {
                headers: {
                    "Non-Campaign": "false",
                    "Campaign-Code": import.meta.env.VITE_CAMPAIGN_CODE
                }
            })

            if (response.status === 200) {
                setLoading(false)
                setMessage(response.data.data)
            }
        } catch (error) {
            setLoading(false)
            setMessage(error.response.data.data)
        }
    }

    useEffect(() => {
        let params = location.search.replace("?token=", "")
        setLoading(true)

        if (params) {
            confirmRegister(params)
        } else {
            setLoading(false)
            setMessage("Não foi possível ativar o seu cadastro")
        }
    }, [location])

    useEffect(() => {
        location.search === "" ? navigate("/") : null
    }, [location])

    return (
        <>
            {loading ?
                <Loading />
                :
                <main className="relative w-full h-screen min-h-[825px] ">
                    <article className="max-w-5xl h-full mx-auto py-8 px-10 md:px-12 bg-white text-body flex flex-col gap-8">
                        <header className="h-16 pb-4 border-b">
                            <div className="w-full flex justify-center">
                                <img src={''} alt="" />
                            </div>
                        </header>

                        <section className="flex-1 flex flex-col justify-center items-center">
                            <div className="text-center py-7">
                                <h1 className="uppercase font-extrabold text-xl lg:text-3xl text-center text-body font-titillium" dangerouslySetInnerHTML={{ __html: message }}></h1>

                                <button
                                    type="button"
                                    onClick={() => navigate("/")}
                                    className="inline-flex items-center justify-center w-full max-w-[180px] h-12 mt-10  tracking-wide duration-200 shadow-md bg-dark text-white py-2 px-8 transition-colors rounded-lg font-semibold focus:shadow-outline focus:outline-none gap-1"
                                >
                                    Voltar
                                </button>
                            </div>
                        </section>
                    </article>
                </main>
            }
        </>
    );
}
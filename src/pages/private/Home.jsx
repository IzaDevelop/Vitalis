import { useEffect, useState } from "react"
import { Layout } from "../../components/Layout"

export function Home() {
    return (
        <Layout>
            <article className="text-body">
                <header className="relative bg-red-600">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg
                            viewBox="0 0 224 12"
                            fill="currentColor"
                            className="w-full -mb-1 text-white"
                            preserveAspectRatio="none"
                        >
                            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
                        </svg>
                    </div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Vitalis Assistente
                                <span className="relative inline-block px-2">
                                    <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                                </span>
                            </h2>
                            <p className="mb-6 text-base text-white md:text-lg">
                                As respostas fornecidas não substituem o aconselhamento médico profissional. <br /> Em caso de emergência ou preocupação com sua saúde, consulte um médico ou profissional de saúde qualificado.
                            </p>
                            <a
                                href="#tutorial"
                                aria-label="Scroll down"
                                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-white rounded-full hover:border-teal-accent-400 hover:shadow hover:scale-110"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="#fff"
                                >
                                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </header>

                <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" id={'tutorial'}>
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Como utilizar?
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="f51618fb-0edb-4bcb-b35a-ffc770941286"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#f51618fb-0edb-4bcb-b35a-ffc770941286)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Inicie</span>
                            </span>{' '}
                            sua conversa seguindo os passos abaixo
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                        Lembre-se, o chatbot está aqui para ajudar e oferecer suporte, mas em situações de emergência ou para orientação médica personalizada, é sempre recomendado buscar a opinião de um profissional de saúde qualificado.
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
                        <div className="relative text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 text-2xl font-extrabold">Passo 1</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            Para iniciar, digite uma saudação ou clique na caixa de texto para começar a interagir. O chatbot estará pronto para receber suas perguntas ou comandos.
                            </p>
                            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg
                                    className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                        fill="none"
                                        strokeMiterlimit="10"
                                        x1="2"
                                        y1="12"
                                        x2="22"
                                        y2="12"
                                    />
                                    <polyline
                                        fill="none"
                                        strokeMiterlimit="10"
                                        points="15,5 22,12 15,19 "
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 text-2xl font-extrabold">Passo 2</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            Digite suas dúvidas ou questões de saúde no campo de mensagem. Quanto mais específico você for, melhores serão as informações fornecidas.
                            </p>
                            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
                                <svg
                                    className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    viewBox="0 0 24 24"
                                >
                                    <line
                                        fill="none"
                                        strokeMiterlimit="10"
                                        x1="2"
                                        y1="12"
                                        x2="22"
                                        y2="12"
                                    />
                                    <polyline
                                        fill="none"
                                        strokeMiterlimit="10"
                                        points="15,5 22,12 15,19 "
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="relative text-center">
                            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                                <svg
                                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                >
                                    <polygon
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill="none"
                                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    />
                                </svg>
                            </div>
                            <h6 className="mb-2 text-2xl font-extrabold">Passo 3</h6>
                            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            O chatbot responderá com informações relevantes e orientações. Ele pode oferecer conselhos gerais, direcionar para artigos informativos ou sugerir consultar um profissional de saúde, se necessário.
                            </p>
                        </div>
                    </div>
                </section>

                <footer className="relative mt-16 bg-red-600">
                    <svg
                        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-red-600"
                        preserveAspectRatio="none"
                        viewBox="0 0 1440 54"
                    >
                        <path
                            fill="currentColor"
                            d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
                        />
                    </svg>
                    <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                            <div className="md:max-w-md lg:col-span-2">
                                <a
                                    href="/"
                                    aria-label="Go home"
                                    title="Company"
                                    className="inline-flex items-center"
                                >
                                    <svg
                                        className="w-8 text-white"
                                        viewBox="0 0 24 24"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeMiterlimit="10"
                                        stroke="currentColor"
                                        fill="none"
                                    >
                                        <rect x="3" y="1" width="7" height="12" />
                                        <rect x="3" y="17" width="7" height="6" />
                                        <rect x="14" y="1" width="7" height="6" />
                                        <rect x="14" y="11" width="7" height="12" />
                                    </svg>
                                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                                        Vitalis Assistente
                                    </span>
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4 text-center">
                                <div>
                                    <p className="font-semibold tracking-wide text-white">
                                        FAQ
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold tracking-wide text-white">
                                        Política de Privacidade
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold tracking-wide text-white">
                                        Termos de Uso
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold tracking-wide text-white">
                                        Entre em Contato
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center pt-5 pb-10 border-t sm:flex-row">
                            <p className="text-sm text-white text-center">
                                Este serviço não oferece diagnósticos médicos, mas busca orientar e fornecer suporte para suas dúvidas e questões relacionadas à saúde.
                                <br />  <br />
                                © Copyright 2023. Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                </footer>
            </article>
        </Layout>
    );
}
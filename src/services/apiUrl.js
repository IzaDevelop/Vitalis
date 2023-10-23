function currentUrl() {
    const isHomolog = window.location.href.includes("homolog")
    const isDevelop = window.location.href.includes("develop")
    const isLocalHost = window.location.href.includes("localhost")

    if (isHomolog) {
        return "https://api-homologcom.br"
    } else if (isDevelop || isLocalHost) {
        return "https://api-develop.com.br"
    } else {
        return "https://api.com.br"
    }
}

const apiUrl = currentUrl()

export default apiUrl
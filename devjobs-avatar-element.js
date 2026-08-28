class DevJobsAvatar extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: "open" })
    }

    createUrl(service, username) {
        return `https://unavatar.io/${service}/${username}`
    }

    render() {
        const service = this.getAttribute("service") ?? "github"
        const size = this.getAttribute("size") ?? "34"
        const username = this.getAttribute("name") ?? "sebasz1000"
        const url = this.createUrl(service, username)

        this.shadowRoot.innerHTML = `
            <style>
            img{
                border-radius: 100%;
            }
        </style>
        <img src="${url}" width="${size}" alt="${username}"/>`
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define("devjobs-avatar", DevJobsAvatar)


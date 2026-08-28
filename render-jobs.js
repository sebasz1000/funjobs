export const renderJobs = (jobs, container) => {

    if (!container) {
        console.warn("There are not an appropiated container to rended content(jobs)")
    }
    let htmlString = jobs.reduce((html, job) => {
        const { titulo, empresa, ubicacion, descripcion, data } = job
        const { technology, modalidad, nivel } = data
        let dataTechnology = technology

        if (Array.isArray(technology))
            dataTechnology = technology.join(" ")

        const articleString = `<article data-location="${modalidad}" data-experience="${nivel}" data-technology="${dataTechnology}" data-title="${titulo.toLowerCase()}" class="jobs-listing-card">
                    <div>
                        <h3 class="jobs-listing-card-title">${titulo}</h3>
                        <small>${empresa} | ${ubicacion}</small>
                        <p>${descripcion}</p>
                        <p>Tech Stack: ${technology}</p>
                        <small>Nivel de experiencia: ${nivel}</small>
                        <button style="display: block; margin-top:18px"
                        class="btn-apply-job">Aplicar</button>
                    </div>
                </article>`
        return html += articleString
    }, "")

    if (container)
        container.innerHTML = htmlString
}
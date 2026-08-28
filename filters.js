
export const filterByTechnology = () => {
    const filterTechnology = document.querySelector("#filter-technology")

    filterTechnology?.addEventListener("change", (e) => {

        const jobsArticles = document.querySelectorAll(".jobs-listing-card")
        jobsArticles.forEach(job => {
            const techArray = job.dataset.technology.split(" ")
            console.log(techArray)
            const isShown = techArray.includes(filterTechnology.value) || filterTechnology.value === ""
            job.classList.toggle("is-hidden", !isShown)
        })
    })
}

export const filterByLocation = () => {
    const filterLocation = document.querySelector("#filter-location")

    filterLocation?.addEventListener("change", () => {

        const jobsArticles = document.querySelectorAll(".jobs-listing-card")
        jobsArticles.forEach(job => {
            const isShown = (filterLocation.value === job.dataset.location) || (filterLocation.value === "")
            job.classList.toggle("is-hidden", !isShown)
        })
    })
}


export const filterByExperience = () => {
    const filterByExperience = document.querySelector("#filter-experience-level")

    filterByExperience?.addEventListener("change", () => {

        const jobsArticles = document.querySelectorAll(".jobs-listing-card")
        jobsArticles.forEach(job => {
            const isShown = (filterByExperience.value === job.dataset.experience) || (filterByExperience.value === "")
            job.classList.toggle("is-hidden", !isShown)
        })
    })
}

export const filterByTitle = () => {
    const filterByInput = document.querySelector("#empleos-search-input")

    filterByInput?.addEventListener("input", () => {

        const jobsArticles = document.querySelectorAll(".jobs-listing-card")
        jobsArticles.forEach(job => {
            const isShown = (job.dataset.title.includes(filterByInput.value.toLowerCase())) || (filterByInput.value === "")
            job.classList.toggle("is-hidden", !isShown)
        })
    })
}

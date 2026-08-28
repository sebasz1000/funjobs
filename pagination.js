import { jobsList } from "./apply-button.js"
import { renderJobs } from "./render-jobs.js"

export const chunkArray = (arr, n) => {
    const result = []
    for (let i = 0; i < arr.length; i += n) {
        result.push(arr.slice(i, i + n))
    }
    return result
}

const createPaginationNumbers = (chunksSize, container) => {
    const paginationAnchorList = []
    for (let i = 0; i < chunksSize; i++) {
        const paginationAnchor = document.createElement("a")
        paginationAnchor.innerHTML = i + 1
        paginationAnchor.dataset.index = i
        paginationAnchor.href = "#"
        paginationAnchor.classList.add("pagination-anchor")
        if (i === 0)
            paginationAnchor.classList.add("is-active")
        paginationAnchorList.push(paginationAnchor)
    }

    container?.append(...paginationAnchorList)

}

const removeIsActive = (container) => {
    const paginationAnchors = container.querySelector(".pagination-numbers")
    const anchors = [...paginationAnchors.children]
    anchors.forEach(paginationNumb => paginationNumb.classList.remove("is-active"))
}
const onPaginationClick = (paginationContainer, chunkedJobs) => {


    paginationContainer?.addEventListener("click", (e) => {

        const chevronBtn = e.target.closest(".chevron-anchor")
        const pageBtn = e.target.closest(".pagination-anchor")

        if (!chevronBtn && !pageBtn) return

        e.preventDefault()

        let jobsChunk = []

        if (chevronBtn) {
            const activePaginationAnchor = paginationContainer.querySelector(".pagination-anchor.is-active")

            if (!activePaginationAnchor) return

            let index = Number(activePaginationAnchor.dataset.index)

            if (chevronBtn.classList.contains("prev") && index > 0) {
                index -= 1
            } else if (chevronBtn.classList.contains("next") && index < (chunkedJobs.length - 1)) {
                index += 1
            }
            const newActivePaginationAnchor = paginationContainer.querySelector(`a[data-index="${index}"]`)

            if (newActivePaginationAnchor) {
                removeIsActive(paginationContainer)
                newActivePaginationAnchor.classList.add("is-active")
                jobsChunk = chunkedJobs[index]
                renderJobs(jobsChunk, jobsList)
            }

        } else if (pageBtn) {
            const index = Number(pageBtn.dataset.index)
            jobsChunk = chunkedJobs[index]
            removeIsActive(paginationContainer)
            pageBtn.classList.add("is-active")
            renderJobs(jobsChunk, jobsList)
        }
    })

}

export function paginationInit(jobs, RESULTS_PER_PAGE) {


    const CHUNKED_JOBS = chunkArray(jobs, RESULTS_PER_PAGE)

    renderJobs(CHUNKED_JOBS[0], jobsList)

    const paginationElement = document.querySelector(".pagination")
    if (!paginationElement) {
        console.warn("There is not pagination element to adquite container")
        return
    }

    const paginationNumbersElement = paginationElement.querySelector(".pagination-numbers")

    if (!paginationNumbersElement) {
        console.warn("There is not pagination-number element to contain anchor")
        return
    }

    createPaginationNumbers(CHUNKED_JOBS.length, paginationNumbersElement)
    onPaginationClick(paginationElement, CHUNKED_JOBS)

}
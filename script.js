import { filterByExperience, filterByLocation, filterByTechnology, filterByTitle } from "./filters.js"
import { initApplyBtns } from "./apply-button.js"
import { loadJobs } from "./fetch-data.js"
import "./devjobs-avatar-element.js"
import { paginationInit } from "./pagination.js"

initApplyBtns()
loadJobs().then((jobs) => {
    const RESULTS_PER_PAGE = 3

    paginationInit(jobs, RESULTS_PER_PAGE)
    filterByLocation()
    filterByTechnology()
    filterByExperience()
    filterByTitle()

})




/* TIEMPO 4:21:51 */

export const jobsList = document.querySelector(".jobs-listings")


export const initApplyBtns = () => {
    jobsList?.addEventListener("click", (e) => {
        const element = e.target
        if (!element.closest(".btn-apply-job"))
            return
        //if (element.classList.contains("btn-apply-job")) {
        element.classList.add("is-applied")
        element.disabled = true
        element.textContent = "Applied!"
        //}
    })

}
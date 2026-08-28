export const loadJobs = () => {
    return fetch("./data.json")
        .then(res => res.json())
        .then(jobs => jobs)
}
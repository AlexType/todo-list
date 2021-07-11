import moment from "moment";

export default function useFilter() {

    const filterByFinished = (item) => item.finished !== null;
    const filterByActive = (item) => !item.isCompleted;
    const filterByDeadline = (item) => item.deadline !== null && !item.isCompleted && moment() > moment(item.deadline);

    const filteredList = (tasks, filter) => {
        if (filter === "finished") return tasks.filter(filterByFinished);
        else if (filter === "active") return tasks.filter(filterByActive);
        else if (filter === "deadline") return tasks.filter(filterByDeadline);
        else return tasks;
    };

    return { filteredList };
}
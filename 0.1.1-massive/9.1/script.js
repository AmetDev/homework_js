const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
function givePercel(person) {
    peopleWaiting.shift(person)
    alert(`${person} получил(а) поссылку. В очереди осталось ${peopleWaiting.length}`)
}
function leaveQueueWithoutParcel(person) {
    peopleWaiting.pop(person)
    alert(`${person} не получил(а) посылку и ушел(ла) из очереди.`)
}
givePercel('Кристина')
givePercel('Олег')
givePercel('Кирилл')
leaveQueueWithoutParcel('Мария')
leaveQueueWithoutParcel('Светлана')
leaveQueueWithoutParcel('Артем')
leaveQueueWithoutParcel('Глеб')

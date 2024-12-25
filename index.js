// Дополнительное задание 1 Неделя 8

// Запишем диапазон билетов
const ticketNumberMin = 1016;
const ticketNumberMax = 1937;

// Отберем потанциально выигрышные билеты удовлетворяющие условиям
const winningTickets = [];
for (let nam = ticketNumberMin; nam <= ticketNumberMax; nam++) {
    if (nam % 3 === 0 && nam % 7 === 0) {
        winningTickets.push(nam);
    }
}
// Найдем выигрышный билет самым большим номером
winningTicket = Math.max(...winningTickets);

console.log('Номер выигрышного билета: ', winningTicket);
alert(`Номер выигрышного билета: ', ${winningTicket}`)
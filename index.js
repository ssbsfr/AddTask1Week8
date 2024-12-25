// Дополнительное задание 1 Неделя 8

// Запишем диапазон билетов
const ticketNumberMin = 1016;
const ticketNumberMax = 1937;

// Отберем потанциально выигрышные билеты удовлетворяющие условиям
const winningTickets = [];
for (let num = ticketNumberMin; num <= ticketNumberMax; num++) {
    if (num % 3 === 0 && num % 7 === 0 && num % 5 !== 0 && num % 2 !== 0) {
        winningTickets.push(num);
    }
}
// Найдем выигрышный билет самым большим номером
winningTicket = Math.max(...winningTickets);

console.log('Номер выигрышного билета: ', winningTicket);
alert(`Номер выигрышного билета: ', ${winningTicket}`)

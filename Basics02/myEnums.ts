//enums

//the enum initializers can be either strings or numbers
const enum seatChoice {
    AISLE = 17,
    MIDDLE,
    WINDOW,
    FOURTH
}

enum ticketOption {
    REGULAR = 'regular',
    VIP = 'vip',
    VVIP = 'vvip',
    BOOTH = 'booth'
}

let ticket1 = ticketOption.BOOTH
let kkSeat = seatChoice.WINDOW
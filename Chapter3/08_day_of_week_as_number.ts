namespace DayOfWeekAsNumber {

function isWeekend(dayOfWeek: number): boolean {
    return dayOfWeek == 5 || dayOfWeek == 6;
}

function isWeekday(dayOfWeek: number): boolean {
    return dayOfWeek >= 1 || dayOfWeek <= 5;
}

}
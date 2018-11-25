namespace DayOfWeekAsEnum {

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function isWeekend(dayOfWeek: DayOfWeek): boolean {
    return dayOfWeek == DayOfWeek.Saturday
        || dayOfWeek == DayOfWeek.Sunday;
}

function isWeekday(dayOfWeek: DayOfWeek): boolean {
    return dayOfWeek >= DayOfWeek.Monday
        && dayOfWeek <= DayOfWeek.Friday;
}

}
namespace DayOfWeekWithConstants {

const Sunday: number = 0;
const Monday: number = 1;
const Tuesday: number = 2;
const Wednesday: number = 3;
const Thursday: number = 4;
const Friday: number = 5;
const Saturday: number = 6;

function isWeekend(dayOfWeek: number): boolean {
    return dayOfWeek == Saturday || dayOfWeek == Sunday;
}

function isWeekday(dayOfWeek: number): boolean {
    return dayOfWeek >= Monday && dayOfWeek <= Friday;
}

}
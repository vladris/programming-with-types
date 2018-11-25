namespace ParsingDayOfWeek {

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

function parseDayOfWeek(input: string): DayOfWeek | undefined {
    switch (input.toLowerCase()) {
        case "sunday": return DayOfWeek.Sunday;
        case "monday": return DayOfWeek.Monday;
        case "tuesday": return DayOfWeek.Tuesday;
        case "wednesday": return DayOfWeek.Wednesday;
        case "thursday": return DayOfWeek.Thursday;
        case "friday": return DayOfWeek.Friday;
        case "saturday": return DayOfWeek.Saturday;
        default: return undefined;
    }
}

function useInput(input: string) {
    let result: DayOfWeek | undefined = parseDayOfWeek(input);

    if (result === undefined) {
        console.log(`Failed to parse "${input}"`);
    } else {
        let dayOfWeek: DayOfWeek = result;
        /* Use dayOfWeek */
    }
}

}
namespace ResultAndError {

enum DayOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

enum InputError {
    OK,
    NoInput,
    Invalid
}

class Result {
    error: InputError;
    value: DayOfWeek;

    constructor(error: InputError, value: DayOfWeek) {
        this.error = error;
        this.value = value;
    }
}

function parseDayOfWeek(input: string): Result
{
    if (input == "")
        return new Result(InputError.NoInput, DayOfWeek.Sunday);

    switch (input.toLowerCase()) {
        case "sunday":
            return new Result(InputError.OK, DayOfWeek.Sunday);
        case "monday":
            return new Result(InputError.OK, DayOfWeek.Monday);
        case "tuesday":
            return new Result(InputError.OK, DayOfWeek.Tuesday);
        case "wednesday":
            return new Result(InputError.OK, DayOfWeek.Wednesday);
        case "thursday":
            return new Result(InputError.OK, DayOfWeek.Thursday);
        case "friday":
            return new Result(InputError.OK, DayOfWeek.Friday);
        case "saturday":
            return new Result(InputError.OK, DayOfWeek.Saturday);
        default:
            return new Result(InputError.Invalid, DayOfWeek.Sunday);
    }
}

}
namespace ChainingPromisesReview {

declare function getUserName(): Promise<string>;
declare function getUserBirthday(name: string): Promise<Date>;
declare function getUserEmail(birthday: Date): Promise<string>;

function getUserData(): void {
    getUserName()
        .then((name: string) => {
            console.log(`Hi ${name}!`);
            return getUserBirthday(name);
        })
        .then((birthday: Date) => {
            const today: Date = new Date();
            if (birthday.getMonth() == today.getMonth() &&
                birthday.getDay() == today.getDay())
                console.log('Happy birthday!');
            return getUserEmail(birthday);
        })
        .then((email: string) => {
            /* ... */
        });
}

}
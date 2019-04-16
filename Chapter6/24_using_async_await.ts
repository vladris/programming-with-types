namespace UsingAsyncAwait {

declare function getUserName(): Promise<string>;
declare function getUserBirthday(name: string): Promise<Date>;
declare function getUserEmail(birthday: Date): Promise<string>;

async function getUserData(): Promise<void> {
    let name: string = await getUserName();
    console.log(`Hi ${name}!`);

    let birthday: Date = await getUserBirthday(name);
    const today: Date = new Date();
    if (birthday.getMonth() == today.getMonth() &&
        birthday.getDay() == today.getDay())
        console.log('Happy birthday!');

    let email: string = await getUserEmail(birthday);
    /* ... */
}

}
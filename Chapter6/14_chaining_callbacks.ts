namespace ChainingCallbacks {

declare function getUserName(
    callback: (name: string) => void): void;
declare function getUserBirthday(name: string, 
    callback: (birthday: Date) => void): void;
declare function getUserEmail(birthday: Date,
    callback: (email: string) => void): void;

getUserName((name: string) => {
    console.log(`Hi ${name}!`);
    getUserBirthday(name, (birthday: Date) => {
        const today: Date = new Date();
        if (birthday.getMonth() == today.getMonth() &&
            birthday.getDay() == today.getDay())
            console.log('Happy birthday!');

        getUserEmail(birthday, (email: string) => {
            /* ... */
        });
    })
});

}
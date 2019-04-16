namespace UsingPromiseAll {

class InboxMessage { /* ... */ }
class ProfilePicture { /* ... */ }

declare function getInboxMessages(): Promise<InboxMessage[]>;
declare function getProfilePicture(): Promise<ProfilePicture>;

declare function renderUI(
    messages: InboxMessage[], picture: ProfilePicture): void;

Promise.all([getInboxMessages(), getProfilePicture()])
    .then((values: [InboxMessage[], ProfilePicture]) => {
        renderUI(values[0], values[1]);
    });

}
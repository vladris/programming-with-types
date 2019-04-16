namespace UsingPromiseRace {

class UserProfile { /* ... */ }

declare function getProfile(node: string): Promise<UserProfile>;

declare function renderUI(profile: UserProfile): void;

Promise.race([getProfile("node1"), getProfile("node2")])
    .then((profile: UserProfile) => {
        renderUI(profile);
    });

}
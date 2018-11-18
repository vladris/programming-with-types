namespace Gatekeeper {

declare function secondsSinceLastComment(userId: string): number;
declare function postComment(comment: string, userId: string): void;

function commentGatekeeper(comment: string, userId: string): boolean {
    if ((secondsSinceLastComment(userId) < 10) || (comment == ""))
        return false;

    postComment(comment, userId);

    return true;
}

}
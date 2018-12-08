namespace InsufficientTypeInformation {

function scriptAt(s: any): number {
    return s.indexOf("Script");
}

console.log(scriptAt("TypeScript"));
console.log(scriptAt(42));

}
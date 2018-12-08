namespace StaticTyping {

interface Duck {
    quack(): void;
}

function quacker(duck: Duck) {
    duck.quack();
}

quacker({ quack: function () { console.log("quack"); } });

/*
Uncomment to see compilation failure: 42 does not typecheck as a Duck object

quacker(42);
*/

}
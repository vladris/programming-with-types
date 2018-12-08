namespace DynamicTyping {

function quacker(duck: any) {
    duck.quack();
}

quacker({ quack: function () { console.log("quack"); } });
quacker(42);

}
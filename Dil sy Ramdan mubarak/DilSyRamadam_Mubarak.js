//program to greet and wish "Dil sy Ramadan Mubarak" to all mine beloved friends and family Members//
function wishRamadanMubarakToAll() {
    var belovedOnes = ["friends", "family members"];
    var message = "Dil ❤️ sy Ramadan Mubarak to all mine beloved 💞💕😍💕💞 ";
    belovedOnes.forEach(function (person) {
        console.log(message + person);
    });
}
wishRamadanMubarakToAll();

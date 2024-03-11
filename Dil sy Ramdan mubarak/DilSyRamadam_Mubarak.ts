//program to greet and wish "Dil sy Ramadan Mubarak" to all mine beloved friends and family Members//
function wishRamadanMubarakToAll():void{
    const belovedOnes: string[] = 
    ["friends" , "family members"];
    const message : string ="Dil ❤️ sy Ramadan Mubarak to all mine beloved 💞💕😍💕💞 ";
    belovedOnes.forEach((person) => 
    {
        console.log(message + person);
    });
}
wishRamadanMubarakToAll();

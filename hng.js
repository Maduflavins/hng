const wizard = {
    name: "merlin",
    health: 50,
    heal: function(){
        return this.health = 100
    }
}

const acher = {
    name: 'martins',
    health: 30,
}

wizard.heal.apply(acher)


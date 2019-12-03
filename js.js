function professorOakPage(){
  if (project.style.display === 'none'){
    project.style.display = "block";
    icon.style.display = 'none';
  }else {
    project.style.display = 'none';
  }
}

var goingForward = document.getElementById('yes');
var name = document.getElementById('trainerName')

function enterTrainer(){
  if (yes.style.display === 'block'){
    yes.style.display = "none";
    trainerName.style.display = 'block';
  }else {
    yes.style.display = 'block';
  }
}


let all = []



queryPokemonAPI = async() => {
  let x = prompt('Choose your pokemon!')
  let req =await fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`);
  let data = await req.json()

  let name = data.name
  let hp = data.stats[5].base_stat
  let attack = data.stats[4].base_stat
  let defense = data.stats[3].base_statS
  let ability = data.abilities[0].ability.name
  let sprite = data.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`

  trainer1.listPokemon.push(name)
  trainer2.listPokemon.push(name)
  trainer3.listPokemon.push(name)
  trainer4.listPokemon.push(name)


  let pok = new Pokemon(name, hp, attack, defense, ability, img)
  pok.display()

    console.log(data)

              // Pokemon Def: pokemon.stats.def
              // Pokemon atk: pokemon.stats.atk)

  }



  class Pokemon {
    constructor(name,hp, attack, defense, ability,sprite){

      this.name = name
      this.hp = hp
      this.attack = attack
      this.defense = defense
      this.ability = ability
      this.img = sprite




    }

    display(){

      let z = document.getElementById('div')
      z.innerText = this.name
      let hp = document.getElementById('div2')
      hp.innerText = `HP:  ${this.hp}`
      let attack = document.getElementById('div3')
      attack.textContent = `ATTACK: ${this.attack}`
      let defense = document.getElementById('div4')
      defense.textContent = `DEFENSE:  ${this.defense}`
      let ability = document.getElementById('div5')
      ability.textContent = `ABILITY: ${this.ability}`
      let sprite = document.getElementById('div6')
      ability.textContent = `IMG: ${this.img}`
    }

  }

  class Trainer{
    constructor(name){
      this.name = name
      this.listPokemon = []
      this.all = this.all.bind(this)
    }
    all(){
      return this.listPokemon
    }
  }

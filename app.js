const express = require('express'),
      app = express(),
      path = require('path');
      pokemon = require('pokemon')




// EJS
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));



// BASE DE DONNEES TRAINER
const trainerList = [
    {
        id: 1,
        name: "Red",
        head: "./red.png",
        image: "./reddracaufeu.png",
        desc: "Red est le nom généralement donné au personnage masculin incarné par le joueur dans Pokémon Rouge, Bleu et Jaune et Pokémon Rouge Feu et Vert Feuille. Seul choix possible dans les jeux de la première génération, il s'est vu doté d'un alter-égo féminin en la personne de Leaf dans les rééditions sorties sur Game Boy Advance. Le fait d'incarner l'un fait disparaître l'autre de l'histoire. Il est considéré parmi les fans comme le vrai emblème principal de la saga entière."
    },
    {
        id: 2,
        name: "Ondine",
        head: "./ondine.png",
        image: "./ondinestarros.png",
        desc: "Ondine est la Championne d'Arène de l'Arène d'Azuria dans la région de Kanto, spécialisée dans les Pokémon Eau. Elle donne le Badge Cascade aux Dresseurs qui gagnent contre elle dans un combat Pokémon."
    },
    {
        id: 3,
        name: "Pierre",
        head: "./pierre.png",
        image: "./pierreonix.png",
        desc: "Pierre est le Champion de l'Arène d'Argenta, qui utilise principalement des Pokémon de type Roche. Il est également la source d'inspiration pour l'un des personnages principaux du dessin animé. "
    }
];

const totalTrainer = trainerList.length;

let pokemonList = pokemon.all('fr');

const totalPokemon = pokemon.all('fr').length;



// CONTROLLER
app.get('/', function(req, res) {
    res.render('index', {trainerList, totalTrainer, totalPokemon, pokemonList});
})
app.get('/trainer/:id', (req, res) => {
    let result = trainerList.find(obj => {
        return obj.id === +req.params.id
    })
    res.render('trainer', {result})
})
app.get('/pokemon/:id', (req, res) => {
    let resultPokemon = pokemon.getName(+req.params.id, 'fr')
    let imgPokemon = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + +req.params.id + ".svg"
    res.render('pokemon', {resultPokemon, imgPokemon} )
})


// PORT
app.listen(3000);

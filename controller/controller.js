const {
    createUser,
    getOneUser,
    createPokemon,
    getPokemons,
    getOnePokemon,
    putPokemon,
    deletePokemon,
  } = require("../model/user")
  

  //LoginDB

  exports.createLogin = async (req, res) => {
    const { data: retorno, status } = await createUser(req.body);
    res.status(status).json(retorno);
  }
  
  exports.getOneLogin = async (req, res) => {
    const { data: retorno, status } = await getOneUser(req.params.id);
    res.status(status).json(retorno);
  }
  

  //PokedexDB

  exports.createPokedex = async (req, res) => {
    const { data: retorno, status } = await createPokemon(req.body);
    res.status(status).json(retorno);
  }

  exports.getAllPokedex = async (req, res) => {
    const { data: retorno, status } = await getPokemons();
    res.status(status).json(retorno);
  }
  
  exports.getOnePokedex = async (req, res) => {
    const { data: retorno, status } = await getOnePokemon(req.params.id);
    res.status(status).json(retorno);
  }
  
  exports.putPokedex = async (req, res) => {
    const { data: retorno, status } = await putPokemon(req.params.id, req.body);
    res.status(status).json(retorno);
  }
  
  exports.removePokedex = async (req, res) => {
    const { data: retorno, status } = await deletePokemon(req.params.id);
    res.status(status).json(retorno);
  }
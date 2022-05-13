const { ObjectId } = require("mongodb");

const { connectMongodb } = require("../database/connect");

//LoginDB

exports.createUser = async function ({ password, email }) {
  const collection = await connectMongodb("desafiofinaldb", "login");
  const { insertResult } = await collection.insertOne({ password, email });
  return { data: { _id: insertResult, password, email }, status: 201 };
};

exports.getOneUser = async function (id) {
  const collection = await connectMongodb("desafiofinaldb", "login");
  const data = await collection.findOne({ _id: ObjectId(id) });
  return { data, status: 200 };
};

exports.getOneEmail = async function (email) {
  const collection = await connectMongodb("desafiofinaldb", "login");
  const data = await collection.findOne({ email });
  return { data, status: 200 };
};

//PokedexDB

exports.createPokemon = async function ({ row, name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyID, crossGen, type1, type2, weather1, weather2, statTotal, ATK, DEF, STA, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, notGettable, futureEvolve, CP40, CP39 }) {
  const collection = await connectMongodb("desafiofinaldb", "pokedex");
  const { insertResult } = await collection.insertOne({ row, name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyID, crossGen, type1, type2, weather1, weather2, statTotal, ATK, DEF, STA, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, notGettable, futureEvolve, CP40, CP39 });
  return { data: { _id: insertResult, row, name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyID, crossGen, type1, type2, weather1, weather2, statTotal, ATK, DEF, STA, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, notGettable, futureEvolve, CP40, CP39 }, status: 201 };
};

exports.getPokemons = async function () {
  const collection = await connectMongodb("desafiofinaldb", "pokedex");
  const data = await collection.find().toArray();
  return { data, status: 200 };
};

exports.getOnePokemon = async function (id) {
  const collection = await connectMongodb("desafiofinaldb", "pokedex");
  const data = await collection.findOne({ _id: ObjectId(id) });
  return { data, status: 200 };
};

exports.putPokemon = async function (id, { row, name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyID, crossGen, type1, type2, weather1, weather2, statTotal, ATK, DEF, STA, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, notGettable, futureEvolve, CP40, CP39 }) {
  const collection = await connectMongodb("desafiofinaldb", "pokedex");
  await collection.updateOne({ _id: ObjectId(id) }, { $set: { row, name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyID, crossGen, type1, type2, weather1, weather2, statTotal, ATK, DEF, STA, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, notGettable, futureEvolve, CP40, CP39 } });
  return { data: { _id: id, row, name, pokedexNumber, imgName, generation, evolutionStage, evolved, familyID, crossGen, type1, type2, weather1, weather2, statTotal, ATK, DEF, STA, legendary, aquireable, spawns, regional, raidable, hatchable, shiny, nest, notGettable, futureEvolve, CP40, CP39 }, status: 200 };
};

exports.deletePokemon = async function (id) {
  const collection = await connectMongodb("desafiofinaldb", "pokedex");
  await collection.deleteOne({ _id: ObjectId(id) });
  return { data, status: 221 };
};
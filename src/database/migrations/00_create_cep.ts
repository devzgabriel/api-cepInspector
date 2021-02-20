import Knex from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("cepInfo", (table) => {
    table.increments("id").primary();
    table.string("cep").notNullable();
    table.string("logradouro").notNullable();
    table.string("complemento").notNullable();
    table.string("bairro").notNullable();
    table.string("localidade").notNullable();
    table.string("uf").notNullable();
    table.string("ibge").notNullable();
    table.string("gia").notNullable();
    table.string("ddd").notNullable();
    table.string("siafi").notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("cepInfo");
}

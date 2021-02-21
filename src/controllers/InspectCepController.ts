import { Request, Response } from "express";

import knex from "../database/connection";

import viaCep from "../services/viaCep";

interface CepItem {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class InspectCepController {
  async index(request: Request, response: Response) {
    const { cepNumber } = request.params;

    //search CEP in the database
    const cepInfo = await knex("cepInfo").select("*").where("cep", cepNumber);
    if (cepInfo.length !== 0) {
      return response.status(200).json(cepInfo[0]);
    }

    //if not in database: make request to api viaCep
    const { data }: any = await viaCep
      .get(`${cepNumber}/json`)
      .then()
      .catch(() => {
        console.log("System: failure in access viaCep");
        return response.status(500).json({ message: "try access ViaCep API" });
      });

    //verify the viaCep response
    if (data.erro) {
      return response.status(400).json({ message: "This number is not valid" });
    }

    //store on database
    const trx = await knex.transaction();

    const formatedData = {
      ...data,
      cep: String(data.cep).replace(/\D/g, ""),
    };

    await trx("cepInfo").insert(formatedData);
    await trx.commit();

    //send response
    return response.status(200).json(formatedData);
  }
}

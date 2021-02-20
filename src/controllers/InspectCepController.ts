import { Request, Response } from "express";

import db from "../database/connection";

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
    response.status(200);
  }
}

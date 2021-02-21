# CPF Inspector

## Esse é o repositório da Api do CEP Inspector!

<!-- ### Você já pode testar o site se quiser! Só clicar nesse link: [CPF Inspector](sem-link) -->

### Se quiser visitar o repositório do frontend é só clicar nesse link: [CPF Inspector](https://github.com/devzgabriel/CEP-Inspector)

<br>

## Rotas disponíveis

**Inspecionar CEP**

```HTTP
URL estará disponível em breve!
```

### Enquanto não está disponivel pode usar um serviço alternativo ( [viaCep](https://viacep.com.br/) )

```HTTP
viacep.com.br/ws/{cep}/json/
```

<hr>

## **Como executar na sua máquina e testar**

<br>

### **_Instalando e executando o projeto_**

No terminal digite todos os comandos abaixo:

```Bash
git clone https://github.com/devzgabriel/api-cepInspector.git
```

```Bash
cd api-cepInspector
```

```Bash
yarn install
```

```Bash
yarn knex-migrate
```

```Bash
yarn dev
```

<hr>

### **Se seu objetivo é testar o frontend, isso é tudo que precisa faser! Mas se quer usar somente a API esses são os próximos passos:**

<br>

Para fazer requisições use a url abaixo e insira o número do CEP (sem traços) no lugar de "{cep}"

```HTTP
http://localhost:3333/inspect/{cep}
```

O retorno será um JSON como exemplo abaixo:

```JSON
{
  "id": 6,
  "cep": "01310924",
  "logradouro": "Avenida Paulista 1912",
  "complemento": "",
  "bairro": "Bela Vista",
  "localidade": "São Paulo",
  "uf": "SP",
  "ibge": "3550308",
  "gia": "1004",
  "ddd": "11",
  "siafi": "7107"
}
```

### **_Executando testes_**

Os testes serão acrescentados em breve!

<!--
Para executar todos os testes digite o comando abaixo

```Bash
yarn test
``` -->

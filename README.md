# Simulador aleatório de Tarifa

Projeto de consulta de tarifas.

## Créditos
A animação de Loading é do [feng liang](https://codepen.io/anhulife/), Segue o código dela [aqui](https://codepen.io/anhulife/pen/rLvap)

## Pré requisito
O Sistema está rodando em docker. Para testar sugiro que instale-o caso não possua na maquina.

```sh
git clone https://github.com/fredsonrodrigues/simulador-aleatorio-tarifa.git
cd simulador-aleatorio-tarifa
docker-compose up
```
## Tecnologias usadas:
    - React (front)
    - Node.js (back)
    - Docker (imagem do Node para o back-end e uma imagem nginx para servir o front e criar um proxy reverso no acesso ao back.)

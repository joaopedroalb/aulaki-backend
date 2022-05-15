# Backend Aulaki - Trabalho de ****Desenvolvimento de software em nuvem****

## Desafio: Criação de uma API com node.js para ser consumido na pelo frontend

Repositório do frontend: https://github.com/joaopedroalb/aulaki-frontend

# **💡**Aplicação

Eu escolhi fazer um site chamado aulaki, onde basicamente ele iria ser um site para pessoas que gostariam de divulgar aulas particulares e pessoas que buscam essas aulas. Basicamente o foco seria nesses 2 casos. A api controla 2 coisas então, a parte dos professores, e a parte das aulas. 

# **📡**Rotas

# Professores:

## /teacher - (get)

- Retornar a lista de todos os professores
- Pode receber 2 parâmetros sendo eles **city** e **name**, para filtrar pelos respectivos parâmetros

## /teacher/search/{id} - (get)

- Retorna um **teacher** que tenha o **id** passado

## /teacher/city - (get)

- Retorna uma lista de **strings** com todas as **cidades** dos professores registrados. Essa lista filtra as cidades repetidas.

# Aulas

## /class - (get)

- Retorna a lista de todas as aulas
- Pode receber 1 parâmetro, sendo ele **title**, onde irá retornar todas as aulas que tenha essa nome

## /class/search/{id} - (get)

- Retorna uma **aula** que tenha o **id** passado

## /class/teacher/{id} -  (get)

- Retornar uma lista de aulas que o **professor** com esse **id**

## /class/tag - {get}

- Retorna uma **lista de strings** com o nome das **10** **tags** mais usadas entre todas as aulas

# OBS: Os dados são mocks como arquivos json na pasta DB do projeto

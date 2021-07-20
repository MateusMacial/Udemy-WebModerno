SELECT * FROM estados

SELECT nome, sigla FROM estados
WHERE regiao = 'sul'

select nome, regiao, populacao from estados
where populacao >= 10
order by populacao desc
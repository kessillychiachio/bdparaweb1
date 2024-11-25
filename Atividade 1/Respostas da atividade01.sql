USE ecommerce;

/* Quais os nomes dos produtos não têm nenhuma venda? 
a) Responder com Exists. 
b) Responder com All. 
c) Responder com Join. */

-- a. EXISTS:
SELECT p.nome
FROM produto p
WHERE  NOT EXISTS (
SELECT 1
FROM venda v 
WHERE p.codProduto = v.codProduto);

-- b. ALL:
SELECT p.nome
FROM produto p
WHERE p.codProduto != ALL
(SELECT v.codProduto
FROM venda v);


 -- c. JOIN:
SELECT p.nome
FROM produto p
LEFT JOIN venda v ON p.codProduto = v.codProduto
WHERE v.codProduto IS NULL;

/* 2. Qual o produto vendido que teve mais troca em 2016? Informar além do código e do nome do 
produto, a quantidade de troca do produto. */

SELECT trocaProduto.codProdutoVenda AS codProduto, produto.nome, SUM(trocaProduto.quantidade) AS quantidadeTroca
	FROM trocaProduto
	JOIN produto ON trocaProduto.codProdutoVenda = produto.codProduto
	WHERE YEAR(trocaProduto.dataTroca) = 2016
	GROUP BY trocaProduto.codProdutoVenda, produto.nome
    HAVING quantidadeTroca = (
    SELECT MAX(quantidadeTroca)
FROM (
	SELECT trocaProduto.codProdutoVenda AS codProduto, SUM(trocaProduto.quantidade) AS quantidadeTroca
	FROM trocaProduto
	WHERE YEAR(trocaProduto.dataTroca) = 2016
	GROUP BY trocaProduto.codProdutoVenda
) AS TABELA_TEMP
);

/* 3. Qual o percentual de produto vendido foi trocado? 
Mostrar o percentual com somente duas casas decimais. 
OBS: Considerar um produto vendido como a relação de venda de um produto em um determinado pedido. */

SELECT TRUNCATE (
100 * (
	(SELECT COUNT(*) FROM trocaproduto) / (SELECT COUNT(*) FROM venda)
    ), 2
) AS PercentualPedProdVendido;

/* 4. Quais produtos vendidos têm pelo menos uma troca? Informar o código e o nome do produto. 
a) Responder com Exists. 
b) Responder com Any. */

-- a) Responder com Exists. 

SELECT codProduto, nome
FROM produto
WHERE EXISTS(
	SELECT *
    FROM trocaproduto
    WHERE produto.codProduto = trocaproduto.codProdutoVenda);
    
-- a) Responder com Any. 

SELECT codProduto, nome
FROM produto
WHERE codProduto = ANY
(SELECT codProdutoVenda
FROM trocaproduto
WHERE produto.codProduto = trocaproduto.codProdutoVenda);

/* 5. Quais produtos vendidos têm pelo menos duas trocas? Informar o código, o nome do produto e a 
quantidade de troca. */

SELECT 
	produto.codProduto, 
	produto.nome, 
	COUNT(trocaproduto.codProdutoVenda) AS quantidadeTroca 
FROM 
	produto 
JOIN 
	trocaproduto ON produto.codProduto = trocaproduto.codProdutoVenda
GROUP BY 
	produto.codProduto, produto.nome
HAVING 
	COUNT(trocaproduto.codProdutoVenda) >= 2
ORDER BY
	quantidadeTroca ASC,
    produto.nome ASC;
    
/* 6. Qual é o produto mais vendido entre fevereiro e novembro de 2016? Informar além do código e do 
nome do produto, a quantidade vendida. */

SELECT 
    venda.codProduto AS codProduto,
    produto.nome AS nome,
    SUM(venda.quantidade) AS qtdVendido
FROM 
    venda
JOIN 
    produto ON venda.codProduto = produto.codProduto
JOIN 
    pedido ON venda.codPedido = pedido.codPedido
WHERE 
    pedido.data BETWEEN '2016-02-01' AND '2016-11-30'
GROUP BY 
    venda.codProduto, produto.nome
ORDER BY 
    qtdVendido DESC
LIMIT 1;

/* 7. Qual o total de pedidos de cada forma de pagamento entre 2015 e 2016? */

SELECT 
    formaPagamento,
    COUNT(*) AS Quantidade
FROM 
    pedido
WHERE 
    YEAR(data) BETWEEN 2015 AND 2016
GROUP BY 
    formaPagamento;
    
/* 8. Qual cliente mais comprou produto entre 2016 e 2017? Informar o código e o nome do cliente, o tipo 
do cliente (física ou jurídica) e a quantidade que comprou.  */

SELECT 
    cliente.codCliente,
    cliente.nome,
    cliente.tipoCliente,
    SUM(venda.quantidade) AS qtdPedidoComprado
FROM 
    cliente
JOIN
    pedido ON cliente.codCliente = pedido.codCliente
JOIN
    venda ON pedido.codPedido = venda.codPedido
WHERE 
    YEAR(pedido.data) BETWEEN 2016 AND 2017
GROUP BY 
    cliente.codCliente, cliente.nome, cliente.tipoCliente
ORDER BY 
    qtdPedidoComprado DESC
LIMIT 1;

/* 9. Quais os pedidos não têm nenhuma associação com venda (“itemComprado”)? Mostrar o código, o 
ano e o status do pedido e também o nome e o tipo do cliente. */

SELECT 
    pedido.codPedido,
    YEAR(pedido.data) AS Ano,
    pedido.status,
    cliente.nome AS Cliente,
    cliente.tipoCliente
FROM 
    pedido
JOIN
    cliente ON cliente.codCliente = pedido.codCliente
LEFT JOIN
    venda ON pedido.codPedido = venda.codPedido
WHERE 
    venda.codPedido IS NULL
GROUP BY 
    pedido.codPedido, YEAR(pedido.data), pedido.status, cliente.nome, cliente.tipoCliente
ORDER BY 
      YEAR(pedido.data), pedido.codPedido;
      
/* 10. Qual a quantidade de pedidos aprovados por tipo de cliente (pessoa física e jurídica)? */

SELECT 
    cliente.tipoCliente,
    COUNT(pedido.codPedido) AS QtdPedido
FROM 
    pedido
JOIN 
    cliente ON cliente.codCliente = pedido.codCliente
WHERE 
    pedido.status = 'aprovado'
GROUP BY 
    cliente.tipoCliente;


      

























 












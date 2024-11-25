use agendaauditorio

db.administrador.insertMany(
[
	{
		"_id" : NumberInt(1),
		"nome" : "Pablo Freire Matos",
		"login" : "pablo",
		"senha" : "matos"
	},
	{
		"_id" : NumberInt(2),
		"nome" : "Liojes de Oliveira Carneiro",
		"login" : "Liojes",
		"senha" : "Carneiro"
	}
]
);
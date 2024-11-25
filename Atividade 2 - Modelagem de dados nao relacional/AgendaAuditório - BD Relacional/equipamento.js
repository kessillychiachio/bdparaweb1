use agendaauditorio

db.equipamento.insertMany([
	{
		"_id" : NumberInt(1),
		"nome" : "Data Show",
		"status" : "disponível",
		"dataHoraAtualizacaoStatus" : "2024-10-08 17:30:48",
		"admin_id" : NumberInt(1)
	},
	{
		"_id" : NumberInt(2),
		"nome" : "Lousa Digital",
		"status" : "disponível",
		"dataHoraAtualizacaoStatus" : "2024-10-08 17:30:48",
		"admin_id" : NumberInt(1)
	},
	{
		"_id" : NumberInt(3),
		"nome" : "Microfone",
		"status" : "disponível",
		"dataHoraAtualizacaoStatus" : "2024-10-08 17:30:48",
		"admin_id" : NumberInt(1)
	},
	{
		"_id" : NumberInt(4),
		"nome" : "Caixa de Som",
		"status" : "não disponível",
		"dataHoraAtualizacaoStatus" : "2024-10-08 17:30:48",
		"admin_id" : NumberInt(1)
	},
	{
		"_id" : NumberInt(5),
		"nome" : "Quadro Branco",
		"status" : "não disponível",
		"dataHoraAtualizacaoStatus" : "2024-10-08 17:30:48",
		"admin_id" : NumberInt(2)
	},
	{
		"_id" : NumberInt(6),
		"nome" : "Notebook",
		"status" : "disponível",
		"dataHoraAtualizacaoStatus" : "2024-10-08 17:30:48",
		"admin_id" : NumberInt(1)
	}
]
);
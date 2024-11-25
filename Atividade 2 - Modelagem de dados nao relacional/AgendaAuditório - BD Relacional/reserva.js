use agendaauditorio

db.reserva.insertMany([
[
	{
		"_id" : 1,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-05T10:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-05T12:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T00:00:00.000Z'),
		"siape" : 1,
		"nome" : "Marcélia Porto Rocha",
		"email" : "murilo@gmail.com"
	},
	{
		"_id" : 2,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-05T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-05T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T00:00:00.000Z'),
		"siape" : 1,
		"nome" : "Marcélia Porto Rocha",
		"email" : "murilo@gmail.com"
	},
	{
		"_id" : 3,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-06T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-06T12:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T00:00:00.000Z'),
		"siape" : 1,
		"nome" : "Marcélia Porto Rocha",
		"email" : "murilo@gmail.com"
	},
	{
		"_id" : 17,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-23T13:30:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-23T15:30:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 1,
		"nome" : "Marcélia Porto Rocha",
		"email" : "murilo@gmail.com"
	},
	{
		"_id" : 4,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-06T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-06T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 2,
		"nome" : "Gutemberg Júnior",
		"email" : "gutemberg@hotmail.com"
	},
	{
		"_id" : 5,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-07T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-07T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 2,
		"nome" : "Gutemberg Júnior",
		"email" : "gutemberg@hotmail.com"
	},
	{
		"_id" : 7,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-09T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-09T10:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 4,
		"nome" : "José Roberto Azevedo",
		"email" : "zeazevedo@gmail.com"
	},
	{
		"_id" : 8,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-12T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-12T10:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 4,
		"nome" : "José Roberto Azevedo",
		"email" : "zeazevedo@gmail.com"
	},
	{
		"_id" : 9,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-13T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-13T10:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 4,
		"nome" : "José Roberto Azevedo",
		"email" : "zeazevedo@gmail.com"
	},
	{
		"_id" : 10,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-14T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-14T10:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 4,
		"nome" : "José Roberto Azevedo",
		"email" : "zeazevedo@gmail.com"
	},
	{
		"_id" : 11,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-15T08:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-15T10:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 4,
		"nome" : "José Roberto Azevedo",
		"email" : "zeazevedo@gmail.com"
	},
	{
		"_id" : 12,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-19T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-19T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 5,
		"nome" : "Carlos Matheus Rodrigues",
		"email" : "carmatro@gmail.com"
	},
	{
		"_id" : 13,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-20T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-20T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 5,
		"nome" : "Carlos Matheus Rodrigues",
		"email" : "carmatro@gmail.com"
	},
	{
		"_id" : 14,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-21T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-21T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 5,
		"nome" : "Carlos Matheus Rodrigues",
		"email" : "carmatro@gmail.com"
	},
	{
		"_id" : 15,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-22T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-22T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 5,
		"nome" : "Carlos Matheus Rodrigues",
		"email" : "carmatro@gmail.com"
	},
	{
		"_id" : 16,
		"motivo" : "Reserva Pessoal",
		"dataHoraInicial" : new ISODate('2024-12-22T14:00:00.000Z'),
		"dataHoraFinal" : new ISODate('2024-12-22T18:00:00.000Z'),
		"status" : "reservado",
		"dataHoraSolicitacao" : new ISODate('2024-10-08T17:30:48.000Z'),
		"siape" : 5,
		"nome" : "Carlos Matheus Rodrigues",
		"email" : "carmatro@gmail.com"
	}
]
);
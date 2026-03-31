const agendaBody = document.getElementById("agendaBody");
const datePicker = document.getElementById("datePicker");

// gerar horários (7h às 20h)
for (let hora = 7; hora <= 20; hora++) {
    let row = document.createElement("tr");

    let horaCell = document.createElement("td");
    horaCell.textContent = `${hora}:00`;
    row.appendChild(horaCell);

    for (let i = 0; i < 5; i++) {
        let cell = document.createElement("td");

        cell.addEventListener("click", () => marcarHorario(cell));

        row.appendChild(cell);
    }

    agendaBody.appendChild(row);
}

// função principal
function marcarHorario(cell) {
    const dataSelecionada = new Date(datePicker.value);
    const hoje = new Date();

    // validação de data
    if (!datePicker.value) {
        alert("Escolha uma data primeiro!");
        return;
    }

    if (dataSelecionada < hoje.setHours(0,0,0,0)) {
        alert("Não pode marcar dias passados!");
        return;
    }

    // verificar se já existe agendamento nesse dia
    let ocupados = document.querySelectorAll(".ocupado");

    if (ocupados.length > 0) {
        alert("Você já marcou uma visita nesse dia!");
        return;
    }

    // marcar
    cell.classList.add("ocupado");
    cell.textContent = "Agendado";
}
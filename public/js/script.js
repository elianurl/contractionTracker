document.addEventListener('DOMContentLoaded', () => {
    const contractionButton = document.getElementById('contractionButton');
    const newRegButton = document.getElementById('newRegButton');
    const registrosList = document.getElementById('registrosList');
    const exportButton = document.getElementById('exportButton');
    let startTime;
    let registros = [];
    let currentDate;

    const startRecording = () => {
        startTime = new Date();
    };

    const stopRecording = () => {
        const endTime = new Date();
        const duration = Math.round((endTime - startTime) / 1000);
        const currentTime = new Date();
        const dayOfWeek = currentTime.toLocaleString('default', { weekday: 'long' }).charAt(0).toUpperCase() + currentTime.toLocaleString('default', { weekday: 'long' }).slice(1);
        const dayOfMonth = currentTime.getDate();
        const month = currentTime.toLocaleString('default', { month: 'long' }).charAt(0).toUpperCase() + currentTime.toLocaleString('default', { month: 'long' }).slice(1);
        const fecha = `${dayOfWeek}, <span style="color: #ffa521;">${dayOfMonth} de ${month}</span>`;
        const horas = currentTime.getHours();
        const minutos = currentTime.getMinutes().toString().padStart(2, '0');
        const registro = `<span class="hora" style="font-weight: bold; color: #9aa1d7;">Hora: ${horas}:${minutos}</span> <span class="duracion" style="font-weight: bold; color: #7e83b0;">Duración: ${duration} segundos</span>`;

        if (currentDate !== fecha) {
            const titulo = document.createElement('h2');
            titulo.innerHTML = fecha;
            registrosList.appendChild(titulo);
            currentDate = fecha;
        }

        const li = document.createElement('li');
        li.innerHTML = registro;
        registrosList.appendChild(li);

        registrosList.scrollTop = registrosList.scrollHeight;

        registros.push({ fecha: fecha, hora: horas, minutos: minutos, duracion: duration });

        fetch('/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ hora: horas, minutos, duracion: duration }),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };

    const resetRegistros = () => {
        registros = [];
        registrosList.innerHTML = '';
        currentDate = undefined;
        fetch('/reset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    };

    contractionButton.addEventListener('mousedown', startRecording);
    contractionButton.addEventListener('mouseup', stopRecording);

    contractionButton.addEventListener('touchstart', (event) => {
        event.preventDefault();
        startRecording();
    });
    contractionButton.addEventListener('touchend', (event) => {
        event.preventDefault();
        stopRecording();
    });

    newRegButton.addEventListener('click', resetRegistros);

    exportButton.addEventListener('click', () => {
        window.location.href = '/exportar';
    });
});

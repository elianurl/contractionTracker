// registros.js

const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');
const fs = require('fs');

let registros = [];

router.post('/registro', (req, res) => {
    const { hora, minutos, segundos, duracion } = req.body;
    const currentDate = new Date();
    const diaSemana = currentDate.toLocaleString('default', { weekday: 'long' });
    const dia = currentDate.getDate();
    const mes = currentDate.toLocaleString('default', { month: 'long' });
    const diaSemanaCap = diaSemana.charAt(0).toUpperCase() + diaSemana.slice(1);
    const mesCap = mes.charAt(0).toUpperCase() + mes.slice(1);
    const fecha = `<span style="color: #ffa521">${diaSemanaCap}, ${dia} ${mesCap}</span>`;
    registros.push({ fecha, hora, minutos, segundos, duracion });
    res.json({ message: 'Registro añadido', registros });
});

router.get('/exportar', (req, res) => {
    const doc = new PDFDocument();
    let filename = 'registros_contracciones.pdf';
    filename = encodeURIComponent(filename);
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"');
    res.setHeader('Content-type', 'application/pdf');

    const imagePath = __dirname + '/../public/contractionTracker.png';
    const addHeader = () => {
        doc.image(imagePath, 340, 20, { width: 220 });
        doc.moveDown(5);
    };
    addHeader();
    doc.on('pageAdded', addHeader);

    let registrosPorDia = {};
    registros.forEach(registro => {
        if (!registrosPorDia[registro.fecha]) {
            registrosPorDia[registro.fecha] = [];
        }
        registrosPorDia[registro.fecha].push(registro);
    });

    Object.keys(registrosPorDia).forEach(fecha => {
        const fechaSinEstilos = fecha.replace(/<\/?[^>]+(>|$)/g, "");
        doc.font('Helvetica-Bold').fontSize(18).fillColor('#ffa521').text(fechaSinEstilos, { align: 'left' });
        doc.moveDown();

        registrosPorDia[fecha].forEach((registro, index) => {
            if (index > 0) {
                doc.moveDown();
            }
            doc.font('Helvetica-Bold').fontSize(12).fillColor('#9aa1d7').text(`Hora: ${registro.hora}:${registro.minutos}`, { continued: true });
            doc.font('Helvetica').fontSize(12).fillColor('#7e83b0').text(` Duración: ${registro.duracion} segundos`);
        });

        doc.text('', { align: 'left' });
    });

    doc.pipe(res);
    doc.end();
});

router.post('/reset', (req, res) => {
    registros = [];
    res.json({ message: 'Registros reiniciados', registros });
});

module.exports = router;

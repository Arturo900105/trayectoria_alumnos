let form_pedagogia;
let xa1, xb1, xc1, xd1, xe1, xf1, xg1, xh1, xi1, xj1, xk1, xl1, xm1, xn1, xo1, xp1, xq1, xr1, xs1, xt1;
let xa2, xb2, xc2, xd2, xe2, xf2, xg2, xh2, xi2, xj2, xk2, xl2, xm2, xn2, xo2, xp2, xq2, xr2, xs2, xt2;
let xa3, xb3, xc3, xd3, xe3, xf3, xg3, xh3, xi3, xj3, xk3, xl3, xm3, xn3, xo3, xp3, xq3, xr3, xs3, xt3;
let cadena1, cadena2, cadena3;
let valido1, valido2, valido3;
//console.log(marcax1b);

$(document).ready(function () {
    form_pedagogia = $("#alumno_pedagogia")
    form_pedagogia[0].reset();

    form_pedagogia.on('click', function () {
        xa1 = $("[name = marcaXA1]:checked").val();  if (xa1 === "1") {xa1 = "A";} else {xa1 = "";}
        xb1 = $("[name = marcaXB1]:checked").val();  if (xb1 === "1") {xb1 = "B";} else {xb1 = "";}
        xc1 = $("[name = marcaXC1]:checked").val();  if (xc1 === "1") {xc1 = "C";} else {xc1 = "";}
        xd1 = $("[name = marcaXD1]:checked").val();  if (xd1 === "1") {xd1 = "D";} else {xd1 = "";}
        xe1 = $("[name = marcaXE1]:checked").val();  if (xe1 === "1") {xe1 = "E";} else {xe1 = "";}
        xf1 = $("[name = marcaXF1]:checked").val();  if (xf1 === "1") {xf1 = "F";} else {xf1 = "";}
        xg1 = $("[name = marcaXG1]:checked").val();  if (xg1 === "1") {xg1 = "G";} else {xg1 = "";}
        xh1 = $("[name = marcaXH1]:checked").val();  if (xh1 === "1") {xh1 = "H";} else {xh1 = "";}
        xi1 = $("[name = marcaXI1]:checked").val();  if (xi1 === "1") {xi1 = "I";} else {xi1 = "";}
        xj1 = $("[name = marcaXJ1]:checked").val();  if (xj1 === "1") {xj1 = "J";} else {xj1 = "";}
        xk1 = $("[name = marcaXK1]:checked").val();  if (xk1 === "1") {xk1 = "K";} else {xk1 = "";}
        xl1 = $("[name = marcaXL1]:checked").val();  if (xl1 === "1") {xl1 = "L";} else {xl1 = "";}
        xm1 = $("[name = marcaXM1]:checked").val();  if (xm1 === "1") {xm1 = "M";} else {xm1 = "";}
        xn1 = $("[name = marcaXN1]:checked").val();  if (xn1 === "1") {xn1 = "N";} else {xn1 = "";}
        xo1 = $("[name = marcaXO1]:checked").val();  if (xo1 === "1") {xo1 = "O";} else {xo1 = "";}
        xp1 = $("[name = marcaXP1]:checked").val();  if (xp1 === "1") {xp1 = "P";} else {xp1 = "";}
        xq1 = $("[name = marcaXQ1]:checked").val();  if (xq1 === "1") {xq1 = "Q";} else {xq1 = "";}
        xr1 = $("[name = marcaXR1]:checked").val();  if (xr1 === "1") {xr1 = "R";} else {xr1 = "";}
        xs1 = $("[name = marcaXS1]:checked").val();  if (xs1 === "1") {xs1 = "S";} else {xs1 = "";}
        xt1 = $("[name = marcaXT1]:checked").val();  if (xt1 === "1") {xt1 = "T";} else {xt1 = "";}

        xa2 = $("[name = marcaXA2]:checked").val();  if (xa2 === "1") {xa2 = "A";} else {xa2 = "";}
        xb2 = $("[name = marcaXB2]:checked").val();  if (xb2 === "1") {xb2 = "B";} else {xb2 = "";}
        xc2 = $("[name = marcaXC2]:checked").val();  if (xc2 === "1") {xc2 = "C";} else {xc2 = "";}
        xd2 = $("[name = marcaXD2]:checked").val();  if (xd2 === "1") {xd2 = "D";} else {xd2 = "";}
        xe2 = $("[name = marcaXE2]:checked").val();  if (xe2 === "1") {xe2 = "E";} else {xe2 = "";}
        xf2 = $("[name = marcaXF2]:checked").val();  if (xf2 === "1") {xf2 = "F";} else {xf2 = "";}
        xg2 = $("[name = marcaXG2]:checked").val();  if (xg2 === "1") {xg2 = "G";} else {xg2 = "";}
        xh2 = $("[name = marcaXH2]:checked").val();  if (xh2 === "1") {xh2 = "H";} else {xh2 = "";}
        xi2 = $("[name = marcaXI2]:checked").val();  if (xi2 === "1") {xi2 = "I";} else {xi2 = "";}
        xj2 = $("[name = marcaXJ2]:checked").val();  if (xj2 === "1") {xj2 = "J";} else {xj2 = "";}
        xk2 = $("[name = marcaXK2]:checked").val();  if (xk2 === "1") {xk2 = "K";} else {xk2 = "";}
        xl2 = $("[name = marcaXL2]:checked").val();  if (xl2 === "1") {xl2 = "L";} else {xl2 = "";}
        xm2 = $("[name = marcaXM2]:checked").val();  if (xm2 === "1") {xm2 = "M";} else {xm2 = "";}
        xn2 = $("[name = marcaXN2]:checked").val();  if (xn2 === "1") {xn2 = "N";} else {xn2 = "";}
        xo2 = $("[name = marcaXO2]:checked").val();  if (xo2 === "1") {xo2 = "O";} else {xo2 = "";}
        xp2 = $("[name = marcaXP2]:checked").val();  if (xp2 === "1") {xp2 = "P";} else {xp2 = "";}
        xq2 = $("[name = marcaXQ2]:checked").val();  if (xq2 === "1") {xq2 = "Q";} else {xq2 = "";}
        xr2 = $("[name = marcaXR2]:checked").val();  if (xr2 === "1") {xr2 = "R";} else {xr2 = "";}
        xs2 = $("[name = marcaXS2]:checked").val();  if (xs2 === "1") {xs2 = "S";} else {xs2 = "";}
        xt2 = $("[name = marcaXT2]:checked").val();  if (xt2 === "1") {xt2 = "T";} else {xt2 = "";}

        xa3 = $("[name = marcaXA3]:checked").val();  if (xa3 === "1") {xa3 = "A";} else {xa3 = "";}
        xb3 = $("[name = marcaXB3]:checked").val();  if (xb3 === "1") {xb3 = "B";} else {xb3 = "";}
        xc3 = $("[name = marcaXC3]:checked").val();  if (xc3 === "1") {xc3 = "C";} else {xc3 = "";}
        xd3 = $("[name = marcaXD3]:checked").val();  if (xd3 === "1") {xd3 = "D";} else {xd3 = "";}
        xe3 = $("[name = marcaXE3]:checked").val();  if (xe3 === "1") {xe3 = "E";} else {xe3 = "";}
        xf3 = $("[name = marcaXF3]:checked").val();  if (xf3 === "1") {xf3 = "F";} else {xf3 = "";}
        xg3 = $("[name = marcaXG3]:checked").val();  if (xg3 === "1") {xg3 = "G";} else {xg3 = "";}
        xh3 = $("[name = marcaXH3]:checked").val();  if (xh3 === "1") {xh3 = "H";} else {xh3 = "";}
        xi3 = $("[name = marcaXI3]:checked").val();  if (xi3 === "1") {xi3 = "I";} else {xi3 = "";}
        xj3 = $("[name = marcaXJ3]:checked").val();  if (xj3 === "1") {xj3 = "J";} else {xj3 = "";}
        xk3 = $("[name = marcaXK3]:checked").val();  if (xk3 === "1") {xk3 = "K";} else {xk3 = "";}
        xl3 = $("[name = marcaXL3]:checked").val();  if (xl3 === "1") {xl3 = "L";} else {xl3 = "";}
        xm3 = $("[name = marcaXM3]:checked").val();  if (xm3 === "1") {xm3 = "M";} else {xm3 = "";}
        xn3 = $("[name = marcaXN3]:checked").val();  if (xn3 === "1") {xn3 = "N";} else {xn3 = "";}
        xo3 = $("[name = marcaXO3]:checked").val();  if (xo3 === "1") {xo3 = "O";} else {xo3 = "";}
        xp3 = $("[name = marcaXP3]:checked").val();  if (xp3 === "1") {xp3 = "P";} else {xp3 = "";}
        xq3 = $("[name = marcaXQ3]:checked").val();  if (xq3 === "1") {xq3 = "Q";} else {xq3 = "";}
        xr3 = $("[name = marcaXR3]:checked").val();  if (xr3 === "1") {xr3 = "R";} else {xr3 = "";}
        xs3 = $("[name = marcaXS3]:checked").val();  if (xs3 === "1") {xs3 = "S";} else {xs3 = "";}
        xt3 = $("[name = marcaXT3]:checked").val();  if (xt3 === "1") {xt3 = "T";} else {xt3 = "";}

        cadena1 = xa1+xb1+xc1+xd1+xe1+xf1+xg1+xh1+xi1+xj1+xk1+xl1+xm1+xn1+xo1+xp1+xq1+xr1+xs1+xt1;
        cadena2 = xa2+xb2+xc2+xd2+xe2+xf2+xg2+xh2+xi2+xj2+xk2+xl2+xm2+xn2+xo2+xp2+xq2+xr2+xs2+xt2;
        cadena3 = xa3+xb3+xc3+xd3+xe3+xf3+xg3+xh3+xi3+xj3+xk3+xl3+xm3+xn3+xo3+xp3+xq3+xr3+xs3+xt3;

        $("#validados1").val(cadena1.split(""));
        $("#validados2").val(cadena2.split(""));
        $("#validados3").val(cadena3.split(""));

        valido1 = document.getElementById("validados1").value;
        valido2 = document.getElementById("validados2").value;
        valido3 = document.getElementById("validados3").value;

        $("#cadena1").val(valido1.replace(/,+/g, " "));
        $("#cadena2").val(valido2.replace(/,+/g, " "));
        $("#cadena3").val(valido3.replace(/,+/g, " "));
    })

    form_pedagogia.submit(function (e){
        e.preventDefault();

        if (!$("input[name='pregunta1']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 1 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta2']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 2 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta3']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 3 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta4']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 4 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta5']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 5 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta6']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 6 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }  else if (!$("input[name='pregunta7']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 7 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }  else if (!$("input[name='pregunta8']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 8 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta9']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 9 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta10']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 10 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta11']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 11 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta12']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 12 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta13']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 13 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta14']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 14 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta15']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 15 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta16']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 16 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta17']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 17 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta18']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 18 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta19']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 19 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta20']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 20 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        } else if (!$("input[name='pregunta21']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 21 sin contestar",
                icon: "warning",
                width: "30%",
                background: "#470101",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


//Encuesta para organización del estudio:
        if (!$("input[name='marcaXA1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso A de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXB1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso B de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXC1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso C de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXD1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso D de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXE1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso E de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXF1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso F de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXG1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso G de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXH1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso H de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXI1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso I de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXJ1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso J de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXK1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso K de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXL1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso L de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXM1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso M de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXN1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso N de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXO1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso O de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXP1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso P de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXQ1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso Q de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXR1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso R de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXS1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso S de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXT1']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso T de:\nEncuesta para organización del estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        }


//Encuesta sobre técnicas de estudio:
        if (!$("input[name='marcaXA2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso A de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXB2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso B de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXC2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso C de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXD2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso D de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXE2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso E de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXF2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso F de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXG2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso G de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXH2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso H de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXI2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso I de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXJ2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso J de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXK2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso K de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXL2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso L de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXM2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso M de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXN2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso N de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXO2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso O de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXP2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso P de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXQ2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso Q de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXR2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso R de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXS2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso S de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXT2']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso T de:\nEncuesta sobre técnicas de estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        }


//Encuesta sobre motivación para el estudio:
        if (!$("input[name='marcaXA3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso A de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXB3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso B de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXC3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso C de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXD3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso D de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXE3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso E de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXF3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso F de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXG3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso G de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXH3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso H de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXI3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso I de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXJ3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso J de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXK3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso K de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXL3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso L de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXM3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso M de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXN3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso N de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXO3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso O de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXP3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso P de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXQ3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso Q de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXR3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso R de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXS3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso S de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        } else if (!$("input[name='marcaXT3']:radio").is(":checked")) {
            Swal.fire({
                title: "Inciso T de:\nEncuesta sobre motivación para el estudio,\nSin contestar!!!",
                icon: "warning",
                width: "45%",
                background: "#001800",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 4000
            });
            return false;
        }

        Swal.fire({
            title: "¿Guardar Examen Pedagógico?",
            text: "Descpués, ya no podrá hacer cambios en el examen",
            type: 'warning',
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: '#19980b',
            cancelButtonColor: '#910018',
            confirmButtonText: 'GUARDAR',
            cancelButtonText: 'CANCELAR',
            backdrop: "rgba(7,44,0,0.7)"

        }).then((result) => {
            if (result.value) {
                $.ajax({
                    url: "php/datos_pedagogia.php",
                    type: 'POST',
                    data: form_pedagogia.serialize(),
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1500
                        }).then(
                            setTimeout("location.href ='php/terminar_alumno.php'",2000)
                        )
                    },
                    error: function (error) {
                        swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: (error.responseText),
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                });
                form_pedagogia[0].reset()
                Cookies2.remove('ALUMNO')
                Cookies2.remove('usuAlumno')
            }
        })
    })
})
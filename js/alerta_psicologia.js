let valor, nuevoValor, form_psicologia;
let b1_01, b1_02, b1_03, b1_04, b1_05, b1_06, b1_07, b1_08, b1_09, b1_10;
let b2_11, b2_12, b2_13, b2_14, b2_15, b2_16, b2_17, b2_18, b2_19, b2_20;
let b3_21, b3_22, b3_23, b3_24, b3_25, b3_26, b3_27, b3_28, b3_29, b3_30;
let b4_31, b4_32, b4_33, b4_34, b4_35, b4_36, b4_37, b4_38, b4_39, b4_40;
let bloque1, bloque2, bloque3, bloque4;
let vbloque1, vbloque2, vbloque3, vbloque4;

$(document).ready(function () {
    form_psicologia = $('#alumno_psicologia')

    $("#alumno_psicologia")[0].reset()
    $("#cual, #porque").hide()

    form_psicologia.on('click', function () {

        if ($("#respuesta1:radio").is(":checked")) {
            $("#cual").show()
        } else {
            $("#cual").hide().val("")
        }

        if ($("#respuesta2:radio").is(":checked")) {
            $("#porque").show()
        } else {
            $("#porque").hide().val("")
        }

        $('.escala_pretest').on('change keypress paste focus textInput input',function(){
            valor = $(this).val()
            nuevoValor = valor.replace(/\D/g, "")
            if (nuevoValor > 3) {
                $(this).val(3)
            } else {
                $(this).val(nuevoValor)
            }
        })

        b1_01 = $("[name = bloque1_01]:checked").val();  if (b1_01 === "1") {b1_01 = "01";} else {b1_01 = "";}
        b1_02 = $("[name = bloque1_02]:checked").val();  if (b1_02 === "1") {b1_02 = "02";} else {b1_02 = "";}
        b1_03 = $("[name = bloque1_03]:checked").val();  if (b1_03 === "1") {b1_03 = "03";} else {b1_03 = "";}
        b1_04 = $("[name = bloque1_04]:checked").val();  if (b1_04 === "1") {b1_04 = "04";} else {b1_04 = "";}
        b1_05 = $("[name = bloque1_05]:checked").val();  if (b1_05 === "1") {b1_05 = "05";} else {b1_05 = "";}
        b1_06 = $("[name = bloque1_06]:checked").val();  if (b1_06 === "1") {b1_06 = "06";} else {b1_06 = "";}
        b1_07 = $("[name = bloque1_07]:checked").val();  if (b1_07 === "1") {b1_07 = "07";} else {b1_07 = "";}
        b1_08 = $("[name = bloque1_08]:checked").val();  if (b1_08 === "1") {b1_08 = "08";} else {b1_08 = "";}
        b1_09 = $("[name = bloque1_09]:checked").val();  if (b1_09 === "1") {b1_09 = "09";} else {b1_09 = "";}
        b1_10 = $("[name = bloque1_10]:checked").val();  if (b1_10 === "1") {b1_10 = "10";} else {b1_10 = "";}

        b2_11 = $("[name = bloque2_11]:checked").val();  if (b2_11 === "1") {b2_11 = "11";} else {b2_11 = "";}
        b2_12 = $("[name = bloque2_12]:checked").val();  if (b2_12 === "1") {b2_12 = "12";} else {b2_12 = "";}
        b2_13 = $("[name = bloque2_13]:checked").val();  if (b2_13 === "1") {b2_13 = "13";} else {b2_13 = "";}
        b2_14 = $("[name = bloque2_14]:checked").val();  if (b2_14 === "1") {b2_14 = "14";} else {b2_14 = "";}
        b2_15 = $("[name = bloque2_15]:checked").val();  if (b2_15 === "1") {b2_15 = "15";} else {b2_15 = "";}
        b2_16 = $("[name = bloque2_16]:checked").val();  if (b2_16 === "1") {b2_16 = "16";} else {b2_16 = "";}
        b2_17 = $("[name = bloque2_17]:checked").val();  if (b2_17 === "1") {b2_17 = "17";} else {b2_17 = "";}
        b2_18 = $("[name = bloque2_18]:checked").val();  if (b2_18 === "1") {b2_18 = "18";} else {b2_18 = "";}
        b2_19 = $("[name = bloque2_19]:checked").val();  if (b2_19 === "1") {b2_19 = "19";} else {b2_19 = "";}
        b2_20 = $("[name = bloque2_20]:checked").val();  if (b2_20 === "1") {b2_20 = "20";} else {b2_20 = "";}

        b3_21 = $("[name = bloque3_21]:checked").val();  if (b3_21 === "1") {b3_21 = "21";} else {b3_21 = "";}
        b3_22 = $("[name = bloque3_22]:checked").val();  if (b3_22 === "1") {b3_22 = "22";} else {b3_22 = "";}
        b3_23 = $("[name = bloque3_23]:checked").val();  if (b3_23 === "1") {b3_23 = "23";} else {b3_23 = "";}
        b3_24 = $("[name = bloque3_24]:checked").val();  if (b3_24 === "1") {b3_24 = "24";} else {b3_24 = "";}
        b3_25 = $("[name = bloque3_25]:checked").val();  if (b3_25 === "1") {b3_25 = "25";} else {b3_25 = "";}
        b3_26 = $("[name = bloque3_26]:checked").val();  if (b3_26 === "1") {b3_26 = "26";} else {b3_26 = "";}
        b3_27 = $("[name = bloque3_27]:checked").val();  if (b3_27 === "1") {b3_27 = "27";} else {b3_27 = "";}
        b3_28 = $("[name = bloque3_28]:checked").val();  if (b3_28 === "1") {b3_28 = "28";} else {b3_28 = "";}
        b3_29 = $("[name = bloque3_29]:checked").val();  if (b3_29 === "1") {b3_29 = "29";} else {b3_29 = "";}
        b3_30 = $("[name = bloque3_30]:checked").val();  if (b3_30 === "1") {b3_30 = "30";} else {b3_30 = "";}

        b4_31 = $("[name = bloque4_31]:checked").val();  if (b4_31 === "1") {b4_31 = "31";} else {b4_31 = "";}
        b4_32 = $("[name = bloque4_32]:checked").val();  if (b4_32 === "1") {b4_32 = "32";} else {b4_32 = "";}
        b4_33 = $("[name = bloque4_33]:checked").val();  if (b4_33 === "1") {b4_33 = "33";} else {b4_33 = "";}
        b4_34 = $("[name = bloque4_34]:checked").val();  if (b4_34 === "1") {b4_34 = "34";} else {b4_34 = "";}
        b4_35 = $("[name = bloque4_35]:checked").val();  if (b4_35 === "1") {b4_35 = "35";} else {b4_35 = "";}
        b4_36 = $("[name = bloque4_36]:checked").val();  if (b4_36 === "1") {b4_36 = "36";} else {b4_36 = "";}
        b4_37 = $("[name = bloque4_37]:checked").val();  if (b4_37 === "1") {b4_37 = "37";} else {b4_37 = "";}
        b4_38 = $("[name = bloque4_38]:checked").val();  if (b4_38 === "1") {b4_38 = "38";} else {b4_38 = "";}
        b4_39 = $("[name = bloque4_39]:checked").val();  if (b4_39 === "1") {b4_39 = "39";} else {b4_39 = "";}
        b4_40 = $("[name = bloque4_40]:checked").val();  if (b4_40 === "1") {b4_40 = "40";} else {b4_40 = "";}

        bloque1 = b1_01 + b1_02 + b1_03 + b1_04 + b1_05 + b1_06 + b1_07 + b1_08 + b1_09 + b1_10
        bloque2 = b2_11 + b2_12 + b2_13 + b2_14 + b2_15 + b2_16 + b2_17 + b2_18 + b2_19 + b2_20
        bloque3 = b3_21 + b3_22 + b3_23 + b3_24 + b3_25 + b3_26 + b3_27 + b3_28 + b3_29 + b3_30
        bloque4 = b4_31 + b4_32 + b4_33 + b4_34 + b4_35 + b4_36 + b4_37 + b4_38 + b4_39 + b4_40

        $("#bloque1v").val(bloque1.match(/.{1,2}(.$)?/g))
        $("#bloque2v").val(bloque2.match(/.{1,2}(.$)?/g))
        $("#bloque3v").val(bloque3.match(/.{1,2}(.$)?/g))
        $("#bloque4v").val(bloque4.match(/.{1,2}(.$)?/g))

        vbloque1 = document.getElementById("bloque1v").value
        vbloque2 = document.getElementById("bloque2v").value
        vbloque3 = document.getElementById("bloque3v").value
        vbloque4 = document.getElementById("bloque4v").value

        $("#bloque1v_bd").val(vbloque1.replace(/,+/g, " "));
        $("#bloque2v_bd").val(vbloque2.replace(/,+/g, " "));
        $("#bloque3v_bd").val(vbloque3.replace(/,+/g, " "));
        $("#bloque4v_bd").val(vbloque4.replace(/,+/g, " "));
    })

    form_psicologia.submit(function (e){
        e.preventDefault();

        if (!$("input[name='respuesta1']:checked").is(":checked")) {
            Swal.fire({
                title: "Pregunta 1 sin contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        } else if ($("#respuesta1:checked").val() === "SÍ"){
            if ($("#cual").val().trim() === "") {
                Swal.fire({
                    title: "Describe Cúal...",
                    icon: "warning",
                    showConfirmButton: false,
                    backdrop: "rgba(0,0,0,0.0)",
                    timer: 2000
                });
                return false;
            }
        }


        if (!$("input[name='respuesta2']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 2 sin contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 2000
            });
            return false;
        } else if ($("#respuesta2:checked").val() === "SÍ"){
            if ($("#porque").val().trim() === "") {
                Swal.fire({
                    title: "Describe Por qué...",
                    icon: "warning",
                    showConfirmButton: false,
                    backdrop: "rgba(0,0,0,0.0)",
                    timer: 2000
                });
                return false;
            }
        }


        if ($("[name=ep_a1]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.1. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d1]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.1. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        if ($("[name=ep_a2]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.2. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d2]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.2. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        if ($("[name=ep_a3]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.3. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d3]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.3. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        if ($("[name=ep_a4]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.4. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d4]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.4. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        if ($("[name=ep_a5]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.5. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d5]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.5. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        if ($("[name=ep_a6]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.6. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d6]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.6. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        if ($("[name=ep_a7]").val().trim() === "") {
            Swal.fire({
                title: "Campo A.7. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if ($("[name=ep_d7]").val().trim() === "") {
            Swal.fire({
                title: "Campo D.7. Vacío",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        //Eventos del Bloque 1
        if (!$("input[name='bloque1_01']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 01 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_02']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 02 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_03']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 03 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_04']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 04 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_05']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 05 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_06']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 06 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_07']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 07 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_08']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 08 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_09']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 09 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque1_10']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 10 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }

        //Eventos del Bloque 2
        if (!$("input[name='bloque2_11']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 11 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_12']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 12 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_13']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 13 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_14']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 14 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_15']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 15 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_16']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 16 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_17']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 17 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_18']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 18 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_19']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 19 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque2_20']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 20 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }

        //Eventos del Bloque 3
        if (!$("input[name='bloque3_21']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 21 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_22']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 22 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_23']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 23 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_24']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 24 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_25']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 25 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_26']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 26 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_27']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 27 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_28']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 28 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_29']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 29 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque3_30']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 30 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }

        //Eventos del Bloque 4
        if (!$("input[name='bloque4_31']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 31 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_32']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 32 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_33']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 33 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_34']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 34 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_35']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 35 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_36']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 36 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_37']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 37 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_38']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 38 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_39']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 39 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }
        if (!$("input[name='bloque4_40']:radio").is(":checked")) {
            Swal.fire({
                title: "Pregunta 40 sin Contestar",
                icon: "warning",
                showConfirmButton: false,
                backdrop: "rgba(0,0,0,0.0)",
                timer: 1000
            });
            return false;
        }


        Swal.fire({
            title: "¿Guardar Examen Psicológico?",
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
                    url: "php/datos_psicologia.php",
                    type: 'POST',
                    data: form_psicologia.serialize(),
                    success: function (respuesta) {
                        swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: (respuesta),
                            showConfirmButton: false,
                            timer: 1500
                        })
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
                form_psicologia[0].reset()
            }
        });
    })
})
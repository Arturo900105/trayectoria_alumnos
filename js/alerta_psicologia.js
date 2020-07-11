let valor, nuevoValor;
let b1_01, b1_02, b1_03, b1_04, b1_05, b1_06, b1_07, b1_08, b1_09, b1_10;
let b2_11, b2_12, b2_13, b2_14, b2_15, b2_16, b2_17, b2_18, b2_19, b2_20;
let b3_21, b3_22, b3_23, b3_24, b3_25, b3_26, b3_27, b3_28, b3_29, b3_30;
let b4_31, b4_32, b4_33, b4_34, b4_35, b4_36, b4_37, b4_38, b4_39, b4_40;
let bloque1, bloque2, bloque3, bloque4;
let vbloque1, vbloque2, vbloque3, vbloque4;

$(document).ready(function () {
    $("#alumno-psicologia")[0].reset()
    $("#cual, #porque").hide()

    $('#alumno-psicologia').on('click', function () {

        if ($("#respuesta1:radio").is(":checked")) {
            $("#cual").show()
        } else {
            $("#cual").hide()
        }

        if ($("#respuesta2:radio").is(":checked")) {
            $("#porque").show()
        } else {
            $("#porque").hide()
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
})
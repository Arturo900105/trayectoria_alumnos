<?php
    require('fpdf/fpdf.php');
    $pdf = new FPDF();
    $pdf->AddPage();

    class PDF extends FPDF{

        function Header(){
            $this->Image("../img/logo_TNM.png",15,10,0,25);
            $this->Image("../img/logo_ITSP.png",100,10,0, 25);
            $this->Image("../img/escudo_michoacan.png",170,10,0, 25);
        }

        function Footer(){
            $this->SetY(-18);
            $this->SetFont('Arial',"",10);
            $this->Cell(0,0,utf8_decode('Carretera: Uruapan-Carapan; Km. 31.5; CP. 60270; Cherán, Mich.'),0,1,"C");

            $this->SetY(-14);
            $this->Cell(0,0,utf8_decode('Tels. 01(443) 292 1023 y (443) 292 1026; e-mail: its-purhepecha@its-purhepecha.edu.mx'),0,1,"C");

            $this->SetY(-10);
            $this->SetFont('Arial',"B",10);
            $this->Cell(0,0,utf8_decode("www.tecnm.mx | www.its-purhepecha.edu.mx"),0,0,"C");
        }
    }

    $postFolio = $_GET["folio"];
    require "../php/BD_Connect.php";
    $consultCanali = "SELECT * FROM canalizacion WHERE folio = '$postFolio'";
    $resulCanali = mysqli_query($connect, $consultCanali);
    $fila = $resulCanali -> fetch_assoc();


    $pdf = new PDF("P", "mm","letter");
    $pdf->AddPage();
    $pdf->SetLeftMargin(20);
    $pdf->SetRightMargin(20);
    $pdf->SetFont('Arial', 'B', 14);
    $pdf->Ln(27);
    $pdf->Cell(0, 7, utf8_decode('PROGRAMA DE TUTORÍA ACADÉMICA'), 0, 1,"C");
    $pdf->Cell(0, 7, utf8_decode('CANALIZACIÓN DE TUTORADO'), 0, 1,"C");
    $pdf->Ln(5);

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(13, 7, "Folio:", 0, 0,"L");
    $pdf->SetTextColor(243,0,33);
    $pdf->Cell(30, 7, utf8_decode($fila["folio"]), 1, 0,"C");
    $pdf->Cell(35, 7, "", 0, 0,"C");
    $pdf->SetTextColor(0,0,0);
    $pdf->Cell(20, 7, "Fecha:", 0, 0,"R");
    $pdf->Cell(0, 5, utf8_decode($fila["fecha"]), "B", 1,"C");
    $pdf->Ln(7);

    $pdf->Cell(46, 5, utf8_decode('Nombre del Estudiante:'), 0, 0,"L");
    $pdf->Cell(0, 5, utf8_decode($fila["nom_estudiante"]), "B", 1,"C");
    $pdf->Ln(4);

    $pdf->Cell(24, 5, utf8_decode('Carrera:'), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IGEM:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["igem"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IIND:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["iind"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('ISIC:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["isic"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IBIO:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["ibio"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IIAS:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["iias"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IENR:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["ienr"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IFOR:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["ifor"]), 0, 0,"L");

    $pdf->SetFont('Arial', '', 11);
    $pdf->Cell(14, 5, utf8_decode('IAGR:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 11);
    $pdf->Cell(5, 5, utf8_decode($fila["iagr"]), 0, 1,"L");

    $pdf->Ln(4);

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(30, 5, utf8_decode('No. de Control:'), 0, 0,"L");
    $pdf->Cell(25, 5, utf8_decode($fila["num_control"]), "B", 0,"C");
    $pdf->Cell(28, 5, utf8_decode('Semestre:'), 0, 0,"R");
    $pdf->Cell(10, 5, utf8_decode($fila["semestre"]), "B", 0,"C");
    $pdf->Cell(35, 5, utf8_decode('Ciclo Escolar:'), 0, 0,"R");
    $pdf->Cell(0, 5, utf8_decode($fila["ciclo_escolar"]), "B", 1,"C");
    $pdf->Ln(8);

    $pdf->Cell(0, 5, utf8_decode('Tipo de Canalización:'), 0, 1,"L");
    $pdf->Ln(4);

    $pdf->Cell(40, 5, utf8_decode('Psicológica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",60,107.8,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode($fila["canalizacion_psicologica"]), 0, 0,"C");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(36, 5, utf8_decode('Pedagógica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",101,107.8,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode($fila["canalizacion_pedagogica"]), 0, 0,"C");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(52, 5, utf8_decode('Asesoría Académica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",158,107.8,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode($fila["canalizacion_ases_acad"]), 0, 0,"C");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(28, 5, utf8_decode('Médica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",191,107.8,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode($fila["canalizacion_medica"]), 0, 1,"C");
    $pdf->Ln(4);

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(34, 5, utf8_decode('Otra:'), 0, 0,"R");
    $pdf->Cell(60, 5, utf8_decode($fila["otra_canalizacion"]), "B", 1,"C");
    $pdf->Ln(7);

    $pdf->Cell(0, 5, utf8_decode('Descripción de la Problemática:'), 0, 1,"L");
    $pdf->Image("../img/lineas.png",20,133,175,55);
    $pdf->MultiCell(0,6,utf8_decode($fila["des_problematica"]),0,"J");
    $pdf->Ln(60);

    $pdf->Cell(75, 10, utf8_decode('Firma del Tutor/Profesor:'), 0, 0,"C");
    $pdf->Cell(15, 10, utf8_decode(""), 0, 0,"C");
    $pdf->MultiCell(0, 5, utf8_decode('Firma de Coordinación de Tutorías por programa educativo:'), 0, "C");
    $pdf->Ln(5);

    $pdf->Cell(75, 5, utf8_decode($fila["firma_tutor"]), "B", 0,"C");
    $pdf->Cell(15, 5, "", 0, 0,"C");
    $pdf->Cell(0, 5, utf8_decode($fila["firma_ctpe"]), "B", 0,"C");
    $pdf->Ln(20);

    $pdf->Cell(0, 5, utf8_decode('Firma del encargado del área canalizada:'), 0, 1,"C");
    $pdf->Ln(5);
    $pdf->SetX(53);
    $pdf->Cell(105, 5, utf8_decode($fila["firma_encargado_ac"]), "B", 1,"C");
    $pdf->Output();
?>

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
    $pdf->Cell(13, 7, utf8_decode('Folio:'), 0, 0,"L");
    $pdf->Cell(30, 7, utf8_decode(''), 1, 0,"C");
    $pdf->Cell(70, 7, utf8_decode(''), 0, 0,"C");
    $pdf->Cell(20, 7, utf8_decode('Fecha:'), 0, 0,"R");
    $pdf->Cell(0, 7, utf8_decode(''), "B", 1,"C");
    $pdf->Ln(5);

    $pdf->Cell(46, 5, utf8_decode('Nombre del Estudiante:'), 0, 0,"L");
    $pdf->Cell(0, 5, utf8_decode(''), "B", 1,"C");
    $pdf->Ln(4);

    $pdf->Cell(32, 5, utf8_decode('Carrera:'), 0, 0,"L");

    $pdf->Cell(18, 5, utf8_decode('IGEM:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"L");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(18, 5, utf8_decode('IIND:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"L");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(18, 5, utf8_decode('ISIC:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"L");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(18, 5, utf8_decode('IBIO:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"L");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(18, 5, utf8_decode('IIAS:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"L");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(18, 5, utf8_decode('IENR:'), 0, 0,"R");
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 1,"L");
    $pdf->Ln(4);

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(30, 5, utf8_decode('No. de Control:'), 0, 0,"L");
    $pdf->Cell(25, 5, utf8_decode(''), "B", 0,"C");
    $pdf->Cell(28, 5, utf8_decode('Semestre:'), 0, 0,"R");
    $pdf->Cell(10, 5, utf8_decode(''), "B", 0,"C");
    $pdf->Cell(35, 5, utf8_decode('Ciclo Escolar:'), 0, 0,"R");
    $pdf->Cell(0, 5, utf8_decode(''), "B", 1,"C");
    $pdf->Ln(8);

    $pdf->Cell(0, 5, utf8_decode('Tipo de Canalización:'), 0, 1,"L");
    $pdf->Ln(4);

    $pdf->Cell(40, 5, utf8_decode('Psicológica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",60,108,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"C");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(36, 5, utf8_decode('Pedagógica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",101,108,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"C");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(52, 5, utf8_decode('Asesoría Académica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",158,108,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 0,"C");

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(28, 5, utf8_decode('Médica:'), 0, 0,"R");
    $pdf->Image("../img/cuadroito.png",191,108,5,5);
    $pdf->SetFont('Arial', 'B', 12);
    $pdf->Cell(5, 5, utf8_decode(''), 0, 1,"C");
    $pdf->Ln(4);

    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(34, 5, utf8_decode('Otra:'), 0, 0,"R");
    $pdf->Cell(60, 5, utf8_decode(""), "B", 1,"C");
    $pdf->Ln(7);

    $pdf->Cell(0, 5, utf8_decode('Descripción de la Problemática:'), 0, 1,"L");
    $pdf->Image("../img/lineas.png",20,133,175,55);
    $pdf->MultiCell(0,6,utf8_decode(""),0,"J");
    $pdf->Ln(60);

    $pdf->Cell(75, 10, utf8_decode('Firma del Tutor/Profesor'), 0, 0,"C");
    $pdf->Cell(15, 10, utf8_decode(''), 0, 0,"C");
    $pdf->MultiCell(0, 5, utf8_decode('Firma de Coordinación de Tutorías por programa educativo'), 0, "C");
    $pdf->Ln(5);

    $pdf->Cell(75, 5, utf8_decode(''), "B", 0,"C");
    $pdf->Cell(15, 5, utf8_decode(''), 0, 0,"C");
    $pdf->Cell(0, 5, utf8_decode(''), "B", 0,"C");
    $pdf->Ln(20);

    $pdf->Cell(0, 5, utf8_decode('Firma del encargado del área canalizada'), 0, 1,"C");
    $pdf->Ln(5);
    $pdf->SetX(54);
    $pdf->Cell(100, 5, utf8_decode(''), "B", 1,"C");
    $pdf->Output();
?>

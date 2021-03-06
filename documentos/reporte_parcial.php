<?php
require('fpdf/fpdf.php');
$pdf = new FPDF();
$pdf->AddPage();

    class PDF extends FPDF{

        function Header(){
            $this->SetTopMargin(1);
            $this->SetLeftMargin(2);
            $this->SetRightMargin(2);
            $this->Image("../img/logo_ITSP.png",2.6,1,0, 2);
            $this->Cell(4,2,"",1,0,"C");

            $this->SetFont("Times","B",10);
            $this->MultiCell(7,0.5,utf8_decode('Formato para el Reporte Parcial del Programa Institucional de Tutorías'),1,"L",0);

            $this->SetXY(13,1);
            $this->SetFont('Times',"B",10);
            $this->Cell(6.6,0.5,utf8_decode("Código: TecNM-AC-PO-003-02"),1,0, "C");

            $this->SetXY(13,1.5);
            $this->SetFont('Times',"B",10);
            $this->Cell(6.6,0.5,utf8_decode("Revisión: 0"),1,0, "C");

            $this->SetXY(6,2);
            $this->SetFont('Times',"B",10);
            $this->MultiCell(7,0.5,utf8_decode("Referencia a la Norma ISO 9001:2008 7.1, 7.2.1, 7.5.1, 7.6, 8.1, 8.2.4"),1,"L",0);

            $this->SetXY(13,2);
            $this->SetFont('Times',"B",14);
            $this->Cell(6.6,1,utf8_decode("Página ").$this->PageNo().'de 1',1,1, "C");
        }
    }

$pdf = new PDF("P", "cm","letter");
$pdf->AddPage();
$pdf->SetLeftMargin(2);
$pdf->SetRightMargin(2);
$pdf->SetAutoPageBreak(1);
$pdf->SetFont('Arial', 'B', 14);
$pdf->Ln(.5);

$pdf->Cell(0, 0.7, utf8_decode("INSTITUTO TECNOLÓGICO SUPERIOR P'URHÉPECHA"), 0, 1,"C");
$pdf->Cell(0, 0.7, utf8_decode('DIRECCIÓN ACADÉMICA'), 0, 1,"C");
$pdf->Ln(.5);

$pdf->SetFont('Arial', '', 14);
$pdf->Cell(0, 0.7, utf8_decode('PROGRAMA INSTITUCIONAL DE TUTORÍAS'), 0, 1,"C");
$pdf->Ln(.3);

$pdf->SetFont('Arial', 'B', 12);
$pdf->SetX(4.2);
$pdf->Cell(6, 0.7, utf8_decode('PERIODO A EVALUAR:'), 0, 0,"R");
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(6, 0.7, utf8_decode(''), "B", 1,"C");
$pdf->Ln(.3);

$pdf->SetFont('Arial', 'B', 12);
$pdf->SetX(5.6);
$pdf->Cell(3, 0.8, utf8_decode('REPORTE:'), 0, 0,"L");
$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0.9, 0.8, utf8_decode(''), 1, 0,"C");
$pdf->Cell(0.4, 0.8, "", 0, 0,"C");
$pdf->Cell(0.9, 0.8, utf8_decode(''), 1, 0,"C");
$pdf->Cell(0.4, 0.8, "", 0, 0,"C");
$pdf->Cell(0.9, 0.8, utf8_decode(''), 1, 0,"C");
$pdf->SetFont('Arial', 'B', 12);
$pdf->Cell(3.7, 0.8, utf8_decode('DE TUTORÍAS'), 0, 1,"R");
$pdf->Ln(1);

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(3.7, 0.6, utf8_decode("Nombre del Tutor:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(3.7, 0.6, utf8_decode("Semestre/Grupo:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(3.7, 0.6, utf8_decode("Programa:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(7, 0.6, utf8_decode("Núm. total de tutorados asignados:"), 1, 0,"L");
$pdf->Cell(7, 0.6, utf8_decode(""), 1, 0,"C");
$pdf->SetFont('Arial', '', 10.5);
$pdf->MultiCell(0,0.4,utf8_decode("Reuniones efectuadas en el periodo:"),1,"C",0);

$pdf->SetY(11.6);
$pdf->Cell(3.7,4.2,"",1);

$pdf->SetFont('Arial', '', 12);
$pdf->SetY(12.6);
$pdf->MultiCell(3.7,.5,utf8_decode("Núm./Porcentaje de estudiantes no acreditados:
(Por asignatura)."),0,"L",0);

$pdf->SetXY(5.7,11.6);
$pdf->Cell(6.5,0.6,utf8_decode("Nombre de la Asignatura:"),1,1,"C");

$pdf->SetXY(12.2,11.6);
$pdf->Cell(1.8,0.6,utf8_decode("Num."),1,1,"C");

$pdf->SetXY(14,11.6);
$pdf->Cell(2,0.6,utf8_decode("%"),1,1,"C");

$pdf->SetFont('Arial', '', 10);
$pdf->SetX(5.7);
$pdf->Cell(0.5,0.6,utf8_decode("1."),"B",0,"C");
$pdf->Cell(6,0.6,utf8_decode(""),"BR",0,"L");
$pdf->Cell(1.8,0.6,utf8_decode(""),"BR",0,"C");
$pdf->Cell(2,0.6,utf8_decode(""),"BR",1,"C");

$pdf->SetX(5.7);
$pdf->Cell(0.5,0.6,utf8_decode("2."),"B",0,"C");
$pdf->Cell(6,0.6,utf8_decode(""),"BR",0,"L");
$pdf->Cell(1.8,0.6,utf8_decode(""),"BR",0,"C");
$pdf->Cell(2,0.6,utf8_decode(""),"BR",1,"C");

$pdf->SetX(5.7);
$pdf->Cell(0.5,0.6,utf8_decode("3."),"B",0,"C");
$pdf->Cell(6,0.6,utf8_decode(""),"BR",0,"L");
$pdf->Cell(1.8,0.6,utf8_decode(""),"BR",0,"C");
$pdf->Cell(2,0.6,utf8_decode(""),"BR",1,"C");

$pdf->SetX(5.7);
$pdf->Cell(0.5,0.6,utf8_decode("4."),"B",0,"C");
$pdf->Cell(6,0.6,utf8_decode(""),"BR",0,"L");
$pdf->Cell(1.8,0.6,utf8_decode(""),"BR",0,"C");
$pdf->Cell(2,0.6,utf8_decode(""),"BR",1,"C");

$pdf->SetX(5.7);
$pdf->Cell(0.5,0.6,utf8_decode("5."),"B",0,"C");
$pdf->Cell(6,0.6,utf8_decode(""),"BR",0,"L");
$pdf->Cell(1.8,0.6,utf8_decode(""),"BR",0,"C");
$pdf->Cell(2,0.6,utf8_decode(""),"BR",1,"C");

$pdf->SetX(5.7);
$pdf->Cell(0.5,0.6,utf8_decode("6."),"B",0,"C");
$pdf->Cell(6,0.6,utf8_decode(""),"BR",0,"L");
$pdf->Cell(1.8,0.6,utf8_decode(""),"BR",0,"C");
$pdf->Cell(2,0.6,utf8_decode(""),"BR",1,"C");

$pdf->SetFont('Arial', '', 50);
$pdf->SetXY(16,12.2);
$pdf->Cell(3.59,3.6,utf8_decode(""),1,1,"C");
$pdf->Ln(0);

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(8.7, 0.6, utf8_decode("Núm. de estudiantes becarios y tipo de beca:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(8.7, 0.6, utf8_decode("Núm. de estudiantes que desertaron:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");

$pdf->Cell(15, 0.6, utf8_decode("Núm. de canalizaciones a asesoría pares:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(15, 0.6, utf8_decode("Núm. de canalizaciones al área de psicología:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(15, 0.6, utf8_decode("Núm. de canalizaciones al consultorio médico:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");
$pdf->Cell(15, 0.6, utf8_decode("Núm. de canalizaciones al área de pedagogía:"), 1, 0,"L");
$pdf->Cell(0, 0.6, utf8_decode(""), 1, 1,"C");

$pdf->Cell(0, 0.6, utf8_decode("Problemática general detectada en el periodo:"), "LR", 1,"L");
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 0.6, utf8_decode(""), "LBR", 1,"C");

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 0.6, utf8_decode("Necesidades tutoriales específicas:"), "LR", 1,"L");
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 0.6, utf8_decode(""), "LBR", 1,"C");

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 0.6, utf8_decode("En caso de existir desertores describir el motivo:"), "LR", 1,"L");
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 0.6, utf8_decode(""), "LBR", 1,"C");

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(0, 0.6, utf8_decode("Recomendaciones/Observaciones:"), "LR", 1,"L");
$pdf->SetFont('Arial', '', 10);
$pdf->Cell(0, 0.6, utf8_decode(""), "LBR", 1,"C");

$pdf->SetFont('Arial', '', 12);
$pdf->Cell(9, 1.5, utf8_decode("Firma del Tutor"), "LR", 0,"C");
$pdf->MultiCell(0,0.5,utf8_decode("Vo. Bo.
Coordinadora(or) Institucional de Tutoría Académica"),"LR","C",0);
$pdf->Cell(9, 0.6, utf8_decode(""), "LBR", 0,"C");
$pdf->Cell(0, 0.6, utf8_decode(""), "LBR", 0,"C");
$pdf->Output();
?>
-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-10-2020 a las 09:24:51
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trayectoria_alumnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

CREATE TABLE `alumno` (
  `num_ficha` varchar(7) NOT NULL,
  `fecha_registro` text DEFAULT NULL,
  `apellidos` text DEFAULT NULL,
  `nombre` text DEFAULT NULL,
  `fecha_de_nacimiento` date DEFAULT NULL,
  `sexo` varchar(9) DEFAULT NULL,
  `indigena` varchar(3) DEFAULT NULL,
  `edad` int(2) DEFAULT NULL,
  `edo_civil` varchar(10) DEFAULT NULL,
  `tel_cel` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `fecha_ficha` date DEFAULT NULL,
  `carrera` varchar(4) DEFAULT NULL,
  `generacion` int(4) DEFAULT NULL,
  `id_tutor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`num_ficha`, `fecha_registro`, `apellidos`, `nombre`, `fecha_de_nacimiento`, `sexo`, `indigena`, `edad`, `edo_civil`, `tel_cel`, `email`, `fecha_ficha`, `carrera`, `generacion`, `id_tutor`) VALUES
('20-0011', 'Jueves, 24 de Septiembre de 2020', 'Velázquez Fonseca', 'Gabriela', '1996-01-22', 'Femenino', 'No', 23, 'Casada', '7224139697', 'gaby_velafons@outlook.com', '2020-04-08', 'ISIC', 2016, 0),
('20-0013', 'Jueves, 24 de Septiembre de 2020', 'Sánchez Fonseca', 'Gabriel Abraham', '1994-10-22', 'Masculino', 'No', 25, 'Soltero', '5540734715', 'ga.sanzfons@gmail.com', '2020-04-07', 'ISIC', 2015, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_domicilio`
--

CREATE TABLE `alumno_domicilio` (
  `num_ficha` varchar(7) DEFAULT NULL,
  `domicilio` text DEFAULT NULL,
  `colonia` text DEFAULT NULL,
  `codigo_postal` int(5) DEFAULT NULL,
  `localidad` text DEFAULT NULL,
  `procedencia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno_domicilio`
--

INSERT INTO `alumno_domicilio` (`num_ficha`, `domicilio`, `colonia`, `codigo_postal`, `localidad`, `procedencia`) VALUES
('20-0013', 'Fco. González Bocanegra #592', 'Villicaña', 60280, 'Nahuatzen', 'Nahuatzen; Mich.'),
('20-0011', 'Privada Primero de mayo #22', 'Xonacatlán de Vicencio', 52060, 'Xonacatlán', 'Xonacatlán; Edo. Méx.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno_procedencia`
--

CREATE TABLE `alumno_procedencia` (
  `num_ficha` varchar(7) DEFAULT NULL,
  `bach` text DEFAULT NULL,
  `tipo_bach` text DEFAULT NULL,
  `nom_bach` text DEFAULT NULL,
  `promedio_bach` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno_procedencia`
--

INSERT INTO `alumno_procedencia` (`num_ficha`, `bach`, `tipo_bach`, `nom_bach`, `promedio_bach`) VALUES
('20-0013', 'CBTA', '─> Físico-Matemático.\n─> Químico-Biológico.', 'CBTA No. 238', 8.5),
('20-0011', 'PREPARATORIA', '─> Económico-Administrativo.\n─> Histórico-Social.', 'Preparatoria No. 3 Plantel Xonacatlán', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canalizacion`
--

CREATE TABLE `canalizacion` (
  `folio` varchar(7) DEFAULT NULL,
  `fecha` text DEFAULT NULL,
  `hora` varchar(9) DEFAULT NULL,
  `nom_estudiante` text DEFAULT NULL,
  `igem` varchar(1) DEFAULT NULL,
  `iind` varchar(1) DEFAULT NULL,
  `isic` varchar(1) DEFAULT NULL,
  `ibio` varchar(1) DEFAULT NULL,
  `iias` varchar(1) DEFAULT NULL,
  `ienr` varchar(1) DEFAULT NULL,
  `ifor` varchar(1) DEFAULT NULL,
  `iagr` varchar(1) DEFAULT NULL,
  `num_control` varchar(7) DEFAULT NULL,
  `semestre` int(2) DEFAULT NULL,
  `ciclo_escolar` text DEFAULT NULL,
  `canalizacion_psicologica` varchar(1) DEFAULT NULL,
  `canalizacion_pedagogica` varchar(1) DEFAULT NULL,
  `canalizacion_ases_acad` varchar(1) DEFAULT NULL,
  `canalizacion_medica` varchar(1) DEFAULT NULL,
  `otra_canalizacion` text DEFAULT NULL,
  `des_problematica` text DEFAULT NULL,
  `firma_tutor` text DEFAULT NULL,
  `firma_ctpe` text DEFAULT NULL,
  `firma_encargado_ac` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `canalizacion`
--

INSERT INTO `canalizacion` (`folio`, `fecha`, `hora`, `nom_estudiante`, `igem`, `iind`, `isic`, `ibio`, `iias`, `ienr`, `ifor`, `iagr`, `num_control`, `semestre`, `ciclo_escolar`, `canalizacion_psicologica`, `canalizacion_pedagogica`, `canalizacion_ases_acad`, `canalizacion_medica`, `otra_canalizacion`, `des_problematica`, `firma_tutor`, `firma_ctpe`, `firma_encargado_ac`) VALUES
('0320001', '01-09-2020', NULL, 'Gabriel Abraham Sánchez Fonseca', '', '', 'X', '', '', '', '', '', '1503080', 4, 'Enero - Junio', '', '', 'X', '', '', 'Problema con la materia de Contabilidad Financiera', 'Elpidio Jiménez Cruz', 'María Janacua Benites', 'Miriam Rodríguez Madrigal'),
('0720001', '01-09-2020', NULL, 'Gabriel Abraham Sánchez Fonseca', '', '', '', '', '', '', 'X', '', '1507080', 5, 'Agosto - Diciembre', '', '', '', 'X', '', 'Alergia a algunos fertilizantes', 'Elpidio Jiménez Cruz', 'María Janacua Benites', 'Arturo Sánchez Fonseca'),
('0320002', 'Jueves, 10 de Septiembre de 2020', NULL, 'Gabriel Abraham Sánchez Fonseca', '', '', 'X', '', '', '', '', '', '1503080', 4, 'Enero - Junio', '', '', 'X', '', '', 'DIFICULTAD CON LA MATERIA DE CONTABILIDAD FINANCIERA', 'Elpidio Jiménez Cruz', 'María Janacua Benites', 'Miriam Rodríguez Madrigal');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coordinador`
--

CREATE TABLE `coordinador` (
  `id_coordinador` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `apellidos` text DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `coordinacion` varchar(4) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `fecha_registro` text DEFAULT NULL,
  `hora_registro` varchar(9) DEFAULT NULL,
  `usuario` text DEFAULT NULL,
  `pass_coord` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `coordinador`
--

INSERT INTO `coordinador` (`id_coordinador`, `nombre`, `apellidos`, `sexo`, `coordinacion`, `email`, `fecha_registro`, `hora_registro`, `usuario`, `pass_coord`) VALUES
(2, 'Arturo', 'Sánchez Fonseca', 'M', 'ISIC', 'fonck.five@gmail.com', 'Lunes, 28 de Septiembre de 2020', '01:42 pm.', 'a.sanchezf_03', 5504),
(3, 'María', 'Janacua Benites', 'F', 'IIND', 'vientoafavor@hotmail.com', 'Viernes, 2 de Octubre de 2020', '11:18 pm.', 'm.janacuab_02', 9197);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `num_control_alumno`
--

CREATE TABLE `num_control_alumno` (
  `num_control` varchar(7) NOT NULL,
  `num_ficha` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_final`
--

CREATE TABLE `reporte_final` (
  `id_rfinal` int(11) NOT NULL,
  `fecha_final` text DEFAULT NULL,
  `hora_final` varchar(9) DEFAULT NULL,
  `periodo_final` text DEFAULT NULL,
  `nombre_tutor` text DEFAULT NULL,
  `sem_grupf` varchar(6) DEFAULT NULL,
  `programa_final` text DEFAULT NULL,
  `tutf_asignado` int(2) DEFAULT NULL,
  `asignatura_f1` text DEFAULT NULL,
  `reprobado_f1` varchar(2) DEFAULT NULL,
  `por_reprobadof1` varchar(6) DEFAULT NULL,
  `asignatura_f2` text DEFAULT NULL,
  `reprobado_f2` varchar(2) DEFAULT NULL,
  `por_reprobadof2` varchar(6) DEFAULT NULL,
  `asignatura_f3` text DEFAULT NULL,
  `reprobado_f3` varchar(2) DEFAULT NULL,
  `por_reprobadof3` varchar(6) DEFAULT NULL,
  `asignatura_f4` text DEFAULT NULL,
  `reprobado_f4` varchar(2) DEFAULT NULL,
  `por_reprobadof4` varchar(6) DEFAULT NULL,
  `asignatura_f5` text DEFAULT NULL,
  `reprobado_f5` varchar(2) DEFAULT NULL,
  `por_reprobadof5` varchar(6) DEFAULT NULL,
  `asignatura_f6` text DEFAULT NULL,
  `reprobado_f6` varchar(2) DEFAULT NULL,
  `por_reprobadof6` varchar(6) DEFAULT NULL,
  `reunion_efectuada` int(3) DEFAULT NULL,
  `alumno_becado` text DEFAULT NULL,
  `alumno_desertado` int(3) DEFAULT NULL,
  `num_aseparf` int(3) DEFAULT NULL,
  `num_psicologiaf` int(3) DEFAULT NULL,
  `num_medicaf` int(3) DEFAULT NULL,
  `num_pedagogica` int(3) DEFAULT NULL,
  `problematica` text DEFAULT NULL,
  `necesidades` text DEFAULT NULL,
  `desertados` text DEFAULT NULL,
  `recomobser` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reporte_final`
--

INSERT INTO `reporte_final` (`id_rfinal`, `fecha_final`, `hora_final`, `periodo_final`, `nombre_tutor`, `sem_grupf`, `programa_final`, `tutf_asignado`, `asignatura_f1`, `reprobado_f1`, `por_reprobadof1`, `asignatura_f2`, `reprobado_f2`, `por_reprobadof2`, `asignatura_f3`, `reprobado_f3`, `por_reprobadof3`, `asignatura_f4`, `reprobado_f4`, `por_reprobadof4`, `asignatura_f5`, `reprobado_f5`, `por_reprobadof5`, `asignatura_f6`, `reprobado_f6`, `por_reprobadof6`, `reunion_efectuada`, `alumno_becado`, `alumno_desertado`, `num_aseparf`, `num_psicologiaf`, `num_medicaf`, `num_pedagogica`, `problematica`, `necesidades`, `desertados`, `recomobser`) VALUES
(1, 'Viernes, 25 de Septiembre de 2020', '02:54 pm.', 'Enero - Junio', 'Gabriel Abraham Sánchez Fonseca', '4° \"B\"', 'Ingeniería en Sistemas Computacionales', 35, 'Tópicos Avanzados de Programación', '3', '8.57%', 'Métodos Numéricos', '4', '11.43%', '', '', '', '', '', '', '', '', '', '', '', '', 2, '0, ', 2, 2, 3, 4, 5, 'NINGUNO NINGUNO NINGUNO', 'NINGUNO NINGUNO NINGUNO', 'NINGUNO NINGUNO NINGUNO', 'NINGUNO NINGUNO NINGUNO');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reporte_parcial`
--

CREATE TABLE `reporte_parcial` (
  `id_rparcial` int(11) NOT NULL,
  `fecha` text DEFAULT NULL,
  `hora` varchar(9) DEFAULT NULL,
  `periodo` text DEFAULT NULL,
  `reporte1` varchar(1) DEFAULT NULL,
  `reporte2` varchar(1) DEFAULT NULL,
  `reporte3` varchar(1) DEFAULT NULL,
  `nom_tutor` text DEFAULT NULL,
  `semestre_grupo` varchar(6) DEFAULT NULL,
  `programa` text DEFAULT NULL,
  `tutorado_asignado` int(2) DEFAULT NULL,
  `asignatura1` text DEFAULT NULL,
  `num_asignatura1` varchar(2) DEFAULT NULL,
  `por_asignatura1` varchar(6) DEFAULT NULL,
  `asignatura2` text DEFAULT NULL,
  `num_asignatura2` varchar(2) DEFAULT NULL,
  `por_asignatura2` varchar(6) DEFAULT NULL,
  `asignatura3` text DEFAULT NULL,
  `num_asignatura3` varchar(2) DEFAULT NULL,
  `por_asignatura3` varchar(6) DEFAULT NULL,
  `asignatura4` text DEFAULT NULL,
  `num_asignatura4` varchar(2) DEFAULT NULL,
  `por_asignatura4` varchar(6) DEFAULT NULL,
  `asignatura5` text DEFAULT NULL,
  `num_asignatura5` varchar(2) DEFAULT NULL,
  `por_asignatura5` varchar(6) DEFAULT NULL,
  `asignatura6` text DEFAULT NULL,
  `num_asignatura6` varchar(2) DEFAULT NULL,
  `por_asignatura6` varchar(6) DEFAULT NULL,
  `reuniones_efectuadas` int(3) DEFAULT NULL,
  `alumnbecado` text DEFAULT NULL,
  `alumndesertado` int(3) DEFAULT NULL,
  `num_asepar` int(3) DEFAULT NULL,
  `num_psicologia` int(3) DEFAULT NULL,
  `num_medica` int(3) DEFAULT NULL,
  `num_pedagogica` int(3) DEFAULT NULL,
  `problematica` text DEFAULT NULL,
  `necesidades` text DEFAULT NULL,
  `desertores` text DEFAULT NULL,
  `recomendacion_observacion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reporte_parcial`
--

INSERT INTO `reporte_parcial` (`id_rparcial`, `fecha`, `hora`, `periodo`, `reporte1`, `reporte2`, `reporte3`, `nom_tutor`, `semestre_grupo`, `programa`, `tutorado_asignado`, `asignatura1`, `num_asignatura1`, `por_asignatura1`, `asignatura2`, `num_asignatura2`, `por_asignatura2`, `asignatura3`, `num_asignatura3`, `por_asignatura3`, `asignatura4`, `num_asignatura4`, `por_asignatura4`, `asignatura5`, `num_asignatura5`, `por_asignatura5`, `asignatura6`, `num_asignatura6`, `por_asignatura6`, `reuniones_efectuadas`, `alumnbecado`, `alumndesertado`, `num_asepar`, `num_psicologia`, `num_medica`, `num_pedagogica`, `problematica`, `necesidades`, `desertores`, `recomendacion_observacion`) VALUES
(1, 'Viernes, 25 de Septiembre de 2020', '08:09 pm.', 'Agosto - Diciembre', '1', '-', '-', 'Gabriel Abraham Sánchez Fonseca', '1° \"B\"', 'Ingeniería en Sistemas Computacionales', 35, 'Fundamentos de Programación', '4', '11.43%', 'Calculo Diferencial', '3', '8.57%', '', '', '', '', '', '', '', '', '', '', '', '', 3, '20, Beca de Transporte', 0, 10, 3, 7, 11, 'NO NINGUNO 1', 'NO NINGUNO 2', 'NO NINGUNO 3', 'NO NINGUNO 4'),
(2, 'Viernes, 25 de Septiembre de 2020', '10:13 pm.', 'Agosto - Diciembre', '-', '2', '-', 'Gabriel Abraham Sánchez Fonseca', '1° \"B\"', 'Ingeniería en Sistemas Computacionales', 35, 'Taller de Administración', '4', '11.43%', 'Matemáticas Discretas', '2', '5.71%', '', '', '', '', '', '', '', '', '', '', '', '', 3, '0', 0, 1, 2, 3, 4, 'NO NINGUNO 1', 'NO NINGUNO 2', 'NO NINGUNO 3', 'NO NINGUNO 4'),
(3, 'Viernes, 25 de Septiembre de 2020', '10:39 pm.', 'Enero - Junio', '-', '-', '3', 'Gabriel Abraham Sánchez Fonseca', '2° \"B\"', 'Ingeniería en Sistemas Computacionales', 35, 'Calculo Integral', '3', '8.57%', 'Probabilidad y Estadísticas', '4', '11.43%', '', '', '', '', '', '', '', '', '', '', '', '', 3, '30, Beca de Transporte', 0, 3, 4, 5, 6, 'No, ninguno', 'No, ninguno', 'No, ninguno', 'No, ninguno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_medica`
--

CREATE TABLE `tabla_medica` (
  `num_ficha` varchar(7) DEFAULT NULL,
  `peso` text DEFAULT NULL,
  `estatura` text DEFAULT NULL,
  `tipo_sangre` text DEFAULT NULL,
  `antes_hered` text DEFAULT NULL,
  `toxicomanias` varchar(3) DEFAULT NULL,
  `tipo_toxicomanias` text DEFAULT NULL,
  `frecuencia` text DEFAULT NULL,
  `embarazo` varchar(3) DEFAULT NULL,
  `tiempo_embarazo` text DEFAULT NULL,
  `act_fisica` varchar(3) DEFAULT NULL,
  `actividad` text DEFAULT NULL,
  `tiempo` text DEFAULT NULL,
  `alergias` varchar(3) DEFAULT NULL,
  `desc_alergias` text DEFAULT NULL,
  `quir_cir` varchar(3) DEFAULT NULL,
  `transfusionales` varchar(3) DEFAULT NULL,
  `diabetes` varchar(3) DEFAULT NULL,
  `tipo_diabetes` text DEFAULT NULL,
  `hipertencion` varchar(3) DEFAULT NULL,
  `convulsiones` varchar(3) DEFAULT NULL,
  `asma` varchar(3) DEFAULT NULL,
  `tels_emergencia` text DEFAULT NULL,
  `contestado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_pedagogia`
--

CREATE TABLE `tabla_pedagogia` (
  `num_ficha` varchar(7) DEFAULT NULL,
  `isea_1` int(1) DEFAULT NULL,
  `isea_2` int(1) DEFAULT NULL,
  `isea_3` int(1) DEFAULT NULL,
  `isea_4` int(1) DEFAULT NULL,
  `isea_5` int(1) DEFAULT NULL,
  `isea_6` int(1) DEFAULT NULL,
  `isea_7` int(1) DEFAULT NULL,
  `isea_8` int(1) DEFAULT NULL,
  `isea_9` int(1) DEFAULT NULL,
  `isea_10` int(1) DEFAULT NULL,
  `isea_11` int(1) DEFAULT NULL,
  `isea_12` int(1) DEFAULT NULL,
  `isea_13` int(1) DEFAULT NULL,
  `isea_14` int(1) DEFAULT NULL,
  `isea_15` int(1) DEFAULT NULL,
  `isea_16` int(1) DEFAULT NULL,
  `isea_17` int(1) DEFAULT NULL,
  `isea_18` int(1) DEFAULT NULL,
  `isea_19` int(1) DEFAULT NULL,
  `isea_20` int(1) DEFAULT NULL,
  `isea_21` int(1) DEFAULT NULL,
  `aprendizaje_visual` int(2) DEFAULT NULL,
  `aprendizaje_auditivo` int(2) DEFAULT NULL,
  `aprendizaje_kinestesico` int(2) DEFAULT NULL,
  `organizacion_estudio` int(2) DEFAULT NULL,
  `tecnicas_estudio` int(2) DEFAULT NULL,
  `motivacion_estudio` int(2) DEFAULT NULL,
  `preguntas_oe` text DEFAULT NULL,
  `preguntas_te` text DEFAULT NULL,
  `preguntas_me` text DEFAULT NULL,
  `contestado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_posttest`
--

CREATE TABLE `tabla_posttest` (
  `num_control` varchar(7) NOT NULL,
  `semestre` text DEFAULT NULL,
  `a_1` int(1) DEFAULT NULL,
  `a_2` int(1) DEFAULT NULL,
  `a_3` int(1) DEFAULT NULL,
  `a_4` int(1) DEFAULT NULL,
  `a_5` int(1) DEFAULT NULL,
  `a_6` int(1) DEFAULT NULL,
  `a_7` int(1) DEFAULT NULL,
  `d_1` int(1) DEFAULT NULL,
  `d_2` int(1) DEFAULT NULL,
  `d_3` int(1) DEFAULT NULL,
  `d_4` int(1) DEFAULT NULL,
  `d_5` int(1) DEFAULT NULL,
  `d_6` int(1) DEFAULT NULL,
  `d_7` int(1) DEFAULT NULL,
  `ansiedad` int(2) DEFAULT NULL,
  `depresion` int(2) DEFAULT NULL,
  `suma_ad` int(2) DEFAULT NULL,
  `contestado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_psicologia`
--

CREATE TABLE `tabla_psicologia` (
  `num_ficha` varchar(7) DEFAULT NULL,
  `pregunta1` varchar(3) DEFAULT NULL,
  `respuesta1` text DEFAULT NULL,
  `pregunta2` varchar(3) DEFAULT NULL,
  `respuesta2` text DEFAULT NULL,
  `a_1` int(1) DEFAULT NULL,
  `a_2` int(1) DEFAULT NULL,
  `a_3` int(1) DEFAULT NULL,
  `a_4` int(1) DEFAULT NULL,
  `a_5` int(1) DEFAULT NULL,
  `a_6` int(1) DEFAULT NULL,
  `a_7` int(1) DEFAULT NULL,
  `d_1` int(1) DEFAULT NULL,
  `d_2` int(1) DEFAULT NULL,
  `d_3` int(1) DEFAULT NULL,
  `d_4` int(1) DEFAULT NULL,
  `d_5` int(1) DEFAULT NULL,
  `d_6` int(1) DEFAULT NULL,
  `d_7` int(1) DEFAULT NULL,
  `ansiedad` int(2) DEFAULT NULL,
  `depresion` int(2) DEFAULT NULL,
  `suma_ad` int(2) DEFAULT NULL,
  `bloque1` int(2) DEFAULT NULL,
  `bloque2` int(2) DEFAULT NULL,
  `bloque3` int(2) DEFAULT NULL,
  `bloque4` int(2) DEFAULT NULL,
  `preguntas_bloque1` text DEFAULT NULL,
  `preguntas_bloque2` text DEFAULT NULL,
  `preguntas_bloque3` text DEFAULT NULL,
  `preguntas_bloque4` text DEFAULT NULL,
  `contestado` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_psicologia`
--

INSERT INTO `tabla_psicologia` (`num_ficha`, `pregunta1`, `respuesta1`, `pregunta2`, `respuesta2`, `a_1`, `a_2`, `a_3`, `a_4`, `a_5`, `a_6`, `a_7`, `d_1`, `d_2`, `d_3`, `d_4`, `d_5`, `d_6`, `d_7`, `ansiedad`, `depresion`, `suma_ad`, `bloque1`, `bloque2`, `bloque3`, `bloque4`, `preguntas_bloque1`, `preguntas_bloque2`, `preguntas_bloque3`, `preguntas_bloque4`, `contestado`) VALUES
('20-0013', 'NO', '----------', 'NO', '----------', 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 3, 4, 7, 4, 4, 4, 6, '01 02 06 10', '12 13 18 20', '21 23 28 29', '33 34 35 36 38 40', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_cappt`
--

CREATE TABLE `trayectoria_cappt` (
  `num_control` varchar(7) NOT NULL,
  `trabaja` varchar(3) DEFAULT NULL,
  `itsp_opcion` text DEFAULT NULL,
  `exani_ii` varchar(4) DEFAULT NULL,
  `cosnet` varchar(4) DEFAULT NULL,
  `hablante_pu` varchar(3) DEFAULT NULL,
  `discapacidad` text DEFAULT NULL,
  `diag_psicologico` text DEFAULT NULL,
  `diag_medico` text DEFAULT NULL,
  `riesgo_salud` text DEFAULT NULL,
  `estilo_aprendizaje` text DEFAULT NULL,
  `h_organizacion` varchar(3) DEFAULT NULL,
  `h_tecnicas` varchar(3) DEFAULT NULL,
  `h_motivacion` varchar(3) DEFAULT NULL,
  `o_vocacional` text DEFAULT NULL,
  `e_ortografia` text DEFAULT NULL,
  `e_redaccion` text DEFAULT NULL,
  `nombre_curso_1` text DEFAULT NULL,
  `resultado_1` int(3) DEFAULT NULL,
  `nombre_curso_2` text DEFAULT NULL,
  `resultado_2` int(3) DEFAULT NULL,
  `nombre_curso_3` text DEFAULT NULL,
  `resultado_3` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem1`
--

CREATE TABLE `trayectoria_sem1` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `becado` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ago_dic` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem2`
--

CREATE TABLE `trayectoria_sem2` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `becado` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ene_jun` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem3`
--

CREATE TABLE `trayectoria_sem3` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ago_dic` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem4`
--

CREATE TABLE `trayectoria_sem4` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ene_jun` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem5`
--

CREATE TABLE `trayectoria_sem5` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ago_dic` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem6`
--

CREATE TABLE `trayectoria_sem6` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `servicio_social` varchar(3) DEFAULT NULL,
  `lugar_servsocial` text DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ene_jun` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem7`
--

CREATE TABLE `trayectoria_sem7` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `servicio_social` varchar(3) DEFAULT NULL,
  `lugar_servsocial` text DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ago_dic` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem8`
--

CREATE TABLE `trayectoria_sem8` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `servicio_social` varchar(3) DEFAULT NULL,
  `lugar_servsocial` text DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ene_jun` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_sem9`
--

CREATE TABLE `trayectoria_sem9` (
  `num_control` varchar(7) NOT NULL,
  `ingles` varchar(3) DEFAULT NULL,
  `nivel_ingles` varchar(7) DEFAULT NULL,
  `examen_ubicacion` varchar(3) DEFAULT NULL,
  `credito_tutoria` int(1) DEFAULT NULL,
  `credito_cultural` int(1) DEFAULT NULL,
  `credito_deportiva` int(1) DEFAULT NULL,
  `credito_actcom` int(1) DEFAULT NULL,
  `suma_creditos` int(1) DEFAULT NULL,
  `residencia_profesional` varchar(3) DEFAULT NULL,
  `lugar_resiprof` text DEFAULT NULL,
  `asignatura_1` text DEFAULT NULL,
  `calificacion_1` varchar(3) DEFAULT NULL,
  `asignatura_2` text DEFAULT NULL,
  `calificacion_2` varchar(3) DEFAULT NULL,
  `asignatura_3` text DEFAULT NULL,
  `calificacion_3` varchar(3) DEFAULT NULL,
  `asignatura_4` text DEFAULT NULL,
  `calificacion_4` varchar(3) DEFAULT NULL,
  `asignatura_5` text DEFAULT NULL,
  `calificacion_5` varchar(3) DEFAULT NULL,
  `asignatura_6` text DEFAULT NULL,
  `calificacion_6` varchar(3) DEFAULT NULL,
  `asignatura_7` text DEFAULT NULL,
  `calificacion_7` varchar(3) DEFAULT NULL,
  `beca` varchar(3) DEFAULT NULL,
  `tipo_beca` text DEFAULT NULL,
  `recursar_materia_1` text DEFAULT NULL,
  `recursar_materia_2` text DEFAULT NULL,
  `recursar_materia_3` text DEFAULT NULL,
  `recursar_materia_4` text DEFAULT NULL,
  `recursar_materia_5` text DEFAULT NULL,
  `recursar_materia_6` text DEFAULT NULL,
  `recursar_materia_7` text DEFAULT NULL,
  `area_medica` varchar(7) DEFAULT NULL,
  `area_psicologica` varchar(7) DEFAULT NULL,
  `asesoria_pares` varchar(7) DEFAULT NULL,
  `tutorias_individuales` varchar(7) DEFAULT NULL,
  `otra_canalizacion` varchar(7) DEFAULT NULL,
  `observacion_ago_dic` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trayectoria_titulacion`
--

CREATE TABLE `trayectoria_titulacion` (
  `num_control` varchar(7) DEFAULT NULL,
  `tema_proyecto` text DEFAULT NULL,
  `ingles_acreditado` varchar(3) DEFAULT NULL,
  `creditos_cumplidos` int(3) DEFAULT NULL,
  `examen_protocolario` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutor`
--

CREATE TABLE `tutor` (
  `id_tutor` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `apellido` text DEFAULT NULL,
  `sexo` varchar(1) DEFAULT NULL,
  `tipo_tutoria` text DEFAULT NULL,
  `area_de` varchar(4) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `fecha_registro` text DEFAULT NULL,
  `hora_registro` varchar(9) DEFAULT NULL,
  `usuario` text DEFAULT NULL,
  `pass_tutor` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tutor`
--

INSERT INTO `tutor` (`id_tutor`, `nombre`, `apellido`, `sexo`, `tipo_tutoria`, `area_de`, `email`, `fecha_registro`, `hora_registro`, `usuario`, `pass_tutor`) VALUES
(1, 'Gabriel Abraham', 'Sánchez Fonseca', 'M', 'Tutoría Grupal', 'ISIC', 'gabraham_sf@outlook.com', 'Jueves, 24 de Septiembre de 2020', '11:52 pm.', 'gabraham_sf.103', '7bj5RHFABB'),
(2, 'Lourdes Ma. Elvia', 'Fonseca Nava', 'F', 'Tutoría Grupal', 'IGEM', 'fonsecanava.elvia@gmail.com', 'Sábado, 26 de Septiembre de 2020', '11:58 pm.', 'fonsecanava.elvia.101', 'qN63wpqgHc'),
(3, 'Miriam Yeraldin', 'Cano Rodríguez', 'F', 'Tutoría Generacional', 'IBIO', 'yeraldin.cano.rodriguez@gmail.com', 'Domingo, 27 de Septiembre de 2020', '06:27 pm.', 'yeraldin.cano.rodriguez.204', 'tW9g6B2ajA');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`num_ficha`),
  ADD UNIQUE KEY `alumno_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `alumno_domicilio`
--
ALTER TABLE `alumno_domicilio`
  ADD UNIQUE KEY `domicilio_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `alumno_procedencia`
--
ALTER TABLE `alumno_procedencia`
  ADD UNIQUE KEY `procedencia_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `canalizacion`
--
ALTER TABLE `canalizacion`
  ADD UNIQUE KEY `canalizacion_folio_uindex` (`folio`);

--
-- Indices de la tabla `coordinador`
--
ALTER TABLE `coordinador`
  ADD PRIMARY KEY (`id_coordinador`),
  ADD UNIQUE KEY `coordinador_id_coordinador_uindex` (`id_coordinador`);

--
-- Indices de la tabla `num_control_alumno`
--
ALTER TABLE `num_control_alumno`
  ADD PRIMARY KEY (`num_control`),
  ADD UNIQUE KEY `num_control_alumno_num_control_uindex` (`num_control`),
  ADD UNIQUE KEY `num_control_alumno_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `reporte_final`
--
ALTER TABLE `reporte_final`
  ADD PRIMARY KEY (`id_rfinal`);

--
-- Indices de la tabla `reporte_parcial`
--
ALTER TABLE `reporte_parcial`
  ADD PRIMARY KEY (`id_rparcial`),
  ADD UNIQUE KEY `reporte_parcial_id_rparcial_uindex` (`id_rparcial`);

--
-- Indices de la tabla `tabla_medica`
--
ALTER TABLE `tabla_medica`
  ADD UNIQUE KEY `tabla_medica_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `tabla_pedagogia`
--
ALTER TABLE `tabla_pedagogia`
  ADD UNIQUE KEY `tabla_pedagogia_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `tabla_posttest`
--
ALTER TABLE `tabla_posttest`
  ADD UNIQUE KEY `escala_posttest_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `tabla_psicologia`
--
ALTER TABLE `tabla_psicologia`
  ADD UNIQUE KEY `tabla_psicologia_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `trayectoria_cappt`
--
ALTER TABLE `trayectoria_cappt`
  ADD UNIQUE KEY `tabla_cappt_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem1`
--
ALTER TABLE `trayectoria_sem1`
  ADD UNIQUE KEY `trayectoria_1sem_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem2`
--
ALTER TABLE `trayectoria_sem2`
  ADD UNIQUE KEY `trayectoria_2sem_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem3`
--
ALTER TABLE `trayectoria_sem3`
  ADD UNIQUE KEY `trayectoria_sem3_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem4`
--
ALTER TABLE `trayectoria_sem4`
  ADD UNIQUE KEY `trayectoria_sem4_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem5`
--
ALTER TABLE `trayectoria_sem5`
  ADD UNIQUE KEY `trayectoria_sem5_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem6`
--
ALTER TABLE `trayectoria_sem6`
  ADD UNIQUE KEY `trayectoria_sem6_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem7`
--
ALTER TABLE `trayectoria_sem7`
  ADD UNIQUE KEY `trayectoria_sem7_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem8`
--
ALTER TABLE `trayectoria_sem8`
  ADD UNIQUE KEY `trayectoria_sem8_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_sem9`
--
ALTER TABLE `trayectoria_sem9`
  ADD UNIQUE KEY `trayectoria_sem9_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `trayectoria_titulacion`
--
ALTER TABLE `trayectoria_titulacion`
  ADD UNIQUE KEY `trayectoria_titulacion_num_control_uindex` (`num_control`);

--
-- Indices de la tabla `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`id_tutor`),
  ADD UNIQUE KEY `tutor_id_tutor_uindex` (`id_tutor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coordinador`
--
ALTER TABLE `coordinador`
  MODIFY `id_coordinador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reporte_final`
--
ALTER TABLE `reporte_final`
  MODIFY `id_rfinal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `reporte_parcial`
--
ALTER TABLE `reporte_parcial`
  MODIFY `id_rparcial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tutor`
--
ALTER TABLE `tutor`
  MODIFY `id_tutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `alumno_domicilio`
--
ALTER TABLE `alumno_domicilio`
  ADD CONSTRAINT `alumno_domicilio_ibfk_1` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `alumno_procedencia`
--
ALTER TABLE `alumno_procedencia`
  ADD CONSTRAINT `alumno_procedencia_ibfk_1` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tabla_medica`
--
ALTER TABLE `tabla_medica`
  ADD CONSTRAINT `tabla_medica_ibfk` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tabla_pedagogia`
--
ALTER TABLE `tabla_pedagogia`
  ADD CONSTRAINT `tabla_pedagogia_ibfk` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `tabla_psicologia`
--
ALTER TABLE `tabla_psicologia`
  ADD CONSTRAINT `tabla_psicologia_ibfk` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

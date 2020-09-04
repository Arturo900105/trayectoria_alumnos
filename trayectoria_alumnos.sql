-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-09-2020 a las 04:51:09
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
  `num_ficha` varchar(4) NOT NULL,
  `apellidos` text DEFAULT NULL,
  `nombre` text DEFAULT NULL,
  `fecha_de_nacimiento` date DEFAULT NULL,
  `sexo` varchar(9) DEFAULT NULL,
  `indigena` varchar(3) DEFAULT NULL,
  `edad` int(2) DEFAULT NULL,
  `edo_civil` varchar(10) DEFAULT NULL,
  `tel_cel` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `carrera` varchar(4) DEFAULT NULL,
  `generacion` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alumno`
--

INSERT INTO `alumno` (`num_ficha`, `apellidos`, `nombre`, `fecha_de_nacimiento`, `sexo`, `indigena`, `edad`, `edo_civil`, `tel_cel`, `email`, `fecha_registro`, `carrera`, `generacion`) VALUES
('0007', 'Sánchez Fonseca', 'Gabriel Abraham', '1994-10-22', 'Masculino', 'No', 25, 'Soltero', '5540734715', 'gabraham_sf@outlook.com', '2020-04-27', 'ISIC', 2020),
('0010', 'Morales Avilés', 'Alma Yudill', '2003-02-01', 'Femenino', 'Si', 17, 'Soltera', '4522026543', 'gabraham_sf@outlook.com', '2020-04-27', 'IGEM', 2020);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `canalizacion`
--

CREATE TABLE `canalizacion` (
  `folio` varchar(7) DEFAULT NULL,
  `fecha` text DEFAULT NULL,
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

INSERT INTO `canalizacion` (`folio`, `fecha`, `nom_estudiante`, `igem`, `iind`, `isic`, `ibio`, `iias`, `ienr`, `ifor`, `iagr`, `num_control`, `semestre`, `ciclo_escolar`, `canalizacion_psicologica`, `canalizacion_pedagogica`, `canalizacion_ases_acad`, `canalizacion_medica`, `otra_canalizacion`, `des_problematica`, `firma_tutor`, `firma_ctpe`, `firma_encargado_ac`) VALUES
('0320001', '01-09-2020', 'Gabriel Abraham Sánchez Fonseca', '', '', 'X', '', '', '', '', '', '1503080', 4, 'Enero - Junio', '', '', 'X', '', '', 'Problema con la materia de Contabilidad Financiera', 'Elpidio Jiménez Cruz', 'María Janacua Benites', 'Miriam Rodríguez Madrigal'),
('0720001', '01-09-2020', 'Gabriel Abraham Sánchez Fonseca', '', '', '', '', '', '', 'X', '', '1507080', 5, 'Agosto - Diciembre', '', '', '', 'X', '', 'Alergia a algunos fertilizantes', 'Elpidio Jiménez Cruz', 'María Janacua Benites', 'Arturo Sánchez Fonseca');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coordinador`
--

CREATE TABLE `coordinador` (
  `nombre` text DEFAULT NULL,
  `apellidos` text DEFAULT NULL,
  `coordinacion` varchar(4) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `usuario` text DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `domicilio`
--

CREATE TABLE `domicilio` (
  `num_ficha` varchar(4) DEFAULT NULL,
  `domicilio` text DEFAULT NULL,
  `colonia` text DEFAULT NULL,
  `codigo_postal` int(5) DEFAULT NULL,
  `localidad` text DEFAULT NULL,
  `procedencia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `domicilio`
--

INSERT INTO `domicilio` (`num_ficha`, `domicilio`, `colonia`, `codigo_postal`, `localidad`, `procedencia`) VALUES
('0007', 'Fco. González Bocanegra #592', 'Villicaña', 60280, 'Nahuatzen', 'Nahuatzen; Mich.'),
('0010', 'Miguel de Cervantes Saavedra #463', 'Centro', 60280, 'Nahuatzen', 'Nahuatzen; Mich.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `num_control_alumno`
--

CREATE TABLE `num_control_alumno` (
  `num_ficha` varchar(4) DEFAULT NULL,
  `num_control` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `procedencia`
--

CREATE TABLE `procedencia` (
  `num_ficha` varchar(4) DEFAULT NULL,
  `bach` text DEFAULT NULL,
  `tipo_bach` text DEFAULT NULL,
  `nom_bach` text DEFAULT NULL,
  `promedio_bach` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `procedencia`
--

INSERT INTO `procedencia` (`num_ficha`, `bach`, `tipo_bach`, `nom_bach`, `promedio_bach`) VALUES
('0007', 'CBTa', '─> Físico-Matemático.\n─> Químico-Biológico.', 'CBTa No. 238', 8.5),
('0010', 'CBTa', '─> Económico-Administrativo.\n─> Histórico-Social.', 'CBTa No. 238', 8);

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
(1, 'jueves, 3 de septiembre de 2020', '04:39 pm.', 'Enero - Junio', 'Gabriel Abraham Sánchez Fonseca', '4° \"B\"', 'Ingeniería en Sistemas Computacionales', 40, 'Tópicos Avanzados de Programación', '4', '10.00', 'Métodos Numéricos', '5', '12.50', '', '0', '', '', '0', '', '', '0', '', '', '0', '', 6, '25, Beca de Transporte', 0, 6, 7, 8, 9, 'NINGUNO', 'NINGUNO', 'NINGUNO', 'NINGUNO'),
(4, 'jueves, 3 de septiembre de 2020', '05:09 pm.', 'Enero - Junio', 'Gabriel Abraham Sánchez Fonseca', '4° \"B\"', 'Ingeniería en Sistemas Computacionales', 30, 'Tópicos Avanzados de Programación', '4', '13.33%', 'Métodos Numéricos', '5', '16.67%', '', '', '', '', '', '', '', '', '', '', '', '', 6, '25, Beca de manutención y de transporte', 2, 6, 7, 8, 9, 'NINGUNO', 'NINGUNO', 'NINGUNO', 'NINGUNO'),
(5, 'jueves, 3 de septiembre de 2020', '06:37 pm.', 'Agosto - Diciembre', 'Gabriel Abraham Sánchez Fonseca', '3° \"A\"', 'Ingeniería en Sistemas Computacionales', 40, 'Estructura de Datos', '3', '7.50%', 'Investigación de Operaciones', '6', '15.00%', 'Calculo Vectorial', '5', '12.50%', '', '', '', '', '', '', '', '', '', 3, '25, Beca de Transporte', 0, 6, 8, 15, 11, 'NINGUNO!!! 1', 'NINGUNO!!! 2', 'NINGUNO!!! 3', 'NINGUNO!!! 4');

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
(1, 'jueves, 3 de septiembre de 2020', '01:04 pm.', 'Agosto - Diciembre', '1', '-', '-', 'Gabriel Abraham Sánchez Fonseca', '1° \"C\"', 'Ingeniería en Sistemas Computacionales', 35, 'Fundamentos de Programación', '3', '8.57%', 'Calculo Diferencial', '6', '17.14%', 'Matematicas Discretas', '3', '8.57%', 'Taller de Ética', '4', '11.43%', '', '', '', '', '', '', 6, '20, Beca de Manutención y de Transporte', 3, 10, 15, 20, 7, 'Que los alumnos se distraen con facilidad', 'Realizar dinámicas más seguido', 'Falta de recursos económicos', 'Motivar a los alumnos a que alcancen sus objetivos'),
(2, 'jueves, 3 de septiembre de 2020', '01:13 pm.', 'Enero - Junio', '-', '2', '-', 'Gabriel Abraham Sánchez Fonseca', '2° \"C\"', 'Ingeniería en Sistemas Computacionales', 33, 'Probabilidad y Estadísticas', '3', '9.09%', 'Calculo Integral', '5', '15.15%', 'Programación Orientada a Objetos', '2', '6.06%', '', '', '', '', '', '', '', '', '', 7, '20, Beca de Manutención y de Transporte', 0, 7, 4, 7, 12, 'No, ninguno', 'No, ninguno', 'No, ninguno', 'No, ninguno');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_medica`
--

CREATE TABLE `tabla_medica` (
  `num_ficha` varchar(4) DEFAULT NULL,
  `peso` text DEFAULT NULL,
  `estatura` text DEFAULT NULL,
  `tipo_sangre` text DEFAULT NULL,
  `antes_hered` text DEFAULT NULL,
  `toxicomanias` varchar(3) DEFAULT NULL,
  `tipo_toxicomanias` text DEFAULT NULL,
  `frecuencia` text DEFAULT NULL,
  `embarazo` text DEFAULT NULL,
  `act_fisica` varchar(3) DEFAULT NULL,
  `actividad` text DEFAULT NULL,
  `tiempo` text DEFAULT NULL,
  `alergias` text DEFAULT NULL,
  `quir_cir` varchar(3) DEFAULT NULL,
  `transfusionales` varchar(3) DEFAULT NULL,
  `diabetes` text DEFAULT NULL,
  `hipertencion` varchar(3) DEFAULT NULL,
  `convulsiones` varchar(3) DEFAULT NULL,
  `asma` varchar(3) DEFAULT NULL,
  `tels_emergencia` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_medica`
--

INSERT INTO `tabla_medica` (`num_ficha`, `peso`, `estatura`, `tipo_sangre`, `antes_hered`, `toxicomanias`, `tipo_toxicomanias`, `frecuencia`, `embarazo`, `act_fisica`, `actividad`, `tiempo`, `alergias`, `quir_cir`, `transfusionales`, `diabetes`, `hipertencion`, `convulsiones`, `asma`, `tels_emergencia`) VALUES
('0007', '75 kg.', '1.70 m.', 'O POSITIVO', 'Diabetes\nGripe', 'NO', '----------', '----------', '----------', 'SÍ', 'Basketbol', 'Cada fin de semana', 'SÍ:\nMedicamentos con sulfas.', 'NO', 'NO', 'SÍ:\nDiabetes Mellitus 1.', 'NO', 'NO', 'NO', '5514525708\n7224139697');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_pedagogia`
--

CREATE TABLE `tabla_pedagogia` (
  `num_ficha` varchar(4) DEFAULT NULL,
  `aprendizaje_visual` int(11) DEFAULT NULL,
  `aprendizaje_auditivo` int(11) DEFAULT NULL,
  `aprendizaje_kinestesico` int(11) DEFAULT NULL,
  `organizacion_estudio` int(11) DEFAULT NULL,
  `tecnicas_estudio` int(11) DEFAULT NULL,
  `motivacion_estudio` int(11) DEFAULT NULL,
  `preguntas_oe` text DEFAULT NULL,
  `preguntas_te` text DEFAULT NULL,
  `preguntas_me` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_pedagogia`
--

INSERT INTO `tabla_pedagogia` (`num_ficha`, `aprendizaje_visual`, `aprendizaje_auditivo`, `aprendizaje_kinestesico`, `organizacion_estudio`, `tecnicas_estudio`, `motivacion_estudio`, `preguntas_oe`, `preguntas_te`, `preguntas_me`) VALUES
('0007', 32, 24, 27, 13, 10, 13, 'A B C D E F J K N O P S T', 'B C F G J K N P Q T', 'A D E F G H I J M O R S T');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tabla_psicologia`
--

CREATE TABLE `tabla_psicologia` (
  `num_ficha` varchar(4) DEFAULT NULL,
  `pregunta1` varchar(3) DEFAULT NULL,
  `respuesta1` text DEFAULT NULL,
  `pregunta2` varchar(3) DEFAULT NULL,
  `respuesta2` text DEFAULT NULL,
  `ansiedad` int(11) DEFAULT NULL,
  `depresion` int(11) DEFAULT NULL,
  `bloque1` int(11) DEFAULT NULL,
  `bloque2` int(11) DEFAULT NULL,
  `bloque3` int(11) DEFAULT NULL,
  `bloque4` int(11) DEFAULT NULL,
  `preguntas_bloque1` text DEFAULT NULL,
  `preguntas_bloque2` text DEFAULT NULL,
  `preguntas_bloque3` text DEFAULT NULL,
  `preguntas_bloque4` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tabla_psicologia`
--

INSERT INTO `tabla_psicologia` (`num_ficha`, `pregunta1`, `respuesta1`, `pregunta2`, `respuesta2`, `ansiedad`, `depresion`, `bloque1`, `bloque2`, `bloque3`, `bloque4`, `preguntas_bloque1`, `preguntas_bloque2`, `preguntas_bloque3`, `preguntas_bloque4`) VALUES
('0007', 'No', '----------', 'No', '----------', 12, 7, 8, 6, 4, 4, '01 02 03 04 05 06 07 08', '13 14 16 18 19 20', '24 25 28 30', '32 38 39 40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tutor`
--

CREATE TABLE `tutor` (
  `id_tutor` int(11) NOT NULL,
  `nombre` text DEFAULT NULL,
  `apellido` text DEFAULT NULL,
  `tipo_tutoria` text DEFAULT NULL,
  `area_de` varchar(4) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `usuario` text DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tutor`
--

INSERT INTO `tutor` (`id_tutor`, `nombre`, `apellido`, `tipo_tutoria`, `area_de`, `email`, `fecha_registro`, `usuario`, `password`) VALUES
(1, 'Gabriel Abraham', 'Sánchez Fonseca', 'Tutoría Grupal', 'ISIC', 'gabraham_sf@outlook.com', '2020-08-31', 'gabraham_sf.103', '$2y$10$r5VBX2VvhgqfS.BqRJ6hm.tRsvWS3tfJlHMLYuq1w9.aWW/i3yTUq'),
(2, 'Yeraldin', 'Cano Rodríguez', 'Tutoría Generacional', 'IBIO', 'myeraldin.cr@gmail.com', '2020-08-31', 'myeraldin.cr.204', '$2y$10$plIAS2qscOqVjlNRFrER5.HEgZuGNFY.coxH4989qrT6EjzwMDkAG');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`num_ficha`);

--
-- Indices de la tabla `canalizacion`
--
ALTER TABLE `canalizacion`
  ADD UNIQUE KEY `canalizacion_folio_uindex` (`folio`);

--
-- Indices de la tabla `domicilio`
--
ALTER TABLE `domicilio`
  ADD UNIQUE KEY `domicilio_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `num_control_alumno`
--
ALTER TABLE `num_control_alumno`
  ADD UNIQUE KEY `num_control_alumno_num_control_uindex` (`num_control`),
  ADD UNIQUE KEY `num_control_alumno_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `procedencia`
--
ALTER TABLE `procedencia`
  ADD UNIQUE KEY `procedencia_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `reporte_final`
--
ALTER TABLE `reporte_final`
  ADD PRIMARY KEY (`id_rfinal`);

--
-- Indices de la tabla `reporte_parcial`
--
ALTER TABLE `reporte_parcial`
  ADD PRIMARY KEY (`id_rparcial`);

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
-- Indices de la tabla `tabla_psicologia`
--
ALTER TABLE `tabla_psicologia`
  ADD UNIQUE KEY `tabla_psicologia_num_ficha_uindex` (`num_ficha`);

--
-- Indices de la tabla `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`id_tutor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `reporte_final`
--
ALTER TABLE `reporte_final`
  MODIFY `id_rfinal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `reporte_parcial`
--
ALTER TABLE `reporte_parcial`
  MODIFY `id_rparcial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tutor`
--
ALTER TABLE `tutor`
  MODIFY `id_tutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `domicilio`
--
ALTER TABLE `domicilio`
  ADD CONSTRAINT `domicilio_ibfk_1` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `procedencia`
--
ALTER TABLE `procedencia`
  ADD CONSTRAINT `procedencia_ibfk_1` FOREIGN KEY (`num_ficha`) REFERENCES `alumno` (`num_ficha`) ON DELETE CASCADE ON UPDATE CASCADE;

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

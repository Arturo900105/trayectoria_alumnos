-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2020 a las 07:39:34
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
  `usuario` text DEFAULT NULL,
  `apellido` text DEFAULT NULL,
  `nombre` text DEFAULT NULL,
  `tipo_tutoria` text DEFAULT NULL,
  `area_de` varchar(4) DEFAULT NULL,
  `email` text DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumno`
--
ALTER TABLE `alumno`
  ADD PRIMARY KEY (`num_ficha`);

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

--
-- PostgreSQL database dump
--

-- Dumped from database version 12.0
-- Dumped by pg_dump version 12.0

-- Started on 2019-10-22 10:11:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE agenda;
--
-- TOC entry 2847 (class 1262 OID 16393)
-- Name: agenda; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE agenda WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Spain.1252' LC_CTYPE = 'Spanish_Spain.1252';


ALTER DATABASE agenda OWNER TO postgres;

\connect agenda

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 202 (class 1259 OID 16482)
-- Name: credenciales; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.credenciales (
    id integer NOT NULL,
    password character varying(50),
    fechareg timestamp with time zone,
    nombre character varying(250),
    rol character varying(100),
    ci character varying(20)
);


ALTER TABLE public.credenciales OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 16485)
-- Name: credenciales_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.credenciales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.credenciales_id_seq OWNER TO postgres;

--
-- TOC entry 2848 (class 0 OID 0)
-- Dependencies: 203
-- Name: credenciales_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.credenciales_id_seq OWNED BY public.credenciales.id;


--
-- TOC entry 204 (class 1259 OID 16487)
-- Name: eventos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.eventos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.eventos_id_seq OWNER TO postgres;

--
-- TOC entry 205 (class 1259 OID 16489)
-- Name: eventos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.eventos (
    id integer DEFAULT nextval('public.eventos_id_seq'::regclass) NOT NULL,
    nombre character varying(255) NOT NULL,
    descripcion text,
    fechareg timestamp(0) without time zone NOT NULL,
    habilitado character(20)
);


ALTER TABLE public.eventos OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 16496)
-- Name: reuniones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reuniones_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reuniones_id_seq OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 16498)
-- Name: reuniones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reuniones (
    id integer DEFAULT nextval('public.reuniones_id_seq'::regclass) NOT NULL,
    idevento integer NOT NULL,
    nombre character varying(255) NOT NULL,
    lugar character varying(255) NOT NULL,
    fecha date NOT NULL,
    horainicio character varying(50) NOT NULL,
    asistentes text NOT NULL,
    observaciones text NOT NULL,
    docs text NOT NULL,
    estado character varying(200) NOT NULL,
    fechareg timestamp(0) without time zone NOT NULL,
    habilitado character(50)
);


ALTER TABLE public.reuniones OWNER TO postgres;

--
-- TOC entry 2701 (class 2604 OID 16505)
-- Name: credenciales id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credenciales ALTER COLUMN id SET DEFAULT nextval('public.credenciales_id_seq'::regclass);


--
-- TOC entry 2836 (class 0 OID 16482)
-- Dependencies: 202
-- Data for Name: credenciales; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.credenciales (id, password, fechareg, nombre, rol, ci) VALUES (1, '123', NULL, 'Fer', 'administrador', '123456');
INSERT INTO public.credenciales (id, password, fechareg, nombre, rol, ci) VALUES (2, '456', '2019-10-18 10:57:54-04', 'Juan Perez', 'lector', '456');


--
-- TOC entry 2839 (class 0 OID 16489)
-- Dependencies: 205
-- Data for Name: eventos; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (4, 'Rctgyhyhhuh', 'null', '2019-10-16 09:17:49', 'no                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (5, 'dsafafdasf', 'null', '2019-10-18 08:10:55', 'no                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (7, 'sistema gestor de recursos', 'sistema  de trabajo dirigido para rrhh, que solictaron revision', '2019-10-18 17:05:32', 'si                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (6, 'asdfasfafd', '', '2019-10-18 08:12:14', 'no                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (3, 'adsfsaf111', 'asdfasf111', '2019-10-11 09:19:00', 'no                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (2, 'dadfasf', 'adfafadf', '2019-10-11 09:06:25', 'no                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (1, 'gsdgfs', 'sdfgdsg', '2019-10-10 11:41:27', 'no                  ');
INSERT INTO public.eventos (id, nombre, descripcion, fechareg, habilitado) VALUES (8, 'Reunion Distrito 9', '', '2019-10-21 16:04:08', 'si                  ');


--
-- TOC entry 2841 (class 0 OID 16498)
-- Dependencies: 207
-- Data for Name: reuniones; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (1, 1, 'sdfgsdgy1', 'sdfgsdg', '2019-10-10', '11:00', '', '', '', 'Pendiente', '2019-10-10 11:41:57', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (2, 1, 'afdasfy1', 'asdfasf', '2019-10-10', '11:00', 'undefined', 'undefined', '', 'Pendiente', '2019-10-10 11:47:20', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (3, 1, 'dafsasy1', 'afdasf', '2019-10-10', '11:00', 'undefined', 'undefined', '', 'Pendiente', '2019-10-10 11:54:10', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (4, 2, 'adfasfy1', 'adsfasfasd', '2019-10-11', '09:00', 'undefined', 'undefined', '', 'Cancelada', '2019-10-11 09:21:45', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (6, 2, 'asfasdfxz', 'asdfasf', '2019-10-11', '09:00', 'asdfasfd', 'asdfasdfasf', '', 'Pendiente', '2019-10-11 10:13:43', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (5, 2, 'adsfasfy1', 'adsfasf', '2019-10-11', '09:00', 'asdfasdfafd', 'gasdgasgggg', '', 'Realizada', '2019-10-11 10:14:21', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (7, 3, 'Yifiyfy1', 't86t6t', '2019-10-11', '17:00', 'vihvhi', 'vkhgihbho', '', 'Pendiente', '2019-10-11 17:27:04', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (8, 3, 'Duutdtdutdyty1', 'jdugdutxutdt', '2019-10-11', '17:00', 'yifitdtuxtuxtud', 'gudtudtud', '1570830068.jpg:1570830068.jpg', 'Pendiente', '2019-10-11 17:41:08', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (9, 3, 'Tvtyyhuuy1', 'tggtrd', '2019-10-11', '18:00', 'tvtvrrrd', 'rctftfreed', '1570831537_0.docx:1570831537_1.docx', 'Pendiente', '2019-10-11 18:05:36', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (10, 3, 'tttttttty1', 'sdfgsdg', '2019-10-14', '08:00', 'adfasdfa', 'asdfaf', '1571055322_0.xlsx:1571055322_1.jpg', 'Pendiente', '2019-10-14 08:15:21', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (12, 3, 'dddddddddy1', 'adfasf', '2019-10-14', '08:00', 'adsfaf', 'asdfaf', 'ionic_0.json:Informe_supervisor_-_Sept_1.docx', 'Pendiente', '2019-10-14 08:43:08', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (36, 7, 'revision observaciones  realizadas', 'dir tec. de informaion y comunicaciones', '2019-10-21', '10:00', 'estudiantes catolica, funcionario seguridad industrial, funcionarios dpto dess software', 'se realizo la reunion y nos encontramos a la espera de proporcionarles las observaciones para su revision y modificacion', 'mgat_0.jpg', 'Realizada', '2019-10-21 15:18:02', 'si                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (26, 3, 'asdf', 'asdfas', '2019-10-15', '18:22', '', '', '', 'Pendiente', '2019-10-15 15:34:41', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (35, 1, 'adfasf', 'adfaf', '2019-12-18', '18:00', '', '', '', 'Pendiente', '2019-10-18 18:22:47', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (13, 3, 'eeeeeeeeeeey1', 'adfasfafd', '2019-10-14', '08:00', 'asdfasf
asdfasf
adfafd
asdfa
asdfasf', 'adsfa
adsfa
sfasd
fdgdg
dfgdfg
dgdfgd', 'Informe_consultor_-_Sept_0.docx:Autorun_1.inf:upload_cert_2.der:alarma_3.jks', 'Pendiente', '2019-10-14 08:50:19', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (14, 3, 'Gggggggggxy1', 'ggffghhhx', '2019-10-14', '10:00', 'gihghigiyg', 'y7ty7ryry7ry7
ih by if hi
hi by if
ihfyify
ihfyify
ugfyutu
jh ft if
i by i by ifjyf', '', 'Pendiente', '2019-10-14 10:46:01', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (11, 3, 'sssssssxy1', ' dsdffsdfadax', '2019-10-14', '08:00', 'asdfaf', 'asdfaf', '', 'Pendiente', '2019-10-14 11:27:35', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (15, 3, 'hhhhhhhx1', 'adfafdadf', '2019-10-14', '14:00', 'adfaf', 'adfadf', 'BlueStacksInstaller_4_0.exe:alarma_1.jks:Composer-Setup_2.exe', 'Pendiente', '2019-10-14 15:28:54', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (16, 3, 'iiiiiiiiiiiiiiiiiiii', 'dasfasf', '2019-10-14', '15:00', 'sadfasf', 'asdfasf', 'BlueStacksInstaller_4_0.exe:Autorun_1.inf', 'Pendiente', '2019-10-14 15:29:55', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (20, 3, 'jjjjjj', 'asdfas', '2019-10-14', '15:00', 'sadf', 'asdf', '', 'Pendiente', '2019-10-14 15:37:18', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (19, 3, 'jjjjjjjjjjj', 'sadfaf', '2019-10-14', '15:00', 'sadfas', 'sadf', '', 'Pendiente', '2019-10-14 15:36:13', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (18, 3, 'jjjjjjjjj', 'jdhdf', '2019-10-14', '15:00', 'dfhg', 'dfgh', '', 'Pendiente', '2019-10-14 15:32:54', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (21, 3, 'jjjjjjjj', 'dhdfh', '2019-10-14', '15:00', 'sfsfg', 'sfg', '', 'Pendiente', '2019-10-14 15:41:59', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (17, 3, 'jjjjjjjjjj', 'adsfasf', '2019-10-14', '15:30', 'asdfasf', 'asdfasf', '', 'Pendiente', '2019-10-14 15:30:38', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (22, 3, 'jjjjjjjjj', 'sdfg', '2019-10-14', '15:00', '', '', '', 'Pendiente', '2019-10-14 15:42:59', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (23, 3, 'jjjjjj', 'adfadaf', '2019-10-14', '15:00', '', '', '', 'Pendiente', '2019-10-14 15:43:35', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (24, 3, 'kkkkkkkkkk', 'sfgsfg', '2019-10-14', '15:00', 'asdfas', 'adfa', 'alarma_0.jks', 'Pendiente', '2019-10-14 16:56:03', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (27, 3, 'Mmmmmmmmm', 'iyfyifyi', '2019-10-16', '09:00', '', '', 'Nirvana-Nevermind-high_0.jpg:36-PHP-Carrito_1.pdf', 'Pendiente', '2019-10-16 09:14:17', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (28, 4, 'dfafas', 'asdfasf', '2019-11-16', '09:30', '', '', '', 'Pendiente', '2019-10-16 09:47:51', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (29, 4, 'adsfasf', 'asdfaf', '2019-09-17', '16:00', '', '', '', 'Pendiente', '2019-10-17 16:40:01', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (30, 4, 'sgsdf', 'sdfgsdg', '2019-08-17', '16:00', '', '', '', 'Pendiente', '2019-10-17 16:48:47', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (31, 4, 'gsfsgsdg', 'sdfgsdgsdgf', '2019-10-18', '09:00', '', '', '', 'Pendiente', '2019-10-18 09:59:07', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (32, 3, 'adfasf', 'adsfasf', '2019-10-14', '10:00', '', '', '', 'Pendiente', '2019-10-18 10:08:45', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (33, 3, 'asdfasf', 'sdaf', '2019-10-14', '10:00', '', '', '', 'Pendiente', '2019-10-18 10:09:11', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (34, 1, 'zvzxcv', 'zxcvzxv', '2018-07-13', '17:00', '', '', '', 'Pendiente', '2019-10-18 17:37:07', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (25, 3, 'Reunión de Planificación y Coordinación con Organizaciones Sociales', 'Centro de Reuniones y Convenciones Internacionales de Cochabamba', '2019-10-15', '18:10', 'aldaldfaldsj aldjsflaksjdfakls
asdjfalkdsfjal akljsdflkadsjf 
aksdjflaksfj alksjdflkasjdf
alkdsjfalkdsfj alkdsjfalkjdfkasdf
akldjfalkdjsf asdjflkadjsflkajdskf', 'ladjsfalk alkdsjflka fdkladsf ljdfl kjasd fjasfl jlaks fjlaksf dlkasf jkljsdfklajfd lkasd fjl kajdfalkdjsfsflk fdalksjflkasjf asjf kjdf lskaj flks fldkj falkdsf ', 'alarma_0.jks:Firefox_Installer_1.exe', 'Pendiente', '2019-10-15 15:31:51', 'no                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (37, 8, 'Reunion Dist 9 Tema varios', 'Plaza colon', '2019-10-31', '08:00', 'Secretario General
Director de transparencia
Director de catastro', 'Deben asistir puntalmente', '', 'Pendiente', '2019-10-21 16:06:33', 'si                                                ');
INSERT INTO public.reuniones (id, idevento, nombre, lugar, fecha, horainicio, asistentes, observaciones, docs, estado, fechareg, habilitado) VALUES (38, 8, 'Distrito 9', 'plaza principal', '2019-10-31', '17:00', 'Secretio de GObernabilidad
Secretario General
Distrito 9', 'nn', '', 'Pendiente', '2019-10-21 16:08:33', 'si                                                ');


--
-- TOC entry 2849 (class 0 OID 0)
-- Dependencies: 203
-- Name: credenciales_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.credenciales_id_seq', 2, true);


--
-- TOC entry 2850 (class 0 OID 0)
-- Dependencies: 204
-- Name: eventos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.eventos_id_seq', 8, true);


--
-- TOC entry 2851 (class 0 OID 0)
-- Dependencies: 206
-- Name: reuniones_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reuniones_id_seq', 38, true);


--
-- TOC entry 2705 (class 2606 OID 16507)
-- Name: credenciales credenciales_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.credenciales
    ADD CONSTRAINT credenciales_pkey PRIMARY KEY (id);


--
-- TOC entry 2707 (class 2606 OID 16509)
-- Name: eventos eventos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.eventos
    ADD CONSTRAINT eventos_pkey PRIMARY KEY (id);


--
-- TOC entry 2709 (class 2606 OID 16511)
-- Name: reuniones reuniones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reuniones
    ADD CONSTRAINT reuniones_pkey PRIMARY KEY (id);


-- Completed on 2019-10-22 10:11:56

--
-- PostgreSQL database dump complete
--


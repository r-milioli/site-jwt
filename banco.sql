create database senai_auth;
use senai_auth;

create table usuarios(
    id int auto_increment primary key,
    usuario varchar(50) not null,
    senha varchar(255) not null,
    perfil varchar(10) not null
);
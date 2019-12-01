package com.itbam.projetos.domain;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AccessLevel;
import lombok.Data;
import lombok.experimental.FieldDefaults;

@Entity
@Data
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Projeto {
    @Id
    @GeneratedValue
    Long Id;
    String nome;
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate inicio;
    @JsonFormat(pattern = "dd/MM/yyyy")
    LocalDate fim;
    BigDecimal valor;
}
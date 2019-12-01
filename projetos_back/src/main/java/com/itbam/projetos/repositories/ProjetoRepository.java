package com.itbam.projetos.repositories;

import com.itbam.projetos.domain.Projeto;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RepositoryRestResource(collectionResourceRel = "projetos", path = "projetos")
public interface ProjetoRepository extends PagingAndSortingRepository<Projeto, Long>{}
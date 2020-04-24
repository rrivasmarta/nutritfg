package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.RecipeGroup;

public interface RecipeGroupDao extends PagingAndSortingRepository<RecipeGroup, Long>{

}

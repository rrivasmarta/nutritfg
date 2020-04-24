package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.Ingredient;


public interface IngredientDao  extends PagingAndSortingRepository<Ingredient, Long>{

}

package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.Meal;

public interface MealDao extends PagingAndSortingRepository<Meal, Long>{

}

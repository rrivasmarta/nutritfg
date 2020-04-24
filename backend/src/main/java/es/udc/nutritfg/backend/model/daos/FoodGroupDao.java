package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.FoodGroup;

public interface FoodGroupDao  extends PagingAndSortingRepository<FoodGroup, Long>{

}

package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Food;

public interface FoodDao extends PagingAndSortingRepository<Food, Long>, CustomizedFoodDao{
	
	boolean existsByName(String name);
	
	@Query("SELECT f FROM Food f ORDER BY f.name")
	Slice<Food> findAllFoods(Pageable pageable);

}

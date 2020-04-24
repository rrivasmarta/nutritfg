package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.domain.Slice;

import es.udc.nutritfg.backend.model.entities.Food;

public interface CustomizedFoodDao {
	
	Slice<Food> find(Long foodGroupId, String text, int page, int size);

}

package es.udc.nutritfg.backend.model.services;

import java.util.List;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.FoodGroupDto;
import es.udc.nutritfg.backend.rest.dtos.MeasureUnitDto;
import es.udc.nutritfg.backend.rest.dtos.NutrientMeasureUnitsDto;

public interface FoodService {

	public Food addFood(Food food) throws DuplicateInstanceException;
	
	public List<FoodGroup> getFoodGroups();
	
	public Food findFoodById(Long foodId) throws InstanceNotFoundException;
	
	public Block<Food> findFoods(int page, int size);

	public Block<Food> searchFoods(Long groupFoodId, String keywords, int page, int size);
	
	public FoodGroup findFoodGroup(Long foodGroupId) throws InstanceNotFoundException;
	
	MeasureUnitDto getMeasureUnit();
	
	NutrientMeasureUnitsDto getNutrientMeasureUnits();
	
	public Block<Food> deleteFood(Long id, Long foodGroupId, String keywords, int page, int size) throws InstanceNotFoundException;
}

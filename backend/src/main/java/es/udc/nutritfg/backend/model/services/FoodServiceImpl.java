package es.udc.nutritfg.backend.model.services;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Slice;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.udc.nutritfg.backend.model.common.exceptions.DuplicateInstanceException;
import es.udc.nutritfg.backend.model.common.exceptions.InstanceNotFoundException;
import es.udc.nutritfg.backend.model.daos.FoodDao;
import es.udc.nutritfg.backend.model.daos.FoodGroupDao;
import es.udc.nutritfg.backend.model.daos.UserDao;
import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Food;
import es.udc.nutritfg.backend.model.entities.FoodGroup;
import es.udc.nutritfg.backend.model.entities.MeasureUnit;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.FoodGroupDto;
import es.udc.nutritfg.backend.rest.dtos.MeasureUnitDto;
import es.udc.nutritfg.backend.rest.dtos.NutrientMeasureUnitsDto;

@Service
@Transactional
public class FoodServiceImpl implements FoodService{

	@Autowired
	private FoodDao foodDao;
	
	@Autowired
	private FoodGroupDao foodGroupDao;
	
	@Override
	public Food addFood(Food food) throws DuplicateInstanceException {
		
		if (foodDao.existsByName(food.getName()))
			throw new DuplicateInstanceException("project.entities.food", food.getName());
		
		FoodGroup foodGroup = food.getFoodGroup();
		
		foodGroup.getListFoods().add(food);
		
		return foodDao.save(food);
	}

	@Override
	public List<FoodGroup> getFoodGroups(){
		
		Iterable<FoodGroup> foodGroups = foodGroupDao.findAll(new Sort(Sort.Direction.ASC, "name"));
		List<FoodGroup> foodGroupAsList = new ArrayList<>();
		
		foodGroups.forEach(fg -> foodGroupAsList.add(fg));
		
		return foodGroupAsList;
	}
	
	@Override
	public MeasureUnitDto getMeasureUnit() {
		List<MeasureUnit> measureUnits= Arrays.asList(MeasureUnit.class.getEnumConstants());
		MeasureUnitDto measureUnitDto = new MeasureUnitDto();
		measureUnitDto.setMeasureUnitList(measureUnits);

		return measureUnitDto;
	}

	@Override
	public NutrientMeasureUnitsDto getNutrientMeasureUnits() {
		
			NutrientMeasureUnitsDto nutrientMeasureUnitDto = new NutrientMeasureUnitsDto();
			
			return nutrientMeasureUnitDto;
	}

	@Override
	public Food findFoodById(Long foodId) throws InstanceNotFoundException {
		
		Optional<Food> food = foodDao.findById(foodId);
		
		Optional<FoodGroup> foodGroup = foodGroupDao.findById(food.get().getFoodGroup().getId());

		food.get().setFoodGroup(foodGroup.get());
		
		if (!food.isPresent()) {
			throw new InstanceNotFoundException("project.entities.food", foodId);
		}

		return food.get();
		
	}
	
	@Override
	public FoodGroup findFoodGroup(Long foodGroupId) throws InstanceNotFoundException {
			
		Optional<FoodGroup> foodGroup = foodGroupDao.findById(foodGroupId);
		
		return foodGroup.get();
	}
	
	@Override
	public Block<Food> findFoods(int page, int size) {
		
		Slice<Food> slice = foodDao.findAllFoods(PageRequest.of(page, size));
		
		return new Block<>(slice.getContent(), slice.hasNext());
	}
	
	@Override
	public Block<Food> searchFoods(Long foodGroupId, String keywords, int page, int size) {
		
		Slice<Food> slice = foodDao.find(foodGroupId, keywords, page, size);
		
		return new Block<>(slice.getContent(), slice.hasNext());
		
	}

	@Override
	public Block<Food> deleteFood(Long id, Long foodGroupId, String keywords, int page, int size) throws InstanceNotFoundException {

		Optional<Food> food = foodDao.findById(id);

		if (!food.isPresent()) {
			throw new InstanceNotFoundException("project.entities.food", id);
		}

		foodDao.delete(food.get());
		
		if (keywords == "") {
			return findFoods(page, size);
		} else {
			return searchFoods(foodGroupId, keywords, page, size);
		}
	}

	
}

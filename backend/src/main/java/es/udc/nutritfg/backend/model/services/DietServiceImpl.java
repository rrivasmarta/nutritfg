package es.udc.nutritfg.backend.model.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import es.udc.nutritfg.backend.model.daos.DietDao;
import es.udc.nutritfg.backend.model.daos.DietDayDao;
import es.udc.nutritfg.backend.model.daos.MealDao;
import es.udc.nutritfg.backend.model.daos.PatientDao;
import es.udc.nutritfg.backend.model.daos.RecipeDao;
import es.udc.nutritfg.backend.model.entities.Country;
import es.udc.nutritfg.backend.model.entities.DietDay;
import es.udc.nutritfg.backend.model.entities.Meal;
import es.udc.nutritfg.backend.model.entities.MealType;
import es.udc.nutritfg.backend.model.entities.Patient;
import es.udc.nutritfg.backend.model.entities.Recipe;
import es.udc.nutritfg.backend.rest.dtos.CountryDto;
import es.udc.nutritfg.backend.rest.dtos.MealTypeDto;

@Service
@Transactional
public class DietServiceImpl implements DietService{
	
	@Autowired
	private PermissionChecker permissionChecker;

	@Autowired
	private BCryptPasswordEncoder passwordEncoder;

	@Autowired
	private DietDao dietDao;
	
	@Autowired
	private DietDayDao dietDayDao;
	
	@Autowired
	private MealDao mealDao;
	
	@Autowired
	private RecipeDao recipeDao;
	
	@Autowired
	private PatientDao patientDao;

	@Override
	public MealTypeDto getMealTypes() {
		List<MealType> mealType = Arrays.asList(MealType.class.getEnumConstants());
		MealTypeDto mealTypeDto = new MealTypeDto();
		mealTypeDto.setMealTypeList(mealType);

		return mealTypeDto;
	}

	@Override
	public void addDiet(Set<DietDay> listDays, Long patientId) {
		
		Optional<Patient> patient = patientDao.findById(patientId);
		
		for(DietDay day:listDays) {
			Set<Meal> meals = day.getMeals();
			for(Meal meal:meals) {
				Set<Recipe> recipes = meal.getListRecipes();
			}
		}
		
	}
	
	
	
	

}

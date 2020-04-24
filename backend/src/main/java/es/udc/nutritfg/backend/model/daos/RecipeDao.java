package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import es.udc.nutritfg.backend.model.entities.Ingredient;
import es.udc.nutritfg.backend.model.entities.Recipe;

public interface RecipeDao extends PagingAndSortingRepository<Recipe, Long>, CustomizedRecipeDao {
	
	boolean existsByName(String name);
	
	@Query("SELECT r FROM Recipe r ORDER BY r.name")
	Slice<Recipe> findAllRecipes(Pageable pageable);
	
	@Query("SELECT i FROM Ingredient i WHERE i.recipe.id = :recipeId")
	List<Ingredient> findByRecipeIdAllIngredients(@Param("recipeId")Long recipeId);
}

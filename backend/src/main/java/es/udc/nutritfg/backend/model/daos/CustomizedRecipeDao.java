package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.domain.Slice;

import es.udc.nutritfg.backend.model.entities.Recipe;

public interface CustomizedRecipeDao {

	Slice<Recipe> find(Long recipeGroupId, String text, int page, int size);
}

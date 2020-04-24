package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.Dietician.GenreType;

public class GenreDto {

	private List<GenreType> genreList;

	public GenreDto() {

	}

	public List<GenreType> getGenreList() {
		return genreList;
	}

	public void setGenreList(List<GenreType> genreList) {
		this.genreList = genreList;
	}
}

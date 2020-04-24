package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.Measure;

public interface MeasureDao extends PagingAndSortingRepository<Measure, Long>, CustomizedMeasureDao{
	
	

}

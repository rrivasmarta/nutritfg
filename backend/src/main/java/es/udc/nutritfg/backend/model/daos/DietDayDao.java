package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.DietDay;

public interface DietDayDao extends PagingAndSortingRepository<DietDay, Long>{

}

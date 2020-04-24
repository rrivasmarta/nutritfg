package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.domain.Slice;

import es.udc.nutritfg.backend.model.entities.Dietician;

public interface CustomizedDieticianDao {

	Slice<Dietician> find(Long officeId, String text, int page, int size);

}

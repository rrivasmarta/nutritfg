package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.domain.Slice;

import es.udc.nutritfg.backend.model.entities.Patient;

public interface CustomizedPatientDao {

	Slice<Patient> find(Long dieticianId, String text, int page, int size);

}

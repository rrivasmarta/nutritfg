package es.udc.nutritfg.backend.model.daos;

import org.springframework.data.domain.Slice;

import es.udc.nutritfg.backend.model.entities.Dietician;
import es.udc.nutritfg.backend.model.entities.Measure;

public interface CustomizedMeasureDao {

	Slice<Measure> find(Long patientId, int page, int size);
}

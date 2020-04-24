package es.udc.nutritfg.backend.model.daos;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import es.udc.nutritfg.backend.model.entities.Patient;

public interface PatientDao extends PagingAndSortingRepository<Patient, Long>, CustomizedPatientDao{

	Optional<Patient> findByUserName(String userName);

	boolean existsByUserName(String userName);

	@Query("SELECT p FROM Patient p WHERE p.dietician.id = :dieticianId ORDER BY p.generalData.lastName")
	Slice<Patient> findByDieticianIdPatients(@Param("dieticianId")Long dieticianId, Pageable pageable);

	@Query("SELECT p FROM Patient p WHERE p.dietician.id = :dieticianId ORDER BY p.generalData.lastName")
	List <Patient> findByDieticianIdAllPatients(@Param("dieticianId")Long dieticianId);
}

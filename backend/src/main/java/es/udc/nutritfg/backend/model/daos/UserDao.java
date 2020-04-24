package es.udc.nutritfg.backend.model.daos;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.User;

public interface UserDao extends PagingAndSortingRepository<User, Long> {

	boolean existsByUserName(String userName);

	Optional<User> findByUserName(String userName);

	@Query("SELECT u.id FROM User u where LOWER(u.userName) like LOWER(:userName)")
	Long findUserIdByUserNmae(String userName);
}

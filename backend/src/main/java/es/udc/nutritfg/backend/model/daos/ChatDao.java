package es.udc.nutritfg.backend.model.daos;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import es.udc.nutritfg.backend.model.entities.Chat;
import es.udc.nutritfg.backend.model.entities.User;

public interface ChatDao extends PagingAndSortingRepository<Chat, Long>{
	
	@Query("SELECT c FROM Chat c WHERE (sender = :user1 AND receiver = :user2) OR (sender = :user2 AND receiver = :user1)")
	public Chat findChatByUsers(User user1, User user2);
	    
	@Query("SELECT DISTINCT c FROM Chat c WHERE sender = :profile OR receiver = :profile ")
	public List<Chat> getUserChats(User profile);

}

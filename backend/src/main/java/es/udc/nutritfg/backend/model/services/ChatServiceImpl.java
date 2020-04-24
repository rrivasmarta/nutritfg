package es.udc.nutritfg.backend.model.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.management.InstanceNotFoundException;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static es.udc.nutritfg.backend.rest.dtos.ChatConversor.toMessage;
import static es.udc.nutritfg.backend.rest.dtos.ChatConversor.toMessageDto;
import static es.udc.nutritfg.backend.rest.dtos.ChatConversor.toChatDto;
import static es.udc.nutritfg.backend.rest.dtos.ChatConversor.toChat;

import es.udc.nutritfg.backend.model.daos.ChatDao;
import es.udc.nutritfg.backend.model.daos.MessageDao;
import es.udc.nutritfg.backend.model.daos.UserDao;
import es.udc.nutritfg.backend.model.entities.Chat;
import es.udc.nutritfg.backend.model.entities.Message;
import es.udc.nutritfg.backend.model.entities.User;
import es.udc.nutritfg.backend.rest.dtos.ChatDto;
import es.udc.nutritfg.backend.rest.dtos.MessageDto;
import es.udc.nutritfg.backend.rest.dtos.UserChatReducedDto;

@Service
@Transactional
public class ChatServiceImpl implements ChatService{
	
	@Autowired
	private PermissionChecker permissionChecker;
	
	@Autowired
    private UserDao userDao;
	
	@Autowired
    private ChatDao chatDao;
    
	@Autowired
    private MessageDao messageDao;
	
	@Autowired
    private UserService userService;
	
	@Override
    public List<Message> storeMessage(MessageDto messageDto) throws InstanceNotFoundException {
		
		Message message = toMessage(messageDto);
		
		Optional<Chat> optionalChat = chatDao.findById(messageDto.getChatId());
		
		User user = userService.getProfileFromToken(messageDto.getUserToken());
	
		if(optionalChat.isPresent()) {
	    
			Chat chat = optionalChat.get();
	    
			message.setChat(chat);
			message.setChecked(false);
			message.setMessageSender(user);
			messageDao.save(message);
		
			ChatDto chatDto = new ChatDto();
			chatDto.setId(chat.getId());
		
			return getMessages(chatDto);
		}else {
	    
			throw new InstanceNotFoundException();
	    }
	}

	@Override
    public List<Message> getMessages(ChatDto chatDto) {
		List<Message> messageList = messageDao.getMessagesFromChat(chatDto.getId());
		return messageList;
    }

	@Override
	public ChatDto startChat(ChatDto chatDto) throws InstanceNotFoundException {
		
		User user1 = userService.getProfileFromToken(chatDto.getUserToken());
		Optional<User> user2 = userDao.findByUserName(chatDto.getUserName());
		if (user2 != null) {
		    Chat chat = chatDao.findChatByUsers(user1, user2.get());
		    if(chat!=null) {
			return toChatDto(chat);
		    }else {
			Chat createdChat = new Chat();
			createdChat.setSender(user1);
			createdChat.setReceiver(user2.get());
			
			Chat returnedChat = chatDao.save(createdChat);
			
			return toChatDto(returnedChat);
		    }
		}else {
		    throw new InstanceNotFoundException();
		}
	}

	@Override
	public List<UserChatReducedDto> getChats(String userToken) {
		
		List<UserChatReducedDto> returnedChats = new ArrayList<>();
		User user = userService.getProfileFromToken(userToken);
		
		List<Chat> chats = chatDao.getUserChats(user);
		
		chats.forEach((chat)->{
		   UserChatReducedDto chatReduced = new UserChatReducedDto();
		   Message lastMessage = messageDao.getLastMessageFromChat(chat);
		   if(chat.getReceiver().getUserName() == user.getUserName()) {
		       chatReduced.setUserName(chat.getSender().getUserName());
		   }
		   else {
		       chatReduced.setUserName(chat.getReceiver().getUserName());
		   }
		   
		   chatReduced.setLastMessage(lastMessage);
		   returnedChats.add(chatReduced);
		});
		
		return returnedChats;
	    }
	
	
}

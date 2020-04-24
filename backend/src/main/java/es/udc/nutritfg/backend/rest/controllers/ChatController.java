package es.udc.nutritfg.backend.rest.controllers;

import java.security.Principal;
import java.util.List;

import javax.management.InstanceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.handler.annotation.Header;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import es.udc.nutritfg.backend.model.entities.Message;
import es.udc.nutritfg.backend.model.services.ChatService;
import es.udc.nutritfg.backend.rest.dtos.ChatDto;
import es.udc.nutritfg.backend.rest.dtos.MessageDto;
import es.udc.nutritfg.backend.rest.dtos.UserChatReducedDto;

@RestController
@RequestMapping("/chat/")
public class ChatController {
	
	 @Autowired
	 private ChatService chatService;
	   
	 @Autowired
	 private SimpMessagingTemplate simpMessagingTemplate;
	 
	 	@MessageMapping("/all")
	    @SendTo("/topic/all")
	    public List<Message> post (@Payload MessageDto messageDto, Principal user) throws InstanceNotFoundException {
		List<Message> messageDtoList = chatService.storeMessage(messageDto);
		System.out.println(user.getName());
		simpMessagingTemplate.convertAndSendToUser(
		         user.getName(), "/topic/all", messageDto); 
	        return messageDtoList;
	    }
	    
	    @RequestMapping("/history")
	    public List<Message> getChatHistory(@Payload ChatDto chatDTO) {
	        return chatService.getMessages(chatDTO);
	    }    
	    
	    @PostMapping("/start")
	    public ChatDto startChat(@RequestBody ChatDto chatDTO) throws InstanceNotFoundException {
	        return chatService.startChat(chatDTO);
	    }
	    
	    @GetMapping("/active")
	    public List<UserChatReducedDto> getChats (@RequestParam String token){
	    	return chatService.getChats(token);
	    }

}

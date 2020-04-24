package es.udc.nutritfg.backend.rest.dtos;

import java.util.List;

import es.udc.nutritfg.backend.model.entities.Message;

public class ChatDto {
	
	private Long id;
	
    private String userToken;
    
    private String userName;
    
    private List<Message> messages;

	public ChatDto() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserToken() {
		return userToken;
	}

	public void setUserToken(String userToken) {
		this.userToken = userToken;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}
    
}

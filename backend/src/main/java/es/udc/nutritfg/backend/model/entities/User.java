package es.udc.nutritfg.backend.model.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

	public enum RoleType {DIETICIAN, PATIENT, OFFICE};

	@Id
	@SequenceGenerator(name = "UserIdGenerator", sequenceName = "UserSeq")
	@GeneratedValue(strategy = GenerationType.IDENTITY, generator = "UserIdGenerator")
	@Column(name = "UserId", nullable = false, unique = true)
	private Long id;

	@Column(name = "UserName", nullable = false)
	private String userName;

	@Column(name = "Password", nullable = false)
	private String password;

	@Column(name = "Email", nullable = false)
	private String email;

	@Column(name = "Role")
	private RoleType role;
	
	@JsonIgnore
    @OneToMany(mappedBy = "sender", cascade = CascadeType.ALL)
    private List<Chat> senderChats;
    
    @JsonIgnore
    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL)
    private List<Chat> receiverChats;
    
    @JsonIgnore
    @OneToMany(mappedBy = "messageSender", cascade = CascadeType.ALL)
    private List<Message> messages;

	public User() {}

	public User(String userName, String password, String email) {

		this.userName = userName;
		this.password = password;
		this.email = email;

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public RoleType getRole() {
		return role;
	}

	public void setRole(RoleType role) {
		this.role = role;
	}

	public List<Chat> getSenderChats() {
		return senderChats;
	}

	public void setSenderChats(List<Chat> senderChats) {
		this.senderChats = senderChats;
	}

	public List<Chat> getReceiverChats() {
		return receiverChats;
	}

	public void setReceiverChats(List<Chat> receiverChats) {
		this.receiverChats = receiverChats;
	}

	public List<Message> getMessages() {
		return messages;
	}

	public void setMessages(List<Message> messages) {
		this.messages = messages;
	}

}

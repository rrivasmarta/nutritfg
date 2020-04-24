package es.udc.nutritfg.backend.rest.dtos;

public class UserTokenDto {
	
	public interface AllValidations {}
	
	public interface UpdateValidations {}
	
	private String userToken;
	
	public UserTokenDto() {}

	public String getUserToken() {
		return userToken;
	}

	public void setUserToken(String userToken) {
		this.userToken = userToken;
	}

}

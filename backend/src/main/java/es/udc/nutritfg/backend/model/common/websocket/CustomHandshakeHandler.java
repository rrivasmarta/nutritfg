package es.udc.nutritfg.backend.model.common.websocket;

import java.security.Principal;
import java.util.Map;
import java.util.UUID;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.support.DefaultHandshakeHandler;



public class CustomHandshakeHandler extends DefaultHandshakeHandler {
 // Custom class for storing principal
    @Override
    protected Principal determineUser(ServerHttpRequest request,
                                      WebSocketHandler wsHandler,
                                      Map<String, Object> attributes) {
        // Generate principal with UUID as name
	
	String [] parts = request.getURI().getQuery().split("=");
	String username = parts[1];
        return new StompPrincipal(username);
    }
}

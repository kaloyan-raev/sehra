package test.jaxrs.sapui5;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import com.sap.security.um.service.UserManagementAccessor;
import com.sap.security.um.user.PersistenceException;
import com.sap.security.um.user.UnsupportedUserAttributeException;
import com.sap.security.um.user.User;
import com.sap.security.um.user.UserProvider;

@Path("/user")
public class UserResource {
	
	@Context
	private HttpServletRequest request;
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public SimpleUser getUser() throws PersistenceException, UnsupportedUserAttributeException {
		// UserProvider provides access to the user storage
	    UserProvider users = UserManagementAccessor.getUserProvider();

	    // Read the currently logged in user from the user storage
	    User user = users.getUser(request.getUserPrincipal().getName());
	    
	    SimpleUser simple = new SimpleUser();
	    simple.setFirstName(user.getAttribute("firstname"));
	    simple.setLastName(user.getAttribute("lastname"));
	    simple.setEmail(user.getAttribute("email"));
	    
	    return simple;
	}
	
}

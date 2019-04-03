package dasniko.customer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.keycloak.KeycloakSecurityContext;
import org.keycloak.representations.AccessToken;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.security.Principal;
import java.util.Set;

/**
 * @author Niko Köbler, http://www.n-k.de, @dasniko
 */

@Slf4j
@CrossOrigin
@Controller
@RequestMapping("/api")
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:3000")
public class CrmController {


    //private final CustomerRepository customerRepository;
    private final  KeycloakSecurityContext securityContext;
    private final AccessToken accessToken;
    
    
    Set<String> roles;
    @GetMapping
    public String home() {
        return "redirect:/";
    }

//    @GetMapping("/logout")
//    public String logout(HttpServletRequest request) throws Exception {
//        request.logout();
//        return "redirect:http://localhost:3000/";
//    }
    
    @PostMapping("/customer")
    public ResponseEntity customer(@RequestBody String member) throws Exception {
		System.out.println(member);
    	return new ResponseEntity("okdone",HttpStatus.OK);
    	
    }
    @CrossOrigin
    @GetMapping("/user")
    public ResponseEntity demo() throws Exception {
    	System.out.println("something");
       return  new ResponseEntity("something", HttpStatus.OK);
       //   return "customers";
    }
//    @RequestMapping("/customers")
//    public String customers(Model model, Principal principal, HttpServletRequest req,HttpServletResponse httpServletResponse) {
//    	 System.out.println("something");
//        log.info("AccessToken: " + securityContext.getTokenString());
//        log.info("User: {} / {}", accessToken.getPreferredUsername(),accessToken.getName());
//        Set<String> abc= accessToken.getResourceAccess("fetch").getRoles();
////        String ab= accessToken.getScope();
//        System.out.println(abc);
////       roles = abc;
////        System.out.println(roles);
//////        RedirectView redirectView = new RedirectView();
//////        redirectView.setUrl("http://localhost:3000/securedd");
////      ////  httpServletResponse.setHeader("Location", "http://localhost:3000/securedd");
////        httpServletResponse.setStatus(302);
////      //  return new ResponseEntity("some", HttpStatus.OK);
////    //    JSONObject jsonObj = new JSONObject();
////        JSONParser parser = new JSONParser();
//       // JSONObject json  ;
////        for (String s : roles) {
////    	    System.out.println(s);
////    	//    jsonObj=s;
////    	  
////    	   // System.out.println(json);
////    	}
////    
//        return "redirect:http://localhost:3000/securedd";
//     //   return "customers";
//        
//    }
   
//    @GetMapping("/security")
//    public void security(Model model, Principal principal, HttpServletRequest req) {
//    	
//    	// JSONArray array = new JSONArray();
//    	//System.out.println("tokender"+securityContext.getTokenString());
////    	log.info("AccessTokender: " + securityContext.getTokenString());
////        log.info("User: {} / {}", accessToken.getPreferredUsername(),accessToken.getName());
//    	Set<String> abc= accessToken.getResourceAccess("fetch").getRoles();
////    	  JSONObject json = new JSONObject();
//          Set<String> finalRoles = roles;
//         System.out.println("final"+finalRoles);
////          json.put("exp", ((abc)));
////          String jsonString = json.toString();
////          System.out.println(jsonString);
////         // return "redirect:http://localhost:3000/secured";        //System.out.println(roles);
////        return new ResponseEntity(jsonString, HttpStatus.OK);
//     //   return "customers";
//        
//    }

}

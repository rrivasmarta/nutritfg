package es.udc.nutritfg.backend.rest.common;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private JwtGenerator jwtGenerator;

	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.cors().and().csrf().disable()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
		.addFilter(new JwtFilter(authenticationManager(), jwtGenerator))
		.authorizeRequests().antMatchers("/dieticians/signUp").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/login").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/loginFromServiceToken").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/getGenres").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/getCountries").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/addOffice").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/{id}").permitAll().and()
		.authorizeRequests().antMatchers("/users/login").permitAll().and()
		.authorizeRequests().antMatchers("/users/loginFromServiceToken").permitAll().and()
		.authorizeRequests().antMatchers("/dieticianOffice/loginFromServiceToken").permitAll().and()
		.authorizeRequests().antMatchers("/dieticianOffice/getCountries").permitAll().and()
		.authorizeRequests().antMatchers("/dieticians/${id}/removePatient").permitAll().and()
		.authorizeRequests().antMatchers("/dieticianOffice/${id}/listPatients").permitAll().and()
		.authorizeRequests().antMatchers("/dieticianOffice/${id}/listSearchPatients").permitAll().and()
		.authorizeRequests().antMatchers("/patients/loginFromServiceToken").permitAll().and()
		.authorizeRequests().antMatchers("/patients/getMaritalStatus").permitAll().and()
		.authorizeRequests().antMatchers("/patients/patient").permitAll().and()
		.authorizeRequests().antMatchers("/patients/getBowelFunction").permitAll().and()
		.authorizeRequests().antMatchers("/users/").permitAll().and()
		.authorizeRequests().antMatchers("/patients/getSleepQuality").permitAll().and()
		.authorizeRequests().antMatchers("/patients/getPhysicalActivity").permitAll().and()
		.authorizeRequests().antMatchers("/patients/getSmoker").permitAll().and()
		.authorizeRequests().antMatchers("/patients/getAlcoholicDrinker").permitAll().and()
		.authorizeRequests().antMatchers("/patients/").permitAll().and()
		.authorizeRequests().antMatchers("/food/").permitAll().and()
		.authorizeRequests().antMatchers("/measure/").permitAll().and()
		.authorizeRequests().antMatchers("/diet/").permitAll().and()
		.authorizeRequests().antMatchers("/patients/signUpPatient").hasRole("DIETICIAN").and()
		.authorizeRequests().antMatchers("/dieticians/${id}").hasRole("OFFICE").and()
		.authorizeRequests().antMatchers("/dieticians").hasRole("DIETICIAN").and()
		.authorizeRequests().antMatchers("/dieticianOffice").hasRole("OFFICE");

	}

	@Bean
	public CorsConfigurationSource corsConfigurationSource() {

		CorsConfiguration config = new CorsConfiguration();
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

		config.setAllowCredentials(true);
		config.addAllowedOrigin("*");
		config.addAllowedHeader("*");
		config.addAllowedMethod("*");

		source.registerCorsConfiguration("/**", config);

		return source;

	}

}

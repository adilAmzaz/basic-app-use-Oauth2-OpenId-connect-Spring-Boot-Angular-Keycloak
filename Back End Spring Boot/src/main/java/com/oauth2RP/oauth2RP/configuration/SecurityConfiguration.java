package com.oauth2RP.oauth2RP.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.oauth2RP.oauth2RP.utils.Utils;;
/*
@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;
	
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("/resources/**");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests().antMatchers("/").permitAll().antMatchers("/user/get/**")
            .hasAnyRole("ADMIN","USER").anyRequest().authenticated().and().formLogin()
            .permitAll().and().logout().permitAll();

        http.csrf().disable();
    }
	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}
    @Override
    public void configure(AuthenticationManagerBuilder authenticationMgr) throws Exception {
    	authenticationMgr.userDetailsService(userDetailsService).passwordEncoder(Utils.bcryptEncoder);
    	authenticationMgr.inMemoryAuthentication().passwordEncoder(Utils.bcryptEncoder).withUser("admin").password(Utils.bcryptEncoder.encode("admin")).roles("ADMIN");
       // authenticationMgr.inMemoryAuthentication().withUser("admin").password("admin")
          //  .authorities("ROLE_ADMIN");
    }
}
*/
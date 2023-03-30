package com.example.TourManagement.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.example.TourManagement.service.UserService;

//this will basically integrate spring security with spring MVC 
// the below extended class provides us with overrided methods for us to configure spring security according to our need
@Configuration
@EnableWebSecurity 
@CrossOrigin(origins = "http://localhost:4200")
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
    @Bean
    public BCryptPasswordEncoder passwordEncoder(){
        return new  BCryptPasswordEncoder();
    }

    @Autowired
    private UserService userService;

   
    // we are using spring data JPA and hibernate so in order to integrate spring data jpa and hibernate with spring security we need to provide a bin 
    @Bean
    public DaoAuthenticationProvider authenticationProvider()
    {
        DaoAuthenticationProvider auth=new DaoAuthenticationProvider();
        auth.setUserDetailsService(userService);
        auth.setPasswordEncoder((passwordEncoder()));
        return auth;
    }

    //we need to pass authentication provider to config method so now we will override the below method to do so
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception
    {
        auth.authenticationProvider(authenticationProvider());
    }

   //here we have overriden confirgure method and we have provided access to below URLs:-
   //1.Registration
   //2.JS files
   //3.Css
   //4.img files.
   @Override
   protected void configure(HttpSecurity http) throws Exception
   {
       http.cors().and()
       // Other security configuration
       .csrf().disable().authorizeRequests().antMatchers(
           "/registration**","/js/**","/css/**","/img/**"
       ).permitAll()
       .anyRequest().authenticated().and().formLogin().loginPage("/login").loginProcessingUrl("/login").defaultSuccessUrl("/showall").permitAll().and().logout().invalidateHttpSession(true).clearAuthentication(true).logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/login?logout").permitAll();
   }
    
}

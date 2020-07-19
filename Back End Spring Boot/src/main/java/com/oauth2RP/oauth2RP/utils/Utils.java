package com.oauth2RP.oauth2RP.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

public class Utils {

	public static PasswordEncoder bcryptEncoder = new BCryptPasswordEncoder();

}
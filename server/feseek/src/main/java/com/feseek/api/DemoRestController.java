package com.feseek.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoRestController {
	
	@GetMapping("/api/demo")
	protected String demo() {
		return "まつりだわっしょい";
	}
}

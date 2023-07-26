package com.example.demo.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Book;
import com.example.demo.entity.Inquiry;
import com.example.demo.entity.Review;
import com.example.demo.entity.Seven;
import com.example.demo.repository.BooksRepository;
import com.example.demo.repository.InquiriesRepository;
import com.example.demo.repository.ReviewsRepository;

@RestController
public class DemoRestController {

	@Autowired
	private BooksRepository repository;
	
	@Autowired
	private ReviewsRepository reviewRepository;
	
	
	@Autowired
	private InquiriesRepository inquiriesRepository;
	
	@GetMapping("/api/demo")
	protected Seven demo(@RequestBody Seven seven) {
		//Seven obj = new Seven();
		Inquiry obj = new Inquiry();
		obj.setSubject("test");
		Inquiry ret = inquiriesRepository.save(obj);
		System.out.println(ret.getId());
		
//		seven.setTitle("DemoRestControllerXYZ");
		return seven;
	}
	
	@GetMapping("/api/book")
	protected List<Book> findAll(){
		List<Book> list = repository.findAll();
		
		for (Book book : list) {
			System.out.println(book);
			
			List<Review> reviews = book.getAbc();
			for (Review review : reviews) {
				System.out.println(review);
			}
		}
		
		return list;
	}
	
	@GetMapping("/api/findAuthor")
	protected List<Book> findAuthor(){
		return repository.findByAuthorLike("%");
	}
	
	
	@GetMapping("/api/review")
	protected List<Review> findAllReview(){
		return reviewRepository.findAll();
	}
}

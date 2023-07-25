package com.feseek.api;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.feseek.entity.Inquiry;
import com.feseek.entity.InquiryContent;
import com.feseek.repository.InquiriesRepository;
import com.feseek.repository.InquiryContentRepository;

@Controller
@RequestMapping("/api")
public class InquiryRestController {
	@Autowired
    private InquiriesRepository inquiriesRepository;
	private InquiryContentRepository inquiryContentRepository;
	
    public InquiryRestController(InquiriesRepository inquiriesRepository) {
        this.inquiriesRepository = inquiriesRepository;
       
    }
    //①指定したユーザーIDの問合せ一覧を取得
    @GetMapping("/inquiries/{userId}")
    @ResponseBody
    public String getInquiriesByUserId(@PathVariable String userId) {
    	System.out.println(userId);
        List<Inquiry> inquiries = inquiriesRepository.findAll();
        return "ユーザーIDの問い合わせ一覧を取得しました。";
    }
    //②画面で入力した問合せを保存
    @PostMapping("/inquiries")
    @ResponseBody
    public String saveInquiry(@RequestBody Inquiry inquiry) {
    	System.out.println(inquiry.getId());
    	System.out.println(inquiry.getSubject());
        inquiriesRepository.save(inquiry);
        return "お問い合わせが送信されました。";
    }
    //画面で入力した問合せ返信を保存
    @PostMapping("/inquiries/reply")
    @ResponseBody
    public String saveInquiryReply(@RequestBody InquiryContent inquiry) {
        Integer inquiryId = inquiry.getId();
        Optional<Inquiry> optionalInquiry = inquiriesRepository.findById(inquiryId);

        if (optionalInquiry.isPresent()) {
            Inquiry existingInquiry = optionalInquiry.get();
//            existingInquiry.setInquiry(inquiry.getInquiry());
            inquiriesRepository.save(existingInquiry);
            return "返信が送信されました。";
        } else {
            return "対応するお問い合わせが見つかりませんでした。";
        }
    }
}
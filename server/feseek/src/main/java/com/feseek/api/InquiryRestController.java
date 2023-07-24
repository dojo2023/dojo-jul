package com.feseek.api;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.feseek.entity.Inquiry;
import com.feseek.repository.InquiriesRepository;

	//お問い合わせ　手が空いた人が取り組む
	//最悪出来てなくてもいい
@Controller
@RequestMapping("/api")
public class InquiryRestController {

    private InquiriesRepository inquiriesRepository;

    public InquiryRestController(InquiriesRepository inquiriesRepository) {
        this.inquiriesRepository = inquiriesRepository;
    }

    // お問い合わせを保存するエンドポイント
    @PostMapping("/inquiries")
    @ResponseBody
    public String saveInquiry(@RequestBody Inquiry inquiry) {
        inquiriesRepository.save(inquiry);
        return "お問い合わせが送信されました。";
    }
  //  // 管理者からの返信を保存するエンドポイント
   // @PostMapping("/inquiries/reply")
   // @ResponseBody
   // public String saveInquiriesRepository(@RequestBody InquiriesRepository inquiriesRepository) {
    //    inquiriesRepository.saveAll(inquiriesRepository);
      //  return "返信が送信されました。";
   // }

   // // ユーザーに返信を取得するエンドポイント
    //@GetMapping("/inquiries/{inquiryId}/reply")
    //@ResponseBody
    //public String getInquiryReply(@PathVariable Long inquiryId) {
      //  Optional<InquiriesRepository> optionalInquiryReply = inquiriesRepository.findAll(inquiryId);

       // if (optionalInquiryReply.isPresent()) {
        //    InquiriesRepository inquiriesRepository = optionalInquiriesRepository.get();
         //   return inquiriesRepository.getRepositoryMessage();
       // } else {
        //    return "返信はありません。";
       // }
   // }
}


//package com.feseek.api;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import com.feseek.entity.Inquiry;
//import com.feseek.entity.InquiryContent;
//import com.feseek.entity.InquiryReply;
//import com.feseek.repository.InquiriesRepository;
//import com.feseek.repository.InquiryContentRepository;
//
//@Controller
//@RequestMapping("/api")
//public class InquiryRestController {
//	@Autowired
//    private InquiriesRepository inquiriesRepository;
//	private InquiryContentRepository inquiryContentRepository;
//	
//    public InquiryRestController(InquiriesRepository inquiriesRepository) {
//        this.inquiriesRepository = inquiriesRepository;
//       
//    }
//    //①指定したユーザーIDの問合せ一覧を取得
//    @GetMapping("/inquiries/{userId}")
//    @ResponseBody
//    public String getInquiriesByUserId(@PathVariable String userId) {
//    	System.out.println(userId);
//        List<Inquiry> inquiries = inquiriesRepository.findAll();
//        return "ユーザーIDの問い合わせ一覧を取得しました。";
//    }
//    //②画面で入力した問合せを保存
//    @PostMapping("/inquiries")
//    @ResponseBody
//    public String saveInquiry(@RequestBody Inquiry inquiry) {
//    	System.out.println(inquiry.getId());
//    	System.out.println(inquiry.getSubject());
//        inquiriesRepository.save(inquiry);
//        return "お問い合わせが送信されました。";
//    }
//    
//    //③画面で入力した問合せ返信を保存
//    @PostMapping("/inquiries/reply")
//    @ResponseBody
//    public String saveInquiryReply(@RequestBody InquiryReply inquiryReply) {
//    	
//    	//[画面]：問合せ番号を取得する
//        Integer inquiryId = inquiryReply.getInquiries_id();
//        //[お問合せテーブル]：問合せ番号を指定して、問合せ情報を取得する
//        Optional<Inquiry> optionalInquiry = inquiriesRepository.findById(inquiryId);
//
//
//        //[お問合せテーブル]：指定した問合せ番号があるかないか？
//        if (optionalInquiry.isPresent()) {
//        	
//            //[お問合せ詳細テーブル]：新しい返信情報を追加する
//        	 //新しいInqueryContentのインスタンスを生成する。
//        	 InquiryContent newInquiryContent = new InquiryContent();
////        	 //追加する情報を設定。
//        	 newInquiryContent.setContent(inquiryReply.getInquiry());
////        	
//        	
//        	//[お問合せ詳細テーブル]：保存する
//        	inquiryContentRepository.save(null);
//        	
////            Inquiry existingInquiry = optionalInquiry.get();
////            existingInquiry.setInquiry("");
////            
////            existingInquiry.setInquiry(inquiryReply.getInquiry());
////            // 上記の行で問い合わせの返信内容を更新
////            inquiriesRepository.save(existingInquiry);
//            return "返信が送信されました。";
//        } else {
//            return "対応するお問い合わせが見つかりませんでした。";
//        }
//    }
//}
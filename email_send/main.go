package main

import (
	"gopkg.in/gomail.v2"
	"log"
)

const (
	SMTPServer  = "smtp.gmail.com"
	SMTPPort    = 587
	SenderEmail = "ise.genesis.dsce@gmail.com"       
	SenderPass  = "javf ktuv ezcd qfgj"    
	Attachment  = "attach.jpg"
)

var recipients = []string{
	"govindup63@gmail.com",
  "1ds23cd055@dsce.edu.in",
  "govindup63@gmail.com",
  "agarwal.hemant1511@gmail.com",
  "shreyasdbofficial@gmail.com",
  "shingaresumit17@gmail.com",
  "aayush4210@gmail.com",
  "1ds23cd026@dsce.edu.in",
  "1ds23cd057@dsce.edu.in",
  "Saqlainahmed302@gmail.com",
  "adigasharvari28@gmail.com",
  "eurekajade27@gmaill.com",
  "varnitraina@gmail.com",
  "subhamrout.max23@gmail.com",
  "anuragj4711@gmail.com",
  "kruhi7533@gmail.com",
  "sakshiawasthi00114@gmail.com",
  "prabandhnaik4305@gmail.com",
  "raghavdhingra479@gmail.com",
  "shaizmuhammed2005@gmail.com",
  "pavithrarevankar70@gmail.com",
  "work18.hk19@gmail.com",
  "gaganrh717@gmail.com",
  "vikramjeetmaity8@gmail.com",
  "sxivansx@duck.com",
  "prabandhnaik4305@gmail.com",
  "arpitravi88@gmail.com",
  "abhi17pandey10@gmail.com",
  "nit52670l@gmail.com",
  "aman11202004@gmail.com",
  "shyamak1102@gmail.com",
  "yatharthhh7@gmail.com",
  "Pavithrarajesh51@gmail.com",
  "chethanms479338@gmail.com",
  "amvikas18@gmail.com",
  "vinayakpattar414@gmail.com",
  "sathwikn636@gmail.com",
  "bhoomiinyk06@gmail.com",
  "amvikas18@gmail.com",
  "yvsvamsi2006@gmail.com",
  "saiteja.kogira2005@gmail.com",
  "sarveshreddy3111326@gmail.com",
  "1ds23is150@dsce.edu.in",
  "blessymwilber@gmail.com",
  "poreddykarthikreddy000@gmail.com",
  "manishashank89@gmail.com",
  "1ds23is003@dsce.edu.in",
  "owmdubey163@gmail.com",
  "navneetsatwik@gmail.com",
  "aadityaraaj.19@gmail.com",
  "sandbox@aegisclub.tech",
  "srustitd@gmail.com",
  "rohithbn27@gmail.com",
  "darshilnathwani@gmail.com",
  "ravisabhahith22@gmail.com",
  "gnaveenreddy636@gmail.com",
  "vagmigbhat08@gmail.com",
  "likhith15kumar@gmail.com",
  "vshriyan2005@gmail.com",
  "bhoomikagowda38@gmail.com",
  "sampathraddyas@gmail.com",
  "mayankrajanand0@gmail.com",
  "shrinidhibijapur07@gmail.com",
  "pranavp2608@gmail.com",
  "adarshmishra7304@gmail.com",
  "ketanpansari1@gmail.com",
  "lakshya@jaitus.com",
  "gauthamkv14@gmail.com",
  "lakshya@jaitus.com",
  "arnavgandhi10000@gmail.com",
  "g@g.com",
  "kumarishweta0912@gmail.com",
  "neerajparamkar@gmail.com",
  "sneha.gbhat01@gmail.com",
  "sketchologistabhay@gmail.com",
  "kushu123456789@gmail.com",
  "madhan786819@gmail.com",
  "ak5008402@gmail.com",
  "kirloskarmihir01@gmail.com",
  "manikantanm2006826@gmail.com",
  "mayursomnathpawar123@gmail.com",
  "shubhbohra44@gmail.com",
  "atrighosh1410@gmail.com",
  "pokemon190108@gmail.com",
  "esection41@gmail.com",
  "sudi24kann@gmail.com",
  "sarvakumardubey@gmail.com",
  "dikshithrrddy@gmail.com",
  "jungleecookinsaan@gmail.com",
  "derekanton30@gmail.com",
  "iamluna7216@gmail.com",
  "lalithcs001@gmail.com",
  "krishkal9294@gmail.com",
  "dshashank698@gmail.com",
  "gvchandu000@gmail.com",
  "aayushisinha.ns@gmail.com",
  "nishu142k@gmail.com",
  "mdumar.shariff17@gmail.com",
  "harithdn456@gmail.com",
  "kavitarathod0491@gmail.com",
  "nadhiyab3@gmail.com",
  "rahulcn.2005@gmail.com",
  "bandarivikram2007@gmail.com",
  "moushmika0920@gmail.com",
  "akashkumbar2006@gmail.com",
  "chiragsgowda69@gmail.com",
  "sp2963294@gmail.com",
  "amanagarwal.exp28@gmail.com",
  "insigolon@gmail.com",
  "mohanraj963j@gmail.com",
  "jayanthas1234@gmail.com",
  "s08471200@gmail.com",
  "nbnimisha04@gmail.com",
  "sumansuhani852@gmail.com",
  "devalgupta4@gmail.com",
  "amoghmalgalli@gmail.com",
  "shreyachukki84@gmail.com",
  "hemareddynk11@gmail.com",
  "shreyamrao@gmail.com",
  "tanishqkhetwall@gmail.com",
  "kapdeaditya86@gmail.com",
  "1ds22is168@dsce.edu.in",
  "harshvardhansuryan06795@gmail.com",
  "pranathi.ananth@gmail.com",
  "amruthab875@gmail.com",
  "aksharakulkarni2k5@gmail.com",
  "harsharadhya5@gmail.com",
  "lakshanargtl@gmail.com",
  "vedansh.somani.study@gmail.com",
  "karthiksastry2k@gmail.com",
  "geywuwyeh@gmail.com",
  "adi065@gmail.com",
  "khushisaritaagrawal@gmail.com",
  "amritnohan200@gmail.com",
  "adityadhar006@gmail.com",
  "adi0077@gmail.com",
  "adi0058@gmail.com",
  "samudrachrtan1@gmail.com",
  "bm6283267@gmail.com",
  "1ds23ai001@dsce.edu",
  "adi00578@gmail.com",
  "amithkumar6363@gmail.com",
  "mahalakshmiku2003@gmail.com",
  "shreekar.6407@gmail.com",
  "5284796.9cchethan.c@gmail.com",
  "prathikshakesari@gmail.com",
  "shubhh.ab@gmail.com",
  "mdshyaan5297@gmail.com",
  "mailfaizan2023@gmail.com",
  "1ds23is064@dsce.edu.in",
  "rakshitalangoti@gmail.com",
  "sravya.sm1491@gmail.com",
  "telimushera10@gmail.com",
  "shaashvat.sanjay@gmail.com",
  "shravyanbpccbse@gmail.com",
  "rufinathomas7@gmail.com",
  "deborahsalomi16@gmail.com",
  "shettyshreesha552@gmail.com",
  "lalitaadityadharaneppanavar@gmail.com",
  "emimariya2005@gmail.com",
  "abhaysr946@gmail.com",
  "melwinf18@gmail.com",
  "thanujananjappa@gmail.com",
  "ashishranjan7868@gmail.com",
  "sanguhulsoore@gmail.com",
  "abhishekanjan70@gmail.com",
  "harshaljain192@gmail.com",
  "chinmaygrao@gmail.com",
  "1ds23cy027@dsce.edu.in",
  "tohanumbarje@gmail.com",
  "adi005@gmail.com",
  "aochuba52@gmail.com",
}

func sendEmail(to string) {
	m := gomail.NewMessage()
	m.SetHeader("From", SenderEmail)
	m.SetHeader("To", to)
	m.SetHeader("Subject", "Event Registration Confirmation")
	m.SetBody("text/plain", `Dear Attendee,

Congratulations! You’re officially registered for Catalysis 3.0!

Get ready for an incredible journey filled with innovation, learning, and collaboration. To kick things off, we invite you to the grand inauguration ceremony on March 28, 2025, at 9:00 AM in the AV Auditorium. Join us as we commence this exciting event alongside esteemed dignitaries, faculty, and fellow participants—your presence will make it even more special.

Stay connected! Join our WhatsApp community to engage with like-minded participants in your event-specific groups:
https://chat.whatsapp.com/HGzGyILfdrj8f5VYfUpm1W

Be prepared! Check out the Event Rulebook, Code of Conduct, and Terms & Conditions on our website to stay informed.

For any queries, feel free to reach out via email. If you've already done all this, simply gear up and get ready to make the most of Catalysis 3.0!
`)
	m.Attach(Attachment)

	d := gomail.NewDialer(SMTPServer, SMTPPort, SenderEmail, SenderPass)

	if err := d.DialAndSend(m); err != nil {
		log.Printf("Failed to send email to %s: %v", to, err)
	} else {
		log.Printf("Email sent to %s", to)
	}
}

func main() {
	for _, recipient := range recipients {
		sendEmail(recipient)
	}
}

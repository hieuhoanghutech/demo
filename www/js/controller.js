//hàm xử lý âm thanh
startSoundBG = function(id, loop){
	soundHandle = document.getElementById(id);
	if(loop)
		soundHandle.setAttribute('loop', loop);
	soundHandle.play();
}
soundPause = function(id){
	soundHandle = document.getElementById(id);
	soundHandle.pause();
}
startSound = function(id){
	soundHandle = document.getElementById(id);
	soundHandle.play();
}
//
$(document).ready(function () {
//button sound on và off
var sound=true;
startSound('background');
$('#btnSoundOn').click(function() {
	$('#On').hide();
  	$('#Off').show();
  	sound=false;
  	soundPause('background');
});

$('#btnSoundOff').click(function() {
	$('#Off').hide();
  	$('#On').show();
  	sound=true;
  	startSoundBG('background', true);
});	
//button hướng dẫn		
$('.huongdan').click(function() {
	$('#main').hide();
	$('.img').hide();
	$('#HuongDanChoi').show();
});
//button gioi thieu
$('.gioithieu').click(function() {
	$('#main').hide();
	$('.img').hide();
	$('#GioiThieu').show();
});
//button trở về của màn hình hướng dẫn 
$('.back').click(function() {
	$('#HuongDanChoi').hide();
  	$('#main').show();
	$('.img').show();
});
//button tro ve man hình
$('.back').click(function() {
	$('#GioiThieu').hide();
  	$('#main').show();
	$('.img').show();
});
//button thoát
$('.thoat').click(function() {
	window.close();
	
});
//button điểm cao
$('.diemcao').click(function() {
			
});

//button chơi lại
$('.playagain').click(function() {
  	$('#KetThuc').hide("fast");
    $('#main').show("fast");
    $('.img').show("fast");
    location.reload('fast');
});

//button stop
//bien de xac dinh co an nut dừng cuoc chơi ko
var stop=false;
$('#btnStop').click(function() {
	document.getElementById("scoreifStop").innerHTML="Số Tiền Đạt Được:$ "+score; 
	$('#thongbaostop').show();
	$('#helpkhangia').hide();
	$('#helpdienthoai').hide();
	$(stage).hide();
	$('#btn50').css('pointer-events', 'none')
	$('#btnkhangia').css('pointer-events', 'none')
	$('#btndienthoai').css('pointer-events', 'none')
 	$('.yes').click(function() {
 		stop=true;
 	  	$('#thongbaostop').hide();
	 	endQuestion();
	 	$('#stop').hide();
	});
	$('.no').click(function() {
 		$('#thongbaostop').hide();
	 	$(stage).show();
		$('#btn50').css('pointer-events', 'auto')
	 	$('#btnkhangia').css('pointer-events', 'auto')
	 	$('#btndienthoai').css('pointer-events', 'auto')
	 	if(clickedbtnkhangia==true){
			$('#btnkhangia').css('pointer-events', 'none')
	 		$('#helpkhangia').show();
	 	}
	 	if(clickedbtndienthoai==true){
	 		$('#helpdienthoai').show();
			$('#btndienthoai').css('pointer-events', 'none')
	 	}
		if(clickedbtn50==true){
	 		$('#btn50').css('pointer-events', 'none')
	 	}
	 	
	});
});
//button50
var number1=0;//2 biến này dùng để tìm ra 2 đáp án sai cần ẩn
var number2=0;
var clickedbtn50;
$('#btn50').click(function() {
	clickedbtn50=true; 
	//đổi hình ảnh button và khóa click
	document.getElementById("btn50").src = "imgs/dishelpButton3.png";
	document.getElementById("btn50").style.pointerEvents = 'none'; 
	//random so tu 1 toi 3
	var a=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	var b=Math.floor(Math.random() * (3 - 1 + 1)) + 1;
	//nếu bằng nhau thi cộng trừ 1 đơn vị để khác nhau
	if (a == b){
    	if (a !== 1){
        	a--
        } 
		else{
            a++
            }
    }
	//chon ra 2 đáp án random khác với đáp án		
	number1 = (answer + a) % 4;
    if (number1 == 0)(
		number1 = 4
	);
    number2 = (answer + b) % 4;
    if (number2 == 0)(
		number2 = 4
	);
	//disable even click và đổi màu chữ để trùng với màu nền của 2 đáp án đó
	document.getElementById(number1).style.color="#3498db";
	document.getElementById(number1).style.pointerEvents = 'none';
	document.getElementById(number2).style.color="#3498db";
	document.getElementById(number2).style.pointerEvents = 'none';
});
//button trợ giúp từ khán giả
var clickedbtnkhangia;//biến để  xem đã click button khán giả chưa
$('#btnkhangia').click(function() {
	clickedbtnkhangia=true
	//đổi hình ảnh button và khóa click
 	document.getElementById("btnkhangia").src = "imgs/dishelpButton2.png";
 	document.getElementById("btnkhangia").style.pointerEvents = 'none';
	//nếu
 	$('#helpkhangia').show();
 	$('#helpdienthoai').hide();
 	//chia đều 60% cho 4 đáp án
 	var sum=60;
 	var A=Math.floor(Math.random() * (sum - 0 + 1)) + 0;
 	var B=Math.floor(Math.random() * (sum-A - 0 + 1)) + 0;
 	var C=Math.floor(Math.random() * (sum-A-B - 0 + 1)) + 0;
 	var D=sum - A - B - C;
	//da dung btn50 truoc do thi se cong het phan tram 2 dap an bien mat cho đáp án đúng  hết,number1 va number2 la 2 số ở trên hàm btn50
	if(clickedbtn50==true){
		//neu dap an la A  
    	if(answer==1){
			A=A+40
			if((number1==2&&number2==3)||(number1==3&&number2==2)){
				A=A+B+C;
				B=0;
				C=0;
			}
			if((number1==2&&number2==4)||(number1==4&&number2==2)){
				A=A+B+D;
				B=0;
				D=0;
			}
			if((number1==3&&number2==4)||(number1==4&&number2==3)){
				A=A+C+D;
				C=0;
				D=0;
			}
		} 
		//neu dap an la B  
    	if(answer==2)
		{
			B=B+40
			if((number1==1&&number2==3)||(number1==3&&number2==1)){
				B=B+A+C;
				A=0;
				C=0;
			}
			if((number1==1&&number2==4)||(number1==4&&number2==1)){
				B=B+A+D;
				A=0;
				D=0;
			}
			if((number1==3&&number2==4)||(number1==4&&number2==3)){
				B=B+C+D;
				C=0;
				D=0;
			}
		}
		//neu dap an la C  
    	if(answer==3){
			C=C+40
			if((number1==1&&number2==2)||(number1==2&&number2==1)){
				C=C+A+B;
				A=0;
				B=0;
			}
			if((number1==2&&number2==4)||(number1==4&&number2==2)){
				C=C+B+D;
				B=0;
				D=0;
			}
			if((number1==1&&number2==4)||(number1==4&&number2==1)){
				C=C+A+D;
				A=0;
				D=0;
			}
		}
		//neu dap an la D  
    	if(answer==4)
		{
			D=D+40
			if((number1==1&&number2==2)||(number1==2&&number2==1)){
				D=D+A+B;
				A=0;
				B=0;
			}
			if((number1==2&&number2==3)||(number1==3&&number2==2)){
				D=D+B+C;
				B=0;
				C=0;
			}
			if((number1==1&&number2==3)||(number1==3&&number2==1)){
				D=D+A+C;
				A=0;
				C=0;
			}
		}
	}
	//truong hop chua dung button trợ giúp 50/50 thi cong 40% cho dap an dung
	else{
 		if(answer==1)
 			A=A+40;
 		if(answer==2)
 			B=B+40;
 		if(answer==3)
 			C=C+40;
 		if(answer==4){
 			D=D+40;
 		}
	}
 	//làm hiệu ứng tăng tới các phần trăm tìm được ở trên
 	var countA=0;
 	var countB=0;
 	var countC=0;
 	var countD=0;
	//tùy chỉnh tốc độ tăng của phần trăm khán giả
 	var counterA=setInterval(timerA, 30);
 	var counterB=setInterval(timerB, 30);
 	var counterC=setInterval(timerC, 30);
 	var counterD=setInterval(timerD, 30);
 	//hàm tăng
	function timerA()
	{
		if(A==0){
			document.getElementById("khangiaA").innerHTML="A:0%"
		}
  		countA=countA+1;
  		if (countA == A+1){
			clearInterval(counterA);
     		return;
    	}
		document.getElementById("khangiaA").innerHTML="A:"+countA+"%" 
	}
 	function timerB()
	{
		if(B==0){
			document.getElementById("khangiaB").innerHTML="B:0%"
		}
  		countB=countB+1;
  		if (countB == B+1){
			clearInterval(counterB);
     		return;
    	}
		document.getElementById("khangiaB").innerHTML="B:"+countB+"%" 
	}
   
	function timerC()
	{
		if(C==0){
			document.getElementById("khangiaC").innerHTML="C:0%"
		}
  		countC=countC+1;
  		if (countC == C+1)
  		{
			clearInterval(counterC);
     		return;
    	}
		document.getElementById("khangiaC").innerHTML="C:"+countC+"%"
	}
	function timerD()
	{	
		if(D==0){
			document.getElementById("khangiaD").innerHTML="D:0%" 
		}
  		countD=countD+1;
  		if (countD == D+1)
  		{
			clearInterval(counterD);
     		return;
    	}
		document.getElementById("khangiaD").innerHTML="D:"+countD+"%"  
   	} 
});
//btnkhangia
var clickedbtndienthoai;
$('#btndienthoai').click(function() {
	clickedbtndienthoai=true;
 	//đổi hình ảnh button và khóa click
	document.getElementById("btndienthoai").src = "imgs/dishelpButton1.png";
  	document.getElementById("btndienthoai").style.pointerEvents = 'none';	
  	//tắt âmm thanh nền va tictac 
  	soundPause('background');
	soundPause('tictac');
	//Nếu mở âm thanh 
  	if(sound==true){
  		//tiến chuông điện thoại
  		startSoundBG('phonering', true);
  		//sau 6 giây thì tắt tiếng chuông và bật MCtalk,sau 6 giây tiếp theo thi co tiếng tictac 
  		setTimeout(function(){ soundPause('phonering');},6000);
  		setTimeout(function(){ startSound('MCtalk');},8000);
   		setTimeout(function(){ startSound('tictac');},14000);
  	}
	//
	//khóa ko cho click  btnkhangia,btn50,chọn đáp án
  	$('#btnkhangia').css('pointer-events', 'none')
  	$('#btn50').css('pointer-events', 'none')
  	$('.box').css('pointer-events', 'none')
  	//
  	$('#helpdienthoai').show();
  	document.getElementById('nguoithan').innerHTML="Điện thoại đang kết nối,xin giữ máy..."
 	//Nếu đáp án đúng là A
  	if(answer==1){
		setTimeout(function(){document.getElementById('nguoithan').innerHTML="GS.Cù Trọng Xoay:Xin chào anh Lại Văn Sâm"},6000);  
  		setTimeout(function(){document.getElementById('MC').innerHTML="MC:Chào Giáo Sư,bạn của anh đang ở câu hỏi mức $"+			diemTungCau[Number]+" và cần sự giúp đỡ"},7000);
		setTimeout(function(){document.getElementById('nguoithan1').innerHTML="Bạn:"+questionBank[b[Number]][0]},14000);
		setTimeout(function(){document.getElementById('MC1').innerHTML="GS.Cù Trọng Xoay :Uhm..Câu trả lời là A."},17000);
  	}
  	if(answer==2){
		setTimeout(function(){document.getElementById('nguoithan').innerHTML="Tào Tháo:Xin chào  Lại Văn Sâm"},6000);  
  		setTimeout(function(){document.getElementById('MC').innerHTML="MC:Chào Tháo,bạn của anh đang ở câu hỏi mức $"+diemTungCau[Number]+" và cần sự giúp đỡ"},7000);
		setTimeout(function(){document.getElementById('nguoithan1').innerHTML="Bạn:"+questionBank[b[Number]][0]},14000);
		setTimeout(function(){document.getElementById('MC1').innerHTML="Tào Tháo:Ta nghĩ câu trả lời là B"},17000);
  	}
  	if(answer==3){
		setTimeout(function(){document.getElementById('nguoithan').innerHTML="Khắc Việt:Xin chào anh Lại Văn Sâm"},6000);  
  		setTimeout(function(){document.getElementById('MC').innerHTML="MC:Chào Việt,bạn của em đang ở câu hỏi mức $"+diemTungCau[Number]+" và cần sự giúp đỡ"},7000);
		setTimeout(function(){document.getElementById('nguoithan1').innerHTML="Bạn:"+questionBank[b[Number]][0]},14000);
		setTimeout(function(){document.getElementById('MC1').innerHTML="Khắc Việt:Theo mình câu trả lời là C"},1000);
  	}
  	if(answer==4){
		setTimeout(function(){document.getElementById('nguoithan').innerHTML="Tèo:Xin chào anh Lại Văn Sâm"},6000);  
  		setTimeout(function(){document.getElementById('MC').innerHTML="MC:Chào em,bạn của em đang ở câu hỏi mức $"+diemTungCau[Number]+" và cần sự giúp đỡ"},7000);
		setTimeout(function(){document.getElementById('nguoithan1').innerHTML="Bạn:"+questionBank[b[Number]][0]},14000);
		setTimeout(function(){document.getElementById('MC1').innerHTML="Tèo:Theo Tèo câu trả lời là D"},17000);
  	}
  	//làm ẩn đi số trên đồng hồ
  	document.getElementById("timer").style.color= '#09F'
  	//Công thoi gian them 30 để tạo delay tránh hết giờ
  	count=count+30;
  	//sau 13 giay se cho reset thoi gian lai thanh 31
  	setTimeout(function(){count=31},13000);
  	//làm hiện lại số của đồng hồ sau 14 giay
  	setTimeout(function(){document.getElementById("timer").style.color= 'white'},14000);
  	//sau 17s sẽ mở khóa  btnkhangia,btn50(nếu như chưa xài),mở khóa click các đáp án(ngoại trừ 2 đáp án đã  ẩn đi khi50/50
  	if(clickedbtnkhangia!=true){
  		setTimeout(function(){$('#btnkhangia').css('pointer-events', 'auto')},17500);
  	}
	if(clickedbtn50!=true){
  		setTimeout(function(){$('#btn50').css('pointer-events', 'auto')},17500);
  	}
  	setTimeout(function(){ $('.box').css('pointer-events', 'auto')},17500);
  	setTimeout(function(){document.getElementById(number1).style.pointerEvents = 'none';document.getElementById(number2).style.pointerEvents = 'none';  },17500);
});
//
var Number=0;
var questionBank=new Array();
var stage="#main2";
var stage2=new Object;
var questionLock=false;
//game gồm 15 câu hỏi
var numberOfQuestions=15;
//số tiền người chơi đạt được
var score=0;
//mảng chứa số lượng câu hỏi trong json
var items=[];
//mảng này sẽ chứa 15 số random từ mảng items,tương ứng với thứ tự câu hỏi sẽ đuoc xuất ra
var b=[];
$.getJSON('https://hoangvanhieu.000webhostapp.com/api.php/user', function(data) {
	for(i=0;i<data.quizlist.length;i++){ 
		questionBank[i]=new Array;
		questionBank[i][0]=data.quizlist[i].question;
		questionBank[i][1]=data.quizlist[i].option1;
		questionBank[i][2]=data.quizlist[i].option2;
		questionBank[i][3]=data.quizlist[i].option3;
		questionBank[i][4]=data.quizlist[i].option4;
		questionBank[i][5]=data.quizlist[i].answer;
		questionBank[i][6]=data.quizlist[i].level;
		}
		//button bắt đầu trò chơi
		$('.play').click(function() {
			$('#main').hide("slow");
  			$('.img').hide("slow");
  			$('#main2').show();
  			$('#trogiup').show();
  			$('#timer').show();
			startSound('tictac');	
			// khi bắt đầu chơi sẽ ko được tắt mở âm thanh nữa
			$('#btnSoundOn').remove();
			$('#btnSoundOff').remove();
		    //them vao mảng items các số tương ứng với số lượng câu hỏi trong json 
			for(y=0;y<data.quizlist.length;y++){
				items[y]=y;
			}
		    //random ra 15 số từ items để cho vào mảng b[i]
			var a;
			for(i=0;i<15;i++){ 
			
				a= items[Math.floor(Math.random()*items.length)];
				//Câu hỏi số 1 tới câu 5 là level 1
				if(i<5)
				{
					while(data.quizlist[a].level!=1){
						 a= items[Math.floor(Math.random()*items.length)];
					}
				}
				//Câu hỏi số 6 tới câu 10 là level 2
				if(i==5||i==6||i==7||i==8||i==9)
				{
					while(data.quizlist[a].level!=2){
						 a= items[Math.floor(Math.random()*items.length)];
					}	
				}
				//Câu hỏi số 11 tới câu 15 là level 3
				if(i==10||i==11||i==12||i==13||i==14)
				{
					while(data.quizlist[a].level!=3){
						 a= items[Math.floor(Math.random()*items.length)];
					}
				}
				//
				b[i]=a
				var vitri = items.indexOf(a);
				items.splice(vitri,1);
				
			}
			//		 
			displayQuestion();
		});
});
//Hàm load câu hỏi và đáp án,thời gian từn câu hỏi và các xử lý khi chọn đáp án
var count;//biến thời gian của đồng hồ
	//Mức tiền từng câu lần lượt từ câu 1 tới câu 15 
var diemTungCau=[100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];
function displayQuestion(){
	//đổi màu mức tiền  câu 5,10,15 thành màu vàng
	if(Number==4||Number==9||Number==14)
		document.getElementById("money").style.color="#FF0"
	else
		document.getElementById("money").style.color="white"
	//Hiển thị mức tiền cho các câu hỏi
	document.getElementById("money").innerHTML="$ "+diemTungCau[Number]; 
	//Hiện button stop
	$('#stop').show();
	//Hàm Set time countdown 30s cho mỗi  câu hỏi
	count=31;
	function timer(){
  		count=count-1;
		if (count <= -1){  		
			endQuestion();
     		clearInterval(counter);
			$('#thongbaostop').hide();
     		return;
    	}
				
		document.getElementById("timer").innerHTML=count 
	}
 	counter=setInterval(timer, 1000);
	//
	var q1;
	var q2;
	var q3;
	var q4;
	cauhoi=questionBank[b[Number]][0];
	q1=questionBank[b[Number]][1];q2=questionBank[b[Number]][2];q3=questionBank[b[Number]][3];
	q4=questionBank[b[Number]][4];
	answer=questionBank[b[Number]][5];
	var cau=Number+1;
	$("#money").show();
	//Do Cau hoi vao table.
	$(stage).append('<table><tr ><div id="question" >'+cau+"."+''+questionBank[b[Number]][0]+
	'</div></tr><tr ><td ><div id="1"class="box">'+q1+
	'</div></td><td><div id="2"class="box">'+q2+
	'</div></td></tr><tr><td><div id="3" class="box">'+q3+
	'</div></td><td><div id="4" class="box">'+q4+
	'</div></td></tr></table>');
	$('.box').click(function(){
	 //ngưng countdown thời gian;
		clearInterval(counter);
	 //khi da chon cau tra loi thi se add vao class no-hover lam vo hieu hoa css hover cua cac cau tra loi
	 	$('.box').addClass('no-hover');
	 //ko cho chon quyền trợ giúp va button stop khi đã chon cau tra loi
	 	$('#btn50').css('pointer-events', 'none')
	 	$('#btnkhangia').css('pointer-events', 'none')
	 	$('#btndienthoai').css('pointer-events', 'none')
	 	$('#btnStop').css('pointer-events', 'none')
	 //neu ko gan se ko settimeout dc nhieu lan
	 	var id1=this.id;	
	 //
  	 	if(questionLock==false){ 
  			questionLock=true;
			//đáp án người chơi chọn hiện màu cam
  			document.getElementById(id1).style.background= 'orange';
 		//Hiệu ứng nhấp nháy màu cho câu trả lời người chơi chọn
    		setTimeout(function(){document.getElementById(id1).style.background= 'green'},1800);
  			setTimeout(function(){document.getElementById(id1).style.background= 'red'},1900);
  			setTimeout(function(){document.getElementById(id1).style.background= 'green'},2100);
  			setTimeout(function(){document.getElementById(id1).style.background= 'red'},2200);
  			setTimeout(function(){document.getElementById(id1).style.background= 'green'},2300);
  			setTimeout(function(){document.getElementById(id1).style.background= 'red'},2400);
  			setTimeout(function(){document.getElementById(id1).style.background= 'green'},2500);
  			setTimeout(function(){document.getElementById(id1).style.background= 'red'},2600);
  			setTimeout(function(){document.getElementById(id1).style.background= 'green'},2700);
  			setTimeout(function(){document.getElementById(id1).style.background= 'red'},2800);
  			setTimeout(function(){document.getElementById(id1).style.background= 'green'},2900);
  		//tắt nhạc nền va tiếng tictac cua btndienthoai(nếu có)	
  			soundPause('background');
  			soundPause('tictac');
		//đáp án đúng hiện màu xanh		
			setTimeout(function(){document.getElementById(answer).style.background= 'green'},3000);	
  		//correct answer
  			if(this.id==answer){
   				score=diemTungCau[Number];
   			//âm thanh khi chọn đúng
   				if(sound==true)
   					setTimeout(function(){ startSound('rightsound');},3000);
				//delay  sau 2s mới bắt đầu tính giờ câu tiếp theo
   				setTimeout(function(){document.getElementById("timer").style.color= '#09F'},3000);
   				setTimeout(function(){document.getElementById("timer").style.color= 'white'},6000);
   				setTimeout(function(){changeQuestion()},5000);
  			}
  		//wrong answer	
  			if(this.id!=answer){
		//âm thanh khi chon sai
				if(sound==true)
    				setTimeout(function(){ startSound('wrongsound');},3000);	
		// 	đáp người chơi chọn sai thì hiện màu đỏ
   			setTimeout(function(){document.getElementById(id1).style.background= 'red'},3000);	
   			setTimeout(function(){endQuestion()},5000);
			}
		}
	})
}
//hàm chuyển câu hỏi và câu trả lời tiếp theo
function changeQuestion(){
	Number++;
	//de reset lai 2 dap an ẩn đi nếu có dung 50/50 de ko anh huong toi 2 btn tro giup con lai
	number1=0;
	number2=0;
	//bật lại  âm thanh nền 
	if(sound==true)
		startSoundBG('background', true);
	else
		soundPause('background');
	//Nều đã dùng quyền trợ giúp nào thì khi chuyển câu hỏi sẽ remove màn hình và khóa luôn btn tro giúp đó dể khi ấn "Không" của btnstop sẽ ko hiện lại
	if(clickedbtnkhangia==true){
		$('#helpkhangia').remove();
		$('#btnkhangia').css('pointer-events', 'none')
	}
	else
		$('#btnkhangia').css('pointer-events', 'auto')
	//
	if(clickedbtndienthoai==true){
	 	$('#helpdienthoai').remove();
		$('#btndienthoai').css('pointer-events', 'none')
	}
	else
		$('#btndienthoai').css('pointer-events', 'auto')
	//		
	if(clickedbtn50==true){
		$('#btn50').css('pointer-events', 'none')
	}
	else
		$('#btn50').css('pointer-events', 'auto')
	//cho phép click button stop khi qua cau hoi khac
	$('#btnStop').css('pointer-events', 'auto')
	
	//chú ý,thay đổi qua lại stage2 và stage3 để load câu hỏi mới,trong đó stage luôn dùng để hiển thị câu hỏi mới và stage2 để ẩn câu hỏi cũ	
	if(stage=="#main2"){
		stage2="#main2";stage="#main3";
	}
	else{
		stage2="#main3";stage="#main2";
	}
	if(Number<numberOfQuestions){
		displayQuestion();
	}
	else{
		displayFinalSlide();
	}
	$(stage2).empty();
	$(stage2).hide();
	$(stage).show();
	questionLock=false;
}
//hàm kết thúc khi trả lời sai
function endQuestion(){
	if(stage=="#main2"){
		stage2="#main2";stage="#main3";
	}
	else{
		stage2="#main3";stage="#main2";
	}
	displayFinalSlide();
	$(stage2).empty();
	$(stage2).hide();
	$(stage).show();
	questionLock=false;
}
function displayFinalSlide(){
	//nếu như thua truoc khi tra loi het hoac ko dừng cuộc chơi đúng các mốc quy dinh se bi tru phan nua so diem
	if((Number<numberOfQuestions&&stop==false)){ 
		document.getElementById('title').innerHTML="Rất Tiếc, Bạn Đã Thua Cuộc"   
	//khi qua các mốc 5 10 mà trả lời sai tiền trở về mốc mặc định
		if(Number<5)
			score=0;
		if(Number>=5 && Number <10)
			score=1000;
		if(Number>=10)
			score=32000;
		
		//âm thanh khi thua
		if(sound==true)
			startSound('gameover');
	}
	else{
		if(stop==true)
			document.getElementById('title').innerHTML="Bạn Đã Dừng Cuộc Chơi, Số Tiền Được Bảo Toàn"
		else
			document.getElementById('title').innerHTML="Chúc Mừng Bạn Đã Chiến Thắng"
		if(sound==true)
			startSound('winner');
	}
	//tắt âm thanh tic tac,phonering,MCtalk,am thanh nền neu co
	soundPause('background')
	soundPause('tictac');
    soundPause('phonering');
    soundPause('MCtalk');
    $('#money').hide();
	//Số câu hỏi và số tiền đạt được
	document.getElementById("KetQua").innerHTML="Bạn Đã Vượt Qua Câu Hỏi Số: "+Number+"<br>Số Tiền Đạt Được:$ "+score  ;
	stage="#KetThuc";
	//
	$('#stop').hide();
	$('#helpkhangia').hide();
	$('#helpdienthoai').hide();
	$('#btn50').css('pointer-events', 'none')
  	$('#btnkhangia').css('pointer-events', 'none')
  	$('#btndienthoai').css('pointer-events', 'none')
	$('#timer').hide();
}//
});//doc ready

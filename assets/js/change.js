var ovb = 5;
var i;
var myarr=['1','2','3','4','6','•','wd','W','nb'];
var ar=[];
for(i=0;i<ovb;i++)
{
	var run = myarr[(Math.random() * myarr.length) | 0];
	ar.push(run);
	 var scr=ar.join(" &nbsp; ");
	 console.log(scr);
		if(run=='wd')
		{
			ovb++;
			document.getElementById("runs").innerHTML=" "+scr;
		}
		if(run=='nb')
		{
			ovb++;
			document.getElementById("runs").innerHTML=" "+scr;
		}
		else
		{
			document.getElementById("runs").innerHTML=" "+scr;
		}
}

var bt1=document.getElementById("t1bg1");		var bt2=document.getElementById("t1bg2");
var tm1=document.getElementById("tm1");

var timg1=document.getElementById("timg1");	
var timg2=document.getElementById("timg2");	


function btone() {
bt2.style.background = "#004f91";	bt2.style.color = "white";	bt1.style.color = "#004f91";	bt1.style.background = "#eef";
tm1.innerHTML=" MI ";	tmf1.innerHTML=" Mumbai Indians ";
timg1.src="assets/img/mi.png";

}

function bttwo() {
bt2.style.background = "#ffee55";	bt2.style.color = "navy";	bt1.style.color = "navy";	bt1.style.background = "#ffc";
tm1.innerHTML=" CSK ";	tmf1.innerHTML=" Chennai Super Kings ";
timg1.src="assets/img/csk.png";
}

function btthr() {
bt2.style.background = "#f55";	bt2.style.color = "white";	bt1.style.color = "#911";		bt1.style.background = "#fee";
tm1.innerHTML=" KXIP ";	tmf1.innerHTML=" Punjab kings ";
timg1.src="assets/img/kxip.png";
}

function btfr() {
bt2.style.background = "purple";	bt2.style.color = "yellow";	bt1.style.color = "purple";		bt1.style.background = "#ffd";
tm1.innerHTML=" KKR ";	tmf1.innerHTML=" Kolkata Knight Riders ";
timg1.src="assets/img/kkr.png";
}

var bw=document.getElementById("t2bg");	
var tm2=document.getElementById("tm2");	

function bwone() {
bw.style.color = "white";	bw.style.background = "#004f91";
tmf2.innerHTML="  Mumbai Indians ";		
timg2.src="assets/img/mi.png";
}

function bwtwo() {
bw.style.color = "navy";	bw.style.background = "#ffee55";
tmf2.innerHTML="  Chennai Super Kings  ";	
timg2.src="assets/img/csk.png";
}

function bwthr() {
bw.style.color = "white";	bw.style.background = "#f55";
tmf2.innerHTML="  Punjab kings  ";	
timg2.src="assets/img/kxip.png";
}

function bwfr() {
bw.style.color = "yellow";	bw.style.background = "purple";
tmf2.innerHTML=" Kolkata Knight Riders ";	
timg2.src="assets/img/kkr.png";
}



function disth21(){
$("#th21").attr('disabled',true);		$("#th22").attr('disabled',false);		$("#th23").attr('disabled',false);		$("#th24").attr('disabled',false);
}
function disth11(){
$("#th11").attr('disabled',true);		$("#th12").attr('disabled',false);		$("#th13").attr('disabled',false);		$("#th14").attr('disabled',false);
}

function disth22(){
$("#th21").attr('disabled',false);		$("#th22").attr('disabled',true);		$("#th23").attr('disabled',false);		$("#th24").attr('disabled',false);

}
function disth12(){
$("#th11").attr('disabled',false);		$("#th12").attr('disabled',true);		$("#th13").attr('disabled',false);		$("#th14").attr('disabled',false);
}

function disth23(){
$("#th21").attr('disabled',false);		$("#th22").attr('disabled',false);		$("#th23").attr('disabled',true);		$("#th24").attr('disabled',false);
}
function disth13(){
$("#th11").attr('disabled',false);		$("#th12").attr('disabled',false);		$("#th13").attr('disabled',true);		$("#th14").attr('disabled',false);
}

function disth24(){
$("#th21").attr('disabled',false);		$("#th22").attr('disabled',false);		$("#th23").attr('disabled',false);		$("#th24").attr('disabled',true);
}
function disth14(){
$("#th11").attr('disabled',false);		$("#th12").attr('disabled',false);		$("#th13").attr('disabled',false);		$("#th14").attr('disabled',true);
}


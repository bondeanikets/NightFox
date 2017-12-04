var time_stroke = 0; // time counter for get one stroke
var cnt_sketch = 0; // counter for get one sketch
var Sketch_TIMEWINDOW = 100;// 100ms = 10 seconds.
var Gaze_TIMEWINDOW = 50;// 5 seconds
var SKETCH = 5; // 5 strokes in one sketch
var GAZE = 5; // 5 gazes in one sketch for return
var strokeX = new Array(); // store x,y from data
var strokeY = new Array();
var sketch = new Array(); // store recognized strokes or gazing results
var TEMPLATE_SKETCH = ['R','D','L','U','R']; // One template for testing sketch recognition results
var SIGN_Start = true; // True for 1st time start recognizing strokes could be replaced by start button
var SIGN_sketching = true;// True for recognizing sketch while gazing must be false
var SIGN_gazing = false;// True for recognizing gazing while skething must be false

TEMPLATE_SKETCH = TEMPLATE_SKETCH.toString();
var init = function(data,clock) {
if (clock>20000){// bigger than 100000 is just for delay
	if (SIGN_Start){
	SIGN_Start = false;
	//removeMouseEventListeners();
	alert('Recognizting starts now!');
	home();
	myMove();
	var gazeresult;
	}
	time_stroke = time_stroke+1;
	if (data){
		strokeX.push(data.x);
		strokeY.push(data.y);
		//console.log('Push one point');
	}
	
	// Check signs & Start recognizing
	if ((!SIGN_sketching)&SIGN_gazing){//gazing
		if ((time_stroke>Gaze_TIMEWINDOW)&(strokeX.length>10)) {
			cnt_sketch = cnt_sketch+1;
			recognition(strokeX,strokeY);//recognize sketch
			if (cnt_sketch>GAZE-1){
				//alert(SKETCH+' strokes form one sketch is achieved.');
				alert(sketch);// show recognized sketch(5 strokes)
				gazeresult = templatematching(sketch, false);//false is for gaze
				cnt_sketch = 0;
				sketch.length = 0;
			}
			time_stroke = 0;
		}

		/*if ((time_stroke>Gaze_TIMEWINDOW)&(strokeX.length>10)) {
			recognition(strokeX,strokeY);	// recognize gazing
			alert(sketch);
		}*/
	}else if ((!SIGN_gazing)&SIGN_sketching){//sketching

		if ((time_stroke>Sketch_TIMEWINDOW)&(strokeX.length>10)) {
			cnt_sketch = cnt_sketch+1;
			recognition(strokeX,strokeY);//recognize sketch
			if (cnt_sketch>SKETCH-1){
				//alert(SKETCH+' strokes form one sketch is achieved.');
				alert(sketch);// show recognized sketch(5 strokes)
				gazeresult = templatematching(sketch,true);
				//str_sketch = sketch.toString();
				//if (str_sketch == TEMPLATE_SKETCH){
				//	alert(sketch);
				//}
				cnt_sketch = 0;
				sketch.length = 0;
			}
			time_stroke = 0;
		}
	}
}
else if (clock<1){
	alert('something is wrong! clock is null');
}

	
	//console.log('hello world!!!');
	//alert('init inside stroke1');

}

var recognition = function(strokeX,strokeY){
	var L = strokeX.length;
	var GAP = 8;
	// Feature1 : cos of the start point 
	// Feature2 : sin of the start point
	// Feature3 : cos of the end point
	// Feature4 : sin od the end point
	
	var startX = mean(strokeX.slice(0,GAP));// median X for the first 5 points
	var startY = mean(strokeY.slice(0,GAP));// median Y for the first 5 points
	var midX = mean(strokeX);		// median X for the whole stroke
	var midY = mean(strokeY);		// median Y for the whole stroke
	var endX = mean(strokeX.slice(L-GAP+1,L));// median X for the last 5 points
	var endY = mean(strokeY.slice(L-GAP+1,L));// median Y for the last 5 points
	

	// 1st Method, 
	// Feature5 : cos between start and end point
	// Feature6 : sin between start and end point
	f5 = (endX-startX);
	f6 = -1*(endY-startY);
	var D = Math.sqrt(Math.pow(f5,2)+Math.pow(f6,2));
	f5 = f5/D;
	f6 = f6/D;


	// 2nd Method, 
	// Feature5 : cos between (start+mid)/2 and (mid+end)/2
	// Feature6 : sin between (start+mid)/2 and (mid+end)/2
	//f5 = ((midX+endX)/2-(startX+midX)/2);
	//f6 = ((midY+endY)/2-(startY+midY)/2);
	//var D = Math.sqrt(Math.pow(f5,2)+Math.pow(f6,2));
	//f5 = f5/D;
	//f6 = f6/D;
	
	// Recognition based on f5 and f6
	if ((!SIGN_sketching)&SIGN_gazing){//gazing
		var gazeY = 0; // Y for upper side button
		var gazeN = 0; // N for lower side button
		for(var i=0;i<strokeX.length;i++){
			if (strokeX[i]>0.5*screen.width){//right side of the screen?
				if (strokeY[i]>0.5*screen.height){
					gazeN++;
				}else{
					gazeY++;
				}
			}
                }

		if (gazeY>gazeN){
			sketch.push('Y');
			//sketch = [gazeY,gazeN,'Y','Y','Y','Y','Y'];
		}else{
			sketch.push('N')
			//sketch = [gazeY,gazeN,'N','N','N','N','N'];
		}


		/*var gazeX = sum(strokeX>(0.6*screen.width));
		var gazeY = Math.sign(strokeY-(0.5*screen.height))*sum(strokeY>(0.5*screen.height))+Math.sign(strokeY-(0.5*screen.height))*sum(strokeY<(0.5*screen.height));// sum>0, UpButton, sum<0, DownButton
		//var UpButton = gazeX;
		//var DownButton = ;
		gazeX = gazeX/L;// >0.5, more than half of X hit the right 1/3 screen.
		gazeY = gazeY/L;// >0.5, more than half of Y hit upper side of screen. <0.5, more than half of Y hit lower side of screen.
		sketch = ['Not enough',gazeX,gazeY];
		if (gazeX>0.5){
			if (gazeY>0.5){
				sketch = ['N','N','N','N','N'];
			}else if (gazeY<-0.5){
				sketch = ['Y','Y','Y','Y','Y'];
			}
		}*/


	}else if ((!SIGN_gazing)&SIGN_sketching){//sketching

		if ((f5>=Math.sqrt(2)/2)&(Math.abs(f6)<=Math.sqrt(2)/2)){
			sketch.push('R');// Right
			//alert('cos is '+f5+'sin is '+f6+'Right');
			//alert('START:('+startX+','+startY+')'+' END:('+endX+','+endY+')');
		}else if ((Math.abs(f5)<=Math.sqrt(2)/2)&(f6<=-1*Math.sqrt(2)/2)){
			sketch.push('D');// Down
			//alert('cos is '+f5+'sin is '+f6+'Down');
			//alert('START:('+startX+','+startY+')'+' END:('+endX+','+endY+')');
		}else if ((f5<=-1*Math.sqrt(2)/2)&(Math.abs(f6)<=Math.sqrt(2)/2)){
			sketch.push('L');// Left
			//alert('cos is '+f5+'sin is '+f6+'Left');
			//alert('START:('+startX+','+startY+')'+' END:('+endX+','+endY+')');
		}else if ((Math.abs(f5)<=Math.sqrt(2)/2)&(f6>=Math.sqrt(2)/2)){
			sketch.push('U');// Up
			//alert('cos is '+f5+'sin is '+f6+'Up');
			//alert('START:('+startX+','+startY+')'+' END:('+endX+','+endY+')');
		}else{
			console.log(f5);
			console.log(f6);
			alert('start and end is the same point');
		}
	}
	strokeX.length = 0;
	strokeY.length = 0;
}

var mean = function (numbers) {
    var total = 0, i;
    for (i = 0; i < numbers.length; i += 1) {
        total += numbers[i];
    }
    return total / numbers.length;
}

var median = function (numbers) {
    // median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
    var median = 0, numsLen = numbers.length;
    numbers.sort();
 
    if (
        numsLen % 2 === 0 // is even
    ) {
        // average of two middle numbers
        median = (numbers[numsLen / 2 - 1] + numbers[numsLen / 2]) / 2;
    } else { // is odd
        // middle number only
        median = numbers[(numsLen - 1) / 2];
    }
 
    return median;
}

var sum = function (input){
             
 if (toString.call(input) !== "[object Array]")
    return false;
      
            var total =  0;
            for(var i=0;i<input.length;i++)
              {                  
                if(isNaN(input[i])){
                continue;
                 }
                  total += Number(input[i]);
               }
             return total;
}


let myTotal = 0;	// 現在の合計値
let myInput = "";	// 現在入力している値
let myCalc = "+";	// 合計と入力値の演算子
let myFlg = 1;	// １回前に入力したもの 0:数字 1:演算子
 	
function myValue(myData){	// 1～9または小数点ボタンを押した
myFlg = 0;	// １回前に入力したものは数値
myInput += myData;	// 現在入力している値に追加
document.myForm.myLine.value = myInput;	// 現在入力している値表示
}	
 	
function myCalculate(myData){	// 演算ボタンを押した
if (myFlg==0){	// １回前に入力したものは数値か？
myFlg = 1;	// １回前に入力したものは演算子
myWork = myTotal + myCalc + myInput;	// 一連の計算式を作る
myTotal = eval(myWork);	// 計算式を計算させる
myInput = "";	// 現在入力している値をクリア
document.myForm.myLine.value = myTotal;	// 合計を表示
}	
if (myData == "="){	// 演算ボタンは[＝]か？
myTotal = 0;	// 合計をクリア
myCalc = "+";	// 演算子を[+]とする
}else{	// 演算ボタンは[＝]以外である
myCalc = myData;	// 演算子を退避させておく
}	
}	
 	
function myC(){	// クリアボタン[C]を押した
myTotal = 0;	// 合計クリア
myCalc = "+";	// 演算子クリア
myInput = "";	// 現在入力している値をクリア
document.myForm.myLine.value = myTotal;	// つまり、０を表示
}	
function zero(mydate){//0を押した時
if myFlg=zero//前の数字が0
document.myForm.myLine.value = myTotal;	// ０を表示
}	


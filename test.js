$(function(){
  console.log('exit');
 var total = 0; //現在の式
 var operator = ''; //演算子
 var currentValue = ''; //現在の値
 var flag = 0; //ボタンが押されたあとに効かなくする※flag(フラグ)を立てる。最初は0を代入。




$('[id=number]').on('click', function() {
   let action = $(this).text();
   console.log(action);
  if (currentValue.length <= 8) {
    flag = 0;
    currentValue += action;
    $('#number-text').text(currentValue);
    console.log(currentValue); //確認用
  }
});


$('#zero').on('click', function() {
  let action = $(this).text();
　 if (currentValue > 0) {
    flag = 0;
    currentValue += action;
    $('#number-text').text(currentValue);
  }else {
    return;
  }
});


$('#clear-btn').on('click', function() {
  operator = '';
  total = '';
  currentValue = '';
  flag = 0;
  $('#number-text').text('0');
  console.log(0);
});


$('[id=calc]').on('click', function() {
   let action = $(this).text();
　 if (currentValue === '') {
    return; //最初に演算子を押せなくする
  }else if (flag === 0 && action !== "=") {
    flag = 1;
    let formula = total + operator + currentValue;
    total = eval(formula);
    
    operator = action;
    currentValue = '';
    
    $('#number-text').text(total);
    console.log(total);
  } else if (flag === 1 && action === "=") {
    let formula = total + operator + currentValue;
    total = eval(formula);
    


    currentValue = "";
    $('#number-text').text(total);
  } else if (action === "=") {
    flag = 1;


    var formula = total + operator + currentValue;
    total = eval(formula);
    currentValue = "";
    operator = action;
    $('#number-text').text(total);
  } else {
    operator = action;
  }
});


})


$('#point').on('click', function() {
    let action = $(this).text();
    if (currentValue === '') {
      return;
    } else {
     let f = currentValue + '.';
    $('#number-text').text(f); 
    }
});





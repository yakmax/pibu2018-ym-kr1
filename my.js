//Случайное число
function func_01_(){
  var diap = 9; 	
  if (confirm("Хотите сгенерировать случайное число ?")) { 
    x = Math.floor(Math.random() * diap); 
	alert("Число = " + x) 
  } 
  else { alert("Ну пока ..."); 
  } 
}

//1. поиска суммы чисел от 1 до N
function func_01(){ 
  var n = +prompt("1. поиска суммы чисел от 1 до N, N= ?");
  var sum = 0 ;
  for (i=1; i<=n; i++){ 
    sum += i; 
  }
  alert("Число = " + sum) ;
}

function func_02(){
  var n = +prompt("2. Поиск суммы кубов нечётных чисел в диапазоне от 1 до N, N= ?");
  var sum = 0 ;
   for (i=1; i<=n; i=i+2){ 
    sum += i*i*i; 
  }
  alert("Число = " + sum) ;
}

function func_03(){
  var count= 0;
  var n = +prompt("3. поиска количества нечётных цифр в целом числе N, N= ?");
  // Крайнюю цифру делим на 2, если четная то без остатка
  while (n>0) {
    if (n%2==0) count+=1;
    n=Math.trunc(n/10);  
  }
  alert("Число = " + count);
}
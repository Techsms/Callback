
   function f1(a,b,c){// c is callback function here
      console.log("a is"+a)
      console.log("b is"+b)
      c()
   }

  f1(10,20,function f(){
    console.log("callback is executed")
  })
 

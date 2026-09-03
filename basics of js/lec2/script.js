// data types in js 
// -> 1) primitive 
    //       Number(10,10.5,10.5555) range-2^53-1
    //       String('a',"ram",'hello how are you')
    //       Boolean(true ,false )
    //       undefined
    //       null
    //       Symbol
    //       BigInt

    //   2) reference
    //      Array
    //      Object
    //      function 


    //  var age=prompt('enter your age') //prompt store ans in form of string
    //  console.log(age)

    //  var a='ram';
    //  var b =10
    //  console.log(a+b)
    //  console.log(a-b)
    //  console.log(a*b)

    //  var num1=prompt('enter no first')
    //  var num2=prompt('enter second first')

    //  console.log(num1+num2)
     // return in form of string output 2020 because prompt store in form of string only 

    //   var num1=prompt('enter no first')
    //  var num2=prompt('enter second first')

    //  var num1real=Number(num1) // it converts string to number
    //  var num2real=Number(num2)

    //   var num3=Number(prompt('enter your agge'))
    //   console.log(num3)

    //  console.log(num1real+num2real)

    // understanding undefined data type
      
    //  var x
    //  console.log(x)

    // var x = null;
    // console.log(x)

    /* BigInt is to store very big number */

    //  var b= 1000000000000000000000n // bigInt
    //  console.log(b)
  


            // console.log(a)
            //   var a=10
             /* understanding hoisting */
            //    declareisation of  var a in call stack of java script
            // console.log(a)
            //     var a=10
            // console.log(a)

// understanding conditionals in js -->>

//   if(10>5){
//     console.log('yess')
//   }

//   var a=10
//   var b=15 
//   if(a>b){
//     console.log('hello')
//   }
//   else{
//     console.log('hello guys')
// }


// ask a user his age and check if he is adult or not 
//  var ans = Number(prompt('enter your age '))
//  if(ans>=18){
//     console.log('yes he is ')
//  }
//  else{
//     console.log('no he is not ')
//  }


// var marks = Number(prompt('enter your marks'))
//  if(marks>=90){
//     console.log('got A+ grade ')
//  }
//  else if(marks>80){
//     console.log('got A grade  ')
//  }
//  else {
//     console.log('fail')
//  }


  /*  binary operator - &&  ||

                                                                                                                                                                                                                                                                                                                                                                                                  
  
  
  
  
  */
//   var age =30
//   if(age>18 && age<60){
//     console.log ('you can vote ')
//   }
//   else {
//     console.log ( 'you cant')
//   }

// var a=10
// var b='10'
// if(a==b){              // == compare only values but === compares value and data type also
//     console.log('true')
// }
// else {
//     console.log('false ')
// }


// var a=10
// var b='10'
// if(a===b){              
//     console.log('true')
// }
// else {
//     console.log('false ')
// }

/*    understanding loops     */
 
// var a=0
// while(a<10){
//     console.log('hello');
//     a++
// }
// var x=0
// do{
//     console.log('hello');
//     x++
// } while(x<10)


    for(var y=0;y<10;y++){
        console.log('hello')
    }
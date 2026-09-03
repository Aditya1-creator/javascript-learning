 // string in js 

//  let str="apple";
//  let ans=str.slice(0,2);    // IT Will slice from 0 to 1 -> here 2 is not included in slice 
 
 let str1=`hey my age is ${12+2}`; // calculation will be done by template literals 

    //  ` ` -> it is also called backtick , template literals , template strings 

    let str = "hello kaise ho ";
      // let ans =str.split('ai') // or  let ans =str.split(" ")  // split on the basic of space 

    //  let a="hello ji kaise ho";
    //  let ans1 = a.replace('i','y');    // replace make a copy of original string and work on it 
    //  let ans1 = a.replaceall('i','y');  // replace all replace all i in string with y 
 
    // let b="hello ,world";
    //  let ans2=b.includes(',');
    // console.log(ans2);


 /* conditional in js */

//  let a=21;
//  if(a>13){
//     console.log('hey');
//  }
//  else if(a>11){
//     console.log('hiiiiii')
//  }
//  else {
//     console.log('qwertyuioo')
//  }

/* ternary operator   ? : */

12>11 ? console.log('hello') : console.log('heyyyyyyyy');

/*  switch case */
 switch(3){
        case 1:
         console.console.log('one');
         break;
         case 2:
          console.console.log('two');
          break;
         case 3:
          console.log('three');
          break;
         case 4:
          console.console.log('four');
          break;
        default:
            console.log('default')
 }

  switch("harsh"){
    case "harshit":
     console.log("you are harshit");
     break;
    case "ram":
      console.log("you are ram")
      break
      
    case "harsh":
     console.log("you are harsh")  
     break

    default:
        console.log("default") 
     
  }


   /* LOOPS IN JS    -> for loop , do while  , while  */

    for(let i=0;i<=12;i++){         // state forward loop we know 12 tak chalega loop 
        console.log('heyyyyy guys ');
    }
    
    // state forward loop - if we know how many time we have to run the loop 
    // dynamic loop - we dont have any idea how many iteration 
  
    let arr=[1,2,3,4,5,6];
    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);          //dynamic loop length fixed nhi hai for ex if we reduce the arr size so it iterate though that size
                                     // iteration depend karte arr ke length par so length ka idea hame nhi  hai so dynamic loop
    }


     /* while loop */


      let i =1;
      while(i<=12){
        console.log(i);
        i++;
      }

      /* do while */
      let j=12;
      do{
        console.log('hii')
        j++;
      }while(j<20);

      /* break and continue*/

    //   for (let i =12;i<20;i++){
    //     
    //     if(i==16)
    //         break;
    //  console.log(i);
    //   }

       for (let i =12;i<20;i++){
          if(i==16)
            continue;
        
        console.log(i);
      }
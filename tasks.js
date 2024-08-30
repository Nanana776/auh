/*function findLargest(arr){
let largest;
largest=Math.max(...arr);
return largest;

}

console.log(findLargest([1, 3, 5, 7, 9])); 
console.log( findLargest([-10, -5, 0, 5, 10])); 
console.log( findLargest([34, 23, 12, 56, 89]));*/

/*function countVowels(string){
    let vowels=['a','i','u','e','o'];
    let count=0;
    let str=string.toLowerCase();
    for(let item of str){
        if(vowels.includes(item)){
 count++;
        }
    }
   return count;


}
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript")); // Output: 3
console.log(countVowels("OpenAI")); // Output: 3*/

/*function sumArray(arr){
    let sum=arr.reduce((elem,acc)=>acc+elem,0);
return sum;

}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([-1, -2, -3, -4, -5])); // Output: -15
console.log(sumArray([10, 20, 30])); // Output: 60*/

/*function reverseString(str){
    let arr=str.split('');
    let reverse=arr.reverse().join("");
return reverse;
}
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"
console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("OpenAI"));*/

/*function isPrime(num){
for(let i=2; i<num; i++){
    if(num%i==0){
        return false;
    }
    else{ return true;}
}
}

console.log(isPrime(7)); // Output: true
console.log(isPrime(10)); // Output: false
console.log(isPrime(13)); // Output: true*/

/*function findAverage(arr){
    let sum=arr.reduce((elem,acc)=>acc+elem,0);
return sum/arr.length;
}

console.log(findAverage([10, 20, 30, 40, 50])); // Output: 30
console.log(findAverage([1, 2, 3, 4, 5])); // Output: 3
console.log(findAverage([100, 200, 300])); // Output: 200*/

/*function generateFibonacci(lim) {
    let n1=0;
    let n2=1;
    let arr=[n1];
    while (n2<=lim){
        arr.push(n2);
        let nextNum=n1+n2;
        n1 = n2;
        n2 = nextNum;
    }

    return arr;
}

console.log(generateFibonacci(15)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibonacci(15)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
console.log(generateFibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8]
console.log( generateFibonacci(50)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21,34]*/

/*function findLongestWord(str) {
    let arr=str.split(/[ !]+/);
    let longestWord='';
    let max=0;

    for (let word of arr) {
        if (word.length>=max){
        longestWord=word;
            max=word.length;
        }
    }
    
    console.log (longestWord);
}
findLongestWord("The quick brown fox jumps over the lazy dog");
findLongestWord("JavaScript is awesome"); 
findLongestWord("Hello World!"); */

/*function isPalindrome(str){
let isPalindrome;
newStr=str.toLowerCase().split(/[ ,]/).join("");
reverse_str=str.toLowerCase().replace(/[, ]+/g, '').split('').reverse().join('');
if(reverse_str===newStr){
 isPalindrome=true;}
  else isPalindrome=false;
console.log(isPalindrome);
}

isPalindrome("A man, a plan, a canal, Panama"); // Output: true
isPalindrome("Racecar"); // Output: true
isPalindrome("Hello"); // Output: false*/

/*function toTitleCase(str){
    let arr=str.split(' ');
    for(let idx=0;idx<arr.length;idx++){
        let word=arr[idx];
        arr[idx]=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
    }
console.log(arr.join(' '));
}

toTitleCase("hello world"); // Output: "Hello World"
toTitleCase("javascript is fun"); // Output: "JavaScript Is Fun"
toTitleCase("OPENAI"); // Output: "Openai"*/

/*function mostFrequentItem(arr){
    let frequency={};
    let mostFrequent;
    let maxCount=0
    for (let item of arr){
        if(frequency[item]==undefined){
          frequency[item]=1;
        }
       else{
            frequency[item]++;
        }
        if(frequency[item]>maxCount){
            mostFrequent=item;
            maxCount=frequency[item];
        }

    }
console.log(mostFrequent);
}
mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]); // Output: 4
mostFrequentItem([
"apple",
"banana",
"apple",
"orange",
"banana",
"banana",
]); // Output: 'banana'
mostFrequentItem([10, 20, 10, 30, 20, 10]); // Output: 10*/

/*function mostFrequentItem(arr){
    let newArr=[];
    let count;
    let mostFrequent;
    let frequency=0;
    for (let item of arr){
        if(!newArr.includes(item)){
            newArr.push(item);
            count=1;
        }
       else {
            count++;
        }
        
        if(count>frequency){
            mostFrequent=item;
            frequency=count;
        }

    }
console.log(mostFrequent);
}
mostFrequentItem([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]); // Output: 4
mostFrequentItem([
"apple",
"banana",
"apple",
"orange",
"banana",
"banana",
]); // Output: 'banana'
mostFrequentItem([10, 20, 10, 30, 20, 10]); // Output: 10*/

/*function sortObjects(arr,str){
    sortedArr=arr.sort((a,b)=>a[str]-b[str]);
console.log (sortedArr);
        }

sortObjects(
    [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 20 },
    ],
    "age"
    );
    // Output: [{ name: "Charlie", age: 20 }, { name: "Alice", age:25 }, { name: "Bob", age: 30 }]

    sortObjects(
    [
    { name: "Zara", salary: 50000 },
    { name: "John", salary: 70000 },
    { name: "Doe", salary: 60000 },
    ],
    "salary"
    );
    // Output: [{ name: "Zara", salary: 50000 }, { name: "Doe", salary: 60000 }, { name: "John", salary: 70000 }]

    sortObjects(
    [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 90 },
    { name: "Charlie", score: 80 },
    ],
    "score"
    );
    // Output: [{ name: "Charlie", score: 80 }, { name: "Alice",score: 85 }, { name: "Bob", score: 90 }]*/

    /* function findIntersection(arr1,arr2){
   let intersectArr=[];
   for (let item of arr1){
   if(arr2.includes(item)){
    intersectArr.push(item);
   }
     }
     console.log(intersectArr);
    }

    findIntersection([1, 2, 3, 4], [3, 4, 5, 6]); // Output: [3, 4]
findIntersection(["a", "b", "c"], ["b", "c", "d"]); // Output: ['b', 'c']
findIntersection([7, 8, 9], [9, 10, 11]); // Output: [9]*/


/*function flattenArray(arr){
    let flatArr=[];
    let flatFlat=[];
    for(let item of arr){
        if(Array.isArray(item)){
            flatArr.push(item.toString());
        }
       if(!Array.isArray(item)){flatArr.push(item)}
    }
flatFlat=flatArr.join().split(',').map(item =>(isNaN(item))? item: +item);

console.log(flatFlat);
}
flattenArray([[1, 2, [3]], [4, 5], [6]]); // Output: [1, 2, 3, 4, 5, 6]
flattenArray([1, [2, [3, [4]]], 5]); // Output: [1, 2, 3, 4, 5]
flattenArray([["a", "b"], ["c", ["d", "e"]], "f"]); // Output: ['a', 'b', 'c', 'd', 'e', 'f']*/

/*function flattenArray(arr) {
    let flatArr=arr.flat(Infinity);
    console.log(flatArr);
}
flattenArray([[1, 2, [3]], [4, 5], [6]]); // Output: [1, 2, 3, 4, 5, 6]
flattenArray([1, [2, [3, [4]]], 5]);    // Output: [1, 2, 3, 4, 5]
flattenArray([["a", "b"], ["c", ["d", "e"]], "f"]); // Output: ['a', 'b', 'c', 'd', 'e', 'f']*/

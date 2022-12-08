
const arr=[1,2,3,4];

// add elemnts
//modify exsiting elemet
//remove elemnt
//iterations-as a collection,for loops(in,of,each),
//nested arrays-flat,reduce
//objects and fns as an elements==>call(logic),object properties inside an array,
//this inside an array(inside an object,normal array)
//array prototype(map,filter,reduce)
//array methods
//array cloning


//add elements to array--

//with index numbers
arr[4]=5;
console.log("array add = "+arr);

//to the end of the array
arr[arr.length];
console.log("length = "+arr);

//add at first
arr.unshift(0);
console.log("unshift"+arr);

//at the end after certain places
arr[arr.length+1]=6;
console.log(arr);

//adding in the middle without deleting the previous element
arr.splice(2,0,'a','b');
console.log(arr);

const xx=[1,2,3,4,5,6]
//adding in the middle by deleting the previous element
xx.fill('a',2,3);
console.log(xx);

//modify the element based on index number
arr[1]=10;
console.log(arr);

//remove an element
arr.splice(4,4);
console.log(arr);

//iterations
//foreach
arr.forEach((s)=>{
    console.log(s);
});


//forin

for (const key in arr) {
    
        console.log(key);
    }


//for of

for (const iterator of arr) {
    console.log(iterator);
}


//flat method

const array=['tarun','tej',['hana',['surya'],'virat'],'kohli'];
const a=array.flat(2);
console.log(a);

//reduce method for 3D array
const qwerty=[0,1,2,[3,[4,6],5],9];
const er=qwerty.reduce((pre,cur)=>{
    return pre.concat(cur);
},
[]);
console.log(er);

const rr=er.reduce((pre,cur)=>{
    return pre.concat(cur);
},
[]);
console.log(rr);

////objects and fns as an elements==>call(logic),object properties inside an array,


const data = [//array
    {//1st object
        id: "0001",
        type: "donut",
        name: "Cake",
        ppu: 0.55,
        batters:
        {//nested object of 1st object
            batter:
                [//array
                    { id: "1001", type: "Regular" },
                    { id: "1002", type: "Chocolate" },
                    { id: "1003", type: "Blueberry" },
                    { id: "1004", type: "Devil's Food" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5007", type: "Powdered Sugar" },
                { id: "5006", type: "Chocolate with Sprinkles" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    },
    {//2nd element
        id: "0002",
        type: "donut",
        name: "Raised",
        ppu: 0.55,
        batters:
        {
            batter:
                [
                    { id: "1001", type: "Chocolate" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5005", type: "Sugar" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    },
    {//3rd element
        id: "0003",
        type: "donut",
        name: "Old Fashioned",
        ppu: 0.55,
        batters:
        {
            batter:
                [
                    { id: "1001", type: "Regular" },
                    { id: "1002", type: "Chocolate" }
                ]
        },
        topping:
            [
                { id: "5001", type: "None" },
                { id: "5002", type: "Glazed" },
                { id: "5003", type: "Chocolate" },
                { id: "5004", type: "Maple" }
            ]
    }
]
console.log(data[0].batters.batter[0].type);
console.log(data[2].topping[3].type);
console.log(data[1].batters.batter[0].type);


//applying map on the array
//it performs operations on existing array and returns new array

const opd=[1,2,3,4,5,6,7];
const new1 =opd.map(s=>s+2);
console.log(new1);


//applying filter on the array
//it checks condition on every element and passes a new array
// with those elements that returns true for the given condition

const new2 = opd.filter(s=>s%2==0);
console.log(new2);

//--------------------------------------------------------------------------------------

//array cloning

const arr1=['tarun','tej',1,'hana','kerala'];

//method 1: SPREAD OPERATOR
const arr2={...arr1};

console.log(arr2);


//method 2: SLICE METHOD
const arr3= arr1.slice(0);
console.log(arr3);

//method 3:JSON

const arr4=JSON.parse(JSON.stringify(arr1));
console.log(arr4);

//method 4: CONCAT

const arr5=arr1.concat([]);
console.log(arr5);

//method 5: ARRAY METHOD
const arr6=Array.from(arr1);
console.log(arr6);

//--------------------------------------------------------------------------------------------------


//array methods

//to string()
//converts elements to text
const nn = ['tarun',1,'dd','ff','gg','ll'];
console.log( nn.toString(nn));
//--------------------------------------------------------------
//to join()
//joins each element of the array with given input
console.log(nn.join('+'));
//---------------------------------------------------------------
//POP method
//pop removes the last element of the array
nn.pop();
console.log(nn);
//----------------------------------------------------------------
//store the pop method in a variable and it returns popped value
let fruit=nn.pop();
console.log(fruit);
//-----------------------------------------------------------------
//PUSH METHOD
//adds element to the end
nn.push('tarun');
console.log(nn);
//------------------------------------------------------------------
//when stored in a variable,push returns length of array
let length=nn.push();
console.log(length);
//-------------------------------------------------------------------
//SHIFT METHOD
//removes the first element and shifts every element to lower index
nn.shift();
console.log(nn);
//--------------------------------------------------------------------
//shift method returns the value that was shifted out
let hello=nn.shift();
console.log(hello);
//---------------------------------------------------------------------
//UNSHIFT METHOD
//adds new element to the beginning
nn.unshift('hana');
console.log(nn);
//---------------------------------------------------------------------
//unshift method 9returns the length 
let yy=nn.unshift();
console.log(yy);
//-----------------------------------------------------------------------
//to know the array length
console.log(nn.length);
//------------------------------------------------------------------------
//delete method uses index number but it leaves undefined places
delete nn[0];
console.log(nn);
//-------------------------------------------------------------------------
//merging 2 arrays
const hi=[1,2,3];
const bye=[4,5,6];
const tata=hi.concat(bye);
console.log(tata);
//----------------------------------------------------------------------------
//merging 3 arrays
const mercury=[1,2,3];
const venus=[4,5,6];
const earth=[7,8,9];

const jupiter=mercury.concat(venus,earth);
console.log(jupiter);

//----------------------------------------------------------------------------------
//merging an array with values

const saturn=jupiter.concat(10);
console.log(saturn);
//-----------------------------------------------------------------------------------

//SPLICE METHOD
//adding elements
saturn.splice(0,0,-2,-1);
console.log(saturn);
//----------------------------------------------------------------------------------
//removing elements
saturn.splice(8,2);
console.log(saturn);
//--------------------------------------------------------------------------------------
//SLICE METHOD
//returns sliced (removed) elements in a new array,doesnot affect the source array
const uranus=saturn.slice(0,6);
console.log(uranus);
//------------------------------------------------------------------------------------ 

const pluto='hi how are you';
const milkyway =pluto.split(" ");
console.log(milkyway);

// for(var i=0;i<=milkyway.length;i++){
//     milkyway[i] = reverseWord(milkyway[i]);
    
// }
const sun=[1,2,3];
console.log(typeof(sun));

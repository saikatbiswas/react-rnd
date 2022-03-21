import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@mui/material';
import { getLearnWithMentor } from '../store/actions/learnWithMentorActions';
import ClickCounter from 'components/learnwithmentor/ClickCounter';
import HoverCounter from 'components/learnwithmentor/HoverCounter';
import CallbackRnd from 'components/learnwithmentor/CallbackRnd';


class LearnWithMentor extends Component{
    // constructor(props){
    //     super(props);
    // }


    componentDidMount(){

        setTimeout( function log(){
            console.log('a');
            // for ( let i = 0; i <3; i++ ){
            //     console.log(log());
            // }
        },100);

        let array = [1, 2, 3, 4, 5];

        // array.splice(0, 2); // 1

        // console.log('array',array);

        const bigN = array.sort((a,b)=>{
            return b - a
        });
        var nA = ['saikat', 'Biswas', 'Rio'];
        console.log('array.toString()', parseFloat(array));
        console.log('bigN',bigN, 'max', Math.max());

        const arNo = [20,10,35];

        const arNoFinal = arNo.sort((a,b,c)=>{
            if(a>c && c>b ){
                return 1
            } else if(b>a && b>c ){
                return -1
            } else {
                return 0
            }
        });

        console.log(arNoFinal)


        function compare(num1, num2, num3) {
            if (num3 > num2 && num1 > num3) {
                return num1 + ' is the biggest number';
            } else if (num2 > num1 && num2 > num3) {
                return num2 + ' is the biggest number';
            } else {
                return num3 + ' is the biggest number';
            }
        }
        var results = compare(10, 35, 30);
        console.log('number',results);

        // Clouser
        // global scope
        var e = 10;
        function sum(a){
        return function sum2(b){
            return function sum3(c){
            // outer functions scope
            return function sum4(d){
                // local scope
                return a + b + c + d + e;
            }
            }
        }
        }

        var sum2 = sum(1);
        var sum3 = sum2(2);
        var sum4 = sum3(3);
        var result = sum4(4);
        // console.log('result',result)

        function makeFunc() {
            var name = 'Mozilla';
            function displayName() {
            //   alert(name);
            }
            return displayName;
          }
          
          var myFunc = makeFunc();
          const n = myFunc();
        //   console.log('n', n);

        // console.log('a',a);
        var a = 1;
        let ab = 2;
        // console.log('a',a);

        var a = 11;
        // let ab = 22;

        // console.log('a',a);
        // console.log('ab',ab);


        // console.log(this);
        this.props.dispatch(getLearnWithMentor());

        const myArray = [0,1,2,3,4,5,6,7,8,9,10];

            myArray.filter(item=>item %2 === 0? item:false)

        // myArray.map(item=>{
        //     if(item % 2 === 0){
        //         return console.log(item)
        //     }
             
        // });

        // // for(var i=0; i<= 10; i++){
        // //     if(i % 1 === 0){
        // //         console.log(i)
        // //     }
        // // }

        // for(const num of myArray){
        //     if(num % 2 === 1){
        //         console.log('for of',num)
        //     }
        // }

        const array2 = [
            {fName: 'Saikat', lName:'Biswas', age:30},
            {fName: 'Sarthak', lName:'Biswas', age:5},
            {fName: 'Ankita', lName:'Chatterjee', age:28},
        ];

        const arraySort = array2.sort((a,b)=>{
            // console.log(a,b);
            if(a.age > b.age){
                return -1
            }else if(a.age < b.age){
                return 1
            } else if(b.age > b.age){
                return -1
            } else if(b.age < b.age){
                return 1
            }else{
                return 0
            }
        });

        // console.log(arraySort);

        const uniqueList = array2.filter((item, i)=>{
            const _item = item.lName;
            return i === array2.findIndex(innerItem=> innerItem.lName === _item)
        });

        // console.log(uniqueList)

        function matchVowel(string){
            // var count = 0;
            var vow =[]
            var vowel = ['a','e','i','o','u'];
            [...string].forEach(str => {
                
                if(vowel.includes(str)){
                    // console.log(str)
                    return vow.push(str);
                }
            });
            return vow
            // for(const char of string.toLowerCase()){
            //     console.log(char);
            //     if(vowel.includes(char)){
            //         count++
            //     }
            //     return count;
            // }
            // if(param.toLowercase().include(vowel)){
            //     return console.log(param);
            // }
            // return vowel.indexOf(string) !== -1;
        }

        // console.log(matchVowel('saikat'));


        // console.log(['saikat'])



    }


    render(){
        return(
            <div>
                <h1>Learn with Mentor</h1>
                
                <Card>
                    <CardContent>
                        <CallbackRnd/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <ClickCounter />
                        <HoverCounter />
                        <div className='filter-part'>Filter</div>


                    </CardContent>
                </Card>
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return{
        learnWithMentor: state.learnWithMentor
    }
}

export default connect(mapStateToProps)(LearnWithMentor);
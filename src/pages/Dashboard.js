import React, {Component} from 'react';

const myArray = [
    {"fact":"A cat can jump 5 times.","length":106},
    {"fact":"When a cat drinks, its tongue .","length":92},
    {"fact":"A cat sees about 6 times.","length":172}
];

class DashboardPage extends Component{

    componentDidMount(){
        
        
        // myArray.forEach(item=> newArray.push(
        //     <li>{item.fact}</li>
        // ));
        // console.log(newArray);
        console.log(typeof null);
    }

    render(){

        const items = [];
        myArray
            .forEach(item => items.push(
                <li key={item.length}>
                    {item.fact}
                </li>
                ))

        // return(
        //     <ul>{items}</ul>
        // );
        
        return(
            <div>
                <div>
                    <h2>ForEach</h2>
                    <ul>
                        {/* {
                            myArray.forEach(item=> newArray.push(
                                <li key={item.length}>{item.fact}</li>
                            ))
                        } */}
                        {items}
                    </ul>
                </div>
            </div>
        )
    }
}

export default DashboardPage;
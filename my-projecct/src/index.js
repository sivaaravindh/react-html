import React, { Component ,createElement, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './HeaderClass/Header';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import Content from './Content/Content';
// import Banner from './Banner/Banner';
// // import './index.css';
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const head=createElement("div","h1" , {} , "React js");
// const head1= createElement('div', {}, createElement('h1', {}, 'first head'), createElement('h1', {}, 'second head'));
// const name="siva";
// const arr=['aaa', 'bbb', 'ccc'];
// const head=<div className='sample' style={{backgroundColor:'yellow'}}>
//   <h1>head1</h1>
//   <h2>head2</h2>
//   {8 + 10}
//   {true? "true":'false'}
//   {name}
//   {arr.map((val, index) => <p key={index}>{val}</p>)}
//   {head1}
// </div>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(head);

// document.getElementById("root").innerHTML="react js";
// function Main(){
//   const [feature, setFeature] = useState ('Hooks')
//   const [feature1, setFeature1] = useState ('')
//   const data={
//     name:'siva',
//   }
//   const getData = () =>{
//     console.log("called");
//   }
//     return (
//       <div>
//         {feature}<br></br>
//         {feature1}
//         <button onClick={()=>{
//           setFeature('updated hooks');
//           setFeature1('updated js')}
//         }>update feature</button>
//         <Header name={data.name} feature={feature} get={getData}/>
//       <Banner name={data.name}/>
//       <Content />
//       <Footer />
//     </div>
//   )
// }
// class Third extends Component {
//   render () {
//     return <div> third Class Component</div>
//   }
// }

// class Secound extends Component {
//   render () {
//     return <div>Secound Class Component</div>
//   }
// }


// class Frist extends Component {
//   render () {
//     console.log("this",this); 
//     return(
//      <div>
//       {" "}
//       First Class Component {this. props.data } {""}
//       <button onClick={()=> this.props.get ("Data")}>Click</button>
//       </div>
//     )
//   }
// }

// class Main extends Component {
//   constructor() {
//     super();
//     this.state= {
//       name:"siva",
//       age:19,
//       feature:"state"
//     };
//     console.log(this);
//   }
//   getData() {
//     console.log("data");
//   }
//   updateName() {
//     this.setState({name:"React State by siva"});
//   }
//   render () {
//     return (
//       <div>
//         {this.state.name}
//         {this.state.age}
//         <button onClick={() => this.updateName()}>Update Name</button>
//         <button onClick={this.updateName.bind(this)}>Update Name</button>
//         Class Component
//         <Frist data="React Class"  get={this.getData}/>
//         <Secound />
//         <Third />
//         <Header />
//       </div>
//     )
//   }
// }
class Main extends Component {
  render () {
        return (
          <div>
             <Header />
      </div>
     )
   }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
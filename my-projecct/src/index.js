import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Content from './Content/Content';
import Banner from './Banner/Banner';
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

function Main(){
  return (
    <div>
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
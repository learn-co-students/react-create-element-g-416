// Code goes here
import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement('h1', {}, 'Persevering React Code');

// 1st argument:    'type of element name as a string'
// 2nd argument:    {} object of props passed into component
// 3rd argument:    children (value) of that component: string or reference to nested component

const paragraph = React.createElement('p', {}, 'Constantly improving!')

const container = React.createElement('div', {}, [title, paragraph]);

// const list =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'My favorite ice cream flavors'),
//     React.createElement('ul', {},
//       [
//         React.createElement('li', {}, 'Chocolate'),
//         React.createElement('li', {}, 'Vanilla'),
//         React.createElement('li', {}, 'Banana')
//       ]
//     )
//   );


const list =
  React.createElement('div', {},
    React.createElement('h1', {}, 'My favorite ice cream flavors'),
    React.createElement('ul', {},
      [
        React.createElement('li', { className: 'brown' }, 'Chocolate'),
        React.createElement('li', { className: 'white' }, 'Vanilla'),
        React.createElement('li', { className: 'yellow' }, 'Banana')
      ]
    )
  );


ReactDOM.render(
    // title, 
    // container,

    list,
    document.getElementById('root')
);





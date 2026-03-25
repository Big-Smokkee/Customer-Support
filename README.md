# Answer to the question no 1
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. React uses JSX to make UI development easier and more readable.

JSX helps developers write UI components in a cleaner and more understandable way. Instead of using complex JavaScript functions to create elements, we can write code that looks like HTML.
###  Why JSX is used:
1. Makes code easier to write
2. Makes UI easier to understand
3. Improves readability
4. Faster development
# Answer to the question no 2
State and Props are both used to store and manage data in React, but they are different
#####   Props = Data from parent component
#####   State = Component’s own data
######     Example
function App() {
  return <User name="Fardin" />;
}

function User(props) {
  return <p>{props.name}</p>;
}
# Answer to the question no 3
The useState hook is used to create and manage state in functional components.
It returns two things:
1. Current state value
2. Function to update the state
#### Syntex
const [state, setState] = useState(initialValue);
### How it works:
<p> Initial value is set.</p>
<p>When setState function is called, state updates.</p>
<p>Component re-renders automatically</p>

# Answer to the question no 4
State can be shared between components by lifting the state up to the parent component. Then the parent passes the state and functions to child components using props.

This process is called Lifting State Up.
# Answer to the question no 5
Event handling in React is similar to JavaScript, but React uses camelCase event names and we pass a function instead of a string.
Common Events:
<ul>
<li>onClick</li>
<li>onChange</li>
<li>onSubmit</li>
<li>onMouseOver</li>
</ul>

#### Example
<p>

function App() {<br>
  function handleClick() {<br>
    <t>alert("Button clicked");<br>
  }

  return (<br>
    <button onClick={handleClick}><br>
      Click Me
    </button>
  <br>);<br>
}
</p>
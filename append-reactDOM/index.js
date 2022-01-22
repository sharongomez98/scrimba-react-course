/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
    <div>
        <h1>Hello World!</h1>
        <p>This is a React App</p>
        <p>This is a challenge</p>
        <p>blah blah</p>
    </div>
)

// document.getElementById("root").append(JSON.stringify(page));
// console.log(page);
ReactDOM.render(page, document.getElementById("root"))


function doSomething(){
    console.log("Hello");
}

function doSomethings(){
    console.log("hi you clicked para event");
}

function byeFun(){
    console.log("Bye");
}
export default function  Button(){
    return (
        <div><button onClick={doSomething}>Click Me</button>
        <p onClick={doSomethings}> this is para for this event</p>
        <p onMouseOver={byeFun}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sint reprehenderit consequuntur. Porro quis omnis error, voluptatibus, id unde tempora ducimus, velit ratione similique temporibus minus libero nam sit iusto.</p>
        </div>
    );
}
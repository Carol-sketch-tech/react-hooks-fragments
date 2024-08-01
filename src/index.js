// React fragments 
// it is required that every react component must return a single JSX element.for example<div>
// or <nav>. this creates an div or nav element.
// for example
function ChildComponent() {
    return (
      <div>
        <p>Hey, I am a child</p>
        <p>My name is child component</p>
      </div>
    );
  }
  
  function ParentComponent() {
    return (
      <div className="parent">
        <ChildComponent />
        <ChildComponent />
      </div>
    );
  }

//   this set up creates a DOM structure that looks like this 
<div class="parent">
  <div>
    <p>Hey, I am a child</p>
    <p>My name is child component</p>
  </div>
  <div>
    <p>Hey, I am a child</p>
    <p>My name is child component</p>
  </div>
</div>
// those nested divs donot have nay purpose here and donot have any styling besides their default properties.
// without them tthough we would have an erroras there are two p tags being returns in the Childcomponent.
// instead we sue React fragments.

function ChildComponent(){
    return (
        <React.Fragment>
            <p>hello there!</p>
            <p>i am a person not a robot.</p>
        </React.Fragment>
    )
}
function ParentComponent(){
    return(
        <div>
        <ChildComponent/>,
        <ChildComponent/></div>
    )
}
// with the fragment in place the DOM will now look like this
<div>
  <p>Hey, I am a child</p>
  <p>My name is child component</p>
  <p>Hey, I am a child</p>
  <p>My name is child component</p>
</div>
// fragements are not restricted to the outermost element being returned in JSX.
// imagine you had an arrayof books and objects in your props that you want rendered tot he Dom
// each book has multiple attributes you want to display, but you dont need an element that wraps around these
// attributes. A fragemnt can be used here and still take a key attribute.

function BookShelf(){
    return (
        <section>
            {PaymentResponse.books.map((map)=>(
                <React.Fragment key={bookd.id}>
                    <h1>{book.title}</h1>
                    <h2>{book.author}</h2>
                </React.Fragment>
            ))}
        </section>
    );
};
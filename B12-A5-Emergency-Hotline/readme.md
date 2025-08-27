1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:
getElementById: this method can target an HTML element by a unique ID name and make an object of it.

getElementsByClassName: this method targets all the elements with a common className and returns a live HTMLcollection.

querySelector: returns the first element that matches with any valid CSS selector

querySelectorAll: targets all elements with a common className and returns a static NodeList

2.How do you create and insert a new element into the DOM?

ans:
to create: document.createElement('tagName');
we can assign it to a variable and insert into another html element.
const newElement = document.createElement('tagName');
we can insert this one directly into the body like- document.body.appendChild(newElement);

3. What is Event Bubbling and how does it work?

ans:
event bubbling is a process where event pops upward starting from the nested element, thorugh its parent element upto the root element in the DOM tree. exaple- if a <button> inside of a <div> inside a <section> is clicked, the event will trigger and start at the <button> and bubble up through the <div>, then the <section> and upto the document.

4.What is Event Delegation in JavaScript? Why is it useful?

ans:
Event Delegation is a technique where we add an eventListener to a parent element and handle events created by its child elements using event bubbling.

example:

<ul>
  <li class = 'item1'>item1</li>
  <li>item2</li>
  <li>item3</li>
  <li>item4</li>
</ul>

if we add an eventListener on the <ul> and then click on any of <li> elements, the event will trigger. and insted of adding
eventListeners to each <li> items we can simply do,
ul.addEventListener('click', (e) => {
if(e.target.tagName = 'item1') {
console.log('item1 clicked');
}
})

why usefull: it is clean and efficient, needed less eventListeners and works even child elements are added later on.

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault: it stops the default action of an html element. Like form.preventDefault(), it will stop the submission phrase for the first time / on page loading.

stopPropagation: is prevents the event from bubbling up though its parent elements.
example: if we have a <button> inside of a <div> inside a <section> and they all have eventlisteners on them, then clicking on the <button> will trigger all the eventListeners and it will create a mess. To stop this we can simply do:

      button.stopPropogation();

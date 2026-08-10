const mainContainer = document.querySelector('#root')

// we created the customRender where the element will be renderedd
function customRender(reactElement, mainContainer) {
    const element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        element.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(element)
}


/// this is the react element from the function in react it isnt define as i define type, props , children 
const reactElement = {
    type: 'a',
    props: {
        href: "www.google.com",
        target: "_blank"
    },
    children: "Click to visit website"
}




// render the element here 
customRender(reactElement, mainContainer)


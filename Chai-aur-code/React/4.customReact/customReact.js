const customRender = (reactElement, container) => {
  /*
  const { type, props, children } = reactElement;
  const element = document.createElement(type);
  element.innerHTML = children[0];
  element.setAttribute("href", props.href);
  element.setAttribute("target", props.target);
  container.appendChild(element);
  */

  //Improved code with less reptaition
  const { type, props, children } = reactElement;
  const element = document.createElement(type);
  element.innerHTML = children[0];
  for (const prop in props) {
    if (prop === "children") continue;
    element.setAttribute(prop, props[prop]);
  }
  container.appendChild(element);
};

const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: ["Click me"],
};

customRender(reactElement, mainContainer);

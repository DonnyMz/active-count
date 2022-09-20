// document.addEventListener("DOMContentLoaded", function () {
//   // You can change this class to specify which elements are going to behave as counters.
//   var elements = document.querySelectorAll(".counter");

//   elements.forEach(function (item) {
//     // Add new attributes to the elements with the '.scroll-counter' HTML class
//     item.counterAlreadyFired = false;
//     item.counterSpeed = item.getAttribute("data-target") / 45;
//     item.counterTarget = +item.innerText;
//     item.counterCount = 0;
//     item.counterStep = item.counterTarget / item.counterSpeed;

//     item.updateCounter = function () {
//       item.counterCount = item.counterCount + item.counterStep;
//       item.innerText = Math.ceil(item.counterCount);

//       if (item.counterCount < item.counterTarget) {
//         setTimeout(item.updateCounter, item.counterSpeed);
//       } else {
//         item.innerText = item.counterTarget;
//       }
//     };
//   });

//   // Function to determine if an element is visible in the web page
//   var isElementVisible = function isElementVisible(el) {
//     var scroll = window.scrollY || window.pageYOffset;
//     var boundsTop = el.getBoundingClientRect().top + scroll;
//     var viewport = {
//       top: scroll,
//       bottom: scroll + window.innerHeight,
//     };
//     var bounds = {
//       top: boundsTop,
//       bottom: boundsTop + el.clientHeight,
//     };
//     return (
//       (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
//       (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
//     );
//   };

//   // Funciton that will get fired uppon scrolling
//   var handleScroll = function handleScroll() {
//     elements.forEach(function (item, id) {
//       if (true === item.counterAlreadyFired) return;
//       if (!isElementVisible(item)) return;
//       item.updateCounter();
//       item.counterAlreadyFired = true;
//     });
//   };

//   // Fire the function on scroll
//   window.addEventListener("scroll", handleScroll);
// });

const Element = document.querySelectorAll(".counter");

Element.forEach((countItem) => {
  let speed = 75;
  incCounter = countItem.getAttribute("data-target") / speed;

  // let counterTarget = countItem.innerText;
  let counterTarget = countItem.innerText;
  let counterCount = 0;
  let counterStep = counterTarget / incCounter;

  countItem.updateCounter = () => {
    counterCount = counterCount + counterStep;
    countItem.innerText = Math.ceil(counterCount);

    counterCount < counterTarget
      ? setTimeout(countItem.updateCounter, incCounter)
      : (countItem.innerText = counterTarget);
  };
});

window.addEventListener(
  "scroll",
  (handleScroll = () => {
    const isElementVisible = (el) => {
      let scroll = window.scrollY || window.pageYOffset;
      let topBounding = el.getBoundingClientRect().top + scroll;
      let viewport = window.innerHeight;

      return topBounding < scroll + viewport;
    };

    Element.forEach((item) => {
      if (item.counterAlreadyFired === true) return;

      if (!isElementVisible(item)) return;
      item.counterAlreadyFired = true;
      item.updateCounter();
    });
  })
);

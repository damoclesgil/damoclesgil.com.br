---
author: Dâmocles Gil Marçal
pubDatetime: 2024-07-02T14:40:00Z
title: Debounce vs Throttling
slug: debounce-throttling
featured: false
draft: false
tags:
  - javascript
description: "Throttling ⏱️ vs Debouncing: ⏳Boost Performance for your app"
---

Hi everyone! I hope you’re doing good. This article will explore an interesting Javascript topic frequently asked in interviews. In this article, we’ll be covering topics such as throttling and debouncing and learn why and how to implement them. Let's begin.

Why do we need them?
The first question that comes to my mind while hearing about this topic is why? Why do we need it and what is it? Throttling and debouncing are optimization techniques used to control the frequency of executing a function.

Let’s see the problem through an example. Suppose, a user wants to search for some products on an e-commerce website. The user types “IronMan t-shirt”. While typing this, users are accustomed to autocomplete suggestions, so how can we manage that?

If we want suggestions for every input and delete operation the user performs in the search bar, it would result in several API calls which is not good for our backend server. So, to optimize this, we use throttling and debouncing. This is just one case where these methods are used, but they can be implemented in a lot of other use cases while dealing with event listeners.

We’ll look into all the different methods and test them out. We will initialize the input tag with event listeners on “input”.

```javascript
const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounceText = document.getElementById("debounce");
const throttleText = document.getElementById("throttle");

input.addEventListener("input", e => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
});
```

Here's a sneak peek 👀 at the difference in how text is being processed by each technique.

![Gif Debounce](https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fem40pamxn8hyncixabqp.gif)

## Debouncing

In the above example of searching 🔍, let’s see how things would change if we used debouncing with our search. Debouncing adds a small delay after the last keystroke before executing the search function. This helps prevent overwhelming the system with unnecessary search requests, especially when the user is typing quickly. It ensures that the search function is only triggered once the user has finished typing or has paused briefly, making for a smoother and more efficient search experience.

```javascript
const updateDebounceText = debounce(text => {
  debounceText.textContent = text;
});
```

```javascript
function debounce(cb, delay = 1000) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
```

Here, we updateDebounceText is passing a function as an argument to debounce(). The debounce() function takes 2 parameters, first a callback function and the delay (optional).

The debounce() function has a timeout variable, which is used to set the timeout to call the callback function after the delay. The callback function cb(...args); is the function that’ll set debounceText.textContent = text; as it passes (text) as (…args).

So, let’s look at the wider picture. The debounce function is called every time the “input” event listener activates. Every time, it creates a new timeout which waits for the delay time and then it calls the callback function. Suppose, the debounce() gets executed again before the delay time ends due to another keyboard input action, the previous timeout gets cleared and a new timeout for the updated text argument is called.

## Throttling

Throttling is another technique used to control the rate at which a function is executed. It calls the callback function and updates the text after a certain interval of time instead of waiting for the last event(keystroke). Let’s learn how to implement it.

```javascript
const updateThrottleText = throttle(text => {
  throttleText.textContent = text;
});
```

```javascript
function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFunc, delay);
  };
}
```

The throttle function takes 2 arguments the callback function and the delay(optional).

By default, the shouldWait variable is false. When the event is called the first time, it executes the callback function and then sets the shouldWait to true. We also have waitingArgs which is used to manage the arguments i.e. text that the user enters in the span of delay. Therefore, if shouldWait is true, the waitingArgs are updated with the updated text.

In the `timeoutFunc()`, the if statement specifies if there's no new text after the last callback function() was executed which is known by the fact that the waitingArgs is null. Else, since, the user is not typing anymore, the last text is now executed by calling the callback function with the updated text passed through the argument. And, set waitingArgs to null and call the timeout for timeoutFunc() to set the shouldWait back to false.

Note, let shouldWait = false; let waitingArgs; which we set initially, are not reinitialized every time the function is called. Instead, they are captured in the closure of the returned function, meaning their values persist across multiple invocations of the throttled function.

## Conclusion

**Throttling** helps limit the rate of function calls to prevent overwhelming the system while debouncing delays function execution to handle situations where rapid or frequent calls are expected. Both techniques contribute to improving performance, optimizing resource usage, and enhancing the overall user experience in web applications.

Throttling is useful in scenarios like scroll event handlers, resize event handlers, or handling user input events like mousemove or keydown, where frequent calls can lead to performance degradation.

Debouncing is typically used in scenarios where a function is called repeatedly, such as in response to user input like typing.

I hope you liked this article and if you did don't forget to give it a like! 😃

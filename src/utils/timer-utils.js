const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args); // cb(...args) ⇒ cb(100)
  };
};

export { debounce };

addEventListener("message", (event) => {
  const length = event.data;

  for (let i = 1; i <= length; i++) {
    postMessage(i);
  }
});

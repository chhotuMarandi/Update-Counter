const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const dataCount = +counter.getAttribute('data-target');

    // console.log(typeof dataCount);
    const intialNumber = Number(counter.innerHTML);
    const increament = dataCount / 100;

    if (intialNumber < dataCount) {
      counter.innerHTML = `${intialNumber + increament}`;

      setTimeout(updateCounter, 1000);
    }
  };

  updateCounter();
});

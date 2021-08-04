export function debounce(func, wait) {
  let timeout;

  return function () {
    let context = this,
      args = arguments;

    let executeFunction = function () {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(executeFunction, wait);
  };
}

export function formatMoney(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

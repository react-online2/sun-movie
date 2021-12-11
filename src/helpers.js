// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money) => {
  const formatter = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = (stateName) => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);

};
export const onScroll = (event) => {
  
  const contentLink = event.target;
  if (contentLink.dataset.goto && document.querySelector(contentLink.dataset.goto)) {
    const gotoBlock = document.querySelector(contentLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });


    event.preventDefault();
  }
}


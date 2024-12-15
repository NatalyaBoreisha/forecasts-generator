/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


  const predictions = [
    "Ваша давняя мечта сбудется.",
    "В новом году Вас ждут новые перспективы.",
    "Впереди Вас ждет безграничное счастье.",
    "Если Вы чувствуете, что за это нужно бороться, боритесь.",
  ];
  
  function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const forecastBtn = document.querySelector(".forecast-btn");
  const currentForecastTitle = document.querySelector(".current-forecast h1");
  const currentForecastProbability = document.querySelector(".current-forecast p");
  const forecastsContainer = document.querySelector(".forecasts");
  const forecastTemplate = document.getElementById("forecast-item");
  
  forecastBtn.addEventListener("click", () => {

    if(currentForecastTitle.textContent.length > 0 && currentForecastProbability.textContent.length > 0) {
        const previousForecast = forecastTemplate.content.cloneNode(true);
        const previousForecastTitle = previousForecast.querySelector(".forecast-item h3");
        previousForecastTitle.textContent = currentForecastTitle.textContent;
        const previousForecastProbability = previousForecast.querySelector(".forecast-item p");
        previousForecastProbability.textContent = currentForecastProbability.textContent;

        forecastsContainer.prepend(previousForecast)
    }

    const predictionProbability = getRandomInRange(0, 100);
    const predictionIndex = getRandomInRange(0, predictions.length - 1);
    const predictionText = predictions[predictionIndex];

    currentForecastTitle.textContent = predictionText;
    currentForecastProbability.textContent = "Вероятность: " + predictionProbability + "%";
  });

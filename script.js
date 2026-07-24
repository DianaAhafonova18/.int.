// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Обработка клика по активным карточкам
  const activeCards = document.querySelectorAll('.card.active');

  activeCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Получаем ссылку из data-target
      const target = this.getAttribute('data-target');
      if (target) {
        // Переходим на страницу профиля
        window.location.href = target;
      }
    });
  });

  // Для имитации поиска и меню – можно добавить что-то позже, пока просто заглушка
  document.querySelector('.icon-search')?.addEventListener('click', () => {
    alert('Поиск');
  });

  document.querySelector('.icon-menu')?.addEventListener('click', () => {
    alert('Меню');
  });
});

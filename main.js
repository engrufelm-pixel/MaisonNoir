const priceData = {
  hair: [
    ["Женская стрижка", "от 3 900 ₽", "Форма, уход, укладка"],
    ["Мужская стрижка", "от 2 400 ₽", "Ножницы, машинка, стайлинг"],
    ["Окрашивание", "от 7 500 ₽", "Консультация, тон, защита"],
    ["Укладка", "от 2 900 ₽", "Локоны, брашинг или вечерний образ"]
  ],
  nails: [
    ["Маникюр", "от 1 900 ₽", "Аппаратная техника"],
    ["Покрытие gel", "от 2 700 ₽", "Выравнивание и стойкий цвет"],
    ["Nail design", "от 700 ₽", "Акценты, френч, графика"],
    ["Педикюр", "от 3 200 ₽", "Smart-диски и spa-завершение"]
  ],
  care: [
    ["Уход для волос", "от 3 500 ₽", "Восстановление и блеск"],
    ["Brow service", "от 1 500 ₽", "Форма, окрашивание, ламинирование"],
    ["Массаж лица", "от 3 900 ₽", "Лифтинг и расслабление"],
    ["Make-up", "от 4 500 ₽", "Дневной или вечерний образ"]
  ]
};

const tabs = document.querySelectorAll(".tab");
const priceList = document.querySelector(".price-list");
const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.querySelector(".mobile-panel");

function renderPrices(category = "hair") {
  priceList.innerHTML = priceData[category]
    .map(
      ([title, price, note]) => `
        <article class="group border border-white/10 bg-white/[0.03] p-6 transition hover:border-champagne/50 hover:bg-champagne/[0.05]">
          <div class="flex items-start justify-between gap-5">
            <div>
              <h3 class="text-xl font-semibold text-white">${title}</h3>
              <p class="mt-2 text-sm text-white/52">${note}</p>
            </div>
            <strong class="shrink-0 text-lg text-champagne">${price}</strong>
          </div>
          <a href="#yclients" class="ms_booking mt-6 inline-flex text-sm font-bold text-white underline decoration-champagne/50 underline-offset-8 transition group-hover:text-champagne">Записаться</a>
        </article>
      `
    )
    .join("");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active", "bg-champagne", "text-black"));
    tab.classList.add("active", "bg-champagne", "text-black");
    renderPrices(tab.dataset.category);
  });
});

menuToggle?.addEventListener("click", () => {
  const isOpen = !mobilePanel.classList.contains("hidden");
  mobilePanel.classList.toggle("hidden", isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
});

document.querySelectorAll(".mobile-panel a").forEach((link) => {
  link.addEventListener("click", () => mobilePanel.classList.add("hidden"));
});

renderPrices();
document.querySelector(".tab.active")?.classList.add("bg-champagne", "text-black");

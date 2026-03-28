import styles from "./Characteristics.module.scss";

export default function Characteristics() {
  const specs = [
    { label: "Скорость (макс/сваливания/крейсерская)", value: "160 / 30 / 50 км/ч" },
    { label: "Макс. высота полета", value: "2,5 км" },
    { label: "Размах крыла", value: "1,5 м" },
    { label: "Дальность полета", value: "до 50 км" },
    { label: "Длина", value: "1,15 м" },
    { label: "Высота", value: "0,3 м" },
    { label: "Макс. взлетная масса", value: "7 кг" },
    { label: "Полезная нагрузка", value: "до 5 кг" },
    { label: "Площадь крыла", value: "0,39 м²" },
    { label: "Время в воздухе", value: "до 120 мин" },
    { label: "Рабочие температуры", value: "-35°C ... +35°C" },
    { label: "Высота полета", value: "до 4500 м" },
    { label: "Развертывание", value: "< 5 минут" },
  ];

  const advantages = [
    "Корпус из низкотемпературных ударопрочных полимеров",
    "Высокая живучесть: критическая площадь повреждений менее 5%",
    "Ремонтопригодность в полевых условиях без спец. инструмента",
    "Запуск с руки без использования стартового комплекса",
    "Простота пилотирования для обучения операторов с нуля",
    "Гибкая адаптация частот управления под задачи заказчика"
  ];

  return (
    <section className="container" id="characteristics">
          <h2>Технические характеристики</h2>

        <div className={styles.grid}>
          {/* Левая колонка: Характеристики */}
          <div className={styles.specsSide}>
            {specs.map((item, i) => (
              <div key={i} className={styles.specRow}>
                <span className={styles.label}>{item.label}</span>
                <div className={styles.dotLine}></div>
                <span className={styles.value}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Правая колонка: Преимущества и Производство */}
          <div className={styles.infoSide}>
            <div className={styles.advantages}>
              {advantages.map((text, i) => (
                <div key={i} className={styles.advItem}>
                  <span className={styles.check}>✓</span>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}
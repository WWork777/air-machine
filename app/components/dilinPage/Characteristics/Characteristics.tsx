import styles from "./Characteristics.module.scss";

export default function Characteristics() {
  const specs = [
      { label: "Максимальная скорость", value: "100 км/ч" },
      { label: "Мощность двигателя", value: "до 110 л.с." },
      { label: "Грузоподъемность (макс)", value: "300 кг" },
      { label: "Пассажировместимость", value: "3 чел" },
      { label: "Габариты (Д х Ш х В)", value: "3,5 / 2,4 / 1,3 м" },
      { label: "Высота воздушной подушки", value: "0,3 м" },
      { label: "Диапазон рабочих температур", value: "-40°C ... +40°C" },
      { label: "Тип эксплуатации", value: "Круглогодичный" },
      { label: "Поверхности", value: "Вода, грунт, снег" },
  ];

  const advantages = [
      "Универсальность: Эксплуатация на водных, грунтовых и заснеженных поверхностях",
      "Экстремальная стойкость: Стабильная работа при температурах от -40°C до +40°C",
      "Высокая энерговооруженность: Двигатель мощностью до 110 л.с. для быстрого выхода на глиссирование",
      "Компактные габариты: Оптимальное соотношение размеров (3,5 м) и полезной нагрузки (300 кг)",
      "Амфибийные возможности: Клиренс 0,3 м позволяет преодолевать мелководье и неровности рельефа",
      "Многоцелевое назначение: Подходит для патрулирования, доставки грузов и спасательных операций"
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
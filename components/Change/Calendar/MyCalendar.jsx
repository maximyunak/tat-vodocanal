import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import React from 'react';

import glass from './search.svg';

import { GrFormNext, GrFormNextLink, GrFormPrevious, GrPrevious } from 'react-icons/gr';
import styles from './MyCalendar.module.scss';
import classNames from 'classnames';
import Image from 'next/image';

const events = [
  {
    title: 'Встреча',
    start: '2024-04-25T10:00:00', // Начало встречи в 10:00
    end: '2024-04-25T12:00:00', // Окончание встречи в 12:00
    display: 'background',
    color: '#e8e8e8',
  },
  {
    title: 'Конференция',
    start: '2024-04-28T14:00:00', // Начало конференции в 14:00
    end: '2024-04-28T18:00:00', // Окончание конференции в 18:00
    display: 'background',
  },
  {
    title: 'Конференцsия',
    start: '2024-04-21T08:00:00', // Начало конференции в 14:00
    end: '2024-04-21T11:00:00',
    display: 'background',
    description: 'sdf',
  },
];

function getShortWeekday(date, locale) {
  const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']; // Сокращенные названия дней недели
  return days[date.getDay()];
}

function MyCalendar() {
  const [currentMonth, setCurrentMonth] = React.useState(null); // Состояние для текущего месяца
  const [title, setTitle] = React.useState(null);
  const calendarRef = React.useRef(null);
  const myLocale = {
    code: 'ru',
    week: {
      dow: 1, // Начать с понедельника
      doy: 4, // Первый день года (неделя, начинающаяся с 1 января)
    },
    buttonText: {
      today: 'Сегодня',
      month: 'Месяц',
      week: 'Неделя',
      day: 'День',
      list: 'Список',
    },
    weekText: 'Нед',
    allDayText: 'Весь день',
    titleFormat: { day: 'numeric' },
    firstDay: 1,
  };

  const eventContent = (arg) => {
    const { event } = arg;

    // Извлекаем время начала и окончания события
    const startTime = new Date(event.start);
    const endTime = new Date(event.end);

    // Форматируем время в нужный формат (например, "HH:mm")
    const startTimeFormatted = startTime.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const endTimeFormatted = endTime.toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (event.display === 'background') {
      // Для фонового события добавляем время начала и окончания
      return (
        <div className={styles.backgroundEvent}>
          <div>
            {startTimeFormatted} - {endTimeFormatted}
          </div>
          <div className={styles.eventTitle}>
            <div style={{ fontWeight: '600' }}>{event.title}</div>
            <div style={{ fontWeight: '600' }}>{event.extendedProps.description}</div>
          </div>
        </div>
      );
    } else {
      // Для обычного события показываем только заголовок
      return <div>{event.title}</div>;
    }
  };

  React.useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentView = calendarApi.view;

      const currentTitle = calendarApi.view.title;
      setTitle(currentTitle);

      if (currentView) {
        const currentDate = currentView.currentStart;
        const monthName = currentDate.toLocaleString('default', { month: 'long' }); // Получаем название месяца

        setCurrentMonth(monthName); // Устанавливаем текущий месяц в состояние
      }
    }
  }, []);

  console.log(title);
  const handleClickBtn = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      const currentView = calendarApi.view;

      const currentTitle = calendarApi.view.title;
      setTitle(currentTitle);

      if (currentView) {
        const currentDate = currentView.currentStart;
        const monthName = currentDate.toLocaleString('default', { month: 'long' }); // Получаем название месяца

        setCurrentMonth(monthName); // Устанавливаем текущий месяц в состояние
      }
    }
    console.log(currentMonth);
  };

  const handleNext = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next(); // Переход к следующему периоду
    }
    handleClickBtn();
  };

  const handlePrev = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev(); // Переход к предыдущему периоду
    }
    handleClickBtn();
  };

  return (
    <div className="App">
      <div className={styles.header}>
        <button>Создать</button>
        <div className={styles.info}>
          <div className={styles.date}>
            <div className={classNames(styles.buttonContainer, styles.prev)} onClick={handlePrev}>
              <GrFormPrevious />
            </div>
            <div className={styles.title}>{title} числа</div>
            <div className={classNames(styles.buttonContainer, styles.next)} onClick={handleNext}>
              <GrFormNext />
            </div>
          </div>
          <h3>{currentMonth}</h3>
        </div>
        <div className={styles.input}>
          <input type="text" placeholder="Поиск" className={styles.input} />
          <Image src={glass} alt="glass" className={styles.glass} />
        </div>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        height="auto"
        locale={myLocale}
        slotLabelFormat={(arg) => ''} // убрать время слева
        events={events}
        dateClick={(e) => console.log(e.dateStr)}
        eventClick={(e) => console.log(e.event.id)}
        slotDuration="01:00:00" // Set slot duration to 2 hours
        allDaySlot={false}
        dayHeaderContent={(args) => {
          const date = args.date;
          return (
            <div className={styles.calendarHeader}>
              <div>{getShortWeekday(date, 'ru-RU')} </div>
              {date.getDate()}
            </div>
          );
        }}
        headerToolbar={{
          start: '',
          center: '',
          end: '',
        }}
        slotMinTime="08:00:00" // Set minimum time displayed (optional)
        slotMaxTime="24:00:00" // Set maximum time displayed (optional)
        eventContent={eventContent}
        ref={calendarRef}
      />
    </div>
  );
}

export default MyCalendar;

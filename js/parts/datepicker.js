(function(){
            var dateField = document.getElementById('datepicker');
            var picker = new Pikaday({
                field: dateField,
                firstDay: 1,
                minDate: new Date(),
                maxDate: new Date(2020, 12, 31),
                yearRange: [2000, 2020],
                i18n: {
                    previousMonth : 'Предыдущий месяц',
                    nextMonth     : 'Следующий месяц',
                    months        : ['Январь','Февраль','Март','Апрель','Май','ИюньИюль','July','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                    weekdays      : ['Воскресенье', 'Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
                    weekdaysShort : ['Вс', 'Пн','Вт','Ср','Чт','Пт','Сб']
                },
                onSelect: function() {
                    moment.locale('ru');
                    dateField.value = this.getMoment().format('LL');
                }
            });
        })();

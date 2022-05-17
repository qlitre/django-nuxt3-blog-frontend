import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';


export default defineNuxtPlugin(() => {
    return {
        provide: {
            /* 日付表記を直す */
            formatDate: (inputDate: string) => {
                dayjs.extend(utc);
                return dayjs.utc(inputDate).format('YYYY.MM.DD')
            },
        }
    }
})

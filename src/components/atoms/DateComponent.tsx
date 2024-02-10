/**
 * Date component
 * @param date Date object or string.
 * @param [options] Valid options for the `Intl.DateTimeFormat` object.
 * @constructor
 */
const DateComponent = ({ date, options }: { date: string | Date; options?: Intl.DateTimeFormatOptions }) => {
    const _date = date instanceof Date ? date : new Date(date);
    return (
        <>
            {_date.toLocaleDateString(undefined, {
                ...options,
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            })}
        </>
    );
};

export default DateComponent;

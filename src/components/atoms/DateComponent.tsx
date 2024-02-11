/**
 * Date component
 * @param date Date object or string.
 * @param [options] Valid options for the `Intl.DateTimeFormat` object.
 * @constructor
 */
const DateComponent = ({ date, options }: DateComponentProps) => {
    const _date = date instanceof Date ? date : new Date(date);
    return (
        <>
            {_date.toLocaleDateString(options?.locales, {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                ...(options?.formatOptions ?? {}),
            })}
        </>
    );
};

type DateComponentProps = {
    date: string | Date;
    options?: {
        locales?: Intl.LocalesArgument;
        formatOptions?: Intl.DateTimeFormatOptions;
    };
};

export default DateComponent;

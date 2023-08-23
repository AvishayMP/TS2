// 1.
// צור פונקציה גנרית ותנו לה שם מתאים שלוקחת שני ארגומנטים מסוגים שונים ומחזירה מערך המכיל את שני הארגומנטים.
// תפקיד הפונקציה, ליצור צמד 
// ['asd',3]
function toArr<T, K>(arg1: T, arg2: K): [T, K] {
    return [arg1, arg2];
}

// 2.
// צור פונקציה גנרית שמקבלת אובייקט מכל סוג ומפתח ומחזירה את ערך המפתח באובייקט
const getVal = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key];

//מתקדם
//צור פונקציה גנרית שמקבלת מערך של אובייקטים ואובייקט כארגומנטים. הפונקציה תוסיף את האובייקט שהתקבל לכל איבר במערך
// עליכם לקרוא על ולהשתמש ב: Record

function addToObj<T extends object, K extends object>(arr: T[], add: K): (T & K)[] {
    return arr.map((el: T): (T & K) => {
        return { ...el, ...add };
    });
}
// כתבו פונקציה שמקבלת אובייקט ושם שדה(מפתח).  הפונקציה תחזיר אובייקט חדש בלי המפתח
// קראו על Omit

const removeField = <T extends object,K extends keyof T>(obj: T, key: K): Omit<T, K> => {
    const { [key]: _, ...rest } = obj;
    return rest as Omit<T, K>;
};

// כתוב פונקציה שמקבלת אובייקט,מפתח וערך. הפונקציה תחזיר אובייקט חדש עם המפתח והערך שהוזנו לה כשדה חדש באובייקט שהוזן לה
// השתמשו ב &

function addWithFiled<T>(obj: T, key: string, value: any): Record<string, (T & any)> {
    return {
        ...obj,
        key: value
    }
}

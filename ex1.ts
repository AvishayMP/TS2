// Step 1: נתון לכם אינאם - אתם רשאים להפוך אותו למשהו אחר
export enum ItemType {
  Book = 'book',
  DVD = 'dvd',
}

// Step 2:  ספר צריך להכיל שדות
interface Book {
  type: ItemType.Book,
  title: string,
  author: string
}

interface DVD {
  type: ItemType.DVD,
  title: string,
  duration: number
}
type filterFuncType = (item: Book | DVD) => boolean;

// Step 3: פונקציה מקבלת מערך של פריטים, ופונקצית פילטור. ומחזירה מערך מפולטר של פריטים
function filterItems(items: (Book | DVD)[], filterFn: filterFuncType) {
  // Your code here
  return items.filter(filterFn);
}

// Step 4: הפונקציה מקבלת מערך של פריטים ומדפיסה את כל המידע הרלוונטי לגבי כל פריט
function printItemsData(items: (Book | DVD)[]) {
  // Your code here
  items.forEach((item: Book | DVD): void => {
    console.log(JSON.stringify(item, null, 2));
  })
}

// Test data
const libraryItems: (Book | DVD)[] = [
  { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { type: ItemType.DVD, title: 'Inception', duration: 148 },
  { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { type: ItemType.DVD, title: 'Avatar', duration: 162 },
  { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];

// Step 5:  הדפיסו את כל המידע הנתון
printItemsData(libraryItems);
// Step 6: ממשו את פונקצית הפילטור כך שתחזיר סרטים ארוכים משעתיים והדפיסו את המערך
console.log(filterItems(libraryItems, (item: Book | DVD): boolean => {
  if (item.type === ItemType.DVD) {
    if (item.duration > 120) {
      return true
    }
  }
  return false;
}));

// Step 7:  Harper Lee ממשו את פונקצית הפילטור כך שתחזיר רק ספרים של  
const LeeBook = filterItems(libraryItems, (item: (Book | DVD)): boolean => {
  if (item.type === ItemType.Book) {
    if (item.author === 'Harper Lee') {
      return true;
    }
  }
  return false;
});
console.log(JSON.stringify(LeeBook, null, 2));

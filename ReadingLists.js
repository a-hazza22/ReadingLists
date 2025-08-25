// دالة لإضافة كتب جديدة
const goodreadsInfo = {
 // لتخزين الكتب التي يتم قراءتها حاليًا
  currentlyReading: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
    },
  ],
  // هذه مصفوفة لتخزين الكتب التي يريد المستخدم قراءتها

  wantToRead: [
    {
      title: "The Art of Language Invention",
      author: "David Peterson",
    },
  ],
};
// دالة لإضافة كتب جديدة
const addNewBook = (books, ...additionalBookObjects) => {
  return [...books, ...additionalBookObjects];
};
// هنا يتم استدعاء الدالة addNewBook لإضافة كتابين جديدين إلى قائمة 
goodreadsInfo.currentlyReading = addNewBook(
  goodreadsInfo.currentlyReading,
  { title: "The Two Towers", author: "J.R.R. Tolkien" },
  { title: "The MOM Test", author: "Rob Fitzpatrick" }
);
// هنا يتم استدعاء الدالة لإضافة كتاب واحد إلى قائمة "wantToRead".

goodreadsInfo.wantToRead = addNewBook(goodreadsInfo.wantToRead, {
  title: "Looking for Alaska",
  author: "John Green",
});
// هذه دالة لعرض جميع المعلومات في وحدة التحكم.
const showGoodreadsInfo = (info) => {
    // يتم استخراج قوائم الكتب من الكائن info
  const currentlyReading = info.currentlyReading;
  const wantToRead = info.wantToRead;

  console.log("Currently Reading:");
  for (let book of currentlyReading) {
    // يطبع عنوان الكتاب والمؤلف بتنسيق معين.
    console.log(`${book.title} by ${book.author}`);
  }
  // اوامر الطباعه
  console.log();
  console.log("Want to Read:");
  for (let book of wantToRead) {
    console.log(`${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);
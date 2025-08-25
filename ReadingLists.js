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

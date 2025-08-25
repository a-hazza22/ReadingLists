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

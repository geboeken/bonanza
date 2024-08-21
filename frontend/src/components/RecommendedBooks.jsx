const RecommendedBooks = () => {
    const books = [
      // Данные книг будут подтягиваться из базы данных
    ];
  
    return (
      <section className="p-4 bg-white text-black">
        <h2 className="font-manrope text-3xl mb-4">Recommended Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {books.map((book, index) => (
            <div key={index} className="relative">
              {book.isEditorPick && (
                <span className="absolute top-0 left-0 bg-gray-500 text-white text-sm p-1">Editor's Pick</span>
              )}
              <img src={book.cover} alt={book.title} className="max-h-80" />
              <h3 className="font-manrope text-xl mt-2">{book.title}</h3>
              <p className="font-inter text-gray-600">{book.author}</p>
              <button className="mt-2 bg-black text-white px-4 py-2">View Details</button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default RecommendedBooks;
  
const { addBookHandler, getAllBooksHandler, getBooksByIdHandler, editBookbyHandler, deleteBookHandler } = require('./handler');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBookbyHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler: deleteBookHandler,
    },
];

module.exports = routes;
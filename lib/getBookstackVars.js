module.exports = config => {
    const {
        bookstackHost = process.env['BOOKSTACK_HOST'],
        bookstackTokenId = process.env['BOOKSTACK_TOKEN_ID'],
        bookstackTokenSecret = process.env['BOOKSTACK_TOKEN_SECRET'],
        bookstackParentBookId = process.env['BOOKSTACK_PARENT_BOOK_ID'],
    } = config
    return {
        bookstackHost,
        bookstackTokenId,
        bookstackTokenSecret,
        bookstackParentBookId,

    }
}
const fetch = require('node-fetch')
const SemanticReleaseError = require('@semantic-release/error')

module.exports = async (
    title,
    markdownContent,
    logger,
    {
        bookstackHost,
        bookstackTokenId,
        bookstackTokenSecret,
        bookstackParentBookId,
    }
) => {
    let response
    let bodyText
    try {
        body = {
            book_id: bookstackParentBookId,
            name: title,
            markdown: markdownContent,
        }

        response = await fetch('https://' + bookstackHost + '/api/pages', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: `Token ${bookstackTokenId}:${bookstackTokenSecret}`
            },
            body: JSON.stringify(body)
        })
        bodyText = await response.text()

        if (!response.ok) {
            logger.log('JSON message format invalid: ' + bodyText)
            throw new SemanticReleaseError(bodyText, 'INVALID BOOKSTACK COMMAND')
        }

        const responseJson = JSON.parse(bodyText)

        return responseJson['id']

    } catch (e) {
        throw new SemanticReleaseError(e.message, 'BOOKSTACK CONNECTION FAILED')
    }
}
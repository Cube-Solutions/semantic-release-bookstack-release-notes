const SemanticReleaseError = require('@semantic-release/error')
const getBookstackVars = require('./getBookstackVars.js')

module.exports = (pluginConfig, context) => {
    const {
        bookstackHost,
        bookstackTokenId,
        bookstackTokenSecret,
        bookstackParentBookId,
    } = getBookstackVars(pluginConfig)

    if (!bookstackHost) {
        throw new SemanticReleaseError(
            'No bookstack host defined.',
            'ENOBOOKSTACKHOST',
            `Please specify an environment variable for bookstack host.`
        )
    }
    if (!bookstackTokenId) {
        throw new SemanticReleaseError(
            'No bookstack token id defined.',
            'ENOBOOKSTACKTOKENID',
            `Please specify an environment variable for bookstack token id.`
        )
    }
    if (!bookstackTokenSecret) {
        throw new SemanticReleaseError(
            'No bookstack token secret defined.',
            'ENOBOOKSTACKTOKENSECRET',
            `Please specify an environment variable for bookstack token secret.`
        )
    }
    if (!bookstackParentBookId) {
        throw new SemanticReleaseError(
            'No bookstack parent book ID defined.',
            'ENOBOOKSTACKPARENTBOOKID',
            `Please specify an environment variable for bookstack parent book id.`
        )
    }
}
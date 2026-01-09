const getBookstackVars = require("./getBookstackVars");
const postPage = require("./postPage");
const template = require('./template')

module.exports = async (pluginConfig, context) => {
    const {
        logger,
        nextRelease,
    } = context

    const pageTitleTemplate = pluginConfig.pageTitleTemplate ?? '$version'

    const {
        bookstackHost,
        bookstackTokenId,
        bookstackTokenSecret,
        bookstackParentBookId,
    } = getBookstackVars(pluginConfig)


    const title = template(pageTitleTemplate, {
        version: nextRelease.version,
        date: (new Date().toISOString().slice(0, 10)),
    })

    const pageId = await postPage(title, nextRelease.notes, logger, {
        bookstackHost,
        bookstackTokenId,
        bookstackTokenSecret,
        bookstackParentBookId,
    })

    const bookstackPageUrl = 'https://' + bookstackHost + '/link/' + pageId

    return {url: bookstackPageUrl}
}
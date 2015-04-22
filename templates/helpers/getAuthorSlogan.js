/**
 * Created by mohist on 2/26/15.
 */
module.exports = function(contents, name) {
    var author = contents.authors[name + ".json"];
    if (author)
        return author.metadata.slogan;
    else
        return "";
};
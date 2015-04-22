/**
 * Created by mohist on 2/26/15.
 */
module.exports = function(env, tagName) {
    var allTags = env.helpers.getAllTags();
    var tags =  [];

    var innerHTML = "";
    for (var i=0; i<allTags.length; i++) {
        innerHTML += '<li role="presentation"';
        if (tagName === allTags[i]) {
            innerHTML += ' class="active"';
        }
        innerHTML += '><a href="'+ env.helpers.getTagHome(allTags[i]).url
                 + '">' + allTags[i] + '</a></li>';
    }
    return innerHTML;
};
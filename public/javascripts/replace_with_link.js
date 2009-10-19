var words = [
    {
        word: 'Something',
        link: 'http://www.something.com'
    },
    {
        word: 'Something Else',
        link: 'http://www.something.com/else'
    }
];

var changeWordsWithLink = function (words) {
    if(document.getElementById && document.getElementsByTagName) {
        var messages = document.getElementById('message');

        if(messages) {
            for(i = 0; i < messages.length; i++){
                for (j = 0; j < words.length; j++) {
                    if(words[j].word == messages[i].innerHTML) {
                        messages[i].innerHTML = words[j].link;
                        //messages[i].innerHTML = wrapInATag(words[j].link, words[j].word);
                    }
                }
            }
        }
    }
}

var wrapInATag = function(link, word) {
    return '<a href="' + link + '">' + word + '</a>';
}


should('be valid contactsToggle object').test = function() {

}


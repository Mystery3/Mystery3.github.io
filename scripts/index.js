var latest;

$(function() {
    latest = $('#latest').attr('content')

    postInclude()
    buttonFilter()
})

function postInclude() {
    /** This function based on an answer by mwiegboldt at https://stackoverflow.com/a/31837264 */
    var includes = $('[post-include]')
    $.each(includes, function() {
        var included = $(this).attr('post-include')
        if (included === 'latest') { $(this).attr('post-include', latest) }
        var file = 'posts/' + $(this).attr('post-include') + '.html'
        $(this).html('<h1>Uh oh!</h1><hr><p>This post failed to load.</p><hr>')
        $(this).load(file)
    })
}

function buttonFilter(newPost) {
    if (newPost + 1 > parseInt(latest, 10)) { $('#nextPost').attr({'onclick': '', 'class': 'arrowButtonDisabled'}) }
    else { $('#nextPost').attr({'onclick': 'changePost(1)', 'class': 'arrowButton'}) }
    if (newPost - 1 < 0) { $('#previousPost').attr({'onclick': '', 'class': 'arrowButtonDisabled'}) } 
    else { $('#previousPost').attr({'onclick': 'changePost(-1)', 'class': 'arrowButton'}) }
}

function changePost(delta) {
    var newPost = parseInt($('.post').attr('post-include'), 10) + delta

    if(newPost > latest || newPost < 0) { return }

    $('.post').attr('post-include', (newPost).toString().padStart(4, '0'))
    postInclude()
    buttonFilter(newPost)
}

function setPost(newPost) {
    $('.post').attr('post-include', newPost)
    postInclude()
    buttonFilter(newPost)
}
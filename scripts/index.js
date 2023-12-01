$(function() {
    dataInclude()
    changePost(0)
})

function dataInclude() {
    /** This function based on an answer by mwiegboldt at https://stackoverflow.com/a/31837264 */
    var includes = $('[data-include]')
    $.each(includes, function() {
        var included = $(this).attr('data-include')
        if (included === 'latest') { $(this).attr('data-include', $('#latest').attr('content')) }
        var file = 'posts/' + $(this).attr('data-include') + '.html'
        $(this).html('<h1>Uh oh!</h1><hr><p>This post failed to load.</p>')
        $(this).load(file)
    })
}

function changePost(delta) {
    /** Also disables/enables next/previous buttons */
    var latest = parseInt($('#latest').attr('content'), 10)
    var current = parseInt($('.post').attr('data-include'), 10)
    var newPost = current + delta

    if(newPost > latest || newPost < 0) {return}

    $('.post').attr('data-include', (newPost).toString().padStart(4, '0'))
    dataInclude()

    if (newPost + 1 > latest) { $('#nextPost').attr({'onclick': '', 'class': 'arrowButtonDisabled'}) } 
    else { $('#nextPost').attr({'onclick': 'changePost(1)', 'class': 'arrowButton'}) }
    if (newPost - 1 < 0) { $('#previousPost').attr({'onclick': '', 'class': 'arrowButtonDisabled'}) } 
    else { $('#previousPost').attr({'onclick': 'changePost(-1)', 'class': 'arrowButton'}) }
}
$(function() {
    dataInclude()
    changePost(0)
})

function dataInclude() {
    /** This function based on an answer by mwiegboldt at https://stackoverflow.com/a/31837264 */
    var includes = $('[data-include]')
    $.each(includes, function() {
        var included = $(this).attr('data-include')
        if (included == 'latest') { $(this).attr('data-include', $('#latest').attr('content')) }
        var file = 'posts/' + $(this).attr('data-include') + '.html'
        $(this).load(file)
    })
}

function changePost(delta) {
    /** Also disables/enables next/previous buttons */
    var latest = parseInt($('#latest').attr('content'), 10)
    var current = parseInt($('.post').attr('data-include'), 10)

    if (current + 1 > latest) { $('#nextPost').attr({'onclick': '', 'class': 'arrowButtonDisabled'}) } 
    else { $('#nextPost').attr({'onclick': 'changePost(1)', 'class': 'arrowButton'}) }
    if (current - 1 > latest) { $('#previousPost').attr({'onclick': '', 'class': 'arrowButtonDisabled'}) } 
    else { $('#previousPost').attr({'onclick': 'changePost(-1)', 'class': 'arrowButton'}) }

    $('.post').attr('data-include', (current + delta).toString().padStart(4, '0'))
    dataInclude()
}
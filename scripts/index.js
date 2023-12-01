$(function() {
    /** This function from mwiegboldt at https://stackoverflow.com/a/31837264 */
    var includes = $('[data-include]')
    $.each(includes, function() {
        var file = 'posts/' + $(this).attr('data-include') + '.html'
        $(this).load(file)
    })
})
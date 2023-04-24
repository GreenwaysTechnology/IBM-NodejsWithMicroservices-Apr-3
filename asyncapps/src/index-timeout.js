// non blocking programming using callbacks with timer animationPlayState: 

function blockMe(message) {
    console.log(message)
}
function delay(callback) {
    //callback()
    setTimeout(callback,5000) // timer will schdule the task after 5ms only
}
blockMe('start')
delay(function () {
    console.log('delay')
})
blockMe('end')
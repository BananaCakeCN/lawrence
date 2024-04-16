const sleep = ms => new Promise(res => setTimeout(res, ms));
document.addEventListener('scrollend', scrollEvent);
document.getElementById('cover').style.left = 'calc(50% - ' + document.getElementById('cover').offsetWidth/2 + 'px)';
async function scrollEvent(){
    if(document.scrollingElement.scrollTop >= 300){
        var i = 0
        while (document.scrollingElement.scrollTop < window.innerHeight){
            document.scrollingElement.scrollTop += 5+i/window.innerHeight;
            await sleep(300);
            i++;
        }
        document.removeEventListener('scrollend', scrollEvent);
        document.getElementById('start').remove();
        document.getElementById('agent').remove()
        document.getElementById('content').addEventListener('scroll', scrollEvent114)
    }else{
        var i = 0;
        document.getElementById('scrollText').innerText = 'Scroll more :('
        while (document.scrollingElement.scrollTop > 0){
            document.scrollingElement.scrollTop -= 5+i/window.innerHeight;
            await sleep(300);
            i++;
        }
    }
}
function scrollEvent114(){
    if(this.scrollTop > 400 && this.scrollTop < window.innerHeight + 350){
        this.style.backgroundColor = '';
        document.getElementsByClassName('axis')[0].style.filter = 'opacity(1)';
        document.getElementsByClassName('axis')[1].style.filter = 'opacity(1)';
    }else{
        document.getElementsByClassName('axis')[0].style.filter = '';
        document.getElementsByClassName('axis')[1].style.filter = '';
    }
    if(this.scrollTop > 100 && (this.scrollTop <= 400 || this.scrollTop >= window.innerHeight + 350)){
        this.style.backgroundColor = '#000000cc';
        document.getElementById('location').style.color = '';
        document.getElementById('places').style.color = '';
    }else{
        this.style.backgroundColor = '';
        document.getElementById('location').style.color = '#000';
        document.getElementById('places').style.color = '#000';
    }
}
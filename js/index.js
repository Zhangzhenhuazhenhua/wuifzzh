window.onload=function (){
    let tablists = document.querySelectorAll('.diary-head>li')
    tablists.forEach(function (elem,index) {
        elem.onclick=function () {
            for (let i=0;i<tablists.length;i++) {
                tablists[i].classList.remove('yi');
            }
            this.classList.add('yi')
        }

    })

    // let index=0;
    // let rightBtn=document.querySelector('.rightBtn');
    // let bannerImg=document.querySelectorAll('.lr-button > li')
    // rightBtn.onclick=function(){
    //     index++;
    //     bannerImg.forEach(function (els) {
    //         els.style.zIndex= 1;
    //
    //     });
    //     bannerImg[index].style.zIndex= 999;
    // }


    let tablist = document.querySelectorAll('.tab-text >li')
    tablist.forEach(function (elem,index) {
        elem.onmouseenter=function () {
            for (let i=0;i<tablist.length;i++) {
                tablist[i].classList.remove('hot');
            }
            this.classList.add('hot')
        }

    })


    let current=0, next=0;
    let rightBtn=document.querySelector('.right-button');
    let leftBtn=document.querySelector('.left-button');
    let bannerImg=document.querySelectorAll('.lr-button>li');
    let w=bannerImg[0].offsetWidth;
    rightBtn.onclick=function () {
        next++;
        if (next==bannerImg.length) {
            next=0;
        }

        bannerImg[next].style.left=w+'px'
        animate(bannerImg[current],{left:-w});
        animate(bannerImg[next],{left: 0});
        current=next;
    let btn=document.querySelectorAll('.button li')
        btn.forEach(function (ele) {
            ele.classList.remove('hot1')

        })
        btn[next].classList.add('hot1')
    }

    leftBtn.onclick=function () {
        next--;
        if(next<0){
            next=bannerImg.length-1;
            bannerImg[next].style.left=-w+'px';
        }

        animate(bannerImg[current],{left:w});
        animate(bannerImg[next],{left: 0});
        current=next;
        let btn=document.querySelectorAll('.button li')
        btn.forEach(function (ele) {
            ele.classList.remove('hot1')

        })
        btn[next].classList.add('hot1')

    }
    let control=document.querySelector('.lr-button')
    let ti=setInterval(rightBtn.onclick
    ,3000)
    control.onmouseenter=function(){
        clearInterval(ti)
    }
    control.onmouseleave=function () {
        ti=setInterval(rightBtn.onclick
            ,3000)
    }
























}
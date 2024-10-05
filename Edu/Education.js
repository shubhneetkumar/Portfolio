function firstPageAnime(){
    var tl=gsap.timeline();

    tl.from(".text",{
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".c1",{
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
    .from("#edu",{
        y: '-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })

    .from(".c1",{
        y: '-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
    .from(".c2",{
        y: '-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
    .from(".c3",{
        y: '-10',
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeInOut
    })
}


var timeout;

function  circleskew(){
    var xscale=1;
    var yscale=1;

    var xpre=0;
    var yprev=0;

    window.addEventListener("mousemove",function(dets){
        this.clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xpre);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xpre=dets.clientX;
        yprev=dets.clientY;

        circleMotion(xscale ,yscale);

        timeout=setTimeout(function (){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100)
    });
}

circleskew();

function circleMotion(xscale ,yscale){
    window.addEventListener('mousemove',function (dets){
        // console.log(dets.clientY);
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
    });
}
circleMotion();
firstPageAnime();
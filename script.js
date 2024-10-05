document.querySelector('a[href="#PROJECTS"]').addEventListener('click', function(e) {
    e.preventDefault();
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    scroll.scrollTo(document.querySelector('#PROJECTS'));
});

function firstPageAnime(){
    var tl=gsap.timeline();

    tl.from("#nav",{
        y: '-10',
        opacity:0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
    .from("#herofooter",{
        y: -10,
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

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate=0;
    var diffrot=0;
    elem.addEventListener("mouseleave", function(details){;

        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
        });
        gsap.to(elem.querySelector("a"),{
            opacity:.7,
            x: 0,
        });
        gsap.to(elem.querySelector("h5"),{
            opacity:.7,    
            
        })
    });
    elem.addEventListener("mousemove", function(details){
        var diff=details.clientY-elem.getBoundingClientRect().top;
        diffrot=details.clientX-rotate;
        rotate=details.clientX;
        console.log(details);
        gsap.to(elem.querySelector("a"),{
            opacity:0.4,
            x: diff*0.4,
            // y: diff * 0.1, 
        });
        gsap.to(elem.querySelector("h5"),{
            opacity:0.4,
            
            
        })
        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power3,
            top:diff,
            left:details.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*0.5),
        });
    });
});


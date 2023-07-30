gsap.to("#nav", {

    backgroundColor: "black",
    height: "120px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main", {

    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,
    }
})

gsap.from("#colon1",{

x:-70,
y:-70,
    scrollTrigger :{
        trigger:"#colon1" ,
        scroller:"body",
        start:"top 55%",
        end:"top 44%",
        scrub:2,



    }
})


gsap.from("#colon2",{

    x:70,
    y:70,
        scrollTrigger :{
            trigger:"#colon1" ,
            scroller:"body",
            start:"top 55%",
            end:"top 44%",
            scrub:2,
    
    
    
        }
    })

    




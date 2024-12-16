gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    repeat:-1,  
    yoyo:"true",

    // scrollTrigger:{
    //     trigger:"#page2 h1",
    //     scroller:"body",
    //     // markers:"true",
    //     start:"top 50%",
    // }
    
})

gsap.from("#page2 h2 ",{
    opacity:0,
    duration:2,
    x:-500,
    repeat:-1,  
    yoyo:"true",

//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         // markers:"true",
//         start:"top 50%",
//     }
    
})

gsap.from("#heading",{
    opacity:0,
    duration:2,
    y:130,
    repeat:-1,

})




gsap.from(".petoptions aside",{
    opacity:0,
    duration:1.5,
    y:+20,
    scrollTrigger:{
        trigger:".petoptions aside",
        scroller:"body",
        // markers:true,
        start:"top 20%",
    }

})



gsap.from(".tagline1 ",{
    opacity:0,
    duration:1,
    // scale:0,
    y:20,
    stagger:1.2,
    // yoyo:true,
    repeat:0,
    scrollTrigger:{
        trigger:".tagline1",
        scroller:"body",
        // markers:"true",
        start:"bottom 50%",
    }
})

// gsap.form(".petoptions1",{
//     y:20,
//     duration:1,
//     repeat:-1,
//     opacity:0,
    

// })


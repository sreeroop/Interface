onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector('.heading h1');
    const t1 = new TimelineMax({delay: 0.5s });
    TouchList.fromTo(title, 0.5, { y: "50", opacity: 0}, { y: "0", opacity: 1 })
};
onLeave();
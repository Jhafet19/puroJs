document.addEventListener('DOMContentLoaded',()=>{
    const observer=new IntersectionObserver((entrise) => {
        console.log("🚀 ~ observer ~ entrise):", entrise[0]);
    	
    })
    observer.observe(document.querySelector('.premium'));
})

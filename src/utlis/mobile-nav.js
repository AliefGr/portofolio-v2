const navbar = () => {
   const navBtn = document.querySelector('.header-bars');
   const mobileNav =document.querySelector('.mobile-nav');
   const mobileLink = document.querySelectorAll('.mobile-nav-link');

    let isMobileOpen = false;

   navBtn.addEventListener('click', () => {
    isMobileOpen = !isMobileOpen;
    
    if(isMobileOpen){
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
    }else{
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    }


   });

   mobileLink.forEach(link => {
    link.addEventListener('click', () => {
        isMobileOpen = false;
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto';
    });
    
   });
   

}

export default navbar;
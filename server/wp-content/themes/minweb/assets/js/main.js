document.addEventListener('DOMContentLoaded', function() {
    var iconMenuMobile = document.querySelector('.icon-menu-responsive'); 
    var containerMenuMobile = document.querySelector('.main-menu-container');
    var menuOverlay = document.querySelector('.main-menu-overlay'); 
    var menuItems = document.querySelectorAll('.main-menu-mobile .menu-item.menu-item-has-children');
    var subMenus = document.querySelectorAll('.sub-menu');
    var actionAcountMobile = document.querySelector('.action-account');
    var dashBoardFooterMobile = document.querySelector('.tutor-dashboard #tutor-dashboard-footer-mobile');

    // Hàm để chuyển đổi trạng thái hiển thị của menu
    actionAcountMobile.addEventListener('click', function(){
      if(dashBoardFooterMobile.style.display = "none"){
        dashBoardFooterMobile.style.display = "block";
      }else {
        dashBoardFooterMobile.style.display = "none";
      }
    });
    function toggleMenuDisplay() {
      containerMenuMobile.classList.toggle('hidden');
      containerMenuMobile.classList.toggle('active');
    }
  
    if(containerMenuMobile){
      iconMenuMobile.addEventListener('click', toggleMenuDisplay);
      menuOverlay.addEventListener('click', toggleMenuDisplay);
    }
  
    subMenus.forEach(function(subMenu) {
      subMenu.classList.add('hidden');
    });
  
    menuItems.forEach(function(menuItem) {
      var anchorTag = menuItem.querySelector('a');
      
      if (anchorTag) {
        anchorTag.addEventListener('click', function(event) {
          event.preventDefault();
          
          var subMenu = menuItem.querySelector('.sub-menu');
          if (subMenu) {
            subMenu.classList.toggle('hidden');
            subMenu.classList.toggle('active');
          }
        });
      }
    });
  });
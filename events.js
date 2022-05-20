function menu(){
    const status = $('#button').val()
    if(status == 'open'){
       $('.sidebar').addClass('menu-open')
       $('.content').addClass('open')
       $('#button').val('close')
    }else{
       $('.sidebar').removeClass('menu-open')
       $('.content').removeClass('open')
       $('#button').val('open')
       
    }
  }
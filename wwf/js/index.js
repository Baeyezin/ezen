

    // header nav slide start

    $(document).ready(function(){
        $('.nav>ul>li,.nav_bg').hover(function(){
            $(this).find('>a').css({'font-weight':'700'})
            $('.nav>ul>li>ul>li,.nav_bg').stop().slideDown(200);
            $('.nav>ul>li>ul>li>a').css({'color':'#fff'})
            $('header').css({'background-color':'#000'})
            
        },function(){
            $(this).css({'background-color':'transparent;'})
            $(this).find('>a').css({'color':'#fff','font-weight':'400'})
            $('.nav>ul>li>ul>li,.nav_bg').stop().slideUp(200);
            $('.nav>ul>li>ul>li>a').css({'color':'#fff'})
            $('header').css({'background-color':'transparent'})
            
        })

        // spon box hover start

        $('.spon_btm_box').hover(function(){
            $(this).css({'background-color':'#d94d1a'});
        },function(){
                $(this).css('background-color','#007932'); 
            });
            
        // main btn hover start    

        $('.main_btn').hover(function(){
            $(this).css({'background-color':'#fff'});
            $('.main_btn a').css({'color':'#333'})
        },function(){
            $(this).css({'background-color':'transparent'});
            $('.main_btn a').css({'color':'#fff'})
        })

        // campaign box hover

        $('.camp_box').hover(function(){
            $(this).css({'box-shadow':'0 0 0 10px #d94d1a inset'})
        },function(){
            $(this).css({'box-shadow':'none'})
        })

    }); //ready(function)

    
        
    

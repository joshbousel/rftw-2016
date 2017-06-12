<script>

function menuToggle() {
    jQuery('#menu_toggle ul#menu').slideToggle();   
}
function regToggle() {
    jQuery('#regToggle ul#regMenu').slideToggle();
}


//internal menu and hover effects
[[?x19x23x200x201x::x[[S4]]x::

::
    function subNavInitialize(){
        [[?[[?xx[[S334:pg]]xx::xxpfindxx::T::]][[?xx[[S4]]xx::xx9xx::T::]]::T::
            hoverDonate();
        ::
            [[?xx[[S334:sid]]xx::xx1388xx::    
                hoverToolkit();
            ::
                [[?[[?xx[[S334:sid]]xx::xx1385xx::T::]][[?xx[[S334:sid]]xx::xx1394xx::T::]][[?xx[[S334:sid]]xx::xx1393xx::T::]][[?xx[[S334:sid]]xx::xx1382xx::T::]][[?xx[[S334:sid]]xx::xx1392xx::T::]][[?xx[[S334:sid]]xx::xx1433xx::T::]][[?xx[[S334:sid]]xx::xx1383xx::T::]][[?xx[[S334:sid]]xx::xx1387xx::T::]]::T::
                    hoverEventinfo();
                ::
                    hoverRegister();
                ]]  
            ]]
        ]]
    }
    function activeSubNavi(){
        [[?[[?xx[[S334:pg]]xx::xxpfindxx::T::]][[?xx[[S4]]xx::xx9xx::T::]]::T::
            hoverDonate();
        ::
            [[?xx[[S334:sid]]xx::xx1388xx::    
                hoverToolkit();
            ::
                [[?[[?xx[[S334:sid]]xx::xx1385xx::T::]][[?xx[[S334:sid]]xx::xx1394xx::T::]][[?xx[[S334:sid]]xx::xx1393xx::T::]][[?xx[[S334:sid]]xx::xx1382xx::T::]][[?xx[[S334:sid]]xx::xx1392xx::T::]][[?xx[[S334:sid]]xx::xx1433xx::T::]][[?xx[[S334:sid]]xx::xx1383xx::T::]][[?xx[[S334:sid]]xx::xx1387xx::T::]]::T::
                    hoverEventinfo();
                ::
                    hoverRegister();
                ]]  
            ]]
        ]]
    }
    function hoverRegister(){
        document.getElementById('subnav_register').style.display='';
        document.getElementById('subnav_donate').style.display='none';
        document.getElementById('subnav_toolkit').style.display='none';
        document.getElementById('subnav_eventinfo').style.display='none';
    }
    function hoverDonate(){
        document.getElementById('subnav_register').style.display='none';
        document.getElementById('subnav_donate').style.display='';
        document.getElementById('subnav_toolkit').style.display='none';
        document.getElementById('subnav_eventinfo').style.display='none';
    }
    function hoverToolkit(){
        document.getElementById('subnav_register').style.display='none';
        document.getElementById('subnav_donate').style.display='none';
        document.getElementById('subnav_toolkit').style.display='';
        document.getElementById('subnav_eventinfo').style.display='none';
    }
    function hoverEventinfo(){
        document.getElementById('subnav_register').style.display='none';
        document.getElementById('subnav_donate').style.display='none';
        document.getElementById('subnav_toolkit').style.display='none';
        document.getElementById('subnav_eventinfo').style.display='';
    }
]]
</script>
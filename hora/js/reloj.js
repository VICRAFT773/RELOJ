function reloj(){
    time = date();
    hours=time.gethours();
    minutes=time.getminutes();
    seconds=time.getseconds();

    if (hours>=12){
        ph=hours/12*360;
    }else{
        ph=hours/24*360;
    }

    ph+=minutes/60*30;
    pm=minutes/60*360;
    ps=seconds/60*360;

    document.getElementById("hours").style.transform="rotate("+ph+"deg)";
    document.getElementById("minutes").style.transform="rotate("+pm+"deg)";


    
}



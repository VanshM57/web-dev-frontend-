let sec = document.getElementById("sec");
        let secCircle = document.getElementById("secCircle");
        
        setInterval(()=>{
            let currentTime = new Date();
            sec.innerHTML = currentTime.getSeconds();
            min.innerHTML = currentTime.getMinutes();
            hrs.innerHTML = currentTime.getHours();
            let s =472 - currentTime.getSeconds()*7.86;
            secCircle.style.strokeDashoffset = s;
            let m = 472 - currentTime.getMinutes()*7.86;
            minCircle.style.strokeDashoffset = m;
            let h = 472 - currentTime.getHours()*19.6;
            hrsCircle.style.strokeDashoffset = h;

        },1000)
        let currentTime = new Date();
        sec.innerHTML = currentTime.getSeconds();
number = +prompt('Bạn cần hiển thị bao nhiêu số nguyên tố?');
let count = 0;
let n = 2;
while (count < number){
    let SNT = 1;
        if (n===2){
            document.write(n + '<br>')
            count+=1;
        }
        else {
            for (i=2;i<n;i++){
                if (n%i===0){
                    SNT = 0;
                    break;}
            }
            if (SNT===1){
                document.write(n + '<br>');
                count+=1
            }
        }
        n+=1
}



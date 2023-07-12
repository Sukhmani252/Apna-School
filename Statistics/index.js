let counts_a = setInterval(updated_a);
    let upto_a = 0;
    function updated_a() {
        let count_a = document.getElementById("counter-a");
        upto_a=upto_a+10;
        count_a.innerHTML = upto_a;
        if (upto_a === 1250) {
            clearInterval(counts_a);
        }
    }

    let counts_b = setInterval(updated_b);
        let upto_b = 0;
        function updated_b() {
            let count_b = document.getElementById("counter-b");
            count_b.innerHTML = ++upto_b;
            if (upto_b === 125) {
                clearInterval(counts_b);
            }
        }

        let counts_c = setInterval(updated_c);
            let upto_c = 0;
            function updated_c() {
                let count_c = document.getElementById("counter-c");
                count_c.innerHTML = ++upto_c;
                if (upto_c === 100) {
                    clearInterval(counts_c);
                }
            }

            let counts_d = setInterval(updated_d);
                let upto_d = 0;
                function updated_d() {
                    let count_d = document.getElementById("counter-d");
                    count_d.innerHTML = ++upto_d;
                    if (upto_d === 12) {
                        clearInterval(counts_d);
                    }
                }

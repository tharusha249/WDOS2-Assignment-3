document.addEventListener('DOMContentLoaded', function() {
    //Check-IN Date / Check-OUT Date / Number of Days
    let dtecheckin = document.getElementById('dateIn');
    let dtecheckout = document.getElementById('dateout');
    let sumcheckin = document.getElementById('displayInDate');
    let sumcheckout = document.getElementById('displayOutDate');
    let sumdays = document.getElementById('NumDays');
    let diffDays = 0;
    dtecheckin.addEventListener('change', function() {
        sumcheckin.innerText = dtecheckin.value;
    });
    dtecheckout.addEventListener('change', function() {
        sumcheckout.innerText = dtecheckout.value;

        let date1 = new Date(dtecheckin.value);
        let date2 = new Date(dtecheckout.value);
        let diffTime = Math.abs(date2 - date1);
        diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        sumdays.innerText = `${diffDays} days`;
    });
    //Increment and Decrement Function
    function Decrement(val, sum) {
        if(val.value > 0){
            val.value--;
            sum.innerText = `${val.value} `;
        }
    }
    function Increment(val, sum) {
        val.value++;
        sum.innerText = `${val.value} `;
    }
    //Number of Adult
    let adult = document.getElementById('num1');
    let sumadult = document.getElementById('NumAdult');
    let adultminus = document.getElementById('deduct1');
    let adultplus = document.getElementById('add1');
    adultminus.addEventListener('click', function() {
        Decrement(adult, sumadult);
        CurrentCost()
    });
    adultplus.addEventListener('click', function() {
        Increment(adult, sumadult);
        CurrentCost()
    });
    
    //Number of Children
    let children = document.getElementById('num2');
    let sumchildren = document.getElementById('NumChild');
    let childrenminus = document.getElementById('deduct2');
    let childrenplus = document.getElementById('add2');
    childrenminus.addEventListener('click', function() {
        Decrement(children, sumchildren);
        CurrentCost()
    });
    childrenplus.addEventListener('click', function() {
        Increment(children, sumchildren);
        CurrentCost()
    });
    
    //Number of Single Room
    let single = document.getElementById('num3');
    let sumsingle = document.getElementById('type1');
    let singleminus = document.getElementById('deduct3');
    let singleplus = document.getElementById('add3');
    singleminus.addEventListener('click', function() {
        Decrement(single, sumsingle);
        CurrentCost()
    });
    singleplus.addEventListener('click', function() {
        Increment(single, sumsingle);
        CurrentCost()
    });

    //Number of Double Room
    let double = document.getElementById('num4');
    let sumdouble = document.getElementById('type2');
    let doubleminus = document.getElementById('deduct4');
    let doubleplus = document.getElementById('add4');
    doubleminus.addEventListener('click', function() {
        Decrement(double, sumdouble);
        CurrentCost()
    });
    doubleplus.addEventListener('click', function() {
        Increment(double, sumdouble);
        CurrentCost()
    });

    //Number of Triple Room
    let triple = document.getElementById('num5');
    let sumtriple = document.getElementById('type3');
    let tripleminus = document.getElementById('deduct5');
    let tripleplus = document.getElementById('add5');
    tripleminus.addEventListener('click', function() {
        Decrement(triple, sumtriple);
        CurrentCost()
    });
    tripleplus.addEventListener('click', function() {
        Increment(triple, sumtriple);
        CurrentCost()
    });

    //Number of extra bed
    let bed = document.getElementById('num6');
    let sumbed = document.getElementById('type4');
    let bedminus = document.getElementById('deduct6');
    let bedplus = document.getElementById('add6');
    bedminus.addEventListener('click', function() {
        Decrement(bed, sumbed);
        CurrentCost()
    });
    bedplus.addEventListener('click', function() {
        Increment(bed, sumbed);
        CurrentCost()
    });

    const btnfav = document.getElementById('Fav1');
    btnfav.addEventListener('click', function() {
        let Adultval = adult.value;
        let Childval = children.value;
        let Singleval = single.value;
        let Doubleval = double.value;
        let Tripleval = triple.value;
        let Bedval = bed.value;

        localStorage.setItem('Adult', Adultval);
        localStorage.setItem('Children', Childval);
        localStorage.setItem('Single Room', Singleval);
        localStorage.setItem('Double Room', Doubleval);
        localStorage.setItem('Triple Room', Tripleval);
        localStorage.setItem('Extra Bed', Bedval);
    });

    const outloyalty = document.getElementById('loyal');
    const btnloyalty = document.getElementById('Loyalty');
    let total_rooms = 0;
    let loyalty_points = 0;
    btnloyalty.addEventListener('click', function() {
        total_rooms = parseInt(single.value) + parseInt(double.value) + parseInt(triple.value);
        if(total_rooms >= 3){
            loyalty_points = total_rooms*20
            outloyalty.value = loyalty_points;
    }else{
        outloyalty.value = loyalty_points;
    }
    
    
    });
    let costs = document.getElementById('Cost');
    function CurrentCost(){
        single_cost = parseInt(single.value)*25000;
        double_cost = parseInt(double.value)*35000;
        triple_cost = parseInt(triple.value)*40000;
        Room_Cost = single_cost + double_cost + triple_cost;
        bed_cost = parseInt(bed.value)*8000;
        kids_cost = parseInt(children.value)*5000;
        total = Room_Cost + bed_cost + kids_cost;
        full_total = total*diffDays;
        costs.innerText = `Rs. ${full_total}`;
        return full_total;
    }

    let promo = document.getElementById('promo');
    let discount = document.getElementById('Discount');
    let Discount = 0;
    let total_final = document.getElementById('payment');
    promo.addEventListener("blur", function(){
        if(promo.value == "promo123"){
            full_total = CurrentCost();
            Discount = full_total*0.05;
            discount.innerText = `Rs. ${Discount}`;
            Disounted_price = full_total - Discount;
            total_final.innerText = `Rs. ${Disounted_price}`;
        }else{
            full_total = CurrentCost();
            discount.innerText = `Rs. ${Discount}`;
            Disounted_price = full_total - Discount;
            total_final.innerText = `Rs. ${Disounted_price}`;
        }
    })
    let btnbook = document.getElementById('continue');
    let overcost = document.getElementById('overcost');
    let overdiscount = document.getElementById('overdiscount');
    let overpay = document.getElementById('overpay');

    btnbook.addEventListener('click', function() {
        adult.value = 0;
        children.value = 0;
        single.value = 0;
        double.value = 0;
        triple.value = 0;
        bed.value = 0;
        sumadult.innerText = `${adult.value} `;
        sumchildren.innerText = `${children.value} `;
        sumsingle.innerText = `${single.value} `;
        sumdouble.innerText = `${double.value} `;
        sumtriple.innerText = `${triple.value} `;
        sumbed.innerText = `${bed.value} `;
        costs.innerText = `Rs. 0`;
        discount.innerText = `Rs. 0`;
        total_final.innerText = `Rs. 0`;

        let cos = localStorage.getItem('costs');
        if(cos == null){
            localStorage.setItem('costs', full_total);
            overcost.innerText = `Rs. ${full_total}`;
        }
        else{
            let costo = parseInt(cos) + parseInt(full_total);
            localStorage.setItem('costs', costo);
            overcost.innerText = `Rs. ${costo}`;
        }

        let disc = localStorage.getItem('discount');
        if(disc == null){
            localStorage.setItem('discount', Discount);
            overdiscount.innerText = `Rs. ${Discount}`;
        }
        else{
            let dis = parseInt(disc) + parseInt(Discount);
            localStorage.setItem('discount', dis);
            overdiscount.innerText = `Rs. ${dis}`;
        }

        let tot = localStorage.getItem('total');
        if(tot == null){
            localStorage.setItem('total', Disounted_price);
            overpay.innerText = `Rs. ${Disounted_price}`;
        }
        else{
            let to = parseInt(tot) + parseInt(Disounted_price);
            localStorage.setItem('total', to);
            overpay.innerText = `Rs. ${to}`;
        }

    });

    //Adventure Booking
    //date
    let dtecheckin2 = document.getElementById('date');
    let sumcheckin2 = document.getElementById('displayDate');
    dtecheckin2.addEventListener('change', function() {
        sumcheckin2.innerText = dtecheckin2.value;
    });
    //number of sl adult
    let sladult = document.getElementById('num10');
    let sumsladult = document.getElementById('SumSlAd');
    let sladultminus = document.getElementById('deduct10');
    let sladultplus = document.getElementById('add10');
    sladultminus.addEventListener('click', function() {
        Decrement(sladult, sumsladult);
        totalpay()
    });
    sladultplus.addEventListener('click', function() {
        Increment(sladult, sumsladult);
        totalpay()
    });
    
    //number of sl children
    let slchildren = document.getElementById('num7');
    let sumslchildren = document.getElementById('SUmSlCh');
    let slchildrenminus = document.getElementById('deduct7');
    let slchildrenplus = document.getElementById('add7');
    slchildrenminus.addEventListener('click', function() {
        Decrement(slchildren, sumslchildren);
        totalpay()
    });
    slchildrenplus.addEventListener('click', function() {
        Increment(slchildren, sumslchildren);
        totalpay()
    });
    //number of foregigner Adult
    let fgadult = document.getElementById('num8');
    let sumfgadult = document.getElementById('SumFAd');
    let fgadultminus = document.getElementById('deduct8');
    let fgadultplus = document.getElementById('add8');
    fgadultminus.addEventListener('click', function() {
        Decrement(fgadult, sumfgadult);
        totalpay()
    });
    fgadultplus.addEventListener('click', function() {
        Increment(fgadult, sumfgadult);
        totalpay()
    });
    //number of foregigner children
    let fgchildren = document.getElementById('num9');
    let sumfgchildren = document.getElementById('SumFCh');
    let fgchildrenminus = document.getElementById('deduct9');
    let fgchildrenplus = document.getElementById('add9');
    fgchildrenminus.addEventListener('click', function() {
        Decrement(fgchildren, sumfgchildren);
        totalpay()
    });
    fgchildrenplus.addEventListener('click', function() {
        Increment(fgchildren, sumfgchildren);
        totalpay()
    });
    //adult guide
    let guide = document.getElementById('num11');
    let sumguide = document.getElementById('SumGadult');
    let guideminus = document.getElementById('deduct11');
    let guideplus = document.getElementById('add11');
    guideminus.addEventListener('click', function() {
        Decrement(guide, sumguide);
        totalpay()
    });
    guideplus.addEventListener('click', function() {
        Increment(guide, sumguide);
        totalpay()
    });
    //children guide
    let cguide = document.getElementById('num12');
    let sumcguide = document.getElementById('SumGchild');
    let cguideminus = document.getElementById('deduct12');
    let cguideplus = document.getElementById('add12');
    cguideminus.addEventListener('click', function() {
        Decrement(cguide, sumcguide);
        totalpay()
    });
    cguideplus.addEventListener('click', function() {
        Increment(cguide, sumcguide);
        totalpay()
    });
   let adtotal = document.getElementById('total'); 
    function totalpay(){
        let sladult_cost = parseInt(sladult.value)*5000;
        let slchildren_cost = parseInt(slchildren.value)*2000;
        let fgadult_cost = parseInt(fgadult.value)*10000;
        let fgchildren_cost = parseInt(fgchildren.value)*5000;
        let guide_cost = parseInt(guide.value)*1000;
        let cguide_cost = parseInt(cguide.value)*500;
        let total = sladult_cost + slchildren_cost + fgadult_cost + fgchildren_cost + guide_cost + cguide_cost;
        adtotal.innerText = `Rs. ${total}`;
        return total;
    }

    let btnad = document.getElementById('Advent');
    btnad.addEventListener('click', function() {  
        alert('Thank You!\nYour booking is confirmed\nYour Diving is at 11.00am');
            localStorage.clear();
            window.location.reload();
      });



});
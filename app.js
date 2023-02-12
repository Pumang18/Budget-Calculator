

var enterMoney=document.getElementById('insert_value');
var money;



enterMoney.addEventListener('keyup', (e)=>{
    if(e.key==='Enter'){
        money=e.target.value;
    
        if(isNaN(money)||money==0){
            alert("Enter Valid Amount")
        }
        else{
            splitDiv.classList.remove('hidden')
            eBtn.classList.remove('hidden')
        }
    }
});



var resultsection=document.getElementById('result_section')

var evaluate=document.getElementById('evaluateBtn')


var roomrent=(document.getElementById('roomrent'))
var accessories=(document.getElementById('access'))
var sidehustle =(document.getElementById('sidehustle'))
var saving=(document.getElementById('sav'))



evaluate.addEventListener('click',()=>{
    if(roomrent.value==""||accessories.value==""||sidehustle.vale==""||saving.value==""){
        alert('Enter All Value Correct')
    }
    else{
        var room_per=parseInt(roomrent.value)
        var access_per=parseInt(accessories.value)
        var side_per=parseInt(sidehustle.value)
        var sav_per=parseInt(saving.value)

        var total=room_per+access_per+side_per+sav_per

        if(total>100){
            alert("Total Percentage Can't be more than 100%")
        }
        else if(total<100){
            var per= 100%total
            sav_per+=per;
            calculate(room_per,access_per,side_per,sav_per)
        }
        else{
            calculate(room_per,access_per,side_per,sav_per);
        }

    }
})

function calculate(room,access,sideh,save){
    var roomrentMoney=(room/100)*money;
    var accessoriesMoney=(access/100)*money;
    var sidehMoney=(sideh/100)*money;
    var savingMoney=(save/100)*money;


    document.getElementById('show_room').innerHTML=`Rs.${roomrentMoney}`;
    document.getElementById('show_access').innerHTML=`Rs.${accessoriesMoney}`;
    document.getElementById('show_sh').innerHTML=`Rs.${sidehMoney}`;
    document.getElementById('show_save').innerHTML=`Rs.${savingMoney}`;

    

    resultsection.classList.remove('hidden');

}

document.getElementById('reset').addEventListener('click',()=>{
    location.reload()
})


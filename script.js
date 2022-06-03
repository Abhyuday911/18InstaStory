arr=[
    {pic1:"https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",pic2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"},
    {pic1:"https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",pic2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"},
    {pic1:"https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=372&q=80",pic2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"},
    {pic1:"https://images.unsplash.com/photo-1593592023995-a857ecf39076?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",pic2:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"}
];

clutter="";

arr.forEach(function(elem,index){
    clutter+=`<div id="story">
    <img width=250px height=400px id="${index}" src="${elem.pic1}" alt="">
    <div id="dp">
    <img height=50px width=50px src="${elem.pic2}" alt="">
    </div>
</div>`
    
});
document.querySelector("#stories").innerHTML=clutter;

document.querySelector("#stories").addEventListener("click",function(elems){

    document.querySelector("#overlay img").setAttribute("src",arr[elems.target.id].pic1)

    document.querySelector("#overlay").style.display="flex";
    console.log(arr[elems.target.id].pic1)

    setTimeout(function(){
        document.querySelector("#overlay").style.display="none";   
    },2000)
});
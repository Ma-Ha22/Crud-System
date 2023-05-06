console.log('hi');
var inputs=document.querySelectorAll('input');
var productName= document.getElementById('productName');
var productPrice= document.getElementById('productPrice');
var productCategory= document.getElementById('productCategory');
var productDesc=document.getElementById('productDesc');
var add=document.getElementById('productBtn');
var update=document.getElementById('updateBtn');
var productArr=[];
if(localStorage.getItem('Products') != null){
    productArr= JSON.parse(localStorage.getItem('Products'));
    addProduct();
}


    for(let i=0;i<inputs.length;i++){
        inputs[i].addEventListener('keyup',function(e){
            if(e.key=='Enter'){
                let next=inputs[i+1];
                next.focus();
            }
        })
    }
    











  








add.addEventListener('click',function(){

    var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value,
    }
    
    

    /// validation///
    let pricePattern=/^1000$|[0-9]{4,}$/;
    let categoryPattern=/^(mobile)$|(tv)$|(labtop)$/;
    let productPattern =/^[A-Za-z]{1,}$/ ;
    
    if(productPattern.test(product.name)==false || productName.value=="")
    {   
        productName.style.border='1px solid red';
        return;
    }else 
        {
            productName.style.border='1px solid green';
        };
    if(pricePattern.test(product.price)==false){
        
        productPrice.style.border='1px solid red';
        document.querySelector('.priceSpan').classList.replace('d-none','d-block');
        return;
    }else 
    {   
        productPrice.style.border='1px solid green'
        document.querySelector('.priceSpan').classList.replace('d-block','d-none');
    };
    if(categoryPattern.test(product.category.toLowerCase())==false){
        
        productCategory.style.border='1px solid red';
        document.querySelector('.catSpan').classList.replace('d-none','d-block');
        return;
    }
    
    else{
        document.querySelector('.catSpan').classList.replace('d-block','d-none');
        productCategory.style.border='1px solid green';
    } 


    



    productArr.push(product);
    
    localStorage.setItem('Products',JSON.stringify(productArr));
    addProduct();
    

    clearProduct();

    
});
       
    

    


function clearProduct(){
    productName.value="";
    productPrice.value="";
    productCategory.value="";
    productDesc.value="";
}

function addProduct(){
    var x=``;
    for(var i=0;i<productArr.length;i++){
         x += `<tr>
        <th>${i}</th>
        
        
        <td>${productArr[i].name}</td>
        
        
        <td>${productArr[i].price}</td>
        
        
        <td>${productArr[i].category}</td>
        <td>${productArr[i].desc}</td>
        <td><button onclick='updateProduct(${i})' class=" btn bg-secondary text-white  mx-2 my-2">Update</button></td>
        <td><button onclick='deleteProject(${i})' class="btn bg-secondary text-white mx-2 my-2">Delete</button></td>
        </tr>`;

        
     
    } 
    document.getElementById("addProduct").innerHTML= x; 
}


function deleteProject(index){
    productArr.splice(index,1);
    localStorage.setItem('Products',JSON.stringify(productArr));
    addProduct();
}



function searchProduct(e){
    var x=``;
        for(var i=0; i<productArr.length;i++)
        {
            if(productArr[i].name.toLowerCase().includes(e.toLowerCase())==true)
                {
                    x +=`<td>${i}</td>
        
        
        <td>${productArr[i].name}</td>
        
        
        <td>${productArr[i].price}</td>
        
        
        <td>${productArr[i].category}</td>
        <td>${productArr[i].desc}</td>
        <td><button  onclick='updateProduct(${i})'  class='btn btn-bg-primary mx-2 my-2'>Update</button></td>
        <td><button onclick='deleteProject(${i})' class='btn btn-bg-primary mx-2 my-2'>Delete</button></td>
        </tr>`;
        
                }
                document.getElementById("addProduct").innerHTML= x;
            }
            
        }



        function updateProduct(a)
        {   
            
            productName.value=`${productArr[a].name}`;
            productPrice.value=`${productArr[a].price}`;
            productCategory.value=`${productArr[a].category}`;
            productDesc.value=`${productArr[a].desc}`;
            update.style.display='block';
            add.style.display='none';
            deleteProject(a);
            
            
        }

function updateNow(){

    var product={
        name:productName.value,
        price:productPrice.value,
        category:productCategory.value,
        desc:productDesc.value,
    }
    
    productArr.push(product);
    
    localStorage.setItem('Products',JSON.stringify(productArr));
        productArr.push();
        addProduct();
        clearProduct();
        update.style.display='none';
        add.style.display='block';
}

































































































// function valid(){
    // var product={
    //     name:productName.value,
    //     price:productPrice.value,
    //     category:productCategory.value,
    //     desc:productDesc.value,
    // }
    // var valid=1;
    
    // var namePattern=/^[A-Za-z]+$/
    // if(namePattern.test(productName.value)){
    //     // valid=1;
    //     console.log('true')
    // }
// }



    // var valid=1;


    // var namePattern=/^[A-Za-z]+$/;
    // var pricePattern=/^[0-9]$/;
    // var categoryPattern=/^(mobile)|(tv)|(labtop)$/;
    // // var valid=1;
    // if(namePattern.test(productName.value)==false){
    //     console.log('kkk');
    //     // valid=0;
    // }
    
    // else if(pricePattern.test(productPrice.value)==false){
    //     console.log('kkkll');
        // valid=0;
        // productName.style.border='1px solid green';
        // productPrice.style.border='1px solid red';
    // }else {
        
    //     product();
    // }
    
    // else if(categoryPattern.test(productCategory.value.toLowerCase)==false){
    
    //     productCategory.style.border='1px solid red';
    //     productPrice.style.border='1px solid green';
        
    // }else
    
    // for(var input=0 ;input<inputs.length;input++){
//     inputs[input].addEventListener('keyup',function(e){
//         if(e.keyCode == 13){
                
//                 inputs[input+1].focus();
                
//             }
//     })
// }


// inputs.addEventLestnere('keyup' , function(){
//     console.log('llll')
//     for(var input=0 ;input<inputs.length;input++)
//     {
//         if(e.keyCode == 13){
//             console.log('halllll');
//         }
//     }
// })




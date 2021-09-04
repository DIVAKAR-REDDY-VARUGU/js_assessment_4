var productData = {
  "id": "1",
  "name": "Men Navy Blue Solid Sweatshirt",
  "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
  "photos": [
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
    "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
  ],
  "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
  "size": [
    1,
    1,
    0,
    1,
    0
  ],
  "isAccessory": false,
  "brand": "United Colors of Benetton",
  "price": 2599
}


var body=document.getElementsByTagName('body')[0]
body.innerHTML=`<section id='section-wraper'>
        <div class='left-side-wrapper'>
            
        </div>
        <div class='right-side-wrapper'>
            <div class='right-side-content'>
                <h1 class='content-main-heading'>${productData.name}</h1>
                <h4 class='brand-title'>${productData.brand}</h4>
                <h3 class="product-price">Price: Rs <span>${productData.price}</span></h3>
                <div class='product-description-wrapper'>
                    <h3 class="product-description-title" >Description</h3>
                    <p class="product-description">${productData.description}</p>
                </div>
                <div class="product-previews-wrapper">
                    <h3 class="product-preview-title">Product Preview</h3>
                    <div class='preview-cards-wrapper'>
                        
                    </div>
                </div>
            </div>
            <div id="add-tocard-btn">Add to Cart</div>
        </div>
    </section>`
var leftSideWrapper=document.getElementsByClassName('left-side-wrapper')[0]
var bigImg=document.createElement('img')
bigImg.src=productData.preview
bigImg.className='left-side-img'
leftSideWrapper.appendChild(bigImg)

var previewCardsWrapper=document.getElementsByClassName('preview-cards-wrapper')
var leftSideImg=document.getElementsByClassName('left-side-img')[0]
var a=null

for(var i=0;i<productData.photos.length;i++)
{  
  imgCreate(productData.photos[i])
}

function imgCreate(data){

  a = document.createElement('img');
  a.src=data
  a.className='preview-card'

  a.addEventListener('click',function() {
    bigImg.src=data
  })
  previewCardsWrapper[0].appendChild(a)

}

var temp=document.getElementsByClassName('preview-card')
temp[0].style.border='2px solid #009688'
for(var i=0;i<temp.length;i++)
{
  temp[i].addEventListener('click',function(e){
    for(var j=0;j<temp.length;j++)
    {
      temp[j].style.border='0px solid black'
    }
    e.target.style.border='2px solid #009688'
  })    
}
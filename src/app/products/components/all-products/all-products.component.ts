import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss'],

})
export class AllProductsComponent implements OnInit {

  products:any[]=[];
  categories:any[]=[];
  cartProducts:any[]=[];
  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getproducts()
    this.getCategories()
  }
  getproducts(){
    this.service.getAllProducts().subscribe((res:any)=>{
     this.products=res
    })
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any)=>{
     console.log(res);
      this.categories=res
    })
  }

  filterCategory(event:any){

    let value =event.target.value;
    console.log(value);
    if(value =="all"){
      this.getproducts()
    }
    else
    {
      this.getProductsCategory(value)
    }
  }

  getProductsCategory(keyword:string){
      this.service.getProductsByCategory(keyword).subscribe((res:any) =>{
          this.products=res
      })
  }

  addToCart(event:any){
    // console.log(event)
    // localStorage.setItem('cart',event)
    if("cart" in localStorage)
    {
      this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
      let exist=this.cartProducts.find(item=>item.item.id==event.item.id)
      if(exist)
      {
        alert("product is already in your cart")
      }
      else
      {
        this.cartProducts.push(event)
        localStorage.setItem('cart',JSON.stringify(this.cartProducts))
      }

    }
    else{
      this.cartProducts.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    }
  }
}

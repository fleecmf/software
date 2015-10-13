package com.shenxiaolin.main;

import javafx.geometry.Side;

//这是一个测试类
public class TestClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       Shape s1=new Circle(10);  //创建Circle对象，Shape是父接口
       System.out.println(s1.toString()+"的面积是："+s1.area());//输出面积
       System.out.println(s1.toString()+"的周长是："+s1.perimeter()+"\n");//输出周长
       
       
       Shape s2=new Rectangle(5,10); 
       System.out.println(s2.toString()+"的面积是："+s2.area());
       System.out.println(s2.toString()+"的周长是："+s2.perimeter()+"\n");
       
       TotalObject to1=new TotalObject();
       TotalObject to2=new TotalObject();
       TotalObject to3=new TotalObject();
       
       System.out.println("创建的TotalObject对象总数是:"+to1.getTotal());
	}

	

}

package com.shenxiaolin.main;

import javafx.geometry.Side;

//����һ��������
public class TestClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       Shape s1=new Circle(10);  //����Circle����Shape�Ǹ��ӿ�
       System.out.println(s1.toString()+"������ǣ�"+s1.area());//������
       System.out.println(s1.toString()+"���ܳ��ǣ�"+s1.perimeter()+"\n");//����ܳ�
       
       
       Shape s2=new Rectangle(5,10); 
       System.out.println(s2.toString()+"������ǣ�"+s2.area());
       System.out.println(s2.toString()+"���ܳ��ǣ�"+s2.perimeter()+"\n");
       
       TotalObject to1=new TotalObject();
       TotalObject to2=new TotalObject();
       TotalObject to3=new TotalObject();
       
       System.out.println("������TotalObject����������:"+to1.getTotal());
	}

	

}

package com.shenxiaolin.main;

//这是一个统计对象类，能够统计它已创建对象的个数
public class TotalObject {
       private static int total=0;

	public TotalObject() { //无参构造函数
		super();
		total++;
		// TODO Auto-generated constructor stub
	}
   
	public static int getTotal() {
		return total;
	}
}

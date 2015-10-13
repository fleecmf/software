package com.shenxiaolin.main;

//这是一个圆形类，继承自Shape接口
public class Circle implements Shape {
    public static final float PI=3.1415926f; 
    private float radius; //定义圆的半径
    
    //无参构造函数
    public Circle() {
		super();
		// TODO Auto-generated constructor stub
	}
    //有参构造函数
    public Circle(float radius) {
		super();
		this.radius = radius;
	}
	

	public float getRadius() {
		return radius;
	}
	public void setRadius(float radius) {
		this.radius = radius;
	}
	//toString 方法
	@Override
	public String toString() {
		return "Circle [radius=" + radius + "]";
	}
	
	@Override
	public float area() {
		if (radius>0) { //判断半径是否大于0，是才返回面积的计算
			return PI*radius*radius;
		}
		else {
			return -1;
		}
	}
	
	@Override
	public float perimeter() {
		// TODO Auto-generated method stub
		return 2*PI*radius;
	}
	
	
}

package com.shenxiaolin.main;

//这是一个矩形类，继承自Shape接口
public class Rectangle implements Shape{
	private float length; //矩形的长度
	private float width; //矩形的宽度
	
	
	public Rectangle() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Rectangle(float length, float width) {
		super();
		this.length = length;
		this.width = width;
	}
	
	
	public float getLength() {
		return length;
	}
	public void setLength(float length) {
		this.length = length;
	}
	public float getWidth() {
		return width;
	}
	public void setWidth(float width) {
		this.width = width;
	}
	
	//toString 方法
	@Override
	public String toString() {
		return "Rectangle [length=" + length + ", width=" + width + "]";
	}
	
	@Override
	public float area() {
		// TODO Auto-generated method stub
		if(length>0&&width>0){ 
			return length*width;
			}
		else {
			return -1;
			
		}
	}
	
	@Override
	public float perimeter() {
		// TODO Auto-generated method stub
		float p;
		return p=(length+width)*2;
	}
	
}

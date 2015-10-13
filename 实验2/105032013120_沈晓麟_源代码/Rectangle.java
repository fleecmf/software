package com.shenxiaolin.main;

//����һ�������࣬�̳���Shape�ӿ�
public class Rectangle implements Shape{
	private float length; //���εĳ���
	private float width; //���εĿ��
	
	
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
	
	//toString ����
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

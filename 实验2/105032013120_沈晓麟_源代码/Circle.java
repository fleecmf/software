package com.shenxiaolin.main;

//����һ��Բ���࣬�̳���Shape�ӿ�
public class Circle implements Shape {
    public static final float PI=3.1415926f; 
    private float radius; //����Բ�İ뾶
    
    //�޲ι��캯��
    public Circle() {
		super();
		// TODO Auto-generated constructor stub
	}
    //�вι��캯��
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
	//toString ����
	@Override
	public String toString() {
		return "Circle [radius=" + radius + "]";
	}
	
	@Override
	public float area() {
		if (radius>0) { //�жϰ뾶�Ƿ����0���ǲŷ�������ļ���
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

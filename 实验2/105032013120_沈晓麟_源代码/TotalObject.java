package com.shenxiaolin.main;

//����һ��ͳ�ƶ����࣬�ܹ�ͳ�����Ѵ�������ĸ���
public class TotalObject {
       private static int total=0;

	public TotalObject() { //�޲ι��캯��
		super();
		total++;
		// TODO Auto-generated constructor stub
	}
   
	public static int getTotal() {
		return total;
	}
}

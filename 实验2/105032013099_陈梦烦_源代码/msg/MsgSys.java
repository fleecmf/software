package cmf.msg;

import java.util.Scanner;

import cmf.stu.StuManage;
import cmf.stu.Student;

public class MsgSys {

	public static void Menu() {
		System.out.println("1.����ѧ����Ϣ");
		System.out.println("2.ɾ��ѧ����Ϣ");
		System.out.println("3.�޸�ѧ����Ϣ");
		System.out.println("4.��ѯָ��ѧ����Ϣ");
		System.out.println("5.�������ѧ����Ϣ");
		System.out.println("6.�˳�����");
		System.out.print("�������ѡ����:");
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StuManage stuM=new StuManage();
		System.out.println("��ӭʹ��ѧ����Ϣ����ϵͳ");
		boolean flag=true;
		int iIndex=0;
		Scanner scanner=new Scanner(System.in);
		Student stu=new Student();
		while(flag){
			MsgSys.Menu();
			iIndex=scanner.nextInt();
			switch (iIndex) {
			case 1:
				System.out.println("������ֱ�ѧ����ѧ�š�����������:");
				stu.setStuId(scanner.next());
				stu.setStuName(scanner.next());
				stu.setStuAge(scanner.nextInt());
				if(stuM.AddStuent(stu)){
					System.out.println("��ӳɹ���");;
				
				}
				stu=null;
				break;
			case 2:
				System.out.println("������ѧ����ѧ��:");
				String strId=scanner.next();
				stu=stuM.searchStu(strId);
				if(stu==null){
					System.out.println("δ�ҵ���ѧ������Ϣ");
				}
				else if(stuM.DelStudent(stu)){
					System.out.println("ɾ���ɹ���");
				}
				else {
					System.out.println("δɾ���ɹ���");
				}
				break;
			case 3:
				System.out.print("�������޸�ѧ����ѧ�ţ�");
				strId=scanner.next();
				stu=stuM.searchStu(strId);
				Student stuC=new Student();
				if(stu==null){
					System.out.println("δ�ҵ���ѧ������Ϣ");
				}
				else {
					System.out.println("�����޸ĵ���Ϣ��ѧ�š�����������:");
					stuC.setStuId(scanner.next());
					stuC.setStuName(scanner.next());
					stuC.setStuAge(scanner.nextInt());
					if(stuM.AlterStuInf(stu, stuC))
						System.out.println("�޸ĳɹ�");
					else {
						System.out.println("�޸�ʧ��");
					}
				}
				stu=null;
				stuC=null;
				break;
			case 4:
				System.out.println("������ѧ����ѧ��:");
				strId=scanner.next();
				stu=stuM.searchStu(strId);
				if(stu==null){
					System.out.println("δ�ҵ���ѧ������Ϣ");
				}
				else {
					stu.toString();
				}
				break;
			case 5:
				stuM.showStuInf();
				break;
			case 6:
				flag=false;
				break;	
			default:
				break;
			}
		}
		
	}

}

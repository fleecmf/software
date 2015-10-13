package cmf.msg;

import java.util.Scanner;

import cmf.stu.StuManage;
import cmf.stu.Student;

public class MsgSys {

	public static void Menu() {
		System.out.println("1.增加学生信息");
		System.out.println("2.删除学生信息");
		System.out.println("3.修改学生信息");
		System.out.println("4.查询指定学生信息");
		System.out.println("5.浏览所有学生信息");
		System.out.println("6.退出程序");
		System.out.print("输入序号选择功能:");
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		StuManage stuM=new StuManage();
		System.out.println("欢迎使用学生信息管理系统");
		boolean flag=true;
		int iIndex=0;
		Scanner scanner=new Scanner(System.in);
		Student stu=new Student();
		while(flag){
			MsgSys.Menu();
			iIndex=scanner.nextInt();
			switch (iIndex) {
			case 1:
				System.out.println("请输入分别学生的学号、姓名、年龄:");
				stu.setStuId(scanner.next());
				stu.setStuName(scanner.next());
				stu.setStuAge(scanner.nextInt());
				if(stuM.AddStuent(stu)){
					System.out.println("添加成功！");;
				
				}
				stu=null;
				break;
			case 2:
				System.out.println("请输入学生的学号:");
				String strId=scanner.next();
				stu=stuM.searchStu(strId);
				if(stu==null){
					System.out.println("未找到该学生的信息");
				}
				else if(stuM.DelStudent(stu)){
					System.out.println("删除成功！");
				}
				else {
					System.out.println("未删除成功！");
				}
				break;
			case 3:
				System.out.print("请输入修改学生的学号：");
				strId=scanner.next();
				stu=stuM.searchStu(strId);
				Student stuC=new Student();
				if(stu==null){
					System.out.println("未找到该学生的信息");
				}
				else {
					System.out.println("输入修改的信息，学号、姓名、年龄:");
					stuC.setStuId(scanner.next());
					stuC.setStuName(scanner.next());
					stuC.setStuAge(scanner.nextInt());
					if(stuM.AlterStuInf(stu, stuC))
						System.out.println("修改成功");
					else {
						System.out.println("修改失败");
					}
				}
				stu=null;
				stuC=null;
				break;
			case 4:
				System.out.println("请输入学生的学号:");
				strId=scanner.next();
				stu=stuM.searchStu(strId);
				if(stu==null){
					System.out.println("未找到该学生的信息");
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

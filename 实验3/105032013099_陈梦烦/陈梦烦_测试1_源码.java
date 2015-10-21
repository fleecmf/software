package cmf.stu;

import java.util.ArrayList;
import java.util.Iterator;

import com.sun.org.apache.bcel.internal.generic.NEW;
import com.sun.xml.internal.ws.client.Stub;

public class StuManage {
	
	private ArrayList<Student> stuList;
	
	public StuManage() {
		super();
		this.stuList = new ArrayList<Student>();
	}
	
	public boolean AddStuent(Student stu) {
		if(stu!=null){
			if(stu.getStuId()==null){
				return false;
			}
			if (stu.getStuName()==null) {
				return false;
			}
			if(stuList.add(stu)){
				
				return true;	
			}
			else {
			return false;	
			}
			
		}
		return false;
	}
	//删除学生信息
	public boolean DelStudent(Student stu) {
		int index=stuList.indexOf(stu);
		if(index==-1){
			return false;
		}
		stuList.remove(index);
		return true;
	}
	//修改学生的信息
	public boolean AlterStuInf(Student stu,Student stuC) {
		int index=stuList.indexOf(stu);
		if(index==-1||stuC==null||stu==null){
			return false;
		}
		stuList.set(index, stuC);
		return true;	
	}
	//按照学生id 查询指定学生信息
	public Student searchStu(String stuId) {
		if(stuId==null){
			return null;
		}
		if(stuList.isEmpty()){
			return null;
		}
		Iterator<Student> iterator=stuList.iterator();
		while (iterator.hasNext()) {
			Student temStu=iterator.next();
			if(temStu.getStuId().equals(stuId))
				return temStu;
		}
			return null;
	}
	//浏览所有学生的信息
	public void showStuInf() {
		Iterator<Student> iterator=stuList.iterator();
		while (iterator.hasNext()) {
			iterator.next().toString();	
		}
	}
}

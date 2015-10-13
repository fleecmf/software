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
			stuList.add(stu);
			return true;
		}
		return false;
	}
	//ɾ��ѧ����Ϣ
	public boolean DelStudent(Student stu) {
		int index=stuList.indexOf(stu);
		if(index==-1){
			return false;
		}
		stuList.remove(index);
		return true;
	}
	//�޸�ѧ������Ϣ
	public boolean AlterStuInf(Student stu,Student stuC) {
		int index=stuList.indexOf(stu);
		if(index==-1||stuC==null||stu==null){
			return false;
		}
		stuList.set(index, stuC);
		return true;	
	}
	//����ѧ��id ��ѯָ��ѧ����Ϣ
	public Student searchStu(String stuId) {
		Iterator<Student> iterator=stuList.iterator();
		while (iterator.hasNext()) {
			Student temStu=iterator.next();
			if(temStu.getStuId().equals(stuId))
				return temStu;
		}
			return null;
	}
	//�������ѧ������Ϣ
	public void showStuInf() {
		Iterator<Student> iterator=stuList.iterator();
		while (iterator.hasNext()) {
			iterator.next().toString();	
		}
	}
}

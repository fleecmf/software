package cmf.stu;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;

public class StuManageTest {
	
	private StuManage stuManage=new StuManage();
	Student student1=new Student();
	Student student2=new Student(null,"chen",18);
	Student student3=new Student("105",null,18);
	Student student4=new Student("105","chen",18);
	

	//����AddStudent����
	//��studentΪ�յ�ʱ�򣬵�idΪ�յ�ʱ�򣬵�nameΪ�յ�ʱ�����
	//���ж���ִ��ͨ·���ԣ���֤ÿһ�����룬ÿ����֧����������
	@Test
	public void testAddStuent1() {
		boolean expected=false;//����ֵΪ����
		assertEquals(expected,stuManage.AddStuent(student1));
		
	}
	@Test
	public void testAddStuent2() {
		boolean expected=false;//����ֵΪ����
		assertEquals(expected,stuManage.AddStuent(student2));
	}
	@Test
	public void testAddStuent3() {
		boolean expected=false;//����ֵΪ����
		assertEquals(expected,stuManage.AddStuent(student3));
	}
	@Test
	public void testAddStuent4() {
		boolean expected=true;//����ֵΪ�����ȷ��
		assertEquals(expected,stuManage.AddStuent(student4));
	}
	@Ignore
	@Test
	public void testAlterStuInf() {
		fail("Not yet implemented");
	}

}

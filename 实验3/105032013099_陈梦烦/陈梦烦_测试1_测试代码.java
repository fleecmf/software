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
	

	//测试AddStudent方法
	//当student为空的时候，当id为空的时候，当name为空的时候测试
	//所有独立执行通路测试：保证每一条代码，每个分支都经过测试
	@Test
	public void testAddStuent1() {
		boolean expected=false;//期望值为错误
		assertEquals(expected,stuManage.AddStuent(student1));
		
	}
	@Test
	public void testAddStuent2() {
		boolean expected=false;//期望值为错误
		assertEquals(expected,stuManage.AddStuent(student2));
	}
	@Test
	public void testAddStuent3() {
		boolean expected=false;//期望值为错误
		assertEquals(expected,stuManage.AddStuent(student3));
	}
	@Test
	public void testAddStuent4() {
		boolean expected=true;//期望值为添加正确的
		assertEquals(expected,stuManage.AddStuent(student4));
	}
	@Ignore
	@Test
	public void testAlterStuInf() {
		fail("Not yet implemented");
	}

}

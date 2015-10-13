package cmf.stu;

public class Student {
	private String stuId;
	private String stuName;
	private int stuAge;
	public Student () {
		 stuId=null;
		 stuName=null;
		 stuAge=0;

	}
	public Student(String stuId, String stuName, int stuAge) {
		super();
		this.stuId = stuId;
		this.stuName = stuName;
		this.stuAge = stuAge;
	}
	public String getStuId() {
		return stuId;
	}
	public void setStuId(String stuId) {
		this.stuId = stuId;
	}
	public String getStuName() {
		return stuName;
	}
	public void setStuName(String stuName) {
		this.stuName = stuName;
	}
	public int getStuAge() {
		return stuAge;
	}
	public void setStuAge(int stuAge) {
		this.stuAge = stuAge;
	}
	@Override
	public String toString() {
		System.out.println("[Ñ§ºÅ£º" + stuId + ", ĞÕÃû£º" + stuName + ", ÄêÁä£º"
				+ stuAge +"]"); 
		return stuId;
	}
	
}

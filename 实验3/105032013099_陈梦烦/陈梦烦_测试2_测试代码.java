import static org.junit.Assert.*;

import org.junit.Test;


public class PrimeTest {

	@Test
	public void test1() {
		
		int Nmax=0;
		int expect=-1;
		assertEquals(expect, Prime.cNumber(Nmax));
	}
	@Test
	public void test2() {
		
		int Nmax=-2147483647;
		int expect=-1;
		assertEquals(expect, Prime.cNumber(Nmax));
	}
	@Test
	public void test3() {
		
		int Nmax=2147483647;
		int expect=-1;
		assertEquals(expect, Prime.cNumber(Nmax));
	}
	@Test
	public void test4() {
		
		int Nmax=2;
		int expect=1;
		assertEquals(expect, Prime.cNumber(Nmax));
	}
	@Test
	public void test5() {
		
		int Nmax=2000000;
		int expect=148933;
		assertEquals(expect, Prime.cNumber(Nmax));
	}

}
